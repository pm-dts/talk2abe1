import Link from "next/link";
import {
  ArrowRight,
  Building2,
  HandCoins,
  House,
  RefreshCcw,
  Repeat,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { loanProgramRoute } from "@/data/loan-programs";
import { cn } from "@/lib/utils";
import type {
  LoanProgram,
  LoanProgramIcon,
} from "@/types/loan-program";

const iconMap: Record<LoanProgramIcon, LucideIcon> = {
  purchase: House,
  refinance: RefreshCcw,
  "self-employed": UserRound,
  dscr: Building2,
  fha: House,
  va: ShieldCheck,
  "reverse-mortgage": Repeat,
  "home-equity": HandCoins,
};

type LoanProgramCardProps = {
  program: LoanProgram;
  className?: string;
};

export default function LoanProgramCard({
  program,
  className,
}: LoanProgramCardProps) {
  const Icon = iconMap[program.icon];

  return (
    <article
      className={cn(
        "flex min-h-[145px] items-start gap-8 rounded-lg border border-slate-200 bg-white p-8 transition-colors hover:border-brand/30",
        className,
      )}
    >
      {/* Icon */}
      <div className="flex shrink-0 pt-0.5">
        <Icon
          className="h-12 w-auto text-navy"
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <h2 className="text-base font-semibold text-navy sm:text-lg">
          {program.title}
        </h2>

        <p className="mt-1 text-xs leading-5 text-muted sm:text-sm">
          {program.description}
        </p>

        <Link
          href={loanProgramRoute(program.slug)}
          aria-label={`Learn more about ${program.title}`}
          className="group mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand transition-colors hover:text-brand/80 sm:text-sm"
        >
          Learn more
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1"
            strokeWidth={2}
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}