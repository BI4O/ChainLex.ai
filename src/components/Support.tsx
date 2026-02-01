"use client";

import Image from "next/image";

// Logo 数据 - 只需要替换对应的图片路径即可
const logos = [
  {
    name: "hashkey",
    src: "/images/logos/hashkey.png",
    width: 220,
    height: 100
  },
  {
    name: "chainlink",
    src: "/images/logos/chainlink.png",
    width: 220,
    height: 100
  },
  {
    name: "cyberport",
    src: "/images/logos/cyberport.png",
    width: 220,
    height: 100
  },
  { name: "hkust", src: "/images/logos/hkust.png", width: 220, height: 100 },
  { name: "gsbn", src: "/images/logos/gsbn.png", width: 220, height: 100 },
  {
    name: "kingwood",
    src: "/images/logos/kingwood.png",
    width: 220,
    height: 100
  },
  { name: "ey", src: "/images/logos/ey.png", width: 220, height: 100 },
  { name: "aws", src: "/images/logos/aws.png", width: 220, height: 100 },
  { name: "sipac", src: "/images/logos/sipac.png", width: 220, height: 100 }
];

// 计算一组 logo 的总宽度
const LOGO_WIDTH = 220;
const TOTAL_WIDTH = logos.length * LOGO_WIDTH;

export default function Support() {
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
              transform: translateX(-${TOTAL_WIDTH}px);
            }
          }
          .logo-carousel-seamless {
            animation: logo-scroll-seamless 20s linear infinite;
          }
        `}
      </style>
      <section className="pl-[16%] bg-white py-20 lg:py-24 overflow-hidden">
        {/* Title */}
        <h2 className="font-bodoni text-[48px] weight-[600] text-black mb-16">
          Support
        </h2>

        {/* Logo Carousel */}
        <div className="relative w-full overflow-hidden">
          <div className="flex logo-carousel-seamless">
            {extendedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: LOGO_WIDTH }}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
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
