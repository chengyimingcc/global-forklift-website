import { getCategory, getProductName, type Product } from "@data/products";
import type { Lang } from "@data/languages";
import { t } from "@data/i18n";
import { absoluteUrl } from "./seo";

export function productSchema(product: Product, lang: Lang) {
  const copy = product.translations[lang] ?? product.translations.en;
  const category = getCategory(product.category);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: getProductName(product, lang),
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: product.brand
    },
    category: category?.label[lang] ?? product.category,
    image: product.gallery.map((image) => absoluteUrl(image)),
    description: copy.seoDescription,
    additionalProperty: product.specs.map((item) => ({
      "@type": "PropertyValue",
      name: t(lang, item.labelKey),
      value: item.value[lang] ?? item.value.en
    }))
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url)
    }))
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}
