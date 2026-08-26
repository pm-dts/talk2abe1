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
  label = "Questionnaire progress",
  className,
}: ProgressBarProps) {
  const percent = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between gap-4 text-xs font-semibold">
        <span className="text-navy">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-brand">{percent}% Complete</span>
      </div>

      <div
        role="progressbar"
        aria-label={label}
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
