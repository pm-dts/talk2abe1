import type { Metadata } from "next";

import Container from "@/components/common/Container";
import CTA from "@/components/common/CTA";
import LoanProgramGrid from "@/components/loan-programs/LoanProgramGrid";
import BreadcrumbSchema, {
  buildBreadcrumbs,
} from "@/components/seo/BreadcrumbSchema";
import { getCanonicalUrl } from "@/lib/urls";
import { seoImages } from "@/config/seo";

export const metadata: Metadata = {
  title: "Mortgage Loan Programs",
  description:
    "Explore mortgage loan programs including purchase, refinance, self-employed, DSCR, FHA, VA, reverse mortgage, and home equity options.",
  openGraph: {
    title: "Mortgage Loan Programs | Talk2Abe",
    description:
      "Explore mortgage loan programs including purchase, refinance, self-employed, DSCR, FHA, VA, reverse mortgage, and home equity options.",
    url: getCanonicalUrl("/loan-programs"),
    images: [
      {
        url: seoImages.loanProgram,
        width: 1200,
        height: 630,
        alt: "Mortgage Loan Programs — Talk2Abe",
      },
    ],
  },
  alternates: {
    canonical: getCanonicalUrl("/loan-programs"),
  },
};

const breadcrumbs = buildBreadcrumbs([
  { name: "Home", path: "/" },
  { name: "Loan Programs", path: "/loan-programs" },
]);

export default function LoanProgramsPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema items={breadcrumbs} />
      <Container className="py-8 sm:py-10 lg:py-12">
        {/* Page Introduction */}
        <section className="mt-7 max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Loan Programs
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-muted sm:text-base">
            We offer a wide range of mortgage solutions for
            homeowners, homebuyers, and real estate investors.
          </p>
        </section>

        {/* Loan Programs */}
        <section className="mt-7 sm:mt-8">
          <LoanProgramGrid />
        </section>

        {/* CTA */}
        <section className="mt-6 sm:mt-8">
          <CTA
            title="Ready to take the next step?"
            description="Let&apos;s find the right loan program for your solution."
            primaryAction={{
              href: "/ask-abe",
              label: "Ask Abe a Question",
            }}
            secondaryAction={{
              href: "/contact",
              label: "Schedule a Call",
              booking: true,
            }}
          />
        </section>
      </Container>
    </div>
  );
}