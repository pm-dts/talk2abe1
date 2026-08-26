"use client";

// import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";
import Alert from "@/components/common/Alert";
import type { LoanProgramFormField } from "@/types/loan-program";

const inputClasses =
  "mt-1.5 w-full rounded-[10px] border-[1.5px] bg-white px-3.5 py-3 font-sans text-[15px] text-navy placeholder:text-muted/50 outline-none transition focus:border-brand sm:text-base";

const labelClasses = "block text-[13.5px] font-bold text-navy";

type LoanProgramFieldProps = {
  idPrefix: string;
  field: LoanProgramFormField;
  value: string;
  onChange: (value: string) => void;
  error?: string;
};

export default function LoanProgramField({
  idPrefix,
  field,
  value,
  onChange,
  error,
}: LoanProgramFieldProps) {
  // const { t } = useTranslation();
  const id = `${idPrefix}-${field.name}`;
  const describedBy = error ? `${id}-error` : undefined;

  return (
    <div className="min-w-0">
      <label htmlFor={id} className={labelClasses}>
        {field.label}
        <span className="ml-0.5 text-brand" aria-hidden="true">
          *
        </span>
      </label>

      {field.type === "select" ? (
        <select
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={cn(
            inputClasses,
            "bg-white",
            !value && "text-muted/50",
            error ? "border-danger focus:border-danger" : "border-line",
          )}
        >
          <option value="" disabled>
            {"Select one"}
          </option>
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type="text"
          autoComplete="off"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={field.placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={cn(
            inputClasses,
            error ? "border-danger focus:border-danger" : "border-line",
          )}
        />
      )}

      {error && (
        <Alert variant="error" className="mt-1.5" id={`${id}-error`}>
          {error}
        </Alert>
      )}
    </div>
  );
}
