"use client";

import { useEffect, useRef, useState } from "react";

import ContactStep from "@/components/get-started/ContactStep";
import GetStartedHeader from "@/components/get-started/GetStartedHeader";
import ProgressBar from "@/components/get-started/ProgressBar";
import QuestionStep from "@/components/get-started/QuestionStep";
import QuestionnaireNavigation from "@/components/get-started/QuestionnaireNavigation";
import ThankYou from "@/components/get-started/ThankYou";
import { getStartedSteps } from "@/data/get-started/questions";
import { trackEvent } from "@/lib/analytics";
import type {
  GetStartedAnswers,
  GetStartedContact,
  GetStartedQuestionId,
  GetStartedSubmission,
} from "@/types/get-started";

const TOTAL_STEPS = getStartedSteps.length;

const initialAnswers: GetStartedAnswers = {
  goal: "",
  propertyUse: "",
  processStage: "",
  propertyValue: "",
  financingAmount: "",
  borrowerSituation: "",
  creditRange: "",
};

const initialContact: GetStartedContact = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  propertyState: "",
};

export default function GetStarted() {
  const [stepIndex, setStepIndex] = useState(0);

  const [answers, setAnswers] = useState<GetStartedAnswers>(initialAnswers);

  const [contact, setContact] = useState<GetStartedContact>(initialContact);

  const [submitted, setSubmitted] = useState(false);

  const [submitting, setSubmitting] = useState(false);

  const [submitError, setSubmitError] = useState("");

  const [validationError, setValidationError] = useState("");

  const completedTracked = useRef(false);

  useEffect(() => {
    trackEvent("questionnaire_started");
  }, []);

  const step = getStartedSteps[stepIndex];

  const isContactStep = step.type === "contact";

  const setAnswer = (field: keyof GetStartedAnswers, value: string) => {
    setAnswers((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleNext = () => {
    if (stepIndex >= TOTAL_STEPS - 1) {
      return;
    }

    const currentValue = answers[step.id as GetStartedQuestionId];

    if (!currentValue || currentValue.trim() === "") {
      setValidationError("Please select an answer to continue.");
      return;
    }

    setValidationError("");

    const nextIndex = stepIndex + 1;

    setStepIndex(nextIndex);

    if (
      getStartedSteps[nextIndex].type === "contact" &&
      !completedTracked.current
    ) {
      completedTracked.current = true;

      trackEvent("questionnaire_completed");
    }
  };

  const handleBack = () => {
    if (stepIndex === 0) {
      return;
    }

    setStepIndex((current) => current - 1);
  };

  const handleSubmit = async (contactValues: GetStartedContact) => {
    if (submitting) {
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    trackEvent("talk_to_abe_clicked");

    const submission: GetStartedSubmission = {
      ...answers,
      ...contactValues,
    };

    try {
      /**
       * ----------------------------------------
       * SEND FORM TO OUR SERVER
       * ----------------------------------------
       */

      const response = await fetch("/api/get-started", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify(submission),

        cache: "no-store",
      });

      /**
       * ----------------------------------------
       * READ RESPONSE SAFELY
       * ----------------------------------------
       *
       * Do NOT directly call response.json().
       *
       * If the deployed server returns an HTML
       * error page, response.json() throws:
       *
       * Unexpected token '<'
       *
       * We first inspect the content type.
       */

      const contentType = response.headers.get("content-type") || "";

      let result: {
        success?: boolean;
        message?: string;
        missingFields?: string[];
      } | null = null;

      if (contentType.includes("application/json")) {
        try {
          result = await response.json();
        } catch (error) {
          console.error(
            "Failed to parse JSON response from Get Started API:",
            error,
          );

          throw new Error(
            "The submission service returned an invalid response. Please try again.",
          );
        }
      } else {
        /**
         * The server returned HTML/text instead of JSON.
         *
         * This usually means:
         * - API route is missing
         * - deployment has not been rebuilt
         * - hosting is returning a 404/500 HTML page
         * - Next.js API route is not being served
         */

        const responseText = await response.text();

        console.error("Get Started API returned a non-JSON response:", {
          status: response.status,
          statusText: response.statusText,
          contentType,
          response: responseText.slice(0, 1000),
        });

        if (response.status === 404) {
          throw new Error(
            "The Get Started submission API could not be found. Please try again later.",
          );
        }

        if (response.status >= 500) {
          throw new Error(
            "The submission service is temporarily unavailable. Please try again later.",
          );
        }

        throw new Error(
          `The submission service returned an unexpected response (${response.status}). Please try again.`,
        );
      }

      /**
       * ----------------------------------------
       * HANDLE API ERROR
       * ----------------------------------------
       */

      if (!response.ok || !result?.success) {
        throw new Error(
          result?.message || "Something went wrong. Please try again.",
        );
      }

      /**
       * ----------------------------------------
       * SUCCESS
       * ----------------------------------------
       */

      trackEvent("lead_submitted");

      setSubmitted(true);
    } catch (error) {
      console.error("Get started submission failed:", error);

      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  /**
   * ----------------------------------------
   * THANK YOU
   * ----------------------------------------
   */

  if (submitted) {
    return (
      <div className="min-h-screen bg-surface">
        <GetStartedHeader />

        <div className="mx-auto w-full max-w-md px-4 pb-16 pt-10 sm:pt-14 lg:max-w-lg">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
            <ThankYou />
          </div>
        </div>
      </div>
    );
  }

  /**
   * ----------------------------------------
   * QUESTIONNAIRE
   * ----------------------------------------
   */

  return (
    <div className="min-h-screen bg-surface">
      <GetStartedHeader />

      <div className="mx-auto w-full max-w-md px-4 pb-16 pt-6 sm:pt-10 lg:max-w-lg">
        <ProgressBar currentStep={stepIndex + 1} totalSteps={TOTAL_STEPS} />

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          {isContactStep ? (
            <ContactStep
              contact={contact}
              onContactChange={setContact}
              onBack={handleBack}
              onSubmit={handleSubmit}
              submitting={submitting}
              submitError={submitError}
            />
          ) : (
            <>
              <QuestionStep
                step={step}
                value={answers[step.id as GetStartedQuestionId]}
                onChange={(value) => {
                  setAnswer(step.id as GetStartedQuestionId, value);

                  setValidationError("");
                }}
                validationError={validationError}
              />

              <QuestionnaireNavigation
                showBack={stepIndex > 0}
                onBack={handleBack}
                onContinue={handleNext}
                className="mt-8"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
