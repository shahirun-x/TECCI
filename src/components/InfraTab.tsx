"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Cpu, Droplets, type LucideIcon } from "lucide-react";
import { STRUCTURAL_SPECS, TECHNICAL_SPECS, OPERATIONAL_SPECS } from "@/lib/constants";

const TABS: { key: string; label: string; icon: LucideIcon; data: { title: string; detail: string }[] }[] = [
  { key: "structural", label: "Structural", icon: Building2, data: STRUCTURAL_SPECS },
  { key: "technical", label: "Technical", icon: Cpu, data: TECHNICAL_SPECS },
  { key: "operational", label: "Operational", icon: Droplets, data: OPERATIONAL_SPECS },
];

export default function InfraTab() {
  const [active, setActive] = useState(TABS[0].key);
  const current = TABS.find((t) => t.key === active)!;

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-border">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`relative flex items-center gap-2 px-6 py-4 text-sm font-medium tracking-wide transition-colors ${
              active === tab.key ? "text-purple" : "text-gray hover:text-navy"
            }`}
          >
            <tab.icon className="h-4 w-4" strokeWidth={1.75} />
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

      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
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
    </div>
  );
}
