import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery — TECCI Park",
  description: "Explore TECCI Park — building exteriors, lobbies, floor plates, and amenities.",
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

      <section className="bg-white py-20">
        <div className="container-wide">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
