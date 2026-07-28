import type { Metadata } from "next";
import InfraTab from "@/components/InfraTab";
import { PROJECT_SUMMARY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Infrastructure & Specifications — TECCI Park",
  description:
    "Structural, technical, and operational specifications of TECCI Park — a Grade A IT park on Chennai's OMR corridor.",
};

export default function InfrastructurePage() {
  return (
    <>
      <section className="bg-navy pt-36 pb-20 text-white">
        <div className="container-wide">
          <p className="text-sm font-medium uppercase tracking-widest text-teal">
            Infrastructure
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold sm:text-5xl">
            Engineered for Enterprise
          </h1>
          <p className="mt-4 max-w-xl text-base font-light text-white/70">
            Every system at TECCI Park — from foundation to façade — is
            specified to Grade A standards.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-wide">
          <InfraTab />
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-wide">
          <h2 className="text-2xl font-semibold text-navy sm:text-3xl">
            Project Summary
          </h2>
          <div className="mt-8 overflow-x-auto rounded-sm border border-navy/10 bg-white">
            <table className="w-full text-left text-sm">
              <tbody>
                {PROJECT_SUMMARY.map((row, i) => (
                  <tr
                    key={row.spec}
                    className={i % 2 === 0 ? "bg-white" : "bg-cream/60"}
                  >
                    <td className="w-1/2 border-b border-navy/5 px-6 py-4 font-medium text-navy">
                      {row.spec}
                    </td>
                    <td className="border-b border-navy/5 px-6 py-4 text-gray">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
