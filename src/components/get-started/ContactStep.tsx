"use client";

import { useState } from "react";
import { Phone } from "lucide-react";

import Button from "@/components/common/Button";
import ConsentText from "@/components/get-started/ConsentText";
import Alert from "@/components/common/Alert";
import { usStates } from "@/data/get-started/states";
import { cn } from "@/lib/utils";
import type { GetStartedContact } from "@/types/get-started";

type ContactStepProps = {
  contact: GetStartedContact;
  onContactChange: (contact: GetStartedContact) => void;
  onBack: () => void;
  onSubmit: (contact: GetStartedContact) => void;
  submitting: boolean;
  submitError?: string;
};

type ContactErrors = Partial<Record<keyof GetStartedContact, string>>;

const inputClasses =
  "mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-navy shadow-sm placeholder:text-slate-400 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/10 sm:text-base";

const labelClasses = "block text-sm font-semibold text-navy";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p id={id} className="mt-1.5 text-xs font-medium text-red-500">
      {message}
    </p>
  );
}

export default function ContactStep({
  contact,
  onContactChange,
  onBack,
  onSubmit,
  submitting,
  submitError,
}: ContactStepProps) {
  const [errors, setErrors] = useState<ContactErrors>({});

  const update = (field: keyof GetStartedContact, value: string) => {
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

    if (!contact.propertyState.trim()) {
      next.propertyState = "Please select a state.";
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

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <div className="text-center">
        <h2 className="text-[22px] font-bold leading-snug tracking-tight text-navy sm:text-[26px]">
          Let&apos;s Talk
        </h2>
        <p className="mt-2 text-sm text-muted sm:text-base">
          Tell me how to reach you and I&apos;ll review what you&apos;re
          looking for.
        </p>
      </div>

      <div className="mt-6 space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="min-w-0">
            <label htmlFor="gs-first-name" className={labelClasses}>
              First Name
              <span className="ml-0.5 text-brand" aria-hidden="true">*</span>
            </label>
            <input
              id="gs-first-name"
              type="text"
              autoComplete="given-name"
              value={contact.firstName}
              onChange={(event) => update("firstName", event.target.value)}
              placeholder="First Name"
              aria-invalid={Boolean(errors.firstName)}
              aria-describedby={errors.firstName ? "gs-first-name-error" : undefined}
              className={cn(
                inputClasses,
                errors.firstName && "border-red-400 focus:border-red-400 focus:ring-red-100",
              )}
            />
            <FieldError id="gs-first-name-error" message={errors.firstName} />
          </div>

          <div className="min-w-0">
            <label htmlFor="gs-last-name" className={labelClasses}>
              Last Name
              <span className="ml-0.5 text-brand" aria-hidden="true">*</span>
            </label>
            <input
              id="gs-last-name"
              type="text"
              autoComplete="family-name"
              value={contact.lastName}
              onChange={(event) => update("lastName", event.target.value)}
              placeholder="Last Name"
              aria-invalid={Boolean(errors.lastName)}
              aria-describedby={errors.lastName ? "gs-last-name-error" : undefined}
              className={cn(
                inputClasses,
                errors.lastName && "border-red-400 focus:border-red-400 focus:ring-red-100",
              )}
            />
            <FieldError id="gs-last-name-error" message={errors.lastName} />
          </div>
        </div>

        <div>
          <label htmlFor="gs-email" className={labelClasses}>
            Email
            <span className="ml-0.5 text-brand" aria-hidden="true">*</span>
          </label>
          <input
            id="gs-email"
            type="email"
            autoComplete="email"
            value={contact.email}
            onChange={(event) => update("email", event.target.value)}
            placeholder="Email Address"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "gs-email-error" : undefined}
            className={cn(
              inputClasses,
              errors.email && "border-red-400 focus:border-red-400 focus:ring-red-100",
            )}
          />
          <FieldError id="gs-email-error" message={errors.email} />
        </div>

        <div>
          <label htmlFor="gs-phone" className={labelClasses}>
            Phone
            <span className="ml-0.5 text-brand" aria-hidden="true">*</span>
          </label>
          <input
            id="gs-phone"
            type="tel"
            autoComplete="tel"
            value={contact.phone}
            onChange={(event) => update("phone", event.target.value)}
            placeholder="Phone Number"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "gs-phone-error" : undefined}
            className={cn(
              inputClasses,
              errors.phone && "border-red-400 focus:border-red-400 focus:ring-red-100",
            )}
          />
          <FieldError id="gs-phone-error" message={errors.phone} />
        </div>

        <div>
          <label htmlFor="gs-state" className={labelClasses}>
            Property State
            <span className="ml-0.5 text-brand" aria-hidden="true">*</span>
          </label>
          <select
            id="gs-state"
            value={contact.propertyState}
            onChange={(event) => update("propertyState", event.target.value)}
            aria-invalid={Boolean(errors.propertyState)}
            aria-describedby={errors.propertyState ? "gs-state-error" : undefined}
            className={cn(
              inputClasses,
              "appearance-none bg-white",
              !contact.propertyState && "text-slate-400",
              errors.propertyState && "border-red-400 focus:border-red-400 focus:ring-red-100",
            )}
          >
            <option value="" disabled>
              Select State
            </option>
            {usStates.map((state) => (
              <option key={state.value} value={state.value}>
                {state.label}
              </option>
            ))}
          </select>
          <FieldError id="gs-state-error" message={errors.propertyState} />
        </div>
      </div>

      <div className="mt-6">
        <ConsentText />
      </div>

      {submitError && (
        <Alert variant="error" className="mt-4 text-center">
          {submitError}
        </Alert>
      )}

      <div className="mt-6 grid gap-3">
        <Button type="submit" size="lg" disabled={submitting} className="w-full">
          <Phone className="h-4 w-4" aria-hidden="true" />
          {submitting ? "Sending..." : "TALK TO ABE"}
        </Button>

        <Button variant="outline" size="lg" onClick={onBack} disabled={submitting}>
          Back
        </Button>
      </div>
    </form>
  );
}
