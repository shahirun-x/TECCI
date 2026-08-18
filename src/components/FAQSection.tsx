"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";
import ScrollReveal from "@/components/ScrollReveal";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

function relatedIndexes(activeIndex: number, count = 3) {
  const related: number[] = [];
  for (let offset = 1; related.length < count && offset < FAQ_ITEMS.length; offset++) {
    related.push((activeIndex + offset) % FAQ_ITEMS.length);
  }
  return related;
}

export default function FAQSection() {
  const [activeId, setActiveId] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(null);
  const active = FAQ_ITEMS[activeId];
  const related = relatedIndexes(activeId);

  return (
    <section id="faq" className="scroll-mt-header bg-cream py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-wide">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-widest text-teal">
            Common Questions
          </p>
        </ScrollReveal>

        {/* Desktop: sticky 2-column layout */}
        <div className="mt-6 hidden gap-12 lg:grid lg:grid-cols-[1fr_2fr]">
          <div>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-4xl font-bold leading-tight text-navy md:text-5xl">
                Everything you need to know.
              </h2>
              <p className="mt-4 text-navy/60">
                If you don&rsquo;t find what you&rsquo;re looking for, our
                team is a message away.
              </p>
            </ScrollReveal>

            <div className="mt-10">
              {FAQ_ITEMS.map((item, i) => {
                const isActive = i === activeId;
                return (
                  <button
                    key={item.question}
                    onClick={() => setActiveId(i)}
                    className={`relative flex w-full items-center justify-between gap-4 border-b border-navy/10 py-4 pl-4 text-left transition ${
                      isActive ? "font-semibold text-navy" : "text-navy/70 hover:text-navy"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-0 h-full w-1 bg-purple" />
                    )}
                    {item.question}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="mb-6 font-display text-2xl font-bold text-navy md:text-3xl">
                {active.question}
              </h3>
              <p className="text-lg leading-relaxed text-navy/70">{active.answer}</p>

              <div className="mt-10 border-t border-navy/10 pt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-navy/40">
                  Related
                </p>
                <div className="mt-4 space-y-3">
                  {related.map((idx) => (
                    <button
                      key={FAQ_ITEMS[idx].question}
                      onClick={() => setActiveId(idx)}
                      className="block text-left text-sm text-purple transition-colors hover:text-purple-dark"
                    >
                      {FAQ_ITEMS[idx].question} &rarr;
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile: accordion fallback */}
        <div className="mt-6 lg:hidden">
          <h2 className="font-display text-3xl font-bold leading-tight text-navy">
            Everything you need to know.
          </h2>
          <p className="mt-3 text-navy/60">
            If you don&rsquo;t find what you&rsquo;re looking for, our team
            is a message away.
          </p>

          <div className="mt-8 divide-y divide-border">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = mobileOpen === i;
              return (
                <div key={item.question}>
                  <button
                    onClick={() => setMobileOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-medium text-navy">{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-navy/40 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      strokeWidth={2}
                    />
                  </button>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-gray">{item.answer}</p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
