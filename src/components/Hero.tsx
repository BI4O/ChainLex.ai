"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        {/* Main Title */}
        <h1 className="font-[var(--font-playfair)] text-5xl text-[110px] text-white text-center mb-4">
          Compliance,Codified.
        </h1>

        {/* Subtitle */}
        <p className="text-white/70 text-sm text-center mb-30 max-w-xl text-[18px]">
          The AI-Driven Compliance Infrastructure for Tokenized Assets
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-8">
          {/* Open Platform Button */}
          <Link
            href="/platform"
            className="group relative flex items-center gap-2 pb-1"
          >
            <span className="text-white text-[20px] font-bold">
              Open Platform
            </span>
            <Image src="/icons/arrow.svg" alt="arrow" width={24} height={24} />
            {/* Hover underline */}
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
          </Link>

          {/* Request a Demo Button */}
          <Link
            href="/demo"
            className="group relative flex items-center gap-2 pb-1"
          >
            <span className="text-white text-[20px] font-bold">
              Request a demo
            </span>
            <Image src="/icons/arrow.svg" alt="arrow" width={24} height={24} />
            {/* Hover underline */}
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
