import { Phone } from "lucide-react";

import Logo from "@/components/common/Logo";
// import { getStartedConfig } from "@/data/get-started/config";
import { cn } from "@/lib/utils";

type GetStartedHeaderProps = {
  className?: string;
};

export default function GetStartedHeader({
  className,
}: GetStartedHeaderProps) {
  return (
    <header
      className={cn(
        "border-b border-slate-200/70 bg-white",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-md items-center justify-between gap-4 px-4 py-4">
        <div className="min-w-0">
          <Logo size="sm" />
          <p className="mt-0.5 text-xs font-medium text-muted">
            Your Mortgage Guide
          </p>
        </div>

        <a
          href="/ask-abe"
          aria-label="Ask Abe a Question"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-brand shadow-sm transition-colors hover:border-brand/40 hover:bg-brand/5"
        >
          <Phone className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
