"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
// import { Globe } from "lucide-react"; // Commented out: multi-language disabled

// import { useTranslation } from "react-i18next"; // Commented out: multi-language disabled

import { navigation } from "@/data/navigation";
import Logo from "@/components/common/Logo";
import Container from "@/components/common/Container";
// import { useLanguage } from "@/i18n/hooks"; // Commented out: multi-language disabled
// import { ACTIVE_LANGUAGES, type ActiveLocale } from "@/i18n/config"; // Commented out: multi-language disabled

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isLangOpen, setIsLangOpen] = useState(false); // Commented out: multi-language disabled
  // const langRef = useRef<HTMLDivElement>(null); // Commented out: multi-language disabled
  const pathname = usePathname();
  // const { t } = useTranslation(); // Commented out: multi-language disabled
  // const { locale, setLanguage } = useLanguage(); // Commented out: multi-language disabled

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const closeMenu = () => setIsMenuOpen(false);

  // ─── COMMENTED OUT: language dropdown click-outside handler ───────────────
  // useEffect(() => {
  //   const handleClickOutside = (e: MouseEvent) => {
  //     if (langRef.current && !langRef.current.contains(e.target as Node)) {
  //       setIsLangOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);
  // ─────────────────────────────────────────────────────────────────────────

  const navLabels: Record<string, string> = {
    "/": "Home",
    "/ask-abe": "Ask Abe",
    "/loan-programs": "Loan Programs",
    "/questions": "Questions",
    "/contact": "Contact",
    "/get-started": "Get Started",
    "/about-abe": "About Abe",
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <Container>
        <div className="flex min-h-[88px] items-center justify-between gap-8">
          {/* Logo */}
          <Logo size="lg" />

          {/* Phone Number */}
          <a
            href="tel:+13058916500"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-brand"
          >
            <Phone
              className="h-4 w-4 text-brand"
              strokeWidth={2}
              aria-hidden="true"
            />
            (305) 891-6500
          </a>

          {/* Desktop Navigation + CTA */}
          <div className="hidden items-center gap-6 lg:flex">
            <nav
              className="flex items-center gap-7"
              aria-label="Primary"
            >
              {navigation.map((item) => {
                const active = isActive(item.href);
                const label = navLabels[item.href] || item.label;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`group inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                      active
                        ? "font-semibold text-brand"
                        : "text-navy hover:text-brand"
                    }`}
                  >
                    {active && (
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                        aria-hidden="true"
                      />
                    )}

                    <span>{label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* ─── COMMENTED OUT: Language Selector ─────────────────────── */}
            {/* To re-enable, uncomment the Globe import, useLanguage, */}
            {/* isLangOpen state, langRef, and the language selector JSX below. */}
            {/*
            <div ref={langRef} className="relative">
              <button
                type="button"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-2 text-sm font-medium text-navy transition-colors hover:border-navy-soft hover:bg-gray-50"
                aria-expanded={isLangOpen}
                aria-haspopup="listbox"
                aria-label="Language selector"
              >
                <Globe className="h-4 w-4" aria-hidden="true" />
                <span className="hidden xl:inline">
                  {ACTIVE_LANGUAGES.find((l) => l.code === locale)?.nativeLabel || "English"}
                </span>
              </button>

              {isLangOpen && (
                <ul
                  role="listbox"
                  className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-line bg-white py-1 shadow-lg"
                >
                  {ACTIVE_LANGUAGES.map((lang) => (
                    <li key={lang.code} role="option" aria-selected={locale === lang.code}>
                      <button
                        type="button"
                        onClick={() => {
                          setLanguage(lang.code as ActiveLocale);
                          setIsLangOpen(false);
                        }}
                        className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                          locale === lang.code
                            ? "bg-brand/5 font-semibold text-brand"
                            : "text-navy hover:bg-gray-50"
                        }`}
                      >
                        <span>{lang.nativeLabel}</span>
                        {locale === lang.code && (
                          <span className="text-brand" aria-hidden="true">&#10003;</span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            */}

            <Link
              href="/ask-abe"
              className="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
            >
              Ask Abe
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-md p-2 text-navy lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close" : "Menu"}
          >
            {isMenuOpen ? (
              <X
                className="h-6 w-6"
                aria-hidden="true"
              />
            ) : (
              <Menu
                className="h-6 w-6"
                aria-hidden="true"
              />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <Container>
          <div
            id="mobile-menu"
            className="border-t border-line pb-6 pt-4 lg:hidden"
          >
            <nav
              className="flex flex-col gap-1"
              aria-label="Mobile"
            >
              {navigation.map((item) => {
                const active = isActive(item.href);
                const label = navLabels[item.href] || item.label;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? "bg-brand/5 font-semibold text-brand"
                        : "text-navy hover:bg-brand/5 hover:text-brand"
                    }`}
                  >
                    {active && (
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                        aria-hidden="true"
                      />
                    )}

                    <span>{label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* ─── COMMENTED OUT: Mobile Language Selector ─────────────── */}
            {/* To re-enable, uncomment the mobile language buttons below. */}
            {/*
            <div className="mt-4 flex flex-wrap gap-2">
              {ACTIVE_LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    setLanguage(lang.code as ActiveLocale);
                    closeMenu();
                  }}
                  className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                    locale === lang.code
                      ? "border-brand bg-brand/5 text-brand"
                      : "border-line text-navy hover:border-navy-soft"
                  }`}
                >
                  {lang.nativeLabel}
                </button>
              ))}
            </div>
            */}

            <Link
              href="/ask-abe"
              onClick={closeMenu}
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
            >
              Ask Abe
            </Link>
          </div>
        </Container>
      )}
    </header>
  );
}
