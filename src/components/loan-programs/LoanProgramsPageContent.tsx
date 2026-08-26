"use client";

// import { useTranslation } from "react-i18next";

import Container from "@/components/common/Container";
import CTA from "@/components/common/CTA";
import LoanProgramGrid from "@/components/loan-programs/LoanProgramGrid";

export default function LoanProgramsPageContent() {
  // const { t } = useTranslation();

  return (
    <Container className="py-8 sm:py-10 lg:py-12">
      <section className="mt-7 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          {"Mortgage Loan Programs"}
        </h1>

        <p className="mt-2 max-w-xl text-sm leading-6 text-muted sm:text-base">
          {"We offer a wide range of mortgage solutions for homeowners, homebuyers, and real estate investors."}
        </p>
      </section>

      <section className="mt-7 sm:mt-8">
        <LoanProgramGrid />
      </section>

      <section className="mt-6 sm:mt-8">
        <CTA
          title={"Ready to take the next step?"}
          description={"Let's find the right loan program for your solution."}
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
  );
}
