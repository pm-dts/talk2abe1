"use client";

import { ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type AnswerOptionProps = {
  icon: LucideIcon;
  label: string;
  selected: boolean;
  onSelect: () => void;
  className?: string;
};

export default function AnswerOption({
  icon: Icon,
  label,
  selected,
  onSelect,
  className,
}: AnswerOptionProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "group flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left shadow-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-1",
        selected
          ? "border-brand bg-brand/5"
          : "border-slate-200 bg-white hover:border-brand/40 hover:bg-brand/5",
        className,
      )}
    >
      <span className="flex min-w-0 items-center gap-3">
        <Icon
          className="h-5 w-5 shrink-0 text-brand"
          strokeWidth={2}
          aria-hidden="true"
        />
        <span className="text-sm font-medium leading-snug text-navy sm:text-base">
          {label}
        </span>
      </span>

      <ChevronRight
        className={cn(
          "h-5 w-5 shrink-0 transition-colors",
          selected
            ? "text-brand"
            : "text-muted group-hover:text-brand",
        )}
        aria-hidden="true"
      />
    </button>
  );
}
