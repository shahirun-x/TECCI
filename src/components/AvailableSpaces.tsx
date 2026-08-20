"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Phone, Mail } from "lucide-react";
import { getActiveListings, type AvailableSpace } from "@/lib/data/available-spaces";

function AvailabilityBadge({ space }: { space: AvailableSpace }) {
  if (space.availability === "Immediate") {
    return (
      <span className="shrink-0 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
        Immediate
      </span>
    );
  }
  return (
    <span className="shrink-0 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
      {space.availabilityDate ? `Coming ${space.availabilityDate}` : "Coming Soon"}
    </span>
  );
}

function SpaceCard({ space, index }: { space: AvailableSpace; index: number }) {
  const hasPhoto = space.photos && space.photos.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: (index % 2) * 0.1 }}
      className="overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl"
    >
      <div className="relative aspect-video">
        {hasPhoto ? (
          <Image
            src={space.photos![0]}
            alt={`${space.block} ${space.floor}`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy to-purple">
            <Building2 className="h-10 w-10 text-white" strokeWidth={1.5} />
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold text-navy">
            {space.block} &middot; {space.floor}
          </h3>
          <AvailabilityBadge space={space} />
        </div>

        <div className="mt-2 flex items-center gap-4">
          <span className="text-2xl font-bold text-navy">{space.size}</span>
          <span className="rounded-full bg-navy/5 px-3 py-1 text-xs uppercase tracking-wider text-navy/70">
            {space.condition}
          </span>
        </div>

        {space.description && (
          <p className="mt-3 text-sm leading-relaxed text-navy/60">{space.description}</p>
        )}

        <div className="my-5 h-px w-full bg-navy/10" />

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
            Owner Contact
          </p>
          <p className="mt-2 font-semibold text-navy">{space.ownerName}</p>
          <a
            href={`tel:${space.ownerPhone}`}
            className="mt-3 flex w-full items-center gap-2 rounded-lg bg-navy px-4 py-3 text-white transition-colors hover:bg-purple"
          >
            <Phone className="h-4 w-4" />
            {space.ownerPhone}
          </a>
          {space.ownerEmail && (
            <a
              href={`mailto:${space.ownerEmail}`}
              className="mt-2 inline-flex items-center gap-2 text-sm text-navy/60 transition-colors hover:text-purple"
            >
              <Mail className="h-3 w-3" />
              {space.ownerEmail}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function AvailableSpaces() {
  const listings = getActiveListings();

  if (listings.length === 0) {
    return (
      <section id="available-spaces" className="scroll-mt-header bg-white py-20 text-center md:py-28">
        <div className="container-wide">
          <p className="text-sm font-medium uppercase tracking-widest text-teal">
            Available Now
          </p>
          <p className="mt-4 text-navy/50">
            No spaces currently available &mdash; check back soon.
          </p>
        </div>
      </section>
    );
  }

  const lastUpdated = listings[0].postedDate;

  return (
    <section id="available-spaces" className="scroll-mt-header bg-white py-20 md:py-28">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-teal">
            Available Now
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
            Current Space Availability
          </h2>
          <p className="mt-4 max-w-2xl text-navy/60">
            Live listings from space owners. Contact directly for viewings and lease terms.
          </p>
          <p className="mt-2 text-xs text-navy/40">Last updated: {lastUpdated}</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {listings.map((space, i) => (
            <SpaceCard key={space.id} space={space} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
