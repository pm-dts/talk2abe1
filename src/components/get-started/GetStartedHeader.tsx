"use client";

import { Phone, MessageCircle } from "lucide-react";
// import { useTranslation } from "react-i18next";

import Logo from "@/components/common/Logo";
import { cn } from "@/lib/utils";

type GetStartedHeaderProps = {
  className?: string;
};

export default function GetStartedHeader({ className }: GetStartedHeaderProps) {
  // const { t } = useTranslation();

  return (
    <header className={cn("border-b border-slate-200/70 bg-white", className)}>
      <div className="mx-auto flex w-full max-w-md items-center justify-between gap-3 px-4 py-4">
        {/* Logo */}
        <div className="min-w-0 shrink-0">
          <Logo size="sm" />

          <p className="mt-0.5 text-xs font-medium text-muted">
            {"Your Mortgage Guide"}
          </p>
        </div>

        {/* Phone Number - Same design as main Header */}
        <a
          href="tel:+13058916500"
          className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-semibold text-navy transition-colors hover:text-brand"
          aria-label={"Call (305) 891-6500"}
        >
          <Phone
            className="h-4 w-4 text-brand"
            strokeWidth={2}
            aria-hidden="true"
          />

          <span>(305) 891-6500</span>
        </a>

        {/* Ask Abe Chat Button */}
        <a
          href="/ask-abe"
          aria-label={"Ask Abe a Question"}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-brand shadow-sm transition-colors hover:border-brand/40 hover:bg-brand/5"
        >
          <MessageCircle
            className="h-5 w-5"
            strokeWidth={2}
            aria-hidden="true"
          />
        </a>
      </div>
    </header>
  );
}
