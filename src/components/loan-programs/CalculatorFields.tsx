"use client";

import CalculatorField from "@/components/loan-programs/CalculatorField";

import type { LoanProgramCalculatorFieldConfig } from "@/types/loan-program";

type CalculatorFieldsProps = {
  idPrefix: string;
  fields: LoanProgramCalculatorFieldConfig[];
  values: Record<string, string>;
  onFieldChange: (name: string, value: string) => void;
};

/** Groups consecutive half-width fields into two-column rows. */
function toRows(
  fields: LoanProgramCalculatorFieldConfig[],
): LoanProgramCalculatorFieldConfig[][] {
  const rows: LoanProgramCalculatorFieldConfig[][] = [];
  let pending: LoanProgramCalculatorFieldConfig | undefined;

  for (const field of fields) {
    if (field.halfWidth) {
      if (pending) {
        rows.push([pending, field]);
        pending = undefined;
      } else {
        pending = field;
      }
    } else {
      if (pending) {
        rows.push([pending]);
        pending = undefined;
      }
      rows.push([field]);
    }
  }

  if (pending) {
    rows.push([pending]);
  }

  return rows;
}

export default function CalculatorFields({
  idPrefix,
  fields,
  values,
  onFieldChange,
}: CalculatorFieldsProps) {
  const rows = toRows(fields);

  return (
    <div className="space-y-4">
      {rows.map((row) => {
        if (row.length === 2) {
          return (
            <div
              key={row.map((field) => field.name).join("-")}
              className="grid grid-cols-2 gap-3"
            >
              {row.map((field) => (
                <CalculatorField
                  key={field.name}
                  id={`${idPrefix}-${field.name}`}
                  name={field.name}
                  label={field.label}
                  prefix={field.prefix}
                  placeholder={field.placeholder}
                  step={field.step != null ? String(field.step) : undefined}
                  inputMode={field.inputMode ?? "numeric"}
                  value={values[field.name] ?? ""}
                  onChange={(value) => onFieldChange(field.name, value)}
                />
              ))}
            </div>
          );
        }

        const field = row[0];

        return (
          <CalculatorField
            key={field.name}
            id={`${idPrefix}-${field.name}`}
            name={field.name}
            label={field.label}
            prefix={field.prefix}
            placeholder={field.placeholder}
            step={field.step != null ? String(field.step) : undefined}
            inputMode={field.inputMode ?? "numeric"}
            value={values[field.name] ?? ""}
            onChange={(value) => onFieldChange(field.name, value)}
          />
        );
      })}
    </div>
  );
}
