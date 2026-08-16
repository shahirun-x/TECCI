import type { Metadata } from "next";
import GalleryFiltered from "@/components/GalleryFiltered";

export const metadata: Metadata = {
  title: "Gallery — TECCI Park Photographs",
  description:
    "View TECCI Park's Grade A office spaces, premium lobbies, landscaped grounds, and modern architecture on Chennai's OMR corridor.",
  alternates: { canonical: "https://www.teccipark.com/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-navy pt-36 pb-20 text-white">
        <div className="container-wide">
          <p className="text-sm font-medium uppercase tracking-widest text-teal">
            Gallery
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold sm:text-5xl">
            A Closer Look
          </h1>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wide">
          <GalleryFiltered />
        </div>
      </section>
    </>
  );
}
