"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { MASTER_PLAN } from "@/lib/constants";

export default function PlansSection() {
  return (
    <section id="plans" className="section-pad bg-white scroll-mt-header">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-teal">
            Plans
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
            Master Plan
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-lg bg-navy"
        >
          <Image
            src="/images/leaflet.jpg"
            alt="TECCI Park site plan"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />

          <div className="absolute inset-x-0 bottom-0 grid grid-cols-1 gap-4 p-6 text-white sm:grid-cols-3 sm:p-10">
            {MASTER_PLAN.blocks.map((block) => (
              <div key={block.name} className="border-l-2 border-teal pl-4">
                <p className="font-display text-xl font-bold">{block.name}</p>
                <p className="text-sm text-white/70">{block.area} — {block.floors}</p>
              </div>
            ))}
            <div className="border-l-2 border-teal pl-4">
              <p className="font-display text-xl font-bold">Levels</p>
              <p className="text-sm text-white/70">{MASTER_PLAN.levels}</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 text-center">
          <a
            href={MASTER_PLAN.pdf}
            download
            className="inline-flex items-center gap-2 rounded-sm bg-purple px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-purple-dark"
          >
            <HiOutlineDocumentArrowDown className="text-lg" />
            Download Floor Plan PDF
          </a>
        </div>
      </div>
    </section>
  );
}
