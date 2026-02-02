"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <style>
        {`
          .hero-underline {
            width: 0;
            transition: width 0.3s ease-out;
          }
          .hero-link:hover .hero-underline {
            width: 100% !important;
          }
        `}
      </style>
      <section className="relative min-h-screen w-full overflow-hidden">
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
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 lg:px-12">
          {/* Main Title */}
          <h1 className="font-bodoni text-[32px] sm:text-[40px] md:text-[56px] lg:text-[96px] xl:text-[110px] text-white text-center mb-4 leading-tight">
            Compliance,Codified.
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-sm text-center mb-30 max-w-xl text-[16px] md:text-[18px]">
            The AI-Driven Compliance Infrastructure for RWA
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* Open Platform Button */}
            <Link
              href="/platform"
              className="hero-link relative flex items-center gap-2 pb-1"
            >
              <span className="font-inter text-white text-[14px] md:text-[20px] font-bold">
                Open Platform
              </span>
              <Image src="/icons/arrow.svg" alt="arrow" width={20} height={20} className="md:w-[24px] md:h-[24px]" />
              {/* Hover underline */}
              <span className="hero-underline absolute bottom-0 left-0 h-[3px] bg-white" />
            </Link>

            {/* Request a Demo Button */}
            <Link
              href="/demo"
              className="hero-link relative flex items-center gap-2 pb-1"
            >
              <span className="font-inter text-white text-[14px] md:text-[20px] font-bold">
                Request a demo
              </span>
              <Image src="/icons/arrow.svg" alt="arrow" width={20} height={20} className="md:w-6 md:h-6" />
              {/* Hover underline */}
              <span className="hero-underline absolute bottom-0 left-0 h-[3px] bg-white" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
