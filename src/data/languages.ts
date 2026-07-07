export const defaultLang = "en" as const;

export const languages = [
  { code: "en", name: "English", nativeName: "English", locale: "en", dir: "ltr" },
  { code: "es", name: "Spanish", nativeName: "Spanish", locale: "es", dir: "ltr" },
  { code: "fr", name: "French", nativeName: "French", locale: "fr", dir: "ltr" },
  { code: "ja", name: "Japanese", nativeName: "Japanese", locale: "ja", dir: "ltr" },
  { code: "de", name: "German", nativeName: "Deutsch", locale: "de", dir: "ltr" },
  { code: "pt", name: "Portuguese", nativeName: "Portuguese", locale: "pt", dir: "ltr" },
  { code: "ko", name: "Korean", nativeName: "Korean", locale: "ko", dir: "ltr" },
  { code: "ar", name: "Arabic", nativeName: "Arabic", locale: "ar", dir: "rtl" }
] as const;

export type Lang = (typeof languages)[number]["code"];

export const languageCodes = languages.map((language) => language.code) as Lang[];

export function isLang(value: string | undefined): value is Lang {
  return Boolean(value && languageCodes.includes(value as Lang));
}

export function languageMeta(lang: Lang) {
  return languages.find((language) => language.code === lang) ?? languages[0];
}

export function localizedPath(lang: Lang, path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${normalized === "/" ? "/" : normalized}`;
}
