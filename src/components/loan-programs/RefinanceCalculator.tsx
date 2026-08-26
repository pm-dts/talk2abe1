"use client";

import { useState } from "react";

import CalculatorCard from "@/components/loan-programs/CalculatorCard";
import CalculatorFields from "@/components/loan-programs/CalculatorFields";
import CalculatorResult from "@/components/loan-programs/CalculatorResult";
import {
  estimateRefinance,
  formatCurrency,
  type RefinanceVerdictKey,
  type Verdict,
  type VerdictTone,
} from "@/lib/loan-calculators";

import type { LoanProgramRefinanceCalculatorConfig } from "@/types/loan-program";

const verdictTone: Record<RefinanceVerdictKey, VerdictTone> = {
  higher: "danger",
  fast: "success",
  moderate: "warning",
  long: "danger",
};

type RefinanceCalculatorProps = {
  config: LoanProgramRefinanceCalculatorConfig;
};

function verdictText(
  key: RefinanceVerdictKey,
  config: LoanProgramRefinanceCalculatorConfig,
): string {
  switch (key) {
    case "higher":
      return config.result.verdicts.higherPayment;
    case "fast":
      return config.result.verdicts.fast;
    case "moderate":
      return config.result.verdicts.moderate;
    case "long":
      return config.result.verdicts.long;
  }
}

export default function RefinanceCalculator({
  config,
}: RefinanceCalculatorProps) {
  const [values, setValues] = useState<Record<string, string>>({});

  const setField = (name: string, value: string) =>
    setValues((current) => ({ ...current, [name]: value }));

  const result = estimateRefinance({
    balance: parseFloat(values.balance ?? ""),
    currentPayment: parseFloat(values.currentPayment ?? ""),
    newRate: parseFloat(values.newRate ?? ""),
    closingCosts: parseFloat(values.closingCosts ?? ""),
    termYears: config.newLoanTermYears,
  });

  const isHigher = result.kind === "higher-payment";

  const value =
    result.kind === "invalid"
      ? "—"
      : isHigher
        ? formatCurrency(result.monthlyIncrease)
        : `${formatCurrency(result.monthlySavings)}/mo`;

  const label =
    result.kind === "invalid"
      ? config.result.idleLabel
      : isHigher
        ? config.result.higherLabel
        : config.result.breakevenTemplate.replace(
            "{months}",
            String(result.breakevenMonths),
          );

  const progress =
    result.kind === "invalid" ? 0 : isHigher ? 100 : result.progress;

  const verdict: Verdict =
    result.kind === "invalid"
      ? { text: config.result.emptyMessage, tone: "neutral" }
      : {
          text: verdictText(result.verdictKey, config),
          tone: verdictTone[result.verdictKey],
        };

  return (
    <CalculatorCard title={config.title} subtitle={config.subtitle}>
      <div className="space-y-4">
        <CalculatorFields
          idPrefix="refinance"
          fields={config.fields}
          values={values}
          onFieldChange={setField}
        />
      </div>

      <CalculatorResult
        value={value}
        label={label}
        progress={progress}
        verdict={verdict}
      />
    </CalculatorCard>
  );
}
