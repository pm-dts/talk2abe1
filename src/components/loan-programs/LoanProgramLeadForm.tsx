"use client";

import { useRef, useState } from "react";

import ChoiceField from "@/components/loan-programs/ChoiceField";
import LoanProgramContactStep from "@/components/loan-programs/LoanProgramContactStep";
import LoanProgramField from "@/components/loan-programs/LoanProgramField";
import LoanProgramNavigation from "@/components/loan-programs/LoanProgramNavigation";
import LoanProgramProgress from "@/components/loan-programs/LoanProgramProgress";
import LoanProgramSuccess from "@/components/loan-programs/LoanProgramSuccess";
import { trackEvent } from "@/lib/analytics";
import type {
  LoanProgram,
  LoanProgramContact,
} from "@/types/loan-program";

type LoanProgramSubmitResponse = {
  success: boolean;
  error?: string;
};

const initialContact: LoanProgramContact = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

type LoanProgramLeadFormProps = {
  program: LoanProgram;
};

export default function LoanProgramLeadForm({
  program,
}: LoanProgramLeadFormProps) {
  const [stepIndex, setStepIndex] = useState(0);

  const [choiceValue, setChoiceValue] = useState("");

  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});

  const [contact, setContact] = useState<LoanProgramContact>(initialContact);

  const [validationError, setValidationError] = useState("");

  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<string, string>>
  >({});

  const [submitted, setSubmitted] = useState(false);

  const [submitting, setSubmitting] = useState(false);

  const [submitError, setSubmitError] = useState("");

  const startedTracked = useRef(false);

  const step = program.form.steps[stepIndex];

  const idPrefix = `lp-${program.id}`;

  const goToStep = (nextIndex: number) => {
    setStepIndex(nextIndex);

    if (nextIndex === 2 && !startedTracked.current) {
      startedTracked.current = true;
      trackEvent("loan_program_lead_started", { program: program.slug });
    }
  };

  const handleNext = () => {
    if (step.type === "choice") {
      if (!choiceValue) {
        setValidationError("Please select an option to continue.");
        return;
      }

      setValidationError("");
      goToStep(1);
      return;
    }

    if (step.type === "fields") {
      const nextErrors: Record<string, string> = {};

      for (const field of step.fields) {
        if (!(fieldValues[field.name] ?? "").trim()) {
          nextErrors[field.name] = "This field is required.";
        }
      }

      setFieldErrors(nextErrors);

      if (Object.keys(nextErrors).length > 0) {
        return;
      }

      goToStep(2);
    }
  };

  const handleBack = () => {
    if (stepIndex === 0) {
      return;
    }

    setStepIndex((current) => current - 1);
  };

  const setField = (name: string, value: string) => {
    setFieldValues((current) => ({ ...current, [name]: value }));

    if (fieldErrors[name]) {
      setFieldErrors((current) => ({ ...current, [name]: undefined }));
    }
  };

  const handleSubmit = async (contactValues: LoanProgramContact) => {
    if (submitting) {
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    const payload = {
      program: program.title,
      programSlug: program.slug,
      choice: choiceValue,
      ...fieldValues,
      ...contactValues,
      source: "Talk2Abe Loan Program Form",
    };

    try {
      const response = await fetch("/api/loan-programs/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => null)) as
        | LoanProgramSubmitResponse
        | null;

      if (!response.ok || !data?.success) {
        throw new Error(
          data?.error ??
            "Something went wrong while sending your information. Please try again.",
        );
      }

      trackEvent("loan_program_lead_submitted", {
        program: program.slug,
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Loan program submission failed:", error);

      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your information. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const pairedFields = step.type === "fields"
    ? step.fields.filter((field) => !field.fullWidth)
    : [];

  const fullWidthFields = step.type === "fields"
    ? step.fields.filter((field) => field.fullWidth)
    : [];

  return (
    <section>
      <div className="mx-auto w-full max-w-[640px] rounded-[20px] border border-line bg-white p-8 sm:p-10">
        {submitted ? (
          <LoanProgramSuccess
            program={program}
            choiceValue={choiceValue}
            fieldValues={fieldValues}
            contact={contact}
          />
        ) : (
          <>
            <LoanProgramProgress
              currentStep={stepIndex + 1}
              totalSteps={3}
              className="mb-8"
            />

            {step.type === "choice" && (
              <>
                <ChoiceField
                  step={step}
                  value={choiceValue}
                  onChange={(value) => {
                    setChoiceValue(value);
                    setValidationError("");
                  }}
                  error={validationError}
                />

                <LoanProgramNavigation
                  showBack={false}
                  onBack={handleBack}
                  onContinue={handleNext}
                  className="mt-7"
                />
              </>
            )}

            {step.type === "fields" && (
              <>
                <div className="text-center">
                  <h2 className="font-display text-[24px] font-semibold leading-snug text-navy sm:text-[26px]">
                    {step.title}
                  </h2>

                  <p className="mt-1.5 text-[14.5px] text-muted">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 space-y-[18px]">
                  <div className="grid grid-cols-2 gap-3.5">
                    {pairedFields.map((field) => (
                      <LoanProgramField
                        key={field.name}
                        idPrefix={idPrefix}
                        field={field}
                        value={fieldValues[field.name] ?? ""}
                        onChange={(value) => setField(field.name, value)}
                        error={fieldErrors[field.name]}
                      />
                    ))}
                  </div>

                  {fullWidthFields.map((field) => (
                    <LoanProgramField
                      key={field.name}
                      idPrefix={idPrefix}
                      field={field}
                      value={fieldValues[field.name] ?? ""}
                      onChange={(value) => setField(field.name, value)}
                      error={fieldErrors[field.name]}
                    />
                  ))}
                </div>

                <LoanProgramNavigation
                  showBack
                  onBack={handleBack}
                  onContinue={handleNext}
                  className="mt-7"
                />
              </>
            )}

            {step.type === "contact" && (
              <LoanProgramContactStep
                idPrefix={idPrefix}
                step={step}
                contact={contact}
                onContactChange={setContact}
                onBack={handleBack}
                onSubmit={handleSubmit}
                submitLabel={program.form.submitLabel}
                disclosure={program.form.disclosure}
                submitting={submitting}
                submitError={submitError}
              />
            )}
          </>
        )}
      </div>
    </section>
  );
}
