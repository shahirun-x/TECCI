"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GREEN_INITIATIVES } from "@/lib/constants";

export default function GreenBuilding() {
  return (
    <section id="approvals" className="section-pad bg-white scroll-mt-header">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-teal">
            Approvals — Green Campus
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
            LEED Silver Certified for Core &amp; Shell
          </h2>
          <p className="mt-4 text-base font-light text-gray">
            Certified by the U.S. Green Building Council (USGBC). The Buhari
            Group is a founding member of the Indian Green Building Council
            (IGBC). TECCI Park is the only Silver certified green building
            available for lease on OMR / Rajiv Gandhi Salai.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-cream"
          >
            <Image
              src="/images/leed-certificate.jpg"
              alt="LEED Silver Certification"
              fill
              className="object-contain p-6"
            />
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2">
            {GREEN_INITIATIVES.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <h3 className="text-base font-semibold text-navy">{h.title}</h3>
                <p className="mt-2 text-sm font-light text-gray">{h.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
