export type AboutBenefitIcon =
  | "BadgeCheck"
  | "Handshake"
  | "Layers"
  | "Percent"
  | "UserRoundCheck"
  | "Zap";

export interface AboutBenefit {
  id: string;
  title: string;
  icon: AboutBenefitIcon;
}

export type HowItWorksIcon =
  | "ClipboardCheck"
  | "UserRound"
  | "BadgeCheck"
  | "House";

export interface HowItWorksStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: HowItWorksIcon;
}

export interface HowItWorksSection {
  eyebrow: string;
  title: string;
  steps: HowItWorksStep[];
}

export interface AboutAbe {
  eyebrow: string;
  title: string;
  introduction: string;
  benefits: AboutBenefit[];
  howItWorks: HowItWorksSection;
}
