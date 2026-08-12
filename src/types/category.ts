export type CategoryIcon =
  | "purchase"
  | "refinance"
  | "self-employed"
  | "dscr"
  | "reverse"
  | "reverse-2nd"
  | "bank-statement"
  | "itin"
  | "foreign-national"
  | "medical"
  | "construction"
  | "fix-flip";

export interface Category {
  id: string;
  slug: string;
  name: string;
  description?: string;
  icon: CategoryIcon;
}
