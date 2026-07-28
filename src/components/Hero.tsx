"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden bg-navy">
      <Image
        src="/images/banner.jpg"
        alt="TECCI Park building exterior"
        fill
        priority
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/50 to-navy" />

      <div className="container-wide relative z-10 flex flex-col items-center text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-sm font-light uppercase tracking-[0.4em] text-teal"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#specs"
            className="rounded-sm bg-purple px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-purple-dark"
          >
            Explore Spaces
          </a>
          <Link
            href="/contact"
            className="rounded-sm border border-white/40 px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-white/10"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/40 p-1.5"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-white/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
