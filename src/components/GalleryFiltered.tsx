"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import GalleryGrid from "@/components/GalleryGrid";
import { GALLERY, GALLERY_CATEGORIES } from "@/lib/constants";

export default function GalleryFiltered() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(
    () => (active === "all" ? GALLERY : GALLERY.filter((item) => item.category === active)),
    [active]
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`rounded-full border px-6 py-2 text-sm font-medium transition-all ${
              active === cat.id
                ? "border-purple bg-purple text-white"
                : "border-navy/10 bg-white text-navy hover:border-purple hover:text-purple"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div
        key={active}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mt-12"
      >
        <GalleryGrid items={filtered} />
      </motion.div>
    </div>
  );
}
