"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// 第一行：区块链图标
const blockchains = [
  { name: "Ethereum", icon: "/icons/chains/ethereum.svg" },
  { name: "Astar", icon: "/icons/chains/astar.svg" },
  { name: "Solana", icon: "/icons/chains/solana.svg" },
  { name: "Chainlink", icon: "/icons/chains/chainlink.svg" },
  { name: "Sei", icon: "/icons/chains/sei.svg" },
  {
    name: "Avalanche",
    icon: "/icons/chains/avalanche.svg",
    color: "bg-[#E84142]"
  }
];

// 第二行：合规标准/协议
const standards = [
  { name: "ERC-1400" },
  { name: "ISO-20022" },
  { name: "CCIP" },
  { name: "W3C-DID" },
  { name: "W3C-VC" },
  { name: "ERC-3643" },
  { name: "ZK-SNARKs" },
  { name: "ZK-STARKs" }
];

// 第三行：国家/地区
const jurisdictions = [
  { name: "Hong Kong", icon: "/icons/flags/hongkong.svg" },
  { name: "Singapore", icon: "/icons/flags/singapore.svg" },
  { name: "United States", icon: "/icons/flags/usa.svg" },
  { name: "European Union", icon: "/icons/flags/eu.svg" },
  { name: "UAE", icon: "/icons/flags/uae.svg" },
  { name: "Indonesia", icon: "/icons/flags/indonesia.svg" },
  { name: "South Korea", icon: "/icons/flags/korea.svg" },
  { name: "Japan", icon: "/icons/flags/japan.svg" },
  { name: "United Nations", icon: "/icons/flags/un.svg" }
];

// 轮播行组件
function CarouselRow<T extends { name: string; icon?: string | null }>({
  items,
  visibleCount = 5,
  itemWidth = 100,
  gap = 16,
  interval = 2000,
  direction = "left",
  renderItem
}: {
  items: T[];
  visibleCount?: number;
  itemWidth?: number;
  gap?: number;
  interval?: number;
  direction?: "left" | "right";
  renderItem: (item: T) => React.ReactNode;
}) {
  // 向右滚动时，初始位置从 items.length 开始，这样左边有内容
  const [offset, setOffset] = useState(
    direction === "right" ? items.length : 0
  );

  // 复制数组实现无缝轮播
  const extendedItems = [...items, ...items, ...items];

  useEffect(() => {
    const timer = setInterval(() => {
      setOffset((prev) => {
        if (direction === "left") {
          // 向左滚动：offset 递增
          const next = prev + 1;
          return next >= items.length * 2 ? items.length : next;
        } else {
          // 向右滚动：offset 递减
          const next = prev - 1;
          return next <= 0 ? items.length : next;
        }
      });
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval, direction]);

  const translateX = -offset * (itemWidth + gap);
  const containerWidth = visibleCount * itemWidth + (visibleCount - 1) * gap;

  return (
    <div className="overflow-hidden mx-auto" style={{ width: containerWidth }}>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          gap: `${gap}px`,
          transform: `translateX(${translateX}px)`
        }}
      >
        {extendedItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex-shrink-0"
            style={{ width: itemWidth }}
          >
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Compliance() {
  return (
    <section className="bg-[#FFFFFF] py-20 lg:py-32">
      <div className="px-[12%]">
        {/* Title */}
        <h2 className="font-bodoni weight-[600] text-[48px] font-semibold text-black mb-20">
          Write once, Compliance everywhere.
        </h2>

        {/* Icons Grid with Carousel Effect */}
        <div className="flex flex-col gap-6 mb-16">
          {/* Row 1: Blockchains - 向左轮播 */}
          <CarouselRow
            items={blockchains}
            visibleCount={5}
            itemWidth={100}
            gap={16}
            interval={2000}
            direction="left"
            renderItem={(item) => (
              <div className="w-[100px] h-[100px] rounded-full bg-[#F4F7FB] flex items-center justify-center">
                <div
                  className={`w-[50px] h-[50px] rounded-full ${item.color || "bg-[#000000]"} overflow-hidden relative`}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            )}
          />

          {/* Row 2: Standards - 向右轮播 */}
          <CarouselRow
            items={standards}
            visibleCount={5}
            itemWidth={100}
            gap={16}
            interval={2500}
            direction="right"
            renderItem={(item) => (
              <div className="w-[100px] h-[100px] rounded-full bg-[#F4F7FB] flex items-center justify-center">
                <span className="text-[18px] text-[#000000] font-bold text-center leading-tight px-2">
                  {item.name}
                </span>
              </div>
            )}
          />

          {/* Row 3: Jurisdictions - 向左轮播 */}
          <CarouselRow
            items={jurisdictions}
            visibleCount={5}
            itemWidth={100}
            gap={16}
            interval={2200}
            direction="left"
            renderItem={(item) => (
              <div className="w-[100px] h-[100px] rounded-full bg-[#F4F7FB] flex items-center justify-center overflow-hidden">
                <Image
                  src={item.icon!}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </div>
            )}
          />
        </div>

        {/* Cross Labels */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <span className="font-funnel text-[24px] weight-[600] font-semibold text-black">
            Cross Chain
          </span>
          <span className="bg-[#0000004D] rounded-full w-[6px] h-[6px]"></span>
          <span className="font-funnel text-[24px] weight-[600] font-semibold text-black">
            Cross Protocol
          </span>
          <span className="bg-[#0000004D] rounded-full w-[6px] h-[6px]"></span>
          <span className="font-funnel text-[24px] weight-[600] font-semibold text-black">
            Cross Jurisdictional
          </span>
        </div>

        {/* Description */}
        <p className="font-inter text-center text-[#000000CC] text-[18px] leading-relaxed mx-[60px]">
          We are well aware that true liquidity should not be confined by the
          boundaries of technology stacks or the walls of jurisdictions.
          Chainlex has built a compliance layer with &apos;global
          adaptability&apos; that can seamlessly navigate between mainstream
          public blockchains, private financial ledgers, and the globally
          heterogeneous legal systems. By transforming fragmented regulatory
          logics into unified code standards, we ensure that your assets, no
          matter where they flow, are always under the strictest compliance
          protection.
        </p>
      </div>
    </section>
  );
}
