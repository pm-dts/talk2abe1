"use client";

import {
  BadgeCheck,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
// import { useTranslation } from "react-i18next";

import Container from "@/components/common/Container";

const iconMap: Record<string, LucideIcon> = {
  BadgeCheck,
  MessageCircle,
  ShieldCheck,
};

const benefitKeys = ["licensedExpert", "aiPowered", "trustedSource"];
const benefitIcons = ["BadgeCheck", "MessageCircle", "ShieldCheck"];
const benefitTexts: Record<string, { title: string; description: string }> = {
  licensedExpert: { title: "Licensed Expert", description: "Abe is a licensed loan officer with NMLS credentials, bringing professional mortgage expertise to every conversation." },
  aiPowered: { title: "AI-Powered Guidance", description: "Leveraging advanced AI technology, Abe provides instant, accurate responses to your mortgage questions 24/7." },
  trustedSource: { title: "Trusted Source", description: "All information is sourced from verified mortgage industry data and Abe's personal professional experience." },
};

export default function WhyChooseAbe() {
  // const { t } = useTranslation();

  return (
    <section className="bg-surface py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="text-center">
          <h2 className="mx-auto max-w-xl text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Why Choose Abe
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
                    {benefitTexts[key].title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted sm:text-[15px]">
                    {benefitTexts[key].description}
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
