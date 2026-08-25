import type { Metadata } from "next";

import AboutHero from "@/components/about-abe/AboutHero";
import ExperienceSection from "@/components/about-abe/ExperienceSection";
import LetsTalkSection from "@/components/about-abe/LetsTalkSection";
import WhyChooseAbe from "@/components/about-abe/WhyChooseAbe";
import WhyCreatedSection from "@/components/about-abe/WhyCreatedSection";
import BreadcrumbSchema, {
  buildBreadcrumbs,
} from "@/components/seo/BreadcrumbSchema";
import { getCanonicalUrl } from "@/lib/urls";
import { seoImages } from "@/config/seo";

export const metadata: Metadata = {
  title: "About Abe Hakawati | Licensed Mortgage Professional",
  description:
    "Straight answers and personal guidance from Abe Hakawati, a licensed mortgage professional with more than 30 years of experience helping homebuyers, homeowners, investors, and self-employed borrowers.",
  openGraph: {
    title: "About Abe Hakawati | Talk2Abe",
    description:
      "Learn about Abe Hakawati — 30+ years of mortgage experience helping homebuyers, investors, and self-employed borrowers find the right financing.",
    url: getCanonicalUrl("/about-abe"),
    images: [
      {
        url: seoImages.about,
        width: 1200,
        height: 630,
        alt: "Abe Hakawati — Licensed Mortgage Professional",
      },
    ],
  },
  alternates: {
    canonical: getCanonicalUrl("/about-abe"),
  },
};

const breadcrumbs = buildBreadcrumbs([
  { name: "Home", path: "/" },
  { name: "About Abe", path: "/about-abe" },
]);

export default function AboutAbePage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema items={breadcrumbs} />

      <AboutHero />

      <ExperienceSection />

      <WhyChooseAbe />

      <WhyCreatedSection />

      <LetsTalkSection />
    </div>
  );
}
