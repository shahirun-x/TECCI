"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section id="promoters" className="section-pad bg-cream scroll-mt-header">
      <div className="container-wide grid gap-12 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-teal">
            Promoters
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
            Developed by Buhari Group
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray">
            An internationally renowned conglomerate with interests spanning
            construction, coal mining, electronics, real estate, and shipping.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray">
            A legacy enterprise with landmark developments across Chennai
            including BSA Crescent University, Chennai Citi Centre, and other
            iconic structures — four decades of engineering excellence.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block border-b-2 border-purple pb-1 text-sm font-medium text-purple transition-colors hover:border-teal hover:text-teal"
          >
            View Leadership Team →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="border-l-4 border-purple bg-white p-8 shadow-sm"
        >
          <p className="font-display text-xl text-navy">
            tec·ci <span className="font-body text-base text-gray">|tekē|</span>
          </p>
          <p className="mt-1 text-sm italic text-gray">
            noun (pl. -ies) informal
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy">
            a person who is expert in or enthusiastic about technology
          </p>
        </motion.div>
      </div>
    </section>
  );
}
