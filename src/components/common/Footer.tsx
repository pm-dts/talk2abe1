import Link from "next/link";
import type { ReactNode } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/common/Logo";
import Container from "@/components/common/Container";
import NewsletterForm from "@/components/forms/NewsletterForm";
import SocialLinks from "@/components/sections/SocialLinks";
import { navigation } from "@/data/navigation";
import { categories } from "@/data/categories";
import { siteConfig } from "@/data/site";

function FooterColumn({ heading, children }: { heading: string; children: ReactNode }) {
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
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.25fr_1.25fr] lg:gap-8 xl:gap-12">
          <div className="space-y-6">
            <Logo size="lg" variant="light" />
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              {siteConfig.tagline.join(" ")}
            </p>
            <SocialLinks />
          </div>

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

          <div>
            <h3 className="text-base font-semibold text-white">Contact</h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="flex items-center gap-3 text-sm font-medium text-slate-300 transition-colors hover:text-brand"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.emailHref}
                  className="flex items-center gap-3 text-sm font-medium text-slate-300 transition-colors hover:text-brand"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <p className="flex items-center gap-3 text-sm font-medium text-slate-300">
                  <MapPin className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {siteConfig.contact.serviceArea}
                </p>
              </li>
            </ul>
          </div>

          <section aria-labelledby="newsletter-heading">
            <h3
              id="newsletter-heading"
              className="text-base font-semibold text-white"
            >
              Subscribe for Tips
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Get mortgage tips and updates directly from Abe.
            </p>
            <NewsletterForm className="mt-5" stacked />
          </section>
        </div>

        <div className="border-t border-white/10 py-6 text-center w-full">
          <p className="text-sm text-slate-400">
            &copy; 2026 Talk2Abe.com. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
