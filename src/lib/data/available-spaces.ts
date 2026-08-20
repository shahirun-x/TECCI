/**
 * AVAILABLE SPACES — Direct listings data
 *
 * To add a new listing:
 *   1. Add a new object to the AVAILABLE_SPACES array
 *   2. Set isActive: true
 *   3. Commit and push — Vercel auto-deploys in ~30 seconds
 *
 * To remove/hide a listing:
 *   1. Change isActive to false (soft-hide, keeps historical record)
 *   OR delete the entry entirely (hard-remove)
 *
 * Photos: place image files in public/images/spaces/ and reference like:
 *   photos: ["/images/spaces/block-a-7-1.jpg"]
 */

export type AvailableSpace = {
  id: string;
  block: "Block A" | "Block B";
  floor: string; // e.g. "7th Floor", "Ground Floor"
  size: string; // e.g. "35,000 sq.ft" — always include unit
  condition: "Warm Shell" | "Bare Shell" | "Furnished" | "Fitted Out";
  availability: "Immediate" | "Coming Soon";
  availabilityDate?: string; // e.g. "Q1 2027" — only if not Immediate
  ownerName: string;
  ownerPhone: string;
  ownerEmail?: string;
  description?: string; // optional short highlight
  photos?: string[]; // optional array of image paths, e.g. ["/images/spaces/a-7-1.jpg"]
  isActive: boolean; // true = show on site, false = hide
  postedDate: string; // ISO format YYYY-MM-DD for sorting
};

export const AVAILABLE_SPACES: AvailableSpace[] = [
  // Example placeholder entries — replace/remove as real listings come in
  {
    id: "block-a-7th-floor",
    block: "Block A",
    floor: "7th Floor",
    size: "35,000 sq.ft",
    condition: "Warm Shell",
    availability: "Immediate",
    ownerName: "Owner Name Placeholder",
    ownerPhone: "+91 XXXXX XXXXX",
    ownerEmail: "owner@example.com",
    description: "Full-floor availability with panoramic OMR views. Corner unit with wraparound glazing.",
    isActive: true,
    postedDate: "2026-08-19",
  },
  {
    id: "block-b-3rd-floor",
    block: "Block B",
    floor: "3rd Floor",
    size: "17,500 sq.ft",
    condition: "Bare Shell",
    availability: "Coming Soon",
    availabilityDate: "Q1 2027",
    ownerName: "Owner Name Placeholder",
    ownerPhone: "+91 XXXXX XXXXX",
    description: "Half-floor with dedicated entrance. Fit-out flexibility for tenant customization.",
    isActive: true,
    postedDate: "2026-08-15",
  },
];

// Helper to get only active listings, sorted by most recent
export const getActiveListings = () =>
  AVAILABLE_SPACES.filter((space) => space.isActive).sort(
    (a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
  );
