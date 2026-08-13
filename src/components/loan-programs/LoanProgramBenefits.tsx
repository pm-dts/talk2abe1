import BenefitCard from "@/components/loan-programs/BenefitCard";

import type { LoanProgramBenefit } from "@/types/loan-program";

type LoanProgramBenefitsProps = {
  benefits: LoanProgramBenefit[];
};

export default function LoanProgramBenefits({
  benefits,
}: LoanProgramBenefitsProps) {
  if (benefits.length === 0) {
    return null;
  }

  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.num} benefit={benefit} />
        ))}
      </div>
    </section>
  );
}
