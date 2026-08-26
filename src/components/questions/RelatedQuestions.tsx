"use client";

import { useTranslation } from "react-i18next";
import QuestionListItem from "@/components/questions/QuestionListItem";
import { useLanguage } from "@/i18n/hooks";
import { cn } from "@/lib/utils";
import type { Question } from "@/types/question";

type RelatedQuestionsProps = {
  questions: Question[];
  title?: string;
  limit?: number;
  className?: string;
};

export default function RelatedQuestions({
  questions,
  title,
  limit = 3,
  className,
}: RelatedQuestionsProps) {
  const { t } = useTranslation();
  const { locale } = useLanguage();
  const visibleQuestions = questions.slice(0, limit);

  if (visibleQuestions.length === 0) {
    return null;
  }

  return (
    <section className={cn(className)}>
      <h2 className="mb-5 text-xl font-semibold text-navy sm:text-2xl">
        {title ?? t("questions.detail.relatedQuestions")}
      </h2>
      <div className="divide-y divide-slate-200">
        {visibleQuestions.map((question) => (
          <QuestionListItem key={question.id} question={question} locale={locale} />
        ))}
      </div>
    </section>
  );
}
