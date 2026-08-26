"use client";

// import { useTranslation } from "react-i18next";
import QuestionSearch from "@/components/questions/QuestionSearch";
import { categories as categoryOptions } from "@/data/categories";
import { cn } from "@/lib/utils";

type QuestionFiltersProps = {
  search: string;
  category: string;
  categories?: string[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  className?: string;
};

const selectStyles =
  "h-11 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-navy focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

export default function QuestionFilters({
  search,
  category,
  categories,
  onSearchChange,
  onCategoryChange,
  className,
}: QuestionFiltersProps) {
  // const { t } = useTranslation();
  const options = categories ?? categoryOptions.map((c) => c.name);

  return (
    <div
      className={cn("flex flex-col gap-3 sm:flex-row sm:items-center", className)}
    >
      <QuestionSearch
        value={search}
        onChange={onSearchChange}
        className="flex-1"
      />

      <div className="sm:w-56">
        <label htmlFor="question-category" className="sr-only">
          {/* {t("questions.filters.filterByCategory")} */}
          Filter by category
        </label>
        <select
          id="question-category"
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
          className={selectStyles}
        >
          <option value="all">All Categories</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
