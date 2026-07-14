import type { Lang } from "./languages";
import { siteConfig } from "./site";

type L10n = Record<Lang, string>;

const loc = (value: L10n): L10n => value;

export type HeroSlide = {
  image: string;
  alt: L10n;
  title: L10n;
  body: L10n;
  href: string;
};

export type SolutionDetail = {
  slug: string;
  title: L10n;
  summary: L10n;
  image: string;
  challengeTitle: L10n;
  challenges: L10n[];
  solutionTitle: L10n;
  solutionBody: L10n;
  recommendationTitle: L10n;
  recommendationBody: L10n;
  recommendedCategories: string[];
};

export type ServiceBlock = {
  title: L10n;
  body: L10n;
};

export const heroSlides: HeroSlide[] = [
  {
    image: "/images/home/wego-2-5-ton-electric-forklift-hero.jpg",
    alt: loc({
      en: "WEGO 2.5 ton electric forklift in warehouse",
      es: "Montacargas eléctrico WEGO de 2,5 toneladas en almacén",
      fr: "Chariot élévateur électrique WEGO 2,5 tonnes en entrepôt",
      ja: "倉庫内のWEGO 2.5トン電動フォークリフト",
      de: "WEGO 2,5-Tonnen-Elektrostapler im Lager",
      pt: "Empilhadeira elétrica WEGO de 2,5 toneladas em armazém",
      ko: "창고 안의 WEGO 2.5톤 전동 지게차",
      ar: "رافعة WEGO كهربائية حمولة 2.5 طن داخل مستودع"
    }),
    title: loc({
      en: "2.5 ton electric forklifts for clean warehouse handling",
      es: "Montacargas eléctricos de 2,5 toneladas para almacenes limpios",
      fr: "Chariots électriques 2,5 tonnes pour entrepôts propres",
      ja: "クリーン倉庫向け2.5トン電動フォークリフト",
      de: "2,5-Tonnen-Elektrostapler für saubere Lagerlogistik",
      pt: "Empilhadeiras elétricas de 2,5 toneladas para armazéns limpos",
      ko: "청정 창고 작업용 2.5톤 전동 지게차",
      ar: "رافعات كهربائية 2.5 طن لمناولة المستودعات النظيفة"
    }),
    body: loc({
      en: "Current WEGO electric models for warehouses, factories, food storage, and export projects with lithium-ready configurations.",
      es: "Modelos eléctricos WEGO para almacenes, fábricas, almacenamiento alimentario y proyectos de exportación con configuración de litio.",
      fr: "Modèles électriques WEGO pour entrepôts, usines, stockage alimentaire et projets export avec configuration lithium.",
      ja: "倉庫、工場、食品保管、輸出案件向けのWEGO電動モデルです。リチウム構成にも対応します。",
      de: "Aktuelle WEGO Elektromodelle für Lager, Werke, Lebensmittelbereiche und Exportprojekte mit Lithium-Konfiguration.",
      pt: "Modelos elétricos WEGO para armazéns, fábricas, armazenagem de alimentos e projetos de exportação com configuração de lítio.",
      ko: "창고, 공장, 식품 보관 및 수출 프로젝트용 WEGO 전동 모델로 리튬 구성 대응이 가능합니다.",
      ar: "موديلات WEGO الكهربائية الحالية للمستودعات والمصانع وتخزين الأغذية ومشروعات التصدير مع تجهيزات ليثيوم."
    }),
    href: "/products/lithium-electric-forklifts/"
  },
  {
    image: "/images/home/wego-forklift-series-hero.jpg",
    alt: loc({
      en: "WEGO forklift series lineup",
      es: "Gama de montacargas WEGO",
      fr: "Gamme de chariots WEGO",
      ja: "WEGOフォークリフトシリーズ",
      de: "WEGO Stapler-Baureihen",
      pt: "Linha de empilhadeiras WEGO",
      ko: "WEGO 지게차 시리즈",
      ar: "سلسلة رافعات WEGO الشوكية"
    }),
    title: loc({
      en: "One supplier for electric, diesel, heavy duty, and warehouse equipment",
      es: "Un proveedor para montacargas eléctricos, diésel, pesados y equipos de almacén",
      fr: "Un seul fournisseur pour l'électrique, le diesel, le lourd et les équipements d'entrepôt",
      ja: "電動、ディーゼル、大型、倉庫機器を一つの供給体制で",
      de: "Ein Lieferant für Elektro-, Diesel-, Schwerlast- und Lagertechnik",
      pt: "Um único fornecedor para elétricas, diesel, serviço pesado e equipamentos de armazém",
      ko: "전동, 디젤, 대형, 창고 장비를 하나의 공급 체계로",
      ar: "مورد واحد للرافعات الكهربائية والديزل والثقيلة ومعدات المستودعات"
    }),
    body: loc({
      en: "WEGO product architecture is organized for buyers comparing different working scenes, capacities, and after-sales support requirements.",
      es: "La arquitectura de productos WEGO está organizada para compradores que comparan escenarios, capacidades y soporte posventa.",
      fr: "L'architecture produit WEGO aide les acheteurs à comparer les scénarios d'usage, capacités et besoins de support.",
      ja: "WEGOの製品構成は、用途、積載能力、アフターサービス要件を比較する海外バイヤー向けに整理されています。",
      de: "Die WEGO Produktarchitektur ist für Käufer aufgebaut, die Einsatzszenarien, Tragfähigkeit und Servicebedarf vergleichen.",
      pt: "A arquitetura de produtos WEGO foi organizada para compradores que comparam aplicações, capacidades e suporte pós-venda.",
      ko: "WEGO 제품 구조는 작업 환경, 용량, 애프터서비스 요구를 비교하는 해외 바이어 기준으로 정리되어 있습니다.",
      ar: "تم تنظيم هيكل منتجات WEGO للمشترين الذين يقارنون بين بيئات العمل والحمولات ومتطلبات ما بعد البيع."
    }),
    href: "/products/"
  },
  {
    image: "/images/home/wego-3-5-ton-diesel-forklift-hero.jpg",
    alt: loc({
      en: "WEGO 3.5 ton diesel forklift moving pallets",
      es: "Montacargas diésel WEGO de 3,5 toneladas moviendo palés",
      fr: "Chariot diesel WEGO 3,5 tonnes déplaçant des palettes",
      ja: "パレット搬送中のWEGO 3.5トンディーゼルフォークリフト",
      de: "WEGO 3,5-Tonnen-Dieselstapler beim Palettentransport",
      pt: "Empilhadeira diesel WEGO de 3,5 toneladas movimentando paletes",
      ko: "팔레트를 운반하는 WEGO 3.5톤 디젤 지게차",
      ar: "رافعة WEGO ديزل حمولة 3.5 طن تنقل طبالي"
    }),
    title: loc({
      en: "3.5 ton diesel forklifts for yard, loading, and general industry",
      es: "Montacargas diésel de 3,5 toneladas para patio, carga e industria",
      fr: "Chariots diesel 3,5 tonnes pour cours, chargement et industrie",
      ja: "ヤード、積み込み、産業用途向け3.5トンディーゼルフォークリフト",
      de: "3,5-Tonnen-Dieselstapler für Hof, Verladung und Industrie",
      pt: "Empilhadeiras diesel de 3,5 toneladas para pátio, carga e indústria",
      ko: "야드, 상하차, 산업 작업용 3.5톤 디젤 지게차",
      ar: "رافعات ديزل 3.5 طن للساحات والتحميل والعمل الصناعي"
    }),
    body: loc({
      en: "Built for export inquiries that require practical configuration discussion instead of fixed online pricing.",
      es: "Diseñado para consultas de exportación que requieren discusión real de configuración en lugar de precio fijo en línea.",
      fr: "Conçu pour les demandes export qui nécessitent une vraie discussion de configuration plutôt qu'un prix figé en ligne.",
      ja: "固定価格ではなく、実際の仕様相談を前提とした輸出問い合わせ向けの構成です。",
      de: "Für Exportanfragen ausgelegt, bei denen eine echte Konfigurationsabstimmung wichtiger ist als ein fixer Online-Preis.",
      pt: "Estruturado para consultas de exportação que exigem definição real de configuração em vez de preço fixo online.",
      ko: "고정 온라인 가격이 아니라 실제 사양 협의를 전제로 한 수출 문의 구조입니다.",
      ar: "مهيأ لاستفسارات التصدير التي تحتاج إلى مناقشة عملية للتجهيز بدلا من سعر ثابت عبر الإنترنت."
    }),
    href: "/products/diesel-forklifts/"
  }
];

export const solutionDetails: SolutionDetail[] = [
  {
    slug: "retail-wholesale",
    title: loc({ en: "Retail & Wholesale", es: "Retail y mayorista", fr: "Distribution et gros", ja: "小売・卸売", de: "Einzelhandel und Großhandel", pt: "Varejo e atacado", ko: "리테일 및 도매", ar: "التجزئة والجملة" }),
    summary: loc({ en: "Forklift matching for supermarkets, building materials, furniture, home appliances, and fast-moving distribution stock.", es: "Selección de montacargas para supermercados, materiales de construcción, muebles, electrodomésticos y distribución rápida.", fr: "Sélection de chariots pour supermarchés, matériaux, mobilier, électroménager et stock de distribution rapide.", ja: "スーパー、建材、家具、家電、流通在庫向けのフォークリフト提案。", de: "Staplerauswahl für Supermärkte, Baustoffe, Möbel, Haushaltsgeräte und schnelle Distribution.", pt: "Seleção de empilhadeiras para supermercados, materiais de construção, móveis, eletrodomésticos e distribuição rápida.", ko: "마트, 건자재, 가구, 가전, 유통 재고용 지게차 매칭.", ar: "اختيار الرافعات للمتاجر الكبرى ومواد البناء والأثاث والأجهزة والمخزون سريع الدوران." }),
    image: "/images/products/diesel-35t-classic/01.webp",
    challengeTitle: loc({ en: "Common handling demands", es: "Demandas comunes", fr: "Besoins courants", ja: "主な荷役課題", de: "Typische Anforderungen", pt: "Demandas comuns", ko: "주요 작업 요구", ar: "متطلبات المناولة الشائعة" }),
    challenges: [
      loc({ en: "Mixed indoor and outdoor loading zones", es: "Zonas mixtas interiores y exteriores", fr: "Zones mixtes intérieur et extérieur", ja: "屋内外が混在する荷役環境", de: "Gemischte Innen- und Außenbereiche", pt: "Áreas mistas internas e externas", ko: "실내외 혼합 작업 구역", ar: "مناطق تحميل داخلية وخارجية مختلطة" }),
      loc({ en: "Frequent pallet movement and shelf replenishment", es: "Movimiento frecuente de palés y reposición", fr: "Déplacement fréquent de palettes et réassort", ja: "頻繁なパレット搬送と補充", de: "Häufiger Palettentransport und Regalnachschub", pt: "Movimentação frequente de paletes e reposição", ko: "빈번한 팔레트 이동과 보충 작업", ar: "نقل متكرر للطبالي وتجديد الرفوف" }),
      loc({ en: "Need for easy maintenance across multiple stores or depots", es: "Necesidad de mantenimiento fácil en varias sedes", fr: "Maintenance simple sur plusieurs sites", ja: "複数拠点で整備しやすいこと", de: "Einfache Wartung über mehrere Standorte", pt: "Manutenção simples em vários pontos", ko: "여러 거점에서 관리 쉬운 장비", ar: "حاجة إلى صيانة سهلة عبر عدة مواقع" })
    ],
    solutionTitle: loc({ en: "Recommended WEGO setup", es: "Configuración WEGO recomendada", fr: "Configuration WEGO recommandée", ja: "推奨WEGO構成", de: "Empfohlene WEGO-Konfiguration", pt: "Configuração WEGO recomendada", ko: "권장 WEGO 구성", ar: "تجهيز WEGO الموصى به" }),
    solutionBody: loc({ en: "Use compact electric forklifts for indoor aisles and 2.5T to 3.5T diesel units for outside loading bays. Keep one common parts list across stores to simplify service.", es: "Use montacargas eléctricos compactos para pasillos interiores y diésel de 2,5T a 3,5T para muelles exteriores. Mantenga una lista común de repuestos.", fr: "Utilisez des chariots électriques compacts pour les allées intérieures et des diesel 2,5T à 3,5T pour les quais extérieurs. Gardez une liste commune de pièces.", ja: "屋内通路には小型電動、屋外バースには2.5Tから3.5Tのディーゼルを推奨します。拠点共通の部品表で保守を簡素化します。", de: "Für Innenbereiche kompakte Elektrostapler, für Außenrampen 2,5T bis 3,5T Diesel. Eine gemeinsame Ersatzteilliste vereinfacht den Service.", pt: "Use elétricas compactas para corredores internos e diesel de 2,5T a 3,5T para docas externas. Mantenha uma lista comum de peças.", ko: "실내 통로에는 소형 전동, 외부 도크에는 2.5T~3.5T 디젤을 권장합니다. 공통 부품 리스트로 유지보수를 단순화합니다.", ar: "استخدم الرافعات الكهربائية المدمجة للممرات الداخلية ورافعات ديزل 2.5T إلى 3.5T لأرصفة التحميل الخارجية مع قائمة قطع موحدة." }),
    recommendationTitle: loc({ en: "Best-fit categories", es: "Categorías adecuadas", fr: "Catégories adaptées", ja: "適合カテゴリ", de: "Passende Kategorien", pt: "Categorias adequadas", ko: "적합 카테고리", ar: "الفئات الأنسب" }),
    recommendationBody: loc({ en: "Electric counterbalance forklifts, diesel forklifts, and pallet stackers cover most retail and wholesale workflows.", es: "Montacargas eléctricos contrapesados, diésel y apiladores cubren la mayoría de los flujos retail y mayoristas.", fr: "Les chariots électriques, diesel et gerbeurs couvrent la plupart des flux retail et gros.", ja: "電動カウンターバランス、ディーゼル、スタッカーで大半の流れをカバーできます。", de: "Elektro-Gegengewichtsstapler, Dieselstapler und Hochhubwagen decken die meisten Abläufe ab.", pt: "Empilhadeiras elétricas, diesel e stackers cobrem a maior parte dos fluxos de varejo e atacado.", ko: "전동 카운터밸런스, 디젤, 스태커가 대부분의 유통 시나리오를 커버합니다.", ar: "تغطي الرافعات الكهربائية المتوازنة والديزل والمكدسات أغلب عمليات التجزئة والجملة." }),
    recommendedCategories: ["lithium-electric-forklifts", "diesel-forklifts", "electric-pallet-stackers"]
  },
  {
    slug: "food-pharma",
    title: loc({ en: "Food & Pharma", es: "Alimentos y farma", fr: "Agroalimentaire et pharma", ja: "食品・医薬", de: "Lebensmittel und Pharma", pt: "Alimentos e farmacêutico", ko: "식품 및 제약", ar: "الأغذية والدواء" }),
    summary: loc({ en: "Cleaner indoor handling for packaged food, cold storage, and regulated warehouse operations.", es: "Manejo interior limpio para alimentos envasados, cámaras frías y almacenes regulados.", fr: "Manutention intérieure propre pour l'alimentaire, le froid et les entrepôts réglementés.", ja: "包装食品、低温倉庫、規制倉庫向けのクリーン荷役。", de: "Sauberer Inneneinsatz für verpackte Lebensmittel, Kühlhäuser und regulierte Lager.", pt: "Movimentação interna limpa para alimentos embalados, câmaras frias e armazéns regulados.", ko: "포장 식품, 냉장창고, 규제 창고용 청정 실내 하역.", ar: "مناولة داخلية نظيفة للأغذية المعبأة والتخزين البارد والمستودعات المنظمة." }),
    image: "/images/products/lithium-25t/01.webp",
    challengeTitle: loc({ en: "Common handling demands", es: "Demandas comunes", fr: "Besoins courants", ja: "主な荷役課題", de: "Typische Anforderungen", pt: "Demandas comuns", ko: "주요 작업 요구", ar: "متطلبات المناولة الشائعة" }),
    challenges: [
      loc({ en: "Low emission and low noise inside storage areas", es: "Bajas emisiones y ruido en interiores", fr: "Faibles émissions et bruit réduit", ja: "屋内での低排出・低騒音", de: "Niedrige Emissionen und wenig Lärm", pt: "Baixa emissão e baixo ruído", ko: "저배출·저소음 실내 작업", ar: "انبعاثات وضجيج منخفضان داخل المستودعات" }),
      loc({ en: "Compact turning radius for narrow aisles", es: "Giro compacto para pasillos estrechos", fr: "Rayon de braquage compact", ja: "狭通路での小回り", de: "Kompakter Wendekreis", pt: "Raio de giro compacto", ko: "협소 통로용 회전성", ar: "نصف قطر دوران مدمج للممرات الضيقة" }),
      loc({ en: "Battery uptime planning for multi-shift use", es: "Planificación de autonomía por turnos", fr: "Planification d'autonomie en plusieurs équipes", ja: "複数シフトの稼働時間計画", de: "Batterielaufzeit für Mehrschichtbetrieb", pt: "Planejamento de bateria para turnos", ko: "다교대 배터리 운영 계획", ar: "تخطيط زمن تشغيل البطارية للعمل متعدد الورديات" })
    ],
    solutionTitle: loc({ en: "Recommended WEGO setup", es: "Configuración WEGO recomendada", fr: "Configuration WEGO recommandée", ja: "推奨WEGO構成", de: "Empfohlene WEGO-Konfiguration", pt: "Configuração WEGO recomendada", ko: "권장 WEGO 구성", ar: "تجهيز WEGO الموصى به" }),
    solutionBody: loc({ en: "Prioritize lithium or electric forklifts for clean handling zones and stackers for dense warehouse stacking. Set charger, runtime, and spare battery planning before shipment.", es: "Priorice montacargas de litio o eléctricos para zonas limpias y apiladores para almacenamiento denso. Defina cargador, autonomía y baterías antes del envío.", fr: "Privilégiez les chariots lithium ou électriques pour les zones propres et les gerbeurs pour le stockage dense. Fixez chargeur, autonomie et batterie avant expédition.", ja: "クリーンゾーンにはリチウムまたは電動、密集保管にはスタッカーを優先します。充電器、稼働時間、予備バッテリーを出荷前に確定します。", de: "Bevorzugen Sie Lithium- oder Elektrostapler für saubere Zonen und Hochhubwagen für dichte Lagerung. Ladegerät, Laufzeit und Reservebatterie vor Versand festlegen.", pt: "Priorize empilhadeiras de lítio ou elétricas para zonas limpas e stackers para armazenagem densa. Defina carregador, autonomia e bateria reserva antes do envio.", ko: "청정 구역에는 리튬 또는 전동 지게차, 고밀도 적재에는 스태커를 우선합니다. 충전기, 운영시간, 예비 배터리를 출하 전 확정합니다.", ar: "يتم تفضيل رافعات الليثيوم أو الكهربائية للمناطق النظيفة والمكدسات للتخزين الكثيف مع تحديد الشاحن وزمن التشغيل والبطارية الاحتياطية قبل الشحن." }),
    recommendationTitle: loc({ en: "Best-fit categories", es: "Categorías adecuadas", fr: "Catégories adaptées", ja: "適合カテゴリ", de: "Passende Kategorien", pt: "Categorias adequadas", ko: "적합 카테고리", ar: "الفئات الأنسب" }),
    recommendationBody: loc({ en: "Lithium forklifts and electric pallet stackers fit the highest share of regulated indoor work.", es: "Montacargas de litio y apiladores eléctricos encajan mejor en trabajo interior regulado.", fr: "Les chariots lithium et les gerbeurs électriques conviennent le mieux au travail intérieur réglementé.", ja: "規制の厳しい屋内用途にはリチウム車と電動スタッカーが最適です。", de: "Lithiumstapler und elektrische Hochhubwagen passen am besten zu regulierten Innenbereichen.", pt: "Empilhadeiras de lítio e stackers elétricos atendem melhor ao trabalho interno regulado.", ko: "규제 실내 작업에는 리튬 지게차와 전동 스태커가 가장 적합합니다.", ar: "تعد رافعات الليثيوم والمكدسات الكهربائية الأنسب للعمل الداخلي المنظم." }),
    recommendedCategories: ["lithium-electric-forklifts", "electric-pallet-stackers"]
  },
  {
    slug: "transport-logistics",
    title: loc({ en: "Transport & Logistics", es: "Transporte y logística", fr: "Transport et logistique", ja: "輸送・物流", de: "Transport und Logistik", pt: "Transporte e logística", ko: "운송 및 물류", ar: "النقل واللوجستيات" }),
    summary: loc({ en: "Forklift planning for loading bays, cargo transfer, pallet turnover, and distribution centers.", es: "Planificación de montacargas para muelles, transferencia de carga, palés y centros de distribución.", fr: "Planification pour quais, transfert de fret, rotation palettes et centres de distribution.", ja: "バース、貨物移送、パレット回転、配送センター向けの計画。", de: "Staplerplanung für Rampen, Frachtumschlag, Palettenumschlag und Distributionszentren.", pt: "Planejamento para docas, transferência de carga, giro de paletes e centros de distribuição.", ko: "도크, 화물 이송, 팔레트 회전, 물류센터용 지게차 계획.", ar: "تخطيط الرافعات لأرصفة التحميل ونقل البضائع ودوران الطبالي ومراكز التوزيع." }),
    image: "/images/products/diesel-25t-3-stage/01.webp",
    challengeTitle: loc({ en: "Common handling demands", es: "Demandas comunes", fr: "Besoins courants", ja: "主な荷役課題", de: "Typische Anforderungen", pt: "Demandas comuns", ko: "주요 작업 요구", ar: "متطلبات المناولة الشائعة" }),
    challenges: [
      loc({ en: "Fast truck loading and unloading cycles", es: "Ciclos rápidos de carga y descarga", fr: "Chargement et déchargement rapides", ja: "高速な積み下ろしサイクル", de: "Schnelle Be- und Entladezyklen", pt: "Ciclos rápidos de carga e descarga", ko: "빠른 상하차 사이클", ar: "دورات تحميل وتفريغ سريعة" }),
      loc({ en: "Different pallet weights in the same operation", es: "Pesos diferentes en la misma operación", fr: "Poids de palettes variés", ja: "異なる荷重が混在", de: "Unterschiedliche Palettengewichte", pt: "Pesos diferentes na mesma operação", ko: "동일 공정 내 다양한 하중", ar: "أوزان مختلفة للطبالي ضمن العملية نفسها" }),
      loc({ en: "Need for stable uptime and quick parts response", es: "Necesidad de disponibilidad y repuestos rápidos", fr: "Besoin de disponibilité et de pièces rapides", ja: "稼働安定性と部品対応", de: "Hohe Verfügbarkeit und schnelle Teileversorgung", pt: "Necessidade de alta disponibilidade e peças rápidas", ko: "안정 가동과 빠른 부품 대응", ar: "حاجة إلى استمرارية تشغيل واستجابة سريعة للقطع" })
    ],
    solutionTitle: loc({ en: "Recommended WEGO setup", es: "Configuración WEGO recomendada", fr: "Configuration WEGO recommandée", ja: "推奨WEGO構成", de: "Empfohlene WEGO-Konfiguration", pt: "Configuração WEGO recomendada", ko: "권장 WEGO 구성", ar: "تجهيز WEGO الموصى به" }),
    solutionBody: loc({ en: "Use 2.5T to 5.0T diesel forklifts for dock work, electric forklifts for indoor transfer, and stackers for narrow warehouse tasks. Match mast and tyre configuration to site conditions.", es: "Use diésel de 2,5T a 5,0T para muelles, eléctricos para traslados interiores y apiladores para almacenes estrechos. Ajuste mástil y neumático al sitio.", fr: "Utilisez des diesel 2,5T à 5,0T pour les quais, des électriques pour le transfert intérieur et des gerbeurs pour les zones étroites. Ajustez mât et pneus au site.", ja: "バース作業には2.5Tから5.0Tディーゼル、屋内移送には電動、狭い倉庫にはスタッカーを推奨します。マストとタイヤは現場条件で決定します。", de: "Für Rampen 2,5T bis 5,0T Diesel, für Innenbereiche Elektrostapler und für enge Lagerzonen Hochhubwagen. Mast und Reifen auf den Einsatz abstimmen.", pt: "Use diesel de 2,5T a 5,0T para docas, elétricas para transferência interna e stackers para áreas estreitas. Ajuste mastro e pneu ao local.", ko: "도크 작업에는 2.5T~5.0T 디젤, 실내 이송에는 전동, 협소 창고에는 스태커를 권장합니다. 마스트와 타이어는 현장에 맞춰 선정합니다.", ar: "استخدم رافعات ديزل 2.5T إلى 5.0T للأرصفة ورافعات كهربائية للنقل الداخلي ومكدسات للممرات الضيقة مع مطابقة السارية والإطارات للموقع." }),
    recommendationTitle: loc({ en: "Best-fit categories", es: "Categorías adecuadas", fr: "Catégories adaptées", ja: "適合カテゴリ", de: "Passende Kategorien", pt: "Categorias adequadas", ko: "적합 카테고리", ar: "الفئات الأنسب" }),
    recommendationBody: loc({ en: "Diesel, electric, and stacker lines together cover most logistics yards and warehouse transfer work.", es: "Las líneas diésel, eléctricas y apiladores cubren la mayoría del trabajo logístico y de transferencia.", fr: "Les gammes diesel, électrique et gerbeur couvrent l'essentiel des flux logistiques.", ja: "ディーゼル、電動、スタッカーの組み合わせで大半の物流現場をカバーできます。", de: "Diesel-, Elektro- und Hochhubwagen decken die meisten Logistikeinsätze gemeinsam ab.", pt: "As linhas diesel, elétrica e stacker cobrem a maior parte das operações logísticas.", ko: "디젤, 전동, 스태커 조합으로 대부분의 물류 현장을 커버할 수 있습니다.", ar: "تغطي خطوط الديزل والكهرباء والمكدسات معظم أعمال اللوجستيات والنقل الداخلي." }),
    recommendedCategories: ["diesel-forklifts", "lithium-electric-forklifts", "electric-pallet-stackers"]
  },
  {
    slug: "manufacturing",
    title: loc({ en: "Manufacturing", es: "Manufactura", fr: "Fabrication", ja: "製造業", de: "Fertigung", pt: "Manufatura", ko: "제조업", ar: "التصنيع" }),
    summary: loc({ en: "Material handling for production lines, finished goods, component transfer, and internal logistics.", es: "Manejo de materiales para líneas, producto terminado, traslado de componentes y logística interna.", fr: "Manutention pour lignes de production, produits finis, composants et logistique interne.", ja: "生産ライン、完成品、部品移送、構内物流向け。", de: "Materialfluss für Produktionslinien, Fertigware, Bauteiltransport und interne Logistik.", pt: "Movimentação para linhas de produção, produto acabado, componentes e logística interna.", ko: "생산 라인, 완제품, 부품 이송, 내부 물류용.", ar: "مناولة المواد لخطوط الإنتاج والبضائع النهائية ونقل المكونات واللوجستيات الداخلية." }),
    image: "/images/products/electric-35t/01.webp",
    challengeTitle: loc({ en: "Common handling demands", es: "Demandas comunes", fr: "Besoins courants", ja: "主な荷役課題", de: "Typische Anforderungen", pt: "Demandas comuns", ko: "주요 작업 요구", ar: "متطلبات المناولة الشائعة" }),
    challenges: [
      loc({ en: "Consistent operation around shift schedules", es: "Operación constante por turnos", fr: "Fonctionnement stable sur plusieurs équipes", ja: "シフトに合わせた安定稼働", de: "Stabile Nutzung im Schichtbetrieb", pt: "Operação constante por turnos", ko: "교대 근무에 맞춘 안정 운용", ar: "تشغيل ثابت مع جداول الورديات" }),
      loc({ en: "Frequent movement between line-side and warehouse", es: "Movimiento frecuente entre línea y almacén", fr: "Transferts fréquents entre ligne et entrepôt", ja: "ライン脇と倉庫の往復", de: "Häufige Fahrten zwischen Linie und Lager", pt: "Movimentação frequente entre linha e armazém", ko: "라인과 창고 간 빈번한 이동", ar: "حركة متكررة بين خط الإنتاج والمستودع" }),
      loc({ en: "Need for visibility and safe control in tight areas", es: "Visibilidad y control seguro en áreas estrechas", fr: "Visibilité et contrôle sûr en zones étroites", ja: "狭所での視界と安全操作", de: "Sicht und sichere Steuerung in engen Bereichen", pt: "Visibilidade e controle seguro em áreas estreitas", ko: "협소 구역에서 시야와 안전 조작", ar: "الحاجة إلى رؤية وتحكم آمن في المساحات الضيقة" })
    ],
    solutionTitle: loc({ en: "Recommended WEGO setup", es: "Configuración WEGO recomendada", fr: "Configuration WEGO recommandée", ja: "推奨WEGO構成", de: "Empfohlene WEGO-Konfiguration", pt: "Configuração WEGO recomendada", ko: "권장 WEGO 구성", ar: "تجهيز WEGO الموصى به" }),
    solutionBody: loc({ en: "Use electric forklifts for cleaner indoor routing and diesel models for heavier yard-side movement. Confirm mast height and attachment requirements based on production layout.", es: "Use eléctricos para rutas interiores limpias y diésel para movimiento pesado en patio. Confirme altura de mástil y accesorios según el layout.", fr: "Utilisez l'électrique pour les circuits intérieurs propres et le diesel pour les mouvements plus lourds côté cour. Confirmez la hauteur de mât et les accessoires selon l'implantation.", ja: "屋内は電動、ヤード側の重作業はディーゼルを推奨します。マスト高さとアタッチメントはレイアウトに合わせて確定します。", de: "Innen saubere Elektro-Routen, für schwerere Hofbewegungen Dieselmodelle. Hubhöhe und Anbaugeräte nach Produktionslayout bestätigen.", pt: "Use elétricas para rotas internas limpas e diesel para movimentos mais pesados no pátio. Confirme mastro e acessórios conforme o layout.", ko: "실내 이동에는 전동, 야드 측 중작업에는 디젤 모델을 권장합니다. 마스트 높이와 어태치먼트는 레이아웃에 따라 확정합니다.", ar: "استخدم الرافعات الكهربائية للمسارات الداخلية النظيفة ورافعات الديزل للحركة الأثقل في الساحات مع تأكيد ارتفاع السارية والملحقات حسب التخطيط." }),
    recommendationTitle: loc({ en: "Best-fit categories", es: "Categorías adecuadas", fr: "Catégories adaptées", ja: "適合カテゴリ", de: "Passende Kategorien", pt: "Categorias adequadas", ko: "적합 카테고리", ar: "الفئات الأنسب" }),
    recommendationBody: loc({ en: "Electric and diesel counterbalance forklifts cover the main handling routes in manufacturing plants.", es: "Montacargas eléctricos y diésel contrapesados cubren las rutas principales de una planta.", fr: "Les chariots électriques et diesel couvrent les principaux flux d'une usine.", ja: "製造現場の主な搬送動線は電動・ディーゼルカウンターバランスで対応できます。", de: "Elektrische und Diesel-Gegengewichtsstapler decken die Hauptwege in der Fertigung ab.", pt: "Empilhadeiras elétricas e diesel contrabalançadas cobrem as rotas principais da manufatura.", ko: "제조 공장의 주요 운반 동선은 전동 및 디젤 카운터밸런스로 대응 가능합니다.", ar: "تغطي الرافعات الكهربائية ورافعات الديزل المتوازنة المسارات الرئيسية في المصانع." }),
    recommendedCategories: ["lithium-electric-forklifts", "diesel-forklifts"]
  },
  {
    slug: "automotive",
    title: loc({ en: "Automotive", es: "Automotriz", fr: "Automobile", ja: "自動車", de: "Automobil", pt: "Automotivo", ko: "자동차", ar: "السيارات" }),
    summary: loc({ en: "Handling for components, finished parts, racks, inbound warehouse zones, and assembly support.", es: "Manejo de componentes, piezas terminadas, racks, zonas inbound y soporte de ensamblaje.", fr: "Manutention pour composants, pièces finies, racks, zones amont et support d'assemblage.", ja: "部品、完成品、ラック、受入倉庫、組立支援向け。", de: "Handling für Komponenten, Fertigteile, Racks, Wareneingang und Montageunterstützung.", pt: "Movimentação para componentes, peças acabadas, racks, inbound e apoio à montagem.", ko: "부품, 완성품, 랙, 입고 창고, 조립 지원용.", ar: "مناولة المكونات والقطع النهائية والرفوف ومناطق الاستلام ودعم التجميع." }),
    image: "/images/products/lithium-30t/01.webp",
    challengeTitle: loc({ en: "Common handling demands", es: "Demandas comunes", fr: "Besoins courants", ja: "主な荷役課題", de: "Typische Anforderungen", pt: "Demandas comuns", ko: "주요 작업 요구", ar: "متطلبات المناولة الشائعة" }),
    challenges: [
      loc({ en: "Clean routing around sensitive production areas", es: "Rutas limpias en áreas sensibles", fr: "Circulation propre près des zones sensibles", ja: "繊細な生産エリア周辺のクリーン搬送", de: "Saubere Wege nahe sensibler Bereiche", pt: "Rotas limpas em áreas sensíveis", ko: "민감 생산 구역 주변의 청정 이동", ar: "مسارات نظيفة حول مناطق الإنتاج الحساسة" }),
      loc({ en: "Repeatable movement of racks and pallets", es: "Movimiento repetible de racks y palés", fr: "Déplacement répétitif de racks et palettes", ja: "ラックとパレットの反復搬送", de: "Wiederholter Transport von Racks und Paletten", pt: "Movimentação repetitiva de racks e paletes", ko: "랙과 팔레트의 반복 이송", ar: "نقل متكرر للرفوف والطبالي" }),
      loc({ en: "Need for operator comfort during long shifts", es: "Comodidad del operador en turnos largos", fr: "Confort opérateur sur longues équipes", ja: "長時間シフトでの快適性", de: "Fahrerkomfort bei langen Schichten", pt: "Conforto do operador em turnos longos", ko: "장시간 교대 시 작업자 편의", ar: "راحة المشغل خلال الورديات الطويلة" })
    ],
    solutionTitle: loc({ en: "Recommended WEGO setup", es: "Configuración WEGO recomendada", fr: "Configuration WEGO recommandée", ja: "推奨WEGO構成", de: "Empfohlene WEGO-Konfiguration", pt: "Configuração WEGO recomendada", ko: "권장 WEGO 구성", ar: "تجهيز WEGO الموصى به" }),
    solutionBody: loc({ en: "For assembly support and indoor component transfer, use lithium forklifts with confirmed mast and battery packages. Use diesel units only where outdoor flow is unavoidable.", es: "Para ensamblaje y transferencia interior use montacargas de litio con mástil y batería confirmados. Use diésel solo si el flujo exterior es inevitable.", fr: "Pour l'assemblage et le transfert intérieur, utilisez des chariots lithium avec mât et batterie confirmés. Le diesel ne s'utilise qu'en extérieur.", ja: "組立支援と屋内搬送には、マストとバッテリー仕様を確定したリチウム車を推奨します。屋外動線が必要な場合のみディーゼルを使います。", de: "Für Montageunterstützung und Innenverkehr Lithiumstapler mit bestätigtem Mast- und Batteriepaket einsetzen. Diesel nur bei unvermeidbaren Außenwegen.", pt: "Para apoio à montagem e transferência interna use empilhadeiras de lítio com mastro e bateria definidos. Use diesel apenas quando o fluxo externo for inevitável.", ko: "조립 지원과 실내 부품 이송에는 마스트와 배터리 사양이 확정된 리튬 지게차를 권장합니다. 외부 흐름이 불가피할 때만 디젤을 사용합니다.", ar: "لدعم التجميع والنقل الداخلي استخدم رافعات ليثيوم مع تحديد السارية والبطارية، ويقتصر استخدام الديزل على المسارات الخارجية الضرورية." }),
    recommendationTitle: loc({ en: "Best-fit categories", es: "Categorías adecuadas", fr: "Catégories adaptées", ja: "適合カテゴリ", de: "Passende Kategorien", pt: "Categorias adequadas", ko: "적합 카테고리", ar: "الفئات الأنسب" }),
    recommendationBody: loc({ en: "Lithium counterbalance forklifts fit the highest share of automotive handling tasks.", es: "Los montacargas contrapesados de litio cubren la mayor parte de las tareas automotrices.", fr: "Les chariots lithium à contrepoids couvrent la plupart des tâches automobiles.", ja: "自動車分野の多くはリチウムカウンターバランスで対応できます。", de: "Lithium-Gegengewichtsstapler passen zu einem großen Anteil der Automotive-Aufgaben.", pt: "Empilhadeiras de lítio contrabalançadas atendem a maior parte das tarefas automotivas.", ko: "자동차 산업의 대부분 작업은 리튬 카운터밸런스로 대응 가능합니다.", ar: "تلائم رافعات الليثيوم المتوازنة أغلب مهام قطاع السيارات." }),
    recommendedCategories: ["lithium-electric-forklifts", "electric-pallet-stackers"]
  },
  {
    slug: "ports-terminals",
    title: loc({ en: "Ports & Terminals", es: "Puertos y terminales", fr: "Ports et terminaux", ja: "港湾・ターミナル", de: "Häfen und Terminals", pt: "Portos e terminais", ko: "항만 및 터미널", ar: "الموانئ والمحطات" }),
    summary: loc({ en: "Heavy-duty equipment selection for yard movement, containers, steel, timber, and oversized cargo handling.", es: "Selección de equipos pesados para patio, contenedores, acero, madera y carga sobredimensionada.", fr: "Choix d'équipements lourds pour cours, conteneurs, acier, bois et charges hors gabarit.", ja: "ヤード搬送、コンテナ、鋼材、木材、大型貨物向けの大型設備選定。", de: "Schwerlastauswahl für Yard-Transport, Container, Stahl, Holz und übergroße Lasten.", pt: "Seleção de equipamentos pesados para pátio, contêineres, aço, madeira e cargas superdimensionadas.", ko: "야드 이동, 컨테이너, 철강, 목재, 대형 화물용 중장비 선정.", ar: "اختيار معدات الخدمة الشاقة لحركة الساحات والحاويات والصلب والأخشاب والحمولات الكبيرة." }),
    image: "/images/products/heavy-duty-100t/01.webp",
    challengeTitle: loc({ en: "Common handling demands", es: "Demandas comunes", fr: "Besoins courants", ja: "主な荷役課題", de: "Typische Anforderungen", pt: "Demandas comuns", ko: "주요 작업 요구", ar: "متطلبات المناولة الشائعة" }),
    challenges: [
      loc({ en: "Large capacities and long duty cycles", es: "Grandes capacidades y ciclos largos", fr: "Grandes capacités et longues durées", ja: "大容量と長時間稼働", de: "Große Kapazitäten und lange Einsatzzeiten", pt: "Grandes capacidades e longos ciclos", ko: "대용량과 장시간 운용", ar: "حمولات كبيرة ودورات تشغيل طويلة" }),
      loc({ en: "Outdoor exposure to dust, heat, and weather", es: "Exposición exterior a polvo y clima", fr: "Exposition extérieure à la poussière et au climat", ja: "粉塵・高温・屋外環境", de: "Außenbetrieb mit Staub, Hitze und Wetter", pt: "Exposição externa a poeira e clima", ko: "먼지·열·날씨에 노출된 야외 환경", ar: "تعرض خارجي للغبار والحرارة والطقس" }),
      loc({ en: "Need for clear maintenance and spare planning", es: "Necesidad de mantenimiento y repuestos claros", fr: "Besoin d'un plan clair de maintenance et pièces", ja: "明確な整備・部品計画", de: "Klarer Wartungs- und Ersatzteilplan", pt: "Necessidade de manutenção e peças bem definidas", ko: "명확한 정비·부품 계획", ar: "الحاجة إلى خطة صيانة وقطع واضحة" })
    ],
    solutionTitle: loc({ en: "Recommended WEGO setup", es: "Configuración WEGO recomendada", fr: "Configuration WEGO recommandée", ja: "推奨WEGO構成", de: "Empfohlene WEGO-Konfiguration", pt: "Configuração WEGO recomendada", ko: "권장 WEGO 구성", ar: "تجهيز WEGO الموصى به" }),
    solutionBody: loc({ en: "Use heavy-duty diesel forklifts for 7T to 10T cargo ranges and confirm mast, tyre, and engine package against operating yard conditions before quotation.", es: "Use diésel pesados para cargas de 7T a 10T y confirme mástil, neumático y motor según el patio antes de cotizar.", fr: "Utilisez des diesel grande capacité pour les charges de 7T à 10T et confirmez mât, pneus et moteur selon le site avant devis.", ja: "7Tから10Tの貨物には大型ディーゼルを使い、マスト、タイヤ、エンジン仕様をヤード条件に合わせて見積前に確定します。", de: "Für 7T bis 10T Schwerlast-Dieselstapler einsetzen und Mast, Reifen und Motor nach Yard-Bedingungen vor dem Angebot bestätigen.", pt: "Use diesel de grande porte para 7T a 10T e confirme mastro, pneu e motor conforme o pátio antes da cotação.", ko: "7T~10T 화물에는 대형 디젤 지게차를 사용하고, 마스트·타이어·엔진 사양을 야드 조건에 맞춰 확정합니다.", ar: "استخدم رافعات ديزل ثقيلة لحمولات 7T إلى 10T مع تأكيد السارية والإطارات وحزمة المحرك حسب ظروف الساحة قبل عرض السعر." }),
    recommendationTitle: loc({ en: "Best-fit categories", es: "Categorías adecuadas", fr: "Catégories adaptées", ja: "適合カテゴリ", de: "Passende Kategorien", pt: "Categorias adequadas", ko: "적합 카테고리", ar: "الفئات الأنسب" }),
    recommendationBody: loc({ en: "Heavy-duty and diesel lines are the main fit for port and terminal handling.", es: "Las líneas diésel y de gran capacidad son la mejor opción para puertos y terminales.", fr: "Les gammes lourdes et diesel sont les mieux adaptées aux ports et terminaux.", ja: "港湾用途には大型ラインとディーゼルラインが中心です。", de: "Schwerlast- und Diesellinien sind die Hauptlösung für Hafen- und Terminaleinsätze.", pt: "Linhas diesel e de grande porte são a melhor opção para portos e terminais.", ko: "항만 작업에는 대형 및 디젤 라인이 핵심입니다.", ar: "تعد خطوط الخدمة الشاقة والديزل الخيار الرئيسي للموانئ والمحطات." }),
    recommendedCategories: ["heavy-duty-forklifts", "diesel-forklifts"]
  },
  {
    slug: "chemical-energy",
    title: loc({ en: "Chemical & Energy", es: "Químico y energía", fr: "Chimie et énergie", ja: "化学・エネルギー", de: "Chemie und Energie", pt: "Químico e energia", ko: "화학 및 에너지", ar: "الكيماويات والطاقة" }),
    summary: loc({ en: "Planning for heavy outdoor loads, drums, bagged materials, and demanding industrial storage zones.", es: "Planificación para cargas pesadas, tambores, sacos y zonas industriales exigentes.", fr: "Planification pour charges lourdes, fûts, sacs et zones industrielles exigeantes.", ja: "重量物、ドラム、袋物、厳しい屋外保管エリア向け計画。", de: "Planung für schwere Außenlasten, Fässer, Sackware und anspruchsvolle Industrieflächen.", pt: "Planejamento para cargas pesadas, tambores, materiais ensacados e zonas industriais exigentes.", ko: "중량 화물, 드럼, 포대, 까다로운 산업 보관 구역용 계획.", ar: "تخطيط للأحمال الثقيلة والبراميل والمواد المعبأة والمناطق الصناعية الصعبة." }),
    image: "/images/products/heavy-duty-70t-2-stage/01.webp",
    challengeTitle: loc({ en: "Common handling demands", es: "Demandas comunes", fr: "Besoins courants", ja: "主な荷役課題", de: "Typische Anforderungen", pt: "Demandas comuns", ko: "주요 작업 요구", ar: "متطلبات المناولة الشائعة" }),
    challenges: [
      loc({ en: "Outdoor duty in exposed industrial yards", es: "Trabajo exterior en patios expuestos", fr: "Service extérieur dans des parcs exposés", ja: "屋外ヤードでの連続稼働", de: "Außeneinsatz in offenen Industriehöfen", pt: "Trabalho externo em pátios expostos", ko: "노출된 산업 야드에서의 작업", ar: "تشغيل خارجي في ساحات صناعية مكشوفة" }),
      loc({ en: "Need for stable diesel performance and easy maintenance", es: "Rendimiento diésel estable y mantenimiento fácil", fr: "Performance diesel stable et maintenance simple", ja: "安定したディーゼル性能と保守性", de: "Stabile Diesel-Leistung und einfache Wartung", pt: "Desempenho diesel estável e manutenção simples", ko: "안정적인 디젤 성능과 쉬운 정비", ar: "أداء ديزل مستقر وصيانة سهلة" }),
      loc({ en: "Different load shapes requiring confirmed attachments", es: "Cargas diversas que requieren accesorios confirmados", fr: "Charges variées exigeant des accessoires confirmés", ja: "形状の異なる荷に合わせたアタッチメント確認", de: "Unterschiedliche Lastformen mit bestätigten Anbaugeräten", pt: "Formatos de carga diversos com acessórios confirmados", ko: "하중 형태별 어태치먼트 확정 필요", ar: "أشكال أحمال مختلفة تتطلب ملحقات مؤكدة" })
    ],
    solutionTitle: loc({ en: "Recommended WEGO setup", es: "Configuración WEGO recomendada", fr: "Configuration WEGO recommandée", ja: "推奨WEGO構成", de: "Empfohlene WEGO-Konfiguration", pt: "Configuração WEGO recomendada", ko: "권장 WEGO 구성", ar: "تجهيز WEGO الموصى به" }),
    solutionBody: loc({ en: "Use diesel and heavy-duty forklifts with confirmed attachment discussion for drums, bags, and long outdoor cycles. Spare filters, tyres, and service parts should be packed with the first shipment.", es: "Use diésel y equipos pesados con accesorios confirmados para tambores, sacos y ciclos largos. Incluya filtros, neumáticos y repuestos en el primer envío.", fr: "Utilisez des diesel et des chariots lourds avec accessoires confirmés pour fûts, sacs et longs cycles extérieurs. Ajoutez filtres, pneus et pièces au premier envoi.", ja: "ドラム、袋物、長時間の屋外運転には、アタッチメントを確認したディーゼル・大型機を使用します。初回出荷に消耗部品を同梱します。", de: "Für Fässer, Sackware und lange Außeneinsätze Diesel- und Schwerlaststapler mit bestätigten Anbaugeräten einsetzen. Filter, Reifen und Serviceteile mit der ersten Sendung beilegen.", pt: "Use diesel e empilhadeiras pesadas com acessórios definidos para tambores, sacos e longos ciclos externos. Inclua filtros, pneus e peças no primeiro embarque.", ko: "드럼, 포대, 장시간 야외 작업에는 어태치먼트가 확정된 디젤 및 대형 지게차를 권장합니다. 첫 선적에 필터, 타이어, 서비스 부품을 포함합니다.", ar: "استخدم رافعات ديزل وثقيلة مع مناقشة مؤكدة للملحقات الخاصة بالبراميل والمواد المعبأة والدورات الخارجية الطويلة، مع شحن المرشحات والإطارات وقطع الخدمة مع أول دفعة." }),
    recommendationTitle: loc({ en: "Best-fit categories", es: "Categorías adecuadas", fr: "Catégories adaptées", ja: "適合カテゴリ", de: "Passende Kategorien", pt: "Categorias adequadas", ko: "적합 카테고리", ar: "الفئات الأنسب" }),
    recommendationBody: loc({ en: "Diesel, heavy-duty, and rough-terrain lines are the usual fit for chemical and energy yards.", es: "Diésel, gran capacidad y todoterreno suelen ser la opción adecuada.", fr: "Les gammes diesel, lourdes et tout-terrain conviennent le plus souvent.", ja: "化学・エネルギー系のヤードにはディーゼル、大型、不整地ラインが適しています。", de: "Diesel-, Schwerlast- und Geländelinien passen meist zu Chemie- und Energiehöfen.", pt: "Linhas diesel, de grande porte e off-road costumam atender melhor.", ko: "화학·에너지 야드에는 디젤, 대형, 험지용 라인이 주로 적합합니다.", ar: "تلائم خطوط الديزل والخدمة الشاقة والطرق الوعرة ساحات الكيماويات والطاقة." }),
    recommendedCategories: ["diesel-forklifts", "heavy-duty-forklifts", "rough-terrain-forklifts"]
  },
  {
    slug: "forestry-wood",
    title: loc({ en: "Forestry & Wood", es: "Forestal y madera", fr: "Bois et foresterie", ja: "木材・林業", de: "Forst und Holz", pt: "Madeira e florestal", ko: "목재 및 임업", ar: "الأخشاب والغابات" }),
    summary: loc({ en: "Handling for timber yards, sawmills, board stock, and uneven outdoor storage conditions.", es: "Manejo para patios de madera, aserraderos, tableros y almacenamiento exterior irregular.", fr: "Manutention pour parcs à bois, scieries, panneaux et stockage extérieur irrégulier.", ja: "木材ヤード、製材所、板材、屋外不整地保管向け。", de: "Handling für Holzplätze, Sägewerke, Plattenmaterial und unebene Außenlagerung.", pt: "Movimentação para pátios de madeira, serrarias, chapas e armazenagem externa irregular.", ko: "목재 야드, 제재소, 판재, 비포장 야외 보관용.", ar: "مناولة ساحات الأخشاب والمناشر والألواح والتخزين الخارجي غير المستوي." }),
    image: "/images/products/rough-terrain-35t/01.webp",
    challengeTitle: loc({ en: "Common handling demands", es: "Demandas comunes", fr: "Besoins courants", ja: "主な荷役課題", de: "Typische Anforderungen", pt: "Demandas comuns", ko: "주요 작업 요구", ar: "متطلبات المناولة الشائعة" }),
    challenges: [
      loc({ en: "Uneven surfaces and outdoor weather exposure", es: "Superficies irregulares y clima exterior", fr: "Sols irréguliers et exposition au climat", ja: "不整地と屋外環境", de: "Unebene Flächen und Witterung", pt: "Superfícies irregulares e clima externo", ko: "비포장면과 야외 환경", ar: "أسطح غير مستوية وتعرض للطقس الخارجي" }),
      loc({ en: "Long loads and irregular material shapes", es: "Cargas largas y formas irregulares", fr: "Charges longues et formes irrégulières", ja: "長尺物と不定形荷物", de: "Lange Lasten und unregelmäßige Formen", pt: "Cargas longas e formatos irregulares", ko: "장척물과 불규칙 하중", ar: "أحمال طويلة وأشكال غير منتظمة" }),
      loc({ en: "Need for traction and durable tyres", es: "Necesidad de tracción y neumáticos durables", fr: "Besoin d'adhérence et de pneus durables", ja: "高い牽引力と耐久タイヤ", de: "Traktion und robuste Reifen erforderlich", pt: "Necessidade de tração e pneus duráveis", ko: "견인력과 내구 타이어 필요", ar: "الحاجة إلى جر جيد وإطارات متينة" })
    ],
    solutionTitle: loc({ en: "Recommended WEGO setup", es: "Configuración WEGO recomendada", fr: "Configuration WEGO recommandée", ja: "推奨WEGO構成", de: "Empfohlene WEGO-Konfiguration", pt: "Configuração WEGO recomendada", ko: "권장 WEGO 구성", ar: "تجهيز WEGO الموصى به" }),
    solutionBody: loc({ en: "Rough-terrain forklifts handle uneven timber yards better than standard warehouse models. For heavier bundles, confirm diesel power, tyre type, and fork size against the actual load profile.", es: "Los todoterreno manejan mejor los patios de madera que un modelo estándar. Para paquetes pesados, confirme potencia diésel, neumáticos y horquillas.", fr: "Les tout-terrain gèrent mieux les parcs à bois que les modèles d'entrepôt. Pour les charges lourdes, confirmez diesel, pneus et fourches.", ja: "木材ヤードでは標準倉庫車より不整地車が適しています。重量束物にはディーゼル出力、タイヤ、フォーク寸法を実荷姿で確認します。", de: "Geländestapler arbeiten auf Holzplätzen besser als Standard-Lagermodelle. Für schwere Bündel Diesel, Reifenart und Gabelgröße nach Lastprofil bestätigen.", pt: "Empilhadeiras todo-terreno trabalham melhor em pátios de madeira do que modelos padrão. Para feixes pesados, confirme potência, pneus e garfos.", ko: "목재 야드에는 표준 창고형보다 험지용 지게차가 적합합니다. 중량 묶음 화물은 디젤 출력, 타이어, 포크 규격을 실제 하중에 맞춰 확정합니다.", ar: "تتعامل الرافعات المخصصة للأراضي الوعرة مع ساحات الأخشاب بشكل أفضل من نماذج المستودعات، وللحمولات الأثقل يجب تأكيد قوة الديزل ونوع الإطارات ومقاس الشوكات حسب الحمولة الفعلية." }),
    recommendationTitle: loc({ en: "Best-fit categories", es: "Categorías adecuadas", fr: "Catégories adaptées", ja: "適合カテゴリ", de: "Passende Kategorien", pt: "Categorias adequadas", ko: "적합 카테고리", ar: "الفئات الأنسب" }),
    recommendationBody: loc({ en: "Rough-terrain and diesel forklift lines fit most timber, board, and yard handling work.", es: "Las líneas todoterreno y diésel se adaptan al trabajo con madera y patio.", fr: "Les gammes tout-terrain et diesel conviennent à la plupart des opérations bois.", ja: "木材や屋外ヤードの荷役には不整地・ディーゼルラインが適しています。", de: "Gelände- und Diesellinien passen zu den meisten Holz- und Yard-Einsätzen.", pt: "Linhas todo-terreno e diesel atendem melhor ao trabalho com madeira e pátios.", ko: "목재 및 야드 작업에는 험지용과 디젤 라인이 적합합니다.", ar: "تلائم خطوط الطرق الوعرة والديزل معظم أعمال الأخشاب والساحات." }),
    recommendedCategories: ["rough-terrain-forklifts", "diesel-forklifts"]
  },
  {
    slug: "other-applications",
    title: loc({ en: "Other Applications", es: "Otras aplicaciones", fr: "Autres applications", ja: "その他用途", de: "Weitere Anwendungen", pt: "Outras aplicações", ko: "기타 적용 분야", ar: "تطبيقات أخرى" }),
    summary: loc({ en: "Project-based forklift selection for buyers whose working scene does not fit a standard category.", es: "Selección por proyecto para compradores cuyo escenario no encaja en una categoría estándar.", fr: "Sélection par projet pour les acheteurs hors catégories standards.", ja: "標準カテゴリに収まらない案件向けの個別選定。", de: "Projektbezogene Auswahl für Käufer außerhalb der Standardkategorien.", pt: "Seleção por projeto para cenários fora das categorias padrão.", ko: "표준 카테고리에 맞지 않는 프로젝트형 선정.", ar: "اختيار قائم على المشروع للمشترين الذين لا تنطبق عليهم الفئات القياسية." }),
    image: "/images/products/diesel-40t-3-stage/01.webp",
    challengeTitle: loc({ en: "Common handling demands", es: "Demandas comunes", fr: "Besoins courants", ja: "主な荷役課題", de: "Typische Anforderungen", pt: "Demandas comuns", ko: "주요 작업 요구", ar: "متطلبات المناولة الشائعة" }),
    challenges: [
      loc({ en: "Non-standard attachment or mast requests", es: "Solicitudes no estándar de accesorio o mástil", fr: "Demandes non standard de mât ou accessoire", ja: "非標準マストやアタッチメント要求", de: "Nicht standardisierte Anbaugeräte oder Maste", pt: "Pedidos não padrão de mastro ou acessório", ko: "비표준 마스트·어태치먼트 요청", ar: "طلبات غير قياسية للسارية أو الملحقات" }),
      loc({ en: "Mixed load profiles and uncertain duty cycles", es: "Perfiles mixtos y ciclos inciertos", fr: "Profils mixtes et cycles incertains", ja: "混在する荷姿と不確定な稼働", de: "Gemischte Lastprofile und unklare Einsatzzyklen", pt: "Perfis mistos e ciclos incertos", ko: "혼합 하중과 불확실한 작업 사이클", ar: "أنماط أحمال مختلطة ودورات تشغيل غير مؤكدة" }),
      loc({ en: "Need for early technical discussion before quotation", es: "Necesidad de discusión técnica antes de cotizar", fr: "Besoin d'un échange technique avant devis", ja: "見積前の技術確認が必要", de: "Technische Abstimmung vor Angebot nötig", pt: "Necessidade de discussão técnica antes da cotação", ko: "견적 전 기술 협의 필요", ar: "الحاجة إلى مناقشة فنية قبل عرض السعر" })
    ],
    solutionTitle: loc({ en: "Recommended WEGO setup", es: "Configuración WEGO recomendada", fr: "Configuration WEGO recommandée", ja: "推奨WEGO構成", de: "Empfohlene WEGO-Konfiguration", pt: "Configuração WEGO recomendada", ko: "권장 WEGO 구성", ar: "تجهيز WEGO الموصى به" }),
    solutionBody: loc({ en: "When the application does not fit a catalog pattern, match the load, floor, mast height, and attachment first, then narrow the final forklift series with the sales team.", es: "Si la aplicación no encaja en el catálogo, primero defina carga, piso, altura y accesorio, y luego cierre la serie final con ventas.", fr: "Si l'application ne suit pas un schéma catalogue, définissez d'abord charge, sol, hauteur et accessoire, puis arrêtez la série avec l'équipe commerciale.", ja: "カタログ定型に合わない場合は、荷姿、床面、マスト高さ、アタッチメントを先に整理し、その後で最終シリーズを営業と絞り込みます。", de: "Wenn der Einsatz nicht zum Katalog passt, zuerst Last, Boden, Hubhöhe und Anbaugerät klären und dann die passende Staplerreihe festlegen.", pt: "Quando a aplicação não se encaixa no catálogo, defina carga, piso, altura e acessório antes de fechar a série final com vendas.", ko: "카탈로그 패턴에 맞지 않으면 하중, 바닥, 마스트 높이, 어태치먼트를 먼저 정리한 뒤 최종 기종을 영업과 확정합니다.", ar: "إذا لم تنطبق الحالة على نمط الكتالوج، فابدأ بمطابقة الحمولة والأرضية وارتفاع السارية والملحق ثم حدد السلسلة المناسبة مع فريق المبيعات." }),
    recommendationTitle: loc({ en: "Best-fit categories", es: "Categorías adecuadas", fr: "Catégories adaptées", ja: "適合カテゴリ", de: "Passende Kategorien", pt: "Categorias adequadas", ko: "적합 카테고리", ar: "الفئات الأنسب" }),
    recommendationBody: loc({ en: "This route starts with the buyer's load profile and ends with the closest WEGO product family.", es: "Este camino empieza por el perfil de carga del comprador y termina en la familia WEGO más cercana.", fr: "Cette voie part du profil de charge et aboutit à la famille WEGO la plus adaptée.", ja: "このルートは荷姿整理から始まり、最も近いWEGO製品群に着地します。", de: "Dieser Weg startet mit dem Lastprofil des Käufers und endet bei der passenden WEGO-Produktfamilie.", pt: "Este fluxo começa pelo perfil de carga e termina na família WEGO mais adequada.", ko: "이 경로는 바이어의 하중 조건에서 시작해 가장 맞는 WEGO 제품군으로 연결됩니다.", ar: "يبدأ هذا المسار من طبيعة الحمولة لدى المشتري وينتهي إلى أقرب عائلة منتجات من WEGO." }),
    recommendedCategories: ["diesel-forklifts", "lithium-electric-forklifts", "heavy-duty-forklifts", "rough-terrain-forklifts", "electric-pallet-stackers"]
  }
];

export const solutionsOrder = solutionDetails.map((item) => item.slug);

export const serviceBlocks: ServiceBlock[] = [
  {
    title: loc({ en: "Pre-sale technical matching", es: "Ajuste técnico preventa", fr: "Cadrage technique avant-vente", ja: "事前技術マッチング", de: "Technische Vorauswahl", pt: "Ajuste técnico pré-venda", ko: "사전 기술 매칭", ar: "المطابقة الفنية قبل البيع" }),
    body: loc({ en: "We confirm model, mast, tyre, engine or battery package, and attachment direction before formal quotation.", es: "Confirmamos modelo, mástil, neumático, motor o batería y accesorios antes de cotizar.", fr: "Nous confirmons modèle, mât, pneus, moteur ou batterie et accessoires avant devis.", ja: "正式見積前に機種、マスト、タイヤ、エンジンまたはバッテリー、アタッチメント方向を確認します。", de: "Vor dem Angebot bestätigen wir Modell, Mast, Reifen, Motor oder Batteriepaket sowie Anbaugeräte.", pt: "Confirmamos modelo, mastro, pneus, motor ou bateria e acessórios antes da cotação.", ko: "정식 견적 전 모델, 마스트, 타이어, 엔진 또는 배터리 패키지와 어태치먼트를 확인합니다.", ar: "نؤكد الموديل والسارية والإطارات وحزمة المحرك أو البطارية واتجاه الملحقات قبل عرض السعر الرسمي." })
  },
  {
    title: loc({ en: "After-sales response", es: "Respuesta posventa", fr: "Réponse après-vente", ja: "アフターサービス対応", de: "After-Sales-Reaktion", pt: "Resposta pós-venda", ko: "애프터서비스 대응", ar: "الاستجابة لما بعد البيع" }),
    body: loc({ en: "Fault description, photo or video confirmation, spare parts identification, and remote technical follow-up are organized around the shipped model.", es: "La descripción de fallas, fotos o video, identificación de repuestos y seguimiento técnico remoto se organizan alrededor del modelo enviado.", fr: "Description de panne, photo ou vidéo, identification des pièces et suivi technique à distance sont organisés autour du modèle expédié.", ja: "不具合内容、写真または動画、部品特定、遠隔技術フォローを出荷モデル単位で整理します。", de: "Fehlerbeschreibung, Foto oder Video, Teileidentifikation und Remote-Support werden auf das gelieferte Modell abgestimmt.", pt: "Descrição da falha, foto ou vídeo, identificação de peças e acompanhamento remoto são organizados com base no modelo enviado.", ko: "고장 설명, 사진 또는 영상, 부품 식별, 원격 기술 지원을 선적 모델 기준으로 정리합니다.", ar: "يتم تنظيم وصف العطل والصور أو الفيديو وتحديد قطع الغيار والمتابعة الفنية عن بعد بناء على الموديل المشحون." })
  },
  {
    title: loc({ en: "Spare parts planning", es: "Planificación de repuestos", fr: "Planification des pièces", ja: "部品計画", de: "Ersatzteilplanung", pt: "Planejamento de peças", ko: "부품 계획", ar: "تخطيط قطع الغيار" }),
    body: loc({ en: "First-order wearing parts, filters, tyres, hydraulic seals, battery service items, and high-turnover components can be packed with the machine shipment.", es: "Repuestos de desgaste, filtros, neumáticos, sellos hidráulicos, piezas de batería y componentes de alta rotación pueden enviarse con la máquina.", fr: "Pièces d'usure, filtres, pneus, joints hydrauliques, éléments batterie et composants à forte rotation peuvent partir avec la machine.", ja: "消耗部品、フィルター、タイヤ、油圧シール、バッテリー保守品、高回転部品を本体と同梱できます。", de: "Verschleißteile, Filter, Reifen, Hydraulikdichtungen, Batterie-Serviceartikel und schnell drehende Komponenten können mitgeliefert werden.", pt: "Peças de desgaste, filtros, pneus, vedações hidráulicas, itens de bateria e componentes de giro rápido podem seguir com a máquina.", ko: "소모품, 필터, 타이어, 유압 씰, 배터리 서비스 품목과 고회전 부품을 본체와 함께 출하할 수 있습니다.", ar: "يمكن شحن قطع التآكل والفلاتر والإطارات والأختام الهيدروليكية ومواد خدمة البطارية والمكونات سريعة الاستهلاك مع الماكينة." })
  },
  {
    title: loc({ en: "Training and delivery support", es: "Soporte de capacitación y entrega", fr: "Formation et support de livraison", ja: "教育と納入支援", de: "Schulung und Übergabe", pt: "Treinamento e apoio à entrega", ko: "교육 및 인도 지원", ar: "التدريب ودعم التسليم" }),
    body: loc({ en: "Delivery documents, inspection records, operating basics, and startup notes can be prepared for the customer's local team or distributor.", es: "Los documentos de entrega, registros de inspección, bases de operación y notas de arranque pueden prepararse para el equipo local o distribuidor.", fr: "Les documents de livraison, contrôles, bases d'utilisation et notes de mise en service peuvent être préparés pour l'équipe locale ou le distributeur.", ja: "納入書類、検査記録、基本操作、立ち上げメモを現地チームまたは代理店向けに準備できます。", de: "Lieferdokumente, Prüfprotokolle, Bediengrundlagen und Inbetriebnahmehinweise können für das lokale Team oder den Distributor vorbereitet werden.", pt: "Documentos de entrega, registros de inspeção, noções operacionais e notas de startup podem ser preparados para a equipe local ou distribuidor.", ko: "납품 문서, 검사 기록, 기본 운용, 시동 메모를 현지 팀 또는 대리점용으로 준비할 수 있습니다.", ar: "يمكن تجهيز مستندات التسليم وسجلات الفحص وأساسيات التشغيل وملاحظات البدء للفريق المحلي أو الموزع." })
  },
  {
    title: loc({ en: "Quality control and delivery inspection", es: "Control de calidad e inspección", fr: "Contrôle qualité et inspection", ja: "品質管理と出荷検査", de: "Qualitätskontrolle und Lieferprüfung", pt: "Controle de qualidade e inspeção", ko: "품질 관리 및 출하 검사", ar: "مراقبة الجودة وفحص التسليم" }),
    body: loc({ en: "Before dispatch, the ordered configuration is checked against the quotation, including model identity, mast, tyres, power package, attachments, visible condition, operating functions, and packing list. Inspection records and loading evidence can be organized with the shipment file.", es: "Antes del envío se verifica la configuración frente a la cotización: modelo, mástil, neumáticos, energía, accesorios, estado, funciones y lista de embalaje. Los registros y pruebas de carga pueden integrarse en el expediente.", fr: "Avant expédition, la configuration est contrôlée par rapport au devis : modèle, mât, pneus, énergie, accessoires, état, fonctions et colisage. Les preuves de contrôle et de chargement peuvent rejoindre le dossier.", ja: "出荷前に、機種、マスト、タイヤ、動力、アタッチメント、外観、作動機能、梱包明細を見積仕様と照合します。検査記録と積込証跡を出荷ファイルにまとめられます。", de: "Vor dem Versand wird die Ausführung mit dem Angebot abgeglichen: Modell, Mast, Reifen, Antrieb, Anbaugeräte, Zustand, Funktionen und Packliste. Prüf- und Verladenachweise können dokumentiert werden.", pt: "Antes do embarque, a configuração é conferida com a cotação: modelo, mastro, pneus, energia, acessórios, condição, funções e lista de embalagem. Registros e provas de carregamento podem integrar o arquivo.", ko: "출하 전 모델, 마스트, 타이어, 동력 패키지, 어태치먼트, 외관, 작동 기능과 포장 목록을 견적 사양과 대조합니다. 검사 기록과 적재 증빙을 선적 파일로 정리할 수 있습니다.", ar: "قبل الشحن تتم مطابقة التجهيز مع عرض السعر، بما يشمل الموديل والسارية والإطارات ومصدر الطاقة والملحقات والحالة والوظائف وقائمة التعبئة، ويمكن تنظيم سجلات الفحص والتحميل مع ملف الشحنة." })
  },
  {
    title: loc({ en: "Distributor service capability planning", es: "Planificación de capacidad del distribuidor", fr: "Organisation du service distributeur", ja: "代理店サービス体制計画", de: "Serviceplanung für Vertriebspartner", pt: "Planejamento de serviço do distribuidor", ko: "대리점 서비스 역량 계획", ar: "تخطيط قدرات خدمة الموزع" }),
    body: loc({ en: "For distributors and repeat buyers, WEGO can help define a practical service structure around the purchased fleet: model records, first-line diagnostic information, recommended wearing parts, stock priorities, tool lists, maintenance checkpoints, and escalation contacts.", es: "Para distribuidores y compradores recurrentes, WEGO puede ayudar a definir una estructura práctica: registros de modelos, diagnóstico inicial, piezas de desgaste, prioridades de stock, herramientas, mantenimiento y contactos de escalación.", fr: "Pour les distributeurs et clients récurrents, WEGO peut structurer le suivi de flotte : dossiers modèles, diagnostic initial, pièces d'usure, priorités de stock, outils, contrôles et contacts d'escalade.", ja: "代理店や継続購入者向けに、車両記録、初期診断情報、推奨消耗部品、在庫優先順位、工具リスト、保守項目、エスカレーション窓口を含む実務的な体制づくりを支援します。", de: "Für Händler und Wiederkäufer kann WEGO eine praktische Servicestruktur definieren: Modelldaten, Erstdiagnose, Verschleißteile, Lagerprioritäten, Werkzeuglisten, Wartungspunkte und Eskalationskontakte.", pt: "Para distribuidores e compradores recorrentes, a WEGO pode estruturar registros, diagnóstico inicial, peças de desgaste, prioridades de estoque, ferramentas, manutenção e contatos de escalonamento.", ko: "대리점과 반복 구매자를 위해 차량 기록, 1차 진단 정보, 권장 소모품, 재고 우선순위, 공구 목록, 정비 점검 항목과 상위 지원 연락 체계를 구성할 수 있습니다.", ar: "للموزعين والعملاء المتكررين يمكن لـ WEGO المساعدة في بناء هيكل عملي يشمل سجلات الموديلات والتشخيص الأولي وقطع الاستهلاك وأولويات المخزون وقوائم الأدوات ونقاط الصيانة وجهات التصعيد." })
  },
  {
    title: loc({ en: "Equipment lifecycle and fleet support", es: "Soporte de ciclo de vida y flota", fr: "Support du cycle de vie et de flotte", ja: "機器ライフサイクルと車両管理", de: "Lebenszyklus- und Flottenunterstützung", pt: "Suporte ao ciclo de vida e à frota", ko: "장비 수명주기 및 차량 지원", ar: "دعم دورة حياة المعدات والأسطول" }),
    body: loc({ en: "As operating needs change, the sales and technical teams can review attachment changes, battery or charging requirements, planned wearing-part replacement, fleet standardization, and replacement timing. Recommendations are based on the actual model record and working condition.", es: "Cuando cambian las necesidades, los equipos pueden revisar accesorios, batería o carga, recambios previstos, estandarización de flota y renovación, según el modelo real y la aplicación.", fr: "Lorsque les besoins évoluent, les équipes peuvent revoir accessoires, batterie ou charge, pièces planifiées, standardisation et remplacement, selon le modèle et l'utilisation réels.", ja: "運用条件の変化に応じて、アタッチメント変更、バッテリー・充電要件、消耗部品交換、車両標準化、更新時期を実車記録と現場条件に基づいて見直します。", de: "Bei veränderten Anforderungen können Anbaugeräte, Batterie und Laden, geplanter Teilewechsel, Flottenstandardisierung und Ersatzzeitpunkt anhand des tatsächlichen Modells geprüft werden.", pt: "Com a mudança das necessidades, podem ser revistos acessórios, bateria ou carga, peças programadas, padronização e renovação, com base no modelo e na aplicação reais.", ko: "작업 조건 변화에 따라 어태치먼트, 배터리와 충전, 소모품 교체, 차량 표준화와 교체 시점을 실제 모델 기록과 현장 조건에 맞춰 검토합니다.", ar: "مع تغير احتياجات التشغيل يمكن مراجعة الملحقات ومتطلبات البطارية أو الشحن واستبدال القطع وتوحيد الأسطول وتوقيت الإحلال استنادا إلى سجل الموديل وظروف العمل الفعلية." })
  }
];

export const aboutProfile = {
  title: loc({ en: "About Us", es: "Sobre nosotros", fr: "À propos", ja: "会社概要", de: "Über uns", pt: "Sobre nós", ko: "회사 소개", ar: "من نحن" }),
  intro: loc({
    en: "Founded in 2008, WEGO Group is located in Jinan City, Shandong Province, China. WEGO is focused on exporting machinery and forklift equipment under the WEGO brand.",
    es: "Fundado en 2008, WEGO Group está en Jinan, Shandong, China. WEGO se centra en exportar maquinaria y montacargas bajo la marca WEGO.",
    fr: "Fondé en 2008, WEGO Group est situé à Jinan, dans le Shandong, en Chine. WEGO se concentre sur l'exportation de machines et chariots sous la marque WEGO.",
    ja: "WEGO Group は 2008 年に設立され、中国山東省済南市に拠点を置いています。WEGO ブランドの機械とフォークリフト輸出に注力しています。",
    de: "Die WEGO Group wurde 2008 gegründet und befindet sich in Jinan, Shandong, China. WEGO konzentriert sich auf den Export von Maschinen und Staplern unter der Marke WEGO.",
    pt: "Fundado em 2008, o WEGO Group está localizado em Jinan, Shandong, China. A WEGO foca na exportação de máquinas e empilhadeiras sob a marca WEGO.",
    ko: "WEGO Group은 2008년에 설립되었으며 중국 산둥성 지난시에 위치합니다. WEGO 브랜드의 기계와 지게차 수출에 집중하고 있습니다.",
    ar: "تأسست مجموعة WEGO في عام 2008 وتقع في مدينة جينان بمقاطعة شاندونغ في الصين، وتركز على تصدير المعدات والرافعات تحت علامة WEGO."
  }),
  body: [
    loc({
      en: "From the beginning, WEGO set company culture as part of management discipline. The group describes its operating philosophy with the values of health, joy, thanksgiving, diligence, and wisdom.",
      es: "Desde el principio, WEGO definió la cultura corporativa como parte de su disciplina de gestión. El grupo resume su filosofía en salud, alegría, gratitud, diligencia y sabiduría.",
      fr: "Dès l'origine, WEGO a intégré la culture d'entreprise à sa gestion. Le groupe résume sa philosophie par santé, joie, gratitude, diligence et sagesse.",
      ja: "設立当初から、WEGO は企業文化を経営規律の一部として位置づけています。健康、喜び、感謝、勤勉、知恵を理念の中心に置いています。",
      de: "Von Beginn an hat WEGO die Unternehmenskultur als Teil der Managementdisziplin definiert. Gesundheit, Freude, Dankbarkeit, Fleiß und Weisheit stehen im Mittelpunkt.",
      pt: "Desde o início, a WEGO definiu a cultura corporativa como parte da disciplina de gestão. Saúde, alegria, gratidão, diligência e sabedoria resumem sua filosofia.",
      ko: "WEGO는 설립 초기부터 기업 문화를 경영 규율의 일부로 두고 있습니다. 건강, 기쁨, 감사, 근면, 지혜를 핵심 가치로 설명합니다.",
      ar: "منذ البداية وضعت WEGO الثقافة المؤسسية ضمن انضباط الإدارة، وتصف فلسفتها بقيم الصحة والفرح والامتنان والاجتهاد والحكمة."
    }),
    loc({
      en: "With more than 50 local partners, WEGO products have been exported to over 120 countries and regions. The company positions this site as a direct channel for global inquiry and project matching.",
      es: "Con más de 50 socios locales, los productos WEGO se han exportado a más de 120 países y regiones. El sitio funciona como canal directo de consulta y emparejamiento de proyectos.",
      fr: "Avec plus de 50 partenaires locaux, les produits WEGO ont été exportés dans plus de 120 pays et régions. Le site sert de canal direct pour les demandes mondiales.",
      ja: "50 以上の現地パートナーとともに、WEGO 製品は 120 以上の国と地域へ輸出されています。本サイトはグローバル問い合わせと案件マッチングの直接窓口です。",
      de: "Mit mehr als 50 lokalen Partnern wurden WEGO Produkte in über 120 Länder und Regionen exportiert. Diese Website dient als direkter Kanal für globale Anfragen und Projektabstimmung.",
      pt: "Com mais de 50 parceiros locais, os produtos WEGO já foram exportados para mais de 120 países e regiões. Este site funciona como canal direto de consultas globais.",
      ko: "50개 이상의 현지 파트너와 함께 WEGO 제품은 120개 이상의 국가와 지역으로 수출되었습니다. 이 사이트는 글로벌 문의와 프로젝트 매칭을 위한 직접 채널입니다.",
      ar: "وبوجود أكثر من 50 شريكا محليا تم تصدير منتجات WEGO إلى أكثر من 120 دولة ومنطقة، ويعمل هذا الموقع كقناة مباشرة للاستفسارات والمشروعات الدولية."
    })
  ],
  stats: [
    { value: "2008", label: loc({ en: "Founded", es: "Fundación", fr: "Création", ja: "創業", de: "Gegründet", pt: "Fundação", ko: "설립", ar: "التأسيس" }) },
    { value: "120+", label: loc({ en: "Countries and regions", es: "Países y regiones", fr: "Pays et régions", ja: "国と地域", de: "Länder und Regionen", pt: "Países e regiões", ko: "국가 및 지역", ar: "الدول والمناطق" }) },
    { value: "50+", label: loc({ en: "Local partners", es: "Socios locales", fr: "Partenaires locaux", ja: "現地パートナー", de: "Lokale Partner", pt: "Parceiros locais", ko: "현지 파트너", ar: "الشركاء المحليون" }) },
    { value: siteConfig.phone, label: loc({ en: "Direct sales contact", es: "Contacto directo", fr: "Contact direct", ja: "直通連絡先", de: "Direkter Vertriebskontakt", pt: "Contato direto", ko: "직접 연락", ar: "اتصال المبيعات المباشر" }) }
  ],
  gallery: [
    { image: "/images/company/wego-main-gate.png", alt: loc({ en: "WEGO main gate", es: "Entrada principal de WEGO", fr: "Entrée principale WEGO", ja: "WEGO正門", de: "WEGO Haupttor", pt: "Portão principal da WEGO", ko: "WEGO 정문", ar: "البوابة الرئيسية لـ WEGO" }) },
    { image: "/images/company/wego-factory-exterior.png", alt: loc({ en: "WEGO factory exterior", es: "Exterior de la fábrica WEGO", fr: "Extérieur de l'usine WEGO", ja: "WEGO工場外観", de: "WEGO Fabrik außen", pt: "Exterior da fábrica WEGO", ko: "WEGO 공장 외관", ar: "واجهة مصنع WEGO" }) },
    { image: "/images/company/wego-production-line.png", alt: loc({ en: "WEGO production line", es: "Línea de producción WEGO", fr: "Ligne de production WEGO", ja: "WEGO生産ライン", de: "WEGO Produktionslinie", pt: "Linha de produção WEGO", ko: "WEGO 생산 라인", ar: "خط إنتاج WEGO" }) }
  ]
};

export const homeCounters = [
  { value: 2008, label: loc({ en: "Founded", es: "Fundación", fr: "Création", ja: "創業", de: "Gegründet", pt: "Fundação", ko: "설립", ar: "التأسيس" }) },
  { value: 120, suffix: "+", label: loc({ en: "Export markets", es: "Mercados de exportación", fr: "Marchés export", ja: "輸出市場", de: "Exportmärkte", pt: "Mercados de exportação", ko: "수출 시장", ar: "أسواق التصدير" }) },
  { value: 50, suffix: "+", label: loc({ en: "Local partners", es: "Socios locales", fr: "Partenaires locaux", ja: "現地パートナー", de: "Lokale Partner", pt: "Parceiros locais", ko: "현지 파트너", ar: "الشركاء المحليون" }) },
  { value: 5, suffix: "+", label: loc({ en: "Product families", es: "Familias de producto", fr: "Familles de produits", ja: "製品群", de: "Produktfamilien", pt: "Famílias de produto", ko: "제품군", ar: "عائلات المنتجات" }) }
];
