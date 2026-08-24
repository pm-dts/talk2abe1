"use client";

import { useState } from "react";
import Image from "next/image";
import {
  House,
  RefreshCw,
  BadgeDollarSign,
  Building2,
  UserRound,
  Ellipsis,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Container from "@/components/common/Container";
import StartAbeConversationButton from "@/components/chat/StartAbeConversationButton";

type HelpOption = {
  label: string;
  icon: LucideIcon;
};

const helpOptions: HelpOption[] = [
  { label: "Buy a home", icon: House },
  { label: "Refinance", icon: RefreshCw },
  { label: "Access home equity", icon: BadgeDollarSign },
  { label: "Investment property", icon: Building2 },
  { label: "I'm self-employed", icon: UserRound },
  { label: "Something else", icon: Ellipsis },
];

const trustPoints = ["About 90 seconds", "No obligation", "Private"];

export default function HeroSection() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <section className="w-full min-w-0 overflow-hidden bg-cream py-8 sm:py-12 lg:py-16">
      <Container>
        <div
          className="
            mx-auto
            w-full
            max-w-[42rem]
            rounded-[1.75rem]
            border
            border-line
            bg-white
            px-5
            py-8
            shadow-[0_24px_60px_-36px_rgba(19,34,66,0.28)]
            sm:rounded-[2rem]
            sm:px-9
            sm:py-10
            lg:px-12
            lg:py-12
          "
        >
          {/* Pill Label */}
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-mint
              px-3
              py-1.5
              font-mono
              text-xs
              font-semibold
              uppercase
              tracking-[0.06em]
              text-brand-dark
            "
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-brand"
              aria-hidden="true"
            />
            Ask Abe
          </span>

          {/* Heading */}
          <h1
            className="
              mt-5
              font-display
              text-[30px]
              font-semibold
              leading-[1.1]
              tracking-[-0.02em]
              text-navy
              sm:text-[38px]
              lg:text-[42px]
            "
          >
            Tell me what you&apos;re trying to accomplish.
          </h1>

          <p
            className="
              mt-4
              max-w-[520px]
              text-[15px]
              leading-[1.6]
              text-muted
              sm:text-[17px]
            "
          >
            Answer a few simple questions and I&apos;ll help identify loan
            options that may fit.
          </p>

          {/* Abe Introduction */}
          <div className="mt-8 flex items-center gap-3.5">
            <span
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-full
                bg-slate-100
                sm:h-16
                sm:w-16
              "
            >
              <Image
                src="/images/abe/abe-hakawati-new.png"
                alt="Abe, Talk2Abe mortgage professional"
                width={96}
                height={96}
                className="h-full w-full object-cover"
              />
            </span>

            <div>
              <p className="font-display text-lg font-semibold text-navy">
                Hi, I&apos;m Abe.
              </p>
              <p className="text-[12.5px] text-muted">
                Licensed mortgage professional &bull; NMLS #341393
              </p>
            </div>
          </div>

          {/* Help Options */}
          <div className="mt-7 border-t border-line pt-7">
            <h2 className="font-display text-[22px] font-semibold text-navy sm:text-[25px]">
              What can I help you with?
            </h2>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {helpOptions.map(({ label, icon: Icon }) => {
                const isSelected = selectedOption === label;

                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() =>
                      setSelectedOption((current) =>
                        current === label ? null : label,
                      )
                    }
                    aria-pressed={isSelected}
                    className={`
                      flex
                      min-h-[116px]
                      flex-col
                      items-start
                      justify-between
                      gap-3
                      rounded-2xl
                      border
                      p-4
                      text-left
                      transition
                      duration-150
                      hover:border-brand/40
                      hover:bg-mint/20
                      active:scale-[0.98]
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-brand
                      focus-visible:ring-offset-2
                      ${
                        isSelected
                          ? "border-brand/60 bg-mint/50"
                          : "border-line bg-white"
                      }
                    `}
                  >
                    <span
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-mint
                        text-brand
                      "
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>

                    <span className="text-[13.5px] font-semibold leading-snug text-navy">
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main CTA */}
          <div className="mt-8">
            <StartAbeConversationButton className="w-full!" />
          </div>

          {/* Trust Row */}
          <div
            className="
              mt-5
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-2.5
              gap-y-1
              text-center
              text-[12px]
              text-muted
              sm:text-[13px]
            "
          >
            <span>{trustPoints[0]}</span>
            <span
              className="h-1 w-1 rounded-full bg-brand"
              aria-hidden="true"
            />
            <span>{trustPoints[1]}</span>
            <span
              className="h-1 w-1 rounded-full bg-brand"
              aria-hidden="true"
            />
            <span>{trustPoints[2]}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
