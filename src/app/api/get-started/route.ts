import { NextResponse } from "next/server";

import { ghlMappings, ghlWorkflowEnvKey } from "@/data/get-started/ghlMappings";

import type { GetStartedSubmission } from "@/types/get-started";

/**
 * GHL webhook URL
 *
 * IMPORTANT:
 * Keep this server-side.
 * Do not use NEXT_PUBLIC_GET_STARTED_WEBHOOK_URL.
 */
const GET_STARTED_WEBHOOK_URL = process.env.GET_STARTED_WEBHOOK_URL;

/**
 * Convert questionnaire answers into GHL tags.
 */
function getTags(body: Partial<GetStartedSubmission>): string[] {
  const tags = new Set<string>();

  /*
   * Goal tags
   */
  const goalTag = ghlMappings.goals[body.goal ?? ""];

  if (goalTag) {
    tags.add(goalTag);
  }

  /*
   * Borrower situation tags
   */
  const situationTag =
    ghlMappings.borrowerSituation[body.borrowerSituation ?? ""];

  if (situationTag) {
    tags.add(situationTag);
  }

  /*
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
 *
 * Workflow IDs are stored in environment variables
 * and are never exposed to the browser.
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
    /*
     * -----------------------------------------
     * CHECK GHL WEBHOOK CONFIGURATION
     * -----------------------------------------
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

    /*
     * -----------------------------------------
     * READ REQUEST BODY
     * -----------------------------------------
     */

    const body = (await request.json()) as Partial<GetStartedSubmission>;

    /*
     * -----------------------------------------
     * CONTACT INFORMATION
     * -----------------------------------------
     */

    const firstName = body.firstName?.trim();

    const lastName = body.lastName?.trim();

    const email = body.email?.trim();

    const phone = body.phone?.trim();

    const propertyState = body.propertyState?.trim();

    /*
     * -----------------------------------------
     * VALIDATION
     * -----------------------------------------
     */

    if (!firstName || !lastName || !email || !phone || !propertyState) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        {
          status: 400,
        },
      );
    }

    /*
     * Basic email validation
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

    /*
     * -----------------------------------------
     * CREATE GHL TAGS
     * -----------------------------------------
     */

    const tags = getTags(body);

    /*
     * -----------------------------------------
     * GET WORKFLOW
     * -----------------------------------------
     */

    const workflowId = getWorkflowId(tags);

    /*
     * -----------------------------------------
     * BUILD GHL PAYLOAD
     * -----------------------------------------
     */

    const payload = {
      /*
       * Contact information
       */
      firstName,
      lastName,
      email,
      phone,
      propertyState,

      /*
       * Questionnaire answers
       */
      goal: body.goal ?? "",

      propertyUse: body.propertyUse ?? "",

      processStage: body.processStage ?? "",

      propertyValue: body.propertyValue ?? "",

      financingAmount: body.financingAmount ?? "",

      borrowerSituation: body.borrowerSituation ?? "",

      creditRange: body.creditRange ?? "",

      /*
       * GHL tags
       */
      tags,

      /*
       * Optional workflow ID
       */
      ...(workflowId
        ? {
            workflowId,
          }
        : {}),

      /*
       * Lead source
       */
      source: "Talk2Abe Get Started Survey",
    };

    /*
     * -----------------------------------------
     * SERVER LOG
     * -----------------------------------------
     *
     * Do not log sensitive contact information.
     */

    console.log("Submitting Talk2Abe Get Started lead to GHL:", {
      goal: body.goal,
      propertyUse: body.propertyUse,
      processStage: body.processStage,
      borrowerSituation: body.borrowerSituation,
      creditRange: body.creditRange,
      tags,
    });

    /*
     * -----------------------------------------
     * SEND TO GHL WEBHOOK
     * -----------------------------------------
     */

    const webhookResponse = await fetch(GET_STARTED_WEBHOOK_URL, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(payload),

      cache: "no-store",
    });

    /*
     * -----------------------------------------
     * HANDLE GHL ERROR
     * -----------------------------------------
     */

    if (!webhookResponse.ok) {
      const errorText = await webhookResponse.text();

      console.error("GHL Get Started webhook error:", {
        status: webhookResponse.status,
        response: errorText,
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

    /*
     * -----------------------------------------
     * SUCCESS
     * -----------------------------------------
     */

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
    console.error("Get Started API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      {
        status: 500,
      },
    );
  }
}
