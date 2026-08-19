"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Ruler,
  Building2,
  Sparkles,
  Sun,
  Trees,
  type LucideIcon,
} from "lucide-react";
import { DESIGN_FEATURES } from "@/lib/constants";

const ICONS: Record<string, LucideIcon> = {
  Layers,
  Ruler,
  Building2,
  Sparkles,
  Sun,
  Trees,
};

// Design imagery to be added to public/images/design/. Falls back to a
// gradient + icon placeholder if a file is missing.
function DesignImage({
  src,
  alt,
  icon: Icon,
}: {
  src: string;
  alt: string;
  icon: LucideIcon;
}) {
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
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy to-purple">
        <Icon className="h-10 w-10 text-white" strokeWidth={1.5} />
      </div>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}

export default function DesignSection() {
  return (
    <section id="design" className="scroll-mt-header bg-cream py-20 md:py-28">
      <div className="container-wide">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">
              Architecture &amp; Design
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-navy md:text-4xl">
              Engineered for Excellence, Designed for Harmony
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-navy/70 md:text-lg">
              <p>
                TECCI Park was conceived by TEAM 3, one of Singapore&rsquo;s
                most respected architectural practices, in association with
                Eskay Designs of India. The result is a Grade A commercial
                development that balances architectural elegance with
                functional precision &mdash; every element engineered for
                the way modern enterprises work.
              </p>
              <p>
                The twin-block design maximizes daylight penetration and
                cross-ventilation while creating a strong visual identity
                along Chennai&rsquo;s OMR corridor. Curved glass facades,
                structural glazing systems, and thoughtful vertical
                circulation give TECCI Park its distinctive silhouette.
              </p>
              <p>
                Beneath the aesthetics lies rigorous engineering &mdash; RCC
                framed construction with raft foundations designed for
                Chennai&rsquo;s expansive coastal soils, and a sustainability
                framework that earned TECCI Park LEED Silver certification
                for Core &amp; Shell, a distinction shared by no other
                leasable IT park on OMR.
              </p>
            </div>

            <p className="mt-6 text-sm font-medium text-navy/50">
              Architects: TEAM 3, Singapore &middot; Eskay Designs, India
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl md:aspect-[4/5]"
          >
            <DesignImage
              src="/images/design/twin-blocks.png"
              alt="TECCI Park twin-block architecture"
              icon={Building2}
            />
          </motion.div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="font-display text-2xl font-semibold text-navy">
            Design Highlights
          </h3>
          <p className="mt-2 text-sm text-navy/60">
            Purpose-built features that shape the tenant experience
          </p>
          <p className="mt-2 text-xs text-navy/40 md:hidden">
            ← Swipe to explore →
          </p>
        </div>

        <div className="scrollbar-hide -mx-6 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:snap-none md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
          {DESIGN_FEATURES.map((feature, i) => {
            const Icon = ICONS[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="w-[85%] shrink-0 snap-center overflow-hidden rounded-xl shadow-md transition-shadow hover:shadow-xl md:w-auto md:shrink"
              >
                <div className="relative aspect-[4/3]">
                  <DesignImage src={feature.image} alt={feature.title} icon={Icon} />
                </div>
                <div className="rounded-b-xl bg-white p-6">
                  {Icon && <Icon className="mb-3 h-8 w-8 text-purple" strokeWidth={1.5} />}
                  <h4 className="text-lg font-semibold text-navy">{feature.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-navy/60">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
