"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// Logo 数据 - 只需要替换对应的图片路径即可
const logos = [
  {
    name: "hashkey",
    src: "/images/logos/hashkey.webp",
    width: 220,
    height: 100
  },
  {
    name: "chainlink",
    src: "/images/logos/chainlink.webp",
    width: 220,
    height: 100
  },
  {
    name: "cyberport",
    src: "/images/logos/cyberport.webp",
    width: 220,
    height: 100
  },
  { name: "hkust", src: "/images/logos/hkust.webp", width: 220, height: 100 },
  { name: "gsbn", src: "/images/logos/gsbn.webp", width: 220, height: 100 },
  {
    name: "kingwood",
    src: "/images/logos/kingwood.webp",
    width: 220,
    height: 100
  },
  { name: "ey", src: "/images/logos/ey.webp", width: 220, height: 100 },
  { name: "aws", src: "/images/logos/aws.webp", width: 220, height: 100 },
  { name: "sipac", src: "/images/logos/sipac.webp", width: 220, height: 100 }
];

export default function Support() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 根据屏幕尺寸选择参数
  const logoWidth = isMobile ? 120 : 220;
  const totalWidth = logos.length * logoWidth;

  // 复制两组实现无缝循环
  const extendedLogos = [...logos, ...logos];

  return (
    <>
      <style>
        {`
          @keyframes logo-scroll-seamless {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${totalWidth}px);
            }
          }
          .logo-carousel-seamless {
            animation: logo-scroll-seamless 20s linear infinite;
          }
        `}
      </style>
      <section className="px-6 lg:px-[12%] bg-white py-20 lg:py-24 overflow-hidden">
        {/* Title */}
        <h2 className="font-bodoni weight-[600] text-[28px] sm:text-[36px] lg:text-[48px] text-black mb-8 md:mb-12 lg:mb-16">
          Support
        </h2>

        {/* Logo Carousel */}
        <div className="relative w-full overflow-hidden">
          <div className="flex logo-carousel-seamless">
            {extendedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: logoWidth }}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={isMobile ? 120 : 220}
                  height={isMobile ? 55 : 100}
                  className="object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
