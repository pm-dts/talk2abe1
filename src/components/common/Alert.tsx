import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AlertVariant = "success" | "error" | "warning" | "info";

type AlertProps = {
  variant: AlertVariant;
  children: ReactNode;
  className?: string;
  id?: string;
};

const variantStyles: Record<AlertVariant, string> = {
  success:
    "rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700",
  error:
    "rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700",
  warning:
    "rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700",
  info: "rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-700",
};

const variantRoles: Record<AlertVariant, string> = {
  success: "status",
  error: "alert",
  warning: "alert",
  info: "status",
};

export default function Alert({
  variant,
  children,
  className,
  id,
}: AlertProps) {
  return (
    <div
      id={id}
      role={variantRoles[variant]}
      className={cn(variantStyles[variant], className)}
    >
      <p className="font-medium">{children}</p>
    </div>
  );
}
