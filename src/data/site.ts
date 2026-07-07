export const siteConfig = {
  brand: "WEGO Forklift",
  legalName: "WEGO Forklift",
  tagline: "Global forklift supply and export support",
  baseUrl: import.meta.env.PUBLIC_SITE_URL || "https://www.wegoforklift.com",
  allowIndexing: import.meta.env.PUBLIC_ALLOW_INDEXING === "true",
  email: import.meta.env.LEAD_EMAIL || "sales@wegoforklift.com",
  phone: "+1 000 000 0000",
  whatsapp: "+10000000000",
  address: "Add your factory or export office address here",
  logo: "/images/brand/wego-logo.png",
  defaultImage: "/images/catalog/hero-forklift.jpg",
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
