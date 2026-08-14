"use client";

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";
import { CONTACT } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section id="contact" className="section-pad bg-navy text-white scroll-mt-header">
      <div className="container-wide grid gap-12 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-teal-light">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Let&rsquo;s Talk Space</h2>
          <p className="mt-4 text-sm font-light text-white/60">
            For leasing enquiries, please fill the form and we will get back
            shortly.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex gap-4">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-teal" />
              <div>
                <p className="text-sm font-semibold">Address</p>
                <p className="mt-1 text-sm text-white/60">
                  {CONTACT.siteAddress.line1}, {CONTACT.siteAddress.line2}
                  <br />
                  {CONTACT.siteAddress.city}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <FaPhone className="mt-1 shrink-0 text-teal" />
              <a href={`tel:${CONTACT.phone}`} className="text-sm text-white/60 hover:text-white">
                {CONTACT.phone}
              </a>
            </div>
            <div className="flex gap-4">
              <FaEnvelope className="mt-1 shrink-0 text-teal" />
              <a href={`mailto:${CONTACT.email}`} className="text-sm text-white/60 hover:text-white">
                {CONTACT.email}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-lg bg-white p-6 sm:p-8 lg:col-span-3"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
