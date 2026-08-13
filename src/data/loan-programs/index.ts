import { dscrLoanProgram } from "@/data/loan-programs/dscr";
import { fhaLoanProgram } from "@/data/loan-programs/fha";
import { homeEquityLoanProgram } from "@/data/loan-programs/home-equity";
import { purchaseLoanProgram } from "@/data/loan-programs/purchase";
import { refinanceLoanProgram } from "@/data/loan-programs/refinance";
import { reverseMortgageLoanProgram } from "@/data/loan-programs/reverse-mortgage";
import { selfEmployedLoanProgram } from "@/data/loan-programs/self-employed";
import { vaLoanProgram } from "@/data/loan-programs/va";
import type { LoanProgram } from "@/types/loan-program";

export { loanProgramContactFields, loanProgramContactStep, loanProgramDisclosure } from "@/data/loan-programs/common";

export { dscrLoanProgram } from "@/data/loan-programs/dscr";
export { fhaLoanProgram } from "@/data/loan-programs/fha";
export { homeEquityLoanProgram } from "@/data/loan-programs/home-equity";
export { purchaseLoanProgram } from "@/data/loan-programs/purchase";
export { refinanceLoanProgram } from "@/data/loan-programs/refinance";
export { reverseMortgageLoanProgram } from "@/data/loan-programs/reverse-mortgage";
export { selfEmployedLoanProgram } from "@/data/loan-programs/self-employed";
export { vaLoanProgram } from "@/data/loan-programs/va";

export const loanPrograms: LoanProgram[] = [
  purchaseLoanProgram,
  refinanceLoanProgram,
  selfEmployedLoanProgram,
  dscrLoanProgram,
  fhaLoanProgram,
  vaLoanProgram,
  reverseMortgageLoanProgram,
  homeEquityLoanProgram,
];

export function getPurchaseProgram(): LoanProgram {
  return purchaseLoanProgram;
}

export function getRefinanceProgram(): LoanProgram {
  return refinanceLoanProgram;
}

export function getSelfEmployedProgram(): LoanProgram {
  return selfEmployedLoanProgram;
}

export function getDscrProgram(): LoanProgram {
  return dscrLoanProgram;
}

export function getFhaProgram(): LoanProgram {
  return fhaLoanProgram;
}

export function getVaProgram(): LoanProgram {
  return vaLoanProgram;
}

export function getReverseMortgageProgram(): LoanProgram {
  return reverseMortgageLoanProgram;
}

export function getHomeEquityProgram(): LoanProgram {
  return homeEquityLoanProgram;
}

export function getLoanProgramBySlug(
  slug: string,
): LoanProgram | undefined {
  return loanPrograms.find((program) => program.slug === slug);
}

export function loanProgramRoute(slug: string): string {
  return `/loan-programs/${slug}/`;
}
