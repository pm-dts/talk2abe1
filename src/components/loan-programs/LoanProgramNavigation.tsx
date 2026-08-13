"use client";

import { cn } from "@/lib/utils";

type LoanProgramNavigationProps = {
  showBack: boolean;
  onBack: () => void;
  onContinue: () => void;
  continueLabel?: string;
  continueDisabled?: boolean;
  continueType?: "button" | "submit";
  className?: string;
};

export default function LoanProgramNavigation({
  showBack,
  onBack,
  onContinue,
  continueLabel = "Continue",
  continueDisabled = false,
  continueType = "button",
  className,
}: LoanProgramNavigationProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4",
        className,
      )}
    >
      {showBack ? (
        <button
          type="button"
          onClick={onBack}
          className="px-2 py-3 font-sans text-[14.5px] font-bold text-muted transition-colors hover:text-navy"
        >
          ← Back
        </button>
      ) : (
        <span aria-hidden="true" />
      )}

      <button
        type={continueType}
        onClick={onContinue}
        disabled={continueDisabled}
        className="cursor-pointer rounded-[10px] bg-brand px-6 py-3 font-sans text-[14.5px] font-bold text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-[#b7cfc0]"
      >
        {continueLabel}
      </button>
    </div>
  );
}
