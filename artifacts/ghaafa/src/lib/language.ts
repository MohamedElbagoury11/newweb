import { useLocation } from "wouter";

export function useLanguage() {
  const [location] = useLocation();
  const isEnglish = location === "/en" || location.startsWith("/en/");

  return {
    dir: isEnglish ? "ltr" : "rtl",
    isEnglish,
    lang: isEnglish ? "en" : "ar",
  } as const;
}

export type Language = "ar" | "en";

export function localizedPath(path: string, lang: Language) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return lang === "en" ? `/en${normalized === "/" ? "/" : normalized}` : normalized;
}

export function mockPagePath(label: string, lang: Language) {
  return localizedPath(`/page/${encodeURIComponent(label)}`, lang);
}
