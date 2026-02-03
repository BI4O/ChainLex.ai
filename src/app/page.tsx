import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Bottlenecks from "@/components/Bottlenecks";
import Statement from "@/components/Statement";
import Solutions from "@/components/Solutions";
import DemoCTA from "@/components/DemoCTA";
import Architecture from "@/components/Architecture";
import Compliance from "@/components/Compliance";
import Ecosystem from "@/components/Ecosystem";
import Support from "@/components/Support";
import FlagshipUseCase from "@/components/FlagshipUseCase";
import ContactCTA from "@/components/ContactCTA";
import Research from "@/components/Research";
import Team from "@/components/Team";
import FinalStatement from "@/components/FinalStatement";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "ChainLex - AI-Driven Compliance Infrastructure for Tokenized Assets",
  description: "Automate blockchain compliance with ChainLex's AI-powered platform. Streamline regulatory reporting, ensure jurisdiction adherence, and scale your tokenized asset operations globally.",
  openGraph: {
    title: "ChainLex - Compliance, Codified",
    description: "The AI-Driven Compliance Infrastructure for Tokenized Assets. Automate compliance checks, streamline regulatory reporting, and ensure global jurisdiction adherence.",
    url: "https://chainlex.ai",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      <StructuredData type="organization" />
      <StructuredData type="website" />
      <Header />
      <Hero />
      <Bottlenecks />
      <Statement />
      <Solutions />
      <DemoCTA />
      <Architecture />
      <Compliance />
      <Ecosystem />
      <Support />
      <FlagshipUseCase />
      <ContactCTA />
      <Research />
      <Team />
      <FinalStatement />
      <Footer />
    </main>
  );
}
