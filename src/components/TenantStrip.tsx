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
  trackClass: "marquee-track" | "marquee-track-slow";
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

// Rounded to a fixed precision so the trig output is identical between the
// server's and the browser's JS engine — raw Math.cos/sin can differ in the
// last float bit across engines, which otherwise causes a hydration mismatch.
const ORBIT_POSITIONS = CACTUS_SUBTENANTS.map((_, i) => {
  const angleStep = 360 / CACTUS_SUBTENANTS.length;
  const rad = ((angleStep * i) * Math.PI) / 180;
  return {
    x: Number((50 + 40 * Math.cos(rad)).toFixed(4)),
    y: Number((50 + 40 * Math.sin(rad)).toFixed(4)),
  };
});

function CactusOrbital() {
  return (
    <div className="mx-auto mt-8 w-full max-w-2xl">
      {/* Desktop: orbital */}
      <div className="relative hidden aspect-square w-full md:block">
        <div className="orbit-rotate absolute inset-0">
          <svg
            className="absolute inset-0 h-full w-full overflow-visible"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            {CACTUS_SUBTENANTS.map((tenant, i) => {
              const { x, y } = ORBIT_POSITIONS[i];
              return (
                <line
                  key={tenant.name}
                  x1="50"
                  y1="50"
                  x2={x}
                  y2={y}
                  className="stroke-navy/10"
                  strokeWidth="0.3"
                />
              );
            })}
          </svg>

          {CACTUS_SUBTENANTS.map((tenant, i) => {
            const { x, y } = ORBIT_POSITIONS[i];
            return (
              <div
                key={tenant.name}
                className="absolute"
                style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
              >
                <div className="orbit-counter-rotate flex flex-col items-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white p-4 shadow-lg">
                    <TenantLogo name={tenant.name} logo={tenant.logo} size="h-10" />
                  </div>
                  <p className="mt-2 text-center text-xs text-navy/70">{tenant.name}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="orbit-pulse absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white p-6 shadow-2xl">
          <TenantLogo name={CACTUS.name} logo={CACTUS.logo} size="h-14" />
        </div>
      </div>

      {/* Mobile: simple grid fallback */}
      <div className="md:hidden">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white p-4 shadow-lg">
          <TenantLogo name={CACTUS.name} logo={CACTUS.logo} size="h-10" />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {CACTUS_SUBTENANTS.map((tenant) => (
            <div
              key={tenant.name}
              className="flex flex-col items-center rounded-lg bg-white p-4 shadow-sm"
            >
              <TenantLogo name={tenant.name} logo={tenant.logo} size="h-10" />
              <p className="mt-2 text-center text-xs text-navy/70">{tenant.name}</p>
            </div>
          ))}
        </div>
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
          <p className="mx-auto max-w-xl text-center text-sm text-navy/60">
            Global brands operating from Cactus coworking within TECCI Park
          </p>
          <CactusOrbital />
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
