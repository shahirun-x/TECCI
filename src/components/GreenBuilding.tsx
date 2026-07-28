"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLeaf, FaTint, FaSolarPanel, FaUsers } from "react-icons/fa";

const HIGHLIGHTS = [
  { icon: FaSolarPanel, title: "Energy Efficiency", detail: "Double-glazed façade and optimized building orientation cut energy consumption." },
  { icon: FaTint, title: "Water Conservation", detail: "In-house treatment plants recycle and manage water responsibly." },
  { icon: FaLeaf, title: "Natural Resource Optimization", detail: "Materials and systems selected to minimize environmental impact." },
  { icon: FaUsers, title: "Healthier Occupant Spaces", detail: "Improved air quality and daylighting for tenant wellbeing." },
];

export default function GreenBuilding() {
  return (
    <section className="bg-navy py-24 text-white">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-teal">
            Green DNA
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            The Only LEED Silver Certified Building on OMR
          </h2>
          <p className="mt-4 text-base font-light text-white/70">
            Available for lease on Rajiv Gandhi Salai — built to the standards
            of the Indian Green Building Council, of which the Buhari Group is
            a founding member.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-white/5"
          >
            <Image
              src="/images/leed-certificate.jpg"
              alt="LEED Silver Certification"
              fill
              className="object-contain p-6"
            />
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2">
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h.icon className="text-2xl text-teal" />
                <h3 className="mt-3 text-base font-semibold">{h.title}</h3>
                <p className="mt-2 text-sm font-light text-white/60">{h.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
