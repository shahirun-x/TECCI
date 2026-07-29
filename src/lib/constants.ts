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
  { value: 650000, suffix: " sq.ft.", label: "Total Built-up Area", prefix: "" },
  { value: 2, suffix: "", label: "Blocks — A & B", prefix: "" },
  { value: 9, suffix: "", label: "Floors per Block", prefix: "" },
  { value: 35000, suffix: " sq.ft.", label: "Per Floor Plate", prefix: "" },
  { value: 100, suffix: "%", label: "Power Backup", prefix: "" },
];

// Hero overlay stat blocks
export const HERO_STATS = [
  { value: "6,50,000", unit: "sq.ft.", label: "Total Built-up Area" },
  { value: "2", unit: "Blocks", label: "A & B" },
  { value: "9", unit: "Floors", label: "Per Block (2B+G+8)" },
  { value: "LEED", unit: "Silver", label: "USGBC Certified" },
];

// Key Statistics grid (section 2)
export const KEY_STATISTICS = [
  { label: "Year of Commencement", value: "2009" },
  { label: "Site Area", value: "2.5 acres" },
  { label: "Total Built-up", value: "6,50,000 sq.ft" },
  { label: "Block A", value: "3,15,000 sq.ft" },
  { label: "Block B", value: "3,24,000 sq.ft" },
  { label: "Floor Plate", value: "35,000 sq.ft" },
  { label: "Occupancy", value: "90%+" },
  { label: "Major Tenants", value: "6+ MNCs" },
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
  { label: "Architect", detail: "TEAM 3, Singapore" },
  { label: "Structure", detail: "RCC Framed, Raft Foundation with Flat Slabs" },
  {
    label: "Façade",
    detail:
      "Double Glazed Walls + Aluminium Cladding — reflects sun, insulates, reduces carbon footprint. High strength-to-weight ratio (2–3 kg/m³).",
  },
  {
    label: "Finishes",
    detail: "Textured paint exteriors, Granite / Vitrified tile lobbies, Kota stone emergency stairs",
  },
  {
    label: "Lifts",
    detail: "Mitsubishi Electric — 5 per block (20-person, 1.75 m/sec) + 1 service lift per block",
  },
  {
    label: "Car Parks",
    detail: "1 per 750 sq.ft across 2 basements, ground & stilt. Compliant with green building norms.",
  },
  { label: "Ceiling Height", detail: "3,750mm clear" },
  { label: "Grid Size", detail: "10.5m minimum" },
];

export const SPEC_CATEGORIES = [
  {
    title: "Electrical",
    items: ["3,000 KVA per block (HT from TNEB)", "Transformers: 1,600 KVA × 2 per block", "300–350 KVA per floor capacity"],
  },
  {
    title: "Power Backup",
    items: ["Generators: 1,250 KVA × 3 per block (Powerica)", "8 hours fuel backup", "100% power backup"],
  },
  {
    title: "HVAC",
    items: ["Carrier air-cooled screw chillers", "330 TR × 3 + 1 standby per block", "Central air conditioning system"],
  },
  {
    title: "Connectivity",
    items: ["Exclusive space for bandwidth operators", "Multiple ISP access"],
  },
  {
    title: "BMS",
    items: ["Centralized Building Management System", "Controls: HVAC, lighting, security, fire systems"],
  },
  {
    title: "Water & Sewage",
    items: [
      "9,00,000 litre storage sump",
      "25,000 litre OHT",
      "Water Treatment Plant",
      "Sewage Treatment Plant (green building standard)",
    ],
  },
  {
    title: "Fire Safety",
    items: ["Ring main hydrants", "Smoke detectors + sprinklers", "Fire alarms on every floor", "Dedicated fire exits"],
  },
  {
    title: "Emergency",
    items: ["Grundfos & Kirloskar pumps in basement"],
  },
];

export const GREEN_INITIATIVES = [
  { title: "Energy Efficiency", detail: "Double-glazed façade, optimized orientation" },
  { title: "Water Conservation", detail: "Treatment plants, recycling" },
  { title: "Waste Management", detail: "Sewage treatment, green disposal" },
  { title: "Healthier Spaces", detail: "Improved air quality, daylighting" },
  { title: "Resource Optimization", detail: "Low-impact materials and systems" },
];

export const MASTER_PLAN = {
  blocks: [
    { name: "Block A", area: "3,15,000 sq.ft", floors: "8 floors" },
    { name: "Block B", area: "3,24,000 sq.ft", floors: "8 floors" },
  ],
  levels: "2 Basements + Ground + Stilt",
  pdf: "/documents/tecci-park-floor-plan.pdf",
};

export const OFFICE_AVAILABILITY = [
  { premises: "Block A", area: "35,000 sq.ft", status: "Warm Shell", floor: "6th Floor", availability: "Immediate" },
  { premises: "Block A", area: "35,000 sq.ft", status: "Furnished", floor: "4th Floor", availability: "Q1 2027" },
  { premises: "Block B", area: "36,000 sq.ft", status: "Warm Shell", floor: "3rd Floor", availability: "Immediate" },
  { premises: "Block B", area: "17,500 sq.ft", status: "Bare Shell", floor: "7th Floor", availability: "Q3 2026" },
];

export const AMENITIES = [
  { label: "24/7 CCTV Surveillance", icon: "Camera" },
  { label: "100% Power Backup", icon: "Zap" },
  { label: "Mitsubishi Electric Elevators", icon: "ArrowUpDown" },
  { label: "Multi-Level Car Parks", icon: "CarFront" },
  { label: "Central Air Conditioning", icon: "Snowflake" },
  { label: "Building Management System", icon: "Cpu" },
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
    title: "Managing Director, ECCIL",
    bio: "Handles the day-to-day operations of ECCI Info Park Limited.",
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
    title: "CFO, ECCI",
    bio: "Oversees the financial operations of ECCI Info Park Limited.",
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
      "RCC Framed Shutters with Raft Foundations & Flat Slabs — engineered to distribute load evenly and perform reliably on Chennai's expansive coastal soils, reducing long-term structural stress.",
  },
  {
    title: "Façade",
    detail:
      "Double-glazed walls reflect solar heat, insulate interiors, and lower the building's carbon footprint. Aluminium cladding (2–3 kg/m³) delivers a high strength-to-weight ratio, is hand-mountable, and reduces overall structural load.",
  },
  {
    title: "Finishes",
    detail: "External walls finished in durable, weather-resistant textured paints.",
  },
  {
    title: "Flooring",
    detail: "Granite and vitrified tiles in lobbies and stairwells; Kota stone in emergency stairs.",
  },
  {
    title: "Lifts",
    detail:
      "Mitsubishi Electric elevators — 20-passenger capacity, 1.75 m/sec speed, 5 per block — plus a 1-metric-ton service lift per block.",
  },
  {
    title: "Car Parks",
    detail:
      "1 car park per 750 sq.ft, spread across 2 basements, ground and stilt floors — generous provisioning compliant with green building norms.",
  },
];

export const TECHNICAL_SPECS = [
  {
    title: "Electricity",
    detail: "3,000 KVA HT connection per block, drawn directly from the TNEB grid.",
  },
  {
    title: "Power",
    detail: "2 × 1,600 KVA transformers per block, delivering 300–350 KVA per floor.",
  },
  {
    title: "Generators",
    detail: "3 × 1,250 KVA Powerica generators per block with 8-hour fuel backup — 100% power backup.",
  },
  {
    title: "Air Conditioning",
    detail: "3 × 330TR + 1 standby Carrier air-cooled screw chillers on a central system.",
  },
  {
    title: "Connectivity",
    detail: "Dedicated space provisioned for multiple bandwidth operators.",
  },
];

export const OPERATIONAL_SPECS = [
  {
    title: "Water",
    detail:
      "9,00,000-litre underground sump plus a 25,000-litre overhead tank, supported by an in-house Water Treatment Plant and Sewage Treatment Plant to green-building standard.",
  },
  {
    title: "Fire Safety",
    detail: "Ring-main hydrants, alarms, smoke detectors, sprinklers, and clearly marked fire exits throughout.",
  },
  {
    title: "Emergency Systems",
    detail: "Grundfos and Kirloskar pumps installed in the basement for emergency response.",
  },
  {
    title: "Building Management System",
    detail: "A central, computer-controlled BMS governs heating, air conditioning, lighting, and security.",
  },
  {
    title: "Toilets",
    detail:
      "Male: 8 EWCs + 6 urinals per floor. Female: 10 EWCs per floor. Handicap-accessible: 1 EWC per floor.",
  },
];

export const PROJECT_SUMMARY = [
  { spec: "Total Project", value: "5,81,000 sq.ft" },
  { spec: "Floors", value: "2B + G + 8" },
  { spec: "Floor Plates", value: "35,000 sq.ft each" },
  { spec: "Ceiling Height", value: "3,750mm clear" },
  { spec: "Air Conditioning", value: "Central" },
  { spec: "Power Backup", value: "100%" },
  { spec: "Car Parks", value: "1 per 750 sq.ft" },
  { spec: "Grid Size", value: "Min 10.5 meters" },
  { spec: "Lifts / Block", value: "5 nos × 20 passengers" },
  { spec: "Service Lifts", value: "1 per block" },
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
