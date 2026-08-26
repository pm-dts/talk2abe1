"use client";

// import { useTranslation } from "react-i18next";
import Container from "@/components/common/Container";
import CTA from "@/components/common/CTA";

export default function LetsTalkSection() {
  // const { t } = useTranslation();

  return (
    <section className="bg-white pb-14 sm:pb-16 lg:pb-20">
      <Container>
        <CTA
          title={"Ready to Get Started?"}
          description={"Whether you're buying your first home or refinancing, Abe is here to guide you every step of the way."}
          primaryAction={{
            href: "/ask-abe",
            label: "Ask Abe a Question",
          }}
          secondaryAction={{
            href: "/loan-programs",
            label: "Loan Programs",
          }}
        />
      </Container>
    </section>
  );
}
