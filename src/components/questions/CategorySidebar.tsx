"use client";

import { LayoutGrid } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

import { getCategoryIcon } from "@/components/questions/categoryIcons";
import { questions } from "@/data/questions";
import { cn } from "@/lib/utils";

type CategorySidebarProps = {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
};

export default function CategorySidebar({
  categories,
  activeCategory,
  onCategoryChange,
  className,
}: CategorySidebarProps) {
  const { t } = useTranslation();
  const countFor = (name: string) =>
    questions.filter((question) => question.category === name).length;

  return (
    <nav aria-label={t("questions.listing.categories")} className={cn("bg-white", className)}>
      <h2 className="px-5 pb-3 pt-4 text-xs font-semibold uppercase tracking-wider text-muted">
        {t("questions.listing.categories")}
      </h2>

      <ul>
        <li>
          <CategoryButton
            icon={LayoutGrid}
            label={t("questions.listing.allQuestions")}
            count={questions.length}
            active={activeCategory === "all"}
            onClick={() => onCategoryChange("all")}
          />
        </li>
        {categories.map((category) => (
          <li key={category}>
            <CategoryButton
              icon={getCategoryIcon(category)}
              label={category}
              count={countFor(category)}
              active={activeCategory === category}
              onClick={() => onCategoryChange(category)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

type CategoryButtonProps = {
  icon: LucideIcon;
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
};

function CategoryButton({
  icon: Icon,
  label,
  count,
  active,
  onClick,
}: CategoryButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "flex w-full items-center gap-2.5 border-l-2 px-5 py-2.5 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
        active
          ? "border-brand bg-brand/5 font-semibold text-brand"
          : "border-transparent font-medium text-navy hover:bg-surface hover:text-brand",
      )}
    >
      <Icon
        className={cn(
          "h-4 w-4 shrink-0",
          active ? "text-brand" : "text-muted",
        )}
        strokeWidth={2}
        aria-hidden="true"
      />
      <span className="min-w-0 flex-1 truncate">{label}</span>
      {count > 0 && (
        <span
          className={cn(
            "shrink-0 text-xs",
            active ? "text-brand" : "text-muted",
          )}
        >
          {count}
        </span>
      )}
    </button>
  );
}
