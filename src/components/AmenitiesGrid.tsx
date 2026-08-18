"use client";

import { useRef, useState } from "react";
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
import { AMENITIES, AMENITY_CATEGORIES, SUSTAINABILITY_AMENITIES } from "@/lib/constants";

const ICONS: Record<string, LucideIcon> = {
  Shield, ScanLine, UserCheck, Zap, Wind, Gauge, Flame, Droplets,
  ArrowUpDown, Car, ParkingCircle, UtensilsCrossed, TreePine, Building,
  Award, CloudRain, Sun, Recycle,
};

function CategoryTabs({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(e: React.KeyboardEvent, index: number) {
    const forward = e.key === "ArrowDown" || e.key === "ArrowRight";
    const backward = e.key === "ArrowUp" || e.key === "ArrowLeft";
    if (!forward && !backward) return;
    e.preventDefault();
    const nextIndex = forward
      ? (index + 1) % AMENITY_CATEGORIES.length
      : (index - 1 + AMENITY_CATEGORIES.length) % AMENITY_CATEGORIES.length;
    onSelect(AMENITY_CATEGORIES[nextIndex].id);
    buttonRefs.current[nextIndex]?.focus();
  }

  return (
    <div
      role="tablist"
      aria-label="Amenity categories"
      className="flex gap-2 overflow-x-auto pb-2 md:flex-col md:gap-0 md:overflow-visible md:pb-0"
    >
      {AMENITY_CATEGORIES.map((cat, i) => {
        const items = AMENITIES.filter((a) => a.category === cat.id);
        const isActive = cat.id === activeId;
        return (
          <button
            key={cat.id}
            ref={(el) => {
              buttonRefs.current[i] = el;
            }}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onSelect(cat.id)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className={`relative shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors md:block md:w-full md:shrink md:whitespace-normal md:rounded-none md:px-6 md:py-4 md:text-2xl md:font-display lg:text-3xl ${
              isActive
                ? "bg-purple text-white md:bg-transparent md:text-navy"
                : "bg-navy/5 text-navy/60 md:bg-transparent md:text-navy/30 md:hover:text-navy/50"
            }`}
          >
            {isActive && (
              <span className="absolute left-0 top-0 hidden h-full w-1 bg-purple md:block" />
            )}
            {cat.label}
            <span className="ml-2 hidden text-sm font-body font-medium text-emerald-600 md:inline">
              {items.length} {items.length === 1 ? "item" : "items"}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default function AmenitiesGrid() {
  const [activeCategory, setActiveCategory] = useState(AMENITY_CATEGORIES[0].id);
  const category = AMENITY_CATEGORIES.find((c) => c.id === activeCategory)!;
  const items = AMENITIES.filter((a) => a.category === activeCategory);

  return (
    <>
      <section id="amenities" className="scroll-mt-header bg-white py-24 md:py-32">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-teal">
              What&rsquo;s Included
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-navy md:text-5xl">
              Everything you&rsquo;d expect. Nothing you wouldn&rsquo;t.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-navy/60">
              TECCI Park is built for enterprise reality — security, uptime,
              and the daily details that separate a Grade A building from
              everything else.
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-[30%_70%] md:gap-12">
            <div className="md:sticky md:top-32 md:self-start">
              <CategoryTabs activeId={activeCategory} onSelect={setActiveCategory} />
              <p className="mt-4 hidden text-xs text-navy/40 md:block">
                Click a category to explore
              </p>
            </div>

            <div className="dot-grid-pattern relative overflow-hidden rounded-2xl">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="relative p-6 md:p-10"
              >
                <h3 className="mb-2 font-display text-3xl font-bold text-navy">
                  {category.label}
                </h3>
                <p className="max-w-lg text-navy/60">{category.description}</p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {items.map((item, i) => {
                    const Icon = ICONS[item.icon];
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: i * 0.06 }}
                        className="relative rounded-2xl bg-navy/5 p-6 transition-colors hover:bg-navy/10"
                      >
                        {"status" in item && item.status === "coming-soon" && (
                          <span className="absolute right-4 top-4 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                            Coming Soon
                          </span>
                        )}
                        {Icon && (
                          <div className="inline-flex rounded-xl bg-purple/10 p-2">
                            <Icon className="h-10 w-10 text-purple" strokeWidth={1.5} />
                          </div>
                        )}
                        <p className="mt-4 text-lg font-semibold text-navy">
                          {item.name}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
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
