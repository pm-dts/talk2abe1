"use client";

// ─── MULTI-LANGUAGE (i18n) FUNCTIONALITY ────────────────────────────────────
// Commented out for now. To re-enable, uncomment the imports and provider below.
// ─────────────────────────────────────────────────────────────────────────────

// import { useEffect } from "react";
// import { I18nextProvider } from "react-i18next";
// import i18n, { isRtl, sanitizeLocale, DEFAULT_LOCALE } from "@/i18n/config";

type I18nProviderProps = {
  children: React.ReactNode;
};

export default function I18nProvider({ children }: I18nProviderProps) {
  // ─── COMMENTED OUT: i18next provider with RTL support ────────────────────
  // Uncomment to re-enable multi-language support.
  //
  // useEffect(() => {
  //   const setDirLang = (locale: string) => {
  //     const html = document.documentElement;
  //     // Sanitize: if a saved preference points to a disabled language (e.g. "ar"),
  //     // fall back to English so the document stays LTR with valid translations.
  //     const safe = sanitizeLocale(locale);
  //     html.setAttribute("lang", safe);
  //     // Arabic RTL support is preserved for future re-enablement.
  //     html.setAttribute("dir", isRtl(safe) ? "rtl" : "ltr");
  //   };
  //
  //   setDirLang(i18n.language || DEFAULT_LOCALE);
  //
  //   i18n.on("languageChanged", setDirLang);
  //
  //   return () => {
  //     i18n.off("languageChanged", setDirLang);
  //   };
  // }, []);
  //
  // return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
  // ─────────────────────────────────────────────────────────────────────────

  // Stub: just render children without i18n provider
  return <>{children}</>;
}
