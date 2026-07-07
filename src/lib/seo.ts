import { languages, type Lang } from "@data/languages";
import { siteConfig } from "@data/site";

export function absoluteUrl(path = "/") {
  const base = siteConfig.baseUrl.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function languagePath(lang: Lang, pagePath = "/") {
  const normalized = pagePath.startsWith("/") ? pagePath : `/${pagePath}`;
  return `/${lang}${normalized === "/" ? "/" : normalized}`;
}

export function alternateLinks(pagePath = "/") {
  return languages.map((language) => ({
    hreflang: language.locale,
    href: absoluteUrl(languagePath(language.code, pagePath))
  }));
}

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/favicon.svg"),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    foundingDate: siteConfig.foundedYear
  };
}

export function websiteSchema(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brand,
    url: absoluteUrl(`/${lang}/`),
    inLanguage: lang,
    potentialAction: {
      "@type": "SearchAction",
      target: absoluteUrl(`/${lang}/products/?q={search_term_string}`),
      "query-input": "required name=search_term_string"
    }
  };
}
