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
  siteAddress: {
    line1: "New No. 173, Old No. 285, Rajiv Gandhi Salai",
    line2: "Sholinganallur",
    city: "Chennai — 600 119",
  },
  phone: "+91 44 4226 1112",
  email: "info@teccipark.com",
  coordinates: { lat: 12.91018, lng: 80.228475 },
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
  { label: "Chennai International Airport", distance: "17.5 km (~35–45 min)" },
  { label: "Sholinganallur Junction", distance: "Adjacent (on-site frontage)" },
  { label: "ECR (East Coast Road)", distance: "2 km" },
  { label: "Tambaram Railway Station", distance: "20 km" },
  { label: "Upcoming Metro Station", distance: "Directly in front", tag: "COMING SOON" },
  { label: "OMR IT Corridor", distance: "On the corridor" },
];

// TODO: Client to verify driving directions reflect current road network
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
  "Chettinad Health City (adjacent)",
  "ELCOT SEZ (directly behind TECCI Park)",
  "Vivanta by Taj",
  "Nortel Hotels",
  "BSR Mall",
  "World Trade Center Chennai",
  "SIPCOT IT Park",
  "Sholinganallur Lake",
];

export const PUBLIC_TRANSPORT = [
  { label: "MAA2 Airport Shuttle Bus Route", detail: "Direct route from Chennai Airport" },
  { label: "MTC Bus Routes", detail: "Multiple routes along OMR" },
  { label: "Upcoming Metro Station", detail: "Directly in front of TECCI Park (name TBC)" },
];

export const ANCHOR_TENANTS = [
  { name: "Cactus Corporate Coworking", note: "Anchor Tenant — occupies Block B (multiple floors) + Block A 4th Floor", logo: "/images/tenants/cactus.png" },
  { name: "Vestas Technology R&D Chennai", note: "Block A 8th Floor + Block B 8th Floor", logo: "/images/tenants/vestas.png" },
  { name: "Savista", note: "Block A 2nd Floor + Block B 2nd Floor (formerly e4e Healthcare)", logo: "/images/tenants/savista.png" },
  { name: "Altruist Technologies", note: "Block A 3rd Floor + Block B 3rd Floor", logo: "/images/tenants/altruist.png" },
  { name: "Conserve Solutions", note: "Block A 7th Floor + Block B 6th Floor", logo: "/images/tenants/conserve.png" },
];

export const OTHER_TENANTS = [
  { name: "Sagaciter", floor: "Block A — Ground Floor", logo: "/images/tenants/sagaciter.png" },
  { name: "RapidData Technologies", floor: "Block A — 1st Floor", logo: "/images/tenants/rapiddata.png" },
  { name: "Hirsch Secure", floor: "Block A — 5th Floor", logo: "/images/tenants/hirsch.png" },
  { name: "Pantheon", floor: "Block A — 6th Floor", logo: "/images/tenants/pantheon.png" },
  { name: "Infrasoft Technologies", floor: "Block B — 1st Floor", logo: "/images/tenants/infrasoft.png" },
  { name: "AdminDroid (Adminware Software)", floor: "Block B — 5th Floor", logo: "/images/tenants/admindroid.png" },
  { name: "Yakkay Technologies", floor: "Block B — 7th Floor", logo: "/images/tenants/yakkay.png" },
];

export const CACTUS_SUBTENANTS = [
  { name: "Wipro", logo: "/images/tenants/wipro.png" },
  { name: "Walmart", logo: "/images/tenants/walmart.png" },
  { name: "Royal Enfield", logo: "/images/tenants/royalenfield.png" },
  { name: "PixStone Images", logo: "/images/tenants/pixstone.png" },
  { name: "SysArc (A CSI Company)", logo: "/images/tenants/sysarc.png" },
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


export const AMENITIES = [
  { name: "24/7 CCTV Surveillance", icon: "Shield", category: "Security" },
  { name: "Boom Barriers & Access Control", icon: "ScanLine", category: "Security" },
  { name: "Visitor Management", icon: "UserCheck", category: "Security" },
  { name: "100% Power Backup", icon: "Zap", category: "Infrastructure" },
  { name: "Central Air Conditioning", icon: "Wind", category: "Infrastructure" },
  { name: "Energy Management System", icon: "Gauge", category: "Infrastructure" },
  { name: "Fire Safety Systems", icon: "Flame", category: "Infrastructure" },
  { name: "Water Treatment Plant", icon: "Droplets", category: "Infrastructure" },
  { name: "Mitsubishi Electric Elevators", icon: "ArrowUpDown", category: "Convenience" },
  { name: "Multi-Level Car Parks", icon: "Car", category: "Convenience" },
  { name: "Visitor Parking", icon: "ParkingCircle", category: "Convenience" },
  { name: "Food Court (Block A)", icon: "UtensilsCrossed", category: "Convenience" },
  { name: "Play Area", icon: "TreePine", category: "Wellness", status: "coming-soon" as const },
  { name: "Prayer Hall", icon: "Building", category: "Wellness", status: "coming-soon" as const },
];

export const SUSTAINABILITY_AMENITIES = [
  { name: "LEED Silver Certified", icon: "Award", note: "USGBC Core & Shell" },
  { name: "Rainwater Harvesting", icon: "CloudRain", note: "9,00,000L storage sump" },
  { name: "Rooftop Solar", icon: "Sun", note: "300 KW installation in progress" },
  { name: "Wind Energy Procurement", icon: "Wind", note: "Under evaluation for reduced grid dependency" },
  { name: "Sewage Treatment Plant", icon: "Recycle", note: "Green-building compliant" },
  { name: "Flood-Resilient Design", icon: "Shield", note: "Ground raised 1.5m+ — no basement flooding in Chennai's historic floods" },
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
