import Container from "@/components/common/Container";
import { aboutAbe } from "@/data/about-abe";

export default function WhyCreatedSection() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            {aboutAbe.whyCreated.title}
          </h2>

          <div className="mt-6 space-y-5">
            {aboutAbe.whyCreated.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-7 text-muted sm:text-lg"
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
