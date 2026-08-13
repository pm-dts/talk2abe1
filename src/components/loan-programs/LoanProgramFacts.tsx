import { Check } from "lucide-react";

import type { LoanProgramFacts as LoanProgramFactsData } from "@/types/loan-program";

function renderItem(item: string) {
  const match = /^\*\*(.+?)\*\*(.*)$/.exec(item);

  if (!match) {
    return item;
  }

  return (
    <>
      <strong className="font-semibold text-white">{match[1]}</strong>
      {match[2]}
    </>
  );
}

type LoanProgramFactsProps = {
  facts: LoanProgramFactsData;
};

export default function LoanProgramFacts({ facts }: LoanProgramFactsProps) {
  return (
    <div className="relative overflow-hidden rounded-[20px] bg-navy p-8 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[60px] -right-[60px] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(47,143,82,0.35),transparent_70%)]"
      />

      <div className="relative">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-[#9fb3d9]">
          {facts.title}
        </p>
        <p className="mt-1 text-[13px] text-[#b9c4dc]">{facts.subtitle}</p>

        <ul className="mt-1">
          {facts.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 border-t border-white/10 py-3 text-[14.5px] leading-[1.5] text-[#e3e9f5] first:border-t-0"
            >
              <Check
                className="mt-[3px] h-[17px] w-[17px] shrink-0 text-brand"
                strokeWidth={2.2}
                aria-hidden="true"
              />
              <span>{renderItem(item)}</span>
            </li>
          ))}
        </ul>

        {facts.note && (
          <p className="mt-5 border-t border-white/15 pt-4 text-[13px] leading-[1.6] text-[#b9c4dc]">
            {facts.note}
          </p>
        )}
      </div>
    </div>
  );
}
