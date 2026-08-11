import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Question } from "@/types/question";

type QuestionListItemProps = {
  question: Question;
  className?: string;
};

export default function QuestionListItem({
  question,
  className,
}: QuestionListItemProps) {
  return (
    <Link
      href={`/ask-abe/${question.slug}`}
      className={cn(
        "group grid grid-cols-[minmax(0,1fr)] items-center gap-4 px-5 py-4 transition-colors hover:bg-slate-50 focus-visible:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset",
        className,
      )}
    >
      <div className="flex min-w-0 items-center justify-between gap-4">
        <h3 className="min-w-0 text-sm font-semibold leading-snug text-navy transition-colors group-hover:text-brand sm:text-base">
          {question.title}
        </h3>
        <ChevronRight
          aria-hidden="true"
          className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-brand"
        />
      </div>
    </Link>
  );
}
