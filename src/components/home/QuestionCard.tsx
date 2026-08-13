import Link from "next/link";

import {
  ArrowRight,
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
  "group flex h-[180px] w-full flex-col items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-5 text-center shadow-sm transition-all duration-200 hover:border-brand/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:h-[180px] sm:px-6 sm:py-6";

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
  /*
   * "See more questions" card
   */
  if (more) {
    return (
      <Link
        href="/questions"
        className={cn(cardClasses, className)}
        aria-label="See more mortgage questions"
      >
        {/* Icon */}
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center"
        >
          <Ellipsis
            className="h-9 w-9 text-brand transition-transform duration-200 group-hover:scale-105"
            strokeWidth={2}
          />
        </span>

        {/* Title */}
        <h3
          className="
            mt-3
            max-w-[220px]
            text-base
            font-semibold
            leading-snug
            text-navy
            transition-colors
            group-hover:text-brand
            sm:text-lg
          "
        >
          See more questions
        </h3>

        {/* CTA cue */}
        <span
          className="
            mt-2
            inline-flex
            items-center
            gap-1.5
            text-sm
            font-semibold
            text-brand
          "
        >
          View all

          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </Link>
    );
  }

  /*
   * Invalid question safeguard
   */
  if (!question) {
    return null;
  }

  const Icon = iconMap[question.icon];

  return (
    <Link
      href={`/questions/${question.slug}`}
      className={cn(cardClasses, className)}
      aria-label={`Read answer: ${question.title}`}
    >
      {/* Question Icon */}
      <span
        aria-hidden="true"
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
        "
      >
        <Icon
          className="
            h-9
            w-9
            text-brand
            transition-transform
            duration-200
            group-hover:scale-105
          "
          strokeWidth={2}
        />
      </span>

      {/* Question */}
      <h3
        className="
          mt-3
          max-w-[250px]
          text-lg
          font-semibold
          leading-snug
          text-navy
          transition-colors
          group-hover:text-brand
          sm:text-xl
        "
      >
        {question.title}
      </h3>

      {/* Answer CTA */}
      <span
        className="
          mt-2
          inline-flex
          items-center
          gap-1.5
          text-sm
          font-semibold
          text-brand
        "
      >
        See Answer

        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
