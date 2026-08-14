"use client";

import { motion } from "framer-motion";
import { HERO_STATS } from "@/lib/constants";

// HERO_STATS always has exactly 4 items rendered as a 2x2 grid on mobile
// and a single 4-column row on desktop — dividers are computed by index
// since CSS `divide-*` utilities don't account for wrapping grids.
function dividerClass(i: number) {
  const classes = ["border-white/20"];
  if (i % 2 === 1) classes.push("border-l");
  if (i >= 2) classes.push("border-t");
  if (i > 0) classes.push("sm:border-l");
  if (i === 0) classes.push("sm:border-l-0");
  classes.push("sm:border-t-0");
  return classes.join(" ");
}

export default function HeroStats() {
  return (
    <section className="relative z-20 -mt-12 md:-mt-16">
      <div className="container-wide">
        <div className="border border-white/10 bg-navy/80 px-6 py-6 backdrop-blur-md sm:px-8 md:rounded-lg">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {HERO_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`px-4 py-3 ${dividerClass(i)}`}
              >
                <div className="font-display text-4xl font-bold leading-none text-white">
                  {stat.value}
                  <span className="ml-1.5 text-lg font-medium text-emerald-400">
                    {stat.unit}
                  </span>
                </div>
                <p className="mt-3 text-xs uppercase tracking-widest text-white/60">
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
