"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const inputClass =
  "mt-2 w-full rounded-xl border border-navy/10 bg-white px-5 py-4 text-sm text-navy outline-none transition focus:border-purple focus:ring-2 focus:ring-purple/20";
const labelClass = "mb-2 block text-sm font-medium text-navy/70";

const EMPTY_FORM = { name: "", email: "", phone: "", company: "", message: "", honeypot: "" };

export default function ContactForm() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitStatus("success");
        setFormData(EMPTY_FORM);
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.error || "Something went wrong.");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitStatus === "success") {
    return (
      <div className="flex flex-col items-center rounded-xl border border-navy/10 bg-white px-6 py-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-emerald-500" strokeWidth={1.5} />
        <h3 className="mt-4 text-lg font-semibold text-navy">Message sent successfully!</h3>
        <p className="mt-2 text-sm text-navy/60">
          We&rsquo;ve sent a confirmation to your email. Our team will reply within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitStatus("idle")}
          className="mt-6 rounded-lg border border-navy/10 px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-navy/5"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        style={{ position: "absolute", left: "-9999px" }}
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className={inputClass}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={inputClass}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            className={inputClass}
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={inputClass}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <p className="flex items-center gap-2 text-xs text-navy/50">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Response within 24 hours
      </p>

      {submitStatus === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-navy py-4 text-sm font-medium tracking-wide text-white transition-colors hover:bg-purple disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </button>
    </form>
  );
}
