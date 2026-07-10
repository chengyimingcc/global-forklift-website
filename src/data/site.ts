export const siteConfig = {
  brand: "WEGO Forklift",
  legalName: "WEGO Forklift",
  tagline: "Global forklift supply and export support",
  baseUrl: import.meta.env.PUBLIC_SITE_URL || "https://www.wegoforklift.com",
  allowIndexing: import.meta.env.PUBLIC_ALLOW_INDEXING === "true",
  email: import.meta.env.LEAD_EMAIL || "sales@cnwegogroup.com",
  phone: "+86 15106998335",
  whatsapp: "+8615106998335",
  address: "Industrial South Road, Licheng District, Jinan, Shandong, China",
  logo: "/images/brand/wego-logo.png",
  defaultImage: "/images/products/heavy-duty-100t/01.webp",
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
