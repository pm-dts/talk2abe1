export type LoanProgramIcon =
  | "purchase"
  | "refinance"
  | "self-employed"
  | "dscr"
  | "fha"
  | "va"
  | "reverse-mortgage"
  | "home-equity";

export type LoanProgramCalculatorType = "purchase" | "refinance" | "dscr";

export type LoanProgramContact = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type LoanProgramFormChoice = {
  value: string;
  label: string;
  description: string;
};

export type LoanProgramFieldType = "text" | "select";

export type LoanProgramFormField = {
  name: string;
  label: string;
  type: LoanProgramFieldType;
  placeholder?: string;
  options?: string[];
  /** Spans the full row instead of sharing a two-column row. */
  fullWidth?: boolean;
};

export type LoanProgramFormStep =
  | {
      type: "choice";
      title: string;
      description: string;
      choices: LoanProgramFormChoice[];
    }
  | {
      type: "fields";
      title: string;
      description: string;
      fields: LoanProgramFormField[];
    }
  | {
      type: "contact";
      title: string;
      description: string;
      /** Shared contact fields rendered on every program's contact step. */
      fields: LoanProgramFormField[];
    };

export type LoanProgramFormSummaryItem = {
  label: string;
  /** Either "choice" or a field name from the fields step. */
  key: string;
};

export type LoanProgramFormConfig = {
  submitLabel: string;
  steps: [LoanProgramFormStep, LoanProgramFormStep, LoanProgramFormStep];
  success: {
    title: string;
    message: string;
    buttons: {
      primary: string;
      secondary: string;
    };
  };
  summary: LoanProgramFormSummaryItem[];
  disclosure: string;
};

export type LoanProgramFacts = {
  title: string;
  subtitle: string;
  /** Items may use a `**bold**` lead-in marker. */
  items: string[];
  note?: string;
};

export type LoanProgramBenefit = {
  num: string;
  title: string;
  description: string;
};

export type LoanProgramHero = {
  eyebrow: string;
  /** Titles may use an `*emphasis*` marker rendered in brand green. */
  title: string;
  description: string;
  trustPoints: string[];
};

export type LoanProgramMetadata = {
  /** Page-level title. Route pages format it (e.g. "Purchase Loans | Talk2Abe"). */
  title: string;
  description: string;
};

/* -----------------------------------------
 * Calculator config (data only — no logic)
 * ----------------------------------------- */

export type LoanProgramCalculatorFieldConfig = {
  name: string;
  label: string;
  prefix: "$" | "%";
  placeholder: string;
  /** Increment for number inputs (e.g. 0.1 for rate fields). */
  step?: number;
  inputMode?: "numeric" | "decimal";
  optional?: boolean;
  /** Pairs the field with the next half-width field in a two-column row. */
  halfWidth?: boolean;
  /** For select fields rendered as options. */
  options?: string[];
  defaultValue?: string;
};

export type LoanProgramPurchaseCalculatorConfig = {
  type: "purchase";
  title: string;
  subtitle: string;
  fields: LoanProgramCalculatorFieldConfig[];
  term: {
    label: string;
    options: { value: string; label: string }[];
    defaultValue: string;
  };
  result: {
    label: string;
    emptyMessage: string;
    breakdownLabels: string[];
  };
};

export type LoanProgramRefinanceCalculatorConfig = {
  type: "refinance";
  title: string;
  subtitle: string;
  fields: LoanProgramCalculatorFieldConfig[];
  newLoanTermYears: number;
  result: {
    idleLabel: string;
    higherLabel: string;
    /** Use `{months}` as the placeholder for the computed break-even. */
    breakevenTemplate: string;
    emptyMessage: string;
    verdicts: {
      higherPayment: string;
      fast: string;
      moderate: string;
      long: string;
    };
  };
};

export type LoanProgramDscrCalculatorConfig = {
  type: "dscr";
  title: string;
  subtitle: string;
  rentField: LoanProgramCalculatorFieldConfig;
  mode: {
    label: string;
    options: string[];
  };
  pitiField: LoanProgramCalculatorFieldConfig;
  estimateFields: LoanProgramCalculatorFieldConfig[];
  estimateTermYears: number;
  result: {
    label: string;
    emptyMessage: string;
    estimateEmptyMessage: string;
    verdicts: {
      strong: string;
      qualifies: string;
      belowOne: string;
    };
  };
};

export type LoanProgramCalculatorConfig =
  | LoanProgramPurchaseCalculatorConfig
  | LoanProgramRefinanceCalculatorConfig
  | LoanProgramDscrCalculatorConfig;

export type LoanProgram = {
  id: string;
  slug: string;
  route: string;
  title: string;
  description: string;
  icon: LoanProgramIcon;
  hero: LoanProgramHero;
  metadata: LoanProgramMetadata;
  calculator?: LoanProgramCalculatorType;
  calculatorConfig?: LoanProgramCalculatorConfig;
  facts?: LoanProgramFacts;
  benefits: LoanProgramBenefit[];
  form: LoanProgramFormConfig;
};
