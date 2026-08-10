"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

type QuestionSearchProps = {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export default function QuestionSearch({
  id = "question-search",
  value,
  onChange,
  placeholder = "Search questions...",
  className,
}: QuestionSearchProps) {
  return (
    <div className={cn("w-full", className)}>
      <label htmlFor={id} className="sr-only">
        Search questions
      </label>
      <div className="relative">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
        />
        <input
          id={id}
          type="search"
          autoComplete="off"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-11 pr-4 text-sm text-navy placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
        />
      </div>
    </div>
  );
}
