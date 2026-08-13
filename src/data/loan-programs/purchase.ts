import { loanProgramDisclosure, loanProgramContactStep } from "@/data/loan-programs/common";
import type { LoanProgram } from "@/types/loan-program";

export const purchaseLoanProgram: LoanProgram = {
  id: "lp-purchase-loans",
  slug: "purchase-loans",
  route: "/loan-programs/purchase-loans/",
  title: "Purchase Loans",
  description: "Find the right loan to buy your next home.",
  icon: "purchase",
  hero: {
    eyebrow: "Purchase Loans",
    title: "Find out what you can *actually afford* — before you shop.",
    description:
      "Get a real monthly payment estimate in seconds, then talk to a loan officer about locking in a rate and getting pre-approved.",
    trustPoints: [
      "Pre-approval in as little as 24 hours",
      "As little as 3% down",
    ],
  },
  metadata: {
    title: "Purchase Loans",
    description:
      "Get a real monthly payment estimate in seconds, then talk to a loan officer about locking in a rate and getting pre-approved.",
  },
  calculator: "purchase",
  calculatorConfig: {
    type: "purchase",
    title: "Payment Estimator",
    subtitle: "See your estimated monthly payment.",
    fields: [
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
        placeholder: "10",
        halfWidth: true,
      },
      {
        name: "rate",
        label: "Est. rate",
        prefix: "%",
        placeholder: "6.8",
        step: 0.1,
        inputMode: "decimal",
        halfWidth: true,
      },
      {
        name: "taxIns",
        label: "Monthly taxes + insurance + HOA (optional)",
        prefix: "$",
        placeholder: "400",
        optional: true,
      },
    ],
    term: {
      label: "Loan term",
      options: [
        { value: "30", label: "30-year fixed" },
        { value: "15", label: "15-year fixed" },
      ],
      defaultValue: "30",
    },
    result: {
      label: "Estimated total monthly payment",
      emptyMessage: "Fill in the fields above to see your estimate",
      breakdownLabels: [
        "Loan amount",
        "Principal & interest",
        "Taxes/insurance/HOA",
      ],
    },
  },
  benefits: [
    {
      num: "01",
      title: "Low down payment options",
      description:
        "Conventional loans as low as 3% down for qualified first-time buyers, alongside FHA and VA options.",
    },
    {
      num: "02",
      title: "Pre-approval, not just pre-qualification",
      description:
        "A real pre-approval letter that sellers and agents take seriously — not just a soft estimate.",
    },
    {
      num: "03",
      title: "Rate locks while you shop",
      description:
        "Lock your rate for up to 60 days while you find the right home, so rising rates don't change your budget.",
    },
  ],
  form: {
    submitLabel: "Get my rate quote",
    steps: [
      {
        type: "choice",
        title: "Where are you in the process?",
        description: "This helps us match you to the right next step.",
        choices: [
          {
            value: "Just browsing",
            label: "Just browsing",
            description: "Want to know what I can afford",
          },
          {
            value: "Actively looking",
            label: "Actively looking",
            description: "Touring homes now",
          },
          {
            value: "Offer accepted",
            label: "Offer accepted",
            description: "Need financing fast",
          },
          {
            value: "First-time buyer",
            label: "First-time buyer",
            description: "New to this process",
          },
        ],
      },
      {
        type: "fields",
        title: "A bit about the home",
        description: "Estimates are fine — nothing here is locked in.",
        fields: [
          {
            name: "targetPrice",
            label: "Target price range",
            type: "text",
            placeholder: "$400,000 – $500,000",
          },
          {
            name: "downAvail",
            label: "Down payment available",
            type: "text",
            placeholder: "$45,000",
          },
          {
            name: "homeType",
            label: "Home type",
            type: "select",
            options: [
              "Single-family home",
              "Condo / townhome",
              "Multi-family (2-4 units)",
              "New construction",
            ],
            fullWidth: true,
          },
        ],
      },
      loanProgramContactStep(
        "Where should Abe send your rate quote?",
        "A loan officer will follow up within one business day.",
      ),
    ],
    success: {
      title: "You're all set.",
      message:
        "A Talk2Abe loan officer will reach out within one business day with your personalized rate quote.",
      buttons: {
        primary: "Schedule a Call",
        secondary: "Explore more loan programs",
      },
    },
    summary: [
      { label: "Stage", key: "choice" },
      { label: "Home type", key: "homeType" },
      { label: "Target price", key: "targetPrice" },
    ],
    disclosure: loanProgramDisclosure,
  },
};
