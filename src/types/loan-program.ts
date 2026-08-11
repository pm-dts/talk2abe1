export type LoanProgramIcon =
  | "purchase"
  | "refinance"
  | "self-employed"
  | "dscr"
  | "fha"
  | "va"
  | "reverse-mortgage"
  | "home-equity";

export interface LoanProgram {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: LoanProgramIcon;
}
