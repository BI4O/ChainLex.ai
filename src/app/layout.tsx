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
  metadataBase: new URL("https://chainlex.ai"),
  title: {
    default: "ChainLex - Compliance, Codified",
    template: "%s | ChainLex"
  },
  description: "The AI-Driven Compliance Infrastructure for Tokenized Assets. Automate compliance checks, streamline regulatory reporting, and ensure global jurisdiction adherence with ChainLex's intelligent agents.",
  keywords: ["blockchain compliance", "tokenized assets", "crypto regulation", "AI compliance", "DeFi regulation", "RWA compliance", "regulatory automation"],
  authors: [{ name: "ChainLex" }],
  creator: "ChainLex",
  publisher: "ChainLex",
  alternates: {
    canonical: "https://chainlex.ai",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/logo.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ChainLex",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chainlex.ai",
    title: "ChainLex - Compliance, Codified",
    description: "The AI-Driven Compliance Infrastructure for Tokenized Assets",
    siteName: "ChainLex",
    images: [
      {
        url: "/icons/logo.svg",
        width: 43,
        height: 43,
        alt: "ChainLex Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChainLex - Compliance, Codified",
    description: "The AI-Driven Compliance Infrastructure for Tokenized Assets",
    creator: "@ChainLex",
    images: ["/icons/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
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
