import type { Lang } from "./languages";

export type LocalizedText = Record<Lang, string>;

const localized = (value: string): LocalizedText => ({
  en: value,
  es: value,
  fr: value,
  ja: value,
  de: value,
  pt: value,
  ko: value,
  ar: value
});

const translated = (value: Record<Lang, string>) => value;

export type ProductCategory = {
  slug: string;
  label: Record<Lang, string>;
  summary: Record<Lang, string>;
  image: string;
  capacityRange: string;
  powerTypes: string[];
  status?: "catalog" | "planned";
};

export type ProductSpec = {
  labelKey: string;
  value: LocalizedText;
};

export type Product = {
  slug: string;
  sku: string;
  brand: string;
  category: string;
  image: string;
  gallery: string[];
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
  specs: ProductSpec[];
};

type ProductSeed = {
  slug: string;
  sku: string;
  brand?: string;
  name: string;
  category: string;
  imageDirectory: string;
  imageCount: number;
  capacity: string;
  mastType: string;
  powerType: string;
  tireType: string;
  applications?: string[];
};

function productTranslations(seed: ProductSeed): Product["translations"] {
  const category = categories.find((item) => item.slug === seed.category)?.label.en ?? "forklift";
  const shortDescription = `${seed.name} with ${seed.capacity} rated capacity and ${seed.mastType.toLowerCase()}. Compare the current product photography and request a confirmed configuration for export.`;
  const seoDescription = `Request a quote for ${seed.name}. Review current product images and confirm mast, engine or battery, tires, attachments, shipping destination, and export support with the WEGO team.`;
  const highlights = [
    "Current product photography supplied by the WEGO sales team",
    `Rated capacity: ${seed.capacity}`,
    `${seed.mastType}; final lift height and configuration are confirmed before quotation`
  ];
  const applications = seed.applications ?? [
    "Factory and warehouse material handling",
    "Loading, unloading, and short-distance transport",
    "Export projects requiring model and attachment confirmation"
  ];
  const copy = {
    name: seed.name,
    shortDescription,
    seoTitle: `${seed.name} | ${category} | WEGO`,
    seoDescription,
    highlights,
    applications
  };

  return {
    en: copy,
    es: copy,
    fr: copy,
    ja: copy,
    de: copy,
    pt: copy,
    ko: copy,
    ar: copy
  };
}

function imageGallery(directory: string, count: number) {
  return Array.from({ length: count }, (_, index) => `/images/products/${directory}/${String(index + 1).padStart(2, "0")}.webp`);
}

export const categories: ProductCategory[] = [
  {
    slug: "lithium-electric-forklifts",
    label: translated({
      en: "Lithium & Electric Forklifts",
      es: "Montacargas de litio y eléctricos",
      fr: "Chariots lithium et électriques",
      ja: "リチウム・電動フォークリフト",
      de: "Lithium- und Elektrostapler",
      pt: "Empilhadeiras de lítio e elétricas",
      ko: "리튬 및 전동 지게차",
      ar: "رافعات الليثيوم والكهرباء"
    }),
    summary: localized("2.5T-3.5T battery-powered counterbalance forklifts for warehouses, factories, and clean material handling."),
    image: "/images/products/lithium-25t/01.webp",
    capacityRange: "2.5T-3.5T",
    powerTypes: ["Lithium battery", "Electric"],
    status: "catalog"
  },
  {
    slug: "diesel-forklifts",
    label: translated({
      en: "Diesel Forklifts",
      es: "Montacargas diésel",
      fr: "Chariots diesel",
      ja: "ディーゼルフォークリフト",
      de: "Dieselstapler",
      pt: "Empilhadeiras a diesel",
      ko: "디젤 지게차",
      ar: "رافعات ديزل"
    }),
    summary: localized("2.5T-5.0T diesel forklifts with two-stage and three-stage mast options for general outdoor and industrial handling."),
    image: "/images/products/diesel-35t-2-stage/01.webp",
    capacityRange: "2.5T-5.0T",
    powerTypes: ["Diesel"],
    status: "catalog"
  },
  {
    slug: "heavy-duty-forklifts",
    label: translated({
      en: "Heavy Duty Forklifts",
      es: "Montacargas de gran capacidad",
      fr: "Chariots grande capacité",
      ja: "大型フォークリフト",
      de: "Schwerlaststapler",
      pt: "Empilhadeiras de grande porte",
      ko: "대형 지게차",
      ar: "رافعات للخدمة الشاقة"
    }),
    summary: localized("7.0T-10.0T diesel forklifts for large loads, industrial yards, steel, ports, and demanding logistics work."),
    image: "/images/products/heavy-duty-100t/01.webp",
    capacityRange: "7.0T-10.0T",
    powerTypes: ["Diesel"],
    status: "catalog"
  },
  {
    slug: "rough-terrain-forklifts",
    label: translated({
      en: "Rough Terrain Forklifts",
      es: "Montacargas todoterreno",
      fr: "Chariots tout-terrain",
      ja: "不整地フォークリフト",
      de: "Geländestapler",
      pt: "Empilhadeiras todo-terreno",
      ko: "험지용 지게차",
      ar: "رافعات للأراضي الوعرة"
    }),
    summary: localized("3.5T rough terrain forklift for uneven yards, construction sites, farms, and outdoor cargo handling."),
    image: "/images/products/rough-terrain-35t/01.webp",
    capacityRange: "3.5T",
    powerTypes: ["Diesel"],
    status: "catalog"
  },
  {
    slug: "electric-pallet-stackers",
    label: translated({
      en: "Electric Pallet Stackers",
      es: "Apiladores eléctricos",
      fr: "Gerbeurs électriques",
      ja: "電動スタッカー",
      de: "Elektro-Hochhubwagen",
      pt: "Empilhadores elétricos",
      ko: "전동 스태커",
      ar: "مكدسات طبالي كهربائية"
    }),
    summary: localized("Compact electric pallet stacker for pallet movement and warehouse stacking. Capacity and lift configuration are confirmed per inquiry."),
    image: "/images/products/electric-pallet-stacker/01.webp",
    capacityRange: "Model based",
    powerTypes: ["Battery"],
    status: "catalog"
  }
];

const productSeeds: ProductSeed[] = [
  {
    slug: "wego-diesel-forklift-25t-3-stage",
    sku: "WG-D25-3M",
    name: "WEGO 2.5T Diesel Forklift - 3-Stage Mast",
    category: "diesel-forklifts",
    imageDirectory: "diesel-25t-3-stage",
    imageCount: 8,
    capacity: "2.5T",
    mastType: "3-stage mast",
    powerType: "Diesel",
    tireType: "Pneumatic / solid options"
  },
  {
    slug: "wego-diesel-forklift-25t-classic",
    sku: "WG-D25-C",
    name: "WEGO 2.5T Diesel Forklift - Classic Series",
    category: "diesel-forklifts",
    imageDirectory: "diesel-25t-classic",
    imageCount: 8,
    capacity: "2.5T",
    mastType: "Mast configuration to be confirmed",
    powerType: "Diesel",
    tireType: "Pneumatic / solid options"
  },
  {
    slug: "wego-lithium-forklift-25t",
    sku: "WG-L25",
    name: "WEGO 2.5T Lithium Forklift",
    category: "lithium-electric-forklifts",
    imageDirectory: "lithium-25t",
    imageCount: 17,
    capacity: "2.5T",
    mastType: "Mast configuration to be confirmed",
    powerType: "Lithium battery",
    tireType: "Pneumatic / solid options"
  },
  {
    slug: "wego-diesel-forklift-30t-2-stage",
    sku: "WG-D30-2M",
    name: "WEGO 3.0T Diesel Forklift - 2-Stage Mast",
    category: "diesel-forklifts",
    imageDirectory: "diesel-30t-2-stage",
    imageCount: 9,
    capacity: "3.0T",
    mastType: "2-stage mast",
    powerType: "Diesel",
    tireType: "Pneumatic / solid options"
  },
  {
    slug: "wego-lithium-forklift-30t",
    sku: "WG-L30",
    name: "WEGO 3.0T Lithium Forklift",
    category: "lithium-electric-forklifts",
    imageDirectory: "lithium-30t",
    imageCount: 12,
    capacity: "3.0T",
    mastType: "Mast configuration to be confirmed",
    powerType: "Lithium battery",
    tireType: "Pneumatic / solid options"
  },
  {
    slug: "wego-diesel-forklift-35t-2-stage",
    sku: "A35-2M",
    name: "WEGO A35 3.5T Diesel Forklift - 2-Stage Mast",
    category: "diesel-forklifts",
    imageDirectory: "diesel-35t-2-stage",
    imageCount: 8,
    capacity: "3.5T",
    mastType: "2-stage mast",
    powerType: "Diesel",
    tireType: "Pneumatic / solid options"
  },
  {
    slug: "wego-electric-forklift-k35",
    sku: "K35",
    name: "WEGO K35 3.5T Electric Forklift",
    category: "lithium-electric-forklifts",
    imageDirectory: "electric-35t",
    imageCount: 12,
    capacity: "3.5T",
    mastType: "Mast configuration to be confirmed",
    powerType: "Electric",
    tireType: "Pneumatic / solid options"
  },
  {
    slug: "wego-diesel-forklift-35t-classic",
    sku: "WG-D35-C",
    name: "WEGO 3.5T Diesel Forklift - Classic Series",
    category: "diesel-forklifts",
    imageDirectory: "diesel-35t-classic",
    imageCount: 8,
    capacity: "3.5T",
    mastType: "Mast configuration to be confirmed",
    powerType: "Diesel",
    tireType: "Pneumatic / solid options"
  },
  {
    slug: "wego-rough-terrain-forklift-35t",
    sku: "WG-RT35",
    name: "WEGO 3.5T Rough Terrain Forklift",
    category: "rough-terrain-forklifts",
    imageDirectory: "rough-terrain-35t",
    imageCount: 9,
    capacity: "3.5T",
    mastType: "Mast configuration to be confirmed",
    powerType: "Diesel",
    tireType: "Rough-terrain pneumatic",
    applications: ["Construction sites and uneven yards", "Farms, timber, and outdoor storage", "Outdoor loading on unpaved surfaces"]
  },
  {
    slug: "wego-diesel-forklift-40t-2-stage",
    sku: "WG-D40-2M",
    name: "WEGO 4.0T Diesel Forklift - 2-Stage Mast",
    category: "diesel-forklifts",
    imageDirectory: "diesel-40t-2-stage",
    imageCount: 8,
    capacity: "4.0T",
    mastType: "2-stage mast",
    powerType: "Diesel",
    tireType: "Pneumatic / solid options"
  },
  {
    slug: "wego-diesel-forklift-40t-3-stage",
    sku: "WG-D40-3M",
    name: "WEGO 4.0T Diesel Forklift - 3-Stage Mast",
    category: "diesel-forklifts",
    imageDirectory: "diesel-40t-3-stage",
    imageCount: 6,
    capacity: "4.0T",
    mastType: "3-stage mast",
    powerType: "Diesel",
    tireType: "Pneumatic / solid options"
  },
  {
    slug: "wego-diesel-forklift-50t-3-stage",
    sku: "A50-3M",
    name: "WEGO A50 5.0T Diesel Forklift - 3-Stage Mast",
    category: "diesel-forklifts",
    imageDirectory: "diesel-50t-3-stage",
    imageCount: 8,
    capacity: "5.0T",
    mastType: "3-stage mast",
    powerType: "Diesel",
    tireType: "Pneumatic / solid options"
  },
  {
    slug: "wego-heavy-duty-forklift-70t-2-stage",
    sku: "WG-D70-2M",
    name: "WEGO 7.0T Heavy Duty Diesel Forklift",
    category: "heavy-duty-forklifts",
    imageDirectory: "heavy-duty-70t-2-stage",
    imageCount: 6,
    capacity: "7.0T",
    mastType: "2-stage mast",
    powerType: "Diesel",
    tireType: "Large pneumatic"
  },
  {
    slug: "wego-heavy-duty-forklift-80t",
    sku: "WG-D80",
    name: "WEGO 8.0T Heavy Duty Diesel Forklift",
    category: "heavy-duty-forklifts",
    imageDirectory: "heavy-duty-80t",
    imageCount: 9,
    capacity: "8.0T",
    mastType: "Mast configuration to be confirmed",
    powerType: "Diesel",
    tireType: "Large pneumatic"
  },
  {
    slug: "wego-heavy-duty-forklift-100t",
    sku: "WG-D100",
    name: "WEGO 10.0T Heavy Duty Diesel Forklift",
    category: "heavy-duty-forklifts",
    imageDirectory: "heavy-duty-100t",
    imageCount: 10,
    capacity: "10.0T",
    mastType: "Mast configuration to be confirmed",
    powerType: "Diesel",
    tireType: "Large pneumatic"
  },
  {
    slug: "heli-electric-pallet-stacker-mc12",
    sku: "MC12",
    brand: "HELI",
    name: "HELI MC12 Electric Pallet Stacker",
    category: "electric-pallet-stackers",
    imageDirectory: "electric-pallet-stacker",
    imageCount: 25,
    capacity: "Confirm with sales",
    mastType: "Mast and lift height to be confirmed",
    powerType: "Battery",
    tireType: "PU / nylon",
    applications: ["Pallet movement in warehouses", "Low-noise indoor stacking", "Short-distance material transport"]
  }
];

const specValue = {
  dieselEngine: translated({
    en: "Diesel engine",
    es: "Motor diésel",
    fr: "Moteur diesel",
    ja: "ディーゼルエンジン",
    de: "Dieselmotor",
    pt: "Motor diesel",
    ko: "디젤 엔진",
    ar: "محرك ديزل"
  }),
  lithiumBattery: translated({
    en: "Lithium battery",
    es: "Batería de litio",
    fr: "Batterie lithium",
    ja: "リチウムバッテリー",
    de: "Lithiumbatterie",
    pt: "Bateria de lítio",
    ko: "리튬 배터리",
    ar: "بطارية ليثيوم"
  }),
  electricDrive: translated({
    en: "Electric drive",
    es: "Propulsión eléctrica",
    fr: "Entraînement électrique",
    ja: "電動駆動",
    de: "Elektroantrieb",
    pt: "Acionamento elétrico",
    ko: "전동 구동",
    ar: "دفع كهربائي"
  }),
  batteryPower: translated({
    en: "Battery powered",
    es: "Alimentación por batería",
    fr: "Alimentation par batterie",
    ja: "バッテリー駆動",
    de: "Batteriebetrieb",
    pt: "Alimentação por bateria",
    ko: "배터리 구동",
    ar: "تشغيل بالبطارية"
  }),
  twoStageMast: translated({
    en: "2-stage mast",
    es: "Mástil de 2 etapas",
    fr: "Mât à 2 étages",
    ja: "2段マスト",
    de: "2-Stufen-Mast",
    pt: "Mastro de 2 estágios",
    ko: "2단 마스트",
    ar: "سارية ثنائية المراحل"
  }),
  threeStageMast: translated({
    en: "3-stage mast",
    es: "Mástil de 3 etapas",
    fr: "Mât à 3 étages",
    ja: "3段マスト",
    de: "3-Stufen-Mast",
    pt: "Mastro de 3 estágios",
    ko: "3단 마스트",
    ar: "سارية ثلاثية المراحل"
  }),
  mastOptions: translated({
    en: "2-stage / 3-stage options",
    es: "Opciones de 2 / 3 etapas",
    fr: "Options 2 / 3 étages",
    ja: "2段 / 3段オプション",
    de: "2- / 3-Stufen-Optionen",
    pt: "Opções de 2 / 3 estágios",
    ko: "2단 / 3단 옵션",
    ar: "خيارات ثنائية / ثلاثية المراحل"
  }),
  automaticHydraulic: translated({
    en: "Automatic hydraulic transmission",
    es: "Transmisión hidráulica automática",
    fr: "Transmission hydraulique automatique",
    ja: "油圧オートマチック",
    de: "Hydraulisches Automatikgetriebe",
    pt: "Transmissão hidráulica automática",
    ko: "유압 자동 변속기",
    ar: "ناقل حركة هيدروليكي أوتوماتيكي"
  }),
  pneumaticSolidOptional: translated({
    en: "Pneumatic; solid optional",
    es: "Neumáticos; macizos opcionales",
    fr: "Pneumatiques; pleins en option",
    ja: "空気入り、ノーパンク選択可",
    de: "Luftreifen; Vollgummi optional",
    pt: "Pneumáticos; sólidos opcionais",
    ko: "공기압 타이어, 솔리드 옵션",
    ar: "هوائية؛ صلبة اختيارية"
  }),
  pneumatic: translated({
    en: "Pneumatic tyres",
    es: "Neumáticos",
    fr: "Pneumatiques",
    ja: "空気入りタイヤ",
    de: "Luftreifen",
    pt: "Pneumáticos",
    ko: "공기압 타이어",
    ar: "إطارات هوائية"
  }),
  roughTerrainPneumatic: translated({
    en: "Rough-terrain pneumatic tyres",
    es: "Neumáticos todoterreno",
    fr: "Pneumatiques tout-terrain",
    ja: "不整地用空気入りタイヤ",
    de: "Gelände-Luftreifen",
    pt: "Pneumáticos todo-terreno",
    ko: "험지용 공기압 타이어",
    ar: "إطارات هوائية للطرق الوعرة"
  }),
  solid: translated({
    en: "Solid tyres",
    es: "Neumáticos macizos",
    fr: "Pneus pleins",
    ja: "ノーパンクタイヤ",
    de: "Vollgummireifen",
    pt: "Pneus sólidos",
    ko: "솔리드 타이어",
    ar: "إطارات صلبة"
  }),
  puNylon: translated({
    en: "PU / nylon wheels",
    es: "Ruedas de PU / nailon",
    fr: "Roues PU / nylon",
    ja: "PU / ナイロン車輪",
    de: "PU- / Nylonrollen",
    pt: "Rodas de PU / nylon",
    ko: "PU / 나일론 휠",
    ar: "عجلات PU / نايلون"
  }),
  acMotor: translated({
    en: "AC motor",
    es: "Motor de CA",
    fr: "Moteur CA",
    ja: "ACモーター",
    de: "AC-Motor",
    pt: "Motor CA",
    ko: "AC 모터",
    ar: "محرك تيار متردد"
  }),
  walkie: translated({
    en: "Pedestrian / walkie",
    es: "Conductor acompañante",
    fr: "Conducteur accompagnant",
    ja: "歩行操作式",
    de: "Mitgängerbetrieb",
    pt: "Operação pedestre",
    ko: "보행식",
    ar: "تشغيل بالمشي خلفها"
  }),
  quotationConfirmed: translated({
    en: "Confirmed with quotation",
    es: "Confirmado con la cotización",
    fr: "Confirmé avec le devis",
    ja: "見積時に確認",
    de: "Mit dem Angebot bestätigt",
    pt: "Confirmado com a cotação",
    ko: "견적 시 확정",
    ar: "يؤكد مع عرض السعر"
  }),
  standardWarranty: translated({
    en: "12 months or 2,000 operating hours",
    es: "12 meses o 2.000 horas de trabajo",
    fr: "12 mois ou 2 000 heures de service",
    ja: "12か月または2,000稼働時間",
    de: "12 Monate oder 2.000 Betriebsstunden",
    pt: "12 meses ou 2.000 horas de operação",
    ko: "12개월 또는 2,000 운전시간",
    ar: "12 شهرا أو 2,000 ساعة تشغيل"
  })
};

const spec = (labelKey: string, value: string | LocalizedText): ProductSpec => ({
  labelKey,
  value: typeof value === "string" ? localized(value) : value
});

function productSpecs(seed: ProductSeed): ProductSpec[] {
  const warranty = spec("specWarranty", specValue.standardWarranty);

  switch (seed.slug) {
    case "wego-lithium-forklift-25t":
      return [
        spec("specModel", "CPCD25F"),
        spec("specRatedCapacity", "2,500 kg"),
        spec("specPower", specValue.lithiumBattery),
        spec("specBattery", "80 V / 280 Ah"),
        spec("specCharger", "80 V / 100 A"),
        spec("specLiftHeight", "3,000-6,000 mm"),
        spec("specLoadCenter", "500-600 mm"),
        spec("specForkLength", "1,070 mm"),
        spec("specTires", specValue.pneumatic),
        warranty
      ];
    case "wego-lithium-forklift-30t":
      return [
        spec("specModel", seed.sku),
        spec("specRatedCapacity", "3,000 kg"),
        spec("specPower", specValue.lithiumBattery),
        spec("specMast", specValue.threeStageMast),
        spec("specLiftHeight", "4,500 mm"),
        spec("specLoadCenter", "500-600 mm"),
        spec("specBattery", specValue.quotationConfirmed),
        spec("specForkLength", specValue.quotationConfirmed),
        spec("specTires", specValue.solid),
        warranty
      ];
    case "wego-electric-forklift-k35":
      return [
        spec("specModel", "K35"),
        spec("specRatedCapacity", "3,500 kg"),
        spec("specPower", specValue.electricDrive),
        spec("specMast", specValue.mastOptions),
        spec("specLiftHeight", "3,000-4,000 mm"),
        spec("specLoadCenter", "500-600 mm"),
        spec("specBattery", specValue.quotationConfirmed),
        spec("specForkLength", specValue.quotationConfirmed),
        spec("specTires", specValue.pneumaticSolidOptional),
        warranty
      ];
    case "wego-diesel-forklift-25t-3-stage":
      return dieselSpecs(seed, "CPCD25FR", specValue.threeStageMast, "4,500-8,000 mm", "1,070-2,500 mm");
    case "wego-diesel-forklift-25t-classic":
      return dieselSpecs(seed, "CPCD25FR", specValue.twoStageMast, "3,000-5,000 mm", "1,070-2,500 mm");
    case "wego-diesel-forklift-30t-2-stage":
      return dieselSpecs(seed, "CPCD30FR", specValue.twoStageMast, "3,000-5,000 mm", "1,220-2,500 mm", "China 490BPG");
    case "wego-diesel-forklift-35t-2-stage":
      return [
        ...dieselSpecs(seed, "CPCD35FR", specValue.twoStageMast, "3,000-5,000 mm", "1,220-2,500 mm"),
        spec("specRatedPower", "39 kW"),
        spec("specOperatingWeight", "4,580 kg")
      ];
    case "wego-diesel-forklift-35t-classic":
      return [
        ...dieselSpecs(seed, "CPCD35FR", specValue.mastOptions, "3,000-8,000 mm", "1,220-2,500 mm"),
        spec("specRatedPower", "39 kW"),
        spec("specOperatingWeight", "4,580 kg")
      ];
    case "wego-rough-terrain-forklift-35t":
      return [
        spec("specModel", "CPCD35FR"),
        spec("specRatedCapacity", "3,500 kg"),
        spec("specPower", specValue.dieselEngine),
        spec("specLiftHeight", "3,000-6,000 mm"),
        spec("specLoadCenter", "500-600 mm"),
        spec("specDimensions", "3,800 x 1,230 x 2,306 mm"),
        spec("specTires", specValue.roughTerrainPneumatic),
        spec("specOperatingWeight", "4,580 kg"),
        warranty
      ];
    case "wego-diesel-forklift-40t-2-stage":
      return dieselSpecs(
        seed,
        "CPCD40FR",
        specValue.twoStageMast,
        "3,000-5,000 mm",
        "1,220-2,400 mm",
        "Xinchai 498BPG 45 kW / Quanchai 4C6 48 kW"
      );
    case "wego-diesel-forklift-40t-3-stage":
      return dieselSpecs(
        seed,
        "CPCD40FR",
        specValue.threeStageMast,
        "4,500-6,000 mm",
        "1,220-2,400 mm",
        "Xinchai 498BPG 45 kW / Quanchai 4C6 48 kW"
      );
    case "wego-diesel-forklift-50t-3-stage":
      return dieselSpecs(
        seed,
        "CPCD50F",
        specValue.threeStageMast,
        "4,500-6,000 mm",
        "1,220-2,400 mm",
        "China III 62.5 kW"
      );
    case "wego-heavy-duty-forklift-70t-2-stage":
      return dieselSpecs(seed, "CPCD70F", specValue.twoStageMast, "3,000-6,000 mm", "1,220-2,400 mm", "China / Japan");
    case "wego-heavy-duty-forklift-80t":
      return dieselSpecs(seed, "CPCD80F", specValue.mastOptions, "3,000-5,000 mm", "1,520-2,500 mm", "China / Japan");
    case "wego-heavy-duty-forklift-100t":
      return [
        spec("specModel", "CPCD100F"),
        spec("specRatedCapacity", "10,000 kg"),
        spec("specPower", specValue.dieselEngine),
        spec("specMast", specValue.twoStageMast),
        spec("specLiftHeight", "3,000-5,000 mm"),
        spec("specLoadCenter", "500 mm"),
        spec("specTransmission", specValue.automaticHydraulic),
        spec("specEngine", "China III 4J1"),
        spec("specForkLength", "1,520-2,500 mm"),
        spec("specTires", specValue.pneumatic),
        warranty
      ];
    case "heli-electric-pallet-stacker-mc12":
      return [
        spec("specModel", "MC12"),
        spec("specRatedCapacity", "1,200 kg"),
        spec("specPower", specValue.batteryPower),
        spec("specDriveMotor", specValue.acMotor),
        spec("specOperatorType", specValue.walkie),
        spec("specLiftHeight", specValue.quotationConfirmed),
        spec("specBattery", specValue.quotationConfirmed),
        spec("specTires", specValue.puNylon),
        warranty
      ];
    default:
      return [
        spec("specModel", seed.sku),
        spec("specRatedCapacity", seed.capacity),
        spec("specPower", seed.powerType),
        spec("specMast", seed.mastType),
        spec("specTires", seed.tireType),
        warranty
      ];
  }
}

function dieselSpecs(
  seed: ProductSeed,
  model: string,
  mast: LocalizedText,
  liftHeight: string,
  forkLength: string,
  engine = "China / Japan"
): ProductSpec[] {
  return [
    spec("specModel", model),
    spec("specRatedCapacity", `${Math.round(Number.parseFloat(seed.capacity.replace("T", "")) * 1000).toLocaleString("en-US")} kg`),
    spec("specPower", specValue.dieselEngine),
    spec("specMast", mast),
    spec("specLiftHeight", liftHeight),
    spec("specLoadCenter", "500 mm"),
    spec("specTransmission", specValue.automaticHydraulic),
    spec("specEngine", engine),
    spec("specForkLength", forkLength),
    spec("specTires", specValue.pneumaticSolidOptional),
    spec("specWarranty", specValue.standardWarranty)
  ];
}

export const products: Product[] = productSeeds.map((seed) => {
  const gallery = imageGallery(seed.imageDirectory, seed.imageCount);

  return {
    slug: seed.slug,
    sku: seed.sku,
    brand: seed.brand ?? "WEGO",
    category: seed.category,
    image: gallery[0],
    gallery,
    capacityTons: seed.capacity,
    liftHeightM: seed.mastType,
    powerType: seed.powerType,
    availability: "PreOrder",
    translations: productTranslations(seed),
    specs: productSpecs(seed)
  };
});

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
