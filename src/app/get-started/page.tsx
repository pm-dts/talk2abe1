import type { Metadata } from "next";

import GetStarted from "@/components/get-started/GetStarted";
import { getCanonicalUrl } from "@/lib/urls";
import { seoImages } from "@/config/seo";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Answer a few quick questions and let Abe help you find the right mortgage solution.",
  openGraph: {
    title: "Get Started | Talk2Abe",
    description:
      "Answer a few quick questions and let Abe help you find the right mortgage solution.",
    url: getCanonicalUrl("/get-started"),
    images: [
      {
        url: seoImages.default,
        width: 1200,
        height: 630,
        alt: "Get Started — Talk2Abe",
      },
    ],
  },
  alternates: {
    canonical: getCanonicalUrl("/get-started"),
  },
};

export default function GetStartedPage() {
  return <GetStarted />;
}
