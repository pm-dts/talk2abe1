import type { Metadata } from "next";

import { getCanonicalUrl } from "@/lib/urls";
import { seoImages } from "@/config/seo";

export const metadata: Metadata = {
  title: "Ask Abe | Mortgage Questions Answered",
  description:
    "Browse straight answers to real mortgage questions. Search by topic or explore popular questions about purchasing, refinancing, self-employment, and more.",
  openGraph: {
    title: "Ask Abe | Mortgage Questions Answered | Talk2Abe",
    description:
      "Browse straight answers to real mortgage questions. Search by topic or explore popular questions.",
    url: getCanonicalUrl("/questions"),
    images: [
      {
        url: seoImages.question,
        width: 1200,
        height: 630,
        alt: "Ask Abe — Mortgage Questions Answered",
      },
    ],
  },
  alternates: {
    canonical: getCanonicalUrl("/questions"),
  },
};

export default function QuestionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
