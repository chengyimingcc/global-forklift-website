import { getCategory, getProductName, type Product } from "@data/products";
import type { Lang } from "@data/languages";
import { siteConfig } from "@data/site";
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
      name: siteConfig.brand
    },
    category: category?.label[lang] ?? product.category,
    image: [absoluteUrl(product.image)],
    description: copy.seoDescription,
    additionalProperty: [
      { "@type": "PropertyValue", name: "Capacity", value: product.specs.capacity },
      { "@type": "PropertyValue", name: "Lift height", value: product.specs.liftHeight },
      { "@type": "PropertyValue", name: "Power", value: product.specs.power },
      { "@type": "PropertyValue", name: "Tire type", value: product.specs.tireType }
    ],
    offers: {
      "@type": "Offer",
      url: absoluteUrl(`/${lang}/products/${product.slug}/`),
      priceCurrency: "USD",
      availability: `https://schema.org/${product.availability}`,
      itemCondition: "https://schema.org/NewCondition"
    }
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
