import type { Lang } from "./languages";

type LegalSection = {
  id: string;
  title: string;
  body: string;
};

type LegalDocument = {
  title: string;
  description: string;
  intro: string;
  updatedLabel: string;
  updatedDate: string;
  contentsLabel: string;
  sections: LegalSection[];
};

type LegalContent = {
  privacy: LegalDocument;
  terms: LegalDocument;
};

export const legalContent: Record<Lang, LegalContent> = {
  en: {
    privacy: {
      title: "Privacy Policy",
      description: "How WEGO Forklift collects, uses, stores, and protects personal information submitted through international product inquiries and website use.",
      intro: "This policy explains how WEGO Forklift handles personal information when overseas buyers, distributors, and other visitors use this website or contact us about forklifts and related services.",
      updatedLabel: "Last updated",
      updatedDate: "July 16, 2026",
      contentsLabel: "In this policy",
      sections: [
        { id: "scope", title: "1. Scope and data controller", body: "This policy applies to wegoforklift.com, its multilingual pages, inquiry forms, and communications initiated through this website. The website operator responsible for the relevant processing is WEGO Forklift. Questions about personal information may be sent to sales@cnwegogroup.com." },
        { id: "collection", title: "2. Information we collect", body: "We may collect your name, company, business email, telephone or WhatsApp number, destination country, product interest, quantity, message, preferred contact method, and any documents or specifications you voluntarily provide. Our hosting and security systems may also record IP address, browser type, device information, referring page, requested URL, timestamps, and basic diagnostic logs." },
        { id: "use", title: "3. How and why we use information", body: "We use information to answer inquiries, recommend suitable forklift configurations, prepare quotations, arrange export and after-sales communication, prevent abuse, maintain website security, improve content, and comply with legal obligations. Depending on the circumstances, processing is based on your request or consent, steps toward a business contract, our legitimate interest in operating a secure B2B website, or applicable legal requirements." },
        { id: "cookies", title: "4. Cookies and measurement", body: "The website may use essential cookies required for security, language preference, forms, and hosting. If analytics or advertising measurement tools are enabled, they may collect aggregated usage and campaign information. Non-essential technologies should be used only where permitted and, when required, after consent. Browser settings can restrict cookies, although some functions may then be unavailable." },
        { id: "sharing", title: "5. Sharing and international transfers", body: "We do not sell personal information. Information may be shared only with personnel handling your inquiry and with necessary service providers such as website hosting, email, security, form delivery, CRM, logistics, or technical support providers. Because we serve international buyers, information may be processed in China or other countries. We use reasonable contractual and organizational safeguards where applicable." },
        { id: "retention", title: "6. Retention and security", body: "Inquiry and business records are retained only as long as reasonably needed for follow-up, quotation history, customer service, dispute prevention, accounting, or legal compliance. We use proportionate technical and organizational safeguards, but no internet transmission or storage system can be guaranteed completely secure." },
        { id: "rights", title: "7. Your choices and rights", body: "Subject to applicable law, you may request access, correction, deletion, restriction, objection, portability, or withdrawal of consent. You may also ask us to stop non-essential marketing communication. Send a clear request to sales@cnwegogroup.com; we may need to verify identity and retain information where the law or an existing business relationship requires it." },
        { id: "links-updates", title: "8. Third-party links and policy updates", body: "Links to third-party platforms are governed by those platforms' own privacy terms. We may update this policy when our website, suppliers, or legal obligations change. The current version and effective date will always be published on this page." }
      ]
    },
    terms: {
      title: "Website Terms of Use",
      description: "Terms governing use of the WEGO Forklift B2B website, product information, inquiries, quotations, international orders, and intellectual property.",
      intro: "These terms govern access to this website and the use of its product, technical, and inquiry information. Commercial sales remain subject to the final written quotation, pro forma invoice, or signed contract.",
      updatedLabel: "Last updated",
      updatedDate: "July 16, 2026",
      contentsLabel: "In these terms",
      sections: [
        { id: "acceptance", title: "1. Acceptance and business scope", body: "By using this website, you agree to these terms. The website is intended primarily for business buyers, distributors, fleet operators, and other professional users seeking forklifts, warehouse equipment, parts, and related export support." },
        { id: "information", title: "2. Website information is not a binding offer", body: "Website content is provided for preliminary product evaluation and inquiry. Images, dimensions, capacities, features, certifications, colors, and application examples may vary by model, market, production update, or selected configuration. Website content alone does not constitute a binding quotation, warranty, or commitment to supply." },
        { id: "orders", title: "3. Inquiries, quotations, and orders", body: "Submitting a form does not create an order. A transaction becomes binding only when the parties confirm the model, specifications, quantity, price, currency, Incoterm, payment schedule, production time, destination, warranty, and other conditions in an accepted written quotation, pro forma invoice, purchase agreement, or sales contract. The latest mutually accepted document controls if website information differs." },
        { id: "availability", title: "4. Configuration and availability", body: "Recommendations depend on load, lift height, operating surface, duty cycle, temperature, local regulations, attachment, engine or battery package, and destination market. Buyers are responsible for providing accurate operating requirements. We may update models or substitute components of equal function when permitted by the final agreement." },
        { id: "price-payment", title: "5. Price, taxes, and payment", body: "Public website pages do not display a binding sales price. Quoted prices are valid only for the period and scope stated in the quotation. Banking charges, import duties, local taxes, certification, inspection, insurance, freight, and destination costs are allocated according to the accepted commercial documents and Incoterm. Payment must be made only to the beneficiary account stated in verified WEGO documents." },
        { id: "delivery", title: "6. Delivery, risk, and trade compliance", body: "Production and delivery estimates are subject to final configuration, payment, material availability, inspection, carrier schedules, customs, and events beyond reasonable control. Title and risk transfer according to the agreed Incoterm and sales document. Each party must comply with applicable export controls, sanctions, customs, import licensing, and destination-country requirements." },
        { id: "warranty", title: "7. Inspection, warranty, and after-sales support", body: "Inspection procedures, acceptance, warranty period, covered components, exclusions, spare parts, and service response are defined in the final sales documents. Damage caused by misuse, overload, unauthorized modification, unsuitable fuel or charging, neglected maintenance, normal wear, or failure to follow the operating manual may be excluded where the contract permits." },
        { id: "intellectual-property", title: "8. Intellectual property and acceptable use", body: "WEGO names, logos, product photographs, page design, text, technical drawings, and downloadable materials are protected by applicable intellectual-property laws. You may use them internally to evaluate a purchase, but may not republish, scrape, alter, impersonate, reverse engineer, or use the website unlawfully without written permission." },
        { id: "liability", title: "9. Liability and force majeure", body: "To the extent permitted by law, we are not liable for decisions based solely on preliminary website content, temporary unavailability, third-party links, or indirect and consequential loss. Nothing excludes liability that cannot legally be excluded. Neither party is responsible for delay caused by events beyond reasonable control, subject to the notice and mitigation terms in the final contract." },
        { id: "law-contact", title: "10. Governing documents, disputes, and contact", body: "The governing law, language, dispute process, and jurisdiction for a sale are those stated in the accepted quotation or contract. If these website terms are translated, the English version controls to the extent permitted by law in the event of inconsistency. We may update these terms prospectively. Questions may be sent to sales@cnwegogroup.com." }
      ]
    }
  },
  es: {
    privacy: {
      title: "Política de privacidad",
      description: "Cómo WEGO Forklift recopila, utiliza, conserva y protege los datos enviados en consultas internacionales y durante el uso del sitio web.",
      intro: "Esta política explica cómo WEGO Forklift trata los datos personales cuando compradores, distribuidores y visitantes internacionales usan este sitio o consultan sobre carretillas elevadoras y servicios relacionados.",
      updatedLabel: "Última actualización",
      updatedDate: "16 de julio de 2026",
      contentsLabel: "Contenido de esta política",
      sections: [
        { id: "scope", title: "1. Alcance y responsable", body: "Esta política se aplica a wegoforklift.com, sus páginas multilingües, formularios de consulta y comunicaciones iniciadas desde el sitio. WEGO Forklift es el operador responsable del tratamiento correspondiente. Las consultas sobre datos personales pueden enviarse a sales@cnwegogroup.com." },
        { id: "collection", title: "2. Datos que recopilamos", body: "Podemos recopilar nombre, empresa, correo profesional, teléfono o WhatsApp, país de destino, producto, cantidad, mensaje, método de contacto y documentos o especificaciones facilitados voluntariamente. Los sistemas de alojamiento y seguridad también pueden registrar dirección IP, navegador, dispositivo, página de origen, URL, fecha y datos técnicos básicos." },
        { id: "use", title: "3. Finalidades y bases del tratamiento", body: "Usamos los datos para responder consultas, recomendar configuraciones, preparar ofertas, coordinar exportación y posventa, evitar abusos, proteger el sitio, mejorar el contenido y cumplir obligaciones legales. Según el caso, el tratamiento se basa en su solicitud o consentimiento, medidas precontractuales, nuestro interés legítimo en operar un sitio B2B seguro o requisitos legales aplicables." },
        { id: "cookies", title: "4. Cookies y medición", body: "El sitio puede usar cookies esenciales para seguridad, idioma, formularios y alojamiento. Las herramientas de analítica o publicidad, si se activan, pueden recoger datos agregados de uso y campañas. Las tecnologías no esenciales se utilizarán solo cuando estén permitidas y, si procede, con consentimiento." },
        { id: "sharing", title: "5. Comunicación y transferencias internacionales", body: "No vendemos datos personales. Solo los compartimos con el personal que atiende la consulta y proveedores necesarios de alojamiento, correo, seguridad, formularios, CRM, logística o soporte. Al atender compradores internacionales, los datos pueden tratarse en China u otros países con salvaguardas razonables cuando correspondan." },
        { id: "retention", title: "6. Conservación y seguridad", body: "Conservamos consultas y registros comerciales durante el tiempo razonablemente necesario para seguimiento, historial de ofertas, atención, prevención de disputas, contabilidad o cumplimiento legal. Aplicamos medidas técnicas y organizativas proporcionales, aunque ningún sistema de internet es completamente seguro." },
        { id: "rights", title: "7. Sus derechos y opciones", body: "Conforme a la ley aplicable, puede solicitar acceso, rectificación, supresión, limitación, oposición, portabilidad o retirar su consentimiento, así como cancelar comunicaciones comerciales no esenciales. Escriba a sales@cnwegogroup.com; podremos verificar su identidad y conservar datos cuando exista obligación legal o comercial." },
        { id: "links-updates", title: "8. Enlaces externos y cambios", body: "Las plataformas enlazadas aplican sus propias políticas. Podemos actualizar esta política si cambian el sitio, los proveedores o las obligaciones legales. La versión y fecha vigentes se publicarán siempre en esta página." }
      ]
    },
    terms: {
      title: "Condiciones de uso del sitio",
      description: "Condiciones de uso del sitio B2B de WEGO Forklift, información de producto, consultas, ofertas, pedidos internacionales y propiedad intelectual.",
      intro: "Estas condiciones regulan el acceso al sitio y el uso de su información comercial y técnica. Toda venta se rige por la oferta escrita final, factura proforma o contrato firmado.",
      updatedLabel: "Última actualización",
      updatedDate: "16 de julio de 2026",
      contentsLabel: "Contenido de estas condiciones",
      sections: [
        { id: "acceptance", title: "1. Aceptación y ámbito comercial", body: "Al usar este sitio acepta estas condiciones. Está dirigido principalmente a compradores empresariales, distribuidores, operadores de flotas y profesionales interesados en carretillas, equipos de almacén, repuestos y soporte de exportación." },
        { id: "information", title: "2. La información no es una oferta vinculante", body: "El contenido sirve para evaluación preliminar. Imágenes, medidas, capacidades, funciones, certificaciones, colores y aplicaciones pueden variar según modelo, mercado, actualización o configuración. El sitio por sí solo no constituye oferta, garantía ni compromiso de suministro." },
        { id: "orders", title: "3. Consultas, ofertas y pedidos", body: "Enviar un formulario no crea un pedido. La operación solo es vinculante cuando ambas partes confirman por escrito modelo, especificaciones, cantidad, precio, moneda, Incoterm, pago, producción, destino, garantía y demás condiciones en una oferta aceptada, factura proforma o contrato. El último documento aceptado prevalece sobre el sitio." },
        { id: "availability", title: "4. Configuración y disponibilidad", body: "La recomendación depende de carga, altura, suelo, ciclo de trabajo, temperatura, normativa local, implementos, motor o batería y mercado de destino. El comprador debe proporcionar requisitos exactos. Los modelos pueden actualizarse y los componentes equivalentes solo se sustituirán conforme al acuerdo final." },
        { id: "price-payment", title: "5. Precio, impuestos y pago", body: "El sitio no publica precios de venta vinculantes. Cada precio vale únicamente durante el plazo y alcance de la oferta. Gastos bancarios, aranceles, impuestos, certificación, inspección, seguro, flete y destino se asignan según los documentos comerciales y el Incoterm. Pague solo a la cuenta beneficiaria verificada en documentos WEGO." },
        { id: "delivery", title: "6. Entrega, riesgo y cumplimiento comercial", body: "Los plazos dependen de configuración, pago, materiales, inspección, transportista, aduanas y fuerza mayor. La propiedad y el riesgo se transmiten según el Incoterm acordado. Ambas partes deben cumplir controles de exportación, sanciones, aduanas, licencias y requisitos del país de destino." },
        { id: "warranty", title: "7. Inspección, garantía y posventa", body: "La inspección, aceptación, garantía, componentes cubiertos, exclusiones, repuestos y respuesta se definen en los documentos finales. Pueden excluirse daños por uso incorrecto, sobrecarga, modificaciones no autorizadas, combustible o carga inadecuados, falta de mantenimiento, desgaste normal o incumplimiento del manual." },
        { id: "intellectual-property", title: "8. Propiedad intelectual y uso permitido", body: "Nombres, logotipos, fotografías, diseño, textos, planos y descargas de WEGO están protegidos. Pueden usarse internamente para evaluar una compra, pero no republicarse, extraerse masivamente, modificarse, suplantarse ni utilizarse ilegalmente sin permiso escrito." },
        { id: "liability", title: "9. Responsabilidad y fuerza mayor", body: "En la medida permitida por ley, no respondemos por decisiones basadas solo en contenido preliminar, indisponibilidad temporal, enlaces externos ni pérdidas indirectas. No se excluye responsabilidad que legalmente no pueda excluirse. Los retrasos fuera del control razonable se rigen por el contrato final." },
        { id: "law-contact", title: "10. Documentos rectores, disputas y contacto", body: "La ley, idioma, procedimiento de disputa y jurisdicción de una venta son los del contrato u oferta aceptada. En caso de diferencia entre traducciones, prevalece el inglés cuando la ley lo permita. Podemos actualizar estas condiciones para uso futuro. Contacto: sales@cnwegogroup.com." }
      ]
    }
  },
  fr: {
    privacy: {
      title: "Politique de confidentialité",
      description: "Comment WEGO Forklift collecte, utilise, conserve et protège les données transmises lors des demandes internationales et de l'utilisation du site.",
      intro: "Cette politique explique comment WEGO Forklift traite les données personnelles des acheteurs, distributeurs et visiteurs internationaux qui utilisent le site ou demandent des informations sur nos chariots élévateurs.",
      updatedLabel: "Dernière mise à jour",
      updatedDate: "16 juillet 2026",
      contentsLabel: "Dans cette politique",
      sections: [
        { id: "scope", title: "1. Champ d'application et responsable", body: "Cette politique couvre wegoforklift.com, ses pages multilingues, ses formulaires et les communications initiées via le site. WEGO Forklift est l'opérateur responsable du traitement concerné. Toute question peut être adressée à sales@cnwegogroup.com." },
        { id: "collection", title: "2. Données collectées", body: "Nous pouvons recueillir nom, société, e-mail professionnel, téléphone ou WhatsApp, pays de destination, produit, quantité, message, mode de contact et documents fournis volontairement. L'hébergement et la sécurité peuvent aussi enregistrer adresse IP, navigateur, appareil, page d'origine, URL, horodatage et journaux techniques." },
        { id: "use", title: "3. Utilisation et fondements", body: "Les données servent à répondre, recommander une configuration, établir un devis, organiser l'export et l'après-vente, prévenir les abus, sécuriser le site, améliorer le contenu et respecter la loi. Selon le cas, le traitement repose sur votre demande ou consentement, des mesures précontractuelles, notre intérêt légitime à exploiter un site B2B sûr ou une obligation légale." },
        { id: "cookies", title: "4. Cookies et mesure d'audience", body: "Le site peut utiliser des cookies essentiels pour la sécurité, la langue, les formulaires et l'hébergement. Les outils d'analyse ou publicitaires éventuellement activés peuvent collecter des données agrégées. Les technologies non essentielles ne sont utilisées que si elles sont autorisées et, lorsque nécessaire, après consentement." },
        { id: "sharing", title: "5. Partage et transferts internationaux", body: "Nous ne vendons pas les données personnelles. Elles sont accessibles au personnel chargé de la demande et aux prestataires nécessaires d'hébergement, e-mail, sécurité, formulaires, CRM, logistique ou support. Pour servir nos clients internationaux, elles peuvent être traitées en Chine ou ailleurs avec des garanties raisonnables lorsque nécessaire." },
        { id: "retention", title: "6. Conservation et sécurité", body: "Les demandes et dossiers commerciaux sont conservés pendant la durée raisonnablement nécessaire au suivi, aux devis, au service, à la prévention des litiges, à la comptabilité ou au respect de la loi. Nous appliquons des mesures proportionnées, sans pouvoir garantir une sécurité absolue sur internet." },
        { id: "rights", title: "7. Vos droits et choix", body: "Sous réserve du droit applicable, vous pouvez demander accès, rectification, effacement, limitation, opposition, portabilité ou retrait du consentement, et refuser les communications non essentielles. Écrivez à sales@cnwegogroup.com; une vérification d'identité et certaines conservations légales peuvent être requises." },
        { id: "links-updates", title: "8. Liens externes et mises à jour", body: "Les plateformes tierces appliquent leurs propres règles. Nous pouvons modifier cette politique si le site, les prestataires ou la loi évoluent. La version et la date en vigueur resteront publiées ici." }
      ]
    },
    terms: {
      title: "Conditions d'utilisation du site",
      description: "Conditions régissant le site B2B WEGO Forklift, les informations produit, demandes, devis, commandes internationales et droits de propriété intellectuelle.",
      intro: "Ces conditions régissent l'accès au site et l'utilisation de ses informations commerciales et techniques. Toute vente reste soumise au devis final, à la facture pro forma ou au contrat signé.",
      updatedLabel: "Dernière mise à jour",
      updatedDate: "16 juillet 2026",
      contentsLabel: "Dans ces conditions",
      sections: [
        { id: "acceptance", title: "1. Acceptation et portée commerciale", body: "En utilisant ce site, vous acceptez ces conditions. Il s'adresse principalement aux acheteurs professionnels, distributeurs, gestionnaires de flotte et utilisateurs recherchant chariots, équipements d'entrepôt, pièces et assistance export." },
        { id: "information", title: "2. Informations non contractuelles", body: "Le contenu sert à une évaluation préliminaire. Images, dimensions, capacités, fonctions, certifications, couleurs et exemples peuvent varier selon le modèle, le marché, l'évolution de production ou la configuration. Le site seul ne constitue ni offre ferme, ni garantie, ni engagement de fourniture." },
        { id: "orders", title: "3. Demandes, devis et commandes", body: "L'envoi d'un formulaire ne crée pas de commande. La vente devient ferme après confirmation écrite du modèle, des spécifications, de la quantité, du prix, de la devise, de l'Incoterm, du paiement, du délai, de la destination, de la garantie et des autres conditions dans un devis accepté, une facture pro forma ou un contrat. Le dernier document accepté prévaut." },
        { id: "availability", title: "4. Configuration et disponibilité", body: "La recommandation dépend de la charge, hauteur, surface, cadence, température, réglementation, accessoires, moteur ou batterie et marché. L'acheteur doit fournir des exigences exactes. Les évolutions de modèle et composants équivalents restent soumises à l'accord final." },
        { id: "price-payment", title: "5. Prix, taxes et paiement", body: "Le site n'affiche aucun prix de vente contractuel. Un prix n'est valable que pour la durée et le périmètre du devis. Frais bancaires, droits, taxes, certification, inspection, assurance, fret et frais de destination sont répartis selon les documents et l'Incoterm. Payez uniquement le compte bénéficiaire vérifié dans les documents WEGO." },
        { id: "delivery", title: "6. Livraison, risques et conformité", body: "Les délais dépendent de la configuration, du paiement, des matières, de l'inspection, du transport, des douanes et des événements incontrôlables. Propriété et risques sont transférés selon l'Incoterm convenu. Chaque partie respecte contrôles export, sanctions, douanes, licences et règles du pays de destination." },
        { id: "warranty", title: "7. Inspection, garantie et après-vente", body: "Inspection, réception, durée et étendue de garantie, exclusions, pièces et support sont définis dans les documents finaux. Peuvent être exclus les dommages liés à un mauvais usage, surcharge, modification non autorisée, carburant ou charge inadéquats, défaut d'entretien, usure normale ou non-respect du manuel." },
        { id: "intellectual-property", title: "8. Propriété intellectuelle et usage autorisé", body: "Noms, logos, photos, design, textes, plans et téléchargements WEGO sont protégés. Ils peuvent servir en interne à l'évaluation d'un achat, mais ne peuvent être republiés, aspirés, modifiés, usurpés ou exploités illégalement sans autorisation écrite." },
        { id: "liability", title: "9. Responsabilité et force majeure", body: "Dans les limites légales, nous ne répondons pas des décisions fondées uniquement sur un contenu préliminaire, des interruptions, liens tiers ou pertes indirectes. Les responsabilités légalement impératives demeurent. Les retards hors contrôle raisonnable sont régis par le contrat final." },
        { id: "law-contact", title: "10. Documents applicables, litiges et contact", body: "La loi, la langue, la procédure de règlement et la juridiction d'une vente sont celles du devis ou contrat accepté. En cas d'écart de traduction, l'anglais prévaut lorsque la loi l'autorise. Ces conditions peuvent évoluer pour l'avenir. Contact : sales@cnwegogroup.com." }
      ]
    }
  },
  ja: {
    privacy: {
      title: "プライバシーポリシー",
      description: "WEGO Forkliftが海外からの製品お問い合わせおよびウェブサイト利用に伴う個人情報を取得、利用、保管、保護する方法を説明します。",
      intro: "本ポリシーは、海外の購入者、販売代理店その他の訪問者が本サイトを利用し、フォークリフトや関連サービスについて問い合わせる際の個人情報の取扱いを説明するものです。",
      updatedLabel: "最終更新日",
      updatedDate: "2026年7月16日",
      contentsLabel: "本ポリシーの内容",
      sections: [
        { id: "scope", title: "1. 適用範囲および管理者", body: "本ポリシーはwegoforklift.com、多言語ページ、問い合わせフォームおよび本サイトから開始される連絡に適用されます。該当する処理の責任を負うサイト運営者はWEGO Forkliftです。個人情報に関する連絡先はsales@cnwegogroup.comです。" },
        { id: "collection", title: "2. 取得する情報", body: "氏名、会社名、業務用メール、電話またはWhatsApp、仕向国、関心製品、数量、メッセージ、希望連絡方法、任意提出の資料や仕様を取得することがあります。また、ホスティングおよびセキュリティシステムがIPアドレス、ブラウザ、端末、参照元、URL、時刻、基本ログを記録する場合があります。" },
        { id: "use", title: "3. 利用目的および根拠", body: "お問い合わせ対応、機種構成の提案、見積作成、輸出・アフターサービス連絡、不正防止、サイト保護、内容改善、法令遵守のために利用します。状況に応じて、本人の依頼または同意、契約前手続、安全なB2Bサイト運営上の正当な利益、または法的義務を根拠とします。" },
        { id: "cookies", title: "4. Cookieおよび計測", body: "セキュリティ、言語設定、フォーム、ホスティングに必要なCookieを使用する場合があります。分析または広告計測を有効にした場合、集計された利用・キャンペーン情報を取得することがあります。不要な技術は、許可される範囲で必要な同意を得て使用します。" },
        { id: "sharing", title: "5. 共有および国外移転", body: "個人情報を販売しません。問い合わせ担当者およびホスティング、メール、セキュリティ、フォーム、CRM、物流、技術支援など必要な委託先に限り共有します。国際取引のため、中国その他の国で処理される場合があり、必要に応じ合理的な契約・組織上の保護措置を講じます。" },
        { id: "retention", title: "6. 保管期間および安全管理", body: "問い合わせおよび取引記録は、追跡、見積履歴、顧客対応、紛争防止、会計または法令遵守に合理的に必要な期間のみ保管します。相応の技術的・組織的措置を講じますが、インターネット上の完全な安全性を保証するものではありません。" },
        { id: "rights", title: "7. お客様の権利と選択", body: "適用法に従い、開示、訂正、削除、制限、異議、移転、同意撤回または不要な販促連絡の停止を求めることができます。sales@cnwegogroup.comへ具体的にご連絡ください。本人確認を行い、法令または取引上必要な情報は保持する場合があります。" },
        { id: "links-updates", title: "8. 外部リンクおよび改定", body: "外部プラットフォームには各社のポリシーが適用されます。本サイト、委託先または法的義務の変更に応じて本ポリシーを改定することがあります。最新版と施行日は常に本ページに掲載します。" }
      ]
    },
    terms: {
      title: "ウェブサイト利用規約",
      description: "WEGO ForkliftのB2Bサイト、製品情報、問い合わせ、見積、国際注文および知的財産の利用条件を定めます。",
      intro: "本規約は、本サイトへのアクセスおよび製品・技術・問い合わせ情報の利用に適用されます。実際の売買には最終見積書、プロフォーマインボイスまたは署名済み契約が適用されます。",
      updatedLabel: "最終更新日",
      updatedDate: "2026年7月16日",
      contentsLabel: "本規約の内容",
      sections: [
        { id: "acceptance", title: "1. 同意および事業範囲", body: "本サイトの利用により本規約に同意したものとします。本サイトは主に、フォークリフト、倉庫機器、部品、輸出支援を検討する法人購入者、販売代理店、車両管理者その他の専門利用者向けです。" },
        { id: "information", title: "2. サイト情報は拘束力ある申込みではありません", body: "掲載内容は初期検討用です。画像、寸法、能力、機能、認証、色、用途例は機種、市場、生産変更、構成により異なる場合があります。サイト情報のみで確定見積、保証または供給義務を構成しません。" },
        { id: "orders", title: "3. 問い合わせ、見積および注文", body: "フォーム送信だけでは注文は成立しません。機種、仕様、数量、価格、通貨、インコタームズ、支払、製造期間、仕向地、保証その他の条件を、承認済み見積書、プロフォーマインボイス、売買契約等で双方が書面確認した時点で拘束力が生じます。相違する場合は最新の合意文書が優先します。" },
        { id: "availability", title: "4. 構成および供給可能性", body: "推奨内容は荷重、揚高、路面、稼働率、温度、現地規則、アタッチメント、エンジンまたはバッテリー、仕向市場により異なります。購入者は正確な条件を提供する責任を負います。機種変更や同等部品への変更は最終合意に従います。" },
        { id: "price-payment", title: "5. 価格、税金および支払", body: "サイトには拘束力ある販売価格を掲載しません。価格は見積記載の期間と範囲に限り有効です。銀行手数料、関税、税金、認証、検査、保険、運賃、仕向地費用は合意文書とインコタームズに従います。支払は確認済みWEGO文書記載の受取人口座にのみ行ってください。" },
        { id: "delivery", title: "6. 引渡し、危険負担および貿易遵守", body: "製造・納期は構成、支払、材料、検査、船会社、通関および合理的支配を超える事由の影響を受けます。所有権と危険は合意したインコタームズおよび売買文書に従って移転します。双方は輸出規制、制裁、税関、輸入許可、仕向国要件を遵守します。" },
        { id: "warranty", title: "7. 検査、保証およびアフターサービス", body: "検査、受入れ、保証期間、対象部品、除外、予備品、対応内容は最終売買文書で定めます。誤使用、過負荷、無断改造、不適切な燃料や充電、保守不足、通常摩耗、取扱説明書違反による損傷は契約上除外される場合があります。" },
        { id: "intellectual-property", title: "8. 知的財産および許容される利用", body: "WEGOの名称、ロゴ、写真、ページデザイン、文章、図面、ダウンロード資料は保護されています。購入検討の社内利用は可能ですが、書面許可なく転載、大量取得、改変、なりすまし、リバースエンジニアリング、違法利用をしてはなりません。" },
        { id: "liability", title: "9. 責任および不可抗力", body: "法令で許される範囲で、暫定的なサイト情報のみを基にした判断、一時的停止、外部リンク、間接損害について責任を負いません。法的に排除できない責任は除外されません。合理的支配を超える遅延は最終契約に従います。" },
        { id: "law-contact", title: "10. 優先文書、紛争および連絡先", body: "売買に適用される法律、言語、紛争手続、管轄は承認済み見積または契約に定めるものとします。翻訳に差異がある場合、法令で許される範囲で英語版が優先します。本規約は将来に向けて改定される場合があります。連絡先：sales@cnwegogroup.com。" }
      ]
    }
  },
  de: {
    privacy: {
      title: "Datenschutzerklärung",
      description: "Wie WEGO Forklift personenbezogene Daten aus internationalen Produktanfragen und der Websitenutzung erhebt, verwendet, speichert und schützt.",
      intro: "Diese Erklärung erläutert die Verarbeitung personenbezogener Daten, wenn internationale Käufer, Händler und Besucher diese Website nutzen oder Informationen zu Gabelstaplern und Leistungen anfordern.",
      updatedLabel: "Zuletzt aktualisiert",
      updatedDate: "16. Juli 2026",
      contentsLabel: "Inhalt dieser Erklärung",
      sections: [
        { id: "scope", title: "1. Geltungsbereich und Verantwortlicher", body: "Diese Erklärung gilt für wegoforklift.com, die Sprachseiten, Anfrageformulare und darüber begonnene Kommunikation. Verantwortlicher Websitebetreiber für die jeweilige Verarbeitung ist WEGO Forklift. Datenschutzanfragen richten Sie an sales@cnwegogroup.com." },
        { id: "collection", title: "2. Erhobene Daten", body: "Wir können Name, Unternehmen, geschäftliche E-Mail, Telefon oder WhatsApp, Zielland, Produktinteresse, Menge, Nachricht, Kontaktwunsch sowie freiwillig bereitgestellte Unterlagen erfassen. Hosting- und Sicherheitssysteme können außerdem IP-Adresse, Browser, Gerät, Referrer, URL, Zeitstempel und technische Protokolle speichern." },
        { id: "use", title: "3. Zwecke und Rechtsgrundlagen", body: "Daten werden zur Beantwortung, Konfigurationsempfehlung, Angebotserstellung, Export- und Servicekommunikation, Missbrauchsprävention, Sicherheit, Inhaltsverbesserung und Rechtserfüllung genutzt. Grundlage sind je nach Fall Ihre Anfrage oder Einwilligung, vorvertragliche Maßnahmen, unser berechtigtes Interesse an einer sicheren B2B-Website oder gesetzliche Pflichten." },
        { id: "cookies", title: "4. Cookies und Reichweitenmessung", body: "Die Website kann notwendige Cookies für Sicherheit, Sprache, Formulare und Hosting verwenden. Aktivierte Analyse- oder Werbemessungen können aggregierte Nutzungs- und Kampagnendaten erfassen. Nicht notwendige Technologien werden nur eingesetzt, soweit zulässig und erforderlichenfalls nach Einwilligung." },
        { id: "sharing", title: "5. Weitergabe und internationale Übermittlung", body: "Wir verkaufen keine personenbezogenen Daten. Zugriff erhalten nur zuständige Mitarbeiter und notwendige Anbieter für Hosting, E-Mail, Sicherheit, Formulare, CRM, Logistik oder Support. Für internationale Kunden können Daten in China oder anderen Ländern verarbeitet werden; soweit erforderlich nutzen wir angemessene vertragliche und organisatorische Schutzmaßnahmen." },
        { id: "retention", title: "6. Speicherdauer und Sicherheit", body: "Anfragen und Geschäftsunterlagen werden nur so lange aufbewahrt, wie dies für Nachverfolgung, Angebotshistorie, Service, Streitvermeidung, Buchhaltung oder Rechtspflichten angemessen ist. Wir verwenden verhältnismäßige Sicherheitsmaßnahmen, können jedoch keine absolute Internetsicherheit garantieren." },
        { id: "rights", title: "7. Ihre Rechte und Wahlmöglichkeiten", body: "Nach anwendbarem Recht können Sie Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Übertragbarkeit oder Widerruf sowie das Ende nicht notwendiger Werbung verlangen. Schreiben Sie an sales@cnwegogroup.com. Identitätsprüfung und gesetzlich erforderliche Speicherung bleiben möglich." },
        { id: "links-updates", title: "8. Externe Links und Änderungen", body: "Für verlinkte Plattformen gelten deren eigene Regeln. Wir können diese Erklärung bei Änderungen der Website, Dienstleister oder Rechtslage anpassen. Aktuelle Fassung und Datum stehen stets auf dieser Seite." }
      ]
    },
    terms: {
      title: "Nutzungsbedingungen der Website",
      description: "Bedingungen für die WEGO Forklift B2B-Website, Produktinformationen, Anfragen, Angebote, internationale Bestellungen und geistiges Eigentum.",
      intro: "Diese Bedingungen regeln den Websitezugang und die Nutzung geschäftlicher und technischer Informationen. Verkäufe richten sich nach dem finalen schriftlichen Angebot, der Pro-forma-Rechnung oder dem unterzeichneten Vertrag.",
      updatedLabel: "Zuletzt aktualisiert",
      updatedDate: "16. Juli 2026",
      contentsLabel: "Inhalt dieser Bedingungen",
      sections: [
        { id: "acceptance", title: "1. Zustimmung und geschäftlicher Zweck", body: "Mit Nutzung der Website stimmen Sie diesen Bedingungen zu. Sie richtet sich vor allem an gewerbliche Käufer, Händler, Flottenbetreiber und Fachnutzer, die Gabelstapler, Lagertechnik, Teile und Exportunterstützung suchen." },
        { id: "information", title: "2. Websiteangaben sind kein bindendes Angebot", body: "Inhalte dienen der Vorprüfung. Bilder, Maße, Tragfähigkeiten, Funktionen, Zertifikate, Farben und Einsatzbeispiele können je nach Modell, Markt, Produktionsstand oder Konfiguration variieren. Die Website allein ist weder verbindliches Angebot noch Garantie oder Lieferzusage." },
        { id: "orders", title: "3. Anfragen, Angebote und Bestellungen", body: "Ein Formular erzeugt keine Bestellung. Verbindlichkeit entsteht erst, wenn Modell, Spezifikation, Menge, Preis, Währung, Incoterm, Zahlung, Produktionszeit, Zielort, Garantie und weitere Bedingungen in einem angenommenen Angebot, einer Pro-forma-Rechnung oder einem Vertrag schriftlich bestätigt sind. Das jüngste akzeptierte Dokument hat Vorrang." },
        { id: "availability", title: "4. Konfiguration und Verfügbarkeit", body: "Empfehlungen hängen von Last, Hubhöhe, Boden, Einsatzdauer, Temperatur, Vorschriften, Anbaugerät, Motor- oder Batteriepaket und Zielmarkt ab. Käufer müssen Anforderungen korrekt angeben. Modelländerungen und gleichwertige Komponenten richten sich nach der Endvereinbarung." },
        { id: "price-payment", title: "5. Preis, Steuern und Zahlung", body: "Die Website zeigt keine verbindlichen Verkaufspreise. Angebotspreise gelten nur im genannten Zeitraum und Umfang. Bankkosten, Zölle, Steuern, Zertifizierung, Prüfung, Versicherung, Fracht und Zielkosten werden nach Handelsdokumenten und Incoterm verteilt. Zahlungen erfolgen ausschließlich auf das in verifizierten WEGO-Dokumenten genannte Empfängerkonto." },
        { id: "delivery", title: "6. Lieferung, Gefahr und Handelskonformität", body: "Zeitangaben hängen von Konfiguration, Zahlung, Material, Prüfung, Transport, Zoll und unkontrollierbaren Ereignissen ab. Eigentum und Gefahr gehen nach vereinbartem Incoterm über. Beide Parteien beachten Exportkontrollen, Sanktionen, Zoll, Einfuhrlizenzen und Zielmarktanforderungen." },
        { id: "warranty", title: "7. Prüfung, Gewährleistung und Service", body: "Prüfung, Abnahme, Garantiedauer, abgedeckte Teile, Ausschlüsse, Ersatzteile und Reaktion werden in den finalen Dokumenten festgelegt. Schäden durch Fehlgebrauch, Überlastung, unerlaubte Änderung, ungeeigneten Kraftstoff oder Ladevorgang, Wartungsmangel, Verschleiß oder Missachtung des Handbuchs können ausgeschlossen sein." },
        { id: "intellectual-property", title: "8. Geistiges Eigentum und zulässige Nutzung", body: "WEGO-Namen, Logos, Fotos, Seitengestaltung, Texte, Zeichnungen und Downloads sind geschützt. Interne Nutzung zur Kaufprüfung ist erlaubt; Wiederveröffentlichung, Scraping, Veränderung, Identitätstäuschung, Reverse Engineering oder rechtswidrige Nutzung ohne schriftliche Erlaubnis nicht." },
        { id: "liability", title: "9. Haftung und höhere Gewalt", body: "Soweit rechtlich zulässig haften wir nicht für Entscheidungen allein aufgrund vorläufiger Webinhalte, vorübergehende Ausfälle, Drittlinks oder indirekte Schäden. Zwingende Haftung bleibt unberührt. Verzögerungen außerhalb zumutbarer Kontrolle richten sich nach dem Endvertrag." },
        { id: "law-contact", title: "10. Maßgebliche Dokumente, Streit und Kontakt", body: "Recht, Sprache, Streitverfahren und Gerichtsstand eines Verkaufs ergeben sich aus dem angenommenen Angebot oder Vertrag. Bei Übersetzungsabweichungen gilt, soweit zulässig, Englisch. Änderungen wirken für die Zukunft. Kontakt: sales@cnwegogroup.com." }
      ]
    }
  },
  pt: {
    privacy: {
      title: "Política de privacidade",
      description: "Como a WEGO Forklift coleta, utiliza, conserva e protege dados enviados em consultas internacionais e durante o uso do site.",
      intro: "Esta política explica como a WEGO Forklift trata dados pessoais quando compradores, distribuidores e visitantes internacionais usam o site ou consultam sobre empilhadeiras e serviços relacionados.",
      updatedLabel: "Última atualização",
      updatedDate: "16 de julho de 2026",
      contentsLabel: "Nesta política",
      sections: [
        { id: "scope", title: "1. Escopo e controlador", body: "Esta política abrange wegoforklift.com, páginas multilíngues, formulários e comunicações iniciadas pelo site. A WEGO Forklift é a operadora responsável pelo tratamento relevante. Questões sobre dados pessoais podem ser enviadas a sales@cnwegogroup.com." },
        { id: "collection", title: "2. Dados coletados", body: "Podemos coletar nome, empresa, e-mail profissional, telefone ou WhatsApp, país de destino, produto, quantidade, mensagem, preferência de contato e documentos fornecidos voluntariamente. Hospedagem e segurança também podem registrar IP, navegador, dispositivo, página de origem, URL, horário e logs técnicos básicos." },
        { id: "use", title: "3. Finalidades e bases", body: "Usamos dados para responder consultas, recomendar configurações, preparar cotações, coordenar exportação e pós-venda, prevenir abuso, proteger o site, melhorar conteúdo e cumprir a lei. Conforme o caso, o tratamento se baseia em sua solicitação ou consentimento, medidas pré-contratuais, interesse legítimo em operar um site B2B seguro ou obrigação legal." },
        { id: "cookies", title: "4. Cookies e medição", body: "O site pode usar cookies essenciais para segurança, idioma, formulários e hospedagem. Ferramentas de análise ou publicidade, se ativadas, podem coletar dados agregados de uso e campanha. Tecnologias não essenciais serão usadas apenas quando permitidas e, quando necessário, com consentimento." },
        { id: "sharing", title: "5. Compartilhamento e transferências internacionais", body: "Não vendemos dados pessoais. Compartilhamos apenas com a equipe responsável e provedores necessários de hospedagem, e-mail, segurança, formulários, CRM, logística ou suporte. Para atender clientes internacionais, dados podem ser tratados na China ou em outros países com salvaguardas razoáveis quando aplicáveis." },
        { id: "retention", title: "6. Retenção e segurança", body: "Consultas e registros comerciais são mantidos somente pelo período razoavelmente necessário para acompanhamento, histórico de propostas, atendimento, prevenção de disputas, contabilidade ou obrigação legal. Aplicamos medidas proporcionais, mas nenhum sistema de internet é totalmente seguro." },
        { id: "rights", title: "7. Seus direitos e escolhas", body: "Nos termos da lei aplicável, você pode pedir acesso, correção, exclusão, limitação, oposição, portabilidade ou retirada do consentimento, além de cancelar marketing não essencial. Escreva para sales@cnwegogroup.com; poderemos verificar a identidade e manter dados exigidos por lei ou relação comercial." },
        { id: "links-updates", title: "8. Links externos e alterações", body: "Plataformas externas seguem suas próprias políticas. Podemos atualizar esta política se o site, fornecedores ou obrigações legais mudarem. A versão e a data atuais permanecerão publicadas aqui." }
      ]
    },
    terms: {
      title: "Termos de uso do site",
      description: "Termos do site B2B da WEGO Forklift, informações de produto, consultas, cotações, pedidos internacionais e propriedade intelectual.",
      intro: "Estes termos regem o acesso ao site e o uso das informações comerciais e técnicas. Qualquer venda permanece sujeita à cotação final, fatura proforma ou contrato assinado.",
      updatedLabel: "Última atualização",
      updatedDate: "16 de julho de 2026",
      contentsLabel: "Nestes termos",
      sections: [
        { id: "acceptance", title: "1. Aceitação e escopo comercial", body: "Ao usar o site, você aceita estes termos. Ele se destina principalmente a compradores empresariais, distribuidores, gestores de frota e profissionais que buscam empilhadeiras, equipamentos de armazém, peças e suporte à exportação." },
        { id: "information", title: "2. O conteúdo não é oferta vinculante", body: "O conteúdo serve à avaliação preliminar. Imagens, dimensões, capacidades, funções, certificações, cores e aplicações podem variar por modelo, mercado, atualização ou configuração. O site isoladamente não constitui proposta firme, garantia ou compromisso de fornecimento." },
        { id: "orders", title: "3. Consultas, cotações e pedidos", body: "Enviar formulário não cria pedido. A operação só se torna vinculante quando modelo, especificações, quantidade, preço, moeda, Incoterm, pagamento, produção, destino, garantia e demais condições forem confirmados em cotação aceita, fatura proforma ou contrato. O documento aceito mais recente prevalece." },
        { id: "availability", title: "4. Configuração e disponibilidade", body: "A recomendação depende de carga, altura, piso, ciclo, temperatura, normas locais, implemento, motor ou bateria e mercado de destino. O comprador deve informar requisitos corretos. Atualizações de modelo e componentes equivalentes dependem do acordo final." },
        { id: "price-payment", title: "5. Preço, tributos e pagamento", body: "O site não publica preço de venda vinculante. Preços cotados valem apenas no prazo e escopo informados. Tarifas bancárias, impostos, certificação, inspeção, seguro, frete e custos de destino seguem os documentos comerciais e o Incoterm. Pague somente à conta beneficiária verificada nos documentos WEGO." },
        { id: "delivery", title: "6. Entrega, risco e conformidade comercial", body: "Prazos dependem de configuração, pagamento, materiais, inspeção, transportadora, alfândega e eventos fora de controle razoável. Propriedade e risco transferem-se conforme o Incoterm acordado. As partes cumprem controles de exportação, sanções, alfândega, licenças e regras do destino." },
        { id: "warranty", title: "7. Inspeção, garantia e pós-venda", body: "Inspeção, aceitação, prazo e cobertura de garantia, exclusões, peças e resposta são definidos nos documentos finais. Podem ser excluídos danos por uso incorreto, sobrecarga, alteração não autorizada, combustível ou carga inadequados, falta de manutenção, desgaste normal ou descumprimento do manual." },
        { id: "intellectual-property", title: "8. Propriedade intelectual e uso permitido", body: "Nomes, logos, fotos, design, textos, desenhos e downloads WEGO são protegidos. Podem ser usados internamente para avaliar compra, mas não republicados, extraídos em massa, alterados, usados para imitação, engenharia reversa ou fins ilegais sem permissão escrita." },
        { id: "liability", title: "9. Responsabilidade e força maior", body: "Na medida permitida pela lei, não respondemos por decisões baseadas apenas em conteúdo preliminar, indisponibilidade, links externos ou perdas indiretas. Responsabilidade legal obrigatória permanece. Atrasos fora do controle razoável seguem o contrato final." },
        { id: "law-contact", title: "10. Documentos aplicáveis, disputas e contato", body: "Lei, idioma, solução de disputas e foro da venda são os da cotação ou contrato aceito. Havendo divergência de tradução, o inglês prevalece quando permitido. Podemos atualizar os termos para uso futuro. Contato: sales@cnwegogroup.com." }
      ]
    }
  },
  ko: {
    privacy: {
      title: "개인정보 처리방침",
      description: "WEGO Forklift가 해외 제품 문의와 웹사이트 이용 과정에서 개인정보를 수집, 이용, 보관 및 보호하는 방법을 안내합니다.",
      intro: "본 방침은 해외 구매자, 유통업체 및 방문자가 웹사이트를 이용하거나 지게차와 관련 서비스에 문의할 때 WEGO Forklift가 개인정보를 처리하는 방법을 설명합니다.",
      updatedLabel: "최종 업데이트",
      updatedDate: "2026년 7월 16일",
      contentsLabel: "방침 주요 내용",
      sections: [
        { id: "scope", title: "1. 적용 범위와 처리자", body: "본 방침은 wegoforklift.com, 다국어 페이지, 문의 양식 및 사이트에서 시작된 연락에 적용됩니다. 관련 처리의 책임 있는 사이트 운영자는 WEGO Forklift입니다. 개인정보 문의는 sales@cnwegogroup.com으로 보내십시오." },
        { id: "collection", title: "2. 수집하는 정보", body: "이름, 회사, 업무용 이메일, 전화 또는 WhatsApp, 목적지 국가, 관심 제품, 수량, 메시지, 선호 연락 방법 및 자발적으로 제공한 문서나 사양을 수집할 수 있습니다. 호스팅과 보안 시스템은 IP, 브라우저, 기기, 유입 페이지, URL, 시간 및 기본 기술 로그를 기록할 수 있습니다." },
        { id: "use", title: "3. 이용 목적과 근거", body: "문의 답변, 장비 구성 추천, 견적 작성, 수출 및 사후지원 연락, 악용 방지, 사이트 보안, 콘텐츠 개선과 법적 의무 이행에 사용합니다. 상황에 따라 요청 또는 동의, 계약 전 조치, 안전한 B2B 사이트 운영의 정당한 이익 또는 관련 법적 의무를 근거로 처리합니다." },
        { id: "cookies", title: "4. 쿠키와 측정", body: "보안, 언어, 양식 및 호스팅에 필요한 쿠키를 사용할 수 있습니다. 분석 또는 광고 측정 도구를 활성화하면 집계된 이용 및 캠페인 정보를 수집할 수 있습니다. 비필수 기술은 허용되는 경우 필요한 동의를 받은 뒤 사용합니다." },
        { id: "sharing", title: "5. 공유와 국외 이전", body: "개인정보를 판매하지 않습니다. 문의 담당자와 호스팅, 이메일, 보안, 양식, CRM, 물류 또는 기술지원에 필요한 제공업체에만 공유합니다. 국제 구매자를 지원하기 위해 중국 또는 다른 국가에서 처리될 수 있으며, 필요한 경우 합리적인 계약 및 조직적 보호조치를 사용합니다." },
        { id: "retention", title: "6. 보관과 보안", body: "문의 및 거래 기록은 후속 대응, 견적 이력, 고객 지원, 분쟁 예방, 회계 또는 법률 준수에 합리적으로 필요한 기간만 보관합니다. 비례적인 기술 및 조직적 보호조치를 적용하지만 인터넷 전송과 저장의 완전한 보안을 보장할 수는 없습니다." },
        { id: "rights", title: "7. 정보주체의 권리와 선택", body: "적용 법률에 따라 열람, 정정, 삭제, 제한, 이의제기, 이동, 동의 철회 또는 비필수 마케팅 중단을 요청할 수 있습니다. sales@cnwegogroup.com으로 구체적으로 요청하십시오. 신원 확인이 필요할 수 있고 법률 또는 거래상 필요한 정보는 보관될 수 있습니다." },
        { id: "links-updates", title: "8. 외부 링크와 변경", body: "외부 플랫폼에는 해당 플랫폼의 방침이 적용됩니다. 사이트, 공급업체 또는 법적 의무 변경에 따라 본 방침을 수정할 수 있으며 최신 버전과 시행일을 이 페이지에 게시합니다." }
      ]
    },
    terms: {
      title: "웹사이트 이용약관",
      description: "WEGO Forklift B2B 웹사이트, 제품 정보, 문의, 견적, 국제 주문 및 지식재산권에 적용되는 이용조건입니다.",
      intro: "본 약관은 웹사이트 접근과 제품·기술·문의 정보 이용에 적용됩니다. 실제 판매에는 최종 서면 견적서, 견적송장 또는 서명된 계약이 적용됩니다.",
      updatedLabel: "최종 업데이트",
      updatedDate: "2026년 7월 16일",
      contentsLabel: "약관 주요 내용",
      sections: [
        { id: "acceptance", title: "1. 동의와 사업 범위", body: "웹사이트를 이용하면 본 약관에 동의한 것으로 봅니다. 본 사이트는 지게차, 창고 장비, 부품 및 수출 지원을 찾는 기업 구매자, 유통업체, 차량 관리자와 전문 사용자를 주 대상으로 합니다." },
        { id: "information", title: "2. 웹사이트 정보는 구속력 있는 청약이 아닙니다", body: "사이트 내용은 사전 제품 검토용입니다. 이미지, 치수, 용량, 기능, 인증, 색상과 적용 사례는 모델, 시장, 생산 변경 또는 구성에 따라 달라질 수 있습니다. 사이트 내용만으로 확정 견적, 보증 또는 공급 약속이 성립하지 않습니다." },
        { id: "orders", title: "3. 문의, 견적과 주문", body: "양식 제출만으로 주문이 성립하지 않습니다. 모델, 사양, 수량, 가격, 통화, Incoterm, 결제, 생산 기간, 목적지, 보증과 기타 조건을 승인된 서면 견적, 견적송장 또는 계약으로 확인할 때 거래가 구속력을 가집니다. 불일치 시 최신 합의 문서가 우선합니다." },
        { id: "availability", title: "4. 구성과 공급 가능성", body: "추천은 하중, 인양 높이, 바닥, 작업 주기, 온도, 현지 규정, 어태치먼트, 엔진 또는 배터리와 목적지 시장에 따라 달라집니다. 구매자는 정확한 조건을 제공해야 합니다. 모델 변경과 동등 부품 대체는 최종 합의에 따릅니다." },
        { id: "price-payment", title: "5. 가격, 세금과 결제", body: "사이트에는 구속력 있는 판매가격을 게시하지 않습니다. 견적 가격은 명시된 기간과 범위에만 유효합니다. 은행 수수료, 관세, 세금, 인증, 검사, 보험, 운송과 목적지 비용은 합의 문서와 Incoterm에 따릅니다. 검증된 WEGO 문서의 수취 계좌로만 결제하십시오." },
        { id: "delivery", title: "6. 인도, 위험과 무역 준수", body: "생산 및 인도 예상은 구성, 결제, 자재, 검사, 운송사, 통관과 합리적 통제를 벗어난 사건의 영향을 받습니다. 소유권과 위험은 합의한 Incoterm과 판매 문서에 따라 이전됩니다. 양 당사자는 수출통제, 제재, 관세, 수입허가와 목적지 요건을 준수해야 합니다." },
        { id: "warranty", title: "7. 검사, 보증과 사후지원", body: "검사, 인수, 보증기간, 대상 부품, 제외, 예비부품과 대응은 최종 판매 문서에서 정합니다. 오용, 과부하, 무단 개조, 부적절한 연료나 충전, 정비 소홀, 정상 마모 또는 설명서 위반으로 인한 손상은 계약에 따라 제외될 수 있습니다." },
        { id: "intellectual-property", title: "8. 지식재산권과 허용된 이용", body: "WEGO 명칭, 로고, 사진, 페이지 디자인, 문구, 도면과 다운로드 자료는 보호됩니다. 구매 검토를 위한 내부 이용은 가능하지만 서면 허가 없이 재게시, 대량 수집, 변경, 사칭, 역설계 또는 불법 사용을 할 수 없습니다." },
        { id: "liability", title: "9. 책임과 불가항력", body: "법률이 허용하는 범위에서 예비 사이트 정보만을 근거로 한 결정, 일시적 중단, 외부 링크 또는 간접 손실에 책임을 지지 않습니다. 법적으로 배제할 수 없는 책임은 유지됩니다. 합리적 통제를 벗어난 지연은 최종 계약에 따릅니다." },
        { id: "law-contact", title: "10. 우선 문서, 분쟁과 연락", body: "판매에 적용되는 법률, 언어, 분쟁 절차와 관할은 승인된 견적 또는 계약에 정한 내용입니다. 번역이 다를 경우 법률이 허용하는 범위에서 영어본이 우선합니다. 약관은 장래에 변경될 수 있습니다. 연락처: sales@cnwegogroup.com." }
      ]
    }
  },
  ar: {
    privacy: {
      title: "سياسة الخصوصية",
      description: "توضح كيفية جمع WEGO Forklift للمعلومات الشخصية المقدمة في الاستفسارات الدولية واستخدامها وحفظها وحمايتها.",
      intro: "توضح هذه السياسة كيفية تعامل WEGO Forklift مع المعلومات الشخصية عند استخدام المشترين والموزعين والزوار الدوليين للموقع أو الاستفسار عن الرافعات الشوكية والخدمات المرتبطة بها.",
      updatedLabel: "آخر تحديث",
      updatedDate: "16 يوليو 2026",
      contentsLabel: "محتويات هذه السياسة",
      sections: [
        { id: "scope", title: "1. النطاق والجهة المسؤولة", body: "تنطبق هذه السياسة على wegoforklift.com وصفحاته متعددة اللغات ونماذج الاستفسار والمراسلات التي تبدأ من الموقع. WEGO Forklift هي الجهة المشغلة المسؤولة عن المعالجة ذات الصلة. يمكن إرسال أسئلة الخصوصية إلى sales@cnwegogroup.com." },
        { id: "collection", title: "2. المعلومات التي نجمعها", body: "قد نجمع الاسم والشركة والبريد المهني والهاتف أو WhatsApp وبلد الوجهة والمنتج والكمية والرسالة وطريقة الاتصال والمستندات المقدمة طوعاً. وقد تسجل أنظمة الاستضافة والأمان عنوان IP والمتصفح والجهاز والصفحة المرجعية والرابط والتوقيت والسجلات التقنية الأساسية." },
        { id: "use", title: "3. كيفية الاستخدام والأساس", body: "نستخدم المعلومات للرد على الاستفسارات واقتراح التجهيز وإعداد عروض الأسعار وتنظيم التصدير وخدمة ما بعد البيع ومنع إساءة الاستخدام وحماية الموقع وتحسين المحتوى والامتثال القانوني. وتعتمد المعالجة، حسب الحالة، على طلبك أو موافقتك أو خطوات ما قبل التعاقد أو مصلحتنا المشروعة في تشغيل موقع B2B آمن أو التزام قانوني." },
        { id: "cookies", title: "4. ملفات تعريف الارتباط والقياس", body: "قد يستخدم الموقع ملفات ضرورية للأمان واللغة والنماذج والاستضافة. وإذا فُعّلت أدوات التحليل أو قياس الإعلانات فقد تجمع بيانات استخدام وحملات مجمعة. لا تستخدم التقنيات غير الضرورية إلا حيث يسمح القانون وبعد الموافقة عندما تكون مطلوبة." },
        { id: "sharing", title: "5. المشاركة والنقل الدولي", body: "لا نبيع المعلومات الشخصية. لا نشاركها إلا مع الموظفين المعنيين ومقدمي الخدمات اللازمين للاستضافة والبريد والأمان والنماذج وCRM والخدمات اللوجستية أو الدعم. ولخدمة المشترين الدوليين قد تعالج البيانات في الصين أو دول أخرى مع ضمانات تعاقدية وتنظيمية معقولة عند الحاجة." },
        { id: "retention", title: "6. الاحتفاظ والأمان", body: "نحتفظ بسجلات الاستفسارات والأعمال فقط للمدة اللازمة بصورة معقولة للمتابعة وسجل العروض وخدمة العميل ومنع النزاعات والمحاسبة أو الالتزام القانوني. نطبق تدابير تقنية وتنظيمية متناسبة، لكن لا يمكن ضمان الأمان الكامل لأي نقل أو تخزين عبر الإنترنت." },
        { id: "rights", title: "7. حقوقك وخياراتك", body: "وفق القانون المعمول به يمكنك طلب الوصول أو التصحيح أو الحذف أو التقييد أو الاعتراض أو النقل أو سحب الموافقة وإيقاف التسويق غير الضروري. أرسل طلباً واضحاً إلى sales@cnwegogroup.com؛ قد نتحقق من الهوية ونحتفظ بما يفرضه القانون أو تتطلبه العلاقة التجارية." },
        { id: "links-updates", title: "8. روابط الأطراف الأخرى والتحديثات", body: "تخضع المنصات الخارجية لسياساتها الخاصة. قد نحدّث هذه السياسة عند تغير الموقع أو الموردين أو الالتزامات القانونية، وستبقى النسخة السارية وتاريخها منشورين في هذه الصفحة." }
      ]
    },
    terms: {
      title: "شروط استخدام الموقع",
      description: "شروط استخدام موقع WEGO Forklift للأعمال ومعلومات المنتجات والاستفسارات وعروض الأسعار والطلبات الدولية والملكية الفكرية.",
      intro: "تنظم هذه الشروط الوصول إلى الموقع واستخدام معلومات المنتجات والمعلومات الفنية والاستفسارات. وتظل المبيعات خاضعة لعرض السعر النهائي أو الفاتورة الأولية أو العقد الموقع.",
      updatedLabel: "آخر تحديث",
      updatedDate: "16 يوليو 2026",
      contentsLabel: "محتويات هذه الشروط",
      sections: [
        { id: "acceptance", title: "1. القبول والنطاق التجاري", body: "باستخدام الموقع فإنك توافق على هذه الشروط. الموقع مخصص أساساً للمشترين من الشركات والموزعين ومديري الأساطيل والمستخدمين المهنيين الباحثين عن الرافعات الشوكية ومعدات المستودعات وقطع الغيار ودعم التصدير." },
        { id: "information", title: "2. معلومات الموقع ليست عرضاً ملزماً", body: "المحتوى مخصص للتقييم الأولي. قد تختلف الصور والأبعاد والحمولات والخصائص والشهادات والألوان وأمثلة الاستخدام باختلاف الطراز والسوق وتحديث الإنتاج والتجهيز. لا يشكل الموقع وحده عرضاً نهائياً أو ضماناً أو التزاماً بالتوريد." },
        { id: "orders", title: "3. الاستفسارات وعروض الأسعار والطلبات", body: "إرسال النموذج لا ينشئ طلباً. تصبح الصفقة ملزمة فقط بعد تأكيد الطراز والمواصفات والكمية والسعر والعملة وIncoterm والدفع ومدة الإنتاج والوجهة والضمان وبقية الشروط كتابة في عرض مقبول أو فاتورة أولية أو عقد. يسود أحدث مستند مقبول عند الاختلاف." },
        { id: "availability", title: "4. التجهيز والتوافر", body: "يعتمد الاقتراح على الحمولة وارتفاع الرفع والسطح ودورة العمل والحرارة واللوائح المحلية والملحق والمحرك أو البطارية وسوق الوجهة. يتحمل المشتري مسؤولية تقديم المتطلبات الصحيحة. تخضع تحديثات الطراز واستبدالات المكونات المكافئة للاتفاق النهائي." },
        { id: "price-payment", title: "5. السعر والضرائب والدفع", body: "لا ينشر الموقع سعراً ملزماً للبيع. يسري السعر فقط ضمن مدة ونطاق عرض السعر. توزع الرسوم البنكية والجمارك والضرائب والشهادات والفحص والتأمين والشحن وتكاليف الوجهة وفق المستندات التجارية وIncoterm. يجب الدفع فقط إلى حساب المستفيد المثبت في مستندات WEGO الموثقة." },
        { id: "delivery", title: "6. التسليم والمخاطر والامتثال التجاري", body: "تتأثر المواعيد بالتجهيز والدفع والمواد والفحص والناقل والجمارك والأحداث الخارجة عن السيطرة المعقولة. تنتقل الملكية والمخاطر وفق Incoterm ومستند البيع المتفق عليهما. يلتزم الطرفان بقيود التصدير والعقوبات والجمارك وتراخيص الاستيراد ومتطلبات بلد الوجهة." },
        { id: "warranty", title: "7. الفحص والضمان وخدمة ما بعد البيع", body: "تحدد المستندات النهائية إجراءات الفحص والقبول ومدة الضمان ومكوناته واستثناءاته وقطع الغيار والاستجابة. قد يستثنى الضرر الناتج عن سوء الاستخدام أو التحميل الزائد أو التعديل غير المصرح أو الوقود أو الشحن غير المناسب أو إهمال الصيانة أو البلى الطبيعي أو مخالفة الدليل." },
        { id: "intellectual-property", title: "8. الملكية الفكرية والاستخدام المسموح", body: "أسماء WEGO وشعاراتها وصورها وتصميم الصفحات ونصوصها ورسوماتها ومواد التنزيل محمية. يجوز استخدامها داخلياً لتقييم الشراء، ولا يجوز إعادة نشرها أو جمعها آلياً أو تعديلها أو انتحالها أو إجراء هندسة عكسية أو استخدامها بصورة غير قانونية دون إذن كتابي." },
        { id: "liability", title: "9. المسؤولية والقوة القاهرة", body: "في حدود القانون لا نتحمل المسؤولية عن قرارات تعتمد فقط على محتوى أولي أو توقف مؤقت أو روابط خارجية أو خسائر غير مباشرة. ولا يستبعد ما لا يمكن استبعاده قانوناً. تخضع التأخيرات الخارجة عن السيطرة المعقولة للعقد النهائي." },
        { id: "law-contact", title: "10. المستندات الحاكمة والنزاعات والاتصال", body: "يحدد عرض السعر أو العقد المقبول القانون واللغة وإجراءات النزاع والاختصاص القضائي للبيع. وعند اختلاف الترجمة تسود الإنجليزية في حدود ما يسمح به القانون. يجوز تحديث الشروط للمستقبل. الاتصال: sales@cnwegogroup.com." }
      ]
    }
  }
};
