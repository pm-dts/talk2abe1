import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Lightbulb, Play } from "lucide-react";

import Breadcrumbs from "@/components/common/Breadcrumbs";
import Container from "@/components/common/Container";
import CTA from "@/components/common/CTA";
import RelatedQuestions from "@/components/questions/RelatedQuestions";
import type { Question } from "@/types/question";

type QuestionAnswerProps = {
  question: Question;
  relatedQuestions?: Question[];
};

function formatDate(value: string): string {
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) {
    return value;
  }
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(year, month - 1, day));
}

function QuestionMeta({ question }: { question: Question }) {
  const items: string[] = [];

  if (question.author) {
    items.push(`By ${question.author}`);
  }
  if (question.publishedAt) {
    items.push(formatDate(question.publishedAt));
  }
  if (question.category) {
    items.push(question.category);
  }

  if (items.length === 0) {
    return null;
  }

  return (
    <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
      {items.map((item, index) => (
        <span key={`${item}-${index}`} className="flex items-center gap-3">
          {index > 0 && (
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-slate-300" />
          )}
          {item}
        </span>
      ))}
    </p>
  );
}

export default function QuestionAnswer({
  question,
  relatedQuestions = [],
}: QuestionAnswerProps) {
  const hasThumbnail =
    question.video?.thumbnail &&
    existsSync(
      path.join(process.cwd(), "public", question.video.thumbnail),
    );

  return (
    <div className="bg-white">
      <Container className="py-8 sm:py-10 lg:py-12">
        <div className="mx-auto w-full max-w-3xl">
          <Breadcrumbs
            items={[
              {
                label: "Home",
                href: "/",
              },
              {
                label: "Ask Abe",
                href: "/ask-abe",
              },
              {
                label: question.title,
              },
            ]}
          />

          <article className="mt-7">
            {/* Question Header */}
            <header>
              <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                {question.title}
              </h1>
              <QuestionMeta question={question} />
            </header>

            {/* Video */}
            {question.video?.thumbnail && (
              <div className="relative mt-8 aspect-video overflow-hidden rounded-xl bg-slate-900">
                {hasThumbnail ? (
                  <Image
                    src={question.video.thumbnail}
                    alt={question.title}
                    fill
                    priority
                    className="object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-slate-700 to-slate-900" />
                )}
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 ring-4 ring-white/20">
                    <Play
                      className="h-8 w-8 text-navy"
                      fill="currentColor"
                      strokeWidth={1}
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </div>
            )}

            {/* Short Answer */}
            {question.shortAnswer && (
              <section className="mt-8">
                <h2 className="text-lg font-semibold text-navy sm:text-xl">
                  Short Answer
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {question.shortAnswer}
                </p>
              </section>
            )}

            {/* Full Answer */}
            {question.fullAnswer && question.fullAnswer.length > 0 && (
              <section className="mt-8">
                <h2 className="text-lg font-semibold text-navy sm:text-xl">
                  The Full Answer
                </h2>
                <div className="mt-3 space-y-4">
                  {question.fullAnswer.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base leading-relaxed text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {/* Abe's Tip */}
            {question.abeTip && (
              <aside className="mt-8 flex items-start gap-4 rounded-xl border border-brand/20 bg-brand/10 p-5 sm:p-6">
                <Lightbulb
                  className="mt-1 h-6 w-6 shrink-0 text-brand"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <div>
                  <h2 className="text-base font-semibold text-navy">
                    Abe&apos;s Tip
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted sm:text-base">
                    {question.abeTip}
                  </p>
                </div>
              </aside>
            )}

            {/* Related Questions */}
            {relatedQuestions.length > 0 && (
              <div className="mt-8">
                <RelatedQuestions questions={relatedQuestions} />
              </div>
            )}

            {/* CTA */}
            <div className="mt-8">
              <CTA
                title="Have a questions about your situation?"
                description="Every situation is different. Let&apos;s get the right solution for you."
                primaryAction={{
                  href: "/ask-abe",
                  label: "Ask Abe a Question",
                }}
                secondaryAction={{
                  href: "/contact",
                  label: "Schedule a Call",
                }}
              />
            </div>
          </article>
        </div>
      </Container>
    </div>
  );
}
