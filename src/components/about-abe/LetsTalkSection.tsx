import Container from "@/components/common/Container";
import CTA from "@/components/common/CTA";
import { aboutAbe } from "@/data/about-abe";

export default function LetsTalkSection() {
  return (
    <section className="bg-white pb-14 sm:pb-16 lg:pb-20">
      <Container>
        <CTA
          title={aboutAbe.letsTalk.title}
          description={aboutAbe.letsTalk.paragraphs.join(" ")}
          primaryAction={{
            href: "/contact",
            label: "Ask Abe a question",
          }}
          secondaryAction={{
            href: "/loan-programs",
            label: "Explore Loan Options",
          }}
        />
      </Container>
    </section>
  );
}
