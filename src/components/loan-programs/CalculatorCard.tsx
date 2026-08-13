import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CalculatorCardProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  className?: string;
};

export default function CalculatorCard({
  title,
  subtitle,
  children,
  className,
}: CalculatorCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[20px] bg-navy p-8 text-white",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[60px] -right-[60px] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(47,143,82,0.35),transparent_70%)]"
      />

      <div className="relative">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-[#9fb3d9]">
          {title}
        </p>
        <p className="mt-1 text-[13px] text-[#b9c4dc]">{subtitle}</p>

        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}
