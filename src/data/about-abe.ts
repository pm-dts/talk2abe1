import type { AboutAbe } from "@/types/about-abe";

export const aboutAbe: AboutAbe = {
  eyebrow: "About Abe",
  title: "Why Clients Choose Abe",
  introduction:
    "I don't just find loans—I find the right mortgage solution for your unique situation. With over 30 years of experience, my goal is to simplify the process, provide honest guidance, and help you close with confidence.",
  benefits: [
    {
      id: "mortgage-expertise",
      title: "30+ Years of Mortgage Expertise",
      icon: "BadgeCheck",
    },
    {
      id: "lending-partners",
      title: "Access to 100+ Lending Partners",
      icon: "Handshake",
    },
    {
      id: "fast-pre-approvals",
      title: "Fast Pre-Approvals—Often the Same Day",
      icon: "Zap",
    },
    {
      id: "loan-solutions",
      title: "Solutions for Conventional & Complex Loans",
      icon: "Layers",
    },
    {
      id: "competitive-rates",
      title: "Competitive Rates & Flexible Financing Options",
      icon: "Percent",
    },
    {
      id: "personal-guidance",
      title: "Personal Guidance from Application to Closing",
      icon: "UserRoundCheck",
    },
  ],
  howItWorks: {
    eyebrow: "How It Works",
    title: "A Simple Process. Clear Results.",
    steps: [
      {
        id: "step-1",
        step: 1,
        title: "Tell Me About Your Goals",
        description: "Complete our quick 60-second form.",
        icon: "ClipboardCheck",
      },
      {
        id: "step-2",
        step: 2,
        title: "Talk with Abe",
        description:
          "We'll review your situation and answer your questions.",
        icon: "UserRound",
      },
      {
        id: "step-3",
        step: 3,
        title: "Receive Your Best Loan Options",
        description:
          "We find the best loan options and get you pre-approved.",
        icon: "BadgeCheck",
      },
      {
        id: "step-4",
        step: 4,
        title: "Close with Confidence",
        description: "We guide you all the way to the closing table.",
        icon: "House",
      },
    ],
  },
};
