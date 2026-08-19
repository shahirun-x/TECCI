"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import type { IconType } from "react-icons";
import { CONTACT, HOME_NAV_LINKS, NAV_LINKS, SITE, SOCIAL_LINKS } from "@/lib/constants";

const SOCIAL_ICONS: Record<string, IconType> = {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
};

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer className="relative bg-navy text-white/80">
      <div className="container-wide pt-16">
        <p className="font-display text-4xl font-bold text-white md:text-6xl">
          TECCI Park.
        </p>
        <p className="mt-2 text-lg text-white/60">
          Grade A office space, engineered for what&rsquo;s next.
        </p>
        <div className="my-12 h-px w-full bg-white/10" />
      </div>

      <div className="container-wide grid gap-10 pb-16 md:grid-cols-3">
        <div>
          <Image
            src="/images/tecci logo white.svg"
            alt="TECCI Park"
            width={128}
            height={26}
            className="h-auto w-32 object-contain"
          />
          <p className="mt-4 text-sm font-light tracking-widest text-white/50">
            {SITE.tagline}
          </p>
          <p className="mt-4 text-sm text-white/60">
            Developer &amp; Promoter of TECCI Park
          </p>
          <div className="mt-4 flex gap-4">
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICONS[social.icon];
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="hover:text-teal-light transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2">
            {isHome
              ? HOME_NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <a href={`#${link.id}`} className="text-sm hover:text-teal-light transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))
              : NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm hover:text-teal-light transition-colors">
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
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-purple/50 to-transparent" />

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
