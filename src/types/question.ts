export type QuestionIcon =
  | "house"
  | "user"
  | "building"
  | "houseplus"
  | "percent"
  | "document"
  | "dollar";

export interface Question {
  id: string;
  slug: string;
  title: string;
  category?: string;
  popular?: boolean;
  icon: QuestionIcon;
}
