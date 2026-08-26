"use client";

import { useTranslation } from "react-i18next";

import Container from "@/components/common/Container";
import CTA from "@/components/common/CTA";
import LoanProgramGrid from "@/components/loan-programs/LoanProgramGrid";

export default function LoanProgramsPageContent() {
  const { t } = useTranslation();

  return (
    <Container className="py-8 sm:py-10 lg:py-12">
      <section className="mt-7 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          {t("loanPrograms.listing.title")}
        </h1>

        <p className="mt-2 max-w-xl text-sm leading-6 text-muted sm:text-base">
          {t("loanPrograms.listing.description")}
        </p>
      </section>

      <section className="mt-7 sm:mt-8">
        <LoanProgramGrid />
      </section>

      <section className="mt-6 sm:mt-8">
        <CTA
          title={t("loanPrograms.listing.readyNextStep")}
          description={t("loanPrograms.listing.findRightProgram")}
          primaryAction={{
            href: "/ask-abe",
            label: t("common.askAbeQuestion"),
          }}
          secondaryAction={{
            href: "/contact",
            label: t("common.scheduleACall"),
            booking: true,
          }}
        />
      </section>
    </Container>
  );
}
