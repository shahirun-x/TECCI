"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import GalleryGrid from "@/components/GalleryGrid";

export default function GalleryPreview() {
  return (
    <section id="gallery" className="section-pad bg-white scroll-mt-header">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-teal">
            Gallery
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
            A Closer Look
          </h2>
        </div>

        <div className="mt-12">
          <GalleryGrid />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center"
        >
          <Link
            href="/gallery"
            className="inline-block border-b-2 border-purple pb-1 text-sm font-medium text-purple transition-colors hover:border-teal hover:text-teal"
          >
            View Full Gallery →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
