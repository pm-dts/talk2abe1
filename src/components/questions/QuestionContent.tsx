import { cn } from "@/lib/utils";

type QuestionContentProps = {
  shortAnswer: string;
  fullAnswer: string | string[];
  className?: string;
};

export default function QuestionContent({
  shortAnswer,
  fullAnswer,
  className,
}: QuestionContentProps) {
  const paragraphs = Array.isArray(fullAnswer) ? fullAnswer : [fullAnswer];

  return (
    <section className={cn("text-left", className)}>
      <div>
        <h2 className="text-lg font-semibold text-navy">Short Answer</h2>
        <p className="mt-2 text-base leading-relaxed text-navy">
          {shortAnswer}
        </p>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold text-navy">The Full Answer</h2>
        <div className="mt-2 space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed text-navy">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
