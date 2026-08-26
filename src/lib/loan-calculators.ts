/**
 * Pure mortgage calculator helpers for the loan program pages.
 *
 * Logic mirrors the Talk2Abe prototype's calculators so results match.
 */

export type VerdictTone = "neutral" | "success" | "warning" | "danger";

export type Verdict = {
  text: string;
  tone: VerdictTone;
};

export function formatCurrency(value: number, digits = 0, locale?: string): string {
  return value.toLocaleString(locale || "en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  });
}

export function formatRatio(value: number): string {
  return value.toFixed(2);
}

/**
 * Monthly principal & interest from loan amount, annual rate, and term.
 * Returns null when a required input is missing or zero.
 */
export function monthlyPandI(
  loanAmount: number,
  annualRatePct: number,
  termYears: number,
): number | null {
  if (!loanAmount || !annualRatePct) {
    return null;
  }

  const monthlyRate = annualRatePct / 100 / 12;
  const numPayments = termYears * 12;

  if (monthlyRate === 0) {
    return loanAmount / numPayments;
  }

  return (
    (loanAmount *
      (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
    (Math.pow(1 + monthlyRate, numPayments) - 1)
  );
}

/* -----------------------------------------
 * Purchase payment estimator
 * ----------------------------------------- */

export type PurchaseEstimateInput = {
  price: number;
  downPct: number;
  rate: number;
  termYears: number;
  taxIns: number;
};

export type PurchaseEstimateResult = {
  loanAmount: number;
  principalInterest: number;
  taxIns: number;
  totalMonthly: number;
};

export function estimatePurchasePayment(
  input: PurchaseEstimateInput,
): PurchaseEstimateResult | null {
  const { price, downPct, rate, termYears, taxIns } = input;

  if (!price || Number.isNaN(downPct) || !rate) {
    return null;
  }

  const loanAmount = price * (1 - downPct / 100);
  const principalInterest = monthlyPandI(loanAmount, rate, termYears);

  if (principalInterest === null) {
    return null;
  }

  return {
    loanAmount,
    principalInterest,
    taxIns,
    totalMonthly: principalInterest + taxIns,
  };
}

/* -----------------------------------------
 * Refinance break-even calculator
 * ----------------------------------------- */

export type RefinanceInput = {
  balance: number;
  currentPayment: number;
  newRate: number;
  closingCosts: number;
  termYears: number;
};

export type RefinanceVerdictKey = "higher" | "fast" | "moderate" | "long";

export type RefinanceResult =
  | { kind: "invalid" }
  | {
      kind: "higher-payment";
      monthlyIncrease: number;
      verdictKey: "higher";
    }
  | {
      kind: "valid";
      monthlySavings: number;
      breakevenMonths: number;
      progress: number;
      verdictKey: "fast" | "moderate" | "long";
    };

export function estimateRefinance(input: RefinanceInput): RefinanceResult {
  const { balance, currentPayment, newRate, closingCosts, termYears } = input;

  if (!balance || !currentPayment || !newRate || !closingCosts) {
    return { kind: "invalid" };
  }

  const newPayment = monthlyPandI(balance, newRate, termYears);

  if (newPayment === null) {
    return { kind: "invalid" };
  }

  const monthlySavings = currentPayment - newPayment;

  if (monthlySavings <= 0) {
    return {
      kind: "higher-payment",
      monthlyIncrease: Math.abs(monthlySavings),
      verdictKey: "higher",
    };
  }

  const breakevenMonths = Math.ceil(closingCosts / monthlySavings);
  const progress = Math.min((breakevenMonths / 48) * 100, 100);

  const verdictKey: RefinanceVerdictKey =
    breakevenMonths <= 24
      ? "fast"
      : breakevenMonths <= 48
        ? "moderate"
        : "long";

  return {
    kind: "valid",
    monthlySavings,
    breakevenMonths,
    progress,
    verdictKey,
  };
}

/* -----------------------------------------
 * DSCR live calculator
 * ----------------------------------------- */

export type DscrVerdictKey = "strong" | "qualifies" | "belowOne";

export function dscrVerdict(ratio: number): {
  key: DscrVerdictKey;
  tone: VerdictTone;
} {
  if (ratio >= 1.2) {
    return { key: "strong", tone: "success" };
  }

  if (ratio >= 1.0) {
    return { key: "qualifies", tone: "warning" };
  }

  return { key: "belowOne", tone: "danger" };
}

export function dscrProgress(ratio: number): number {
  return Math.min((ratio / 1.5) * 100, 100);
}

export type PitiEstimateInput = {
  price: number;
  downPct: number;
  rate: number;
  taxIns: number;
  termYears: number;
};

export type PitiEstimateResult = {
  loanAmount: number;
  principalInterest: number;
  taxIns: number;
  total: number;
};

export function estimatePitiBreakdown(
  input: PitiEstimateInput,
): PitiEstimateResult | null {
  const { price, downPct, rate, taxIns, termYears } = input;

  if (!price || Number.isNaN(downPct) || !rate) {
    return null;
  }

  const loanAmount = price * (1 - downPct / 100);
  const principalInterest = monthlyPandI(loanAmount, rate, termYears);

  if (principalInterest === null) {
    return null;
  }

  return {
    loanAmount,
    principalInterest,
    taxIns: taxIns || 0,
    total: principalInterest + (taxIns || 0),
  };
}

export type DscrResult = {
  ratio: number;
  progress: number;
  verdict: { key: DscrVerdictKey; tone: VerdictTone };
} | null;

export function estimateDscr(
  monthlyRent: number,
  piti: number,
): DscrResult {
  if (!monthlyRent || !piti) {
    return null;
  }

  const ratio = monthlyRent / piti;

  return {
    ratio,
    progress: dscrProgress(ratio),
    verdict: dscrVerdict(ratio),
  };
}
