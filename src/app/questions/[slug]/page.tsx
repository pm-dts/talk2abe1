import type { Metadata } from "next";
import { notFound } from "next/navigation";

import QuestionAnswer from "@/components/common/QuestionAnswer";
import BreadcrumbSchema, {
  buildBreadcrumbs,
} from "@/components/seo/BreadcrumbSchema";
import ArticleSchema from "@/components/seo/ArticleSchema";
import { questions } from "@/data/questions";
import { getCanonicalUrl } from "@/lib/urls";
import { seoConfig, seoImages } from "@/config/seo";
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
    title: question.title,
    description:
      question.metaDescription ??
      question.shortAnswer ??
      `Straight answer from Abe to "${question.title}".`,
    openGraph: {
      title: `${question.title} | Talk2Abe`,
      description:
        question.metaDescription ??
        question.shortAnswer ??
        `Straight answer from Abe to "${question.title}".`,
      url: getCanonicalUrl(`/questions/${slug}`),
      images: [
        {
          url: seoImages.question,
          width: 1200,
          height: 630,
          alt: question.title,
        },
      ],
    },
    alternates: {
      canonical: getCanonicalUrl(`/questions/${slug}`),
    },
  };
}

export default async function QuestionPage({ params }: QuestionPageProps) {
  const { slug } = await params;
  const question = questions.find((item) => item.slug === slug);

  if (!question) {
    notFound();
  }

  const breadcrumbs = buildBreadcrumbs([
    { name: "Home", path: "/" },
    { name: "Ask Abe", path: "/questions" },
    { name: question.title, path: `/questions/${slug}` },
  ]);

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ArticleSchema
        data={{
          headline: question.title,
          description: question.shortAnswer ?? question.metaDescription,
          url: getCanonicalUrl(`/questions/${slug}`),
          image: question.video?.thumbnail
            ? `${seoConfig.siteUrl}${question.video.thumbnail}`
            : undefined,
          datePublished: question.publishedAt,
          dateModified: question.modifiedAt,
        }}
      />
      <QuestionAnswer
        question={question}
        relatedQuestions={getRelatedQuestions(question)}
      />
    </>
  );
}
