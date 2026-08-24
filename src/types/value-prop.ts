export type ValuePropIcon = "Target" | "FileText" | "ShieldCheck";

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  icon: ValuePropIcon;
}
