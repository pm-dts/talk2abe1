import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Manrope } from "next/font/google";

import SiteChrome from "@/components/common/SiteChrome";
import AbeChatEmbed from "@/components/chat/AbeChatEmbed";
import BusinessSchema from "@/components/seo/BusinessSchema";
import PersonSchema from "@/components/seo/PersonSchema";
import WebSiteSchema from "@/components/seo/WebSiteSchema";
// import I18nProvider from "@/i18n/I18nProvider"; // Commented out: multi-language disabled
import { seoConfig, seoImages, SITE_URL } from "@/config/seo";

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
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: seoConfig.defaultTitle,
    template: "%s | Talk2Abe",
  },
  description: seoConfig.defaultDescription,
  applicationName: seoConfig.siteName,
  category: "Mortgage and financial services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: seoConfig.siteName,
    url: SITE_URL,
    images: [
      {
        url: seoImages.default,
        width: 1200,
        height: 630,
        alt: "Talk2Abe — Straightforward Mortgage Answers from Abe Hakawati",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    images: [seoImages.default],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${fraunces.variable} ${ibmPlexMono.variable} font-sans flex min-h-dvh flex-col`}
      >
        {/* Commented out: multi-language disabled — re-enable by wrapping in <I18nProvider> */}
        <SiteChrome>{children}</SiteChrome>

        <AbeChatEmbed />

        <WebSiteSchema />
        <BusinessSchema />
        <PersonSchema />
      </body>
    </html>
  );
}
