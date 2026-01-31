"use client";

import Image from "next/image";
import Link from "next/link";

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
  }
];

export default function Research() {
  return (
    <section className="bg-black py-20 lg:py-32 h-[782px]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Title */}
        <h2 className="font-bodoni weight-[600] text-[48px] font-semibold text-white mb-12">
          Research
        </h2>

        {/* Research Cards */}
        <div className="grid md:grid-cols-3">
          {researchItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group block h-[310px] w-[412px]"
            >
              <div className="relative h-[310px] w-[412px] overflow-hidden">
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
    </section>
  );
}
