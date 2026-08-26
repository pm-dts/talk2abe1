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
// import { localize } from "@/i18n/helpers";
// import { DEFAULT_LOCALE, type Locale } from "@/i18n/config";
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
  "group flex h-[140px] w-full items-center gap-4 rounded-lg border border-slate-200 bg-white p-4 text-left shadow-sm transition-all duration-200 hover:border-brand/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:h-[140px] sm:gap-5 sm:px-5 sm:py-5";

type QuestionCardProps = {
  question?: Question;
  more?: boolean;
  className?: string;
  // locale?: Locale;
};

export default function QuestionCard({
  question,
  more = false,
  className,
  // locale = DEFAULT_LOCALE,
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
        <span aria-hidden="true" className="shrink-0">
          <Ellipsis
            className="h-9 w-9 text-brand transition-transform duration-200 group-hover:scale-105 sm:h-10 sm:w-10"
            strokeWidth={2}
          />
        </span>

        <span className="flex min-w-0 flex-1 flex-col">
          <h3
            className="
              text-lg
              font-semibold
              leading-snug
              text-navy
              transition-colors
              group-hover:text-brand
              md:text-base
            "
          >
            See more questions
          </h3>

          <span
            className="
              mt-2
              inline-flex
              w-fit
              items-center
              gap-1.5
              text-sm
              font-semibold
              text-brand
              transition-colors
              sm:mt-3
            "
          >
            View all

            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
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
  // const title = localize(question, locale, "title");
  const title = question.title;

  return (
    <Link
      href={`/questions/${question.slug}`}
      className={cn(cardClasses, className)}
      aria-label={`Read answer: ${title}`}
    >
      <span aria-hidden="true" className="shrink-0">
        <Icon
          className="
            h-9
            w-9
            text-brand
            transition-transform
            duration-200
            group-hover:scale-105
            sm:h-10
            sm:w-10
          "
          strokeWidth={2}
        />
      </span>

      <span className="flex min-w-0 flex-1 flex-col">
        <h3
          className="
            line-clamp-2
            text-lg
            font-semibold
            leading-snug
            text-navy
            transition-colors
            group-hover:text-brand
            md:text-base
          "
        >
          {title}
        </h3>

        <span
          className="
            mt-2
            inline-flex
            w-fit
            items-center
            gap-1.5
            text-sm
            font-semibold
            text-brand
            transition-colors
            sm:mt-3
          "
        >
          Learn more

          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </span>
    </Link>
  );
}
