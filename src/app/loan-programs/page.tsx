import Container from "@/components/common/Container";
import CTA from "@/components/common/CTA";
import LoanProgramGrid from "@/components/loan-programs/LoanProgramGrid";

export default function LoanProgramsPage() {
  return (
    <div className="bg-white">
      <Container className="py-8 sm:py-10 lg:py-12">
        {/* Page Introduction */}
        <section className="mt-7 max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Loan Programs
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-muted sm:text-base">
            We offer a wide range of mortgage solutions for
            homeowners, homebuyers, and real estate investors.
          </p>
        </section>

        {/* Loan Programs */}
        <section className="mt-7 sm:mt-8">
          <LoanProgramGrid />
        </section>

        {/* CTA */}
        <section className="mt-6 sm:mt-8">
          <CTA
            title="Ready to take the next step?"
            description="Let&apos;s find the right loan program for your solution."
            primaryAction={{
              href: "/ask-abe",
              label: "Ask Abe a Question",
            }}
            secondaryAction={{
              href: "/contact",
              label: "Schedule a Call",
            }}
          />
        </section>
      </Container>
    </div>
  );
}