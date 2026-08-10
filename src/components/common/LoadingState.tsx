import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type LoadingStateProps = {
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeStyles: Record<"sm" | "md" | "lg", { icon: string; text: string }> = {
  sm: { icon: "h-4 w-4", text: "text-xs" },
  md: { icon: "h-5 w-5", text: "text-sm" },
  lg: { icon: "h-7 w-7", text: "text-base" },
};

export default function LoadingState({
  label = "Loading...",
  size = "md",
  className,
}: LoadingStateProps) {
  const { icon, text } = sizeStyles[size];

  return (
    <div
      role="status"
      className={cn(
        "flex flex-col items-center justify-center gap-3 py-12",
        className,
      )}
    >
      <LoaderCircle
        className={cn("animate-spin text-brand", icon)}
        aria-hidden="true"
      />
      <p className={cn("font-medium text-muted", text)}>{label}</p>
    </div>
  );
}
