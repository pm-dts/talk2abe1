import { Fragment, type ReactNode } from "react";

import LoanProgramTrustPoints from "@/components/loan-programs/LoanProgramTrustPoints";

import type { LoanProgram } from "@/types/loan-program";

function renderTitle(title: string) {
  const parts = title.split(/\*(.+?)\*/g);

  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <em key={index} className="italic text-brand-dark">
        {part}
      </em>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    ),
  );
}

type LoanProgramHeroProps = {
  program: LoanProgram;
  rightContent?: ReactNode;
};

export default function LoanProgramHero({
  program,
  rightContent,
}: LoanProgramHeroProps) {
  return (
    <section className="mb-16 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
      <div className="min-w-0">
        <p className="inline-flex items-center gap-2 rounded-full bg-mint px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.06em] text-brand-dark">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-brand"
          />
          {program.hero.eyebrow}
        </p>

        <h1 className="mt-4 font-display text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.01em] text-navy sm:text-[2.6rem] lg:text-[2.75rem]">
          {renderTitle(program.hero.title)}
        </h1>

        <p className="mt-4 max-w-[520px] text-[15px] leading-[1.6] text-muted sm:text-[17px]">
          {program.hero.description}
        </p>

        <LoanProgramTrustPoints
          points={program.hero.trustPoints}
          className="mt-6"
        />
      </div>

      {rightContent && <div className="min-w-0">{rightContent}</div>}
    </section>
  );
}
