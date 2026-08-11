import type { Metadata } from "next";

// import Breadcrumbs from "@/components/common/Breadcrumbs";
import Container from "@/components/common/Container";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Talk2Abe",
  description:
    "Have a mortgage question or ready to get started? Send Abe a message and get a straightforward answer.",
};

export default function ContactPage() {
  return (
    <div className="bg-white w-full max-w-3xl mx-auto">
      <Container className="py-8 sm:py-10 lg:py-12">
        {/* Breadcrumbs */}
        {/* <Breadcrumbs
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Contact",
            },
          ]}
        /> */}

        {/* Page Introduction */}
        <section className="mt-7 max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Contact
          </h1>

          <p className="mt-3 max-w-xl text-base leading-7 text-muted sm:text-lg">
            Have a question about your situation? Send Abe a message and
            he&apos;ll get back to you.
          </p>
        </section>

        {/* Contact Form */}
        <section className="mt-7 sm:mt-8">
          <ContactForm />
        </section>
      </Container>
    </div>
  );
}
