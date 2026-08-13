import DscrCalculator from "@/components/loan-programs/DscrCalculator";
import PurchaseCalculator from "@/components/loan-programs/PurchaseCalculator";
import RefinanceCalculator from "@/components/loan-programs/RefinanceCalculator";

import type { LoanProgramCalculatorConfig } from "@/types/loan-program";

type LoanProgramCalculatorProps = {
  config: LoanProgramCalculatorConfig;
};

export default function LoanProgramCalculator({
  config,
}: LoanProgramCalculatorProps) {
  switch (config.type) {
    case "purchase":
      return <PurchaseCalculator config={config} />;

    case "refinance":
      return <RefinanceCalculator config={config} />;

    case "dscr":
      return <DscrCalculator config={config} />;
  }
}
