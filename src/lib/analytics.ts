/**
 * Lightweight analytics helper for GA4.
 *
 * Only non-PII event names are sent. Never pass name, email, phone, or
 * other personal information into `trackEvent` parameters.
 */

export type AnalyticsEventName =
  | "questionnaire_started"
  | "questionnaire_completed"
  | "lead_submitted"
  | "schedule_call_clicked"
  | "talk_to_abe_clicked"
  | "loan_program_lead_started"
  | "loan_program_lead_submitted";

type AnalyticsParams = Record<
  string,
  string | number | boolean | undefined
>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(
  name: AnalyticsEventName,
  params?: AnalyticsParams,
): void {
  if (typeof window === "undefined") {
    return;
  }

  const safeParams = params ?? {};

  window.gtag?.("event", name, safeParams);
  window.dataLayer?.push({ event: name, ...safeParams });
}
