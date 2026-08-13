import { loanProgramDisclosure, loanProgramContactStep } from "@/data/loan-programs/common";
import type { LoanProgram } from "@/types/loan-program";

export const reverseMortgageLoanProgram: LoanProgram = {
  id: "lp-reverse-mortgages",
  slug: "reverse-mortgages",
  route: "/loan-programs/reverse-mortgages/",
  title: "Reverse Mortgages",
  description: "Turn home equity into cash. Stay in your home.",
  icon: "reverse-mortgage",
  hero: {
    eyebrow: "Reverse Mortgages",
    title: "Turn your home equity into income — *without* a monthly payment.",
    description:
      "A reverse mortgage lets homeowners 62 and older convert home equity into cash, while continuing to live in and own their home.",
    trustPoints: ["Must be 62 or older", "Stay in your home"],
  },
  metadata: {
    title: "Reverse Mortgages",
    description:
      "A reverse mortgage lets homeowners 62 and older convert home equity into cash, while continuing to live in and own their home.",
  },
  facts: {
    title: "How It Works",
    subtitle: "A few things worth understanding upfront.",
    items: [
      "No monthly mortgage payment is required",
      "You remain on the title and continue owning your home",
      "Funds can come as a lump sum, line of credit, or monthly payments",
      "You're still responsible for property taxes, insurance, and upkeep",
    ],
    note: "This is a significant financial decision. Most FHA-insured (HECM) reverse mortgages require a session with an independent HUD-approved counselor before closing.",
  },
  benefits: [
    {
      num: "01",
      title: "No required monthly payments",
      description:
        "The loan is repaid when the home is sold, the last borrower moves out, or passes away.",
    },
    {
      num: "02",
      title: "Flexible payout options",
      description:
        "Take funds as a lump sum, a line of credit that grows over time, monthly payments, or a combination.",
    },
    {
      num: "03",
      title: "FHA-insured protection",
      description:
        "HECM reverse mortgages are federally insured, and you'll never owe more than the home is worth at sale.",
    },
  ],
  form: {
    submitLabel: "Send me more information",
    steps: [
      {
        type: "choice",
        title: "Who is this for?",
        description: "No pressure — this just helps us send the right information.",
        choices: [
          {
            value: "Myself, 62 or older",
            label: "Myself",
            description: "I'm 62 or older",
          },
          {
            value: "A parent or family member",
            label: "A family member",
            description: "Researching on their behalf",
          },
          {
            value: "Just exploring options",
            label: "Just exploring",
            description: "Not ready to decide yet",
          },
        ],
      },
      {
        type: "fields",
        title: "A bit about the home",
        description: "Estimates are fine.",
        fields: [
          {
            name: "homeValue",
            label: "Estimated home value",
            type: "text",
            placeholder: "$480,000",
          },
          {
            name: "balance",
            label: "Remaining mortgage balance",
            type: "text",
            placeholder: "$0 (or amount owed)",
          },
          {
            name: "age",
            label: "Age of youngest borrower on title",
            type: "select",
            options: ["62–64", "65–69", "70–79", "80+"],
            fullWidth: true,
          },
        ],
      },
      loanProgramContactStep(
        "Where should Abe send more information?",
        "A specialist will walk through your options — no pressure, no obligation.",
      ),
    ],
    success: {
      title: "You're all set.",
      message:
        "A reverse mortgage specialist will reach out within one business day to answer your questions — no pressure, no obligation.",
      buttons: {
        primary: "Schedule a Call",
        secondary: "Explore more loan programs",
      },
    },
    summary: [
      { label: "Inquiring for", key: "choice" },
      { label: "Home value", key: "homeValue" },
      { label: "Age range", key: "age" },
    ],
    disclosure: loanProgramDisclosure,
  },
};
