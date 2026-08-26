"use client";

import Image from "next/image";
import Link from "next/link";
// import { useTranslation } from "react-i18next";
import {
  BadgeDollarSign,
  Building2,
  HandCoins,
  House,
  Landmark,
  RefreshCw,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import StartAbeConversationButton from "@/components/chat/StartAbeConversationButton";

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

const helpOptionKeys = [
  { key: "buyAHome", icon: House, url: "/loan-programs/purchase-loans" },
  { key: "refinance", icon: RefreshCw, url: "/loan-programs/refinance-loans" },
  { key: "selfEmployed", icon: UserRound, url: "/loan-programs/self-employed-loans" },
  { key: "dscr", icon: Building2, url: "/loan-programs/dscr-loans" },
  { key: "fha", icon: Landmark, url: "/loan-programs/fha-loans" },
  { key: "va", icon: ShieldCheck, url: "/loan-programs/va-loans" },
  { key: "reverseMortgage", icon: HandCoins, url: "/loan-programs/reverse-mortgages" },
  { key: "homeEquity", icon: BadgeDollarSign, url: "/loan-programs/home-equity-heloc" },
] as const;

const helpOptionLabels: Record<string, string> = {
  buyAHome: "Buy a home",
  refinance: "Refinance",
  selfEmployed: "Self-Employed",
  dscr: "DSCR",
  fha: "FHA",
  va: "VA",
  reverseMortgage: "Reverse Mortgage",
  homeEquity: "Home Equity",
};

export default function AskAbeContent() {
  // const { t } = useTranslation();

  return (
    <section className="mx-auto w-full max-w-3xl">
      <div className="rounded-[28px] border border-slate-200/80 bg-surface px-5 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        {/* Ask Abe Badge */}
        <span className="inline-flex items-center gap-3 rounded-full bg-mint px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-brand-dark">
          <span
            className="h-2 w-2 rounded-full bg-brand"
            aria-hidden="true"
          />
          Ask Abe
        </span>

        {/* Heading */}
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-navy lg:text-5xl">
          Tell me what you're trying to accomplish.
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-2xl text-[17px] leading-[1.65] text-muted sm:text-[19px]">
          Answer a few simple questions and I'll help identify loan options that may fit.
        </p>

        {/* Abe Profile */}
        <div className="mt-10 flex items-center gap-4 sm:gap-5">
          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border border-white bg-slate-100 shadow-sm sm:h-24 sm:w-24">
            <AbeAvatar />
          </div>

          <div className="min-w-0">
            <h2 className="font-display text-3xl font-semibold text-navy">
              Hi, I'm Abe.
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
            {helpOptionKeys.map(({ key, icon: Icon, url }) => (
              <Link
                key={key}
                href={url}
                className="group flex min-h-[76px] items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 text-left transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/30 md:gap-4 md:p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mint text-brand transition-transform group-hover:scale-105">
                  <Icon
                    className="h-6 w-6"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </span>

                <span className="text-[16px] font-medium text-navy sm:text-[17px]">
                  {helpOptionLabels[key as keyof typeof helpOptionLabels]}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-7 w-full">
          <StartAbeConversationButton />
        </div>

        {/* Trust Row */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-sm text-muted sm:text-base">
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
  );
}
