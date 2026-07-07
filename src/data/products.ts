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

export type ProductCategory = {
  slug: string;
  label: Record<Lang, string>;
  summary: Record<Lang, string>;
  image: string;
  capacityRange: string;
  powerTypes: string[];
  status?: "catalog" | "planned";
};

export type Product = {
  slug: string;
  sku: string;
  category: string;
  image: string;
  capacityTons: string;
  liftHeightM: string;
  powerType: string;
  availability: "PreOrder" | "InStock" | "OutOfStock";
  brochure?: string;
  translations: Record<
    Lang,
    {
      name: string;
      shortDescription: string;
      seoTitle: string;
      seoDescription: string;
      highlights: string[];
      applications: string[];
    }
  >;
  specs: {
    capacity: string;
    liftHeight: string;
    loadCenter: string;
    turningRadius: string;
    power: string;
    tireType: string;
  };
};

function productTranslations(name: string, category: string, capacity: string) {
  const shortDescription = `${name} from the WEGO catalog, prepared for global forklift buyers comparing ${category}, capacity, lift height, power type, and export support.`;
  const seoDescription = `Request a quote for ${name}. WEGO supports global forklift sourcing with catalog specifications, spare parts, warranty, and export documentation.`;
  const highlights = [
    "Catalog image and specifications are sourced from the WEGO forklift brochure",
    `Capacity range: ${capacity}`,
    "Prepared for export inquiry, spare parts support, and model comparison"
  ];
  const applications = ["Warehouse logistics", "Factory handling", "Container loading", "Outdoor material handling"];

  return {
    en: { name, shortDescription, seoTitle: `${name} | WEGO Forklift`, seoDescription, highlights, applications },
    es: { name, shortDescription, seoTitle: `${name} | WEGO Forklift`, seoDescription, highlights, applications },
    fr: { name, shortDescription, seoTitle: `${name} | WEGO Forklift`, seoDescription, highlights, applications },
    ja: { name, shortDescription, seoTitle: `${name} | WEGO Forklift`, seoDescription, highlights, applications },
    de: { name, shortDescription, seoTitle: `${name} | WEGO Forklift`, seoDescription, highlights, applications },
    pt: { name, shortDescription, seoTitle: `${name} | WEGO Forklift`, seoDescription, highlights, applications },
    ko: { name, shortDescription, seoTitle: `${name} | WEGO Forklift`, seoDescription, highlights, applications },
    ar: { name, shortDescription, seoTitle: `${name} | WEGO Forklift`, seoDescription, highlights, applications }
  } satisfies Product["translations"];
}

export const categories: ProductCategory[] = [
  {
    slug: "lithium-electric-forklifts",
    label: localized("Lithium Electric Forklifts"),
    summary: localized("1.5T-3.5T lithium battery forklifts for clean indoor handling, warehouse logistics, and efficient daily operation."),
    image: "/images/catalog/electric-15-35t.jpg",
    capacityRange: "1.5T-3.5T",
    powerTypes: ["Lithium battery"],
    status: "catalog"
  },
  {
    slug: "diesel-forklifts",
    label: localized("Diesel Forklifts"),
    summary: localized("2.5T-5.0T diesel forklifts for outdoor yards, factories, loading docks, and general heavy handling."),
    image: "/images/catalog/diesel-35t.jpg",
    capacityRange: "2.5T-5.0T",
    powerTypes: ["Diesel"],
    status: "catalog"
  },
  {
    slug: "heavy-duty-forklifts",
    label: localized("Heavy Duty Forklifts"),
    summary: localized("7.0T-10.0T diesel forklifts for heavy loads, containers, ports, steel yards, and industrial logistics."),
    image: "/images/catalog/diesel-100t.jpg",
    capacityRange: "7.0T-10.0T",
    powerTypes: ["Diesel"],
    status: "catalog"
  },
  {
    slug: "lpg-forklifts",
    label: localized("LPG Forklifts"),
    summary: localized("2.5T LPG forklift series for buyers needing flexible indoor-outdoor operation and fast refueling."),
    image: "/images/catalog/lpg-25t.jpg",
    capacityRange: "2.5T",
    powerTypes: ["LPG", "Gasoline"],
    status: "catalog"
  },
  {
    slug: "rough-terrain-forklifts",
    label: localized("Rough Terrain Forklifts"),
    summary: localized("3.0T-5.0T rough terrain forklifts for construction sites, uneven yards, farms, and outdoor cargo handling."),
    image: "/images/catalog/rough-terrain-30-50t.jpg",
    capacityRange: "3.0T-5.0T",
    powerTypes: ["Diesel"],
    status: "catalog"
  },
  {
    slug: "electric-pallet-stackers",
    label: localized("Electric Pallet Stackers"),
    summary: localized("1.5T-2.0T electric pallet stackers for pallet movement, short-distance transport, and warehouse stacking."),
    image: "/images/catalog/electric-pallet-stacker-20t.jpg",
    capacityRange: "1.5T-2.0T",
    powerTypes: ["Battery"],
    status: "catalog"
  },
  {
    slug: "pallet-trucks",
    label: localized("Pallet Trucks"),
    summary: localized("Entry-level pallet handling equipment reserved for future WEGO catalog expansion."),
    image: "/images/catalog/electric-pallet-stacker-15t.jpg",
    capacityRange: "Future range",
    powerTypes: ["Manual", "Electric"],
    status: "planned"
  },
  {
    slug: "reach-trucks",
    label: localized("Reach Trucks"),
    summary: localized("Narrow aisle and high-rack warehouse equipment reserved for future WEGO catalog expansion."),
    image: "/images/catalog/electric-15-35t.jpg",
    capacityRange: "Future range",
    powerTypes: ["Battery"],
    status: "planned"
  },
  {
    slug: "agv-amr",
    label: localized("AGV / AMR Solutions"),
    summary: localized("Automation-ready material handling category reserved for future WEGO intelligent logistics products."),
    image: "/images/catalog/factory.jpg",
    capacityRange: "Project based",
    powerTypes: ["Electric"],
    status: "planned"
  }
];

export const products: Product[] = [
  {
    slug: "wego-electric-forklift-15-35t",
    sku: "CPD15E-CPD35E",
    category: "lithium-electric-forklifts",
    image: "/images/catalog/electric-15-35t.jpg",
    capacityTons: "1.5T-3.5T",
    liftHeightM: "3.0 m standard",
    powerType: "Lithium battery",
    availability: "PreOrder",
    translations: productTranslations("WEGO Lithium Electric Forklift 1.5T-3.5T", "lithium electric forklifts", "1.5T-3.5T"),
    specs: {
      capacity: "1500-3500 kg",
      liftHeight: "3000 mm standard",
      loadCenter: "500 mm",
      turningRadius: "2200-2500 mm",
      power: "Lithium battery",
      tireType: "Pneumatic / solid options"
    }
  },
  {
    slug: "wego-diesel-forklift-25t",
    sku: "CPCD25",
    category: "diesel-forklifts",
    image: "/images/catalog/diesel-25t.jpg",
    capacityTons: "2.5T",
    liftHeightM: "3.0 m standard",
    powerType: "Diesel",
    availability: "PreOrder",
    translations: productTranslations("WEGO Diesel Forklift 2.5T", "diesel forklifts", "2.5T"),
    specs: {
      capacity: "2500 kg",
      liftHeight: "3000 mm standard",
      loadCenter: "500 mm",
      turningRadius: "Catalog specification",
      power: "Diesel engine",
      tireType: "Pneumatic"
    }
  },
  {
    slug: "wego-diesel-forklift-30t",
    sku: "CPCD30",
    category: "diesel-forklifts",
    image: "/images/catalog/diesel-30t.jpg",
    capacityTons: "3.0T",
    liftHeightM: "3.0 m standard",
    powerType: "Diesel",
    availability: "PreOrder",
    translations: productTranslations("WEGO Diesel Forklift 3.0T", "diesel forklifts", "3.0T"),
    specs: {
      capacity: "3000 kg",
      liftHeight: "3000 mm standard",
      loadCenter: "500 mm",
      turningRadius: "Catalog specification",
      power: "Diesel engine",
      tireType: "Pneumatic"
    }
  },
  {
    slug: "wego-diesel-forklift-35t",
    sku: "CPCD35",
    category: "diesel-forklifts",
    image: "/images/catalog/diesel-35t.jpg",
    capacityTons: "3.5T",
    liftHeightM: "3.0 m standard",
    powerType: "Diesel",
    availability: "PreOrder",
    translations: productTranslations("WEGO Diesel Forklift 3.5T", "diesel forklifts", "3.5T"),
    specs: {
      capacity: "3500 kg",
      liftHeight: "3000 mm standard",
      loadCenter: "500 mm",
      turningRadius: "Catalog specification",
      power: "Diesel engine",
      tireType: "Pneumatic"
    }
  },
  {
    slug: "wego-diesel-forklift-40t",
    sku: "CPCD40",
    category: "diesel-forklifts",
    image: "/images/catalog/diesel-40t.jpg",
    capacityTons: "4.0T",
    liftHeightM: "3.0 m standard",
    powerType: "Diesel",
    availability: "PreOrder",
    translations: productTranslations("WEGO Diesel Forklift 4.0T", "diesel forklifts", "4.0T"),
    specs: {
      capacity: "4000 kg",
      liftHeight: "3000 mm standard",
      loadCenter: "500 mm",
      turningRadius: "Catalog specification",
      power: "Diesel engine",
      tireType: "Pneumatic"
    }
  },
  {
    slug: "wego-diesel-forklift-50t",
    sku: "CPCD50",
    category: "diesel-forklifts",
    image: "/images/catalog/diesel-50t.jpg",
    capacityTons: "5.0T",
    liftHeightM: "3.0 m standard",
    powerType: "Diesel",
    availability: "PreOrder",
    translations: productTranslations("WEGO Diesel Forklift 5.0T", "diesel forklifts", "5.0T"),
    specs: {
      capacity: "5000 kg",
      liftHeight: "3000 mm standard",
      loadCenter: "500 mm",
      turningRadius: "Catalog specification",
      power: "Diesel engine",
      tireType: "Pneumatic"
    }
  },
  {
    slug: "wego-heavy-duty-diesel-forklift-70t",
    sku: "CPCD70",
    category: "heavy-duty-forklifts",
    image: "/images/catalog/diesel-70t.jpg",
    capacityTons: "7.0T",
    liftHeightM: "3.0 m standard",
    powerType: "Diesel",
    availability: "PreOrder",
    translations: productTranslations("WEGO Heavy Duty Diesel Forklift 7.0T", "heavy duty forklifts", "7.0T"),
    specs: {
      capacity: "7000 kg",
      liftHeight: "3000 mm standard",
      loadCenter: "600 mm",
      turningRadius: "Catalog specification",
      power: "Diesel engine",
      tireType: "Large pneumatic"
    }
  },
  {
    slug: "wego-heavy-duty-diesel-forklift-80t",
    sku: "CPCD80",
    category: "heavy-duty-forklifts",
    image: "/images/catalog/diesel-80t.jpg",
    capacityTons: "8.0T",
    liftHeightM: "3.0 m standard",
    powerType: "Diesel",
    availability: "PreOrder",
    translations: productTranslations("WEGO Heavy Duty Diesel Forklift 8.0T", "heavy duty forklifts", "8.0T"),
    specs: {
      capacity: "8000 kg",
      liftHeight: "3000 mm standard",
      loadCenter: "600 mm",
      turningRadius: "Catalog specification",
      power: "Diesel engine",
      tireType: "Large pneumatic"
    }
  },
  {
    slug: "wego-heavy-duty-diesel-forklift-100t",
    sku: "CPCD100",
    category: "heavy-duty-forklifts",
    image: "/images/catalog/diesel-100t.jpg",
    capacityTons: "10.0T",
    liftHeightM: "3.0 m standard",
    powerType: "Diesel",
    availability: "PreOrder",
    translations: productTranslations("WEGO Heavy Duty Diesel Forklift 10.0T", "heavy duty forklifts", "10.0T"),
    specs: {
      capacity: "10000 kg",
      liftHeight: "3000 mm standard",
      loadCenter: "600 mm",
      turningRadius: "Catalog specification",
      power: "Diesel engine",
      tireType: "Large pneumatic"
    }
  },
  {
    slug: "wego-lpg-forklift-25t",
    sku: "CPQD25",
    category: "lpg-forklifts",
    image: "/images/catalog/lpg-25t.jpg",
    capacityTons: "2.5T",
    liftHeightM: "3.0 m standard",
    powerType: "LPG / gasoline",
    availability: "PreOrder",
    translations: productTranslations("WEGO LPG Forklift 2.5T", "LPG forklifts", "2.5T"),
    specs: {
      capacity: "2500 kg",
      liftHeight: "3000 mm standard",
      loadCenter: "500 mm",
      turningRadius: "Catalog specification",
      power: "LPG / gasoline",
      tireType: "Pneumatic"
    }
  },
  {
    slug: "wego-rough-terrain-forklift-30-50t",
    sku: "CPCY30-CPCY50",
    category: "rough-terrain-forklifts",
    image: "/images/catalog/rough-terrain-30-50t.jpg",
    capacityTons: "3.0T-5.0T",
    liftHeightM: "3.0 m standard",
    powerType: "Diesel",
    availability: "PreOrder",
    translations: productTranslations("WEGO Rough Terrain Forklift 3.0T-5.0T", "rough terrain forklifts", "3.0T-5.0T"),
    specs: {
      capacity: "3000-5000 kg",
      liftHeight: "3000 mm standard",
      loadCenter: "500 mm",
      turningRadius: "Catalog specification",
      power: "Diesel engine",
      tireType: "Large pneumatic"
    }
  },
  {
    slug: "wego-electric-pallet-stacker-20t",
    sku: "CDD20",
    category: "electric-pallet-stackers",
    image: "/images/catalog/electric-pallet-stacker-20t.jpg",
    capacityTons: "2.0T",
    liftHeightM: "Catalog options",
    powerType: "Battery",
    availability: "PreOrder",
    translations: productTranslations("WEGO Electric Pallet Stacker 2.0T", "electric pallet stackers", "2.0T"),
    specs: {
      capacity: "2000 kg",
      liftHeight: "Catalog options",
      loadCenter: "600 mm",
      turningRadius: "Catalog specification",
      power: "Battery",
      tireType: "PU / nylon"
    }
  },
  {
    slug: "wego-electric-pallet-stacker-15t",
    sku: "CDD15",
    category: "electric-pallet-stackers",
    image: "/images/catalog/electric-pallet-stacker-15t.jpg",
    capacityTons: "1.5T",
    liftHeightM: "Catalog options",
    powerType: "Battery",
    availability: "PreOrder",
    translations: productTranslations("WEGO Electric Pallet Stacker 1.5T", "electric pallet stackers", "1.5T"),
    specs: {
      capacity: "1500 kg",
      liftHeight: "Catalog options",
      loadCenter: "600 mm",
      turningRadius: "Catalog specification",
      power: "Battery",
      tireType: "PU / nylon"
    }
  }
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductName(product: Product, lang: Lang) {
  return product.translations[lang]?.name ?? product.translations.en.name;
}

export function getCategoryProducts(categorySlug: string) {
  return products.filter((product) => product.category === categorySlug);
}
