"use client";

import AnswerOption from "@/components/get-started/AnswerOption";
import CurrencyInput from "@/components/get-started/CurrencyInput";
import { getOptionIcon } from "@/components/get-started/optionIcons";
import { cn } from "@/lib/utils";
import type {
  GetStartedOption,
  GetStartedStep,
} from "@/types/get-started";

type QuestionStepProps = {
  step: GetStartedStep;
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

export default function QuestionStep({
  step,
  value,
  onChange,
  className,
}: QuestionStepProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="text-center">
        <h2 className="text-[22px] font-bold leading-snug tracking-tight text-navy sm:text-[26px]">
          {step.title}
        </h2>
        <p className="mt-2 text-sm text-muted sm:text-base">
          {step.description}
        </p>
      </div>

      {step.type === "currency" && (
        <CurrencyInput
          id={step.id}
          label={step.title}
          value={value}
          onChange={onChange}
        />
      )}

      {step.type === "options" && step.options && (
        <OptionList
          options={step.options}
          value={value}
          onChange={onChange}
          grid={step.layout === "grid"}
        />
      )}
    </div>
  );
}

type OptionListProps = {
  options: GetStartedOption[];
  value: string;
  onChange: (value: string) => void;
  grid?: boolean;
};

function OptionList({
  options,
  value,
  onChange,
  grid = false,
}: OptionListProps) {
  const buttons = options.map((option) => (
    <AnswerOption
      key={option.id}
      icon={getOptionIcon(option.icon)}
      label={option.label}
      selected={value === option.label}
      onSelect={() => onChange(option.label)}
    />
  ));

  if (grid) {
    return (
      <div className="grid gap-3 sm:grid-cols-2">{buttons}</div>
    );
  }

  return <div className="space-y-3">{buttons}</div>;
}
