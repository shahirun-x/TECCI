"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Phone, Mail, Plane, Train, Bus } from "lucide-react";
import { CONTACT, PROXIMITY, NEARBY_LANDMARKS, PUBLIC_TRANSPORT } from "@/lib/constants";
import MapEmbed from "@/components/MapEmbed";

export default function LocationPreview() {
  return (
    <section id="location" className="section-pad bg-cream scroll-mt-header">
      <div className="container-wide">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-teal">
            Location
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
            At the Heart of the OMR Corridor
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-12 aspect-video w-full overflow-hidden rounded-2xl shadow-lg"
        >
          <MapEmbed
            title="TECCI Park Location"
            src={`https://www.google.com/maps?q=${CONTACT.coordinates.lat},${CONTACT.coordinates.lng}&z=15&output=embed`}
          />
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl bg-white p-6 shadow-sm md:p-8"
          >
            <h3 className="text-lg font-semibold text-navy">Address & Contact</h3>
            <div className="mt-5 space-y-4">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-purple" strokeWidth={1.75} />
                <p className="text-sm text-gray">
                  {CONTACT.siteAddress.line1}, {CONTACT.siteAddress.line2},{" "}
                  {CONTACT.siteAddress.city}
                </p>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-purple" strokeWidth={1.75} />
                <a href={`tel:${CONTACT.phone}`} className="text-sm text-gray hover:text-navy">
                  {CONTACT.phone}
                </a>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-purple" strokeWidth={1.75} />
                <a href={`mailto:${CONTACT.email}`} className="text-sm text-gray hover:text-navy">
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl bg-white p-6 shadow-sm md:p-8"
          >
            <h3 className="text-lg font-semibold text-navy">Getting Here</h3>
            <div className="mt-5 space-y-3">
              {PROXIMITY.map((item) => (
                <div key={item.label} className="flex items-start justify-between gap-4">
                  <p className="text-sm font-medium text-navy">{item.label}</p>
                  <div className="flex shrink-0 items-center gap-2">
                    <span className="text-sm text-gray">{item.distance}</span>
                    {"tag" in item && item.tag && (
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                        {item.tag}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <h3 className="text-lg font-semibold text-navy">Nearby Landmarks</h3>
          <div className="relative mt-4 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-cream to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-cream to-transparent" />
            <div className="marquee-track-medium flex w-max gap-4 py-1">
              {[...NEARBY_LANDMARKS, ...NEARBY_LANDMARKS].map((landmark, i) => (
                <span
                  key={`${landmark}-${i}`}
                  className="shrink-0 rounded-full bg-navy/5 px-6 py-3 text-sm font-medium text-navy"
                >
                  {landmark}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <h3 className="text-lg font-semibold text-navy">Public Transport</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {PUBLIC_TRANSPORT.map((item, i) => {
              const Icon = i === 0 ? Plane : i === 1 ? Bus : Train;
              return (
                <div key={item.label} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-teal" strokeWidth={1.75} />
                  <div>
                    <p className="text-sm font-medium text-navy">{item.label}</p>
                    <p className="text-xs text-gray">{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="mt-10 text-center">
          <Link
            href="/location"
            className="inline-block border-b-2 border-purple pb-1 text-sm font-medium text-purple transition-colors hover:border-teal hover:text-teal"
          >
            View Full Location Details →
          </Link>
        </div>
      </div>
    </section>
  );
}
