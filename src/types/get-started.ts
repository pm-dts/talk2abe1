export type GetStartedQuestionId =
  | "goal"
  | "propertyUse"
  | "processStage"
  | "propertyValue"
  | "financingAmount"
  | "borrowerSituation"
  | "creditRange";

export type GetStartedOption = {
  id: string;
  label: string;
  icon: string;
};

export type GetStartedStep = {
  id: GetStartedQuestionId | "contact";
  title: string;
  description: string;
  type: "options" | "currency" | "contact";
  options?: GetStartedOption[];
  layout?: "list" | "grid";
  placeholder?: string;
};

export type GetStartedAnswers = Record<GetStartedQuestionId, string>;

export type GetStartedContact = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  propertyState: string;
};

export type GetStartedSubmission = GetStartedAnswers & GetStartedContact;
