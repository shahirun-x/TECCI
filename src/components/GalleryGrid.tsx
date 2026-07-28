"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { GALLERY_ITEMS } from "@/lib/constants";

export default function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length));
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % GALLERY_ITEMS.length));

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {GALLERY_ITEMS.map((item, i) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            onClick={() => setActiveIndex(i)}
            className="group relative mb-4 block w-full overflow-hidden rounded-sm bg-navy/5"
            style={{ aspectRatio: i % 3 === 1 ? "3/4" : "4/3" }}
          >
            <Image
              src={item.src}
              alt={item.label}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
              <span className="p-4 text-sm font-medium text-white">{item.label}</span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 p-4"
            onClick={close}
          >
            <button
              aria-label="Close"
              className="absolute top-6 right-6 text-3xl text-white/80 hover:text-white"
              onClick={close}
            >
              <HiX />
            </button>
            <button
              aria-label="Previous"
              className="absolute left-4 text-3xl text-white/80 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
            >
              <HiChevronLeft />
            </button>
            <button
              aria-label="Next"
              className="absolute right-4 text-3xl text-white/80 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
            >
              <HiChevronRight />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-[70vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_ITEMS[activeIndex].src}
                alt={GALLERY_ITEMS[activeIndex].label}
                fill
                className="object-contain"
              />
              <p className="absolute -bottom-10 left-0 right-0 text-center text-sm text-white/70">
                {GALLERY_ITEMS[activeIndex].label}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
