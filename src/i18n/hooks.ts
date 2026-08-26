"use client";

import { useTranslation } from "react-i18next";
import {
  isRtl,
  sanitizeLocale,
  type ActiveLocale,
  DEFAULT_LOCALE,
  ACTIVE_LANGUAGES,
  ACTIVE_LOCALE_CODES,
} from "@/i18n/config";

export function useLanguage() {
  const { i18n } = useTranslation();

  // Sanitize the current locale — if a user previously saved "ar" (or any
  // other unsupported code), fall back to English automatically.
  const rawLocale = i18n.language || DEFAULT_LOCALE;
  const locale = sanitizeLocale(rawLocale);

  // If i18next still reports an inactive locale, correct it immediately.
  if (rawLocale !== locale) {
    i18n.changeLanguage(DEFAULT_LOCALE);
    localStorage.setItem("talk2abe-lang", DEFAULT_LOCALE);
  }

  const dir = isRtl(locale) ? ("rtl" as const) : ("ltr" as const);
  const languages = ACTIVE_LANGUAGES;

  const setLanguage = (code: ActiveLocale) => {
    // Guard: only allow switching to an active language.
    if (!(ACTIVE_LOCALE_CODES as readonly string[]).includes(code)) return;
    i18n.changeLanguage(code);
    localStorage.setItem("talk2abe-lang", code);
  };

  return { locale, dir, languages, setLanguage, isRtl: dir === "rtl" };
}
