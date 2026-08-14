"use client";

import { cn } from "@/lib/utils";
import type {
  LoanProgramFormChoice,
  LoanProgramFormStep,
} from "@/types/loan-program";

type ChoiceFieldProps = {
  step: Extract<LoanProgramFormStep, { type: "choice" }>;
  value: string;
  onChange: (value: string) => void;
  onSelect?: () => void;
  error?: string;
};

export default function ChoiceField({
  step,
  value,
  onChange,
  onSelect,
  error,
}: ChoiceFieldProps) {
  const isSelected = (choice: LoanProgramFormChoice) =>
    choice.value === value;

  return (
    <div>
      <div className="text-center">
        <h2 className="font-display text-[24px] font-semibold leading-snug text-navy sm:text-[26px]">
          {step.title}
        </h2>

        <p className="mt-1.5 text-[14.5px] text-muted">
          {step.description}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {step.choices.map((choice) => (
          <button
            key={choice.value}
            type="button"
            onClick={() => {
              onChange(choice.value);
              onSelect?.();
            }}
            aria-pressed={isSelected(choice)}
            className={cn(
              "flex flex-col gap-0.5 rounded-xl border-[1.5px] p-4 text-left transition-colors",
              isSelected(choice)
                ? "border-brand bg-mint"
                : "border-line bg-white hover:border-navy-soft",
            )}
          >
            <strong className="text-[14.5px] font-bold text-navy">
              {choice.label}
            </strong>
            <span className="text-[12.5px] leading-5 text-muted">
              {choice.description}
            </span>
          </button>
        ))}
      </div>

      {error && (
        <p role="alert" className="mt-3 text-sm font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
