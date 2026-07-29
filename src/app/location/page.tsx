import type { Metadata } from "next";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CONTACT, DIRECTIONS, NEARBY_LANDMARKS, PROXIMITY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Location — TECCI Park",
  description:
    "TECCI Park sits on Rajiv Gandhi Salai (OMR) at Sholinganallur junction, Chennai's premier IT corridor — full location details, proximity, and directions.",
};

export default function LocationPage() {
  return (
    <>
      <section className="bg-navy pt-36 pb-20 text-white">
        <div className="container-wide">
          <p className="text-sm font-medium uppercase tracking-widest text-teal">
            Location
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold sm:text-5xl">
            At the Heart of the OMR Corridor
          </h1>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="aspect-[16/7] w-full overflow-hidden rounded-lg shadow-sm">
            <iframe
              title="TECCI Park Location Map"
              src={`https://www.google.com/maps?q=${CONTACT.coordinates.lat},${CONTACT.coordinates.lng}&z=16&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-navy">The OMR Corridor</h2>
              <p className="mt-4 text-base leading-relaxed text-gray">
                The Rajiv Gandhi Salai (OMR) is the preferred destination for
                discerning IT/ITES majors. TECCI Park is situated within
                Chennai corporation limits at the Sholinganallur junction, a
                major conduit connecting ECR and the Velachery-Tambaram road
                parallel to OMR.
              </p>
              <p className="mt-4 flex items-start gap-3 text-sm text-navy">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-purple" />
                {CONTACT.siteAddress.line1}, {CONTACT.siteAddress.line2},{" "}
                {CONTACT.siteAddress.city}
              </p>

              <h3 className="mt-10 text-lg font-semibold text-navy">Nearby Landmarks</h3>
              <ul className="mt-4 space-y-2">
                {NEARBY_LANDMARKS.map((landmark) => (
                  <li key={landmark} className="border-l-2 border-teal pl-3 text-sm text-gray">
                    {landmark}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-navy">Proximity</h2>
              <div className="mt-6 overflow-hidden rounded-lg border border-border">
                <table className="w-full text-left text-sm">
                  <tbody>
                    {PROXIMITY.map((item, i) => (
                      <tr key={item.label} className={i % 2 === 0 ? "bg-white" : "bg-cream/60"}>
                        <td className="border-b border-border px-6 py-4 font-medium text-navy">
                          {item.label}
                        </td>
                        <td className="border-b border-border px-6 py-4 text-gray">
                          {item.distance}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-wide">
          <h2 className="text-2xl font-semibold text-navy sm:text-3xl">Directions</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {DIRECTIONS.map((d) => (
              <div key={d.from} className="border-t-2 border-purple bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-navy">{d.from}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray">{d.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
