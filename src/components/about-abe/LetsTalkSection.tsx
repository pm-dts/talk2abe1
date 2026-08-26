"use client";

import { useTranslation } from "react-i18next";
import Container from "@/components/common/Container";
import CTA from "@/components/common/CTA";

export default function LetsTalkSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-white pb-14 sm:pb-16 lg:pb-20">
      <Container>
        <CTA
          title={t("about.cta.title")}
          description={t("about.cta.description")}
          primaryAction={{
            href: "/ask-abe",
            label: t("about.cta.button"),
          }}
          secondaryAction={{
            href: "/loan-programs",
            label: t("loanPrograms.listing.explorePrograms"),
          }}
        />
      </Container>
    </section>
  );
}
