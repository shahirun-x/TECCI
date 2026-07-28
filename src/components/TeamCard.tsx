"use client";

import { motion } from "framer-motion";

export default function TeamCard({
  name,
  title,
  bio,
  index,
}: {
  name: string;
  title: string;
  bio: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="border-t-2 border-purple bg-white p-6 shadow-sm"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy/5 font-display text-lg font-semibold text-purple">
        {name
          .split(" ")
          .map((n) => n[0])
          .slice(0, 2)
          .join("")}
      </div>
      <h3 className="mt-4 text-base font-semibold text-navy">{name}</h3>
      <p className="mt-1 text-sm font-medium text-teal">{title}</p>
      <p className="mt-3 text-sm leading-relaxed text-gray">{bio}</p>
    </motion.div>
  );
}
