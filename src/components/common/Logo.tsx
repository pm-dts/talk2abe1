import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoVariant = "default" | "light";
type LogoSize = "sm" | "md" | "lg";

type LogoProps = {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
};

const sizeStyles: Record<LogoSize, { text: string }> = {
  sm: { text: "text-base" },
  md: { text: "text-xl" },
  lg: { text: "text-[2rem]" },
};

export default function Logo({
  variant = "default",
  size = "md",
  className,
}: LogoProps) {
  const isLight = variant === "light";
  const { text } = sizeStyles[size];

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
