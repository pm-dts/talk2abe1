"use client";

import { useState } from "react";

import CalculatorCard from "@/components/loan-programs/CalculatorCard";
import CalculatorField from "@/components/loan-programs/CalculatorField";
import CalculatorFields from "@/components/loan-programs/CalculatorFields";
import CalculatorResult from "@/components/loan-programs/CalculatorResult";
import {
  estimateDscr,
  estimatePitiBreakdown,
  formatCurrency,
  formatRatio,
  type Verdict,
} from "@/lib/loan-calculators";
import { cn } from "@/lib/utils";

import type { LoanProgramDscrCalculatorConfig } from "@/types/loan-program";

type DscrCalculatorProps = {
  config: LoanProgramDscrCalculatorConfig;
};

export default function DscrCalculator({ config }: DscrCalculatorProps) {
  const [mode, setMode] = useState(config.mode.options[0]);
  const [values, setValues] = useState<Record<string, string>>({});

  const setField = (name: string, value: string) =>
    setValues((current) => ({ ...current, [name]: value }));

  const isEstimate = mode === config.mode.options[1];

  const breakdown = estimatePitiBreakdown({
    price: parseFloat(values.price ?? ""),
    downPct: parseFloat(values.downPct ?? ""),
    rate: parseFloat(values.rate ?? ""),
    taxIns: parseFloat(values.taxIns ?? "") || 0,
    termYears: config.estimateTermYears,
  });

  const pitiValue = isEstimate
    ? (breakdown?.total ?? 0)
    : parseFloat(values.piti ?? "");

  const result = estimateDscr(parseFloat(values.rent ?? ""), pitiValue);

  const verdict: Verdict = result
    ? {
        text: config.result.verdicts[result.verdict.key],
        tone: result.verdict.tone,
      }
    : { text: config.result.emptyMessage, tone: "neutral" };

  return (
    <CalculatorCard title={config.title} subtitle={config.subtitle}>
      <div className="space-y-4">
        <CalculatorField
          id={`dscr-${config.rentField.name}`}
          name={config.rentField.name}
          label={config.rentField.label}
          prefix={config.rentField.prefix}
          placeholder={config.rentField.placeholder}
          value={values[config.rentField.name] ?? ""}
          onChange={(value) => setField(config.rentField.name, value)}
        />

        <div
          role="tablist"
          aria-label={config.mode.label}
          className="flex rounded-[10px] border border-white/15 bg-white/[0.07] p-[3px]"
        >
          {config.mode.options.map((option) => (
            <button
              key={option}
              type="button"
              role="tab"
              aria-selected={mode === option}
              onClick={() => setMode(option)}
              className={cn(
                "flex-1 cursor-pointer rounded-lg px-1.5 py-2 font-sans text-[12.5px] font-bold transition",
                mode === option
                  ? "bg-brand text-white"
                  : "text-[#b9c4dc] hover:text-white",
              )}
            >
              {option}
            </button>
          ))}
        </div>

        {isEstimate ? (
          <>
            <CalculatorFields
              idPrefix="dscr"
              fields={config.estimateFields}
              values={values}
              onFieldChange={setField}
            />

            <div className="rounded-[10px] border border-dashed border-white/20 bg-white/[0.06] p-3.5 font-mono text-[13px] leading-relaxed text-[#b9c4dc]">
              {breakdown ? (
                <>
                  <p>
                    Est. principal &amp; interest:{" "}
                    <strong className="text-[15px] text-white">
                      {formatCurrency(breakdown.principalInterest)}
                    </strong>
                    /mo
                  </p>
                  <p>
                    + taxes/insurance/HOA:{" "}
                    <strong className="text-[15px] text-white">
                      {formatCurrency(breakdown.taxIns)}
                    </strong>
                    /mo
                  </p>
                  <p>
                    Total est. payment:{" "}
                    <strong className="text-[15px] text-white">
                      {formatCurrency(breakdown.total)}
                    </strong>
                    /mo{" "}
                    <span className="opacity-70">
                      ({config.estimateTermYears}-yr term)
                    </span>
                  </p>
                </>
              ) : (
                <p>{config.result.estimateEmptyMessage}</p>
              )}
            </div>
          </>
        ) : (
          <CalculatorField
            id={`dscr-${config.pitiField.name}`}
            name={config.pitiField.name}
            label={config.pitiField.label}
            prefix={config.pitiField.prefix}
            placeholder={config.pitiField.placeholder}
            value={values[config.pitiField.name] ?? ""}
            onChange={(value) => setField(config.pitiField.name, value)}
          />
        )}
      </div>

      <CalculatorResult
        value={result ? formatRatio(result.ratio) : "—"}
        label={config.result.label}
        progress={result?.progress ?? 0}
        verdict={verdict}
      />
    </CalculatorCard>
  );
}
