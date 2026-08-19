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
  title: "PlayBeat Digital — Premium Digital Goods Marketplace",
  description:
    "PlayBeat Digital (playbeat.digital) — Premium Martfury marketplace for verified software keys, streaming passes, AI suites, smart projectors, game keys, gift cards and digital products. Instant delivery, secure payments.",
  keywords: [
    "PlayBeat Digital",
    "playbeat.digital",
    "digital marketplace",
    "software keys",
    "IPTV 4K",
    "AI tools",
    "smart projectors",
    "game keys",
    "gift cards",
    "Pakistan digital store",
  ],
  authors: [{ name: "PlayBeat Digital" }],
  openGraph: {
    title: "PlayBeat Digital — Premium Digital Goods Marketplace",
    description:
      "Verified software keys, streaming passes, AI suites, smart projectors, game keys, and gift cards. Instant delivery across Pakistan.",
    siteName: "PlayBeat Digital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PlayBeat Digital",
    description: "Premium digital goods marketplace with instant delivery.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f4ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1120" },
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
