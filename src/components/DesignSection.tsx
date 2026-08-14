"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DESIGN_HIGHLIGHTS } from "@/lib/constants";

export default function DesignSection() {
  return (
    <section id="design" className="section-pad bg-white scroll-mt-header">
      <div className="container-wide grid gap-12 lg:grid-cols-2 lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-teal">
            Design
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
            Architecture with Intent
          </h2>

          <dl className="mt-10 divide-y divide-border">
            {DESIGN_HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="grid grid-cols-[100px_1fr] gap-4 py-4 sm:grid-cols-[130px_1fr]"
              >
                <dt className="text-sm font-semibold text-navy">{item.label}</dt>
                <dd className="text-sm leading-relaxed text-gray">{item.detail}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-lg lg:sticky lg:top-24"
        >
          <Image
            src="/images/banner.jpg"
            alt="TECCI Park façade detail"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
