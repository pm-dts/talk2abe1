import { loanProgramDisclosure, loanProgramContactStep } from "@/data/loan-programs/common";
import type { LoanProgram } from "@/types/loan-program";

export const dscrLoanProgram: LoanProgram = {
  id: "lp-dscr-loans",
  slug: "dscr-loans",
  route: "/loan-programs/dscr-loans/",
  title: "DSCR Loans",
  description: "For real estate investors. No income verification.",
  icon: "dscr",
  hero: {
    eyebrow: "DSCR Loan Program",
    title: "Qualify on your property's *cash flow*, not your paycheck.",
    description:
      "No tax returns. No W-2s. No income verification. If the rental income covers the mortgage, you qualify — that's the entire underwriting model.",
    trustPoints: [
      "Close in as little as 14 days",
      "Unlimited properties financed",
    ],
  },
  metadata: {
    title: "DSCR Loans",
    description:
      "No tax returns. No W-2s. No income verification. If the rental income covers the mortgage, you qualify — that's the entire underwriting model.",
  },
  calculator: "dscr",
  calculatorConfig: {
    type: "dscr",
    title: "Live DSCR Calculator",
    subtitle: "Enter your numbers — see if this loan fits.",
    rentField: {
      name: "rent",
      label: "Monthly rental income",
      prefix: "$",
      placeholder: "2,800",
    },
    mode: {
      label: "Mortgage payment entry mode",
      options: ["I know my payment", "Estimate it for me"],
    },
    pitiField: {
      name: "piti",
      label: "Monthly mortgage payment (PITIA est.)",
      prefix: "$",
      placeholder: "2,200",
    },
    estimateFields: [
      {
        name: "price",
        label: "Purchase price",
        prefix: "$",
        placeholder: "450,000",
      },
      {
        name: "downPct",
        label: "Down payment",
        prefix: "%",
        placeholder: "25",
        halfWidth: true,
      },
      {
        name: "rate",
        label: "Est. rate",
        prefix: "%",
        placeholder: "7.5",
        step: 0.1,
        inputMode: "decimal",
        halfWidth: true,
      },
      {
        name: "taxIns",
        label: "Monthly taxes + insurance + HOA",
        prefix: "$",
        placeholder: "450",
      },
    ],
    estimateTermYears: 30,
    result: {
      label: "Debt Service Coverage Ratio",
      emptyMessage: "Enter both numbers to calculate",
      estimateEmptyMessage: "Fill in the fields above to estimate your payment",
      verdicts: {
        strong: "Strong — likely to qualify with standard terms",
        qualifies: "Qualifies — may affect rate or reserves",
        belowOne: "Below 1.0 — still possible with more reserves",
      },
    },
  },
  benefits: [
    {
      num: "01",
      title: "No personal income docs",
      description:
        "Skip the tax returns and pay stubs entirely — underwriting is based on the subject property's rent versus its debt.",
    },
    {
      num: "02",
      title: "Built for investors",
      description:
        "Finance single-family rentals, short-term rentals, or small multifamily — even if you already own several other properties.",
    },
    {
      num: "03",
      title: "Ratios below 1.0 still work",
      description:
        "Many programs still qualify properties with a DSCR under 1.0 with a slightly larger down payment or reserve requirement.",
    },
  ],
  form: {
    submitLabel: "Get my DSCR quote",
    steps: [
      {
        type: "choice",
        title: "What's this property for?",
        description: "This tells us which DSCR guidelines apply.",
        choices: [
          {
            value: "Purchase",
            label: "New purchase",
            description: "Buying a rental property",
          },
          {
            value: "Refinance",
            label: "Refinance",
            description: "Already own it",
          },
          {
            value: "Cash-Out",
            label: "Cash-out refi",
            description: "Pull out equity",
          },
          {
            value: "Portfolio",
            label: "Portfolio (2+ homes)",
            description: "Blanket loan",
          },
        ],
      },
      {
        type: "fields",
        title: "Property & rent details",
        description:
          "Rough numbers are fine — we'll confirm during underwriting.",
        fields: [
          {
            name: "propValue",
            label: "Estimated property value",
            type: "text",
            placeholder: "$450,000",
          },
          {
            name: "downPct",
            label: "Down payment / equity",
            type: "text",
            placeholder: "25%",
          },
          {
            name: "propType",
            label: "Property type",
            type: "select",
            options: [
              "Single-family rental",
              "Short-term rental (Airbnb)",
              "2–4 unit multifamily",
              "Condo",
            ],
            fullWidth: true,
          },
        ],
      },
      loanProgramContactStep(
        "Where should Abe send your quote?",
        "A loan officer will follow up with real rates within one business day.",
      ),
    ],
    success: {
      title: "You're all set.",
      message:
        "A Talk2Abe loan officer will reach out within one business day with your personalized DSCR rate quote.",
      buttons: {
        primary: "Schedule a Call",
        secondary: "Explore more loan programs",
      },
    },
    summary: [
      { label: "Loan purpose", key: "choice" },
      { label: "Property type", key: "propType" },
      { label: "Est. value", key: "propValue" },
    ],
    disclosure: loanProgramDisclosure,
  },
};
