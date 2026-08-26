"use client";

import { useState } from "react";

import EmptyState from "@/components/common/EmptyState";
import QuestionListItem from "@/components/questions/QuestionListItem";
// import { useLanguage } from "@/i18n/hooks";
import { cn } from "@/lib/utils";
import type { Question } from "@/types/question";

type QuestionListProps = {
  questions: Question[];
  initialLimit?: number;
  className?: string;
};

export default function QuestionList({
  questions,
  initialLimit = 8,
  className,
}: QuestionListProps) {
  // const { locale } = useLanguage();
  const locale = "en";
  const [prevQuestions, setPrevQuestions] = useState(questions);
  const [limit, setLimit] = useState(initialLimit);

  if (questions !== prevQuestions) {
    setPrevQuestions(questions);
    setLimit(initialLimit);
  }

  const visibleQuestions = questions.slice(0, limit);
  const hasMore = questions.length > limit;
  const remaining = questions.length - limit;

  return (
    <div className={cn("min-w-0", className)}>
      <div className="grid grid-cols-[minmax(0,1fr)_80px] items-baseline gap-4 border-b border-slate-200 px-5 pb-3 pt-4">
        <div className="flex min-w-0 items-baseline gap-2">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
            Questions
          </h2>
          <span className="shrink-0 text-xs text-muted">
            {questions.length} {questions.length === 1 ? "question" : "questions"}
          </span>
        </div>
        <p className="text-right text-xs font-semibold uppercase tracking-wider text-muted">
          Popular
        </p>
      </div>

      {questions.length === 0 ? (
        <EmptyState
          title="No questions found"
          description="Try adjusting your search or category filter."
        />
      ) : (
        <>
          <div className="divide-y divide-slate-200">
            {visibleQuestions.map((question) => (
              // {/* <QuestionListItem key={question.id} question={question} locale={locale} /> */}
              <QuestionListItem key={question.id} question={question} />
            ))}
          </div>

          {hasMore && (
            <div className="border-t border-slate-200 px-5 py-4 text-center">
              <button
                type="button"
                onClick={() => setLimit((current) => current + initialLimit)}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                Show{" "}
                {remaining > initialLimit ? "more" : `${remaining} more`}{" "}
                questions
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
