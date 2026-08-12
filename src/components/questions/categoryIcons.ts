import {
  ArrowLeftRight,
  Building2,
  FileCheck,
  Globe,
  HardHat,
  HousePlus,
  Landmark,
  Layers,
  PaintRoller,
  RefreshCcw,
  Stethoscope,
  UserRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { categories } from "@/data/categories";
import type { CategoryIcon } from "@/types/category";

export const categoryIconMap: Record<CategoryIcon, LucideIcon> = {
  purchase: HousePlus,
  refinance: RefreshCcw,
  "self-employed": UserRound,
  dscr: Building2,
  reverse: ArrowLeftRight,
  "reverse-2nd": Layers,
  "bank-statement": Landmark,
  itin: FileCheck,
  "foreign-national": Globe,
  medical: Stethoscope,
  construction: HardHat,
  "fix-flip": PaintRoller,
};

export function getCategoryIcon(name: string): LucideIcon {
  const category = categories.find((item) => item.name === name);

  if (!category) {
    return HousePlus;
  }

  return categoryIconMap[category.icon];
}
