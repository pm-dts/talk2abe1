"use client";

import AnswerOption from "@/components/get-started/AnswerOption";
import CurrencyInput from "@/components/get-started/CurrencyInput";
import { getOptionIcon } from "@/components/get-started/optionIcons";

import { cn } from "@/lib/utils";

import type { GetStartedOption, GetStartedStep } from "@/types/get-started";

type QuestionStepProps = {
  step: GetStartedStep;
  value: string;
  onChange: (value: string) => void;
  onAdvance?: () => void;
  validationError?: string;
  className?: string;
};

export default function QuestionStep({
  step,
  value,
  onChange,
  onAdvance,
  validationError,
  className,
}: QuestionStepProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {/* Question heading */}
      <div className="text-center">
        <h2 className="text-[22px] font-bold leading-snug tracking-tight text-navy sm:text-[26px]">
          {step.title}
          <span className="ml-1 text-brand" aria-hidden="true">
            *
          </span>
        </h2>

        <p className="mt-2 text-sm text-muted sm:text-base">
          {step.description}
        </p>
      </div>

      {/* Options */}
      {step.type === "options" && step.options && (
        <OptionList
          options={step.options}
          value={value}
          onChange={onChange}
          onAdvance={onAdvance}
          grid={step.layout === "grid"}
        />
      )}

      {/* Currency */}
      {step.type === "currency" && (
        <CurrencyInput
          id={step.id}
          label={step.title}
          value={value}
          onChange={onChange}
          onAdvance={onAdvance}
          placeholder={step.placeholder}
        />
      )}

      {/* Validation */}
      {validationError && (
        <p
          role="alert"
          className="text-center text-sm font-medium text-red-500"
        >
          {validationError}
        </p>
      )}
    </div>
  );
}

type OptionListProps = {
  options: GetStartedOption[];
  value: string;
  onChange: (value: string) => void;
  onAdvance?: () => void;
  grid?: boolean;
};

function OptionList({
  options,
  value,
  onChange,
  onAdvance,
  grid = false,
}: OptionListProps) {
  const buttons = options.map((option) => (
    <AnswerOption
      key={option.id}
      icon={getOptionIcon(option.icon)}
      label={option.label}
      selected={value === option.label}
      onSelect={() => {
        onChange(option.label);
        onAdvance?.();
      }}
    />
  ));

  if (grid) {
    return <div className="grid gap-3 sm:grid-cols-2">{buttons}</div>;
  }

  return <div className="space-y-3">{buttons}</div>;
}
