"use client";

import { motion, useInView, useReducedMotion, animate } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { KEY_STATISTICS } from "@/lib/constants";

// Extracts a leading numeric portion from a stat string (e.g. "10,00,000"
// out of "10,00,000") so it can be counted up from 0. Only treated as
// countable if re-formatting the target with Indian digit grouping
// reproduces the original digits exactly — this is what correctly skips
// "2006–2009" (2006 would gain a comma: "2,006") while still animating
// every sq.ft/acres/MNC figure, whose grouping already matches.
function parseCountable(raw: string) {
  const match = raw.match(/^(\D*)([\d,]+)(.*)$/);
  if (!match) return null;
  const [, prefix, digits, suffix] = match;
  const target = Number(digits.replace(/,/g, ""));
  if (!Number.isFinite(target)) return null;
  if (target.toLocaleString("en-IN") !== digits) return null;
  return { prefix, target, suffix };
}

function StatNumber({ raw }: { raw: string }) {
  const parsed = parseCountable(raw);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(parsed ? "0" : raw);

  useEffect(() => {
    if (!parsed || !isInView) return;

    if (prefersReducedMotion) {
      setDisplay(parsed.target.toLocaleString("en-IN"));
      return;
    }

    const controls = animate(0, parsed.target, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v).toLocaleString("en-IN")),
    });
    return () => controls.stop();
  }, [isInView, parsed, prefersReducedMotion]);

  return (
    <div
      ref={ref}
      className="whitespace-nowrap font-display text-xl font-bold leading-tight text-navy md:text-2xl"
    >
      {parsed ? `${parsed.prefix}${display}${parsed.suffix}` : raw}
    </div>
  );
}

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

            <div className="mt-8 grid grid-cols-2 gap-4">
              {KEY_STATISTICS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="rounded-lg bg-white p-4 shadow-sm md:p-6"
                >
                  <StatNumber raw={stat.number} />
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
