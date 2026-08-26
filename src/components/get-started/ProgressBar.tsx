"use client";

import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";

type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
  label?: string;
  className?: string;
};

export default function ProgressBar({
  currentStep,
  totalSteps,
  label,
  className,
}: ProgressBarProps) {
  const { t } = useTranslation();
  const percent = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between gap-4 text-xs font-semibold">
        <span className="text-navy">
          {t("getStarted.progress.stepOf", { current: currentStep, total: totalSteps })}
        </span>
        <span className="text-brand">{t("getStarted.progress.percentComplete", { percent })}</span>
      </div>

      <div
        role="progressbar"
        aria-label={label ?? t("getStarted.progress.ariaLabel")}
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200"
      >
        <div
          className="h-full rounded-full bg-brand transition-all duration-300 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
