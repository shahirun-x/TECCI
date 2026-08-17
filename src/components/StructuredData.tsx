import { CONTACT, LEADERSHIP, SOCIAL_LINKS } from "@/lib/constants";

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: `${CONTACT.siteAddress.line1}, ${CONTACT.siteAddress.line2}`,
  addressLocality: "Chennai",
  addressRegion: "Tamil Nadu",
  postalCode: "600119",
  addressCountry: "IN",
};

const GEO = {
  "@type": "GeoCoordinates",
  latitude: CONTACT.coordinates.lat,
  longitude: CONTACT.coordinates.lng,
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TECCI Park",
  alternateName: "TECCI Park Chennai",
  url: "https://www.teccipark.com",
  logo: "https://www.teccipark.com/images/tecci-logo.jpg",
  description:
    "Chennai's premier LEED Silver certified Grade A IT Park developed by Buhari Group",
  foundingDate: "2006",
  parentOrganization: {
    "@type": "Organization",
    name: "Buhari Group",
  },
  address: ADDRESS,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: CONTACT.phone,
    email: CONTACT.email,
    contactType: "leasing enquiry",
    areaServed: "IN",
    availableLanguage: ["English", "Tamil"],
  },
  sameAs: SOCIAL_LINKS.map((social) => social.url),
};

const realEstateAgent = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "TECCI Park",
  image: "https://www.teccipark.com/images/hero building.png",
  priceRange: "$$$$",
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: ADDRESS,
  geo: GEO,
  url: "https://www.teccipark.com",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
};

const place = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "TECCI Park",
  description: "Grade A LEED Silver certified IT park on OMR, Chennai",
  address: ADDRESS,
  geo: GEO,
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "LEED Silver Certified", value: true },
    { "@type": "LocationFeatureSpecification", name: "100% Power Backup", value: true },
    { "@type": "LocationFeatureSpecification", name: "24/7 CCTV Surveillance", value: true },
    { "@type": "LocationFeatureSpecification", name: "Central Air Conditioning", value: true },
    { "@type": "LocationFeatureSpecification", name: "Multi-Level Car Parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "750 Car Parks", value: true },
    { "@type": "LocationFeatureSpecification", name: "Mitsubishi Electric Elevators", value: true },
  ],
  publicAccess: true,
  smokingAllowed: false,
};

const webSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TECCI Park",
  url: "https://www.teccipark.com",
};

const people = LEADERSHIP.filter(
  (leader) => leader.bio !== "Bio to be added." && !/to be confirmed/i.test(leader.designation)
).map((leader) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: leader.name,
  jobTitle: leader.designation,
  description: leader.bio,
  worksFor: {
    "@type": "Organization",
    name: "TECCI Park",
  },
}));

const SCHEMAS = [organization, realEstateAgent, place, webSite, ...people];

export default function StructuredData() {
  return (
    <>
      {SCHEMAS.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
