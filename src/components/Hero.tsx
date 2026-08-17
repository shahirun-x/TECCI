"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

type Slide = {
  id: string;
  src: string;
  alt: string;
  kenBurnsClass: string;
  mobileObjectPositionClass: string;
};

const SLIDES: Slide[] = [
  {
    id: "hero-building",
    src: "/images/hero building.png",
    alt: "TECCI Park building exterior at twilight",
    kenBurnsClass: "animate-ken-burns-1",
    mobileObjectPositionClass: "object-[60%_center]",
  },
  {
    id: "campus-shot",
    src: "/images/campus shot.png",
    alt: "Aerial view of the TECCI Park campus at golden hour",
    kenBurnsClass: "animate-ken-burns-2",
    mobileObjectPositionClass: "object-[65%_center]",
  },
  {
    id: "exterior-day",
    src: "/images/exterior day.png",
    alt: "TECCI Park daytime front facade",
    kenBurnsClass: "animate-ken-burns-3",
    mobileObjectPositionClass: "object-[55%_center]",
  },
  {
    id: "entrance",
    src: "/images/entrance image.png",
    alt: "TECCI Park entrance at dusk with wet pavement reflections",
    kenBurnsClass: "animate-ken-burns-4",
    mobileObjectPositionClass: "object-center",
  },
  {
    id: "lobby",
    src: "/images/lobby.png",
    alt: "TECCI Park lobby interior with marble flooring and purple accents",
    kenBurnsClass: "animate-ken-burns-5",
    mobileObjectPositionClass: "object-[60%_center]",
  },
  {
    id: "terrace",
    src: "/images/terrace image.png",
    alt: "TECCI Park rooftop terrace at golden hour overlooking the city",
    kenBurnsClass: "animate-ken-burns-6",
    mobileObjectPositionClass: "object-[40%_center]",
  },
];

const SLIDE_DURATION_MS = 6000;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [paused, setPaused] = useState(false);

  // Initial fade-in from black on first paint.
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Pause the slideshow timer while the tab is hidden so we never resume mid-crossfade.
  useEffect(() => {
    const onVisibilityChange = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  // Self-rescheduling advance timer — also doubles as the "reset timer on manual dot click" behavior,
  // since a click changes activeIndex and this effect re-fires with a fresh 6s window.
  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => {
      setActiveIndex((i) => (i + 1) % SLIDES.length);
    }, SLIDE_DURATION_MS);
    return () => clearTimeout(timer);
  }, [activeIndex, paused]);

  return (
    <section
      id="overview"
      className="relative h-[100svh] min-h-[560px] overflow-hidden scroll-mt-header md:h-screen"
    >
      <div
        className={`absolute inset-0 transition-opacity duration-[800ms] ease-out ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        {SLIDES.map((slide, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={slide.id}
              aria-hidden={!isActive}
              className={`absolute inset-0 will-change-[opacity] transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                quality={85}
                preload={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : undefined}
                className={`object-cover will-change-transform ${slide.mobileObjectPositionClass} md:object-center ${
                  isActive ? slide.kenBurnsClass : ""
                }`}
              />
            </div>
          );
        })}
      </div>

      <div className="hero-overlay-gradient pointer-events-none absolute inset-0 z-[2]" />

      <div className="pointer-events-none absolute inset-x-0 top-1/4 bottom-1/4 z-[3] bg-gradient-to-b from-transparent via-navy/20 to-transparent backdrop-blur-[1px]" />

      <div className="container-wide relative z-10 flex h-full -translate-y-[5%] flex-col items-center justify-center text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-text-shadow mb-6 hidden text-[14px] font-light uppercase tracking-[0.3em] text-white md:block"
        >
          {SITE.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hero-text-shadow max-w-4xl text-3xl font-bold leading-tight sm:text-5xl md:text-6xl"
        >
          Where Technology Meets Sustainability
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="hero-text-shadow mt-6 max-w-[600px] text-[18px] text-white/70"
        >
          Chennai&rsquo;s premier LEED Silver certified Grade A IT Park on the OMR corridor
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#specs"
            className="rounded-sm border border-white/50 px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-white/10"
          >
            Explore Spaces
          </a>
          <Link
            href="#contact"
            className="rounded-sm bg-purple px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-purple-dark"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-32 z-10 flex justify-center gap-4 md:bottom-28">
        {SLIDES.map((slide, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to slide ${i + 1}: ${slide.alt}`}
              aria-current={isActive}
              onClick={() => setActiveIndex(i)}
              className="relative flex items-center justify-center before:absolute before:-inset-2 before:content-['']"
            >
              <span
                className={`block rounded-full border transition-all duration-300 ${
                  isActive
                    ? "h-[10px] w-[10px] scale-110 border-white bg-white"
                    : "h-2 w-2 border-white/50 bg-transparent hover:border-white/80"
                }`}
              />
            </button>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-16 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-white/40 p-1.5"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-white/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
