import type { Metadata } from "next";

import AboutHero from "@/components/about-abe/AboutHero";
import HowItWorks from "@/components/about-abe/HowItWorks";
import WhyChooseAbe from "@/components/about-abe/WhyChooseAbe";
import Container from "@/components/common/Container";
import CTA from "@/components/common/CTA";

export const metadata: Metadata = {
  title: "About Abe | Talk2Abe",
  description:
    "With over 30 years of experience, Abe finds the right mortgage solution for your unique situation and helps you close with confidence.",
};

export default function AboutAbePage() {
  return (
    <div className="bg-white">
      <AboutHero />

      <WhyChooseAbe />

      <HowItWorks />

      <Container className="pb-12 sm:pb-16 lg:pb-20">
        <CTA
          title="Ready to find the right mortgage solution?"
          description="Ask Abe a question or schedule a call for personal guidance from application to closing."
          primaryAction={{
            href: "/questions",
            label: "Ask Abe a Question",
          }}
          secondaryAction={{
            href: "/contact",
            label: "Schedule a Call",
            booking: true,
          }}
        />
      </Container>
    </div>
  );
}
