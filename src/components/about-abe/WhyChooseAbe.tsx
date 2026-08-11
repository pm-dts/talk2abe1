import {
  BadgeCheck,
  Handshake,
  Layers,
  Percent,
  UserRoundCheck,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Container from "@/components/common/Container";
import { aboutAbe } from "@/data/about-abe";
import type { AboutBenefitIcon } from "@/types/about-abe";

const iconMap: Record<AboutBenefitIcon, LucideIcon> = {
  BadgeCheck,
  Handshake,
  Layers,
  Percent,
  UserRoundCheck,
  Zap,
};

export default function WhyChooseAbe() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {aboutAbe.benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon];

            return (
              <article
                key={benefit.id}
                className="flex min-h-[120px] items-start gap-5 rounded-lg border border-slate-200 bg-white p-6 transition-colors hover:border-brand/30 sm:p-8"
              >
                <div className="flex shrink-0 pt-0.5">
                  <Icon
                    className="h-10 w-10 text-navy sm:h-12 sm:w-12"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="text-base font-semibold leading-6 text-navy sm:text-lg">
                    {benefit.title}
                  </h2>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
