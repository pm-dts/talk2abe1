import type { Metadata } from "next";

import GetStarted from "@/components/get-started/GetStarted";

export const metadata: Metadata = {
  title: "Get Started | Talk2Abe",
  description:
    "Answer a few quick questions and let Abe help you find the right mortgage solution.",
};

export default function GetStartedPage() {
  return <GetStarted />;
}
