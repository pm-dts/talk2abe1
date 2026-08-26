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
  {
    label: "Home Equity / HELOC",
    href: "/loan-programs/home-equity-heloc",
  },
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
        "sticky top-[88px] z-40 border-b border-line bg-cream",
        className,
      )}
    >
      <Container>
        <div className="-mx-4 flex flex-nowrap items-center gap-2 overflow-x-auto px-4 py-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:flex-wrap md:justify-center md:overflow-visible md:px-0">
          {items.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "whitespace-nowrap rounded-lg border-[1.5px] px-5 py-2.5 text-sm font-bold transition-colors duration-200",
                  active
                    ? "!border-brand !bg-brand !text-white"
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
