"use client";

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
  return (
    <nav aria-label="Categories" className={cn("bg-white", className)}>
      <h2 className="px-5 pb-3 pt-4 text-xs font-semibold uppercase tracking-wider text-muted">
        Categories
      </h2>

      <ul>
        <li>
          <CategoryButton
            label="All Questions"
            active={activeCategory === "all"}
            onClick={() => onCategoryChange("all")}
          />
        </li>
        {categories.map((category) => (
          <li key={category}>
            <CategoryButton
              label={category}
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
  label: string;
  active: boolean;
  onClick: () => void;
};

function CategoryButton({ label, active, onClick }: CategoryButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "flex w-full items-center border-l-2 px-5 py-2.5 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
        active
          ? "border-brand bg-brand/5 font-semibold text-brand"
          : "border-transparent font-medium text-navy hover:bg-surface hover:text-brand",
      )}
    >
      {label}
    </button>
  );
}
