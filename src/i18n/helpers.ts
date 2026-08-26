// ─── MULTI-LANGUAGE (i18n) FUNCTIONALITY ────────────────────────────────────
// Commented out for now. To re-enable, uncomment the localize functions below.
// ─────────────────────────────────────────────────────────────────────────────

import { type Locale, DEFAULT_LOCALE } from "@/i18n/config";

type Translatable = {
  translations?: Partial<Record<Locale, Record<string, string | string[]>>>;
};

export function localize<T extends Translatable>(
  obj: T,
  locale: Locale,
  field: string,
): string {
  // ─── COMMENTED OUT: locale-aware localization ────────────────────────────
  // Uncomment to re-enable multi-language support.
  //
  // if (locale === DEFAULT_LOCALE) return obj[field as keyof T] as string;
  // const t = obj.translations?.[locale];
  // const val = t?.[field];
  // if (typeof val === "string") return val;
  // return (obj[field as keyof T] as string) ?? "";
  // ─────────────────────────────────────────────────────────────────────────

  // Stub: always return the default (English) field value
  return (obj[field as keyof T] as string) ?? "";
}

export function localizeObject<T extends Translatable>(
  obj: T,
  locale: Locale,
): T {
  // ─── COMMENTED OUT: locale-aware object localization ─────────────────────
  // Uncomment to re-enable multi-language support.
  //
  // if (locale === DEFAULT_LOCALE || !obj.translations?.[locale]) return obj;
  // const t = obj.translations[locale];
  // const result = { ...obj };
  // for (const [key, value] of Object.entries(t)) {
  //   if (key in result) {
  //     (result as Record<string, unknown>)[key] = value;
  //   }
  // }
  // return result;
  // ─────────────────────────────────────────────────────────────────────────

  // Stub: always return the original object (English)
  return obj;
}
