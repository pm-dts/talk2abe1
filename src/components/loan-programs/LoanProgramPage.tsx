import type { ReactNode } from "react";

import Container from "@/components/common/Container";
import LoanProgramBenefits from "@/components/loan-programs/LoanProgramBenefits";
import LoanProgramCalculator from "@/components/loan-programs/LoanProgramCalculator";
import LoanProgramFacts from "@/components/loan-programs/LoanProgramFacts";
import LoanProgramHero from "@/components/loan-programs/LoanProgramHero";
import LoanProgramLeadForm from "@/components/loan-programs/LoanProgramLeadForm";
import LoanProgramNav from "@/components/loan-programs/LoanProgramNav";

import type { LoanProgram } from "@/types/loan-program";

type LoanProgramPageProps = {
  program: LoanProgram;
};

function heroRightContent(program: LoanProgram): ReactNode {
  if (program.calculatorConfig) {
    return <LoanProgramCalculator config={program.calculatorConfig} />;
  }

  if (program.facts) {
    return <LoanProgramFacts facts={program.facts} />;
  }

  return null;
}

export default function LoanProgramPage({ program }: LoanProgramPageProps) {
  return (
    <div className="bg-cream">
      <LoanProgramNav />

      <Container className="py-10 sm:py-14 lg:py-16">
        <LoanProgramHero
          program={program}
          rightContent={heroRightContent(program)}
        />

        <LoanProgramBenefits benefits={program.benefits} />

        <LoanProgramLeadForm program={program} />
      </Container>
    </div>
  );
}
