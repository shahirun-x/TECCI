"use client";

import { motion } from "framer-motion";
import { TENANTS } from "@/lib/constants";

export default function TenantStrip() {
  return (
    <section id="tenants" className="section-pad bg-cream scroll-mt-header">
      <div className="container-wide text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-teal">
          Tenants
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
          Trusted by Global Leaders
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 md:grid-cols-3">
          {TENANTS.map((tenant, i) => (
            <motion.div
              key={tenant.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex flex-col items-center justify-center"
            >
              <span className="font-display text-lg font-medium text-navy/40 grayscale transition-all duration-300 group-hover:text-purple group-hover:grayscale-0 sm:text-xl">
                {tenant.name}
              </span>
              {tenant.note && (
                <span className="mt-1 text-xs text-gray">{tenant.note}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
