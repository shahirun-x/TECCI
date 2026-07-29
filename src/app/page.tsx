import Hero from "@/components/Hero";
import KeyStatistics from "@/components/KeyStatistics";
import LocationPreview from "@/components/LocationPreview";
import PlansSection from "@/components/PlansSection";
import OfficeAvailability from "@/components/OfficeAvailability";
import TenantStrip from "@/components/TenantStrip";
import DesignSection from "@/components/DesignSection";
import SpecsSection from "@/components/SpecsSection";
import GreenBuilding from "@/components/GreenBuilding";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import GalleryPreview from "@/components/GalleryPreview";
import AboutPreview from "@/components/AboutPreview";
import ContactSection from "@/components/ContactSection";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "TECCI Park",
  description: "LEED Silver certified Grade A IT Park on OMR, Chennai",
  address: {
    "@type": "PostalAddress",
    streetAddress: "285 Rajiv Gandhi Salai, Sholinganallur",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600119",
    addressCountry: "IN",
  },
  telephone: "+914442261112",
  email: "info@teccipark.com",
  url: "https://www.teccipark.com",
  image: "https://www.teccipark.com/og-image.jpg",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <KeyStatistics />
      <LocationPreview />
      <PlansSection />
      <OfficeAvailability />
      <TenantStrip />
      <DesignSection />
      <SpecsSection />
      <GreenBuilding />
      <AmenitiesGrid />
      <GalleryPreview />
      <AboutPreview />
      <ContactSection />
    </>
  );
}
