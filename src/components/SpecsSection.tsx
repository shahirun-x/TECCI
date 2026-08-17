"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SPEC_CATEGORIES } from "@/lib/constants";

export default function SpecsSection() {
  return (
    <section id="specs" className="section-pad bg-navy text-white scroll-mt-header">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-teal-light">
            Specifications
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Engineered for Enterprise
          </h2>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {SPEC_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <h3 className="text-base font-semibold text-teal-light">{cat.title}</h3>
              <ul className="mt-3 space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm font-light leading-relaxed text-white/70">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/infrastructure"
            className="inline-block border-b-2 border-teal-light pb-1 text-sm font-medium text-teal-light transition-colors hover:border-white hover:text-white"
          >
            View Full Specifications →
          </Link>
        </div>
      </div>
    </section>
  );
}
