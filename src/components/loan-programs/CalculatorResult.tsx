import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import type { Verdict, VerdictTone } from "@/lib/loan-calculators";

const toneText: Record<VerdictTone, string> = {
  neutral: "text-[#b9c4dc]",
  success: "text-[#7fd69b]",
  warning: "text-[#e8c27e]",
  danger: "text-[#f0a69e]",
};

const toneBar: Record<VerdictTone, string> = {
  neutral: "bg-white/15",
  success: "bg-brand",
  warning: "bg-[#c6862b]",
  danger: "bg-[#c4453a]",
};

type CalculatorResultProps = {
  value: string;
  label: string;
  progress: number;
  verdict: Verdict;
  showBar?: boolean;
  children?: ReactNode;
};

export default function CalculatorResult({
  value,
  label,
  progress,
  verdict,
  showBar = true,
  children,
}: CalculatorResultProps) {
  return (
    <div className="mt-6 border-t border-white/15 pt-6">
      <p className="font-mono text-[44px] font-semibold leading-none text-white sm:text-[52px]">
        {value}
      </p>

      <p className="mt-2 text-[13px] text-[#b9c4dc]">{label}</p>

      {showBar && (
        <div
          role="progressbar"
          aria-label={label}
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
          className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10"
        >
          <div
            className={cn(
              "h-full rounded-full transition-all duration-300 ease-out",
              toneBar[verdict.tone],
            )}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <p
        className={cn(
          "mt-3.5 text-[13.5px] font-semibold leading-snug",
          toneText[verdict.tone],
        )}
      >
        {verdict.text}
      </p>

      {children}
    </div>
  );
}
