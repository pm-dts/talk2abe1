import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoVariant = "default" | "light";
type LogoSize = "sm" | "md" | "lg";

type LogoProps = {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
};

const sizeStyles: Record<LogoSize, { tile: string; text: string }> = {
  sm: { tile: "h-7 w-7 rounded-md text-xs", text: "text-base" },
  md: { tile: "h-9 w-9 rounded-lg text-base", text: "text-xl" },
  lg: { tile: "h-11 w-11 rounded-lg text-lg", text: "text-2xl" },
};

export default function Logo({
  variant = "default",
  size = "md",
  className,
}: LogoProps) {
  const isLight = variant === "light";
  const { tile, text } = sizeStyles[size];

  return (
    <Link href="/" className={cn("inline-flex items-center gap-2", className)}>
      <span
        className={cn(
          "font-bold tracking-tight",
          text,
          isLight ? "text-white" : "text-navy",
        )}
      >
        Talk<span className="text-brand">2</span>Abe
      </span>
    </Link>
  );
}
