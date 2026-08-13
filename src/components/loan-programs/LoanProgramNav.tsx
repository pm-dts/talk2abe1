"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Container from "@/components/common/Container";

import { cn } from "@/lib/utils";

type LoanProgramNavItem = {
  label: string;
  href: string;
};

const items: LoanProgramNavItem[] = [
  { label: "Purchase", href: "/loan-programs/purchase-loans" },
  { label: "Refinance", href: "/loan-programs/refinance-loans" },
  { label: "Self-Employed", href: "/loan-programs/self-employed-loans" },
  { label: "DSCR", href: "/loan-programs/dscr-loans" },
  { label: "FHA", href: "/loan-programs/fha-loans" },
  { label: "VA", href: "/loan-programs/va-loans" },
  { label: "Reverse Mortgage", href: "/loan-programs/reverse-mortgages" },
  { label: "Home Equity / HELOC", href: "/loan-programs/home-equity-heloc" },
  { label: "Ask Abe", href: "/ask-abe" },
];

type LoanProgramNavProps = {
  className?: string;
};

export default function LoanProgramNav({ className }: LoanProgramNavProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Loan programs"
      className={cn(
        "sticky top-0 z-50 border-b border-line bg-cream",
        className,
      )}
    >
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-2 py-4">
          {items.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-lg border-[1.5px] px-5 py-2.5 text-sm font-bold transition-colors duration-200",
                  active
                    ? "bg-brand text-black"
                    : "border-line bg-white text-muted hover:border-navy-soft hover:text-navy",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </Container>
    </nav>
  );
}
