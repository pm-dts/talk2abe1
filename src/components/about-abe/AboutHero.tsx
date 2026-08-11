// import Breadcrumbs from "@/components/common/Breadcrumbs";
import Container from "@/components/common/Container";
import { aboutAbe } from "@/data/about-abe";

export default function AboutHero() {
  return (
    <section className="bg-surface">
      <Container className="py-12 sm:py-16 lg:py-20">
        {/* <Breadcrumbs
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "About Abe",
            },
          ]}
        /> */}

        <div className="mt-7 max-w-2xl sm:mt-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            {aboutAbe.eyebrow}
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            {aboutAbe.title}
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-muted sm:text-lg">
            {aboutAbe.introduction}
          </p>
        </div>
      </Container>
    </section>
  );
}
