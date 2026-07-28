"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-cream py-24">
      <div className="container-wide grid gap-12 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-teal">
            About TECCI Park
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
            Technology @ ECCI
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray">
            TECCI Park stands at the intersection of engineering excellence and
            environmental responsibility — a Grade A IT park built for the
            enterprises shaping Chennai&rsquo;s technology corridor. Designed by
            Architects TEAM 3 of Singapore and developed by the multi-billion
            dollar Buhari Group through East Coast Constructions and Industries
            Limited (ECCI).
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block border-b-2 border-purple pb-1 text-sm font-medium text-purple transition-colors hover:border-teal hover:text-teal"
          >
            Discover Our Heritage →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="border-l-4 border-purple bg-white p-8 shadow-sm"
        >
          <p className="font-display text-xl text-navy">
            tec·ci <span className="font-body text-base text-gray">|tekē|</span>
          </p>
          <p className="mt-1 text-sm italic text-gray">
            noun (pl. -ies) informal
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy">
            a person who is expert in or enthusiastic about technology
          </p>
        </motion.div>
      </div>
    </section>
  );
}
