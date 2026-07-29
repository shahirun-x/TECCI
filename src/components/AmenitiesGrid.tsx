"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Zap,
  ArrowUpDown,
  CarFront,
  Snowflake,
  Cpu,
  FlameKindling,
  Droplets,
  SquareParking,
  UtensilsCrossed,
  ShieldCheck,
  Accessibility,
  type LucideIcon,
} from "lucide-react";
import { AMENITIES } from "@/lib/constants";

const ICONS: Record<string, LucideIcon> = {
  Camera,
  Zap,
  ArrowUpDown,
  CarFront,
  Snowflake,
  Cpu,
  FlameKindling,
  Droplets,
  SquareParking,
  UtensilsCrossed,
  ShieldCheck,
  Accessibility,
};

export default function AmenitiesGrid() {
  return (
    <section id="amenities" className="section-pad bg-white scroll-mt-header">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-teal">
            Amenities
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
            Everything a Grade A Workplace Needs
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {AMENITIES.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple/8">
                  {Icon && <Icon className="h-6 w-6 text-purple" strokeWidth={1.75} />}
                </div>
                <p className="mt-3 text-sm font-medium text-navy">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
