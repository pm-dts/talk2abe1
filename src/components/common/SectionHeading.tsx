import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={cn("space-y-3", isCenter && "text-center", className)}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mx-auto max-w-2xl text-base leading-relaxed text-muted",
            !isCenter && "mx-0",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
