import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/common/Container";
import QuestionCard from "@/components/home/QuestionCard";
import { questions } from "@/data/questions";
import type { Question } from "@/types/question";

const POPULAR_SLUGS = [
  "how-much-house-can-i-afford",
  "when-does-refinancing-a-mortgage-make-sense",
  "can-i-get-a-mortgage-if-im-self-employed",
  "what-is-a-dscr-loan",
  "can-i-access-my-home-equity-without-refinancing",
  "how-does-a-reverse-mortgage-work",
  "can-i-get-a-mortgage-without-tax-returns",
  // "can-i-buy-a-home-with-5-percent-down",
  // "can-i-get-a-mortgage-with-bank-statements",
  // "how-does-a-2-1-buydown-work",
  // "what-are-the-down-payment-options",
  // "what-credit-score-do-i-need-to-buy-a-house",
  // "can-i-use-gift-money-for-my-down-payment",
  // "can-an-itin-holder-buy-a-house-in-the-united-states",
  // "how-does-a-cash-out-refinance-work",
  // "how-do-lenders-calculate-self-employed-income",
] as const;

const popularQuestions = POPULAR_SLUGS.map((slug) =>
  questions.find((question) => question.slug === slug),
).filter((question): question is Question => Boolean(question));

export default function PopularQuestions() {
  if (popularQuestions.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-6 lg:py-8">
      <Container>
        {/* Section Header */}
        <div className="mb-7 flex items-center justify-between gap-4 sm:mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Popular Questions
          </h2>

          <Link
            href="/questions"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand transition-colors sm:text-base"
          >
            <span>View all questions</span>

            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Questions Grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {popularQuestions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
          <QuestionCard more />
        </div>
      </Container>
    </section>
  );
}
