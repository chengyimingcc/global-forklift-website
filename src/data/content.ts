import type { Lang } from "./languages";

const localized = (value: string): Record<Lang, string> => ({
  en: value,
  es: value,
  fr: value,
  ja: value,
  de: value,
  pt: value,
  ko: value,
  ar: value
});

export type Solution = {
  slug: string;
  title: Record<Lang, string>;
  summary: Record<Lang, string>;
  image: string;
  recommendedCategories: string[];
  needs: string[];
};

export type SimplePage = {
  slug: string;
  title: Record<Lang, string>;
  summary: Record<Lang, string>;
  image?: string;
  bullets: string[];
};

export const solutions: Solution[] = [
  {
    slug: "transport-logistics",
    title: localized("Transport & Logistics"),
    summary: localized("Forklift and warehouse equipment selection for pallet handling, dock work, short-distance movement, and distribution centers."),
    image: "/images/catalog/electric-15-35t.jpg",
    recommendedCategories: ["lithium-electric-forklifts", "diesel-forklifts", "electric-pallet-stackers"],
    needs: ["Fast loading and unloading", "Mixed indoor-outdoor operation", "Reliable parts and service support"]
  },
  {
    slug: "manufacturing",
    title: localized("Manufacturing"),
    summary: localized("Material handling plans for production lines, parts movement, finished goods storage, and factory logistics."),
    image: "/images/catalog/factory.jpg",
    recommendedCategories: ["lithium-electric-forklifts", "diesel-forklifts", "lpg-forklifts"],
    needs: ["Stable uptime", "Operator visibility", "Clean handling around production areas"]
  },
  {
    slug: "ports-terminals",
    title: localized("Ports & Terminals"),
    summary: localized("Heavy-duty forklift recommendations for containers, yards, ports, terminals, and export cargo movement."),
    image: "/images/catalog/diesel-100t.jpg",
    recommendedCategories: ["heavy-duty-forklifts", "diesel-forklifts"],
    needs: ["High capacity", "Outdoor durability", "Long duty cycles"]
  },
  {
    slug: "construction-yards",
    title: localized("Construction & Outdoor Yards"),
    summary: localized("Forklift choices for uneven ground, construction materials, rough yards, timber, stone, and outdoor cargo handling."),
    image: "/images/catalog/rough-terrain-30-50t.jpg",
    recommendedCategories: ["rough-terrain-forklifts", "diesel-forklifts"],
    needs: ["Ground clearance", "Large pneumatic tires", "Outdoor power and traction"]
  },
  {
    slug: "food-pharma",
    title: localized("Food & Pharma Warehousing"),
    summary: localized("Cleaner forklift and stacker options for indoor storage, cold-chain areas, packaging plants, and regulated warehouses."),
    image: "/images/catalog/electric-pallet-stacker-20t.jpg",
    recommendedCategories: ["lithium-electric-forklifts", "electric-pallet-stackers"],
    needs: ["Low emissions", "Compact turning", "Battery operation"]
  },
  {
    slug: "chemical-energy",
    title: localized("Chemical & Energy"),
    summary: localized("Export-ready material handling planning for chemicals, energy sites, outdoor storage, and heavy industrial operations."),
    image: "/images/catalog/diesel-70t.jpg",
    recommendedCategories: ["diesel-forklifts", "heavy-duty-forklifts", "rough-terrain-forklifts"],
    needs: ["Heavy loads", "Outdoor reliability", "Clear safety and maintenance planning"]
  }
];

// Backward-compatible alias for older industry routes.
export const industries = solutions.map((solution) => ({
  slug: solution.slug,
  title: solution.title,
  summary: solution.summary
}));

export const servicePages: SimplePage[] = [
  {
    slug: "spare-parts",
    title: localized("Spare Parts"),
    summary: localized("Prepare spare parts lists, wearing parts, batteries, tires, filters, and long-term supply planning for export buyers."),
    image: "/images/catalog/factory.jpg",
    bullets: ["Parts list by model", "Recommended first-order spare parts", "Export packing and shipment support"]
  },
  {
    slug: "after-sales-service",
    title: localized("After-sales Service"),
    summary: localized("A service framework for warranty, remote support, maintenance planning, and local partner coordination."),
    image: "/images/catalog/diesel-35t.jpg",
    bullets: ["Warranty workflow", "Remote troubleshooting", "Maintenance schedule planning"]
  },
  {
    slug: "warranty",
    title: localized("Warranty"),
    summary: localized("Reserve this page for final WEGO warranty terms, covered components, exclusions, and claim process."),
    image: "/images/catalog/electric-15-35t.jpg",
    bullets: ["Warranty period", "Claim documents", "Replacement parts process"]
  },
  {
    slug: "downloads",
    title: localized("Downloads"),
    summary: localized("Central place for brochures, specification sheets, manuals, certificates, and buyer checklists."),
    image: "/images/catalog/hero-forklift.jpg",
    bullets: ["Product brochure", "Specification sheets", "Manuals and certificates"]
  }
];

export const companyPages: SimplePage[] = [
  {
    slug: "company",
    title: localized("Company"),
    summary: localized("WEGO Forklift profile, export focus, manufacturing network, and global buyer support."),
    image: "/images/catalog/factory.jpg",
    bullets: ["Founded in 2016", "Forklift and warehouse equipment focus", "Global export support"]
  },
  {
    slug: "global-network",
    title: localized("Global Network"),
    summary: localized("Reserved for distributors, dealers, service partners, export regions, and international project references."),
    image: "/images/catalog/hero-forklift.jpg",
    bullets: ["Dealer inquiries", "Export regions", "Partner service support"]
  },
  {
    slug: "certificates",
    title: localized("Certificates"),
    summary: localized("Reserved for certificates, inspection documents, quality systems, and compliance proof."),
    image: "/images/catalog/electric-15-35t.jpg",
    bullets: ["Quality documentation", "Compliance documents", "Inspection workflow"]
  },
  {
    slug: "case-studies",
    title: localized("Case Studies"),
    summary: localized("Reserved for customer projects, shipping cases, application stories, and buyer proof."),
    image: "/images/catalog/diesel-50t.jpg",
    bullets: ["Customer applications", "Container loading proof", "Industry stories"]
  }
];

export const resources = [
  {
    slug: "forklift-buying-guide",
    title: localized("Forklift Buying Guide"),
    summary: localized("Capacity, load center, lift height, power type, aisle width, tire, and delivery questions for global buyers.")
  },
  {
    slug: "maintenance-checklist",
    title: localized("Maintenance Checklist"),
    summary: localized("Daily inspection, tires, batteries, engines, hydraulics, forks, mast, and spare parts planning.")
  },
  {
    slug: "battery-guide",
    title: localized("Forklift Battery Guide"),
    summary: localized("Lithium battery, charger, runtime, charging safety, and battery maintenance planning.")
  }
] satisfies Array<{ slug: string; title: Record<Lang, string>; summary: Record<Lang, string> }>;

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}

export function getCompanyPage(slug: string) {
  return companyPages.find((page) => page.slug === slug);
}
