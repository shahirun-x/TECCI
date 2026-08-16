import type { Metadata } from "next";
import { CONTACT, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the TECCI Park website — how we collect and use your information.",
  alternates: { canonical: "https://www.teccipark.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="section-pad bg-white pt-32">
      <div className="container-wide max-w-3xl">
        <h1 className="text-3xl font-semibold text-navy sm:text-4xl">Privacy Policy</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-gray">
          <p>
            {SITE.legalEntity} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects
            your privacy. This policy explains what information we collect
            through this website and how we use it.
          </p>
          <p>
            <strong className="text-navy">Information we collect:</strong> when
            you submit an enquiry through our contact form, we collect your
            name, email address, phone number, company name, and message
            content in order to respond to your enquiry.
          </p>
          <p>
            <strong className="text-navy">How we use it:</strong> information
            submitted is used solely to respond to leasing and general
            enquiries. We do not sell or share your information with third
            parties for marketing purposes.
          </p>
          <p>
            <strong className="text-navy">Contact:</strong> for any privacy
            related questions, write to us at{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-purple hover:text-purple-dark">
              {CONTACT.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
