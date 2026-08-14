export const SITE = {
  name: "TECCI Park",
  legalEntity: "ECCI Info Park Limited",
  tagline: "complete harmony",
  domain: "www.teccipark.com",
};

export const COLORS = {
  purple: "#4A2D8B",
  purpleDark: "#3A2270",
  teal: "#1A7A6D",
  navy: "#1A1A2E",
  cream: "#F8F7F4",
  white: "#FFFFFF",
  gray: "#6B7280",
};

export const CONTACT = {
  registeredOffice: {
    line1: "Third Floor, Buhari Buildings",
    line2: "4-Moores Road",
    city: "Chennai — 600 006",
  },
  siteAddress: {
    line1: "285 Rajiv Gandhi Salai",
    line2: "Sholinganallur",
    city: "Chennai — 600 119",
  },
  phone: "+91 44 4226 1112",
  email: "info@teccipark.com",
  coordinates: { lat: 12.9003, lng: 80.2279 },
};

// Sub-page routing nav (used on non-homepage routes)
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Location", href: "/location" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

// Homepage anchor-scroll nav
export const HOME_NAV_LINKS = [
  { label: "Overview", id: "overview" },
  { label: "Location", id: "location" },
  { label: "Plans", id: "plans" },
  { label: "Tenants", id: "tenants" },
  { label: "Design", id: "design" },
  { label: "Specs", id: "specs" },
  { label: "Approvals", id: "approvals" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
];

export const KEY_STATS = [
  { value: 1000000, suffix: " sq.ft.", label: "Total Built-up Area", prefix: "" },
  { value: 2, suffix: "", label: "Blocks — Eastern & Western", prefix: "" },
  { value: 11, suffix: "", label: "Levels per Block", prefix: "" },
  { value: 35000, suffix: " sq.ft.", label: "Per Floor Plate", prefix: "" },
  { value: 100, suffix: "%", label: "Power Backup", prefix: "" },
];

// Hero overlay stat blocks
export const HERO_STATS = [
  { number: "10,00,000", unit: "sq.ft", label: "Total Built-up Area" },
  { number: "2", unit: "Blocks", label: "Eastern & Western" },
  { number: "11", unit: "Levels", label: "2B + G + 8 Per Block" },
  { number: "LEED", unit: "Silver", label: "USGBC Certified" },
];

// Key Statistics grid (section 2)
export const KEY_STATISTICS = [
  { number: "2006–2009", unit: "", label: "Year of Commencement" },
  { number: "5", unit: "acres", label: "Site Area" },
  { number: "10,00,000", unit: "sq.ft", label: "Total Built-up" },
  { number: "6,50,000", unit: "sq.ft", label: "Leasable Area" },
  { number: "3,25,000", unit: "sq.ft", label: "Block A" },
  { number: "3,25,000", unit: "sq.ft", label: "Block B" },
  { number: "35,000", unit: "sq.ft", label: "Floor Plate" },
  { number: "6+", unit: "MNCs", label: "Major Tenants" },
];

export const PROXIMITY = [
  { label: "Chennai Airport", distance: "17.5 km" },
  { label: "Sholinganallur Junction", distance: "Adjacent" },
  { label: "ECR Access", distance: "2 km" },
  { label: "Tambaram Railway", distance: "8 km" },
  { label: "OMR IT Corridor", distance: "On the corridor" },
];

export const DIRECTIONS = [
  {
    from: "From Chennai Airport",
    detail:
      "Take the Chennai Bypass (Grand Southern Trunk Road) towards Tambaram, connect to Velachery-Tambaram Road, then to OMR at Sholinganallur junction — approximately 17.5 km, 35–45 minutes.",
  },
  {
    from: "From Chennai Central Station",
    detail:
      "Head south via Anna Salai (Mount Road) towards Adyar, continue on OMR through Thoraipakkam and Perungudi to Sholinganallur junction — approximately 22 km, 45–60 minutes depending on traffic.",
  },
  {
    from: "From OMR (Old Mahabalipuram Road)",
    detail:
      "TECCI Park sits directly on Rajiv Gandhi Salai at Sholinganallur junction, a major conduit connecting ECR and the Velachery-Tambaram road parallel to OMR — unmissable from either direction.",
  },
];

export const NEARBY_LANDMARKS = [
  "Crescent Engineering College",
  "SIPCOT IT Park",
  "Sholinganallur Lake",
  "Multiple Grade A IT/ITES campuses along the OMR corridor",
];

export const TENANTS = [
  { name: "Accenture", note: "Full block occupant" },
  { name: "Vestas", note: "" },
  { name: "Siemens Gamesa Renewable Energy", note: "" },
  { name: "Standard Chartered GBS", note: "" },
  { name: "Regus", note: "Coworking, 8th Floor A-Block" },
  { name: "Carrier", note: "" },
  { name: "e4e Healthcare Business Services", note: "" },
  { name: "4i Apps Solutions", note: "" },
  { name: "Cactus Corporate Co-working", note: "" },
];

export const DESIGN_HIGHLIGHTS = [
  { label: "Architect", detail: "TEAM 3 (Singapore) in association with Eskay Designs (India)" },
  { label: "Structure", detail: "RCC Framed with Raft Foundation and Flat Slabs — engineered for Chennai's coastal soils" },
  {
    label: "Façade",
    detail:
      "Double Glazed Curtain Walls with Aluminium Cladding — reflects sun, insulates, reduces carbon footprint.",
  },
  {
    label: "Finishes",
    detail: "Textured paint exteriors, Granite / Vitrified tile lobbies, Kota stone emergency stairs",
  },
  {
    label: "Lifts",
    detail: "Mitsubishi Electric — 13 lifts total: 5 passenger lifts per block (20-person, 1.75 m/sec) + 1 service lift per block (1 metric ton)",
  },
  {
    label: "Car Parks",
    detail: "750 car parks across 2 basements, ground & stilt levels. Adequate ratio for premium Grade A occupancy.",
  },
  { label: "Ceiling Height", detail: "3,750mm clear" },
  { label: "Grid Size", detail: "10.5m minimum" },
];

export const SPEC_CATEGORIES = [
  {
    title: "Electrical",
    items: ["3.2 MVA HT connection per block from TNEB", "Transformers: 1,600 KVA × 2 per block", "300–350 KVA per floor capacity"],
  },
  {
    title: "Power Backup",
    items: ["Generators: 1,250 KVA × 3 per block (Kirloskar-Cummins)", "72 hours fuel backup capacity", "100% power backup"],
  },
  {
    title: "HVAC",
    items: ["Carrier air-cooled screw chillers", "330 TR × 3 + 1 standby per block", "Central air conditioning throughout"],
  },
  {
    title: "Connectivity",
    items: ["Dedicated space for multiple bandwidth operators", "Multi-ISP access for redundant connectivity"],
  },
  {
    title: "EMS",
    items: ["Energy Management System with dedicated per-tenant metering", "Centralized control: HVAC, lighting, security, fire systems"],
  },
  {
    title: "Water & Sewage",
    items: [
      "9,00,000 litre underground storage sump",
      "25,000 litre overhead tank",
      "On-site Water Treatment Plant",
      "On-site Sewage Treatment Plant (green-building compliant)",
    ],
  },
  {
    title: "Fire Safety",
    items: ["Ring main hydrant system", "Smoke detectors + automatic sprinklers on all floors", "Fire alarms on every floor", "Dedicated fire exits", "Grundfos & Kirloskar emergency pumps in basement"],
  },
];

export const GREEN_INITIATIVES = [
  { title: "Energy Efficiency", detail: "Double-glazed curtain wall façade, optimized orientation" },
  { title: "Water Conservation", detail: "On-site treatment plants, recycling systems" },
  { title: "Waste Management", detail: "Sewage treatment plant, green disposal protocols" },
  { title: "Healthier Spaces", detail: "Improved air quality, natural daylighting" },
  { title: "Resource Optimization", detail: "Low-impact materials and systems" },
  { title: "Rooftop Solar", detail: "300 KW solar installation in progress" },
  { title: "Flood Resilience", detail: "Outer ground level raised 1.5+ metres — no basement water ingress during Chennai's historic flood events" },
];

export const MASTER_PLAN = {
  blocks: [
    { name: "Eastern Block (Front)", area: "3,25,000 sq.ft", floors: "11 levels" },
    { name: "Western Block (Rear)", area: "3,25,000 sq.ft", floors: "11 levels" },
  ],
  levels: "2 Basements + Ground + Stilt + 8 Upper Floors",
  pdf: "/documents/tecci-park-floor-plan.pdf",
};

export const OFFICE_AVAILABILITY = [
  { premises: "Block A", area: "35,000 sq.ft", status: "Warm Shell", floor: "6th Floor", availability: "Immediate" },
  { premises: "Block A", area: "35,000 sq.ft", status: "Furnished", floor: "4th Floor", availability: "Q1 2027" },
  { premises: "Block B", area: "35,000 sq.ft", status: "Warm Shell", floor: "3rd Floor", availability: "Immediate" },
  { premises: "Block B", area: "17,500 sq.ft", status: "Bare Shell", floor: "7th Floor", availability: "Q3 2026" },
];

export const AMENITIES = [
  { label: "24/7 CCTV Surveillance", icon: "Camera" },
  { label: "100% Power Backup", icon: "Zap" },
  { label: "Mitsubishi Electric Elevators", icon: "ArrowUpDown" },
  { label: "Multi-Level Car Parks", icon: "CarFront" },
  { label: "Central Air Conditioning", icon: "Snowflake" },
  { label: "Energy Management System", icon: "Cpu" },
  { label: "Fire Safety Systems", icon: "FlameKindling" },
  { label: "Water Treatment Plant", icon: "Droplets" },
  { label: "Visitor Parking", icon: "SquareParking" },
  { label: "Food Court", icon: "UtensilsCrossed" },
  { label: "Boom Barriers & Access Control", icon: "ShieldCheck" },
  { label: "Handicap Accessible Toilets", icon: "Accessibility" },
];

export const LEADERSHIP = [
  {
    name: "Abdul Qadir",
    title: "Pro Chancellor, BS Abdur Rahman University",
    bio: "Mechanical Engineer from College of Engineering Chennai, MBA from Babson College, Massachusetts, USA. Board member of several companies.",
  },
  {
    name: "KTM Ahmed Mustafa",
    title: "Managing Director, TECCI Park",
    bio: "Handles the day-to-day operations of TECCI Park.",
  },
  {
    name: "Sadaq Ismail Fuaad",
    title: "SVP, Buhari Holding",
    bio: "Bachelor's from Sydenhams College, Mumbai. Director of ABR Enterprise. Former director at Gem Aquarist India, Greata Enterprises, Greata FZC, and Pondy Hitech Plastics.",
  },
  {
    name: "MS Jagan",
    title: "Principal Advisor (Finance)",
    bio: "IIM & IISc alumnus. Former CEO of Ascendas. Expertise in strategic, infrastructure, project and operational management. Previously with Sterling Holiday Resorts and Mahindra Realty.",
  },
  {
    name: "Ravi Chandran",
    title: "CFO, TECCI Park",
    bio: "Oversees the financial operations of TECCI Park.",
  },
  {
    name: "Col. Jas Diaz",
    title: "Front Administration",
    bio: "Leads front-office administration for TECCI Park.",
  },
];

export const TEAM_PENDING = ["Anantharaman", "Shri Latha", "Nandhini"];

export const STRUCTURAL_SPECS = [
  {
    title: "Structure",
    detail:
      "RCC Framed with Raft Foundations & Flat Slabs — engineered to distribute load evenly and perform reliably on Chennai's expansive coastal soils, reducing long-term structural stress.",
  },
  {
    title: "Façade",
    detail:
      "Double Glazed Curtain Walls with Aluminium Cladding — reflects solar heat, insulates interiors, and lowers the building's carbon footprint.",
  },
  {
    title: "Finishes",
    detail: "Textured paint exteriors, Granite / Vitrified tile lobbies, Kota stone emergency stairs.",
  },
  {
    title: "Flooring",
    detail: "Granite and vitrified tiles in lobbies and stairwells; Kota stone in emergency stairs.",
  },
  {
    title: "Lifts",
    detail:
      "Mitsubishi Electric — 13 lifts total: 5 passenger lifts per block (20-person capacity, 1.75 m/sec) plus 1 dedicated service lift per block (1 metric ton).",
  },
  {
    title: "Car Parks",
    detail:
      "750 car parks across 2 basements, ground and stilt levels — adequate parking ratio for premium Grade A occupancy.",
  },
];

export const TECHNICAL_SPECS = [
  {
    title: "Electricity",
    detail: "3.2 MVA HT connection per block, drawn directly from the TNEB grid.",
  },
  {
    title: "Power",
    detail: "2 × 1,600 KVA transformers per block, delivering 300–350 KVA per floor.",
  },
  {
    title: "Generators",
    detail: "3 × 1,250 KVA Kirloskar-Cummins generators per block with 72-hour fuel backup capacity — 100% power backup.",
  },
  {
    title: "Air Conditioning",
    detail: "3 × 330 TR + 1 standby Carrier air-cooled screw chillers on a central system.",
  },
  {
    title: "Connectivity",
    detail: "Dedicated space for multiple bandwidth operators with multi-ISP access for redundant connectivity.",
  },
];

export const OPERATIONAL_SPECS = [
  {
    title: "Water",
    detail:
      "9,00,000-litre underground sump plus a 25,000-litre overhead tank, supported by an on-site Water Treatment Plant and Sewage Treatment Plant (green-building compliant).",
  },
  {
    title: "Fire Safety",
    detail: "Ring main hydrant system, smoke detectors, automatic sprinklers on all floors, fire alarms on every floor with dedicated fire exits. Grundfos & Kirloskar emergency pumps in basement.",
  },
  {
    title: "Energy Management System",
    detail: "EMS with dedicated energy metering per tenant/occupant. Centralized control for HVAC, lighting, security, and fire systems.",
  },
  {
    title: "Toilets",
    detail:
      "Male: 8 EWCs + 6 urinals per floor. Female: 10 EWCs per floor. Handicap-accessible: 1 EWC per floor.",
  },
];

export const PROJECT_SUMMARY = [
  { spec: "Site Area", value: "5 acres" },
  { spec: "Total Built-up", value: "10,00,000 sq.ft (incl. car park)" },
  { spec: "Leasable Area", value: "6,50,000 sq.ft (3,25,000 per block)" },
  { spec: "Car Park Area", value: "2,60,000 sq.ft — 750 car parks" },
  { spec: "Levels", value: "2B + G + Stilt + 8 Upper (11 per block)" },
  { spec: "Floor Plates", value: "35,000 sq.ft each" },
  { spec: "Ceiling Height", value: "3,750mm clear" },
  { spec: "Grid Size", value: "Min 10.5 meters" },
  { spec: "Air Conditioning", value: "Central (Carrier)" },
  { spec: "Power Backup", value: "100% — 72-hour fuel capacity" },
  { spec: "Lifts", value: "13 Mitsubishi Electric (5 passenger + 1 service per block)" },
  { spec: "Electrical", value: "3.2 MVA HT per block (TNEB)" },
  { spec: "Sustainability", value: "LEED Silver Certified (USGBC)" },
];

export const GALLERY_CATEGORIES = ["All", "Exterior", "Interior", "Amenities", "Events"] as const;

export const GALLERY_ITEMS = [
  { id: "exterior-day", label: "Building Exterior — Day", src: "/images/gallery/exterior-day.jpg", category: "Exterior" },
  { id: "exterior-night", label: "Building Exterior — Night", src: "/images/gallery/exterior-night.jpg", category: "Exterior" },
  { id: "facade-detail", label: "Building Facade Detail", src: "/images/gallery/facade-detail.jpg", category: "Exterior" },
  { id: "lobby", label: "Lobby & Reception", src: "/images/gallery/lobby.jpg", category: "Interior" },
  { id: "floor-plate", label: "Typical Floor Plate", src: "/images/gallery/floor-plate.jpg", category: "Interior" },
  { id: "parking", label: "Basement Parking", src: "/images/gallery/parking.jpg", category: "Interior" },
  { id: "landscape", label: "Landscaping & Green Spaces", src: "/images/gallery/landscape.jpg", category: "Amenities" },
  { id: "amenities", label: "Amenities", src: "/images/gallery/amenities.jpg", category: "Amenities" },
  { id: "events", label: "Events & Team", src: "/images/gallery/events.jpg", category: "Events" },
];
