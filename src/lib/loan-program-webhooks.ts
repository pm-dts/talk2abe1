import "server-only";

export type LoanProgramSlug =
  | "purchase-loans"
  | "refinance-loans"
  | "self-employed-loans"
  | "dscr-loans"
  | "fha-loans"
  | "va-loans"
  | "reverse-mortgages"
  | "home-equity-heloc";

export const loanProgramSlugs: readonly LoanProgramSlug[] = [
  "purchase-loans",
  "refinance-loans",
  "self-employed-loans",
  "dscr-loans",
  "fha-loans",
  "va-loans",
  "reverse-mortgages",
  "home-equity-heloc",
];

const webhookEnvBySlug: Record<LoanProgramSlug, string> = {
  "purchase-loans": "LOAN_PROGRAMS_PURCHASE_WEBHOOK_URL",
  "refinance-loans": "LOAN_PROGRAMS_REFINANCE_WEBHOOK_URL",
  "self-employed-loans": "LOAN_PROGRAMS_SELF_EMPLOYED_WEBHOOK_URL",
  "dscr-loans": "LOAN_PROGRAMS_DSCR_WEBHOOK_URL",
  "fha-loans": "LOAN_PROGRAMS_FHA_WEBHOOK_URL",
  "va-loans": "LOAN_PROGRAMS_VA_WEBHOOK_URL",
  "reverse-mortgages": "LOAN_PROGRAMS_REVERSE_MORTGAGE_WEBHOOK_URL",
  "home-equity-heloc": "LOAN_PROGRAMS_HOME_EQUITY_WEBHOOK_URL",
};

/**
 * Resolves the server-side GHL webhook URL for a loan-program slug.
 * Returns undefined when the slug is unknown or the env variable is empty.
 */
export function getLoanProgramWebhookUrl(
  slug: string,
): string | undefined {
  if (!loanProgramSlugs.includes(slug as LoanProgramSlug)) {
    return undefined;
  }

  const envName = webhookEnvBySlug[slug as LoanProgramSlug];
  const url = process.env[envName];

  return url ? url.trim() || undefined : undefined;
}
