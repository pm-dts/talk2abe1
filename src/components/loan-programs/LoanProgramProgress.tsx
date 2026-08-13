import { cn } from "@/lib/utils";

type LoanProgramProgressProps = {
  currentStep: number;
  totalSteps: number;
  className?: string;
};

export default function LoanProgramProgress({
  currentStep,
  totalSteps,
  className,
}: LoanProgramProgressProps) {
  return (
    <div
      role="group"
      aria-label={`Step ${currentStep} of ${totalSteps}`}
      className={cn("flex items-center gap-2", className)}
    >
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          aria-hidden="true"
          className="h-[5px] flex-1 overflow-hidden rounded-full bg-line"
        >
          <div
            className="h-full rounded-full bg-brand transition-all duration-300 ease-out"
            style={{ width: index < currentStep ? "100%" : "0%" }}
          />
        </div>
      ))}

      <span className="whitespace-nowrap font-mono text-xs text-muted">
        Step {currentStep} of {totalSteps}
      </span>
    </div>
  );
}
