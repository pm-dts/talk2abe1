import type { Metadata } from "next";

import ContactPageContent from "@/components/contact/ContactPageContent";
import BreadcrumbSchema, {
  buildBreadcrumbs,
} from "@/components/seo/BreadcrumbSchema";
import { getCanonicalUrl } from "@/lib/urls";
import { seoImages } from "@/config/seo";

export const metadata: Metadata = {
  title: "Contact Abe Hakawati",
  description:
    "Have a mortgage question or ready to get started? Send Abe a message and get a straightforward answer.",
  openGraph: {
    title: "Contact Abe Hakawati | Talk2Abe",
    description:
      "Have a mortgage question or ready to get started? Send Abe a message.",
    url: getCanonicalUrl("/contact"),
    images: [
      {
        url: seoImages.default,
        width: 1200,
        height: 630,
        alt: "Contact Abe Hakawati — Talk2Abe",
      },
    ],
  },
  alternates: {
    canonical: getCanonicalUrl("/contact"),
  },
};

const breadcrumbs = buildBreadcrumbs([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

export default function ContactPage() {
  return (
    <div className="bg-white w-full max-w-3xl mx-auto">
      <BreadcrumbSchema items={breadcrumbs} />
      <ContactPageContent />
    </div>
  );
}
