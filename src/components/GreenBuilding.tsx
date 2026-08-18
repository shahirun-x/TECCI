"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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

// Falls back to a stylized placeholder if the certificate image is missing.
function CertificateImage() {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth === 0) {
      setFailed(true);
    }
  }, []);

  if (failed) {
    return (
      <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 bg-white p-8 text-center">
        <Award className="h-10 w-10 text-emerald-600" strokeWidth={1.5} />
        <p className="font-display text-lg font-bold tracking-wide text-navy">
          LEED CERTIFICATE
        </p>
        <p className="text-xs uppercase tracking-widest text-navy/40">
          USGBC Core &amp; Shell
        </p>
      </div>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      ref={imgRef}
      src="/images/leed-certificate.jpg"
      alt="TECCI Park LEED Silver Certification for Core and Shell"
      className="aspect-[4/3] w-full bg-white object-contain p-6"
      onError={() => setFailed(true)}
    />
  );
}

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

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {SUSTAINABILITY_AMENITIES.map((item, i) => {
              const Icon = ICONS[item.icon];
              return (
                <ScrollReveal key={item.name} delay={i * 0.1}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
                    {Icon && <Icon className="h-8 w-8 text-emerald-400" strokeWidth={1.5} />}
                    <h3 className="mt-4 text-lg font-semibold text-white">{item.name}</h3>
                    <p className="mt-2 text-sm text-white/60">{item.note}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-24 max-w-md -rotate-3 overflow-hidden rounded-xl shadow-2xl shadow-black/40"
        >
          <CertificateImage />
        </motion.div>
      </div>
    </section>
  );
}
