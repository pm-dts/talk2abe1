import { loanProgramDisclosure, loanProgramContactStep } from "@/data/loan-programs/common";
import type { LoanProgram } from "@/types/loan-program";

export const vaLoanProgram: LoanProgram = {
  id: "lp-va-loans",
  slug: "va-loans",
  route: "/loan-programs/va-loans/",
  title: "VA Loans",
  description: "Zero down payment for qualified veterans.",
  icon: "va",
  hero: {
    eyebrow: "VA Loans",
    title: "Zero down. Zero PMI. *Earned* through service.",
    description:
      "VA loans give qualified veterans, service members, and their families a benefit few other loans can match: no down payment and no monthly mortgage insurance.",
    trustPoints: [
      "No down payment required",
      "No monthly mortgage insurance",
    ],
  },
  metadata: {
    title: "VA Loans",
    description:
      "VA loans give qualified veterans, service members, and their families a benefit few other loans can match: no down payment and no monthly mortgage insurance.",
  },
  facts: {
    title: "Who Qualifies",
    subtitle: "VA loan eligibility generally covers:",
    items: [
      "Active duty service members",
      "Veterans who meet service length requirements",
      "National Guard and Reserve members",
      "Certain surviving spouses",
    ],
    note: "A Certificate of Eligibility (COE) confirms your benefit — we can help you pull yours if you don't have it.",
  },
  benefits: [
    {
      num: "01",
      title: "Zero down payment",
      description:
        "Finance up to 100% of the purchase price with no down payment required for most eligible borrowers.",
    },
    {
      num: "02",
      title: "No monthly mortgage insurance",
      description:
        "Unlike FHA or low-down conventional loans, VA loans don't require ongoing monthly mortgage insurance.",
    },
    {
      num: "03",
      title: "Reusable benefit",
      description:
        "Your VA loan entitlement can often be reused for future home purchases, even after paying off a VA loan.",
    },
  ],
  form: {
    submitLabel: "Get my VA quote",
    steps: [
      {
        type: "choice",
        title: "What's your service status?",
        description: "This helps confirm your VA loan eligibility.",
        choices: [
          {
            value: "Active duty",
            label: "Active duty",
            description: "Currently serving",
          },
          {
            value: "Veteran",
            label: "Veteran",
            description: "Previously served",
          },
          {
            value: "National Guard or Reserve",
            label: "Guard / Reserve",
            description: "Current or former",
          },
          {
            value: "Surviving spouse",
            label: "Surviving spouse",
            description: "Of a veteran",
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
            placeholder: "$350,000 – $450,000",
          },
          {
            name: "coe",
            label: "Do you have your COE?",
            type: "select",
            options: [
              "Yes, I have it",
              "No, I need help getting it",
              "Not sure",
            ],
          },
          {
            name: "purpose",
            label: "This loan is for",
            type: "select",
            options: [
              "Buying a new home",
              "Refinancing my current home",
              "IRRRL (VA streamline refinance)",
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
        "A Talk2Abe loan officer will reach out within one business day. Thank you for your service.",
      buttons: {
        primary: "Schedule a Call",
        secondary: "Explore more loan programs",
      },
    },
    summary: [
      { label: "Status", key: "choice" },
      { label: "Target price", key: "targetPrice" },
      { label: "Has COE", key: "coe" },
    ],
    disclosure: loanProgramDisclosure,
  },
};
