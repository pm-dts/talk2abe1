import { Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

type AbeTipProps = {
  content: string;
  title?: string;
  className?: string;
};

export default function AbeTip({
  content,
  title = "Abe's Tip",
  className,
}: AbeTipProps) {
  return (
    <div
      className={cn(
        "w-full rounded-lg border border-brand/10 bg-brand/5 p-5",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <Lightbulb
          className="h-6 w-6 shrink-0 text-brand"
          aria-hidden="true"
        />
        <div>
          <h3 className="text-sm font-semibold text-navy sm:text-base">
            {title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">{content}</p>
        </div>
      </div>
    </div>
  );
}
