import type { Lang } from "./languages";

export type CompanyProfileCopy = {
  metaTitle: string;
  metaDescription: string;
  label: string;
  title: string;
  lead: string;
  profileTitle: string;
  paragraphs: [string, string, string];
  cultureTitle: string;
  cultureBody: string;
  founded: string;
  partners: string;
  markets: string;
  headquarters: string;
  networkLabel: string;
  networkTitle: string;
  networkBody: string;
  galleryLabel: string;
  galleryTitle: string;
  photoAlts: [string, string, string];
  welcome: string;
};

export const companyProfile: Record<Lang, CompanyProfileCopy> = {
  en: {
    metaTitle: "WEGO Group Company Profile | Global Forklift Manufacturer",
    metaDescription: "Founded in 2008 in Jinan, China, WEGO Group manufactures and exports WEGO brand forklifts through a network serving more than 120 countries and regions.",
    label: "Company profile",
    title: "WEGO Group",
    lead: "Professional machinery manufacturing and export expertise from Jinan, Shandong, serving material handling customers worldwide since 2008.",
    profileTitle: "Machinery expertise rooted in Shandong",
    paragraphs: [
      "Founded in 2008, WEGO Group is based in Jinan, Shandong Province, China. We are a professional machinery manufacturing and export company, focused on material handling equipment including forklifts under our own WEGO brand.",
      "From the beginning, WEGO has treated corporate culture as a guide for management and a source of lasting operating strength. Health, Joy, Gratitude, Diligence, and Wisdom form the core of our corporate philosophy.",
      "With the support of more than 50 local partners, WEGO products have reached more than 120 countries and regions. Our products and services have earned a strong reputation among international partners and users."
    ],
    cultureTitle: "A culture built around people and cooperation",
    cultureBody: "We believe every person can succeed through committed work. Full participation, cooperation, and innovation guide how WEGO people learn, work, and build long-term relationships.",
    founded: "Founded",
    partners: "Local partners",
    markets: "Countries and regions",
    headquarters: "Headquarters",
    networkLabel: "Global market",
    networkTitle: "From Jinan to customers around the world",
    networkBody: "Our export and partner network supports buyers across Asia-Pacific, Europe, the Middle East, Africa, the Americas, and other international markets.",
    galleryLabel: "Our facilities",
    galleryTitle: "Manufacturing in Jinan",
    photoAlts: ["WEGO Group main entrance in Jinan", "WEGO factory exterior and forklift yard", "WEGO machinery production workshop"],
    welcome: "We welcome partners and customers from around the world to build lasting cooperation with WEGO."
  },
  es: {
    metaTitle: "Perfil de WEGO Group | Fabricante mundial de montacargas",
    metaDescription: "Fundado en 2008 en Jinan, China, WEGO Group fabrica y exporta montacargas de la marca WEGO a más de 120 países y regiones.",
    label: "Perfil de la empresa",
    title: "WEGO Group",
    lead: "Experiencia profesional en fabricación y exportación de maquinaria desde Jinan, Shandong, al servicio de clientes de todo el mundo desde 2008.",
    profileTitle: "Experiencia industrial con raíces en Shandong",
    paragraphs: [
      "Fundado en 2008, WEGO Group tiene su sede en Jinan, provincia de Shandong, China. Somos una empresa profesional de fabricación y exportación de maquinaria, centrada en equipos de manipulación de materiales, incluidos los montacargas de nuestra propia marca WEGO.",
      "Desde el comienzo, WEGO ha considerado la cultura corporativa como guía de la gestión y fuente de fortaleza operativa duradera. Salud, Alegría, Gratitud, Diligencia y Sabiduría forman el núcleo de nuestra filosofía.",
      "Con el apoyo de más de 50 socios locales, los productos WEGO han llegado a más de 120 países y regiones. Nuestros productos y servicios gozan de una sólida reputación entre socios y usuarios internacionales."
    ],
    cultureTitle: "Una cultura basada en las personas y la cooperación",
    cultureBody: "Creemos que cada persona puede alcanzar el éxito mediante un trabajo comprometido. La participación, la cooperación y la innovación guían nuestra forma de aprender, trabajar y crear relaciones duraderas.",
    founded: "Fundación",
    partners: "Socios locales",
    markets: "Países y regiones",
    headquarters: "Sede",
    networkLabel: "Mercado global",
    networkTitle: "De Jinan a clientes de todo el mundo",
    networkBody: "Nuestra red de exportación y socios atiende a compradores de Asia-Pacífico, Europa, Oriente Medio, África, América y otros mercados internacionales.",
    galleryLabel: "Nuestras instalaciones",
    galleryTitle: "Fabricación en Jinan",
    photoAlts: ["Entrada principal de WEGO Group en Jinan", "Exterior de la fábrica y patio de montacargas WEGO", "Taller de producción de maquinaria WEGO"],
    welcome: "Damos la bienvenida a socios y clientes de todo el mundo para construir una cooperación duradera con WEGO."
  },
  fr: {
    metaTitle: "Profil de WEGO Group | Fabricant mondial de chariots élévateurs",
    metaDescription: "Fondé en 2008 à Jinan, en Chine, WEGO Group fabrique et exporte des chariots élévateurs WEGO dans plus de 120 pays et régions.",
    label: "Profil de l'entreprise",
    title: "WEGO Group",
    lead: "Une expertise professionnelle en fabrication et exportation de machines depuis Jinan, Shandong, au service du monde entier depuis 2008.",
    profileTitle: "Une expertise industrielle ancrée dans le Shandong",
    paragraphs: [
      "Fondé en 2008, WEGO Group est établi à Jinan, dans la province du Shandong, en Chine. Nous fabriquons et exportons des machines professionnelles, notamment des équipements de manutention et des chariots élévateurs sous notre propre marque WEGO.",
      "Depuis sa création, WEGO considère la culture d'entreprise comme un guide de gestion et une source de force durable. Santé, Joie, Gratitude, Diligence et Sagesse sont au cœur de notre philosophie.",
      "Avec l'appui de plus de 50 partenaires locaux, les produits WEGO sont présents dans plus de 120 pays et régions. Nos produits et services bénéficient d'une solide réputation auprès de nos partenaires et utilisateurs internationaux."
    ],
    cultureTitle: "Une culture fondée sur les personnes et la coopération",
    cultureBody: "Nous croyons que chacun peut réussir par un travail engagé. Participation, coopération et innovation guident notre manière d'apprendre, de travailler et de bâtir des relations durables.",
    founded: "Fondation",
    partners: "Partenaires locaux",
    markets: "Pays et régions",
    headquarters: "Siège",
    networkLabel: "Marché mondial",
    networkTitle: "De Jinan aux clients du monde entier",
    networkBody: "Notre réseau d'exportation et de partenaires accompagne les acheteurs en Asie-Pacifique, en Europe, au Moyen-Orient, en Afrique, dans les Amériques et sur d'autres marchés.",
    galleryLabel: "Nos installations",
    galleryTitle: "Fabrication à Jinan",
    photoAlts: ["Entrée principale de WEGO Group à Jinan", "Extérieur de l'usine et parc de chariots WEGO", "Atelier de production de machines WEGO"],
    welcome: "Nous invitons les partenaires et clients du monde entier à construire une coopération durable avec WEGO."
  },
  ja: {
    metaTitle: "WEGO Group 会社概要 | グローバルフォークリフトメーカー",
    metaDescription: "WEGO Groupは2008年に中国・済南で設立され、120以上の国と地域へWEGOブランドのフォークリフトを製造・輸出しています。",
    label: "会社概要",
    title: "WEGO Group",
    lead: "2008年の設立以来、山東省済南から世界のお客様へ、産業機械の製造と輸出に関する専門力を提供しています。",
    profileTitle: "山東省に根ざした機械分野の専門力",
    paragraphs: [
      "WEGO Groupは2008年に中国山東省済南市で設立されました。自社ブランドWEGOのフォークリフトをはじめ、物流機器の製造と輸出を専門とする企業です。",
      "創業当初から、企業文化を経営の指針、持続的な事業力の源泉としてきました。「健康、喜び、感謝、勤勉、知恵」を企業理念の中心に置いています。",
      "50社を超える現地パートナーの支援により、WEGO製品は120以上の国と地域へ届けられています。製品とサービスは世界のパートナーやユーザーから高い評価を得ています。"
    ],
    cultureTitle: "人と協力を大切にする企業文化",
    cultureBody: "努力を重ねれば誰もが成長できると考えています。全員参加、協力、革新の姿勢が、学び、仕事、長期的な関係づくりを導きます。",
    founded: "設立",
    partners: "現地パートナー",
    markets: "国と地域",
    headquarters: "本社",
    networkLabel: "グローバル市場",
    networkTitle: "済南から世界のお客様へ",
    networkBody: "輸出・パートナーネットワークを通じ、アジア太平洋、欧州、中東、アフリカ、南北米などの市場を支えています。",
    galleryLabel: "施設紹介",
    galleryTitle: "済南でのものづくり",
    photoAlts: ["済南にあるWEGO Group正門", "WEGO工場外観とフォークリフトヤード", "WEGO産業機械生産工場"],
    welcome: "世界各地のパートナー、お客様との末永い協力を心より歓迎します。"
  },
  de: {
    metaTitle: "WEGO Group Unternehmensprofil | Globaler Gabelstaplerhersteller",
    metaDescription: "WEGO Group wurde 2008 in Jinan, China, gegründet und fertigt und exportiert WEGO Gabelstapler in mehr als 120 Länder und Regionen.",
    label: "Unternehmensprofil",
    title: "WEGO Group",
    lead: "Professionelle Maschinenbau- und Exportkompetenz aus Jinan, Shandong, seit 2008 für Kunden auf der ganzen Welt.",
    profileTitle: "Maschinenkompetenz mit Wurzeln in Shandong",
    paragraphs: [
      "WEGO Group wurde 2008 gegründet und hat seinen Sitz in Jinan in der chinesischen Provinz Shandong. Wir sind auf die Herstellung und den Export von Maschinen spezialisiert, darunter Flurförderzeuge und Gabelstapler unserer eigenen Marke WEGO.",
      "Seit der Gründung versteht WEGO die Unternehmenskultur als Leitlinie für die Führung und als Quelle nachhaltiger Stärke. Gesundheit, Freude, Dankbarkeit, Fleiß und Weisheit bilden den Kern unserer Unternehmensphilosophie.",
      "Mit Unterstützung von mehr als 50 lokalen Partnern sind WEGO Produkte in über 120 Ländern und Regionen vertreten. Unsere Produkte und Dienstleistungen genießen bei internationalen Partnern und Anwendern einen guten Ruf."
    ],
    cultureTitle: "Eine Kultur der Menschen und Zusammenarbeit",
    cultureBody: "Wir glauben, dass jeder durch engagierte Arbeit erfolgreich sein kann. Beteiligung, Zusammenarbeit und Innovation bestimmen unser Lernen, Arbeiten und den Aufbau langfristiger Beziehungen.",
    founded: "Gegründet",
    partners: "Lokale Partner",
    markets: "Länder und Regionen",
    headquarters: "Hauptsitz",
    networkLabel: "Weltmarkt",
    networkTitle: "Von Jinan zu Kunden in aller Welt",
    networkBody: "Unser Export- und Partnernetz betreut Käufer im asiatisch-pazifischen Raum, in Europa, im Nahen Osten, in Afrika, Amerika und weiteren internationalen Märkten.",
    galleryLabel: "Unsere Standorte",
    galleryTitle: "Fertigung in Jinan",
    photoAlts: ["Haupteingang der WEGO Group in Jinan", "WEGO Werk und Gabelstaplerhof", "WEGO Maschinenfertigung"],
    welcome: "Wir freuen uns auf eine langfristige Zusammenarbeit mit Partnern und Kunden aus aller Welt."
  },
  pt: {
    metaTitle: "Perfil da WEGO Group | Fabricante global de empilhadeiras",
    metaDescription: "Fundada em 2008 em Jinan, China, a WEGO Group fabrica e exporta empilhadeiras WEGO para mais de 120 países e regiões.",
    label: "Perfil da empresa",
    title: "WEGO Group",
    lead: "Experiência profissional em fabricação e exportação de máquinas a partir de Jinan, Shandong, atendendo clientes globais desde 2008.",
    profileTitle: "Experiência industrial com raízes em Shandong",
    paragraphs: [
      "Fundada em 2008, a WEGO Group está sediada em Jinan, província de Shandong, China. Somos uma empresa profissional de fabricação e exportação de máquinas, com foco em equipamentos de movimentação, incluindo empilhadeiras da nossa própria marca WEGO.",
      "Desde o início, a WEGO trata a cultura corporativa como guia de gestão e fonte de força operacional duradoura. Saúde, Alegria, Gratidão, Diligência e Sabedoria formam o centro da nossa filosofia.",
      "Com o apoio de mais de 50 parceiros locais, os produtos WEGO chegaram a mais de 120 países e regiões. Nossos produtos e serviços conquistaram uma forte reputação entre parceiros e usuários internacionais."
    ],
    cultureTitle: "Uma cultura baseada em pessoas e cooperação",
    cultureBody: "Acreditamos que todos podem ter sucesso por meio de trabalho dedicado. Participação, cooperação e inovação orientam a forma como aprendemos, trabalhamos e construímos relações duradouras.",
    founded: "Fundação",
    partners: "Parceiros locais",
    markets: "Países e regiões",
    headquarters: "Sede",
    networkLabel: "Mercado global",
    networkTitle: "De Jinan para clientes no mundo inteiro",
    networkBody: "Nossa rede de exportação e parceiros atende compradores na Ásia-Pacífico, Europa, Oriente Médio, África, Américas e outros mercados internacionais.",
    galleryLabel: "Nossas instalações",
    galleryTitle: "Fabricação em Jinan",
    photoAlts: ["Entrada principal da WEGO Group em Jinan", "Fábrica e pátio de empilhadeiras WEGO", "Oficina de produção de máquinas WEGO"],
    welcome: "Recebemos parceiros e clientes de todo o mundo para construir uma cooperação duradoura com a WEGO."
  },
  ko: {
    metaTitle: "WEGO Group 회사 소개 | 글로벌 지게차 제조사",
    metaDescription: "2008년 중국 지난에서 설립된 WEGO Group은 120개 이상의 국가와 지역에 WEGO 브랜드 지게차를 제조·수출합니다.",
    label: "회사 소개",
    title: "WEGO Group",
    lead: "2008년부터 산둥성 지난을 기반으로 전 세계 고객에게 전문 기계 제조 및 수출 역량을 제공하고 있습니다.",
    profileTitle: "산둥에 뿌리를 둔 기계 전문성",
    paragraphs: [
      "WEGO Group은 2008년 중국 산둥성 지난시에 설립되었습니다. 자체 WEGO 브랜드 지게차를 포함한 물류 장비를 중심으로 기계를 전문적으로 제조하고 수출합니다.",
      "설립 초기부터 기업 문화를 경영의 지침이자 지속적인 운영 역량의 기반으로 삼아 왔습니다. 건강, 기쁨, 감사, 근면, 지혜를 핵심 기업 철학으로 실천합니다.",
      "50곳 이상의 현지 파트너와 함께 WEGO 제품은 120개 이상의 국가와 지역에 수출되고 있습니다. 제품과 서비스는 세계 각지의 파트너와 사용자에게 좋은 평가를 받고 있습니다."
    ],
    cultureTitle: "사람과 협력을 중심에 둔 문화",
    cultureBody: "성실하게 노력하면 누구나 성장할 수 있다고 믿습니다. 전원 참여, 협력, 혁신은 WEGO 구성원의 학습과 업무, 장기적인 관계 구축을 이끕니다.",
    founded: "설립",
    partners: "현지 파트너",
    markets: "국가 및 지역",
    headquarters: "본사",
    networkLabel: "글로벌 시장",
    networkTitle: "지난에서 전 세계 고객에게",
    networkBody: "수출 및 파트너 네트워크를 통해 아시아·태평양, 유럽, 중동, 아프리카, 미주 및 기타 국제 시장의 고객을 지원합니다.",
    galleryLabel: "생산 시설",
    galleryTitle: "지난의 제조 현장",
    photoAlts: ["지난 WEGO Group 정문", "WEGO 공장 외관과 지게차 야드", "WEGO 기계 생산 작업장"],
    welcome: "WEGO는 전 세계 파트너 및 고객과의 장기적인 협력을 환영합니다."
  },
  ar: {
    metaTitle: "نبذة عن WEGO Group | مصنع رافعات شوكية عالمي",
    metaDescription: "تأسست WEGO Group عام 2008 في جينان بالصين، وتقوم بتصنيع وتصدير رافعات WEGO إلى أكثر من 120 دولة ومنطقة.",
    label: "نبذة عن الشركة",
    title: "WEGO Group",
    lead: "خبرة مهنية في تصنيع وتصدير الآلات من جينان بمقاطعة شاندونغ لخدمة العملاء حول العالم منذ عام 2008.",
    profileTitle: "خبرة صناعية راسخة في شاندونغ",
    paragraphs: [
      "تأسست WEGO Group عام 2008 ويقع مقرها في مدينة جينان بمقاطعة شاندونغ في الصين. نحن شركة متخصصة في تصنيع وتصدير الآلات، مع التركيز على معدات مناولة المواد بما فيها الرافعات الشوكية تحت علامتنا WEGO.",
      "منذ التأسيس، اعتمدت WEGO ثقافة الشركة دليلا للإدارة ومصدرا للقوة التشغيلية المستدامة. وتشكل الصحة والفرح والامتنان والاجتهاد والحكمة جوهر فلسفتنا المؤسسية.",
      "بدعم من أكثر من 50 شريكا محليا، وصلت منتجات WEGO إلى أكثر من 120 دولة ومنطقة. وتحظى منتجاتنا وخدماتنا بسمعة قوية بين الشركاء والمستخدمين الدوليين."
    ],
    cultureTitle: "ثقافة تقوم على الإنسان والتعاون",
    cultureBody: "نؤمن بأن كل شخص قادر على النجاح من خلال العمل الجاد. وتوجه المشاركة والتعاون والابتكار طريقة تعلم فريق WEGO وعمله وبناء علاقاته طويلة الأمد.",
    founded: "سنة التأسيس",
    partners: "شريك محلي",
    markets: "دولة ومنطقة",
    headquarters: "المقر الرئيسي",
    networkLabel: "السوق العالمي",
    networkTitle: "من جينان إلى العملاء حول العالم",
    networkBody: "تدعم شبكة التصدير والشركاء لدينا المشترين في آسيا والمحيط الهادئ وأوروبا والشرق الأوسط وأفريقيا والأمريكيتين والأسواق الدولية الأخرى.",
    galleryLabel: "منشآتنا",
    galleryTitle: "التصنيع في جينان",
    photoAlts: ["المدخل الرئيسي لمجموعة WEGO في جينان", "واجهة مصنع WEGO وساحة الرافعات الشوكية", "ورشة إنتاج الآلات في WEGO"],
    welcome: "نرحب بالشركاء والعملاء من جميع أنحاء العالم لبناء تعاون طويل الأمد مع WEGO."
  }
};
