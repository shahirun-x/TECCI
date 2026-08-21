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
  type LucideIcon,
} from "lucide-react";
import { AMENITIES, AMENITY_CATEGORIES } from "@/lib/constants";

const ICONS: Record<string, LucideIcon> = {
  Shield, ScanLine, UserCheck, Zap, Wind, Gauge, Flame, Droplets,
  ArrowUpDown, Car, ParkingCircle, UtensilsCrossed, TreePine, Building,
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
    <div className="relative">
      <div
        role="tablist"
        aria-label="Amenity categories"
        className="scrollbar-hide -mx-6 flex snap-x snap-mandatory gap-2 overflow-x-auto px-6 pb-2 md:mx-0 md:flex-col md:gap-0 md:overflow-visible md:px-0 md:pb-0"
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
              className={`relative shrink-0 snap-start whitespace-nowrap rounded-full px-4 py-3 text-sm font-medium transition-colors md:flex md:w-full md:shrink md:items-baseline md:gap-3 md:whitespace-normal md:rounded-none md:px-6 md:py-4 ${
                isActive
                  ? "bg-purple text-white md:bg-transparent md:text-navy"
                  : "bg-navy/5 text-navy/60 md:bg-transparent md:text-navy/30 md:hover:text-navy/50"
              }`}
            >
              {isActive && (
                <span className="absolute left-0 top-0 hidden h-full w-1 bg-purple md:block" />
              )}
              <span className="md:font-display md:text-xl lg:text-2xl">{cat.label}</span>
              <span className="ml-2 hidden whitespace-nowrap text-sm font-body font-medium text-emerald-600 md:ml-0 md:inline">
                {items.length} {items.length === 1 ? "item" : "items"}
              </span>
            </button>
          );
        })}
      </div>
      <div className="pointer-events-none absolute right-0 top-0 h-[calc(100%-0.5rem)] w-8 bg-gradient-to-l from-white via-white/50 to-transparent md:hidden" />
    </div>
  );
}

export default function AmenitiesGrid() {
  const [activeCategory, setActiveCategory] = useState(AMENITY_CATEGORIES[0].id);
  const category = AMENITY_CATEGORIES.find((c) => c.id === activeCategory)!;
  const items = AMENITIES.filter((a) => a.category === activeCategory);

  return (
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
            <div className="min-w-0 md:sticky md:top-32 md:min-w-[280px] md:self-start">
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
  );
}
