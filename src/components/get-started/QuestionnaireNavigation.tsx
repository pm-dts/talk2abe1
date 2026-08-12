"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

import Button from "@/components/common/Button";
import { cn } from "@/lib/utils";

type QuestionnaireNavigationProps = {
  showBack: boolean;
  onBack: () => void;
  onContinue: () => void;
  continueLabel?: string;
  className?: string;
};

export default function QuestionnaireNavigation({
  showBack,
  onBack,
  onContinue,
  continueLabel = "Continue",
  className,
}: QuestionnaireNavigationProps) {
  return (
    <div
      className={cn(
        "grid gap-3",
        showBack ? "grid-cols-2" : "grid-cols-1",
        className,
      )}
    >
      {/* Back Button */}
      {showBack && (
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={onBack}
          className="group"
        >
          <ArrowLeft
            aria-hidden="true"
            className="
              h-4 w-4
              transition-transform
              duration-200
              ease-out
              group-hover:-translate-x-1
            "
          />

          <span>Back</span>
        </Button>
      )}

      {/* Continue Button */}
      <Button
        type="button"
        size="lg"
        onClick={onContinue}
        className={cn("group", !showBack && "col-span-full")}
      >
        <span>{continueLabel}</span>

        <ArrowRight
          aria-hidden="true"
          className="
            h-4 w-4
            transition-transform
            duration-200
            ease-out
            group-hover:translate-x-1
          "
        />
      </Button>
    </div>
  );
}
