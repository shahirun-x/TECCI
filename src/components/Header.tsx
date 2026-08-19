"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { HOME_NAV_LINKS, NAV_LINKS } from "@/lib/constants";

const MOBILE_HEADER_HEIGHT = 52; // px — header height while solid (py-3 + logo)

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

  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

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

  const linkClass = (isActive: boolean) => {
    if (solid) {
      return `text-sm font-medium tracking-wide transition-colors ${isActive ? "text-purple" : "text-navy hover:text-purple"
        }`;
    }
    return `relative text-sm font-medium tracking-wide transition-colors ${isActive ? "text-white nav-link-active-light" : "text-white/70 hover:text-white"
      }`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 will-change-transform transition-all duration-300 ease-in-out ${solid ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
    >
      <div
        className={`container-wide flex items-center justify-between transition-all duration-300 ease-in-out ${solid ? "py-3" : "py-4"
          }`}
      >
        <Link href="/" className="relative h-7 w-[140px] shrink-0">
          <Image
            src="/images/tecci logo.svg"
            alt="TECCI Park"
            fill
            sizes="140px"
            className={`object-contain object-left transition-opacity duration-300 ${solid ? "opacity-100" : "opacity-0"
              }`}
            priority
          />
          <Image
            src="/images/tecci logo white.svg"
            alt="TECCI Park"
            fill
            sizes="140px"
            className={`object-contain object-left transition-opacity duration-300 ${solid ? "opacity-0" : "opacity-100"
              }`}
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
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
            className={`whitespace-nowrap rounded-sm px-4 py-2.5 text-sm font-medium tracking-wide transition-all duration-200 xl:px-5 ${solid
              ? "bg-purple text-white hover:bg-purple-dark hover:shadow-md"
              : "border border-white bg-transparent text-white hover:bg-white hover:text-purple"
              }`}
          >
            Enquire Now
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className={`-mr-2.5 p-3 lg:hidden text-2xl transition-colors ${solid ? "text-navy" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 bottom-0 z-40 bg-navy/40 backdrop-blur-sm lg:hidden"
            style={{ top: MOBILE_HEADER_HEIGHT }}
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-0 z-50 flex flex-col bg-white lg:hidden"
            style={{ top: MOBILE_HEADER_HEIGHT, height: `calc(100dvh - ${MOBILE_HEADER_HEIGHT}px)` }}
          >
              <nav className="flex w-full flex-1 flex-col overflow-y-auto px-6 py-6 md:px-12">
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
                        className={`block border-b border-navy/10 py-3 text-xl font-display font-medium ${isActive ? "text-purple" : "text-navy"
                          }`}
                      >
                        {link.label}
                      </a>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="border-t border-navy/10 p-6">
                <Link
                  href={isHome ? "#contact" : "/contact"}
                  onClick={() => setOpen(false)}
                  className="block w-full whitespace-nowrap rounded-lg bg-purple py-4 text-center text-base font-medium text-white transition-colors hover:bg-purple-dark"
                >
                  Enquire Now
                </Link>
              </div>
          </motion.div>
        </>
      )}
    </header>
  );
}
