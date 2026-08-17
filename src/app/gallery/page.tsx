import type { Metadata } from "next";
import GalleryFiltered from "@/components/GalleryFiltered";
import { GALLERY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gallery — TECCI Park Photographs",
  description:
    "View TECCI Park's Grade A office spaces, premium lobbies, landscaped grounds, basement parking, and aerial views of Chennai's OMR corridor.",
  alternates: { canonical: "https://www.teccipark.com/gallery" },
};

const imageSchemas = GALLERY.map((item) => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  contentUrl: `https://www.teccipark.com${item.src}`,
  name: item.caption,
  description: item.alt,
}));

export default function GalleryPage() {
  return (
    <>
      {imageSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section className="bg-white pt-36 pb-20 md:pb-28">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-teal">
              Gallery
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold text-navy md:text-5xl">
              See TECCI Park in Detail
            </h1>
            <p className="mt-4 text-base text-navy/70">
              Explore our Grade A IT park through architecture, interiors,
              amenities, and aerial views.
            </p>
          </div>

          <div className="mt-8">
            <GalleryFiltered />
          </div>
        </div>
      </section>
    </>
  );
}
