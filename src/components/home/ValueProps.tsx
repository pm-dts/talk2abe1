import { Lightbulb, MessageCircle, MessageCircleCheck, UserRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/common/Container";
import { valueProps } from "@/data/value-props";
import type { ValuePropIcon } from "@/types/value-prop";

const iconMap: Record<ValuePropIcon, LucideIcon> = {
  MessageCircle,
  MessageCircleCheck,
  Lightbulb,
  UserRound,
};

export default function ValueProps() {
  if (valueProps.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-16">
      <Container>
        <div className="grid mx-auto max-w-7xl gap-x-16 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((prop) => {
            const Icon = iconMap[prop.icon];
            return (
              <div key={prop.id} className="flex items-start gap-4">
                <Icon
                  className="h-8 w-8 shrink-0 text-navy"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-base font-semibold text-navy sm:text-lg">
                    {prop.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {prop.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
