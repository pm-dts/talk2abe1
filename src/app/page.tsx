import HeroSection from "@/components/home/HeroSection";
import PopularQuestions from "@/components/home/PopularQuestions";
import LatestVideoSection from "@/components/home/LatestVideoSection";
import ValueProps from "@/components/home/ValueProps";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <ValueProps />

      <section
        id="popular-questions"
        className="border-t border-line bg-surface"
      >
        <PopularQuestions />
      </section>

      <LatestVideoSection />
    </>
  );
}
