import type { Metadata } from "next";

import LoanProgramsPageContent from "@/components/loan-programs/LoanProgramsPageContent";
import BreadcrumbSchema, {
  buildBreadcrumbs,
} from "@/components/seo/BreadcrumbSchema";
import { getCanonicalUrl } from "@/lib/urls";
import { seoImages } from "@/config/seo";

export const metadata: Metadata = {
  title: "Mortgage Loan Programs",
  description:
    "Explore mortgage loan programs including purchase, refinance, self-employed, DSCR, FHA, VA, reverse mortgage, and home equity options.",
  openGraph: {
    title: "Mortgage Loan Programs | Talk2Abe",
    description:
      "Explore mortgage loan programs including purchase, refinance, self-employed, DSCR, FHA, VA, reverse mortgage, and home equity options.",
    url: getCanonicalUrl("/loan-programs"),
    images: [
      {
        url: seoImages.loanProgram,
        width: 1200,
        height: 630,
        alt: "Mortgage Loan Programs — Talk2Abe",
      },
    ],
  },
  alternates: {
    canonical: getCanonicalUrl("/loan-programs"),
  },
};

const breadcrumbs = buildBreadcrumbs([
  { name: "Home", path: "/" },
  { name: "Loan Programs", path: "/loan-programs" },
]);

export default function LoanProgramsPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema items={breadcrumbs} />
      <LoanProgramsPageContent />
    </div>
  );
}