import type { Metadata } from "next";

import HeroSection from "@/components/home/HeroSection";
import PopularQuestions from "@/components/home/PopularQuestions";
import LatestVideoSection from "@/components/home/LatestVideoSection";
import ValueProps from "@/components/home/ValueProps";
import { getCanonicalUrl } from "@/lib/urls";
import { seoImages } from "@/config/seo";

export const metadata: Metadata = {
  title: {
    absolute: "Talk2Abe | Mortgage Guidance from Abe Hakawati",
  },
  description:
    "Straightforward mortgage answers from Abe Hakawati. Explore loan programs, ask questions, and get personalized guidance for your financing situation.",
  openGraph: {
    title: "Talk2Abe | Mortgage Guidance from Abe Hakawati",
    description:
      "Straightforward mortgage answers from Abe Hakawati. Explore loan programs, ask questions, and get personalized guidance.",
    url: getCanonicalUrl("/"),
    images: [
      {
        url: seoImages.home,
        width: 1200,
        height: 630,
        alt: "Talk2Abe — Straightforward Mortgage Answers from Abe Hakawati",
      },
    ],
  },
  alternates: {
    canonical: getCanonicalUrl("/"),
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section id="popular-questions">
        <PopularQuestions />
      </section>

      <LatestVideoSection />
      <ValueProps />
    </>
  );
}