import { loanProgramDisclosure, loanProgramContactStep } from "@/data/loan-programs/common";
import type { LoanProgram } from "@/types/loan-program";

export const refinanceLoanProgram: LoanProgram = {
  id: "lp-refinance-loans",
  slug: "refinance-loans",
  route: "/loan-programs/refinance-loans/",
  title: "Refinance Loans",
  description: "Lower your rate, reduce your payment, or cash out.",
  icon: "refinance",
  hero: {
    eyebrow: "Refinance Loans",
    title: "Know your *break-even point* before you refinance.",
    description:
      "Refinancing costs money upfront. See exactly how many months it takes to come out ahead — then decide if it's worth it.",
    trustPoints: [
      "Rate-and-term or cash-out",
      "No cost to check your numbers",
    ],
  },
  metadata: {
    title: "Refinance Loans",
    description:
      "Refinancing costs money upfront. See exactly how many months it takes to come out ahead — then decide if it's worth it.",
  },
  calculator: "refinance",
  calculatorConfig: {
    type: "refinance",
    title: "Break-Even Calculator",
    subtitle: "Find out if refinancing is worth it right now.",
    fields: [
      {
        name: "balance",
        label: "Remaining loan balance",
        prefix: "$",
        placeholder: "380,000",
      },
      {
        name: "currentPayment",
        label: "Current monthly payment (P&I)",
        prefix: "$",
        placeholder: "2,650",
      },
      {
        name: "newRate",
        label: "New est. rate",
        prefix: "%",
        placeholder: "6.2",
        step: 0.1,
        inputMode: "decimal",
        halfWidth: true,
      },
      {
        name: "closingCosts",
        label: "Est. closing costs",
        prefix: "$",
        placeholder: "6,000",
        halfWidth: true,
      },
    ],
    newLoanTermYears: 30,
    result: {
      idleLabel: "Estimated monthly savings",
      higherLabel: "Higher monthly payment",
      breakevenTemplate: "Breaks even in {months} months",
      emptyMessage: "Enter your numbers to calculate",
      verdicts: {
        higherPayment:
          "This rate doesn't lower your payment — refinancing may not pay off",
        fast: "Fast break-even — likely worth it if you plan to stay put",
        moderate: "Moderate break-even — worth it if you're staying 4+ years",
        long: "Long break-even — talk to a loan officer before deciding",
      },
    },
  },
  benefits: [
    {
      num: "01",
      title: "Lower your rate",
      description:
        "If rates have dropped since you bought, a rate-and-term refinance can lower your payment without changing your balance.",
    },
    {
      num: "02",
      title: "Cash out your equity",
      description:
        "Turn home equity into cash for renovations, debt consolidation, or other goals — while keeping one monthly payment.",
    },
    {
      num: "03",
      title: "Drop mortgage insurance",
      description:
        "If your home has gained equity, refinancing can eliminate PMI and lower your payment further.",
    },
  ],
  form: {
    submitLabel: "Get my refinance numbers",
    steps: [
      {
        type: "choice",
        title: "What's the goal of refinancing?",
        description: "This determines which refinance program fits.",
        choices: [
          {
            value: "Lower my rate",
            label: "Lower my rate",
            description: "Reduce monthly payment",
          },
          {
            value: "Cash out equity",
            label: "Cash out equity",
            description: "Get funds for other goals",
          },
          {
            value: "Shorten my term",
            label: "Shorten my term",
            description: "Pay it off faster",
          },
          {
            value: "Remove PMI",
            label: "Remove PMI",
            description: "Drop mortgage insurance",
          },
        ],
      },
      {
        type: "fields",
        title: "A bit about your current loan",
        description: "Estimates are fine.",
        fields: [
          {
            name: "lender",
            label: "Current lender",
            type: "text",
            placeholder: "e.g. Wells Fargo",
          },
          {
            name: "currentRate",
            label: "Current rate",
            type: "text",
            placeholder: "7.25%",
          },
          {
            name: "homeValue",
            label: "Estimated home value",
            type: "text",
            placeholder: "$520,000",
            fullWidth: true,
          },
        ],
      },
      loanProgramContactStep(
        "Where should Abe send your numbers?",
        "A loan officer will follow up within one business day.",
      ),
    ],
    success: {
      title: "You're all set.",
      message:
        "A Talk2Abe loan officer will reach out within one business day with your personalized refinance numbers.",
      buttons: {
        primary: "Schedule a Call",
        secondary: "Explore more loan programs",
      },
    },
    summary: [
      { label: "Goal", key: "choice" },
      { label: "Current lender", key: "lender" },
      { label: "Home value", key: "homeValue" },
    ],
    disclosure: loanProgramDisclosure,
  },
};
