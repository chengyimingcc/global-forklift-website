import type { Lang } from "./languages";
import { solutionDetails, serviceBlocks } from "./marketing";

const loc = (value: Record<Lang, string>) => value;

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

export const solutions: Solution[] = solutionDetails.map((item) => ({
  slug: item.slug,
  title: item.title,
  summary: item.summary,
  image: item.image,
  recommendedCategories: item.recommendedCategories,
  needs: item.challenges.map((row) => row.en)
}));

export const industries = solutions.map((solution) => ({
  slug: solution.slug,
  title: solution.title,
  summary: solution.summary
}));

export const servicePages: SimplePage[] = serviceBlocks.map((block, index) => ({
  slug: `service-${index + 1}`,
  title: block.title,
  summary: block.body,
  bullets: [block.body.en]
}));

export const resources = [
  {
    slug: "forklift-buying-guide",
    title: loc({
      en: "Forklift Buying Guide",
      es: "Guía de compra de montacargas",
      fr: "Guide d'achat de chariot",
      ja: "フォークリフト購入ガイド",
      de: "Kaufleitfaden Gabelstapler",
      pt: "Guia de compra de empilhadeiras",
      ko: "지게차 구매 가이드",
      ar: "دليل شراء الرافعات الشوكية"
    }),
    summary: loc({
      en: "Capacity, load center, lift height, power type, and attachment points that should be confirmed before asking for a quotation.",
      es: "Capacidad, centro de carga, altura, tipo de energía y accesorios que deben confirmarse antes de pedir cotización.",
      fr: "Capacité, centre de charge, hauteur, énergie et accessoires à confirmer avant le devis.",
      ja: "見積前に確認すべき積載能力、荷重中心、揚高、動力、アタッチメント要件。",
      de: "Tragfähigkeit, Lastschwerpunkt, Hubhöhe, Antriebsart und Anbaugeräte vor der Angebotsanfrage.",
      pt: "Capacidade, centro de carga, altura, energia e acessórios a confirmar antes da cotação.",
      ko: "견적 전 확인해야 할 용량, 하중 중심, 인상 높이, 동력, 어태치먼트 조건.",
      ar: "الحمولة ومركزها وارتفاع الرفع ونوع الطاقة ونقاط الملحقات التي يجب تأكيدها قبل طلب عرض السعر."
    })
  }
] satisfies Array<{ slug: string; title: Record<Lang, string>; summary: Record<Lang, string> }>;

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}

export function getSolutionDetail(slug: string) {
  return solutionDetails.find((solution) => solution.slug === slug);
}

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}
