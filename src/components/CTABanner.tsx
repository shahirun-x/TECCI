"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-purple py-20 text-white">
      <div className="container-wide flex flex-col items-center gap-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          Ready to find your space?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            href="/contact"
            className="inline-block rounded-sm bg-white px-8 py-3.5 text-sm font-medium tracking-wide text-purple transition-colors hover:bg-cream"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
