import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "@/i18n/locales/en.json";
import es from "@/i18n/locales/es.json";
import de from "@/i18n/locales/de.json";
import ru from "@/i18n/locales/ru.json";
import pt from "@/i18n/locales/pt.json";
import it from "@/i18n/locales/it.json";
import ar from "@/i18n/locales/ar.json";

// All supported locales (including preserved but disabled Arabic).
// The Locale type includes "ar" so that Arabic translation data and type definitions
// remain valid throughout the codebase.
export const SUPPORTED_LANGUAGES = [
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "es", label: "Spanish", nativeLabel: "Español" },
  { code: "de", label: "German", nativeLabel: "Deutsch" },
  { code: "ru", label: "Russian", nativeLabel: "Русский" },
  { code: "pt", label: "Portuguese", nativeLabel: "Português" },
  { code: "it", label: "Italian", nativeLabel: "Italiano" },
  // Arabic support is temporarily disabled and will be re-enabled in a future update.
  // { code: "ar", label: "Arabic", nativeLabel: "العربية" },
] as const;

export type Locale = (typeof SUPPORTED_LANGUAGES)[number]["code"]
  | "ar"; // Arabic locale preserved for translation data compatibility

// Currently active, user-selectable languages.
// Arabic is preserved in the codebase but temporarily removed from active use.
// To re-enable Arabic, add { code: "ar", label: "Arabic", nativeLabel: "العربية" }
// back to SUPPORTED_LANGUAGES above and uncomment it here.
export const ACTIVE_LANGUAGES = [
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "es", label: "Spanish", nativeLabel: "Español" },
  { code: "de", label: "German", nativeLabel: "Deutsch" },
  { code: "ru", label: "Russian", nativeLabel: "Русский" },
  { code: "pt", label: "Portuguese", nativeLabel: "Português" },
  { code: "it", label: "Italian", nativeLabel: "Italiano" },
] as const;

export const ACTIVE_LOCALE_CODES = ACTIVE_LANGUAGES.map((l) => l.code);

export type ActiveLocale = (typeof ACTIVE_LANGUAGES)[number]["code"];

export const DEFAULT_LOCALE: ActiveLocale = "en";

// Arabic RTL support is preserved for future re-enablement.
export const RTL_LOCALES: Locale[] = ["ar"];

export function isRtl(locale: string): boolean {
  return RTL_LOCALES.includes(locale as Locale);
}

// Safety check: if a saved language is not in the active list, fall back to English.
// This prevents users with a previously saved "ar" preference from getting
// missing translations, blank text, RTL layout, or hydration problems.
export function sanitizeLocale(locale: string): ActiveLocale {
  return (ACTIVE_LOCALE_CODES as readonly string[]).includes(locale)
    ? (locale as ActiveLocale)
    : DEFAULT_LOCALE;
}

const resources = {
  en: { translation: en },
  es: { translation: es },
  de: { translation: de },
  ru: { translation: ru },
  pt: { translation: pt },
  it: { translation: it },
  // Arabic translations preserved in resources for future re-enablement.
  ar: { translation: ar },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: DEFAULT_LOCALE,
    // Only active languages are registered with i18next so that a saved "ar"
    // preference triggers the built-in fallback to English.
    supportedLngs: ACTIVE_LOCALE_CODES as unknown as string[],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage"],
      lookupLocalStorage: "talk2abe-lang",
      caches: ["localStorage"],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
