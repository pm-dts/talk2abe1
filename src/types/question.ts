export type QuestionIcon =
  | "house"
  | "user"
  | "building"
  | "houseplus"
  | "percent"
  | "document"
  | "dollar";

export type QuestionVideo = {
  thumbnail: string;
  url?: string;
};

export type ProgramLink = {
  href: string;
  label?: string;
};

export interface Question {
  id: string;
  slug: string;
  title: string;
  category?: string;
  popular?: boolean;
  icon: QuestionIcon;
  author?: string;
  publishedAt?: string;
  video?: QuestionVideo;
  shortAnswer?: string;
  fullAnswer?: string[];
  abeTip?: string;
  relatedQuestionIds?: string[];
  programLink?: ProgramLink;
  metaDescription?: string;
}
