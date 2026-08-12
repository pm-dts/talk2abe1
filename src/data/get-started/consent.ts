export type GetStartedConsent = {
  heading: string;
  body: string;
  /**
   * Marked as a placeholder until the client provides the approved
   * legal copy. Do NOT ship this text as if it were legally approved.
   */
  placeholder: true;
};

export const getStartedConsent: GetStartedConsent = {
  heading: "Consent & Privacy",
  body:
    "By submitting, you agree to be contacted by Talk2Abe regarding your " +
    "mortgage inquiry. Message and data rates may apply. Standard privacy " +
    "protections apply — your information is never sold.",
  placeholder: true,
};
