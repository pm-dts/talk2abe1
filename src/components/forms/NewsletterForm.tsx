"use client";

import { useState } from "react";
// import { useTranslation } from "react-i18next";

import Alert from "@/components/common/Alert";

type NewsletterFormProps = {
  className?: string;
  stacked?: boolean;
};

type Status = "idle" | "error" | "success";

export default function NewsletterForm({
  className = "",
  stacked = false,
}: NewsletterFormProps) {
  // const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    if (!isValid) {
      setStatus("error");
      return;
    }

    // TODO: Connect newsletter subscription to backend API.
    setStatus("success");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`box-border w-full max-w-full ${className}`}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>

      <div
        className={`
          box-border
          flex
          w-full
          max-w-full
          overflow-hidden
          rounded-md
          border
          border-white/10
          ${stacked ? "flex-col sm:h-10 sm:flex-row" : "h-10 flex-row"}
        `}
      >
        {/* Email Input */}
        <input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);

            if (status !== "idle") {
              setStatus("idle");
            }
          }}
          placeholder={"Enter your email"}
          aria-invalid={status === "error"}
          aria-describedby={
            status === "error"
              ? "newsletter-error"
              : status === "success"
                ? "newsletter-success"
                : undefined
          }
          className={`
            box-border
            min-w-0
            max-w-full
            flex-1
            border-0
            bg-white
            px-3
            text-sm
            text-navy
            placeholder:text-slate-400
            outline-none
            focus:border-0
            focus:outline-none
            focus:ring-0

            ${
              stacked
                ? "h-12 min-h-12 w-full sm:h-full sm:min-h-0 sm:w-auto"
                : "h-full"
            }

            sm:px-4
            sm:text-sm
          `}
        />

        {/* Subscribe Button */}
        <button
          type="submit"
          className={`
            shrink-0
            border-0
            bg-brand
            px-5
            text-sm
            font-semibold
            text-white
            transition-colors
            hover:bg-brand/90
            focus:outline-none
            focus:ring-2
            focus:ring-brand
            focus:ring-inset

            ${
              stacked
                ? "h-12 min-h-12 w-full sm:h-full sm:min-h-0 sm:w-auto"
                : "h-full"
            }
          `}
        >
          Subscribe
        </button>
      </div>

      {status === "error" && (
        <Alert variant="error" className="mt-2" id="newsletter-error">
          Please enter a valid email address.
        </Alert>
      )}

      {status === "success" && (
        <Alert variant="success" className="mt-2" id="newsletter-success">
          Thanks! You are subscribed to Abe's mortgage tips.
        </Alert>
      )}
    </form>
  );
}
