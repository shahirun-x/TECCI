"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { KEY_STATISTICS } from "@/lib/constants";

export default function KeyStatistics() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-wide">
        <div className="grid gap-8 md:grid-cols-2 md:items-stretch md:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-first aspect-video w-full overflow-hidden rounded-xl shadow-xl md:order-last md:aspect-auto md:h-full md:rounded-2xl"
          >
            <Image
              src="/images/gallery/exterior-day.png"
              alt="TECCI Park building"
              fill
              className="object-cover"
            />
          </motion.div>

          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">
              Key Statistics
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
              The Numbers Behind TECCI Park
            </h2>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {KEY_STATISTICS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="rounded-lg bg-white p-4 shadow-sm md:p-6"
                >
                  <div className="whitespace-nowrap font-display text-xl font-bold leading-tight text-navy md:text-2xl">
                    {stat.number}
                  </div>
                  {stat.unit && (
                    <div className="mt-1 text-sm text-emerald-600">
                      {stat.unit}
                    </div>
                  )}
                  <p className="mt-2 text-xs uppercase tracking-wider text-navy/50">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="mt-8 text-base leading-relaxed text-navy/70">
              TECCI Park is a Grade A commercial development on
              Chennai&rsquo;s premier OMR IT corridor, spanning 5 acres with
              two flagship blocks. Designed by TEAM 3 Singapore in association
              with Eskay Designs India, and developed by the Buhari Group
              &mdash; a legacy enterprise with landmark developments across
              Chennai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
