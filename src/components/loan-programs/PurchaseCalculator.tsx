"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import CalculatorCard from "@/components/loan-programs/CalculatorCard";
import CalculatorFields from "@/components/loan-programs/CalculatorFields";
import CalculatorResult from "@/components/loan-programs/CalculatorResult";
import CalculatorSelect from "@/components/loan-programs/CalculatorSelect";
import { estimatePurchasePayment } from "@/lib/loan-calculators";
import { formatLocalizedCurrency } from "@/lib/format";

import type { LoanProgramPurchaseCalculatorConfig } from "@/types/loan-program";

type PurchaseCalculatorProps = {
  config: LoanProgramPurchaseCalculatorConfig;
};

export default function PurchaseCalculator({
  config,
}: PurchaseCalculatorProps) {
  const { t } = useTranslation();
  const [values, setValues] = useState<Record<string, string>>({});
  const [term, setTerm] = useState(config.term.defaultValue);

  const setField = (name: string, value: string) =>
    setValues((current) => ({ ...current, [name]: value }));

  const result = estimatePurchasePayment({
    price: parseFloat(values.price ?? ""),
    downPct: parseFloat(values.downPct ?? ""),
    rate: parseFloat(values.rate ?? ""),
    termYears: parseInt(term, 10),
    taxIns: parseFloat(values.taxIns ?? "") || 0,
  });

  const requiredFields = config.fields.filter((field) => !field.optional);
  const optionalFields = config.fields.filter((field) => field.optional);

  return (
    <CalculatorCard title={config.title} subtitle={config.subtitle}>
      <div className="space-y-4">
        <CalculatorFields
          idPrefix="purchase"
          fields={requiredFields}
          values={values}
          onFieldChange={setField}
        />

        <CalculatorSelect
          id="purchase-term"
          name="term"
          label={config.term.label}
          value={term}
          onChange={setTerm}
        >
          {config.term.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </CalculatorSelect>

        <CalculatorFields
          idPrefix="purchase"
          fields={optionalFields}
          values={values}
          onFieldChange={setField}
        />
      </div>

      <CalculatorResult
        value={result ? formatLocalizedCurrency(result.totalMonthly) : "—"}
        label={config.result.label}
        progress={0}
        verdict={{ text: config.result.emptyMessage, tone: "neutral" }}
        showBar={false}
      >
        {result && (
          <div className="mt-4 space-y-1 rounded-[10px] border border-dashed border-white/20 bg-white/[0.06] p-3.5 font-mono text-[13px] leading-relaxed text-[#b9c4dc]">
            <p>
              {config.result.breakdownLabels[0]}:{" "}
              <strong className="text-[15px] text-white">
                {formatLocalizedCurrency(result.loanAmount)}
              </strong>
            </p>
            <p>
              {config.result.breakdownLabels[1]}:{" "}
              <strong className="text-[15px] text-white">
                {formatLocalizedCurrency(result.principalInterest)}
              </strong>
              {t("loanProgramsData.calculator.perMonth")}
            </p>
            <p>
              {config.result.breakdownLabels[2]}:{" "}
              <strong className="text-[15px] text-white">
                {formatLocalizedCurrency(result.taxIns)}
              </strong>
              {t("loanProgramsData.calculator.perMonth")} <span className="opacity-70">({term}{t("loanProgramsData.calculator.yrFixed")})</span>
            </p>
          </div>
        )}
      </CalculatorResult>
    </CalculatorCard>
  );
}
