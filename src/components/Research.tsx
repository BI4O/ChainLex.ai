"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const researchItems = [
  {
    title: "The 2026 Crypto Regulation outlook",
    image: "/images/agent-matrix.png",
    link: "/research/1"
  },
  {
    title: "The 2026 Crypto Regulation outlook",
    image: "/images/agent-matrix.png",
    link: "/research/2"
  },
  {
    title: "The 2026 Crypto Regulation outlook",
    image: "/images/agent-matrix.png",
    link: "/research/3"
  },
  {
    title: "The 2026 Crypto Regulation outlook",
    image: "/images/agent-matrix.png",
    link: "/research/4"
  },
  {
    title: "The 2026 Crypto Regulation outlook",
    image: "/images/agent-matrix.png",
    link: "/research/5"
  },
  {
    title: "The 2026 Crypto Regulation outlook",
    image: "/images/agent-matrix.png",
    link: "/research/6"
  }
];

const CARD_WIDTH = 412;
const GAP = 24;

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

  const translateX = -(currentIndex * (CARD_WIDTH + GAP));

  return (
    <section className="bg-black py-20 lg:py-32 h-[782px]">
      <div className="px-[16%]">
        {/* Title */}
        <h2 className="font-bodoni weight-[600] text-[48px] font-semibold text-white mb-12">
          Research
        </h2>

        {/* Research Cards Carousel */}
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={isAtStart}
            className="absolute -left-16 z-10 cursor-pointer disabled:cursor-default"
          >
            <Image
              src={isAtStart ? "/icons/left-arrow-disabled.svg" : "/icons/left-arrow.svg"}
              alt="Previous"
              width={24}
              height={24}
            />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden" style={{ width: `${3 * CARD_WIDTH + 2 * GAP}px` }}>
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                gap: `${GAP}px`,
                transform: `translateX(${translateX}px)`
              }}
            >
              {researchItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="group block flex-shrink-0"
                  style={{ width: `${CARD_WIDTH}px` }}
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
                      src="/images/mask.png"
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
            className="absolute -right-16 z-10 cursor-pointer disabled:cursor-default"
          >
            <Image
              src={isAtEnd ? "/icons/right-arrow-disabled.svg" : "/icons/right-arrow.svg"}
              alt="Next"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
