import { loanProgramDisclosure, loanProgramContactStep } from "@/data/loan-programs/common";
import type { LoanProgram } from "@/types/loan-program";

export const selfEmployedLoanProgram: LoanProgram = {
  id: "lp-self-employed-loans",
  slug: "self-employed-loans",
  route: "/loan-programs/self-employed-loans/",
  title: "Self-Employed Loans",
  description: "Solutions for business owners and 1099 earners.",
  icon: "self-employed",
  hero: {
    eyebrow: "Self-Employed Loans",
    title: "Your bank statements are your income proof — *not* your tax returns.",
    description:
      "Bank statement loans qualify you on real cash flow, not your net income after write-offs and deductions.",
    trustPoints: [
      "12 or 24-month bank statement programs",
      "No tax returns required",
    ],
  },
  metadata: {
    title: "Self-Employed Loans",
    description:
      "Bank statement loans qualify you on real cash flow, not your net income after write-offs and deductions.",
  },
  facts: {
    title: "Who This Fits",
    subtitle: "If any of this sounds like you, this program is likely a fit.",
    items: [
      "1099 contractors and freelancers",
      "Small business owners and LLC/S-corp owners",
      "Gig workers with variable monthly income",
      "Anyone whose tax returns understate real income",
    ],
    note: "Typically requires 10–20% down and 12–24 months of consistent bank deposits.",
  },
  benefits: [
    {
      num: "01",
      title: "Bank statement qualifying",
      description:
        "We average your deposits over 12 or 24 months to calculate qualifying income — no tax returns needed.",
    },
    {
      num: "02",
      title: "P&L-only options available",
      description:
        "Some programs qualify off a CPA-prepared profit & loss statement alone, no bank statements required.",
    },
    {
      num: "03",
      title: "Works for purchase or refinance",
      description:
        "Buy a new home or refinance your current one — the same bank statement approach applies either way.",
    },
  ],
  form: {
    submitLabel: "Get my quote",
    steps: [
      {
        type: "choice",
        title: "How are you paid?",
        description: "This tells us which documentation path fits best.",
        choices: [
          {
            value: "1099 contractor",
            label: "1099 contractor",
            description: "Freelance or contract work",
          },
          {
            value: "Business owner",
            label: "Business owner",
            description: "LLC, S-corp, sole prop",
          },
          {
            value: "Mix of W-2 and self-employed",
            label: "Mix of both",
            description: "W-2 plus side business",
          },
          {
            value: "Gig / seasonal income",
            label: "Gig / seasonal",
            description: "Variable monthly income",
          },
        ],
      },
      {
        type: "fields",
        title: "A bit about your business",
        description: "Estimates are fine.",
        fields: [
          {
            name: "years",
            label: "Years in business",
            type: "text",
            placeholder: "e.g. 4 years",
          },
          {
            name: "deposits",
            label: "Avg. monthly bank deposits",
            type: "text",
            placeholder: "$12,000",
          },
          {
            name: "purpose",
            label: "This loan is for",
            type: "select",
            options: [
              "Buying a new home",
              "Refinancing my current home",
              "Cash-out refinance",
            ],
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
        "A Talk2Abe loan officer will reach out within one business day to walk through your bank statement options.",
      buttons: {
        primary: "Schedule a Call",
        secondary: "Explore more loan programs",
      },
    },
    summary: [
      { label: "Pay type", key: "choice" },
      { label: "Years in business", key: "years" },
      { label: "Loan purpose", key: "purpose" },
    ],
    disclosure: loanProgramDisclosure,
  },
};
