import type {
  GetStartedOption,
  GetStartedQuestionId,
} from "@/types/get-started";

export type QuestionOptionKey = Exclude<
  GetStartedQuestionId,
  "propertyValue" | "financingAmount"
>;

const goalOptions: GetStartedOption[] = [
  { id: "buy-a-home", label: "Buy a Home", icon: "house" },
  { id: "refinance", label: "Refinance", icon: "refresh" },
  { id: "access-home-equity", label: "Access Home Equity", icon: "house-plus" },
  { id: "investment-property", label: "Investment Property", icon: "building-2" },
  { id: "commercial-financing", label: "Commercial Financing", icon: "building" },
  { id: "build-or-renovate", label: "Build or Renovate", icon: "hammer" },
  { id: "reverse-mortgage", label: "Reverse Mortgage", icon: "landmark" },
  { id: "not-sure", label: "I'm Not Sure", icon: "circle-help" },
];

const propertyUseOptions: GetStartedOption[] = [
  { id: "primary-residence", label: "Primary Residence", icon: "home" },
  { id: "second-vacation-home", label: "Second / Vacation Home", icon: "sun" },
  { id: "investment-property", label: "Investment Property", icon: "building-2" },
  { id: "commercial-property", label: "Commercial Property", icon: "building" },
  { id: "already-own", label: "I Already Own the Property", icon: "key-round" },
  { id: "not-sure", label: "Not Sure", icon: "circle-help" },
];

const processStageOptions: GetStartedOption[] = [
  { id: "just-exploring", label: "Just Exploring", icon: "compass" },
  { id: "shopping-around", label: "Shopping Around", icon: "search" },
  { id: "found-a-property", label: "Found a Property", icon: "home" },
  { id: "under-contract", label: "Under Contract", icon: "file-signature" },
  { id: "already-own", label: "Already Own the Property", icon: "key-round" },
  { id: "need-help-deciding", label: "Need Help Deciding", icon: "circle-help" },
];

const borrowerSituationOptions: GetStartedOption[] = [
  { id: "w2-employee", label: "W-2 Employee", icon: "briefcase" },
  { id: "self-employed", label: "Self-Employed", icon: "user" },
  { id: "form-1099", label: "1099", icon: "file-text" },
  { id: "real-estate-investor", label: "Real Estate Investor", icon: "building-2" },
  { id: "retired", label: "Retired", icon: "coffee" },
  { id: "medical-professional", label: "Medical Professional", icon: "stethoscope" },
  { id: "itin-borrower", label: "ITIN Borrower", icon: "file-check" },
  { id: "foreign-national", label: "Foreign National", icon: "globe" },
  { id: "other", label: "Other", icon: "ellipsis" },
];

const creditRangeOptions: GetStartedOption[] = [
  { id: "excellent", label: "Excellent — 740+", icon: "badge-check" },
  { id: "good", label: "Good — 700–739", icon: "thumbs-up" },
  { id: "fair", label: "Fair — 660–699", icon: "circle-alert" },
  { id: "below-660", label: "Below 660", icon: "trending-down" },
  { id: "not-sure", label: "I'm Not Sure", icon: "circle-help" },
];

export const questionOptions: Record<
  QuestionOptionKey,
  GetStartedOption[]
> = {
  goal: goalOptions,
  propertyUse: propertyUseOptions,
  processStage: processStageOptions,
  borrowerSituation: borrowerSituationOptions,
  creditRange: creditRangeOptions,
};
