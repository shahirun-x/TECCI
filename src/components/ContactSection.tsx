"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";
import { CONTACT } from "@/lib/constants";

const HEADING_LINES = ["Space that scales.", "Terms that flex.", "Buildings that last."];

const CONTACT_CARDS = [
  { icon: FaMapMarkerAlt, label: "Address", value: `${CONTACT.siteAddress.line1}, ${CONTACT.siteAddress.line2}, ${CONTACT.siteAddress.city}`, href: undefined },
  { icon: FaPhone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
  { icon: FaEnvelope, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="grid min-h-screen scroll-mt-header lg:grid-cols-[45fr_55fr]"
    >
      <div className="relative flex flex-col justify-center overflow-hidden bg-navy px-6 py-20 text-white md:px-12 lg:py-24">
        <motion.div
          aria-hidden="true"
          style={{ y: orbY }}
          className="pointer-events-none absolute inset-0"
        >
          <div className="contact-orb-pulse absolute left-1/2 top-1/3 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl" />
        </motion.div>

        <div className="relative z-10 max-w-lg">
          <p className="text-sm font-medium uppercase tracking-widest text-teal-light">
            Contact
          </p>

          <h2 className="mt-4 font-display text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            {HEADING_LINES.map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-base leading-relaxed text-white/70"
          >
            Grade A space on Chennai&rsquo;s premier IT corridor, leased
            directly with the owners who built it. No middlemen, no rigid
            templates &mdash; just terms that fit how your business actually
            grows.
          </motion.p>

          <div className="mt-10 space-y-4">
            {CONTACT_CARDS.map((card, i) => {
              const Icon = card.icon;
              const content = (
                <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:bg-white/10">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                      {card.label}
                    </p>
                    <p className="mt-1 text-sm text-white/80">{card.value}</p>
                  </div>
                </div>
              );
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
                >
                  {card.href ? (
                    <a href={card.href} className="block">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex items-center bg-cream px-6 py-20 md:px-12 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xl"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
