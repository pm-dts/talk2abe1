import type { Metadata } from "next";
import { notFound } from "next/navigation";

import QuestionAnswer from "@/components/common/QuestionAnswer";
import { questions } from "@/data/questions";
import type { Question } from "@/types/question";

type QuestionPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return questions.map((question) => ({
    slug: question.slug,
  }));
}

function getRelatedQuestions(
  question: Question,
  count = 3,
): Question[] {
  const related: Question[] = [];
  const seen = new Set<string>([question.id]);

  const add = (candidate?: Question) => {
    if (!candidate || seen.has(candidate.id) || related.length >= count) {
      return;
    }
    seen.add(candidate.id);
    related.push(candidate);
  };

  question.relatedQuestionIds?.forEach((id) =>
    add(questions.find((item) => item.id === id)),
  );
  questions.forEach((item) =>
    item.category === question.category ? add(item) : null,
  );
  questions.forEach((item) => (item.popular ? add(item) : null));
  questions.forEach(add);

  return related;
}

export async function generateMetadata({
  params,
}: QuestionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const question = questions.find((item) => item.slug === slug);

  if (!question) {
    return {
      title: "Question not found",
    };
  }

  return {
    title: `${question.title} | Talk2Abe`,
    description:
      question.metaDescription ??
      question.shortAnswer ??
      `Straight answer from Abe to "${question.title}".`,
  };
}

export default async function QuestionPage({ params }: QuestionPageProps) {
  const { slug } = await params;
  const question = questions.find((item) => item.slug === slug);

  if (!question) {
    notFound();
  }

  return (
    <QuestionAnswer
      question={question}
      relatedQuestions={getRelatedQuestions(question)}
    />
  );
}
