import type { Metadata } from "next";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us — Leasing Enquiries",
  description:
    "Contact TECCI Park for leasing enquiries. Located at New No. 173, Rajiv Gandhi Salai, Sholinganallur, Chennai 600 119. Direct owner coordination for available spaces.",
  alternates: { canonical: "https://www.teccipark.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy pt-36 pb-20 text-white">
        <div className="container-wide">
          <p className="text-sm font-medium uppercase tracking-widest text-teal">
            Contact
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold sm:text-5xl">
            Let&rsquo;s Talk Space
          </h1>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wide grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-semibold text-navy">Send an Enquiry</h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-navy">Contact Details</h2>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-purple" />
                <div>
                  <p className="text-sm font-semibold text-navy">Address</p>
                  <p className="mt-1 text-sm text-gray">
                    {CONTACT.siteAddress.line1}, {CONTACT.siteAddress.line2}
                    <br />
                    {CONTACT.siteAddress.city}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <FaPhone className="mt-1 shrink-0 text-purple" />
                <a href={`tel:${CONTACT.phone}`} className="text-sm text-gray hover:text-purple">
                  {CONTACT.phone}
                </a>
              </div>
              <div className="flex gap-4">
                <FaEnvelope className="mt-1 shrink-0 text-purple" />
                <a href={`mailto:${CONTACT.email}`} className="text-sm text-gray hover:text-purple">
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[420px] w-full">
        <iframe
          title="TECCI Park Location Map"
          src={`https://www.google.com/maps?q=${CONTACT.coordinates.lat},${CONTACT.coordinates.lng}&z=16&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
