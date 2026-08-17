import type { Metadata } from "next";
import {
  Fraunces,
  IBM_Plex_Mono,
  Manrope,
} from "next/font/google";
import SiteChrome from "@/components/common/SiteChrome";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Talk2Abe",
  description: "Straightforward mortgage answers from Abe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${fraunces.variable} ${ibmPlexMono.variable} font-sans flex min-h-dvh flex-col`}
      >
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}