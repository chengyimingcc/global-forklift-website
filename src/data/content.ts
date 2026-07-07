import type { Lang } from "./languages";

export const industries = [
  {
    slug: "warehousing",
    title: {
      en: "Warehousing",
      es: "Almacenaje",
      fr: "Entrepots",
      ja: "倉庫",
      de: "Lager",
      pt: "Armazenagem",
      ko: "창고",
      ar: "المستودعات"
    },
    summary: {
      en: "Product templates for aisle width, floor type, battery charging, and rack height decisions.",
      es: "Plantillas para pasillos, pisos, carga de baterias y altura de racks.",
      fr: "Modeles pour allees, sol, charge batterie et hauteur de rayonnage.",
      ja: "通路幅、床面、充電、ラック高さの情報を追加するページ。",
      de: "Vorlagen fur Gangbreite, Boden, Batterieladung und Regalhohe.",
      pt: "Modelos para corredor, piso, bateria e altura de porta-paletes.",
      ko: "통로 폭, 바닥, 배터리 충전, 랙 높이 내용을 위한 템플릿.",
      ar: "قوالب لعرض الممرات ونوع الارضية والشحن وارتفاع الرفوف."
    }
  },
  {
    slug: "construction",
    title: {
      en: "Construction sites",
      es: "Construccion",
      fr: "Chantiers",
      ja: "建設現場",
      de: "Baustellen",
      pt: "Construcao",
      ko: "건설 현장",
      ar: "مواقع البناء"
    },
    summary: {
      en: "Reserve for terrain, tire, engine, and attachment recommendations.",
      es: "Reserve para terreno, neumaticos, motor y accesorios.",
      fr: "Reserve pour terrain, pneus, moteur et accessoires.",
      ja: "地形、タイヤ、エンジン、アタッチメント提案を追加。",
      de: "Platz fur Terrain, Reifen, Motor und Anbaugerate.",
      pt: "Reserve para terreno, pneus, motor e acessorios.",
      ko: "지형, 타이어, 엔진, 부착장치 추천 내용을 추가.",
      ar: "خصصها للتضاريس والاطارات والمحرك والملحقات."
    }
  },
  {
    slug: "manufacturing",
    title: {
      en: "Manufacturing",
      es: "Manufactura",
      fr: "Fabrication",
      ja: "製造業",
      de: "Fertigung",
      pt: "Fabricacao",
      ko: "제조",
      ar: "التصنيع"
    },
    summary: {
      en: "Reserve for production-line handling, uptime, and safety workflow content.",
      es: "Reserve para lineas de produccion, disponibilidad y seguridad.",
      fr: "Reserve pour lignes de production, disponibilite et securite.",
      ja: "生産ライン搬送、稼働率、安全ワークフローを追加。",
      de: "Platz fur Produktionslinien, Verfugbarkeit und Sicherheit.",
      pt: "Reserve para linha de producao, disponibilidade e seguranca.",
      ko: "생산라인 운반, 가동률, 안전 흐름 내용을 추가.",
      ar: "خصصها لخطوط الانتاج والتشغيل والسلامة."
    }
  },
  {
    slug: "cold-chain",
    title: {
      en: "Cold chain",
      es: "Cadena de frio",
      fr: "Chaine du froid",
      ja: "コールドチェーン",
      de: "Kuhlkette",
      pt: "Cadeia fria",
      ko: "콜드체인",
      ar: "سلسلة التبريد"
    },
    summary: {
      en: "Reserve for low-temperature battery, lubrication, and cabin configuration guidance.",
      es: "Reserve para bateria, lubricacion y cabina en baja temperatura.",
      fr: "Reserve pour batterie, lubrification et cabine basse temperature.",
      ja: "低温バッテリー、潤滑、キャビン仕様を追加。",
      de: "Platz fur Batterie, Schmierung und Kabine bei Kalte.",
      pt: "Reserve para bateria, lubrificacao e cabine em baixa temperatura.",
      ko: "저온 배터리, 윤활, 캐빈 설정 내용을 추가.",
      ar: "خصصها للبطاريات والتشحيم والكابينة في درجات منخفضة."
    }
  },
  {
    slug: "ports",
    title: {
      en: "Ports and yards",
      es: "Puertos y patios",
      fr: "Ports et parcs",
      ja: "港湾・ヤード",
      de: "Hafen und Hofe",
      pt: "Portos e patios",
      ko: "항만 및 야드",
      ar: "الموانئ والساحات"
    },
    summary: {
      en: "Reserve for container loading, outdoor duty cycle, and corrosion protection content.",
      es: "Reserve para carga de contenedores, ciclos exteriores y anticorrosion.",
      fr: "Reserve pour conteneurs, usage exterieur et anticorrosion.",
      ja: "コンテナ積込、屋外稼働、防錆仕様を追加。",
      de: "Platz fur Container, Ausseneinsatz und Korrosionsschutz.",
      pt: "Reserve para conteineres, uso externo e anticorrosao.",
      ko: "컨테이너 적재, 야외 작업, 부식 방지 내용을 추가.",
      ar: "خصصها لتحميل الحاويات والعمل الخارجي ومقاومة التاكل."
    }
  }
] satisfies Array<{ slug: string; title: Record<Lang, string>; summary: Record<Lang, string> }>;

export const resources = [
  {
    slug: "forklift-buying-guide",
    title: {
      en: "Forklift buying guide",
      es: "Guia de compra",
      fr: "Guide d'achat",
      ja: "購入ガイド",
      de: "Kaufratgeber",
      pt: "Guia de compra",
      ko: "구매 가이드",
      ar: "دليل الشراء"
    },
    summary: {
      en: "Outline page for capacity, lift height, aisle width, power type, and delivery questions.",
      es: "Esquema para capacidad, altura, pasillo, energia y entrega.",
      fr: "Plan pour capacite, hauteur, allee, energie et livraison.",
      ja: "積載、揚高、通路幅、動力、納期確認用アウトライン。",
      de: "Gliederung fur Tragfahigkeit, Hubhohe, Gangbreite, Antrieb und Lieferung.",
      pt: "Roteiro para capacidade, altura, corredor, energia e entrega.",
      ko: "적재, 인상 높이, 통로 폭, 동력, 납기 확인 아웃라인.",
      ar: "مخطط للحمولة والارتفاع والممر والطاقة والتسليم."
    }
  },
  {
    slug: "maintenance-checklist",
    title: {
      en: "Maintenance checklist",
      es: "Lista de mantenimiento",
      fr: "Checklist maintenance",
      ja: "メンテナンスチェックリスト",
      de: "Wartungscheckliste",
      pt: "Checklist de manutencao",
      ko: "정비 체크리스트",
      ar: "قائمة الصيانة"
    },
    summary: {
      en: "Reserve for daily inspection, battery care, engine service, tire checks, and spare parts.",
      es: "Reserve para inspeccion diaria, bateria, motor, llantas y repuestos.",
      fr: "Reserve pour inspection, batterie, moteur, pneus et pieces.",
      ja: "日常点検、バッテリー、エンジン、タイヤ、部品を追加。",
      de: "Platz fur Inspektion, Batterie, Motor, Reifen und Ersatzteile.",
      pt: "Reserve para inspecao, bateria, motor, pneus e pecas.",
      ko: "일상 점검, 배터리, 엔진, 타이어, 부품 내용을 추가.",
      ar: "خصصها للفحص اليومي والبطارية والمحرك والاطارات والقطع."
    }
  },
  {
    slug: "battery-guide",
    title: {
      en: "Forklift battery guide",
      es: "Guia de baterias",
      fr: "Guide batteries",
      ja: "バッテリーガイド",
      de: "Batterieratgeber",
      pt: "Guia de baterias",
      ko: "배터리 가이드",
      ar: "دليل البطاريات"
    },
    summary: {
      en: "Reserve for lithium, lead-acid, charger, runtime, and charging-room content.",
      es: "Reserve para litio, plomo-acido, cargador, autonomia y carga.",
      fr: "Reserve pour lithium, plomb, chargeur, autonomie et salle de charge.",
      ja: "リチウム、鉛、充電器、稼働時間、充電室を追加。",
      de: "Platz fur Lithium, Blei, Ladegerat, Laufzeit und Laderaum.",
      pt: "Reserve para litio, chumbo-acido, carregador, autonomia e carga.",
      ko: "리튬, 납산, 충전기, 운전 시간, 충전실 내용을 추가.",
      ar: "خصصها لليثيوم والرصاص والشاحن ووقت التشغيل وغرفة الشحن."
    }
  }
] satisfies Array<{ slug: string; title: Record<Lang, string>; summary: Record<Lang, string> }>;
