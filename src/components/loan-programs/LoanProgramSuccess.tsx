"use client";

// import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";

import Button from "@/components/common/Button";
import ScheduleCallButton from "@/components/common/ScheduleCallButton";

import type { LoanProgramContact, LoanProgram } from "@/types/loan-program";

type LoanProgramSuccessProps = {
  program: LoanProgram;
  choiceValue: string;
  fieldValues: Record<string, string>;
  contact: LoanProgramContact;
};

export default function LoanProgramSuccess({
  program,
  choiceValue,
  fieldValues,
  contact,
}: LoanProgramSuccessProps) {
  // const { t } = useTranslation();
  const lookup: Record<string, string> = {
    ...fieldValues,
    choice: choiceValue,
  };

  return (
    <div className="flex flex-col items-center py-5 text-center">
      <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-mint">
        <Check
          className="h-[26px] w-[26px] text-brand-dark"
          strokeWidth={2.5}
          aria-hidden="true"
        />
      </span>

      <h2 className="mt-5 font-display text-[28px] font-semibold text-navy">
        {program.form.success.title}
      </h2>

      <p className="mt-2.5 max-w-[400px] text-[15px] leading-[1.6] text-muted">
        {program.form.success.message}
      </p>

      <div className="mt-5 w-full rounded-xl bg-mint p-5 text-left font-mono text-[13.5px] leading-relaxed text-navy">
        {program.form.summary.map((item) => (
          <div key={item.key} className="py-1">
            <strong className="text-navy">{item.label}:</strong>{" "}
            <span className="text-muted">
              {lookup[item.key] || "—"}
            </span>
          </div>
        ))}
        <div className="py-1">
          <strong className="text-navy">{"Contact"}:</strong>{" "}
          <span className="text-muted">
            {contact.firstName} {contact.lastName} · {contact.phone}
          </span>
        </div>
      </div>

      <div className="mt-8 grid w-full gap-3">
        <ScheduleCallButton size="lg" className="w-full">
          {program.form.success.buttons.primary}
        </ScheduleCallButton>

        <Button
          href="/loan-programs/"
          variant="outline"
          size="lg"
          className="w-full"
        >
          {program.form.success.buttons.secondary}
        </Button>
      </div>
    </div>
  );
}
