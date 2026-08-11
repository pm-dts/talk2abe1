import { Fragment } from "react";
import {
  BadgeCheck,
  ChevronRight,
  ClipboardCheck,
  House,
  UserRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Container from "@/components/common/Container";
import { aboutAbe } from "@/data/about-abe";
import type { HowItWorksIcon } from "@/types/about-abe";

const iconMap: Record<HowItWorksIcon, LucideIcon> = {
  ClipboardCheck,
  UserRound,
  BadgeCheck,
  House,
};

export default function HowItWorks() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <Container>
        {/* Section Header */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-brand sm:text-sm">
            {aboutAbe.howItWorks.eyebrow}
          </p>

          <h2 className="mx-auto mt-3 max-w-xl text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            {aboutAbe.howItWorks.title}
          </h2>
        </div>

        {/* Process Steps */}
        <ul className="mt-10 grid grid-cols-1 items-start gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-14 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:gap-x-3 lg:gap-y-0">
          {aboutAbe.howItWorks.steps.map((step, index) => {
            const Icon = iconMap[step.icon];

            return (
              <Fragment key={step.id}>
                {index > 0 && (
                  <li aria-hidden="true" className="hidden lg:block">
                    <div className="mt-16 flex items-center">
                      <span className="h-0 w-10 border-t-2 border-dotted border-slate-400" />
                      <ChevronRight
                        className="h-4 w-4 shrink-0 text-slate-400"
                        strokeWidth={2}
                      />
                    </div>
                  </li>
                )}

                <li className="flex flex-col items-center text-center">
                  <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
                    <Icon
                      className="h-12 w-12 text-brand sm:h-14 sm:w-14"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />

                    <span
                      className="absolute left-1 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white"
                      aria-hidden="true"
                    >
                      {step.step}
                    </span>
                  </div>

                  <h3 className="mt-6 min-h-[3.5rem] text-lg font-semibold text-navy sm:text-xl">
                    {step.title}
                  </h3>

                  <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-muted sm:text-base">
                    {step.description}
                  </p>
                </li>
              </Fragment>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
