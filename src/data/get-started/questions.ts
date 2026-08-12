import { questionOptions } from "@/data/get-started/options";
import type { GetStartedStep } from "@/types/get-started";

export const getStartedSteps: GetStartedStep[] = [
  {
    id: "goal",
    title: "What can I help you with?",
    description: "Choose the option that best fits your goal.",
    type: "options",
    options: questionOptions.goal,
  },
  {
    id: "propertyUse",
    title: "How will the property be used?",
    description: "Select the best option.",
    type: "options",
    options: questionOptions.propertyUse,
  },
  {
    id: "processStage",
    title: "Where are you in the process?",
    description: "Choose the option that describes you best.",
    type: "options",
    options: questionOptions.processStage,
  },
  {
    id: "propertyValue",
    title: "What's the approximate property value or purchase price?",
    description: "Enter your best estimate.",
    type: "currency",
  },
  {
    id: "financingAmount",
    title: "Approximately how much financing are you looking for?",
    description: "Enter your best estimate.",
    type: "currency",
  },
  {
    id: "borrowerSituation",
    title: "Which best describes your situation?",
    description: "Select the option that fits you best.",
    type: "options",
    layout: "grid",
    options: questionOptions.borrowerSituation,
  },
  {
    id: "creditRange",
    title: "How would you describe your credit?",
    description: "Select the option that best fits.",
    type: "options",
    options: questionOptions.creditRange,
  },
  {
    id: "contact",
    title: "Let's Talk",
    description:
      "Tell me how to reach you and I'll review what you're looking for.",
    type: "contact",
  },
];
