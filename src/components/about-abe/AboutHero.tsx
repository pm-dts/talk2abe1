import Container from "@/components/common/Container";
import { aboutAbe } from "@/data/about-abe";

export default function AboutHero() {
  return (
    <section className="bg-surface">
      <Container className="py-12 sm:py-16 lg:py-20">
        <div className="mt-7 max-w-3xl sm:mt-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            {aboutAbe.eyebrow}
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            {aboutAbe.title}
          </h1>

          <div className="mt-6 space-y-5">
            {aboutAbe.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-2xl text-base leading-7 text-muted sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
