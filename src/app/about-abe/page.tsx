import type { Metadata } from "next";

import AboutHero from "@/components/about-abe/AboutHero";
import ExperienceSection from "@/components/about-abe/ExperienceSection";
import LetsTalkSection from "@/components/about-abe/LetsTalkSection";
import WhyChooseAbe from "@/components/about-abe/WhyChooseAbe";
import WhyCreatedSection from "@/components/about-abe/WhyCreatedSection";

export const metadata: Metadata = {
  title: "About Abe | Talk2Abe",
  description:
    "Straight answers and personal guidance from Abe, a mortgage professional with more than 30 years of experience helping homebuyers, homeowners, investors, and self-employed borrowers.",
};

export default function AboutAbePage() {
  return (
    <div className="bg-white">
      <AboutHero />

      <ExperienceSection />

      <WhyChooseAbe />

      <WhyCreatedSection />

      <LetsTalkSection />
    </div>
  );
}
