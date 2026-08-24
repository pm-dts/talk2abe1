import type { Metadata } from "next";
import Image from "next/image";
import {
  Building2,
  CircleDollarSign,
  Ellipsis,
  House,
  RefreshCw,
  UserRound,
} from "lucide-react";

import Container from "@/components/common/Container";
import LoanProgramNav from "@/components/loan-programs/LoanProgramNav";
import StartAbeConversationButton from "@/components/chat/StartAbeConversationButton";

export const metadata: Metadata = {
  title: "Ask Abe | Talk2Abe",
  description:
    "Talk it through with Abe. Get straight answers to your mortgage questions before you fill anything out.",
};

function AbeAvatar() {
  return (
    <Image
      src="/images/abe/abe-hakawati-new.png"
      alt="Abe — Talk2Abe's lending assistant"
      width={120}
      height={120}
      priority
      className="h-full w-full rounded-full object-cover bg-slate-100"
    />
  );
}

const helpOptions = [
  {
    label: "Buy a home",
    icon: House,
  },
  {
    label: "Refinance",
    icon: RefreshCw,
  },
  {
    label: "Access home equity",
    icon: CircleDollarSign,
  },
  {
    label: "Investment property",
    icon: Building2,
  },
  {
    label: "I'm self-employed",
    icon: UserRound,
  },
  {
    label: "Something else",
    icon: Ellipsis,
  },
];

export default function AskAbePage() {
  return (
    <div className="min-h-screen bg-cream">
      <LoanProgramNav className="bg-white" />

      <Container className="py-6 sm:py-10 lg:py-14">
        <section className="mx-auto w-full max-w-3xl">
          <div className="rounded-[28px] border border-slate-200/80 bg-surface px-5 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            {/* Ask Abe Badge */}
            <span className="inline-flex items-center gap-3 rounded-full bg-mint px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-brand-dark">
              <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true"/>
              Ask Abe
            </span>

            {/* Heading */}
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-navy lg:text-5xl">
              Tell me what you&apos;re trying to accomplish.
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-[17px] leading-[1.65] text-muted sm:text-[19px]">
              Answer a few simple questions and I&apos;ll help identify loan
              options that may fit.
            </p>

            {/* Abe Profile */}
            <div className="mt-10 flex items-center gap-4 sm:gap-5">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border border-white bg-slate-100 shadow-sm sm:h-24 sm:w-24">
                <AbeAvatar />
              </div>

              <div className="min-w-0">
                <h2 className="font-display text-3xl font-semibold text-navy">
                  Hi, I&apos;m Abe.
                </h2>

                <p className="mt-1 text-sm leading-6 text-muted sm:text-base">
                  Licensed mortgage professional
                  <span className="mx-2 text-brand">•</span>
                  NMLS #341393
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="my-9 h-px w-full bg-line" />

            {/* Help Options */}
            <div>
              <h2 className="font-display text-[26px] font-semibold text-navy sm:text-[32px]">
                What can I help you with?
              </h2>

              <div className="mt-6 grid grid-cols-2 gap-2 md:gap-4">
                {helpOptions.map(({ label, icon: Icon }) => (
                  <button key={label} type="button" className="group flex min-h-[76px] items-center gap-2 md:gap-4 rounded-2xl border border-slate-200 bg-white p-2 md:p-4 text-left transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/30">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mint text-brand transition-transform group-hover:scale-105">
                      <Icon
                        className="h-6 w-6"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </span>

                    <span className="text-[16px] font-medium text-navy sm:text-[17px]">
                      {label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-7 w-full">
              <StartAbeConversationButton />
            </div>

            {/* Trust Row */}
            <div
              className="
                mt-6
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-3
                gap-y-1
                text-center
                text-sm
                text-muted
                sm:text-base
              "
            >
              <span>About 90 seconds</span>

              <span
                className="h-1.5 w-1.5 rounded-full bg-brand"
                aria-hidden="true"
              />

              <span>No obligation</span>

              <span
                className="h-1.5 w-1.5 rounded-full bg-brand"
                aria-hidden="true"
              />

              <span>Private</span>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
