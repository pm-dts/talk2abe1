import { Target, FileText, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Container from "@/components/common/Container";
import { valueProps } from "@/data/value-props";
import type { ValuePropIcon } from "@/types/value-prop";

const iconMap: Record<ValuePropIcon, LucideIcon> = {
  Target,
  FileText,
  ShieldCheck,
};

export default function ValueProps() {
  if (valueProps.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-14 sm:py-16">
      <Container>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0">
          {valueProps.map((prop, index) => {
            const Icon = iconMap[prop.icon];

            return (
              <div
                key={prop.id}
                className={`
                  flex
                  flex-col
                  items-center
                  px-2
                  text-center
                  ${index !== 0 ? "sm:border-l sm:border-line" : ""}
                `}
              >
                <span
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-mint
                    text-brand
                  "
                >
                  <Icon className="h-7 w-7" strokeWidth={1.8} aria-hidden="true" />
                </span>

                <h3 className="mt-4 text-[15px] font-semibold leading-snug text-navy sm:text-base">
                  {prop.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
