"use client";

import { motion } from "framer-motion";
import { OFFICE_AVAILABILITY } from "@/lib/constants";

export default function OfficeAvailability() {
  return (
    <section className="section-pad-sm bg-cream">
      <div className="container-wide">
        <p className="text-sm font-medium uppercase tracking-widest text-teal">
          Availability
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
          Office Space Availability
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 overflow-x-auto rounded-lg border border-border bg-white"
        >
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-navy/[0.03]">
                <th className="px-6 py-4 font-semibold text-navy">Premises</th>
                <th className="px-6 py-4 font-semibold text-navy">Area</th>
                <th className="px-6 py-4 font-semibold text-navy">Status</th>
                <th className="px-6 py-4 font-semibold text-navy">Floor</th>
                <th className="px-6 py-4 font-semibold text-navy">Availability</th>
              </tr>
            </thead>
            <tbody>
              {OFFICE_AVAILABILITY.map((row, i) => (
                <tr
                  key={`${row.premises}-${row.floor}`}
                  className={i % 2 === 0 ? "bg-white" : "bg-cream/60"}
                >
                  <td className="border-b border-border px-6 py-4 font-medium text-navy">
                    {row.premises}
                  </td>
                  <td className="border-b border-border px-6 py-4 text-gray">{row.area}</td>
                  <td className="border-b border-border px-6 py-4 text-gray">{row.status}</td>
                  <td className="border-b border-border px-6 py-4 text-gray">{row.floor}</td>
                  <td className="border-b border-border px-6 py-4">
                    <span
                      className={`inline-block rounded-sm px-2.5 py-1 text-xs font-medium ${
                        row.availability === "Immediate"
                          ? "bg-teal/10 text-teal"
                          : "bg-purple/10 text-purple"
                      }`}
                    >
                      {row.availability}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <p className="mt-4 text-sm text-gray">
          For availability updates, contact our leasing team at{" "}
          <a href="mailto:info@teccipark.com" className="text-purple hover:text-purple-dark">
            info@teccipark.com
          </a>
        </p>
      </div>
    </section>
  );
}
