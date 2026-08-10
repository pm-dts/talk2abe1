import QuestionListItem from "@/components/questions/QuestionListItem";
import EmptyState from "@/components/common/EmptyState";
import { cn } from "@/lib/utils";
import type { Question } from "@/types/question";

type QuestionListProps = {
  questions: Question[];
  className?: string;
};

export default function QuestionList({
  questions,
  className,
}: QuestionListProps) {
  return (
    <div className={cn("min-w-0", className)}>
      <div className="grid grid-cols-[minmax(0,1fr)_80px] items-baseline gap-4 border-b border-slate-200 px-5 pb-3 pt-4">
        <div className="flex min-w-0 items-baseline gap-2">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
            Questions
          </h2>
          <span className="shrink-0 text-xs text-muted">
            {questions.length} {questions.length === 1 ? "question" : "questions"}
          </span>
        </div>
        <p className="text-right text-xs font-semibold uppercase tracking-wider text-muted">
          Popular
        </p>
      </div>

      {questions.length === 0 ? (
        <EmptyState
          title="No questions found"
          description="Try adjusting your search or category filter."
        />
      ) : (
        <div className="divide-y divide-slate-200">
          {questions.map((question) => (
            <QuestionListItem key={question.id} question={question} />
          ))}
        </div>
      )}
    </div>
  );
}
