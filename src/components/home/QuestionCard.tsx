import Link from "next/link";
import {
  Building2,
  CircleDollarSign,
  Ellipsis,
  FileText,
  House,
  HousePlus,
  Percent,
  UserRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Question, QuestionIcon } from "@/types/question";

const iconMap: Record<QuestionIcon, LucideIcon> = {
  house: House,
  houseplus: HousePlus,
  user: UserRound,
  building: Building2,
  percent: Percent,
  document: FileText,
  dollar: CircleDollarSign,
};

const cardClasses =
  "group flex h-full min-h-[200px] flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:border-brand/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2";

type QuestionCardProps = {
  question?: Question;
  more?: boolean;
  className?: string;
};

export default function QuestionCard({
  question,
  more = false,
  className,
}: QuestionCardProps) {
  if (more) {
    return (
      <Link href="/ask-abe" className={cn(cardClasses, className)}>
        <span
          aria-hidden="true"
          className="flex h-12 w-12 items-center justify-center"
        >
          <Ellipsis className="h-10 w-10 text-brand" strokeWidth={2} />
        </span>
        <h3 className="mt-4 max-w-[250px] text-base font-semibold leading-snug text-navy transition-colors sm:text-lg group-hover:text-brand">
          See more questions
        </h3>
      </Link>
    );
  }

  if (!question) {
    return null;
  }

  const Icon = iconMap[question.icon];

  return (
    <Link
      href={`/ask-abe/${question.slug}`}
      className={cn(cardClasses, className)}
    >
      <span
        aria-hidden="true"
        className="flex h-12 w-12 items-center justify-center"
      >
        <Icon className="h-11 w-11 text-brand" strokeWidth={2} />
      </span>
      <h3 className="mt-4 max-w-[180px] text-base font-semibold leading-snug text-navy transition-colors sm:text-lg group-hover:text-brand">
        {question.title}
      </h3>
    </Link>
  );
}
