import { NextResponse } from "next/server";

import { ghlMappings, ghlWorkflowEnvKey } from "@/data/get-started/ghlMappings";

import type { GetStartedSubmission } from "@/types/get-started";

/**
 * GHL webhook URL.
 *
 * Keep this server-side.
 *
 * Add the following to .env.local:
 *
 * GET_STARTED_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/Lv5oqPcJ6MZsszgssznB/webhook-trigger/3d1e82e7-ebf8-4ed0-a00c-3ce71030e237
 */
const GET_STARTED_WEBHOOK_URL = process.env.GET_STARTED_WEBHOOK_URL;

/**
 * Convert questionnaire answers into GHL tags.
 */
function getTags(body: Partial<GetStartedSubmission>): string[] {
  const tags = new Set<string>();

  /**
   * Goal tags
   */
  const goalTag = ghlMappings.goals[body.goal ?? ""];

  if (goalTag) {
    tags.add(goalTag);
  }

  /**
   * Borrower situation tags
   */
  const situationTag =
    ghlMappings.borrowerSituation[body.borrowerSituation ?? ""];

  if (situationTag) {
    tags.add(situationTag);
  }

  /**
   * Credit range tags
   */
  const creditTag = ghlMappings.credit[body.creditRange ?? ""];

  if (creditTag) {
    tags.add(creditTag);
  }

  return Array.from(tags);
}

/**
 * Find the workflow configured for the lead.
 */
function getWorkflowId(tags: string[]): string | undefined {
  for (const tag of tags) {
    const envKey = ghlWorkflowEnvKey[tag];

    if (!envKey) {
      continue;
    }

    const workflowId = process.env[envKey];

    if (workflowId) {
      return workflowId;
    }
  }

  return undefined;
}

export async function POST(request: Request) {
  try {
    /**
     * ----------------------------------------
     * CHECK WEBHOOK CONFIGURATION
     * ----------------------------------------
     */

    if (!GET_STARTED_WEBHOOK_URL) {
      console.error("GET_STARTED_WEBHOOK_URL is not configured.");

      return NextResponse.json(
        {
          success: false,
          message:
            "The form is temporarily unavailable. Please try again later.",
        },
        {
          status: 500,
        },
      );
    }

    /**
     * ----------------------------------------
     * READ REQUEST BODY
     * ----------------------------------------
     */

    let body: Partial<GetStartedSubmission>;

    try {
      body = (await request.json()) as Partial<GetStartedSubmission>;
    } catch (error) {
      console.error("Invalid Get Started request body:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Invalid form submission.",
        },
        {
          status: 400,
        },
      );
    }

    /**
     * ----------------------------------------
     * CONTACT INFORMATION
     * ----------------------------------------
     */

    const firstName = body.firstName?.trim();

    const lastName = body.lastName?.trim();

    const email = body.email?.trim();

    const phone = body.phone?.trim();

    const propertyState = body.propertyState?.trim();

    /**
     * ----------------------------------------
     * VALIDATE CONTACT INFORMATION
     * ----------------------------------------
     */

    if (!firstName || !lastName || !email || !phone || !propertyState) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required contact fields.",
        },
        {
          status: 400,
        },
      );
    }

    /**
     * Validate email.
     */
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailIsValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        {
          status: 400,
        },
      );
    }

    /**
     * ----------------------------------------
     * VALIDATE QUESTIONNAIRE
     * ----------------------------------------
     *
     * Every question is required.
     *
     * For the currency questions,
     * "I'm Not Sure" is also considered
     * a valid answer.
     */

    const requiredAnswers = [
      "goal",
      "propertyUse",
      "processStage",
      "propertyValue",
      "financingAmount",
      "borrowerSituation",
      "creditRange",
    ] as const;

    const missingAnswers = requiredAnswers.filter(
      (field) => !body[field] || body[field]?.trim() === "",
    );

    if (missingAnswers.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all questionnaire steps before submitting.",
          missingFields: missingAnswers,
        },
        {
          status: 400,
        },
      );
    }

    /**
     * ----------------------------------------
     * CREATE GHL TAGS
     * ----------------------------------------
     */

    const tags = getTags(body);

    /**
     * ----------------------------------------
     * FIND WORKFLOW
     * ----------------------------------------
     */

    const workflowId = getWorkflowId(tags);

    /**
     * ----------------------------------------
     * BUILD GHL PAYLOAD
     * ----------------------------------------
     */

    const payload = {
      /**
       * Contact information
       */
      firstName,
      lastName,
      email,
      phone,
      propertyState,

      /**
       * Questionnaire answers
       */
      goal: body.goal ?? "",

      propertyUse: body.propertyUse ?? "",

      processStage: body.processStage ?? "",

      propertyValue: body.propertyValue ?? "",

      financingAmount: body.financingAmount ?? "",

      borrowerSituation: body.borrowerSituation ?? "",

      creditRange: body.creditRange ?? "",

      /**
       * GHL tags
       */
      tags,

      /**
       * Workflow
       */
      ...(workflowId
        ? {
            workflowId,
          }
        : {}),

      /**
       * Lead source
       */
      source: "Talk2Abe Get Started Survey",
    };

    /**
     * Don't log PII.
     */
    console.log("Submitting Talk2Abe Get Started lead to GHL:", {
      goal: body.goal,
      propertyUse: body.propertyUse,
      processStage: body.processStage,
      borrowerSituation: body.borrowerSituation,
      creditRange: body.creditRange,
      tags,
    });

    /**
     * ----------------------------------------
     * SEND DATA TO GHL
     * ----------------------------------------
     */

    let ghlResponse: Response;

    try {
      ghlResponse = await fetch(GET_STARTED_WEBHOOK_URL, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify(payload),

        cache: "no-store",
      });
    } catch (error) {
      console.error("Unable to reach GHL webhook:", error);

      return NextResponse.json(
        {
          success: false,
          message:
            "We couldn't connect to the submission service. Please try again.",
        },
        {
          status: 502,
        },
      );
    }

    /**
     * ----------------------------------------
     * READ GHL RESPONSE SAFELY
     * ----------------------------------------
     *
     * GHL may return JSON or plain text.
     * Never assume it is JSON.
     */

    const ghlResponseText = await ghlResponse.text();

    /**
     * GHL webhook failed.
     */
    if (!ghlResponse.ok) {
      console.error("GHL webhook returned an error:", {
        status: ghlResponse.status,
        response: ghlResponseText.slice(0, 1000),
      });

      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to submit your information right now. Please try again.",
        },
        {
          status: 502,
        },
      );
    }

    /**
     * ----------------------------------------
     * SUCCESS
     * ----------------------------------------
     */

    console.log("Talk2Abe Get Started lead successfully sent to GHL.");

    return NextResponse.json(
      {
        success: true,
        message: "Your information has been received.",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    /**
     * Make absolutely sure the API always
     * returns JSON instead of an HTML error page.
     */
    console.error("Get Started API error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while submitting your information. Please try again.",
      },
      {
        status: 500,
      },
    );
  }
}
