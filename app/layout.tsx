import * as React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/scroll-progress";
import { MenuOverlay } from "@/components/menu-overlay";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "MAYA OKAFOR",
  description: "Motion designer · creative developer · visual storyteller",
  robots: { index: true, follow: true },
  openGraph: {
    title: "MAYA OKAFOR",
    description: "Motion designer · creative developer · visual storyteller",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <body>
        <ScrollProgress />
        <MenuOverlay />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
