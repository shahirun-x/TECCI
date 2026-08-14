"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { CONTACT, HOME_NAV_LINKS, NAV_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer className="bg-navy text-white/80">
      <div className="container-wide grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Image
            src="/images/tecci-logo.jpg"
            alt="TECCI Park"
            width={140}
            height={28}
            className="h-7 w-auto object-contain brightness-0 invert"
            style={{ width: "auto" }}
          />
          <p className="mt-4 text-sm font-light tracking-widest text-white/50">
            {SITE.tagline}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2">
            {isHome
              ? HOME_NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <a href={`#${link.id}`} className="text-sm hover:text-teal transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))
              : NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm hover:text-teal transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{CONTACT.siteAddress.line1}, {CONTACT.siteAddress.line2}</li>
            <li>{CONTACT.siteAddress.city}</li>
            <li>{CONTACT.phone}</li>
            <li>{CONTACT.email}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Buhari Group
          </h4>
          <p className="mt-4 text-sm text-white/60">Developer &amp; Promoter of TECCI Park</p>
          <div className="mt-4 flex gap-4 text-xl">
            <a href="#" aria-label="LinkedIn" className="hover:text-teal transition-colors">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-teal transition-colors">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-wide flex flex-col gap-3 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© TECCI PARK. All Rights Reserved. | Powered by Geoweb</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
