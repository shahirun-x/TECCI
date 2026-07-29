"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HERO_STATS, SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="overview" className="relative flex h-screen min-h-[720px] flex-col overflow-hidden bg-navy scroll-mt-header">
      <Image
        src="/images/banner.jpg"
        alt="TECCI Park building exterior"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/40 to-navy" />

      <div className="container-wide relative z-10 flex flex-1 flex-col items-center justify-center text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-5 text-xs font-light uppercase tracking-[0.35em] text-teal sm:text-sm"
        >
          {SITE.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
        >
          Where Technology Meets Sustainability
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 max-w-2xl text-base font-light text-white/80 sm:text-lg"
        >
          Chennai&rsquo;s premier LEED Silver certified Grade A IT Park on the OMR corridor
        </motion.p>
      </div>

      <div className="container-wide relative z-10 pb-10 sm:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4 sm:gap-4"
        >
          {HERO_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              className="text-white"
            >
              <div className="font-display text-3xl font-bold leading-none sm:text-4xl">
                {stat.value}
                <span className="ml-1 text-lg font-medium text-teal sm:text-xl">{stat.unit}</span>
              </div>
              <p className="mt-2 text-xs font-light uppercase tracking-wider text-white/60 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-6 text-xs font-light text-white/40"
        >
          All data as of 2026
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-white/40 p-1.5"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-white/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
