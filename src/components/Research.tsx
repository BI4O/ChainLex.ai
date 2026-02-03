"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const researchItems = [
  {
    title: "The 2026 Crypto Regulation outlook",
    image: "/images/agent-matrix.webp",
    link: "/research/1"
  },
  {
    title: "The 2026 Crypto Regulation outlook",
    image: "/images/agent-matrix.webp",
    link: "/research/2"
  },
  {
    title: "The 2026 Crypto Regulation outlook",
    image: "/images/agent-matrix.webp",
    link: "/research/3"
  },
  {
    title: "The 2026 Crypto Regulation outlook",
    image: "/images/agent-matrix.webp",
    link: "/research/4"
  },
  {
    title: "The 2026 Crypto Regulation outlook",
    image: "/images/agent-matrix.webp",
    link: "/research/5"
  },
  {
    title: "The 2026 Crypto Regulation outlook",
    image: "/images/agent-matrix.webp",
    link: "/research/6"
  }
];

export default function Research() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, researchItems.length - 3);

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= maxIndex;

  const handlePrev = () => {
    if (!isAtStart) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (!isAtEnd) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // 桌面端配置
  const desktopCardWidth = 412;
  const desktopGap = 24;
  const desktopTranslateX = -(currentIndex * (desktopCardWidth + desktopGap));

  // 移动端配置
  const mobileCardWidth = 280;
  const mobileGap = 16;
  const mobileTranslateX = -(currentIndex * (mobileCardWidth + mobileGap));

  return (
    <section className="bg-black py-12 md:py-20 lg:py-32">
      <div className="px-6 lg:px-[12%]">
        {/* Title */}
        <h2 className="font-bodoni weight-[600] text-[28px] sm:text-[36px] lg:text-[48px] text-white mb-8 md:mb-12">
          Research
        </h2>

        {/* ========== DESKTOP: Research Cards Carousel ========== */}
        <div className="hidden md:block relative flex items-center justify-center h-[450px]">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={isAtStart}
            className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 cursor-pointer disabled:cursor-default"
          >
            <Image
              src={
                isAtStart
                  ? "/icons/left-arrow-disabled.svg"
                  : "/icons/left-arrow.svg"
              }
              alt="Previous"
              width={32}
              height={32}
            />
          </button>

          {/* Cards Container */}
          <div
            className="overflow-hidden"
            style={{ width: `${3 * desktopCardWidth + 2 * desktopGap}px` }}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                gap: `${desktopGap}px`,
                transform: `translateX(${desktopTranslateX}px)`
              }}
            >
              {researchItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="group block flex-shrink-0"
                  style={{ width: `${desktopCardWidth}px` }}
                >
                  <div className="relative h-[310px] overflow-hidden">
                    {/* Layer 1: Background Image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Layer 2: Mask overlay */}
                    <Image
                      src="/images/mask.webp"
                      alt="mask"
                      fill
                      className="object-cover opacity-[0.7]"
                    />
                  </div>
                  {/* Card Footer */}
                  <div className="bg-white px-6 py-8 flex items-center justify-between">
                    <h3 className="font-funnel text-[24px] weight-[700] font-bold text-black pr-4 flex-1">
                      {item.title}
                    </h3>
                    <div className="w-[54px] h-[54px] bg-[#000000] rounded-full flex items-center justify-center">
                      <Image
                        src="/icons/arrow.svg"
                        alt="arrow"
                        width={16}
                        height={16}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={isAtEnd}
            className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 cursor-pointer disabled:cursor-not-allowed"
          >
            <Image
              src={
                isAtEnd
                  ? "/icons/right-arrow-disabled.svg"
                  : "/icons/right-arrow.svg"
              }
              alt="Next"
              width={32}
              height={32}
            />
          </button>
        </div>

        {/* ========== MOBILE: Research Cards Carousel ========== */}
        <div className="md:hidden relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={isAtStart}
            className="absolute left-0 z-10 cursor-pointer disabled:cursor-default -ml-2"
          >
            <Image
              src={
                isAtStart
                  ? "/icons/left-arrow-disabled.svg"
                  : "/icons/left-arrow.svg"
              }
              alt="Previous"
              width={20}
              height={20}
            />
          </button>

          {/* Cards Container */}
          <div
            className="overflow-hidden mx-4"
            style={{ width: `${mobileCardWidth}px` }}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                gap: `${mobileGap}px`,
                transform: `translateX(${mobileTranslateX}px)`
              }}
            >
              {researchItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="group block flex-shrink-0"
                  style={{ width: `${mobileCardWidth}px` }}
                >
                  <div className="relative h-[220px] overflow-hidden">
                    {/* Layer 1: Background Image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Layer 2: Mask overlay */}
                    <Image
                      src="/images/mask.webp"
                      alt="mask"
                      fill
                      className="object-cover opacity-[0.7]"
                    />
                  </div>
                  {/* Card Footer */}
                  <div className="bg-white px-4 py-5 flex items-center justify-between">
                    <h3 className="font-funnel text-[16px] weight-[700] font-bold text-black pr-2 flex-1 leading-tight">
                      {item.title}
                    </h3>
                    <div className="w-[40px] h-[40px] bg-[#000000] rounded-full flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/icons/arrow.svg"
                        alt="arrow"
                        width={12}
                        height={12}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={isAtEnd}
            className="absolute right-0 z-10 cursor-pointer disabled:cursor-default -mr-2"
          >
            <Image
              src={
                isAtEnd
                  ? "/icons/right-arrow-disabled.svg"
                  : "/icons/right-arrow.svg"
              }
              alt="Next"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
