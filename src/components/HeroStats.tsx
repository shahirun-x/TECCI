"use client";

import { motion } from "framer-motion";
import { HERO_STATS } from "@/lib/constants";

export default function HeroStats() {
  return (
    <section className="border-t border-white/10 bg-navy py-14">
      <div className="container-wide">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {HERO_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="font-display text-[36px] font-bold leading-none text-white sm:text-[48px]">
                {stat.value}
                <span className="ml-1.5 text-lg font-medium text-teal-light sm:text-xl">
                  {stat.unit}
                </span>
              </div>
              <p className="mt-3 text-[12px] uppercase tracking-[0.1em] text-white/60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 text-left text-xs text-white/40"
        >
          All data as of 2026
        </motion.p>
      </div>
    </section>
  );
}
