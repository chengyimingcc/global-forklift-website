export const siteConfig = {
  brand: "Forklift Global",
  legalName: "Forklift Global Trading Co.",
  tagline: "Global forklift supply framework",
  baseUrl: import.meta.env.PUBLIC_SITE_URL || "https://www.example-forklift.com",
  allowIndexing: import.meta.env.PUBLIC_ALLOW_INDEXING === "true",
  email: import.meta.env.LEAD_EMAIL || "sales@example-forklift.com",
  phone: "+1 000 000 0000",
  whatsapp: "+10000000000",
  address: "Add your factory or export office address here",
  defaultImage: "/images/forklift-warehouse-hero.png",
  foundedYear: "2026",
  social: {
    linkedin: "",
    youtube: "",
    facebook: ""
  }
} as const;

export const primaryMarkets = [
  "North America",
  "Latin America",
  "Europe",
  "Middle East",
  "Africa",
  "Asia-Pacific"
];
