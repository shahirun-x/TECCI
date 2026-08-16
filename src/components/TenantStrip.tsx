"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ANCHOR_TENANTS, OTHER_TENANTS, CACTUS_SUBTENANTS } from "@/lib/constants";

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

export default function TenantStrip() {
  return (
    <section id="tenants" className="section-pad bg-cream scroll-mt-header">
      <div className="container-wide">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-teal">
            Our Partners
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
            Trusted By Industry Leaders
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-light text-gray">
            TECCI Park is home to a diverse mix of multinational corporations,
            technology firms, and coworking operators.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {ANCHOR_TENANTS.map((tenant, i) => (
            <motion.div
              key={tenant.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="flex flex-col items-center rounded-xl bg-white p-6 shadow-md"
            >
              <TenantLogo name={tenant.name} logo={tenant.logo} size="h-16" />
              <h3 className="mt-4 text-center text-sm font-semibold text-navy">
                {tenant.name}
              </h3>
              <p className="mt-1 text-center text-xs text-navy/60">
                {tenant.note}
              </p>
            </motion.div>
          ))}
        </div>

        <h3 className="mt-16 text-center text-2xl font-semibold text-navy">
          Also At TECCI Park
        </h3>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
          {OTHER_TENANTS.map((tenant, i) => (
            <motion.div
              key={tenant.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex flex-col items-center rounded-lg bg-white p-4 shadow-sm"
            >
              <TenantLogo name={tenant.name} logo={tenant.logo} size="h-12" />
              <h4 className="mt-3 text-center text-sm font-medium text-navy">
                {tenant.name}
              </h4>
              <p className="mt-0.5 text-center text-xs text-navy/50">
                {tenant.floor}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-navy/5 p-8">
          <h3 className="text-center text-2xl font-semibold text-navy">
            Powered by Cactus Corporate Coworking
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm font-light text-gray">
            Leading global enterprises operate their teams from Cactus
            coworking spaces within TECCI Park.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-5">
            {CACTUS_SUBTENANTS.map((tenant, i) => (
              <motion.div
                key={tenant.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="flex flex-col items-center rounded-lg bg-white p-4"
              >
                <TenantLogo name={tenant.name} logo={tenant.logo} size="h-12" />
                <p className="mt-2 text-center text-xs font-medium text-navy">
                  {tenant.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
