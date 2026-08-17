"use client";

import { usePathname } from "next/navigation";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

type SiteChromeProps = {
  children: React.ReactNode;
};

export default function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname();

  // /get-started is a standalone experience.
  // Keep it free from the normal website Header and Footer.
  const normalizedPathname = pathname.replace(/\/+$/, "");
  const standalone = normalizedPathname === "/get-started";

  return (
    <>
      {!standalone && <Header />}

      <main className="min-h-0 flex-1">{children}</main>

      {!standalone && <Footer />}
    </>
  );
}
