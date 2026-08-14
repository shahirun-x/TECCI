"use client";

import { motion } from "framer-motion";
import { HERO_STATS } from "@/lib/constants";

function cellClass(i: number, total: number) {
  const classes = ["px-4", "py-5", "text-center", "border-white/20", "min-h-[110px]", "flex", "flex-col", "items-center", "justify-center"];
  if (i < total - 1) classes.push("border-r");
  if (i < total / 2) classes.push("border-b", "sm:border-b-0");
  return classes.join(" ");
}

export default function HeroStats() {
  return (
    <section className="relative z-10 -mt-12 md:-mt-16">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-xl bg-navy/80 backdrop-blur-md">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {HERO_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cellClass(i, HERO_STATS.length)}
              >
                <div className="font-display text-3xl font-bold leading-none text-white md:text-4xl">
                  {stat.number}
                </div>
                {stat.unit && (
                  <div className="mt-1 text-sm text-emerald-400">
                    {stat.unit}
                  </div>
                )}
                <p className="mt-2 text-xs uppercase tracking-widest text-white/60">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
