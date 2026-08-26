"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

import { navigation } from "@/data/navigation";
import Logo from "@/components/common/Logo";
import Container from "@/components/common/Container";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const closeMenu = () => setIsMenuOpen(false);

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
          <div className="hidden items-center gap-8 lg:flex">
            <nav
              className="flex items-center gap-7"
              aria-label="Primary"
            >
              {navigation.map((item) => {
                const active = isActive(item.href);

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

                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/ask-abe"
              className="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
            >
              Ask Abe a Question
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-md p-2 text-navy lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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

                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/ask-abe"
              onClick={closeMenu}
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
            >
              Ask Abe a Question
            </Link>
          </div>
        </Container>
      )}
    </header>
  );
}