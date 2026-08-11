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

export async function generateMetadata({
  params,
}: QuestionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const question = questions.find((item) => item.slug === slug);

  return {
    title: question ? question.title : "Question not found",
  };
}

export default async function QuestionPage({ params }: QuestionPageProps) {
  const { slug } = await params;
  const question = questions.find((item) => item.slug === slug);

  if (!question) {
    notFound();
  }

  const relatedQuestions = question.relatedQuestionIds
    ? question.relatedQuestionIds
        .map((id) => questions.find((item) => item.id === id))
        .filter((item): item is Question => Boolean(item))
    : [];

  return (
    <QuestionAnswer
      question={question}
      relatedQuestions={relatedQuestions}
    />
  );
}
