"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Logo from "@/components/common/Logo";
import Container from "@/components/common/Container";
import SocialLinks from "@/components/sections/SocialLinks";
import { categories } from "@/data/categories";
import { siteConfig } from "@/data/site";

function FooterColumn({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h3 className="text-base font-semibold text-white">{heading}</h3>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-navy text-white">
      <Container>
        <div className="grid gap-12 pt-16 pb-6 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.25fr] lg:gap-8 xl:gap-12">
          {/* Brand */}
          <div className="space-y-3">
            <Logo size="lg" variant="light" />

            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              {t("footer.tagline")}
            </p>

            <SocialLinks />
            
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              {t("footer.watchVideos")}
            </p>
          </div>

          {/* Popular Categories */}
          <FooterColumn heading={t("footer.resources")}>
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/loan-programs/${category.slug}`}
                  className="text-sm font-medium text-slate-300 transition-colors hover:text-brand"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </FooterColumn>

          {/* Contact + MyLoanDesk */}
          <div>
            <h3 className="text-base font-semibold text-white">{t("footer.contactUs")}</h3>

            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="flex items-center gap-3 text-sm font-medium text-slate-300 transition-colors hover:text-brand"
                >
                  <Phone
                    className="h-4 w-4 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  {siteConfig.contact.phone}
                </a>
              </li>

              <li>
                <a
                  href={siteConfig.contact.emailHref}
                  className="flex items-center gap-3 text-sm font-medium text-slate-300 transition-colors hover:text-brand"
                >
                  <Mail
                    className="h-4 w-4 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  {siteConfig.contact.email}
                </a>
              </li>

              <li>
                <p className="flex items-center gap-3 text-sm font-medium text-slate-300">
                  <MapPin
                    className="h-4 w-4 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  {siteConfig.contact.serviceArea}
                </p>
              </li>
            </ul>

            {/* MyLoanDesk */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-base font-semibold text-white">
                {t("footer.mortgageServices")}
              </p>

              <a
                href="https://myloandesk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex transition-opacity hover:opacity-80"
                aria-label={t("footer.visitMyLoanDesk")}
              >
                <Image
                  src="/images/footer/myloandesk.png"
                  alt="MyLoanDesk"
                  width={180}
                  height={40}
                  className="h-auto w-36 object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Legal / Compliance Information */}
        <div className="border-t border-white/10 py-6">
          <div className="space-y-5 text-sm leading-relaxed text-slate-400">
            {/* DBA Information */}
            <p>
              <span className="font-medium text-slate-300">
                Talk2Abe.com
              </span>{" "}
              {t("footer.dba")}
            </p>

            {/* NMLS Information */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span>{t("footer.nmlsIndividual")}</span>

              <span className="hidden text-slate-600 sm:inline">|</span>

              <span>{t("footer.nmlsCompany")}</span>

              <span className="hidden text-slate-600 sm:inline">|</span>

              <Link
                href="https://www.nmlsconsumeraccess.org/"
                className="text-brand transition-colors hover:text-brand/80"
              >
                {t("footer.nmlsConsumerAccess")}
              </Link>

              <span className="hidden text-slate-600 sm:inline">|</span>

              <span className="text-slate-300">
                {t("footer.equalHousing")}
              </span>
            </div>

            {/* Disclaimer */}
            <p className="max-w-7xl">
              {t("footer.disclaimer")}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full border-t border-white/10 py-6 text-center">
          <p className="text-sm text-slate-400">
            {t("footer.copyright", { year: 2026 })}
          </p>
        </div>
      </Container>
    </footer>
  );
}