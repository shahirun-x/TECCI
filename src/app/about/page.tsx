import type { Metadata } from "next";
import { LEADERSHIP } from "@/lib/constants";
import TeamCard from "@/components/TeamCard";
import { FaLeaf, FaGem, FaHandshake, FaBuilding } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About TECCI Park & Buhari Group",
  description:
    "TECCI Park is developed by the Buhari Group, a legacy Chennai enterprise. Designed by TEAM 3 Singapore and Eskay Designs India. Founded 2006-2009 as Chennai's premier LEED Silver IT park.",
  alternates: { canonical: "https://www.teccipark.com/about" },
};

const VALUES = [
  { icon: FaLeaf, title: "Green Building Commitment", detail: "Sustainability embedded in every structural and operational decision." },
  { icon: FaGem, title: "Quality Construction", detail: "Grade A engineering standards across structure, façade, and finish." },
  { icon: FaHandshake, title: "Tenant-First Approach", detail: "Infrastructure and services designed around occupant needs." },
  { icon: FaBuilding, title: "Sustainability as Core Value", detail: "A founding IGBC member's legacy carried into every project." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy pt-36 pb-20 text-white">
        <div className="container-wide">
          <p className="text-sm font-medium uppercase tracking-widest text-teal">
            About Us
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold sm:text-5xl">
            Four Decades of Construction Excellence
          </h1>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-semibold text-navy sm:text-3xl">
            Our Heritage
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray">
            TECCI Park is developed by the Buhari Group, a legacy enterprise
            with landmark developments across Chennai. Designed by TEAM 3
            (Singapore) in association with Eskay Designs (India), TECCI
            Park has stood as Chennai&rsquo;s premier LEED Silver certified
            Grade A IT Park on the OMR corridor since its establishment in
            2006&ndash;2009.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray">
            Buhari Group was founded by the late BSA Rahman (B.S. Abdur
            Rahman), whose vision continues to guide the organization&rsquo;s
            commitment to quality, sustainability, and long-term value
            creation.
          </p>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-wide">
          <h2 className="text-2xl font-semibold text-navy sm:text-3xl">
            Leadership Team
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LEADERSHIP.map((leader, i) => (
              <TeamCard key={leader.id} index={i} {...leader} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wide">
          <h2 className="text-2xl font-semibold text-navy sm:text-3xl">
            Vision &amp; Values
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title}>
                <v.icon className="text-2xl text-purple" />
                <h3 className="mt-3 text-base font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray">{v.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
