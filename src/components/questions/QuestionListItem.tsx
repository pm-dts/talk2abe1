import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
// import { localize } from "@/i18n/helpers";
// import { DEFAULT_LOCALE, type Locale } from "@/i18n/config";
import type { Question } from "@/types/question";

type QuestionListItemProps = {
  question: Question;
  className?: string;
  // locale?: Locale;
};

export default function QuestionListItem({
  question,
  className,
  // locale = DEFAULT_LOCALE,
}: QuestionListItemProps) {
  // const title = localize(question, locale, "title");
  const title = question.title;

  return (
    <Link
      href={`/questions/${question.slug}`}
      className={cn(
        "group grid grid-cols-[minmax(0,1fr)] items-center gap-4 px-5 py-4 transition-colors hover:bg-slate-50 focus-visible:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset",
        className,
      )}
    >
      <div className="flex min-w-0 items-center justify-between gap-4">
        <div className="min-w-0">
          <h3 className="min-w-0 text-sm font-semibold leading-snug text-navy transition-colors group-hover:text-brand sm:text-base">
            {title}
          </h3>

          {question.category && (
            <p className="mt-0.5 text-xs text-muted">{question.category}</p>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {question.popular && (
            <span className="inline-flex items-center rounded-full bg-brand/10 px-2.5 py-0.5 text-[11px] font-semibold text-brand">
              Popular
            </span>
          )}

          <ChevronRight
            aria-hidden="true"
            className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-brand"
          />
        </div>
      </div>
    </Link>
  );
}
