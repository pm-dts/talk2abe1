"use client";

import { CircleHelp } from "lucide-react";

import AnswerOption from "@/components/get-started/AnswerOption";

const NOT_SURE_VALUE = "I'm Not Sure";

type CurrencyInputProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

function formatCurrencyInput(raw: string): string {
  let value = raw.replace(/[^0-9.]/g, "");
  const parts = value.split(".");
  if (parts.length > 2) {
    value = `${parts[0]}.${parts.slice(1).join("")}`;
  }
  return value;
}

export default function CurrencyInput({
  id,
  label,
  value,
  onChange,
  placeholder = "Enter amount",
}: CurrencyInputProps) {
  const notSure = value === NOT_SURE_VALUE;

  const handleNotSure = () => {
    onChange(notSure ? "" : NOT_SURE_VALUE);
  };

  return (
    <div className="space-y-3">
      <div className="relative">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-muted sm:text-xl"
        >
          $
        </span>
        <input
          id={id}
          type="text"
          inputMode="decimal"
          autoComplete="off"
          placeholder={placeholder}
          value={notSure ? "" : value}
          onChange={(event) => onChange(formatCurrencyInput(event.target.value))}
          disabled={notSure}
          aria-label={label}
          className="h-14 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-lg font-semibold text-navy shadow-sm placeholder:font-normal placeholder:text-muted/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 disabled:cursor-not-allowed disabled:bg-surface disabled:text-muted sm:text-xl"
        />
      </div>

      <AnswerOption
        icon={CircleHelp}
        label="I'm Not Sure"
        selected={notSure}
        onSelect={handleNotSure}
      />
    </div>
  );
}
