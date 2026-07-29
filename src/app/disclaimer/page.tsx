import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Disclaimer — TECCI Park",
  description: "Disclaimer for the TECCI Park website.",
};

export default function DisclaimerPage() {
  return (
    <section className="section-pad bg-white pt-32">
      <div className="container-wide max-w-3xl">
        <h1 className="text-3xl font-semibold text-navy sm:text-4xl">Disclaimer</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-gray">
          <p>
            The content on this website is provided by {SITE.legalEntity} for
            general informational purposes only. Specifications, availability,
            and imagery are indicative and subject to change without notice.
          </p>
          <p>
            Floor plans, master plans, and downloadable documents referenced on
            this site are illustrative and do not constitute a legal offer.
            Please contact our leasing team for current, binding
            specifications and availability.
          </p>
          <p>
            While we make every effort to keep information accurate and
            up to date, we make no warranties about the completeness,
            reliability, or accuracy of this information.
          </p>
        </div>
      </div>
    </section>
  );
}
