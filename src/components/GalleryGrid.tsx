"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ImageOff } from "lucide-react";
import type { GALLERY } from "@/lib/constants";

type GalleryItem = (typeof GALLERY)[number];

// Falls back to a labeled placeholder if a gallery image is missing.
function GalleryImage({ src, alt, category }: { src: string; alt: string; category: string }) {
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
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-navy/5">
        <ImageOff className="h-8 w-8 text-navy/30" strokeWidth={1.5} />
        <span className="text-xs uppercase tracking-wide text-navy/40">{category}</span>
      </div>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      onError={() => setFailed(true)}
    />
  );
}

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  if (items.length === 0) {
    return (
      <p className="py-16 text-center text-sm text-navy/50">
        No images in this category yet
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: (i % 6) * 0.05 }}
          className="group relative aspect-[16/10] cursor-pointer overflow-hidden rounded-xl"
        >
          <GalleryImage src={item.src} alt={item.alt} category={item.category} />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute inset-x-4 bottom-4 translate-y-4 text-white transition-transform duration-300 group-hover:translate-y-0">
            <p className="text-lg font-semibold">{item.caption}</p>
            <p className="text-xs uppercase tracking-widest text-emerald-400">{item.category}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
