"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { KEY_STATISTICS } from "@/lib/constants";

export default function KeyStatistics() {
  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-teal">
              Key Statistics
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
              The Numbers Behind TECCI Park
            </h2>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {KEY_STATISTICS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="border-l-2 border-purple pl-4"
                >
                  <div className="font-display text-xl font-bold text-navy sm:text-2xl">
                    {stat.value}
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-wide text-gray sm:text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="mt-10 max-w-2xl text-base leading-relaxed text-gray">
              TECCI Park, our flagship IT park, is a Grade A commercial
              development on Chennai&rsquo;s premier OMR IT corridor. Designed
              by Architects TEAM 3 of Singapore and developed by the
              multi-billion dollar Buhari Group.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-lg"
          >
            <Image
              src="/images/exterior day.png"
              alt="TECCI Park building"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
