"use client";

import { useState, FormEvent } from "react";
import { ArrowRight } from "lucide-react";

const inputClass =
  "mt-2 w-full rounded-xl border border-navy/10 bg-white px-5 py-4 text-sm text-navy outline-none transition focus:border-purple focus:ring-2 focus:ring-purple/20";
const labelClass = "mb-2 block text-sm font-medium text-navy/70";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
      if (!endpoint) {
        console.log("Contact form submission (no endpoint configured):", Object.fromEntries(data));
        setStatus("success");
        form.reset();
        return;
      }
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="company">
            Company
          </label>
          <input id="company" name="company" className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Message
        </label>
        <textarea id="message" name="message" rows={5} required className={inputClass} />
      </div>

      <p className="flex items-center gap-2 text-xs text-navy/50">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Response within 24 hours
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-navy py-4 text-sm font-medium tracking-wide text-white transition-colors hover:bg-purple disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </button>

      {status === "success" && (
        <p className="text-sm text-teal">Thank you — we&rsquo;ll be in touch shortly.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again or call us directly.</p>
      )}
    </form>
  );
}
