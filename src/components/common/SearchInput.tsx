import type { InputHTMLAttributes } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

export default function SearchInput({
  className,
  placeholder = "Search questions...",
  type = "text",
  ...props
}: SearchInputProps) {
  return (
    <div className={cn("relative", className)}>
      <Search
        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
        aria-hidden="true"
      />
      <input
        type={type}
        placeholder={placeholder}
        className="h-12 w-full rounded-full border border-slate-200 bg-white pl-11 pr-4 text-sm text-navy placeholder:text-muted/70 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 disabled:cursor-not-allowed disabled:opacity-50"
        {...props}
      />
    </div>
  );
}
