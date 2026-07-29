"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { HOME_NAV_LINKS, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(HOME_NAV_LINKS[0].id);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isHome) return;

    const sections = HOME_NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (sections.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, [isHome]);

  const solid = scrolled || !isHome || open;

  const linkClass = (isActive: boolean) =>
    `text-sm font-medium tracking-wide transition-colors ${
      isActive ? "text-purple" : solid ? "text-navy hover:text-purple" : "text-white hover:text-white/80"
    }`;

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

        <nav className="hidden lg:flex items-center gap-7">
          {isHome
            ? HOME_NAV_LINKS.map((link) => (
                <a key={link.id} href={`#${link.id}`} className={linkClass(activeSection === link.id)}>
                  {link.label}
                </a>
              ))
            : NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className={linkClass(pathname === link.href)}>
                  {link.label}
                </Link>
              ))}
          <Link
            href={isHome ? "#contact" : "/contact"}
            className="rounded-sm bg-purple px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-purple-dark"
          >
            Enquire Now
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className={`lg:hidden text-2xl ${solid ? "text-navy" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[64px] lg:hidden flex flex-col bg-cream"
          >
            <nav className="container-wide flex flex-1 flex-col gap-1 overflow-y-auto py-8">
              {(isHome ? HOME_NAV_LINKS : NAV_LINKS).map((link, i) => {
                const isAnchor = "id" in link;
                const href = isAnchor ? `#${(link as { id: string }).id}` : (link as { href: string }).href;
                const isActive = isAnchor
                  ? activeSection === (link as { id: string }).id
                  : pathname === (link as { href: string }).href;
                return (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                  >
                    <a
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`block border-b border-navy/10 py-4 text-2xl font-display font-medium ${
                        isActive ? "text-purple" : "text-navy"
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.div>
                );
              })}
              <Link
                href={isHome ? "#contact" : "/contact"}
                onClick={() => setOpen(false)}
                className="mt-6 rounded-sm bg-purple px-5 py-4 text-center text-base font-medium text-white"
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
