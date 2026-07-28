"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { KEY_STATS } from "@/lib/constants";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section id="specs" className="bg-navy py-16 text-white">
      <div className="container-wide grid grid-cols-2 gap-8 md:grid-cols-5">
        {KEY_STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center"
          >
            <div className="font-display text-3xl font-semibold text-teal sm:text-4xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-xs font-light uppercase tracking-wider text-white/60 sm:text-sm">
              {stat.label}
            </p>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <div className="font-display text-2xl font-semibold text-teal sm:text-3xl">
            LEED Silver
          </div>
          <p className="mt-2 text-xs font-light uppercase tracking-wider text-white/60 sm:text-sm">
            Green Certified
          </p>
        </motion.div>
      </div>
    </section>
  );
}
