"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CONTACT, PROXIMITY } from "@/lib/constants";

export default function LocationPreview() {
  return (
    <section id="location" className="section-pad bg-cream scroll-mt-header">
      <div className="container-wide grid gap-12 lg:grid-cols-2 lg:items-center">
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
          <p className="mt-6 text-base leading-relaxed text-gray">
            The Rajiv Gandhi Salai (OMR) is the preferred destination for
            discerning IT/ITES majors. TECCI Park is situated within Chennai
            corporation limits at the Sholinganallur junction, a major conduit
            connecting ECR and the Velachery-Tambaram road parallel to OMR.
          </p>
          <p className="mt-4 flex items-start gap-3 text-sm text-navy">
            <FaMapMarkerAlt className="mt-1 shrink-0 text-purple" />
            {CONTACT.siteAddress.line1}, {CONTACT.siteAddress.line2},{" "}
            {CONTACT.siteAddress.city}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {PROXIMITY.map((item) => (
              <div key={item.label} className="border-l-2 border-teal pl-3">
                <p className="text-sm font-semibold text-navy">{item.distance}</p>
                <p className="text-xs text-gray">{item.label}</p>
              </div>
            ))}
          </div>

          <Link
            href="/location"
            className="mt-8 inline-block border-b-2 border-purple pb-1 text-sm font-medium text-purple transition-colors hover:border-teal hover:text-teal"
          >
            View Full Location Details →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="aspect-[4/3] w-full overflow-hidden rounded-lg shadow-sm"
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
