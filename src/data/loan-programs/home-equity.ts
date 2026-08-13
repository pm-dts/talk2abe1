import { loanProgramDisclosure, loanProgramContactStep } from "@/data/loan-programs/common";
import type { LoanProgram } from "@/types/loan-program";

export const homeEquityLoanProgram: LoanProgram = {
  id: "lp-home-equity-loans",
  slug: "home-equity-heloc",
  route: "/loan-programs/home-equity-heloc/",
  title: "Home Equity Loans & HELOCs",
  description: "Access the equity in your home.",
  icon: "home-equity",
  hero: {
    eyebrow: "Home Equity Loans & HELOCs",
    title: "Access your equity. Keep your *first mortgage.*",
    description:
      "Borrow against the equity you've built without touching your existing mortgage rate — as a lump sum or a flexible line of credit.",
    trustPoints: [
      "Fixed or revolving options",
      "Keep your low first-mortgage rate",
    ],
  },
  metadata: {
    title: "Home Equity Loans & HELOCs",
    description:
      "Borrow against the equity you've built without touching your existing mortgage rate — as a lump sum or a flexible line of credit.",
  },
  facts: {
    title: "Loan vs. Line of Credit",
    subtitle: "The two main ways to access your equity.",
    items: [
      "**Home Equity Loan** — a lump sum with a fixed rate and fixed monthly payment",
      "**HELOC** — a revolving line you draw from as needed, similar to a credit card",
      "Combined loan-to-value typically allowed up to 85–90%",
    ],
    note: "Not sure which fits? A loan officer can walk through both based on how you plan to use the funds.",
  },
  benefits: [
    {
      num: "01",
      title: "Fund renovations",
      description:
        "Home improvements often pay for themselves in added value — and the interest may be tax-deductible.",
    },
    {
      num: "02",
      title: "Consolidate higher-rate debt",
      description:
        "Replace higher-interest credit cards or loans with one payment secured against your home equity.",
    },
    {
      num: "03",
      title: "Keep your first mortgage untouched",
      description:
        "Unlike a cash-out refinance, your existing mortgage rate and term stay exactly as they are.",
    },
  ],
  form: {
    submitLabel: "Get my options",
    steps: [
      {
        type: "choice",
        title: "What's the funding for?",
        description: "This helps us point you to the right option.",
        choices: [
          {
            value: "Home renovation",
            label: "Home renovation",
            description: "Remodel or repair",
          },
          {
            value: "Debt consolidation",
            label: "Debt consolidation",
            description: "Combine high-rate debt",
          },
          {
            value: "Major purchase",
            label: "Major purchase",
            description: "Tuition, medical, etc.",
          },
          {
            value: "Just exploring options",
            label: "Just exploring",
            description: "Want to see what's available",
          },
        ],
      },
      {
        type: "fields",
        title: "A bit about your home",
        description: "Estimates are fine.",
        fields: [
          {
            name: "homeValue",
            label: "Estimated home value",
            type: "text",
            placeholder: "$500,000",
          },
          {
            name: "balance",
            label: "Remaining mortgage balance",
            type: "text",
            placeholder: "$310,000",
          },
          {
            name: "type",
            label: "Preference",
            type: "select",
            options: [
              "Lump sum (Home Equity Loan)",
              "Line of credit (HELOC)",
              "Not sure — show me both",
            ],
            fullWidth: true,
          },
        ],
      },
      loanProgramContactStep(
        "Where should Abe send your options?",
        "A loan officer will follow up within one business day.",
      ),
    ],
    success: {
      title: "You're all set.",
      message:
        "A Talk2Abe loan officer will reach out within one business day with your home equity options.",
      buttons: {
        primary: "Schedule a Call",
        secondary: "Explore more loan programs",
      },
    },
    summary: [
      { label: "Purpose", key: "choice" },
      { label: "Home value", key: "homeValue" },
      { label: "Preference", key: "type" },
    ],
    disclosure: loanProgramDisclosure,
  },
};
