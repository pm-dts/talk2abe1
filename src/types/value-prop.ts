export type ValuePropIcon =
  | "MessageCircle"
  | "UserRound"
  | "Lightbulb"
  | "MessageCircleCheck";

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  icon: ValuePropIcon;
}
