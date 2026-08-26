"use client";

import { Target, FileText, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

import Container from "@/components/common/Container";
import { valueProps } from "@/data/value-props";
import type { ValuePropIcon } from "@/types/value-prop";

const iconMap: Record<ValuePropIcon, LucideIcon> = {
  Target,
  FileText,
  ShieldCheck,
};

const translationKeys: Record<string, { title: string; description: string }> = {
  "ai-powered": { title: "home.valueProps.items.aiPowered.title", description: "home.valueProps.items.aiPowered.description" },
  "trusted-data": { title: "home.valueProps.items.trustedData.title", description: "home.valueProps.items.trustedData.description" },
  "fast-responses": { title: "home.valueProps.items.fastResponses.title", description: "home.valueProps.items.fastResponses.description" },
  "always-available": { title: "home.valueProps.items.alwaysAvailable.title", description: "home.valueProps.items.alwaysAvailable.description" },
};

export default function ValueProps() {
  const { t } = useTranslation();

  if (valueProps.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-14 sm:py-16">
      <Container>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0">
          {valueProps.map((prop, index) => {
            const Icon = iconMap[prop.icon];
            const keys = translationKeys[prop.id];

            return (
              <div
                key={prop.id}
                className={`
                  flex
                  flex-col
                  items-center
                  px-2
                  text-center
                  ${index !== 0 ? "sm:border-l sm:border-line" : ""}
                `}
              >
                <span
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-mint
                    text-brand
                  "
                >
                  <Icon className="h-7 w-7" strokeWidth={1.8} aria-hidden="true" />
                </span>

                <h3 className="mt-4 text-[15px] font-semibold leading-snug text-navy sm:text-base">
                  {keys ? t(keys.title) : prop.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {keys ? t(keys.description) : prop.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
