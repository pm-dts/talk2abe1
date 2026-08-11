import type { ComponentProps } from "react";
import Button from "@/components/common/Button";
import { cn } from "@/lib/utils";

type CTAAction = {
  href: string;
  label: string;
  variant?: ComponentProps<typeof Button>["variant"];
  size?: ComponentProps<typeof Button>["size"];
};

type CTAProps = {
  title: string;
  description?: string;
  primaryAction: CTAAction;
  secondaryAction?: CTAAction;
  className?: string;
};

export default function CTA({
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
}: CTAProps) {
  return (
    <section
      className={cn(
        "rounded-xl bg-surface px-5 py-7 text-center sm:px-8 sm:py-8",
        className,
      )}
    >
      <h2 className="text-xl font-bold tracking-tight text-navy sm:text-2xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted sm:text-base">
          {description}
        </p>
      )}

      <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button
          href={primaryAction.href}
          variant={primaryAction.variant ?? "primary"}
          size={primaryAction.size ?? "md"}
        >
          {primaryAction.label}
        </Button>

        {secondaryAction && (
          <Button
            href={secondaryAction.href}
            variant={secondaryAction.variant ?? "outline"}
            size={secondaryAction.size ?? "md"}
          >
            {secondaryAction.label}
          </Button>
        )}
      </div>
    </section>
  );
}
