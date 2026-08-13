import type { Metadata } from "next";
import { notFound } from "next/navigation";

import LoanProgramPage from "@/components/loan-programs/LoanProgramPage";
import { getLoanProgramBySlug, loanPrograms } from "@/data/loan-programs";

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
    title: `${program.metadata.title} | Talk2Abe`,
    description: program.metadata.description,
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

  return <LoanProgramPage program={program} />;
}
