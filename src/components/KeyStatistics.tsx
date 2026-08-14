"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { KEY_STATISTICS } from "@/lib/constants";

// KEY_STATISTICS values are single display strings (e.g. "6,50,000 sq.ft",
// "2.5 acres", "90%+") rather than a separate number/unit pair. Split on the
// first space where one exists so the leading figure can get the bold
// number treatment and the trailing word(s) the smaller unit treatment;
// values with no space (e.g. "90%+", "2006–2009") render as a single block.
function splitStatValue(value: string): { number: string; unit: string } {
  const spaceIndex = value.indexOf(" ");
  if (spaceIndex === -1) return { number: value, unit: "" };
  return { number: value.slice(0, spaceIndex), unit: value.slice(spaceIndex + 1) };
}

export default function KeyStatistics() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-wide">
        <div className="grid gap-8 md:grid-cols-[55%_45%] md:items-stretch md:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-first aspect-video w-full overflow-hidden rounded-xl shadow-xl md:order-last md:aspect-auto md:h-full md:rounded-2xl"
          >
            <Image
              src="/images/exterior day.png"
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

            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {KEY_STATISTICS.map((stat, i) => {
                const { number, unit } = splitStatValue(stat.value);
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.06 }}
                    className="rounded-lg bg-white p-3 shadow-sm md:p-5"
                  >
                    <div className="font-display text-2xl font-bold text-navy md:text-3xl">
                      {number}
                      {unit && (
                        <span className="ml-1 text-sm text-emerald-600">{unit}</span>
                      )}
                    </div>
                    <p className="mt-1 text-xs uppercase tracking-wider text-navy/50">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <p className="mt-8 text-base leading-relaxed text-navy/70">
              TECCI Park, our flagship IT park, is a Grade A commercial
              development on Chennai&rsquo;s premier OMR IT corridor. Designed
              by Architects TEAM 3 of Singapore and developed by the
              multi-billion dollar Buhari Group.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
