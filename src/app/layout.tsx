import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const funnelSans = localFont({
  src: [
    {
      path: "../fonts/FunnelSans-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../fonts/FunnelSans-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-funnel-sans",
  display: "swap",
});

const inter = localFont({
  src: [
    {
      path: "../fonts/Inter-VariableFont_opsz,wght.ttf",
      style: "normal",
    },
    {
      path: "../fonts/Inter-Italic-VariableFont_opsz,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

const libreBodoni = localFont({
  src: [
    {
      path: "../fonts/LibreBodoni-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../fonts/LibreBodoni-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-libre-bodoni",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ChainLex - Compliance, Codified",
  description: "The AI-Driven Compliance Infrastructure for Tokenized Assets",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/logo.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ChainLex",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${funnelSans.variable} ${inter.variable} ${libreBodoni.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
