import type { LoanProgram } from "@/types/loan-program";

export const loanPrograms: LoanProgram[] = [
  {
    id: "lp-purchase-loans",
    slug: "purchase-loans",
    title: "Purchase Loans",
    description: "Find the right loan to buy your next home.",
    icon: "purchase",
  },
  {
    id: "lp-refinance-loans",
    slug: "refinance-loans",
    title: "Refinance Loans",
    description: "Lower your rate, reduce your payment, or cash out.",
    icon: "refinance",
  },
  {
    id: "lp-self-employed-loans",
    slug: "self-employed-loans",
    title: "Self-Employed Loans",
    description: "Solutions for business owners and 1099 earners.",
    icon: "self-employed",
  },
  {
    id: "lp-dscr-loans",
    slug: "dscr-loans",
    title: "DSCR Loans",
    description: "For real estate investors. No income verification.",
    icon: "dscr",
  },
  {
    id: "lp-fha-loans",
    slug: "fha-loans",
    title: "FHA Loans",
    description: "Low down payment options available.",
    icon: "fha",
  },
  {
    id: "lp-va-loans",
    slug: "va-loans",
    title: "VA Loans",
    description: "Zero down payment for qualified veterans.",
    icon: "va",
  },
  {
    id: "lp-reverse-mortgages",
    slug: "reverse-mortgages",
    title: "Reverse Mortgages",
    description: "Turn home equity into cash. Stay in your home.",
    icon: "reverse-mortgage",
  },
  {
    id: "lp-home-equity-loans",
    slug: "home-equity-loans",
    title: "Home Equity Loans & HELOCs",
    description: "Access the equity in your home.",
    icon: "home-equity",
  },
];
