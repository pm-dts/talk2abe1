import type { Metadata } from "next";

import Container from "@/components/common/Container";
import AskAbeContent from "@/components/ask-abe/AskAbeContent";
import ValueProps from "@/components/home/ValueProps";
import BreadcrumbSchema, {
  buildBreadcrumbs,
} from "@/components/seo/BreadcrumbSchema";
import { getCanonicalUrl } from "@/lib/urls";
import { seoImages } from "@/config/seo";

export const metadata: Metadata = {
  title: "Ask Abe | Mortgage Questions Answered",
  description:
    "Talk it through with Abe. Get straight answers to your mortgage questions before you fill anything out.",
  openGraph: {
    title: "Ask Abe | Mortgage Questions Answered | Talk2Abe",
    description:
      "Get straight answers to your mortgage questions from Abe Hakawati. No obligation, no complicated application.",
    url: getCanonicalUrl("/ask-abe"),
    images: [
      {
        url: seoImages.askAbe,
        width: 1200,
        height: 630,
        alt: "Ask Abe — Mortgage Questions Answered",
      },
    ],
  },
  alternates: {
    canonical: getCanonicalUrl("/ask-abe"),
  },
};

const breadcrumbs = buildBreadcrumbs([
  { name: "Home", path: "/" },
  { name: "Ask Abe", path: "/ask-abe" },
]);

export default function AskAbePage() {
  return (
    <div className="min-h-screen">
      <BreadcrumbSchema items={breadcrumbs} />

      <Container className="pt-6 sm:pt-10 lg:pt-14">
        <AskAbeContent />
      </Container>

      <ValueProps />
    </div>
  );
}
