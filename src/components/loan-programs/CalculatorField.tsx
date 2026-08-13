"use client";

import { cn } from "@/lib/utils";

type CalculatorFieldProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  prefix?: string;
  placeholder?: string;
  step?: string;
  inputMode?: "numeric" | "decimal" | "text";
  className?: string;
};

const inputClasses =
  "w-full rounded-[10px] border border-white/20 bg-white/[0.07] px-3.5 py-3 font-mono text-[15px] font-semibold text-white outline-none transition placeholder:text-[#6e80a6] focus:border-brand focus:bg-white/10";

export default function CalculatorField({
  id,
  name,
  label,
  value,
  onChange,
  prefix,
  placeholder,
  step,
  inputMode = "numeric",
  className,
}: CalculatorFieldProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <label
        htmlFor={id}
        className="block text-[12.5px] font-semibold text-[#b9c4dc]"
      >
        {label}
      </label>

      <div className="relative">
        {prefix && (
          <span
            aria-hidden="true"
            className="absolute left-3.5 top-1/2 -translate-y-1/2 font-mono text-[15px] text-[#8fa3c9]"
          >
            {prefix}
          </span>
        )}

        <input
          id={id}
          name={name}
          type="number"
          inputMode={inputMode}
          step={step}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className={cn(inputClasses, prefix && "pl-[30px]")}
        />
      </div>
    </div>
  );
}
