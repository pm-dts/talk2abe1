"use client";

import { useTranslation } from "react-i18next";
import Container from "@/components/common/Container";

export default function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            {t("about.experience.title")}
          </h2>
        </div>
      </Container>
    </section>
  );
}
