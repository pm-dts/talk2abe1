import type { MetadataRoute } from "next";

import { loanPrograms } from "@/data/loan-programs";
import { questions } from "@/data/questions";
import { getCanonicalUrl } from "@/lib/urls";

export const dynamic = "force-static";

const corePages = [
  "/",
  "/about-abe",
  "/ask-abe",
  "/questions",
  "/loan-programs",
  "/contact",
  "/get-started",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...corePages.map((path) => ({
      url: getCanonicalUrl(path),
      lastModified: now,
      changeFrequency:
        path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : 0.8,
    })),

    ...loanPrograms.map((program) => ({
      url: getCanonicalUrl(`/loan-programs/${program.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    ...questions.map((question) => ({
      url: getCanonicalUrl(`/questions/${question.slug}`),
      lastModified: question.modifiedAt ?? question.publishedAt ?? now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
