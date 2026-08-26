"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import Alert from "@/components/common/Alert";
import Button from "@/components/common/Button";

const CONTACT_WEBHOOK_URL = process.env
  .NEXT_PUBLIC_CONTACT_WEBHOOK_URL as string;

type ContactFormProps = {
  className?: string;
};

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const inputClasses =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-navy shadow-sm placeholder:text-slate-400 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/10 sm:text-base";

const labelClasses = "block text-sm font-semibold text-navy";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p id={id} className="mt-1.5 text-xs text-red-500">
      {message}
    </p>
  );
}

export default function ContactForm({ className = "" }: ContactFormProps) {
  const { t } = useTranslation();
  const [values, setValues] = useState<ContactFormValues>(initialValues);

  const [errors, setErrors] = useState<ContactFormErrors>({});

  const [submitted, setSubmitted] = useState(false);

  const [submitting, setSubmitting] = useState(false);

  const [submitError, setSubmitError] = useState("");

  const handleChange =
    (field: keyof ContactFormValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((current) => ({
        ...current,
        [field]: event.target.value,
      }));

      if (errors[field]) {
        setErrors((current) => ({
          ...current,
          [field]: undefined,
        }));
      }

      if (submitError) {
        setSubmitError("");
      }

      if (submitted) {
        setSubmitted(false);
      }
    };

  const validate = (): ContactFormErrors => {
    const next: ContactFormErrors = {};

    if (!values.name.trim()) {
      next.name = t("contact.form.validation.name");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = t("contact.form.validation.email");
    }

    if (!values.phone.trim()) {
      next.phone = t("contact.form.validation.phone");
    }

    if (!values.message.trim()) {
      next.message = t("contact.form.validation.message");
    }

    return next;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate();

    setErrors(nextErrors);
    setSubmitted(false);
    setSubmitError("");

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          message: values.message.trim(),
          source: "Talk2Abe Contact Form",
        }),
      });

      if (!response.ok) {
        throw new Error(t("contact.form.sendFailed"));
      }

      setSubmitted(true);

      setValues(initialValues);
      setErrors({});
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setSubmitError(
        error instanceof Error
          ? error.message
          : t("contact.form.unexpectedError"),
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`box-border w-full max-w-full ${className}`}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Name */}
        <div className="min-w-0">
          <label htmlFor="contact-name" className={labelClasses}>
            {t("contact.form.name")}
            <span className="ml-0.5 text-brand" aria-hidden="true">
              *
            </span>
          </label>

          <input
            id="contact-name"
            type="text"
            name="name"
            autoComplete="name"
            required
            value={values.name}
            onChange={handleChange("name")}
            placeholder={t("contact.form.namePlaceholder")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={`mt-1.5 ${inputClasses} ${
              errors.name
                ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                : ""
            }`}
          />

          <FieldError id="contact-name-error" message={errors.name} />
        </div>

        {/* Email */}
        <div className="min-w-0">
          <label htmlFor="contact-email" className={labelClasses}>
            {t("contact.form.email")}
            <span className="ml-0.5 text-brand" aria-hidden="true">
              *
            </span>
          </label>

          <input
            id="contact-email"
            type="email"
            name="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={handleChange("email")}
            placeholder={t("contact.form.emailPlaceholder")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={`mt-1.5 ${inputClasses} ${
              errors.email
                ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                : ""
            }`}
          />

          <FieldError id="contact-email-error" message={errors.email} />
        </div>

        {/* Contact Number */}
        <div className="min-w-0 sm:col-span-2">
          <label htmlFor="contact-phone" className={labelClasses}>
            {t("contact.form.phone")}
            <span className="ml-0.5 text-brand" aria-hidden="true">
              *
            </span>
          </label>

          <input
            id="contact-phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            required
            value={values.phone}
            onChange={handleChange("phone")}
            placeholder={t("contact.form.phonePlaceholder")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
            className={`mt-1.5 ${inputClasses} ${
              errors.phone
                ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                : ""
            }`}
          />

          <FieldError id="contact-phone-error" message={errors.phone} />
        </div>

        {/* Message */}
        <div className="min-w-0 sm:col-span-2">
          <label htmlFor="contact-message" className={labelClasses}>
            {t("contact.form.message")}
            <span className="ml-0.5 text-brand" aria-hidden="true">
              *
            </span>
          </label>

          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            value={values.message}
            onChange={handleChange("message")}
            placeholder={t("contact.form.messagePlaceholder")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "contact-message-error" : undefined
            }
            className={`mt-1.5 resize-y ${inputClasses} ${
              errors.message
                ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                : ""
            }`}
          />

          <FieldError id="contact-message-error" message={errors.message} />
        </div>
      </div>

      <div className="mt-6">
        <Button type="submit" size="lg" disabled={submitting}>
          {submitting ? t("contact.form.sending") : t("contact.form.submit")}
        </Button>
      </div>

      {submitError && (
        <Alert variant="error" className="mt-4">
          {t("contact.form.sendFailed")}
        </Alert>
      )}

      {submitted && (
        <Alert variant="success" className="mt-4">
          {t("contact.form.success")}
        </Alert>
      )}
    </form>
  );
}
