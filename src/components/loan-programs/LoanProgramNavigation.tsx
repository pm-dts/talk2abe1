"use client";

// import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
  continueLabel,
  continueDisabled = false,
  continueType = "button",
  className,
}: LoanProgramNavigationProps) {
  // const { t } = useTranslation();

  const resolvedContinueLabel = continueLabel ?? "Continue";

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
          className="group rounded-[10px] border border-navy/20 bg-transparent px-4 py-3 font-sans text-[14.5px] font-bold text-muted transition-colors hover:border-brand/40 hover:bg-surface hover:text-brand"
        >
          <ArrowLeft
            className="mr-1.5 inline-block h-4 w-4 transition-transform duration-200 ease-out group-hover:-translate-x-1"
            aria-hidden="true"
          />
          {"Back"}
        </button>
      ) : (
        <span aria-hidden="true" />
      )}

      <button
        type={continueType}
        onClick={onContinue}
        disabled={continueDisabled}
        className="group cursor-pointer rounded-[10px] bg-brand px-6 py-3 font-sans text-[14.5px] font-bold text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-[#b7cfc0]"
      >
        {resolvedContinueLabel}
        <ArrowRight
          className="ml-1.5 inline-block h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
          aria-hidden="true"
        />
      </button>
    </div>
  );
}
