"use client";

import { useEffect, useRef, useState } from "react";
import { ANCHOR_TENANTS, OTHER_TENANTS, CACTUS_SUBTENANTS } from "@/lib/constants";

type TenantWithLogo = { name: string; logo: string };

// Logo images to be added to public/images/tenants/. Currently showing initial-letter fallback badges.
function TenantLogo({ name, logo, size = "h-16" }: { name: string; logo: string; size?: string }) {
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
      <div className={`${size} aspect-square rounded-full bg-purple flex items-center justify-center`}>
        <span className="text-2xl font-bold text-white">{name.charAt(0)}</span>
      </div>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      ref={imgRef}
      src={logo}
      alt={`${name} logo`}
      className={`${size} w-auto object-contain`}
      onError={() => setFailed(true)}
    />
  );
}

function TenantMarquee({
  tenants,
  cardSize,
  logoSize,
  gap,
  trackClass,
}: {
  tenants: TenantWithLogo[];
  cardSize: string;
  logoSize: string;
  gap: string;
  trackClass: "marquee-track" | "marquee-track-medium" | "marquee-track-slow";
}) {
  const doubled = [...tenants, ...tenants];

  return (
    <div className="relative overflow-hidden py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-cream to-transparent" />
      <div className={`flex w-max ${gap} ${trackClass}`}>
        {doubled.map((tenant, i) => (
          <div
            key={`${tenant.name}-${i}`}
            className={`flex shrink-0 ${cardSize} items-center justify-center rounded-2xl bg-white p-6 shadow-md`}
          >
            <TenantLogo name={tenant.name} logo={tenant.logo} size={logoSize} />
          </div>
        ))}
      </div>
    </div>
  );
}

const CACTUS = ANCHOR_TENANTS[0];
const CACTUS_MARQUEE_ITEMS = [
  { ...CACTUS, isParent: true },
  ...CACTUS_SUBTENANTS.map((t) => ({ ...t, isParent: false })),
];

function CactusMarquee() {
  const doubled = [...CACTUS_MARQUEE_ITEMS, ...CACTUS_MARQUEE_ITEMS];

  return (
    <div className="relative overflow-hidden py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-cream to-transparent" />
      <div className="marquee-track-medium flex w-max gap-8">
        {doubled.map((tenant, i) => (
          <div
            key={`${tenant.name}-${i}`}
            className={`flex h-28 w-40 shrink-0 items-center justify-center rounded-2xl p-6 shadow-md ${
              tenant.isParent
                ? "border border-emerald-200 bg-emerald-50"
                : "bg-white"
            }`}
          >
            <TenantLogo name={tenant.name} logo={tenant.logo} size="h-9" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TenantStrip() {
  return (
    <section id="tenants" className="scroll-mt-header bg-cream py-24 md:py-32">
      <div className="container-wide">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-teal">
            Our Partners
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-navy md:text-5xl">
            Trusted by industry leaders.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-navy/60">
            From global enterprises to breakthrough startups, TECCI Park is
            where teams choose to grow.
          </p>
        </div>

        <div className="mt-16">
          <TenantMarquee
            tenants={ANCHOR_TENANTS}
            cardSize="w-52 h-32"
            logoSize="h-10"
            gap="gap-16"
            trackClass="marquee-track"
          />
          <p className="mt-4 text-center text-sm uppercase tracking-widest text-navy/50">
            Anchor tenants
          </p>
        </div>

        <div className="mt-24">
          <p className="mb-2 text-center text-sm uppercase tracking-widest text-emerald-600">
            Powered by Cactus Corporate Coworking
          </p>
          <p className="mx-auto mb-8 max-w-xl text-center text-navy/60">
            Global brands operating from Cactus coworking within TECCI Park
          </p>
          <CactusMarquee />
        </div>

        <div className="mt-24">
          <p className="text-center text-sm uppercase tracking-widest text-navy/50">
            Also at TECCI Park
          </p>
          <div className="mt-6">
            <TenantMarquee
              tenants={OTHER_TENANTS}
              cardSize="w-40 h-24"
              logoSize="h-8"
              gap="gap-8"
              trackClass="marquee-track-slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
