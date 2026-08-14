"use client";

import { motion } from "framer-motion";
import { Building2, Handshake, Clock } from "lucide-react";

const INFO_CARDS = [
  {
    icon: Building2,
    title: "Flexible Floor Plates",
    body: "35,000 sq.ft floor plates, subdivisible per requirement",
  },
  {
    icon: Handshake,
    title: "Direct Owner Coordination",
    body: "Space owners engage directly with prospective tenants for pricing and lease terms",
  },
  {
    icon: Clock,
    title: "Minimum 3-Year Lease",
    body: "Owner-determined lease terms, typically starting at 3 years",
  },
];

export default function OfficeAvailability() {
  return (
    <section id="leasing" className="scroll-mt-header bg-gradient-to-br from-navy via-purple to-navy py-20 text-white md:py-28">
      <div className="container-wide text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">
            Office Spaces
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Grade A Office Spaces Available for Lease
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base font-light text-white/70">
            TECCI Park offers premium office spaces ranging from 3,500 to
            35,000 sq.ft &mdash; furnished, warm shell, and bare shell
            configurations across Block A and Block B. Each space is
            owner-managed with direct coordination.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {INFO_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <card.icon className="mx-auto h-8 w-8 text-emerald-400" strokeWidth={1.5} />
              <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm font-light text-white/60">{card.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14"
        >
          <a
            href="#contact"
            className="inline-block rounded-sm bg-white px-10 py-4 text-lg font-semibold tracking-wide text-purple transition-colors hover:bg-white/90"
          >
            Enquire About Available Spaces
          </a>
          <p className="mt-4 text-sm text-white/40">
            Direct connection with space owners. Response within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
