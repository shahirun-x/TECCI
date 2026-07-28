"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? "bg-cream/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/tecci-logo.jpg"
            alt="TECCI Park"
            width={140}
            height={28}
            className="h-7 w-auto object-contain"
            style={{ width: "auto" }}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                pathname === link.href
                  ? "text-purple"
                  : solid
                  ? "text-navy hover:text-purple"
                  : "text-white hover:text-white/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-sm bg-purple px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-purple-dark"
          >
            Enquire Now
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className={`md:hidden text-2xl ${solid ? "text-navy" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-cream border-t border-navy/10"
          >
            <nav className="container-wide flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-3 text-base font-medium ${
                    pathname === link.href ? "text-purple" : "text-navy"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 rounded-sm bg-purple px-5 py-3 text-center text-sm font-medium text-white"
              >
                Enquire Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
