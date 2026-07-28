import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import AboutPreview from "@/components/AboutPreview";
import GreenBuilding from "@/components/GreenBuilding";
import TenantStrip from "@/components/TenantStrip";
import LocationPreview from "@/components/LocationPreview";
import CTABanner from "@/components/CTABanner";

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
      <StatsStrip />
      <AboutPreview />
      <GreenBuilding />
      <TenantStrip />
      <LocationPreview />
      <CTABanner />
    </>
  );
}
