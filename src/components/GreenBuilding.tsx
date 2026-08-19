"use client";

import { Award, CloudRain, Sun, Wind, Recycle, Shield, type LucideIcon } from "lucide-react";
import { SUSTAINABILITY_AMENITIES } from "@/lib/constants";
import ScrollReveal from "@/components/ScrollReveal";

const ICONS: Record<string, LucideIcon> = {
  Award,
  CloudRain,
  Sun,
  Wind,
  Recycle,
  Shield,
};

export default function GreenBuilding() {
  return (
    <section
      id="approvals"
      className="approvals-mesh relative min-h-screen overflow-hidden bg-gradient-to-br from-navy via-navy to-emerald-950 py-24 scroll-mt-header"
    >
      <div className="container-wide relative z-10">
        <div className="grid gap-16 lg:grid-cols-[3fr_2fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <ScrollReveal>
              <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">
                Certified Excellence
              </p>
              <h2 className="mt-4 font-display text-6xl font-bold leading-none text-white md:text-7xl lg:text-8xl">
                LEED Silver.
                <br />
                <span className="text-emerald-400">Chennai&rsquo;s only one.</span>
              </h2>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/70">
                TECCI Park is the only LEED Silver certified green building
                available for lease on Chennai&rsquo;s OMR / Rajiv Gandhi
                Salai corridor. Certified by the U.S. Green Building Council
                (USGBC) for Core &amp; Shell &mdash; a distinction that took
                rigorous engineering, uncompromising material choices, and
                years of sustainable operation to earn.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium uppercase tracking-widest text-white/50">
                <span className="inline-flex items-center gap-2">
                  <Award className="h-4 w-4 text-emerald-400" strokeWidth={1.75} />
                  USGBC Certified
                </span>
                <span aria-hidden="true">&middot;</span>
                <span className="inline-flex items-center gap-2">
                  <Shield className="h-4 w-4 text-emerald-400" strokeWidth={1.75} />
                  IGBC Founding Member
                </span>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1 lg:gap-10">
            {SUSTAINABILITY_AMENITIES.map((item, i) => {
              const Icon = ICONS[item.icon];
              return (
                <ScrollReveal key={item.name} delay={i * 0.1}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg lg:p-8">
                    {Icon && <Icon className="h-8 w-8 text-emerald-400" strokeWidth={1.5} />}
                    <h3 className="mt-4 text-lg font-semibold text-white">{item.name}</h3>
                    <p className="mt-2 text-sm text-white/60">{item.note}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
