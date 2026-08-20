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

// lucide-react does not ship brand/social logos, so these map to react-icons/fa
// (FaLinkedin, FaFacebook, FaInstagram) to match the icons already used in Footer.tsx.
export const SOCIAL_LINKS = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/company/ecci-info-park-limited/",
    icon: "FaLinkedin",
    label: "TECCI Park on LinkedIn",
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/TECCIPark/",
    icon: "FaFacebook",
    label: "TECCI Park on Facebook",
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/teccipark",
    icon: "FaInstagram",
    label: "TECCI Park on Instagram",
  },
];

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
  { name: "RapidData Technologies", floor: "Block A — 1st Floor", logo: "/images/tenants/rapid data.png" },
  { name: "Hirsch Secure", floor: "Block A — 5th Floor", logo: "/images/tenants/hirsch.png" },
  { name: "Pantheon", floor: "Block A — 6th Floor", logo: "/images/tenants/pantheon.png" },
  { name: "Infrasoft Technologies", floor: "Block B — 1st Floor", logo: "/images/tenants/infrasoft.png" },
  { name: "AdminDroid (Adminware Software)", floor: "Block B — 5th Floor", logo: "/images/tenants/admin droid.png" },
  { name: "Yakkay Technologies", floor: "Block B — 7th Floor", logo: "/images/tenants/yakkay.png" },
];

export const CACTUS_SUBTENANTS = [
  { name: "Wipro", logo: "/images/tenants/wipro.png" },
  { name: "Walmart", logo: "/images/tenants/walmart.png" },
  { name: "Royal Enfield", logo: "/images/tenants/royal enfield.png" },
  { name: "PixStone Images", logo: "/images/tenants/pixstone.png" },
  { name: "SysArc (A CSI Company)", logo: "/images/tenants/sysarc.png" },
];

export const DESIGN_FEATURES = [
  {
    image: "/images/design/facade-detail.png",
    icon: "Layers",
    title: "Double-Glazed Curtain Walls",
    description: "Structural glazing with aluminium cladding reduces solar heat gain and elevates the building's visual identity along OMR.",
  },
  {
    image: "/images/design/interior.png",
    icon: "Ruler",
    title: "35,000 sq.ft Floor Plates",
    description: "Column-free spans with 10.5m minimum grid — flexible enough to accommodate any modern office layout, from open-plan tech firms to compartmentalized enterprise setups.",
  },
  {
    image: "/images/design/twin-blocks.png",
    icon: "Building2",
    title: "Twin-Block Configuration",
    description: "Two connected blocks (Eastern & Western) maximize natural light exposure and give tenants flexible expansion options as they grow.",
  },
  {
    image: "/images/lobby.png",
    icon: "Sparkles",
    title: "Premium Common Areas",
    description: "Marble and granite lobbies, Kota stone staircases, and high-ceiling drop-off zones set the tone from the moment tenants arrive.",
  },
  {
    image: "/images/hero building.png",
    icon: "Sun",
    title: "3,750mm Clear Ceilings",
    description: "Generous floor-to-ceiling heights create airy, well-lit workspaces — an increasingly rare feature in Chennai's Grade A market.",
  },
  {
    image: "/images/campus shot.png",
    icon: "Trees",
    title: "Landscaped Campus",
    description: "5 acres of thoughtfully planned grounds with palm-lined driveways, ornamental gardens, and generous setbacks from OMR — an urban campus, not just a building.",
  },
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

export const AMENITY_CATEGORIES = [
  {
    id: "Security",
    label: "Security",
    description: "Round-the-clock protection with multi-layered access control, so your team focuses on work, not worry.",
  },
  {
    id: "Infrastructure",
    label: "Infrastructure",
    description: "The invisible engineering that keeps your operations running when everything else stops.",
  },
  {
    id: "Convenience",
    label: "Convenience",
    description: "The daily details — parking, elevators, food — designed for how modern teams actually move.",
  },
  {
    id: "Wellness",
    label: "Wellness",
    description: "Spaces that support the human side of work.",
  },
];

export const SUSTAINABILITY_AMENITIES = [
  { name: "LEED Silver Certified", icon: "Award", note: "USGBC Core & Shell" },
  { name: "Rainwater Harvesting", icon: "CloudRain", note: "9,00,000L storage sump" },
  { name: "Rooftop Solar", icon: "Sun", note: "300 KW installation in progress" },
  { name: "Wind Energy Procurement", icon: "Wind", note: "Under evaluation for reduced grid dependency" },
  { name: "Sewage Treatment Plant", icon: "Recycle", note: "Green-building compliant" },
  { name: "Flood-Resilient Design", icon: "Shield", note: "Ground raised 1.5m+ — no basement flooding in Chennai's historic floods" },
];

// TODO: Shameem Anantha Raman is TWO different people (Mr. Shameem AND Mr. Anantha Raman — client's father, board member).
// When we get their full details separately, add them back as two distinct profile entries.
export const LEADERSHIP = [
  {
    id: "abdul-qadir",
    name: "Mr. Abdul Qadir",
    designation: "Pro Chancellor, BS Abdur Rahman University",
    bio: "Mechanical Engineer from College of Engineering Chennai, MBA from Babson College, Massachusetts, USA. Board member of several companies.",
    photo: "/images/team/abdul-qadir.jpg",
    linkedin: "",
  },
  {
    id: "ktm-ahmed-mustafa",
    name: "Mr. KTM Ahmed Mustafa",
    designation: "Managing Director, ECCIL",
    bio: "Handles the day-to-day operations of ECCI Info Park Limited.",
    photo: "/images/team/ktm-ahmed-mustafa.jpg",
    linkedin: "",
  },
  {
    id: "fuaad-sadaq-ismail",
    name: "Mr. Fuaad Sadaq Ismail (FSI)",
    designation: "Founder, Geohomz",
    bio: "Builders Coach and Development Consultant. Founder of Kilakarai Trade Fair, Kilakarai Sports Academy, and Geoweb.",
    photo: "/images/team/fuaad-sadaq-ismail.jpg",
    linkedin: "",
  },
  {
    id: "ms-jagan",
    name: "Mr. MS Jagan",
    designation: "Principal Advisor (Finance)",
    bio: "IIM and IISc alumnus. Former CEO of Ascendas, Mahindra Realty, and Sree City.",
    photo: "/images/team/ms-jagan.jpg",
    linkedin: "",
  },
];

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

export const GALLERY_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "exterior", label: "Exterior" },
  { id: "interior", label: "Interior" },
  { id: "amenities", label: "Amenities" },
  { id: "aerial", label: "Aerial" },
];

export const GALLERY = [
  { id: "hero-building", src: "/images/gallery/hero-building.png", alt: "TECCI Park exterior at twilight with warm interior lighting", category: "exterior", caption: "Twilight Exterior" },
  { id: "exterior-day", src: "/images/gallery/exterior-day.png", alt: "TECCI Park front facade in daytime showing the twin-block architecture", category: "exterior", caption: "Daytime Facade" },
  { id: "entrance", src: "/images/gallery/entrance.png", alt: "TECCI Park entrance drop-off area at dusk", category: "exterior", caption: "Entrance & Drop-off" },
  { id: "facade-detail", src: "/images/gallery/facade-detail.png", alt: "Close-up of the double-glazed curtain wall facade with aluminium mullions", category: "exterior", caption: "Curtain Wall Detail" },
  { id: "twin-blocks", src: "/images/gallery/twin-blocks.png", alt: "The connected twin blocks of TECCI Park", category: "exterior", caption: "Twin Blocks" },
  { id: "lobby", src: "/images/gallery/lobby.png", alt: "TECCI Park main lobby with marble finishes and premium interiors", category: "interior", caption: "Main Lobby" },
  { id: "interior", src: "/images/gallery/interior.png", alt: "Empty 35,000 sq.ft floor plate ready for tenant fit-out", category: "interior", caption: "Floor Plate Interior" },
  { id: "terrace", src: "/images/gallery/terrace.png", alt: "Rooftop terrace and breakout area with Chennai skyline views", category: "amenities", caption: "Rooftop Terrace" },
  { id: "parking", src: "/images/gallery/parking.png", alt: "Multi-level basement parking with 750 car park capacity", category: "amenities", caption: "Basement Parking" },
  { id: "landscape", src: "/images/gallery/landscape.png", alt: "Landscaped grounds with palm-lined driveways and gardens", category: "amenities", caption: "Landscaped Campus" },
  { id: "amenities", src: "/images/gallery/amenities.png", alt: "Food court and amenity space at TECCI Park", category: "amenities", caption: "Food Court" },
  { id: "campus-shot", src: "/images/gallery/campus-shot.png", alt: "Aerial view of TECCI Park campus in golden hour showing the full property", category: "aerial", caption: "Aerial View" },
];

export const FAQ_ITEMS = [
  {
    question: "What is TECCI Park?",
    answer: "TECCI Park is Chennai's premier LEED Silver certified Grade A IT Park spanning 10 lakh sq.ft on OMR (Rajiv Gandhi Salai), Sholinganallur. Developed by the Buhari Group with 6.5 lakh sq.ft of premium leasable office space across two flagship blocks.",
  },
  {
    question: "Where is TECCI Park located?",
    answer: "TECCI Park is located at New No. 173, Old No. 285, Rajiv Gandhi Salai, Sholinganallur, Chennai — 600 119. It is 17.5 km from Chennai International Airport, adjacent to Sholinganallur Junction, with an upcoming metro station directly in front.",
  },
  {
    question: "Who developed TECCI Park?",
    answer: "TECCI Park is developed by the Buhari Group, a legacy Chennai enterprise with four decades of construction excellence. It was designed by TEAM 3 Singapore in association with Eskay Designs India.",
  },
  {
    question: "Is TECCI Park LEED certified?",
    answer: "Yes, TECCI Park is LEED Silver certified for Core & Shell by the U.S. Green Building Council (USGBC). It is the only Silver certified green building available for lease on OMR / Rajiv Gandhi Salai.",
  },
  {
    question: "What office spaces are available at TECCI Park?",
    answer: "TECCI Park offers Grade A office spaces from 3,500 to 35,000 sq.ft across Block A (Eastern) and Block B (Western). Configurations include furnished, warm shell, and bare shell options with direct owner coordination.",
  },
  {
    question: "What is the floor plate size at TECCI Park?",
    answer: "Each floor at TECCI Park has a 35,000 sq.ft floor plate with 3,750mm clear ceiling height and 10.5m minimum grid size.",
  },
  {
    question: "How much parking is available at TECCI Park?",
    answer: "TECCI Park provides 750 car parks distributed across 2 basements, ground level, and stilt across both blocks.",
  },
  {
    question: "What power backup does TECCI Park have?",
    answer: "TECCI Park has 100% power backup with 3 × 1,250 KVA Kirloskar-Cummins generators per block and 72 hours of fuel backup capacity. Electrical supply is 3.2 MVA HT per block from TNEB.",
  },
  {
    question: "Who are the major tenants at TECCI Park?",
    answer: "Major tenants include Vestas Technology R&D, Savista, Cactus Corporate Coworking (with sub-tenants including Wipro, Walmart, and Royal Enfield), Altruist Technologies, Conserve Solutions, and other leading enterprises.",
  },
  {
    question: "How do I lease office space at TECCI Park?",
    answer: "For leasing enquiries, contact TECCI Park at info@teccipark.com or call +91 44 4226 1112. Spaces are owner-coordinated with direct engagement between prospective tenants and space owners. Minimum lease terms typically start at 3 years.",
  },
];
