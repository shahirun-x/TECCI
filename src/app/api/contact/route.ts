import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

// Simple in-memory rate limiter (per IP, per hour)
// For production scale, use Vercel KV or Upstash Redis
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3; // 3 submissions per hour per IP
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour in ms

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) return false;

  record.count++;
  return true;
}

// Cleanup old entries periodically (prevent memory leak)
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetAt) rateLimitMap.delete(ip);
  }
}, 10 * 60 * 1000); // every 10 min

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  honeypot?: string;
};

export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again in an hour." },
        { status: 429 }
      );
    }

    const body: ContactBody = await request.json();
    const { name, email, phone, company, message, honeypot } = body;

    // Honeypot check — silent spam trap
    if (honeypot) {
      return NextResponse.json({ success: true }); // Fake success to bot
    }

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Length limits (basic spam prevention)
    if (name.length > 100 || email.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { error: "Input too long." },
        { status: 400 }
      );
    }

    const fromName = process.env.CONTACT_FROM_NAME || "TECCI Park";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
    const from = `${fromName} <${fromEmail}>`;

    const toEmails = [
      process.env.CONTACT_TO_EMAIL!,
      process.env.CONTACT_QA_EMAIL!,
    ].filter(Boolean);

    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Sanitize for HTML (basic — Resend also sanitizes)
    const esc = (s: string) =>
      s.replace(
        /[&<>"']/g,
        (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] || c)
      );

    // === Notification email to TECCI Park team ===
    const notificationHtml = `
<!DOCTYPE html>
<html>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1a1a2e; background: #f8f7f4;">
  <div style="background: white; border-radius: 12px; padding: 32px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
    <div style="border-left: 4px solid #4A2D8B; padding-left: 16px; margin-bottom: 24px;">
      <p style="margin: 0; color: #1A7A6D; font-size: 12px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;">New Enquiry</p>
      <h1 style="margin: 4px 0 0 0; font-size: 24px; color: #1a1a2e;">TECCI Park Contact Form</h1>
    </div>

    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #666; width: 30%; vertical-align: top;">Name</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${esc(name)}</td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #666; vertical-align: top;">Email</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #eee;"><a href="mailto:${esc(email)}" style="color: #4A2D8B; text-decoration: none;">${esc(email)}</a></td>
      </tr>
      ${phone ? `<tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #666; vertical-align: top;">Phone</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #eee;"><a href="tel:${esc(phone)}" style="color: #4A2D8B; text-decoration: none;">${esc(phone)}</a></td>
      </tr>` : ""}
      ${company ? `<tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #666; vertical-align: top;">Company</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${esc(company)}</td>
      </tr>` : ""}
      <tr>
        <td style="padding: 12px 0; font-weight: 600; color: #666; vertical-align: top;">Message</td>
        <td style="padding: 12px 0; white-space: pre-wrap;">${esc(message)}</td>
      </tr>
    </table>

    <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #eee; font-size: 12px; color: #999;">
      <p style="margin: 0;">Submitted: ${submittedAt}</p>
      <p style="margin: 4px 0 0 0;">Source: tecci.vercel.app contact form</p>
    </div>
  </div>
</body>
</html>
    `.trim();

    const notificationText = `New TECCI Park Contact Form Enquiry

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}\n` : ""}${company ? `Company: ${company}\n` : ""}
Message:
${message}

Submitted: ${submittedAt}
    `.trim();

    // === Auto-reply to submitter ===
    const autoReplyHtml = `
<!DOCTYPE html>
<html>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1a1a2e; background: #f8f7f4;">
  <div style="background: white; border-radius: 12px; padding: 32px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
    <div style="text-align: center; margin-bottom: 24px;">
      <h1 style="margin: 0; font-size: 28px; color: #4A2D8B; font-weight: bold;">TECCI Park</h1>
      <p style="margin: 4px 0 0 0; color: #999; font-style: italic;">complete harmony</p>
    </div>

    <p style="font-size: 16px; line-height: 1.6;">Dear ${esc(name)},</p>

    <p style="font-size: 16px; line-height: 1.6;">Thank you for your enquiry about TECCI Park. We've received your message and our team will get back to you within 24 hours.</p>

    <p style="font-size: 16px; line-height: 1.6;">In the meantime, feel free to explore more about our Grade A LEED Silver certified IT park:</p>

    <div style="background: #f8f7f4; border-radius: 8px; padding: 20px; margin: 24px 0;">
      <p style="margin: 0 0 8px 0;"><a href="https://tecci.vercel.app/#available-spaces" style="color: #4A2D8B; text-decoration: none;">→ View available spaces</a></p>
      <p style="margin: 0 0 8px 0;"><a href="https://tecci.vercel.app/gallery" style="color: #4A2D8B; text-decoration: none;">→ Gallery</a></p>
      <p style="margin: 0 0 8px 0;"><a href="https://tecci.vercel.app/#location" style="color: #4A2D8B; text-decoration: none;">→ Location & connectivity</a></p>
      <p style="margin: 0;"><a href="https://tecci.vercel.app/about" style="color: #4A2D8B; text-decoration: none;">→ About us</a></p>
    </div>

    <p style="font-size: 16px; line-height: 1.6;">Warm regards,<br><strong>The TECCI Park Team</strong></p>

    <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #eee; font-size: 12px; color: #999; text-align: center;">
      <p style="margin: 0;">TECCI Park · New No. 173, Rajiv Gandhi Salai · Sholinganallur · Chennai 600 119</p>
      <p style="margin: 4px 0 0 0;"><a href="https://tecci.vercel.app" style="color: #999;">tecci.vercel.app</a> · info@teccipark.com</p>
    </div>
  </div>
</body>
</html>
    `.trim();

    const autoReplyText = `Dear ${name},

Thank you for your enquiry about TECCI Park. We've received your message and our team will get back to you within 24 hours.

In the meantime, feel free to explore:
- Available spaces: https://tecci.vercel.app/#available-spaces
- Gallery: https://tecci.vercel.app/gallery
- Location: https://tecci.vercel.app/#location

Warm regards,
The TECCI Park Team

---
TECCI Park
New No. 173, Rajiv Gandhi Salai, Sholinganallur, Chennai 600 119
tecci.vercel.app · info@teccipark.com
    `.trim();

    // Send both emails in parallel
    const [notificationResult, autoReplyResult] = await Promise.all([
      resend.emails.send({
        from,
        to: toEmails,
        replyTo: email,
        subject: `New Enquiry from ${name}${company ? ` (${company})` : ""}`,
        html: notificationHtml,
        text: notificationText,
      }),
      resend.emails.send({
        from,
        to: email,
        subject: "Thank you for contacting TECCI Park",
        html: autoReplyHtml,
        text: autoReplyText,
      }),
    ]);

    // Log any Resend errors (visible in Vercel logs)
    if (notificationResult.error) console.error("Notification email error:", notificationResult.error);
    if (autoReplyResult.error) console.error("Auto-reply email error:", autoReplyResult.error);

    // If notification failed, treat as full failure (auto-reply optional)
    if (notificationResult.error) {
      return NextResponse.json(
        { error: "Failed to send. Please try again or email info@teccipark.com directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
