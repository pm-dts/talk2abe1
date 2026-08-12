/**
 * GHL mappings for the Talk2Abe Get Started questionnaire.
 *
 * Keep GHL-specific names in this file so the UI does not need
 * to know anything about CRM tags or workflow configuration.
 */

export type GoalTag = string;

export const ghlMappings = {
  /*
   * -----------------------------------------
   * GOAL
   * -----------------------------------------
   */

  goals: {
    "Buy a Home": "Purchase",

    Refinance: "Refinance",

    "Access Home Equity": "Equity",

    "Investment Property": "Investment",

    "Commercial Financing": "Commercial",

    "Build or Renovate": "Construction",

    "Reverse Mortgage": "Reverse Mortgage",
  } as Record<string, GoalTag>,

  /*
   * -----------------------------------------
   * BORROWER SITUATION
   * -----------------------------------------
   */

  borrowerSituation: {
    "Self-Employed": "Self-Employed",

    "Medical Professional":
      "Medical Professional",

    "ITIN Borrower": "ITIN",

    "Foreign National":
      "Foreign National",
  } as Record<string, GoalTag>,

  /*
   * -----------------------------------------
   * CREDIT
   * -----------------------------------------
   */

  credit: {
    "Excellent — 740+":
      "Credit Excellent",

    "Good — 700–739":
      "Credit Good",

    "Fair — 660–699":
      "Credit Fair",

    "Below 660":
      "Credit Below 660",

    "I'm Not Sure":
      "Credit Unknown",
  } as Record<string, GoalTag>,
};

/**
 * Workflow environment variables.
 *
 * Example:
 *
 * GHL_WORKFLOW_PURCHASE=xxxxxxxx
 *
 * Do not put workflow IDs directly inside
 * client-side components.
 */
export const ghlWorkflowEnvKey: Record<
  string,
  string
> = {
  Purchase:
    "GHL_WORKFLOW_PURCHASE",

  Refinance:
    "GHL_WORKFLOW_REFINANCE",

  Equity:
    "GHL_WORKFLOW_EQUITY",

  Investment:
    "GHL_WORKFLOW_INVESTMENT",

  Commercial:
    "GHL_WORKFLOW_COMMERCIAL",

  Construction:
    "GHL_WORKFLOW_CONSTRUCTION",

  "Reverse Mortgage":
    "GHL_WORKFLOW_REVERSE_MORTGAGE",

  "Self-Employed":
    "GHL_WORKFLOW_SELF_EMPLOYED",

  "Medical Professional":
    "GHL_WORKFLOW_MEDICAL_PROFESSIONAL",

  ITIN:
    "GHL_WORKFLOW_ITIN",

  "Foreign National":
    "GHL_WORKFLOW_FOREIGN_NATIONAL",
};