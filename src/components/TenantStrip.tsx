"use client";

import { motion } from "framer-motion";
import { TENANTS } from "@/lib/constants";

export default function TenantStrip() {
  return (
    <section className="bg-white py-20">
      <div className="container-wide text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-gray">
          Trusted by Global Leaders
        </p>
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-6">
          {TENANTS.map((tenant, i) => (
            <motion.div
              key={tenant}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center justify-center"
            >
              <span className="font-display text-lg font-medium text-navy/70 sm:text-xl">
                {tenant}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
