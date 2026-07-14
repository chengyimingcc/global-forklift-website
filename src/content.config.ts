import { defineCollection, z } from "astro:content";

const localizedString = z.object({
  en: z.string(),
  es: z.string(),
  fr: z.string(),
  ja: z.string(),
  de: z.string(),
  pt: z.string(),
  ko: z.string(),
  ar: z.string()
});

const news = defineCollection({
  type: "content",
  schema: z.object({
    translationKey: z.string(),
    permalink: z.string(),
    category: z.enum(["news", "events", "product-guide", "delivery-case", "technical-guide"]),
    author: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    cover: z.string(),
    title: localizedString,
    excerpt: localizedString,
    seoTitle: localizedString,
    seoDescription: localizedString,
    body: z.object({
      en: z.array(z.string()),
      es: z.array(z.string()),
      fr: z.array(z.string()),
      ja: z.array(z.string()),
      de: z.array(z.string()),
      pt: z.array(z.string()),
      ko: z.array(z.string()),
      ar: z.array(z.string())
    }),
    relatedCategories: z.array(z.string()).default([]),
    featured: z.boolean().default(false)
  })
});

export const collections = { news };
