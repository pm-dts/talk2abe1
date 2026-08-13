"use client";

import { Check } from "lucide-react";

import Button from "@/components/common/Button";
import ScheduleCallButton from "@/components/common/ScheduleCallButton";

export default function ThankYou() {
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
        Thanks — I&apos;ve Got It.
      </h2>

      <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted sm:text-base">
        Your information has been received. We&apos;ll review what you&apos;re
        looking for and help determine the next step.
      </p>

      <div className="mt-8 grid w-full gap-3">
        <ScheduleCallButton
          size="lg"
          className="w-full"
        >
          Schedule a Call
        </ScheduleCallButton>

        <Button
          href="/"
          variant="outline"
          size="lg"
          className="w-full"
        >
          Explore Talk2Abe
        </Button>

        <Button
          href="/questions"
          variant="outline"
          size="lg"
          className="w-full"
        >
          Ask another question
        </Button>
      </div>
    </div>
  );
}
