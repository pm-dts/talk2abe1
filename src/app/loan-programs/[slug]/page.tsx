import type { Metadata } from "next";
import { notFound } from "next/navigation";

import LoanProgramPage from "@/components/loan-programs/LoanProgramPage";
import BreadcrumbSchema, {
  buildBreadcrumbs,
} from "@/components/seo/BreadcrumbSchema";
import { getLoanProgramBySlug, loanPrograms } from "@/data/loan-programs";
import { getCanonicalUrl } from "@/lib/urls";
import { seoImages } from "@/config/seo";

type LoanProgramDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return loanPrograms.map((program) => ({
    slug: program.slug,
  }));
}

export async function generateMetadata({
  params,
}: LoanProgramDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getLoanProgramBySlug(slug);

  if (!program) {
    return {
      title: "Loan program not found",
    };
  }

  return {
    title: program.metadata.title,
    description: program.metadata.description,
    openGraph: {
      title: `${program.metadata.title} | Talk2Abe`,
      description: program.metadata.description,
      url: getCanonicalUrl(`/loan-programs/${slug}`),
      images: [
        {
          url: seoImages.loanProgram,
          width: 1200,
          height: 630,
          alt: `${program.metadata.title} — Talk2Abe`,
        },
      ],
    },
    alternates: {
      canonical: getCanonicalUrl(`/loan-programs/${slug}`),
    },
  };
}

export default async function LoanProgramDetailPage({
  params,
}: LoanProgramDetailPageProps) {
  const { slug } = await params;
  const program = getLoanProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  const breadcrumbs = buildBreadcrumbs([
    { name: "Home", path: "/" },
    { name: "Loan Programs", path: "/loan-programs" },
    { name: program.metadata.title, path: `/loan-programs/${slug}` },
  ]);

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <LoanProgramPage program={program} />
    </>
  );
}
