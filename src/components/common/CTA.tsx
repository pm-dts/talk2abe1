import type { ComponentProps } from "react";
import Button from "@/components/common/Button";
import ScheduleCallButton from "@/components/common/ScheduleCallButton";
import { cn } from "@/lib/utils";

type CTAAction = {
  href: string;
  label: string;
  variant?: ComponentProps<typeof Button>["variant"];
  size?: ComponentProps<typeof Button>["size"];
  booking?: boolean;
};

type CTAProps = {
  title: string;
  description?: string;
  primaryAction: CTAAction;
  secondaryAction?: CTAAction;
  className?: string;
};

function renderAction(
  action: CTAAction,
  defaultVariant: NonNullable<ComponentProps<typeof Button>["variant"]>,
) {
  const variant = action.variant ?? defaultVariant;
  const size = action.size ?? "md";

  if (action.booking) {
    return (
      <ScheduleCallButton variant={variant} size={size}>
        {action.label}
      </ScheduleCallButton>
    );
  }

  return (
    <Button href={action.href} variant={variant} size={size}>
      {action.label}
    </Button>
  );
}

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
        {renderAction(primaryAction, "primary")}

        {secondaryAction && renderAction(secondaryAction, "outline")}
      </div>
    </section>
  );
}
