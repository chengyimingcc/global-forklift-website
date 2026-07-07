import type { Lang } from "./languages";

export type ProductCategory = {
  slug: string;
  label: Record<Lang, string>;
  summary: Record<Lang, string>;
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

const sharedProductText = {
  en: {
    highlights: ["Replace with exact model advantages", "Add certificate and warranty details", "Prepare downloadable spec sheet"],
    applications: ["Warehouse handling", "Container loading", "Factory logistics"]
  },
  es: {
    highlights: ["Reemplace con ventajas reales del modelo", "Agregue certificaciones y garantia", "Prepare ficha tecnica descargable"],
    applications: ["Almacen", "Carga de contenedores", "Logistica de fabrica"]
  },
  fr: {
    highlights: ["Remplacer par les avantages reels", "Ajouter certificats et garantie", "Preparer une fiche technique"],
    applications: ["Entrepot", "Chargement conteneur", "Logistique usine"]
  },
  ja: {
    highlights: ["実際のモデル特長に差し替え", "認証と保証情報を追加", "仕様書ダウンロードを準備"],
    applications: ["倉庫荷役", "コンテナ積込", "工場物流"]
  },
  de: {
    highlights: ["Durch echte Modellvorteile ersetzen", "Zertifikate und Garantie erganzen", "Datenblatt vorbereiten"],
    applications: ["Lagerumschlag", "Containerbeladung", "Werkslogistik"]
  },
  pt: {
    highlights: ["Substitua por vantagens reais do modelo", "Adicione certificacoes e garantia", "Prepare ficha tecnica"],
    applications: ["Armazenagem", "Carga de conteineres", "Logistica fabril"]
  },
  ko: {
    highlights: ["실제 모델 장점으로 교체", "인증 및 보증 정보 추가", "다운로드 사양서 준비"],
    applications: ["창고 운반", "컨테이너 적재", "공장 물류"]
  },
  ar: {
    highlights: ["استبدلها بمزايا الموديل الفعلية", "اضف الشهادات والضمان", "جهز ملف مواصفات للتحميل"],
    applications: ["مناولة المستودعات", "تحميل الحاويات", "لوجستيات المصنع"]
  }
};

export const categories: ProductCategory[] = [
  {
    slug: "electric-forklifts",
    label: {
      en: "Electric forklifts",
      es: "Montacargas electricos",
      fr: "Chariots electriques",
      ja: "電動フォークリフト",
      de: "Elektrostapler",
      pt: "Empilhadeiras eletricas",
      ko: "전동 지게차",
      ar: "رافعات كهربائية"
    },
    summary: {
      en: "Low-emission handling for warehouses and indoor logistics.",
      es: "Operacion de bajas emisiones para almacenes e interiores.",
      fr: "Manutention basse emission pour entrepots.",
      ja: "倉庫・屋内物流向けの低排出モデル。",
      de: "Emissionsarme Losung fur Lager und Innenbereiche.",
      pt: "Operacao de baixa emissao para armazens.",
      ko: "창고와 실내 물류용 저배출 장비.",
      ar: "مناولة منخفضة الانبعاثات للمستودعات."
    }
  },
  {
    slug: "diesel-forklifts",
    label: {
      en: "Diesel forklifts",
      es: "Montacargas diesel",
      fr: "Chariots diesel",
      ja: "ディーゼルフォークリフト",
      de: "Dieselstapler",
      pt: "Empilhadeiras diesel",
      ko: "디젤 지게차",
      ar: "رافعات ديزل"
    },
    summary: {
      en: "Outdoor heavy-duty lifting for construction, yards, and ports.",
      es: "Elevacion pesada exterior para obras, patios y puertos.",
      fr: "Levage intensif exterieur pour chantiers et ports.",
      ja: "屋外・建設・港湾向け重量物モデル。",
      de: "Robuste Aussenanwendung fur Bau, Hofe und Hafen.",
      pt: "Elevacao pesada externa para obras, patios e portos.",
      ko: "건설, 야드, 항만용 실외 중량 작업.",
      ar: "رفع ثقيل خارجي للمواقع والساحات والموانئ."
    }
  },
  {
    slug: "lpg-forklifts",
    label: {
      en: "LPG forklifts",
      es: "Montacargas GLP",
      fr: "Chariots GPL",
      ja: "LPGフォークリフト",
      de: "LPG-Stapler",
      pt: "Empilhadeiras GLP",
      ko: "LPG 지게차",
      ar: "رافعات LPG"
    },
    summary: {
      en: "Flexible indoor-outdoor power with fast refueling.",
      es: "Potencia flexible interior-exterior con repostaje rapido.",
      fr: "Usage interieur-exterieur avec ravitaillement rapide.",
      ja: "屋内外兼用、短時間燃料補給。",
      de: "Flexible Innen-/Aussenleistung mit schnellem Tanken.",
      pt: "Uso interno e externo com reabastecimento rapido.",
      ko: "실내외 겸용, 빠른 연료 보급.",
      ar: "تشغيل مرن داخلي وخارجي مع تزويد سريع."
    }
  },
  {
    slug: "reach-trucks",
    label: {
      en: "Reach trucks",
      es: "Reach trucks",
      fr: "Reach trucks",
      ja: "リーチトラック",
      de: "Schubmaststapler",
      pt: "Reach trucks",
      ko: "리치 트럭",
      ar: "رافعات الممرات"
    },
    summary: {
      en: "Narrow aisle warehouse storage and high rack handling.",
      es: "Almacenaje en pasillos estrechos y racks altos.",
      fr: "Allees etroites et rayonnages hauts.",
      ja: "狭小通路・高ラック倉庫向け。",
      de: "Schmalganglager und Hochregalbetrieb.",
      pt: "Corredores estreitos e porta-paletes altos.",
      ko: "좁은 통로 및 고층 랙 작업.",
      ar: "ممرات ضيقة ورفوف عالية."
    }
  },
  {
    slug: "pallet-trucks",
    label: {
      en: "Pallet trucks",
      es: "Transpaletas",
      fr: "Transpalettes",
      ja: "パレットトラック",
      de: "Hubwagen",
      pt: "Paleteiras",
      ko: "팔레트 트럭",
      ar: "عربات طبالي"
    },
    summary: {
      en: "Entry handling equipment for daily pallet movement.",
      es: "Equipo basico para movimiento diario de pallets.",
      fr: "Equipement simple pour palettes quotidiennes.",
      ja: "日常のパレット搬送向け。",
      de: "Basisgerate fur tagliche Palettenbewegung.",
      pt: "Equipamento basico para movimentacao diaria.",
      ko: "일상 팔레트 이동용 기본 장비.",
      ar: "معدات اساسية لحركة الطبالي اليومية."
    }
  },
  {
    slug: "rough-terrain-forklifts",
    label: {
      en: "Rough terrain forklifts",
      es: "Montacargas todo terreno",
      fr: "Chariots tout-terrain",
      ja: "悪路用フォークリフト",
      de: "Gelandestapler",
      pt: "Empilhadeiras todo terreno",
      ko: "험지용 지게차",
      ar: "رافعات للطرق الوعرة"
    },
    summary: {
      en: "High-clearance equipment for uneven outdoor surfaces.",
      es: "Equipos de gran despeje para terrenos irregulares.",
      fr: "Equipement pour surfaces exterieures irregulieres.",
      ja: "不整地向け高クリアランスモデル。",
      de: "Hohe Bodenfreiheit fur unebene Aussenflachen.",
      pt: "Equipamento para superficies externas irregulares.",
      ko: "울퉁불퉁한 실외 지면용 장비.",
      ar: "معدات خلوص عال للاسطح الخارجية غير المستوية."
    }
  }
];

function productTranslations(baseName: string, seoType: string) {
  return {
    en: {
      name: baseName,
      shortDescription: `Template product page for ${seoType}. Replace this copy with exact model details before indexing.`,
      seoTitle: `${baseName} | Global Forklift Supply`,
      seoDescription: `Request a quote for ${baseName}. Add exact capacity, lift height, battery or engine details, certifications, and delivery terms before launch.`,
      ...sharedProductText.en
    },
    es: {
      name: baseName,
      shortDescription: `Pagina plantilla para ${seoType}. Reemplace el texto con detalles reales antes de indexar.`,
      seoTitle: `${baseName} | Suministro global de montacargas`,
      seoDescription: `Solicite cotizacion para ${baseName}. Agregue capacidad, altura, energia, certificaciones y entrega antes del lanzamiento.`,
      ...sharedProductText.es
    },
    fr: {
      name: baseName,
      shortDescription: `Page modele pour ${seoType}. Remplacez par les details reels avant indexation.`,
      seoTitle: `${baseName} | Fourniture mondiale de chariots`,
      seoDescription: `Demandez un devis pour ${baseName}. Ajoutez capacite, hauteur, energie, certificats et livraison avant lancement.`,
      ...sharedProductText.fr
    },
    ja: {
      name: baseName,
      shortDescription: `${seoType} 用のテンプレート製品ページです。公開前に実データへ差し替えてください。`,
      seoTitle: `${baseName} | グローバルフォークリフト供給`,
      seoDescription: `${baseName} の見積依頼ページです。積載能力、揚高、動力、認証、納期を追加してください。`,
      ...sharedProductText.ja
    },
    de: {
      name: baseName,
      shortDescription: `Produktvorlage fur ${seoType}. Vor Indexierung durch echte Modelldaten ersetzen.`,
      seoTitle: `${baseName} | Globaler Staplervertrieb`,
      seoDescription: `Anfrage fur ${baseName}. Tragfahigkeit, Hubhohe, Energie, Zertifikate und Lieferung erganzen.`,
      ...sharedProductText.de
    },
    pt: {
      name: baseName,
      shortDescription: `Pagina modelo para ${seoType}. Substitua por detalhes reais antes da indexacao.`,
      seoTitle: `${baseName} | Fornecimento global de empilhadeiras`,
      seoDescription: `Solicite cotacao para ${baseName}. Adicione capacidade, altura, energia, certificacoes e entrega.`,
      ...sharedProductText.pt
    },
    ko: {
      name: baseName,
      shortDescription: `${seoType} 제품 페이지 템플릿입니다. 색인 전 실제 모델 정보로 교체하세요.`,
      seoTitle: `${baseName} | 글로벌 지게차 공급`,
      seoDescription: `${baseName} 견적 요청. 적재 능력, 인상 높이, 동력, 인증, 납기를 추가하세요.`,
      ...sharedProductText.ko
    },
    ar: {
      name: baseName,
      shortDescription: `صفحة منتج قالب لـ ${seoType}. استبدل النص بتفاصيل فعلية قبل الفهرسة.`,
      seoTitle: `${baseName} | توريد رافعات شوكية عالمي`,
      seoDescription: `اطلب عرض سعر لـ ${baseName}. اضف الحمولة وارتفاع الرفع والطاقة والشهادات والتسليم.`,
      ...sharedProductText.ar
    }
  } satisfies Product["translations"];
}

export const products: Product[] = [
  {
    slug: "fg-electric-25",
    sku: "FG-E25",
    category: "electric-forklifts",
    image: "/images/forklift-warehouse-hero.png",
    capacityTons: "2.5 t",
    liftHeightM: "3.0-6.0 m",
    powerType: "Lithium / lead-acid battery",
    availability: "PreOrder",
    translations: productTranslations("FG Electric 2.5T Forklift", "electric forklifts"),
    specs: {
      capacity: "2500 kg",
      liftHeight: "3000-6000 mm",
      loadCenter: "500 mm",
      turningRadius: "2240 mm",
      power: "Lithium or lead-acid battery",
      tireType: "Solid / pneumatic"
    }
  },
  {
    slug: "fg-diesel-35",
    sku: "FG-D35",
    category: "diesel-forklifts",
    image: "/images/forklift-warehouse-hero.png",
    capacityTons: "3.5 t",
    liftHeightM: "3.0-6.0 m",
    powerType: "Diesel engine",
    availability: "PreOrder",
    translations: productTranslations("FG Diesel 3.5T Forklift", "diesel forklifts"),
    specs: {
      capacity: "3500 kg",
      liftHeight: "3000-6000 mm",
      loadCenter: "500 mm",
      turningRadius: "2540 mm",
      power: "Diesel engine",
      tireType: "Pneumatic / solid"
    }
  },
  {
    slug: "fg-lpg-30",
    sku: "FG-LPG30",
    category: "lpg-forklifts",
    image: "/images/forklift-warehouse-hero.png",
    capacityTons: "3.0 t",
    liftHeightM: "3.0-5.0 m",
    powerType: "LPG / gasoline",
    availability: "PreOrder",
    translations: productTranslations("FG LPG 3.0T Forklift", "LPG forklifts"),
    specs: {
      capacity: "3000 kg",
      liftHeight: "3000-5000 mm",
      loadCenter: "500 mm",
      turningRadius: "2380 mm",
      power: "LPG / gasoline",
      tireType: "Solid / pneumatic"
    }
  },
  {
    slug: "fg-reach-16",
    sku: "FG-R16",
    category: "reach-trucks",
    image: "/images/forklift-warehouse-hero.png",
    capacityTons: "1.6 t",
    liftHeightM: "6.0-10.5 m",
    powerType: "Battery",
    availability: "PreOrder",
    translations: productTranslations("FG Reach Truck 1.6T", "warehouse reach trucks"),
    specs: {
      capacity: "1600 kg",
      liftHeight: "6000-10500 mm",
      loadCenter: "600 mm",
      turningRadius: "1680 mm",
      power: "Battery",
      tireType: "Polyurethane"
    }
  },
  {
    slug: "fg-pallet-20",
    sku: "FG-PT20",
    category: "pallet-trucks",
    image: "/images/forklift-warehouse-hero.png",
    capacityTons: "2.0 t",
    liftHeightM: "0.2 m",
    powerType: "Manual / electric",
    availability: "PreOrder",
    translations: productTranslations("FG Pallet Truck 2.0T", "pallet trucks"),
    specs: {
      capacity: "2000 kg",
      liftHeight: "200 mm",
      loadCenter: "600 mm",
      turningRadius: "1460 mm",
      power: "Manual / electric",
      tireType: "PU / nylon"
    }
  },
  {
    slug: "fg-rough-terrain-35",
    sku: "FG-RT35",
    category: "rough-terrain-forklifts",
    image: "/images/forklift-warehouse-hero.png",
    capacityTons: "3.5 t",
    liftHeightM: "3.0-6.0 m",
    powerType: "Diesel engine",
    availability: "PreOrder",
    translations: productTranslations("FG Rough Terrain 3.5T Forklift", "rough terrain forklifts"),
    specs: {
      capacity: "3500 kg",
      liftHeight: "3000-6000 mm",
      loadCenter: "500 mm",
      turningRadius: "3050 mm",
      power: "Diesel engine",
      tireType: "Large pneumatic"
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
