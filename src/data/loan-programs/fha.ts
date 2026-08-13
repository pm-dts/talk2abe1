import { loanProgramDisclosure, loanProgramContactStep } from "@/data/loan-programs/common";
import type { LoanProgram } from "@/types/loan-program";

export const fhaLoanProgram: LoanProgram = {
  id: "lp-fha-loans",
  slug: "fha-loans",
  route: "/loan-programs/fha-loans/",
  title: "FHA Loans",
  description: "Low down payment options available.",
  icon: "fha",
  hero: {
    eyebrow: "FHA Loans",
    title: "Buy with as little as *3.5% down.*",
    description:
      "Lower credit and down payment requirements make FHA one of the most accessible paths to homeownership.",
    trustPoints: [
      "3.5% down with 580+ credit score",
      "Gift funds allowed for down payment",
    ],
  },
  metadata: {
    title: "FHA Loans",
    description:
      "Lower credit and down payment requirements make FHA one of the most accessible paths to homeownership.",
  },
  facts: {
    title: "Quick Facts",
    subtitle: "What to know about FHA loans before you apply.",
    items: [
      "Minimum down payment: 3.5% with a 580+ credit score",
      "Down payment can come entirely from gift funds",
      "Requires upfront + annual mortgage insurance premium (MIP)",
      "Seller can contribute up to 6% toward closing costs",
    ],
    note: "FHA loans require mortgage insurance for the life of the loan in most cases — a loan officer can walk you through the numbers.",
  },
  benefits: [
    {
      num: "01",
      title: "Low down payment",
      description:
        "Get into a home with as little as 3.5% down, well below what most conventional loans require.",
    },
    {
      num: "02",
      title: "Flexible credit requirements",
      description:
        "FHA is more forgiving of past credit issues than most conventional loan programs.",
    },
    {
      num: "03",
      title: "Seller-paid closing costs",
      description:
        "Negotiate for the seller to cover a portion of your closing costs, reducing cash needed at closing.",
    },
  ],
  form: {
    submitLabel: "Get my FHA quote",
    steps: [
      {
        type: "choice",
        title: "Where are you in the process?",
        description: "This helps us match you to the right next step.",
        choices: [
          {
            value: "First-time buyer",
            label: "First-time buyer",
            description: "New to this process",
          },
          {
            value: "Actively looking",
            label: "Actively looking",
            description: "Touring homes now",
          },
          {
            value: "Refinancing my FHA loan",
            label: "Refinancing",
            description: "Already have an FHA loan",
          },
          {
            value: "Just exploring",
            label: "Just exploring",
            description: "Want to know if I qualify",
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
            placeholder: "$300,000 – $380,000",
          },
          {
            name: "downAvail",
            label: "Down payment available",
            type: "text",
            placeholder: "$12,000",
          },
          {
            name: "credit",
            label: "Approximate credit score",
            type: "select",
            options: ["Below 580", "580–619", "620–679", "680+", "Not sure"],
            fullWidth: true,
          },
        ],
      },
      loanProgramContactStep(
        "Where should Abe send your quote?",
        "A loan officer will follow up within one business day.",
      ),
    ],
    success: {
      title: "You're all set.",
      message:
        "A Talk2Abe loan officer will reach out within one business day with your FHA options.",
      buttons: {
        primary: "Schedule a Call",
        secondary: "Explore more loan programs",
      },
    },
    summary: [
      { label: "Stage", key: "choice" },
      { label: "Target price", key: "targetPrice" },
      { label: "Credit range", key: "credit" },
    ],
    disclosure: loanProgramDisclosure,
  },
};
