"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CONTACT } from "@/lib/constants";

const PROXIMITY = [
  "OMR IT Corridor",
  "ECR Access",
  "Sholinganallur Junction",
  "Chennai Airport (~17.5 km)",
];

export default function LocationPreview() {
  return (
    <section className="bg-cream py-24">
      <div className="container-wide grid gap-12 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-teal">
            Location
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
            At the Heart of the OMR Corridor
          </h2>
          <p className="mt-6 flex items-start gap-3 text-base text-gray">
            <FaMapMarkerAlt className="mt-1 shrink-0 text-purple" />
            {CONTACT.siteAddress.line1}, {CONTACT.siteAddress.line2},{" "}
            {CONTACT.siteAddress.city}
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-4">
            {PROXIMITY.map((item) => (
              <li key={item} className="border-l-2 border-teal pl-3 text-sm text-navy">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="aspect-[4/3] w-full overflow-hidden rounded-sm shadow-sm"
        >
          <iframe
            title="TECCI Park Location"
            src={`https://www.google.com/maps?q=${CONTACT.coordinates.lat},${CONTACT.coordinates.lng}&z=15&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
