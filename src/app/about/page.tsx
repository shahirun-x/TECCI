import type { Metadata } from "next";
import { LEADERSHIP, TEAM_PENDING } from "@/lib/constants";
import TeamCard from "@/components/TeamCard";
import { FaLeaf, FaGem, FaHandshake, FaBuilding } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Us — TECCI Park",
  description:
    "TECCI Park is developed by ECCI Info Park Limited, part of the multi-billion dollar Buhari Group — four decades of construction excellence in Chennai.",
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

      <section className="bg-white py-20">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-semibold text-navy sm:text-3xl">
            Our Heritage
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray">
            TECCI Park is developed by ECCI Info Park Limited, part of the
            internationally renowned Buhari Group — a conglomerate with
            interests spanning coal mining, electrical, electronics, real
            estate, and shipping. The Group&rsquo;s legacy in construction
            includes building India&rsquo;s first flyover, a testament to
            decades of engineering leadership.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray">
            The Buhari Group was founded by the late BSA Rahman (B.S. Abdur
            Rahman), whose vision continues to guide the organization&rsquo;s
            commitment to quality, sustainability, and long-term value
            creation.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-wide">
          <h2 className="text-2xl font-semibold text-navy sm:text-3xl">
            Leadership Team
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LEADERSHIP.map((leader, i) => (
              <TeamCard key={leader.name} index={i} {...leader} />
            ))}
          </div>
          {TEAM_PENDING.length > 0 && (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {TEAM_PENDING.map((name) => (
                <div
                  key={name}
                  className="flex flex-col justify-center border-t-2 border-navy/10 bg-white/60 p-6 text-center"
                >
                  <h3 className="text-base font-semibold text-navy">{name}</h3>
                  <p className="mt-1 text-sm text-gray">Profile coming soon</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-white py-20">
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
