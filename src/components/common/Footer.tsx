import Link from "next/link";
import type { ReactNode } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/common/Logo";
import Container from "@/components/common/Container";
import SocialLinks from "@/components/sections/SocialLinks";
import { navigation } from "@/data/navigation";
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
  return (
    <footer className="bg-navy text-white">
      <Container>
        <div
          className="
            grid
            gap-12
            py-16
            sm:grid-cols-2
            lg:grid-cols-[1.5fr_1fr_1fr_1.25fr]
            lg:gap-8
            xl:gap-12
          "
        >
          {/* Brand */}
          <div className="space-y-6">
            <Logo size="lg" variant="light" />

            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              {siteConfig.tagline.join(" ")}
            </p>

            <SocialLinks />
          </div>

          {/* Quick Links */}
          <FooterColumn heading="Quick Links">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-slate-300 transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          {/* Popular Categories */}
          <FooterColumn heading="Popular Categories">
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

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold text-white">Contact</h3>

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
          </div>
        </div>

        {/* Legal / Compliance Information */}
        <div className="border-t border-white/10 py-6">
          <div className="space-y-5 text-sm leading-relaxed text-slate-400">
            {/* DBA Information */}
            <p>
              <span className="font-medium text-slate-300">Talk2Abe.com</span>{" "}
              is a DBA of Secured Horizon Financial Group, Inc. / Secured
              Horizon Mortgage Group, Inc.
            </p>

            {/* NMLS Information */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span>NMLS #341393 (Individual)</span>

              <span className="hidden text-slate-600 sm:inline">|</span>

              <span>NMLS #314226, #1444825 (Company)</span>

              <span className="hidden text-slate-600 sm:inline">|</span>

              <Link
                href="#"
                className="text-brand transition-colors hover:text-brand/80"
              >
                NMLS Consumer Access
              </Link>

              <span className="hidden text-slate-600 sm:inline">|</span>

              <span className="text-slate-300">Equal Housing Opportunity</span>
            </div>

            {/* Disclaimer */}
            <p className="max-w-7xl">
              Interest Rates, APRs, and loan programs are illustrations subject
              to change at any time without notice. These do not constitute a
              Loan Estimate or Good Faith Estimate for payments and closing
              costs. Not all applicants will qualify. APR may vary by product
              type. Consumers are not obligated to use any party mentioned.
              Talk2Abe.com is not affiliated with FHA, VA, USDA, or the Federal
              Government. 1801 NE 123rd St, Suite 314, North Miami, FL 33181 |
              (305) 891-6500. Regulated by the FL Division of Real Estate.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full border-t border-white/10 py-6 text-center">
          <p className="text-sm text-slate-400">
            &copy; 2026 Talk2Abe.com. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
