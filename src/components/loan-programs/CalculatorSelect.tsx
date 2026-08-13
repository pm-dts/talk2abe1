"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CalculatorSelectProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
  className?: string;
};

export default function CalculatorSelect({
  id,
  name,
  label,
  value,
  onChange,
  children,
  className,
}: CalculatorSelectProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <label
        htmlFor={id}
        className="block text-[12.5px] font-semibold text-[#b9c4dc]"
      >
        {label}
      </label>

      <select
        id={id}
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full cursor-pointer rounded-[10px] border border-white/20 bg-white/[0.07] px-3.5 py-3 font-sans text-[14.5px] font-semibold text-white outline-none transition focus:border-brand [&>option]:bg-navy [&>option]:text-white"
      >
        {children}
      </select>
    </div>
  );
}
