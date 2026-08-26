"use client";

import { useTranslation } from "react-i18next";

import Container from "@/components/common/Container";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactPageContent() {
  const { t } = useTranslation();

  return (
    <Container className="py-8 sm:py-10 lg:py-12">
      <section className="mt-7 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          {t("contact.heading")}
        </h1>

        <p className="mt-3 max-w-xl text-base leading-7 text-muted sm:text-lg">
          {t("contact.description")}
        </p>
      </section>

      <section className="mt-7 sm:mt-8">
        <ContactForm />
      </section>
    </Container>
  );
}
