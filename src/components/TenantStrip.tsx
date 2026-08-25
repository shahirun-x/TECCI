"use client";

import { useEffect, useRef, useState } from "react";
import { ANCHOR_TENANTS, OTHER_TENANTS, CACTUS_SUBTENANTS, PREVIOUS_TENANTS } from "@/lib/constants";

type TenantWithLogo = { name: string; logo: string };

const RESUME_DELAY_MS = 2000;

// Drag-to-scroll for a marquee track. Pausing alone isn't enough to let an
// inline transform take over — a running CSS animation always wins the
// cascade for the same property, so the animation is fully removed
// (style.animation = "none") for the drag's duration and restored after.
// On restore, a negative animation-delay is computed from the drop
// position (using whichever duration — base or reduced-motion — was
// actually active when the drag started) so playback continues from
// where the user left it instead of snapping back to the start.
function useMarqueeDrag() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  // The drag-in-progress gate lives in a ref, not state: onMouseMove can
  // fire before React has re-rendered with the post-mousedown state, and
  // a handler closed over stale state would silently drop that first
  // movement. isDragging (state) still drives the cursor className — a
  // one-frame lag there is imperceptible.
  const isDraggingRef = useRef(false);
  const dragState = useRef({ startX: 0, startOffset: 0, durationSeconds: 0 });
  const resumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  function getOffsetPx(track: HTMLDivElement) {
    const matrix = getComputedStyle(track).transform;
    if (matrix === "none") return 0;
    const values = matrix.match(/matrix\(([^)]+)\)/)?.[1].split(",").map(Number);
    return values?.[4] ?? 0;
  }

  function startDrag(clientX: number) {
    const track = trackRef.current;
    if (!track) return;
    if (resumeTimeout.current) {
      clearTimeout(resumeTimeout.current);
      resumeTimeout.current = null;
    }
    const durationSeconds = parseFloat(getComputedStyle(track).animationDuration) || 0;
    const startOffset = getOffsetPx(track);
    track.style.animation = "none";
    track.style.transform = `translateX(${startOffset}px)`;
    dragState.current = { startX: clientX, startOffset, durationSeconds };
    isDraggingRef.current = true;
    setIsDragging(true);
  }

  function moveDrag(clientX: number) {
    const track = trackRef.current;
    if (!track || !isDraggingRef.current) return;
    const delta = clientX - dragState.current.startX;
    track.style.transform = `translateX(${dragState.current.startOffset + delta}px)`;
  }

  function endDrag() {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    resumeTimeout.current = setTimeout(() => {
      const track = trackRef.current;
      if (!track) return;
      const { durationSeconds } = dragState.current;
      const offset = getOffsetPx(track);
      const cycleWidth = track.scrollWidth / 2;
      const progress = cycleWidth > 0 ? (((-offset / cycleWidth) % 1) + 1) % 1 : 0;
      track.style.animation = "";
      track.style.transform = "";
      track.style.animationDelay = durationSeconds > 0 ? `${-(progress * durationSeconds)}s` : "";
    }, RESUME_DELAY_MS);
  }

  useEffect(() => {
    return () => {
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    };
  }, []);

  const dragHandlers = {
    onMouseDown: (e: React.MouseEvent) => startDrag(e.clientX),
    onMouseMove: (e: React.MouseEvent) => moveDrag(e.clientX),
    onMouseUp: endDrag,
    onMouseLeave: endDrag,
    onTouchStart: (e: React.TouchEvent) => startDrag(e.touches[0].clientX),
    onTouchMove: (e: React.TouchEvent) => moveDrag(e.touches[0].clientX),
    onTouchEnd: endDrag,
  };

  return { trackRef, isDragging, dragHandlers };
}

// Logo images to be added to public/images/tenants/. Currently showing initial-letter fallback badges.
function TenantLogo({
  name,
  logo,
  size = "h-16",
  className = "",
}: {
  name: string;
  logo: string;
  size?: string;
  className?: string;
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
      <div className={`${size} aspect-square rounded-full bg-purple flex items-center justify-center ${className}`}>
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
      className={`${size} w-auto object-contain ${className}`}
      onError={() => setFailed(true)}
      draggable={false}
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
  const { trackRef, isDragging, dragHandlers } = useMarqueeDrag();

  return (
    <div
      className={`relative overflow-hidden py-8 select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      {...dragHandlers}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-cream to-transparent" />
      <div ref={trackRef} className={`flex w-max touch-pan-y ${gap} ${trackClass}`}>
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
  const { trackRef, isDragging, dragHandlers } = useMarqueeDrag();

  return (
    <div
      className={`relative overflow-hidden py-8 select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      {...dragHandlers}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-cream to-transparent" />
      <div ref={trackRef} className="marquee-track-medium flex w-max touch-pan-y gap-8">
        {doubled.map((tenant, i) => (
          <div
            key={`${tenant.name}-${i}`}
            className={`flex h-28 w-40 shrink-0 items-center justify-center rounded-2xl p-6 shadow-md ${
              tenant.isParent
                ? "border border-emerald-200 bg-emerald-50"
                : "bg-white"
            }`}
          >
            <TenantLogo name={tenant.name} logo={tenant.logo} size="h-12" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TenantStrip() {
  return (
    <section id="tenants" className="scroll-mt-header bg-cream py-12 md:py-20">
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

        <div className="mt-8">
          <TenantMarquee
            tenants={ANCHOR_TENANTS}
            cardSize="w-52 h-32"
            logoSize="h-16"
            gap="gap-16"
            trackClass="marquee-track"
          />
          <p className="mt-4 text-center text-sm uppercase tracking-widest text-navy/50">
            Anchor tenants
          </p>
        </div>

        <div className="mt-16">
          <p className="mb-2 text-center text-sm uppercase tracking-widest text-emerald-600">
            Powered by Cactus Corporate Coworking
          </p>
          <p className="mx-auto mb-8 max-w-xl text-center text-navy/60">
            Global brands operating from Cactus coworking within TECCI Park
          </p>
          <CactusMarquee />
        </div>

        <div className="mt-16">
          <p className="text-center text-sm uppercase tracking-widest text-navy/50">
            Also at TECCI Park
          </p>
          <div className="mt-6">
            <TenantMarquee
              tenants={OTHER_TENANTS}
              cardSize="w-40 h-24"
              logoSize="h-10"
              gap="gap-8"
              trackClass="marquee-track-slow"
            />
          </div>
        </div>

        {PREVIOUS_TENANTS.length > 0 && (
          <div className="mt-12 text-center">
            <p className="text-xs uppercase tracking-widest text-navy/40">
              Previously at TECCI Park
            </p>
            {PREVIOUS_TENANTS.map((tenant) => (
              <div
                key={tenant.name}
                className="group mx-auto mt-4 flex max-w-[200px] items-center justify-center rounded-xl bg-white p-6 shadow-sm"
              >
                <TenantLogo
                  name={tenant.name}
                  logo={tenant.logo}
                  size="h-12"
                  className="grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
