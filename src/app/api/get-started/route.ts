import { NextResponse } from "next/server";

import { ghlMappings, ghlWorkflowEnvKey } from "@/data/get-started/ghlMappings";

import type { GetStartedSubmission } from "@/types/get-started";

/**
 * ----------------------------------------
 * NEXT.JS ROUTE CONFIGURATION
 * ----------------------------------------
 *
 * Explicitly use the Node.js runtime.
 *
 * This route needs server-side environment
 * variables and outbound fetch requests.
 */

export const runtime = "nodejs";

export const dynamic = "force-dynamic";

/**
 * ----------------------------------------
 * GHL WEBHOOK
 * ----------------------------------------
 *
 * IMPORTANT:
 * Keep this environment variable server-side.
 *
 * .env.local:
 *
 * GET_STARTED_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/...
 */

function getWebhookUrl(): string | undefined {
  return process.env.GET_STARTED_WEBHOOK_URL;
}

/**
 * ----------------------------------------
 * CREATE GHL TAGS
 * ----------------------------------------
 */

function getTags(body: Partial<GetStartedSubmission>): string[] {
  const tags = new Set<string>();

  /**
   * Goal
   */

  const goalTag = ghlMappings.goals[body.goal ?? ""];

  if (goalTag) {
    tags.add(goalTag);
  }

  /**
   * Borrower situation
   */

  const situationTag =
    ghlMappings.borrowerSituation[body.borrowerSituation ?? ""];

  if (situationTag) {
    tags.add(situationTag);
  }

  /**
   * Credit range
   */

  const creditTag = ghlMappings.credit[body.creditRange ?? ""];

  if (creditTag) {
    tags.add(creditTag);
  }

  return Array.from(tags);
}

/**
 * ----------------------------------------
 * FIND WORKFLOW
 * ----------------------------------------
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

/**
 * ----------------------------------------
 * POST
 * ----------------------------------------
 */

export async function POST(request: Request) {
  try {
    /**
     * ----------------------------------------
     * CHECK WEBHOOK CONFIGURATION
     * ----------------------------------------
     */

    const webhookUrl = getWebhookUrl();

    if (!webhookUrl) {
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

    const firstName = body.firstName?.trim() || "";

    const lastName = body.lastName?.trim() || "";

    const email = body.email?.trim() || "";

    const phone = body.phone?.trim() || "";

    const propertyState = body.propertyState?.trim() || "";

    /**
     * ----------------------------------------
     * VALIDATE CONTACT INFORMATION
     * ----------------------------------------
     */

    const missingContactFields: string[] = [];

    if (!firstName) {
      missingContactFields.push("firstName");
    }

    if (!lastName) {
      missingContactFields.push("lastName");
    }

    if (!email) {
      missingContactFields.push("email");
    }

    if (!phone) {
      missingContactFields.push("phone");
    }

    if (!propertyState) {
      missingContactFields.push("propertyState");
    }

    if (missingContactFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required contact fields.",
          missingFields: missingContactFields,
        },
        {
          status: 400,
        },
      );
    }

    /**
     * ----------------------------------------
     * VALIDATE EMAIL
     * ----------------------------------------
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
     * VALIDATE PHONE
     * ----------------------------------------
     *
     * Keep this aligned with ContactStep.
     */

    const phoneIsValid = /^[0-9()\-+. ]{7,20}$/.test(phone);

    if (!phoneIsValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid phone number.",
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
     * Every questionnaire field is required.
     *
     * "I'm Not Sure" remains a valid value because
     * it is a non-empty string.
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

    const missingAnswers = requiredAnswers.filter((field) => {
      const value = body[field];

      return !value || typeof value !== "string" || value.trim() === "";
    });

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
       * Contact
       */

      firstName,

      lastName,

      email,

      phone,

      propertyState,

      /**
       * Questionnaire
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
       *
       * Only include this when one was found.
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
     * ----------------------------------------
     * SERVER LOGGING
     * ----------------------------------------
     *
     * Do NOT log PII such as:
     * - name
     * - email
     * - phone
     */

    console.log("Submitting Talk2Abe Get Started lead to GHL:", {
      goal: body.goal,
      propertyUse: body.propertyUse,
      processStage: body.processStage,
      propertyValue: body.propertyValue,
      financingAmount: body.financingAmount,
      borrowerSituation: body.borrowerSituation,
      creditRange: body.creditRange,
      propertyState,
      tags,
      workflowConfigured: Boolean(workflowId),
    });

    /**
     * ----------------------------------------
     * SEND TO GHL
     * ----------------------------------------
     */

    let ghlResponse: Response;

    try {
      ghlResponse = await fetch(webhookUrl, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",

          Accept: "application/json, text/plain, */*",
        },

        body: JSON.stringify(payload),

        cache: "no-store",
      });
    } catch (error) {
      /**
       * Network/DNS/connection error.
       */

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
     * NEVER assume GHL returns JSON.
     *
     * GHL may return:
     *
     * - JSON
     * - text
     * - empty response
     * - HTML
     */

    let ghlResponseText = "";

    try {
      ghlResponseText = await ghlResponse.text();
    } catch (error) {
      console.error("Unable to read GHL response:", error);
    }

    /**
     * ----------------------------------------
     * HANDLE GHL ERROR
     * ----------------------------------------
     */

    if (!ghlResponse.ok) {
      console.error("GHL webhook returned an error:", {
        status: ghlResponse.status,
        statusText: ghlResponse.statusText,
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
     * GHL SUCCESS
     * ----------------------------------------
     */

    console.log("Talk2Abe Get Started lead successfully sent to GHL.", {
      status: ghlResponse.status,
    });

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
     * ----------------------------------------
     * FINAL ERROR HANDLER
     * ----------------------------------------
     *
     * This guarantees that errors thrown
     * inside this route are returned as JSON.
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
