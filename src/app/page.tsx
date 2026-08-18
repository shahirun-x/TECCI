import Hero from "@/components/Hero";
import HeroStats from "@/components/HeroStats";
import KeyStatistics from "@/components/KeyStatistics";
import LocationPreview from "@/components/LocationPreview";
import OfficeAvailability from "@/components/OfficeAvailability";
import TenantStrip from "@/components/TenantStrip";
import DesignSection from "@/components/DesignSection";
import SpecsSection from "@/components/SpecsSection";
import GreenBuilding from "@/components/GreenBuilding";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import GalleryPreview from "@/components/GalleryPreview";
import AboutPreview from "@/components/AboutPreview";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.teccipark.com" },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Hero />
      <HeroStats />
      <KeyStatistics />
      <LocationPreview />
      <OfficeAvailability />
      <TenantStrip />
      <DesignSection />
      <SpecsSection />
      <GreenBuilding />
      <AmenitiesGrid />
      <GalleryPreview />
      <AboutPreview />
      <FAQSection />
      <ContactSection />
    </>
  );
}
