import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;

          if (isCurrent) {
            return (
              <li
                key={`${item.label}-${index}`}
                className="flex min-w-0 items-center gap-2"
              >
                <span
                  aria-current="page"
                  className="break-words font-medium text-navy"
                >
                  {item.label}
                </span>
              </li>
            );
          }

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-2"
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-muted transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-muted">{item.label}</span>
              )}
              <ChevronRight
                className="h-4 w-4 shrink-0 text-muted/60"
                aria-hidden="true"
              />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
