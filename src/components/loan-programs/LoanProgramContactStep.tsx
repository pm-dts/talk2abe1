"use client";

import { useState } from "react";
// import { useTranslation } from "react-i18next";

import Disclosure from "@/components/loan-programs/Disclosure";
import LoanProgramNavigation from "@/components/loan-programs/LoanProgramNavigation";
import Alert from "@/components/common/Alert";

import { cn } from "@/lib/utils";
import type {
  LoanProgramContact,
  LoanProgramFormField,
  LoanProgramFormStep,
} from "@/types/loan-program";

type LoanProgramContactStepProps = {
  idPrefix: string;
  step: Extract<LoanProgramFormStep, { type: "contact" }>;
  contact: LoanProgramContact;
  onContactChange: (contact: LoanProgramContact) => void;
  onBack: () => void;
  onSubmit: (contact: LoanProgramContact) => void;
  submitLabel: string;
  disclosure: string;
  submitting: boolean;
  submitError?: string;
};

type ContactErrors = Partial<Record<keyof LoanProgramContact, string>>;

const inputClasses =
  "mt-1.5 w-full rounded-[10px] border-[1.5px] bg-white px-3.5 py-3 font-sans text-[15px] text-navy placeholder:text-muted/50 outline-none transition focus:border-brand sm:text-base";

const labelClasses = "block text-[13.5px] font-bold text-navy";

const fieldInputMeta: Record<string, { type: string; autoComplete: string }> = {
  firstName: { type: "text", autoComplete: "given-name" },
  lastName: { type: "text", autoComplete: "family-name" },
  email: { type: "email", autoComplete: "email" },
  phone: { type: "tel", autoComplete: "tel" },
};

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p id={id} className="mt-1.5 text-xs font-medium text-danger">
      {message}
    </p>
  );
}

export default function LoanProgramContactStep({
  idPrefix,
  step,
  contact,
  onContactChange,
  onBack,
  onSubmit,
  submitLabel,
  disclosure,
  submitting,
  submitError,
}: LoanProgramContactStepProps) {
  // const { t } = useTranslation();
  const [errors, setErrors] = useState<ContactErrors>({});

  const update = (field: keyof LoanProgramContact, value: string) => {
    onContactChange({ ...contact, [field]: value });

    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const validate = (): ContactErrors => {
    const next: ContactErrors = {};

    if (!contact.firstName.trim()) {
      next.firstName = "Please enter your first name.";
    }

    if (!contact.lastName.trim()) {
      next.lastName = "Please enter your last name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email.trim())) {
      next.email = "Please enter a valid email address.";
    }

    if (!/^[0-9()\-+. ]{7,20}$/.test(contact.phone.trim())) {
      next.phone = "Please enter a valid phone number.";
    }

    return next;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    onSubmit(contact);
  };

  const renderField = (field: LoanProgramFormField) => {
    const id = `${idPrefix}-${field.name}`;
    const key = field.name as keyof LoanProgramContact;
    const error = errors[key];
    const meta = fieldInputMeta[field.name] ?? {
      type: "text",
      autoComplete: "off",
    };

    return (
      <div
        key={field.name}
        className={cn("min-w-0", field.fullWidth && "col-span-2")}
      >
        <label htmlFor={id} className={labelClasses}>
          {field.label}
          <span className="ml-0.5 text-brand" aria-hidden="true">
            *
          </span>
        </label>

        <input
          id={id}
          type={meta.type}
          autoComplete={meta.autoComplete}
          value={contact[key]}
          onChange={(event) => update(key, event.target.value)}
          placeholder={field.placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            inputClasses,
            error && "border-danger focus:border-danger",
          )}
        />

        <FieldError id={`${id}-error`} message={error} />
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <div className="text-center">
        <h2 className="font-display text-[24px] font-semibold leading-snug text-navy sm:text-[26px]">
          {step.title}
        </h2>

        <p className="mt-1.5 text-[14.5px] text-muted">
          {step.description}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3.5">
        {step.fields.map(renderField)}
      </div>

      <div className="mt-6">
        <Disclosure text={disclosure} />
      </div>

      {submitError && (
        <Alert variant="error" className="mt-4 text-center">
          {submitError}
        </Alert>
      )}

      <LoanProgramNavigation
        showBack
        onBack={onBack}
        onContinue={() => undefined}
        continueType="submit"
        continueLabel={submitting ? "Sending..." : submitLabel}
        continueDisabled={submitting}
        className="mt-7"
      />
    </form>
  );
}
