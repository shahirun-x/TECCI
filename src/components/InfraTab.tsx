"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { STRUCTURAL_SPECS, TECHNICAL_SPECS, OPERATIONAL_SPECS } from "@/lib/constants";

const TABS = [
  { key: "structural", label: "Structural", data: STRUCTURAL_SPECS },
  { key: "technical", label: "Technical", data: TECHNICAL_SPECS },
  { key: "operational", label: "Operational", data: OPERATIONAL_SPECS },
] as const;

export default function InfraTab() {
  const [active, setActive] = useState<(typeof TABS)[number]["key"]>("structural");
  const current = TABS.find((t) => t.key === active)!;

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-navy/10">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`relative px-6 py-4 text-sm font-medium tracking-wide transition-colors ${
              active === tab.key ? "text-purple" : "text-gray hover:text-navy"
            }`}
          >
            {tab.label}
            {active === tab.key && (
              <motion.div
                layoutId="infra-tab-underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple"
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid gap-8 py-10 sm:grid-cols-2"
        >
          {current.data.map((item) => (
            <div key={item.title} className="border-l-2 border-teal pl-5">
              <h3 className="text-base font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray">{item.detail}</p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
