import type { Metadata } from "next";
import { Clock } from "lucide-react";

import Container from "@/components/common/Container";
import AbeChatEmbed from "@/components/chat/AbeChatEmbed";
import LoanProgramNav from "@/components/loan-programs/LoanProgramNav";

export const metadata: Metadata = {
  title: "Ask Abe | Talk2Abe",
  description:
    "Talk it through with Abe. Get straight answers to your mortgage questions before you fill anything out.",
};

function AbeAvatar() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2a5 5 0 015 5v2a5 5 0 01-10 0V7a5 5 0 015-5z"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M4 21c0-4 3.5-6.5 8-6.5S20 17 20 21"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const features = [
  "Takes about 90 seconds",
  "Matches you to the right loan program automatically",
  "Hands off to a licensed loan officer, not a bot forever",
];

export default function AskAbePage() {
  return (
    <div className="bg-white">
      <LoanProgramNav className="bg-white" />

      <Container className="py-10 sm:py-12 lg:py-16">
        <section
          className="
            grid
            grid-cols-1
            items-start
            gap-12
            lg:grid-cols-[minmax(0,1fr)_440px]
            lg:gap-16
            xl:grid-cols-[minmax(0,1fr)_460px]
            xl:gap-20
          "
        >
          {/* =========================================================
              LEFT SIDE
          ========================================================= */}
          <div className="min-w-0 lg:pt-8">
            {/* Badge */}
            <span
              className="
                mb-5
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
                max-w-[720px]
                font-display
                text-[36px]
                font-semibold
                leading-[1.08]
                tracking-[-0.02em]
                text-navy
                sm:text-[44px]
                lg:text-[48px]
                xl:text-[52px]
              "
            >
              Talk it through
              <br />
              before you fill anything out.
            </h1>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-[600px]
                text-[16px]
                leading-[1.6]
                text-muted
                sm:text-[17px]
              "
            >
              Abe asks a few quick questions conversationally, then hands you
              straight to a loan officer — no forms, no jargon.
            </p>

            {/* Abe profile */}
            <div className="mt-9 flex items-center gap-3">
              <span
                className="
                  flex
                  h-[56px]
                  w-[56px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-navy
                  text-white
                "
              >
                <AbeAvatar />
              </span>

              <div>
                <p className="font-display text-lg font-semibold text-navy">
                  Abe
                </p>

                <p className="text-[12.5px] text-muted">
                  Talk2Abe&apos;s lending assistant
                </p>
              </div>
            </div>

            {/* Features */}
            <ul className="mt-7 space-y-4">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="
                    flex
                    items-center
                    gap-3
                    text-sm
                    leading-6
                    text-muted
                    sm:text-[15px]
                  "
                >
                  <Clock
                    className="
                      h-[17px]
                      w-[17px]
                      shrink-0
                      text-brand
                    "
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================================================
              RIGHT SIDE — GHL CHAT
          ========================================================= */}
          <div
            className="
              flex
              w-full
              justify-center
              lg:justify-end
            "
          >
            <div
              className="
                relative
                h-[650px]
                min-h-[650px]
                w-full
                max-w-[460px]
                rounded-[20px]
                bg-white
              "
            >
              <AbeChatEmbed className="h-full w-full" />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
