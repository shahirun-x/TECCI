"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const PLACEHOLDER_BIO = "Bio to be added.";

function firstInitial(name: string) {
  const stripped = name.replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.|Col\.)\s+/i, "");
  return stripped.charAt(0);
}

// Photo images to be added to public/images/team/. Currently showing initial-letter fallback badges.
function TeamPhoto({ name, photo }: { name: string; photo: string }) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // The browser may resolve <img src> before React hydrates and attaches
    // onError, so the initial failure can be missed — check on mount too.
    if (imgRef.current?.complete && imgRef.current.naturalWidth === 0) {
      setFailed(true);
    }
  }, []);

  if (failed) {
    return (
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple to-purple-dark font-display text-lg font-semibold text-white">
        {firstInitial(name)}
      </div>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      ref={imgRef}
      src={photo}
      alt={`${name} portrait`}
      className="h-14 w-14 rounded-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}

export default function TeamCard({
  name,
  designation,
  bio,
  photo,
  index,
}: {
  name: string;
  designation: string;
  bio: string;
  photo: string;
  index: number;
}) {
  const designationPending = /to be confirmed/i.test(designation);
  const bioPending = bio === PLACEHOLDER_BIO;
  const isPending = designationPending || bioPending;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="relative border-t-2 border-purple bg-white p-6 shadow-sm"
    >
      {isPending && (
        <span className="absolute right-4 top-4 rounded-full bg-navy/5 px-2 py-0.5 text-xs font-medium text-navy/50">
          TBC
        </span>
      )}
      <TeamPhoto name={name} photo={photo} />
      <h3 className="mt-4 text-base font-semibold text-navy">{name}</h3>
      <p className={`mt-1 text-sm font-medium ${designationPending ? "italic text-gray/70" : "text-teal"}`}>
        {designation}
      </p>
      <p className={`mt-3 text-sm leading-relaxed line-clamp-3 ${bioPending ? "italic text-gray/60" : "text-gray"}`}>
        {bio}
      </p>
    </motion.div>
  );
}
