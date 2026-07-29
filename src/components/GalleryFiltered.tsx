"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import GalleryGrid from "@/components/GalleryGrid";
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from "@/lib/constants";

export default function GalleryFiltered() {
  const [active, setActive] = useState<(typeof GALLERY_CATEGORIES)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === active)),
    [active]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`relative rounded-sm px-5 py-2.5 text-sm font-medium tracking-wide transition-colors ${
              active === cat ? "bg-purple text-white" : "bg-navy/5 text-navy hover:bg-navy/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="mt-10">
        <GalleryGrid items={filtered} />
      </motion.div>
    </div>
  );
}
