import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

type LoanProgramTrustPointsProps = {
  points: string[];
  className?: string;
};

export default function LoanProgramTrustPoints({
  points,
  className,
}: LoanProgramTrustPointsProps) {
  if (points.length === 0) {
    return null;
  }

  return (
    <ul
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-[22px] sm:gap-y-2",
        className,
      )}
    >
      {points.map((point) => (
        <li
          key={point}
          className="flex items-center gap-2 text-[13px] text-muted"
        >
          <Check
            className="h-[15px] w-[15px] shrink-0 text-brand"
            strokeWidth={2.5}
            aria-hidden="true"
          />
          {point}
        </li>
      ))}
    </ul>
  );
}
