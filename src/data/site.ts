export const siteConfig = {
  brand: "WEGO Forklift",
  legalName: "WEGO Forklift",
  tagline: "Global forklift supply and export support",
  baseUrl: import.meta.env.PUBLIC_SITE_URL || "https://wegoforklift.com",
  allowIndexing: import.meta.env.PUBLIC_ALLOW_INDEXING === "true",
  email: import.meta.env.LEAD_EMAIL || "sales@cnwegogroup.com",
  phone: "+86 15106998335",
  whatsapp: "+8615106998335",
  address: "Industrial South Road, Licheng District, Jinan, Shandong, China",
  logo: "/images/brand/wego-logo.png",
  defaultImage: "/images/home/wego-forklift-series-hero.jpg",
  foundedYear: "2008",
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
