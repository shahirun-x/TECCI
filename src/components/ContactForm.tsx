"use client";

import { useState, FormEvent } from "react";

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
          <label className="text-sm font-medium text-navy" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-2 w-full rounded-sm border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-purple"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-navy" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-sm border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-purple"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-navy" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-2 w-full rounded-sm border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-purple"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-navy" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            className="mt-2 w-full rounded-sm border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-purple"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-navy" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-sm border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-purple"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 w-full rounded-sm bg-purple px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-purple-dark disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
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
