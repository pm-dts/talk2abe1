import { NextResponse } from "next/server";

import {
  getLoanProgramWebhookUrl,
  loanProgramSlugs,
  type LoanProgramSlug,
} from "@/lib/loan-program-webhooks";

type LoanProgramSubmitBody = {
  programSlug?: unknown;
  program?: unknown;
  choice?: unknown;
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  phone?: unknown;
  source?: unknown;
  [key: string]: unknown;
};

type LoanProgramSubmitResponse = {
  success: boolean;
  error?: string;
};

const UNCONFIGURED_ERROR =
  "This form is not available right now. Please try again later.";

const GENERIC_ERROR =
  "Something went wrong while sending your information. Please try again.";

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: LoanProgramSubmitBody;

  try {
    body = (await request.json()) as LoanProgramSubmitBody;
  } catch {
    return NextResponse.json<LoanProgramSubmitResponse>(
      { success: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const {
    programSlug,
    program,
    choice,
    firstName,
    lastName,
    email,
    phone,
    source,
    ...fieldValues
  } = body;

  if (
    !isNonEmptyString(programSlug) ||
    !loanProgramSlugs.includes(programSlug as LoanProgramSlug)
  ) {
    return NextResponse.json<LoanProgramSubmitResponse>(
      { success: false, error: "Invalid loan program." },
      { status: 400 },
    );
  }

  if (!isNonEmptyString(firstName)) {
    return NextResponse.json<LoanProgramSubmitResponse>(
      { success: false, error: "First name is required." },
      { status: 400 },
    );
  }

  if (!isNonEmptyString(lastName)) {
    return NextResponse.json<LoanProgramSubmitResponse>(
      { success: false, error: "Last name is required." },
      { status: 400 },
    );
  }

  if (!isNonEmptyString(email) || !isValidEmail(email.trim())) {
    return NextResponse.json<LoanProgramSubmitResponse>(
      { success: false, error: "A valid email is required." },
      { status: 400 },
    );
  }

  if (!isNonEmptyString(phone)) {
    return NextResponse.json<LoanProgramSubmitResponse>(
      { success: false, error: "Phone number is required." },
      { status: 400 },
    );
  }

  const webhookUrl = getLoanProgramWebhookUrl(programSlug);

  if (!webhookUrl) {
    return NextResponse.json<LoanProgramSubmitResponse>(
      { success: false, error: UNCONFIGURED_ERROR },
      { status: 503 },
    );
  }

  const payload = {
    program: isNonEmptyString(program) ? program : "",
    programSlug,
    choice: isNonEmptyString(choice) ? choice : "",
    ...fieldValues,
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: email.trim(),
    phone: phone.trim(),
    source: isNonEmptyString(source)
      ? source
      : "Talk2Abe Loan Program Form",
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/plain, */*",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return NextResponse.json<LoanProgramSubmitResponse>(
        { success: false, error: GENERIC_ERROR },
        { status: 502 },
      );
    }

    return NextResponse.json<LoanProgramSubmitResponse>({
      success: true,
    });
  } catch (error) {
    console.error("GHL loan-program webhook request failed:", error);

    return NextResponse.json<LoanProgramSubmitResponse>(
      { success: false, error: GENERIC_ERROR },
      { status: 500 },
    );
  }
}
