export type AboutBenefitIcon =
  | "BadgeCheck"
  | "Handshake"
  | "Layers"
  | "MessageCircle"
  | "UserRoundCheck";

export interface AboutBenefit {
  id: string;
  title: string;
  description: string;
  icon: AboutBenefitIcon;
}

export interface AboutTextSection {
  title: string;
  paragraphs: string[];
}

export interface AboutAbe {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  experience: AboutTextSection;
  benefitsTitle: string;
  benefits: AboutBenefit[];
  whyCreated: AboutTextSection;
  letsTalk: AboutTextSection;
}
