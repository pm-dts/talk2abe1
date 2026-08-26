"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import Container from "@/components/common/Container";
import QuestionCard from "@/components/home/QuestionCard";
import { questions } from "@/data/questions";
import { useLanguage } from "@/i18n/hooks";
import type { Question } from "@/types/question";

const POPULAR_SLUGS = [
  "how-much-house-can-i-afford",
  "when-does-refinancing-a-mortgage-make-sense",
  "can-i-get-a-mortgage-if-im-self-employed",
  "what-is-a-dscr-loan",
  "can-i-access-my-home-equity-without-refinancing",
  "how-does-a-reverse-mortgage-work",
  "are-there-really-grants-for-buying-a-home",
] as const;

const popularQuestions = POPULAR_SLUGS.map((slug) =>
  questions.find((question) => question.slug === slug),
).filter((question): question is Question => Boolean(question));

export default function PopularQuestions() {
  const { t } = useTranslation();
  const { locale } = useLanguage();

  if (popularQuestions.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-6 lg:py-8">
      <Container>
        <div className="mb-7 flex items-center justify-between gap-4 sm:mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            {t("home.popularQuestions.title")}
          </h2>

          <Link
            href="/questions"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand transition-colors sm:text-base"
          >
            <span>{t("home.popularQuestions.viewAll")}</span>

            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {popularQuestions.map((question) => (
            <QuestionCard key={question.id} question={question} locale={locale} />
          ))}
          <QuestionCard more />
        </div>
      </Container>
    </section>
  );
}
