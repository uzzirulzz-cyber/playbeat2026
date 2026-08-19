import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PlayBeat Digital — Verified Smart Projectors & 4K Cinema Marketplace",
  description:
    "PlayBeat Digital (playbeat.digital) — Pakistan's premier marketplace for verified Magcubic smart projectors, 4K cinema hardware, and ZeroByte official accessories. Real prices, TCS courier dispatch, 1-year replacement warranty.",
  keywords: [
    "PlayBeat Digital",
    "playbeat.digital",
    "smart projectors",
    "Magcubic HY300",
    "HM103-A",
    "HCS350-Pro",
    "HT23 projector",
    "HY7 battery projector",
    "ZeroByte store",
    "4K cinema projector",
    "Pakistan projector store",
  ],
  authors: [{ name: "PlayBeat Digital" }],
  openGraph: {
    title: "PlayBeat Digital — Verified Smart Projectors & 4K Cinema Marketplace",
    description:
      "Verified Magcubic smart projectors, 4K cinema hardware, and ZeroByte official accessories with TCS courier dispatch across Pakistan.",
    siteName: "PlayBeat Digital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PlayBeat Digital — Smart Projectors",
    description: "Verified Magcubic smart projectors and 4K cinema hardware with TCS courier dispatch.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f4f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} antialiased min-h-screen`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
