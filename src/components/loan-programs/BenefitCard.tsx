import type { LoanProgramBenefit } from "@/types/loan-program";

type BenefitCardProps = {
  benefit: LoanProgramBenefit;
};

export default function BenefitCard({ benefit }: BenefitCardProps) {
  return (
    <div className="rounded-[14px] border border-line bg-white p-[22px]">
      <p className="font-mono text-[13px] font-semibold text-brand-dark">
        {benefit.num}
      </p>

      <h3 className="mt-2.5 font-display text-lg font-semibold text-navy">
        {benefit.title}
      </h3>

      <p className="mt-2 text-sm leading-[1.55] text-muted">
        {benefit.description}
      </p>
    </div>
  );
}
