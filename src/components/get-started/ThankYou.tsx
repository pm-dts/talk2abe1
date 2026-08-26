"use client";

import { Check } from "lucide-react";

import Button from "@/components/common/Button";
import ScheduleCallButton from "@/components/common/ScheduleCallButton";

type ThankYouProps = {
  senderName: string;
};

export default function ThankYou({ senderName }: ThankYouProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand/10">
        <Check
          className="h-10 w-10 text-brand"
          strokeWidth={2.5}
          aria-hidden="true"
        />
      </span>

      <h2 className="mt-6 text-[26px] font-bold leading-snug tracking-tight text-navy">
        Thanks {senderName}
        <br />
        I&apos;ve Got It.
      </h2>

      <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted sm:text-base">
        Your information has been received. I&apos;ll review what you&apos;re
        looking for and reach out as soon as possible. Or you may choose from
        the below options.
      </p>

      <div className="mt-8 grid w-full gap-3">
        {/* Primary CTA */}
        <Button
          href="tel:+13058916500"
          variant="outline"
          size="lg"
          className="
            w-full
            !border-brand
            !bg-brand
            !text-white
            hover:!border-brand
            hover:!bg-brand/90
            hover:!text-white
          "
        >
          Call me or text now
        </Button>

        <ScheduleCallButton size="lg" className="w-full">
          Schedule a call
        </ScheduleCallButton>

        <Button href="/get-started" variant="outline" size="lg" className="w-full">
          Ask another question
        </Button>

        <Button href="/" variant="outline" size="lg" className="w-full">
          Explore Talk2Abe
        </Button>

        {/* <Button
          href="/questions"
          variant="outline"
          size="lg"
          className="w-full"
        >
          Ask another question
        </Button> */}
      </div>
    </div>
  );
}
