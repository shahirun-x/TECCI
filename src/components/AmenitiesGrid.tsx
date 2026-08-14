"use client";

import { motion } from "framer-motion";
import {
  Shield,
  ScanLine,
  UserCheck,
  Zap,
  Wind,
  Gauge,
  Flame,
  Droplets,
  ArrowUpDown,
  Car,
  ParkingCircle,
  UtensilsCrossed,
  TreePine,
  Building,
  Award,
  CloudRain,
  Sun,
  Recycle,
  type LucideIcon,
} from "lucide-react";
import { AMENITIES, SUSTAINABILITY_AMENITIES } from "@/lib/constants";

const ICONS: Record<string, LucideIcon> = {
  Shield, ScanLine, UserCheck, Zap, Wind, Gauge, Flame, Droplets,
  ArrowUpDown, Car, ParkingCircle, UtensilsCrossed, TreePine, Building,
  Award, CloudRain, Sun, Recycle,
};

const CATEGORIES = ["Security", "Infrastructure", "Convenience", "Wellness"] as const;
const CATEGORY_LABELS: Record<string, string> = {
  Security: "Security & Access",
  Infrastructure: "Infrastructure",
  Convenience: "Convenience",
  Wellness: "Wellness & Community",
};

export default function AmenitiesGrid() {
  return (
    <>
      <section id="amenities" className="section-pad bg-white scroll-mt-header">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-teal">
              What&rsquo;s Included
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
              Premium Amenities & Building Features
            </h2>
          </div>

          {CATEGORIES.map((cat) => {
            const items = AMENITIES.filter((a) => a.category === cat);
            if (items.length === 0) return null;
            return (
              <div key={cat} className="mt-12 first:mt-14">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-navy/40">
                  {CATEGORY_LABELS[cat]}
                </h3>
                <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {items.map((item, i) => {
                    const Icon = ICONS[item.icon];
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.04 }}
                        className="relative rounded-lg bg-white p-4 shadow-sm ring-1 ring-border"
                      >
                        {"status" in item && item.status === "coming-soon" && (
                          <span className="absolute right-2 top-2 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                            Coming Soon
                          </span>
                        )}
                        {Icon && (
                          <Icon className="h-8 w-8 text-purple" strokeWidth={1.5} />
                        )}
                        <p className="mt-3 text-sm font-medium text-navy">
                          {item.name}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-pad bg-emerald-50">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">
              Sustainability & Resilience
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
              Green Building Excellence
            </h2>
            <p className="mt-4 text-base font-light text-gray">
              TECCI Park is the only LEED Silver certified green building
              available for lease on OMR — Rajiv Gandhi Salai.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SUSTAINABILITY_AMENITIES.map((item, i) => {
              const Icon = ICONS[item.icon];
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="rounded-xl bg-white p-6 shadow-sm"
                >
                  {Icon && (
                    <Icon className="h-10 w-10 text-emerald-600" strokeWidth={1.5} />
                  )}
                  <h3 className="mt-4 text-lg font-semibold text-navy">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm text-navy/60">{item.note}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
