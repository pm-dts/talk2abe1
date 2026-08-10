import QuestionListItem from "@/components/questions/QuestionListItem";
import { cn } from "@/lib/utils";
import type { Question } from "@/types/question";

type RelatedQuestionsProps = {
  questions: Question[];
  title?: string;
  className?: string;
};

export default function RelatedQuestions({
  questions,
  title = "Related Questions",
  className,
}: RelatedQuestionsProps) {
  if (questions.length === 0) {
    return null;
  }

  return (
    <section className={cn(className)}>
      <h2 className="mb-5 text-xl font-semibold text-navy sm:text-2xl">
        {title}
      </h2>
      <div className="divide-y divide-slate-200">
        {questions.map((question) => (
          <QuestionListItem key={question.id} question={question} />
        ))}
      </div>
    </section>
  );
}
