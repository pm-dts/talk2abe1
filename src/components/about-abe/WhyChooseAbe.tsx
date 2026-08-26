"use client";

import {
  BadgeCheck,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

import Container from "@/components/common/Container";

const iconMap: Record<string, LucideIcon> = {
  BadgeCheck,
  MessageCircle,
  ShieldCheck,
};

const benefitKeys = ["licensedExpert", "aiPowered", "trustedSource"];
const benefitIcons = ["BadgeCheck", "MessageCircle", "ShieldCheck"];

export default function WhyChooseAbe() {
  const { t } = useTranslation();

  return (
    <section className="bg-surface py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="text-center">
          <h2 className="mx-auto max-w-xl text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            {t("about.whyAbe.title")}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {benefitKeys.map((key, index) => {
            const Icon = iconMap[benefitIcons[index]];

            return (
              <article
                key={key}
                className="flex flex-col items-start gap-4 rounded-lg border border-slate-200 bg-white p-6 transition-colors hover:border-brand/30 sm:p-8"
              >
                <div className="flex shrink-0">
                  <Icon
                    className="h-10 w-10 text-brand sm:h-12 sm:w-12"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h3 className="text-base font-semibold leading-6 text-navy sm:text-lg">
                    {t(`about.whyAbe.items.${key}.title`)}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted sm:text-[15px]">
                    {t(`about.whyAbe.items.${key}.description`)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
