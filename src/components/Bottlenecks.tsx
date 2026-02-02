"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const bottlenecksData = [
  {
    id: "01",
    title: "Siloed Jurisdictions.",
    description:
      "Cross-border liquidity is fragmented by incompatible legal frameworks, creating friction for global capital.",
    icon: "jurisdictions",
    color: "#DDE6F5CC",
    tabOffset: 0
  },
  {
    id: "02",
    title: "Paper Speed in a Digital Market.",
    description:
      "Manual legal reviews cannot keep pace with the scale and velocity of on-chain transactions.",
    icon: "speed",
    color: "#EBF1FACC",
    tabOffset: 100
  },
  {
    id: "03",
    title: "The Transparency Paradox.",
    description:
      "The question of how to prove ownership while protecting commercial privacy stands as a core obstacle to institutions' large-scale participation in the market.",
    icon: "transparency",
    color: "#F1F6FDCC",
    tabOffset: 200
  },
  {
    id: "04",
    title: "The Enforcement Vacuum.",
    description:
      "If on-chain code cannot drive real–world legal actions, ownership confirmation will remain merely at the digital level.",
    icon: "enforcement",
    color: "#FFFFFF",
    tabOffset: 300
  }
];

// Placeholder
function CardIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    jurisdictions: (
      <Image
        src="/icons/jurisdictions-icon.svg"
        alt="jurisdictions"
        width={64}
        height={64}
      />
    ),
    speed: <Image src="/icons/speed.svg" alt="speed" width={64} height={64} />,
    transparency: (
      <Image
        src="/icons/transparency.svg"
        alt="transparency"
        width={64}
        height={64}
      />
    ),
    enforcement: (
      <Image
        src="/icons/enforcement.svg"
        alt="enforcement"
        width={64}
        height={64}
      />
    )
  };
  return <>{icons[type] || icons.enforcement}</>;
}

export default function Bottlenecks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const cardHeight = 320;
  const collapsedOffset = 90; // 叠加后每张卡片露出的高度

  return (
    <section
      ref={containerRef}
      className="bg-[#f5f7fa] relative"
      style={{ height: `${cardHeight * bottlenecksData.length + 800}px` }}
    >
      <div className="px-6 lg:px-[12%] sticky top-0 min-h-screen flex items-start pt-[10vh] md:pt-[15vh] overflow-hidden">
        <div className="max-w-[1440px] w-full">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Left Content */}
            <div className="lg:w-[40%]">
              <h2 className="font-bodoni text-[28px] sm:text-[36px] lg:text-[48px] font-semibold text-black leading-tight mb-6">
                Four Bottlenecks
                <br />
                Holding Back $16
                <br />
                Trillion in Liquidity.
              </h2>
              <p className="text-[#00000080] text-[14px] sm:text-[16px] md:text-[18px] font-inter">
                Over $16 trillion in assets are constrained by real-world
                conditions, leaving their potential unrealized.
              </p>
            </div>

            {/* ========== MOBILE: Accordion Cards ========== */}
            <div className="lg:hidden w-full flex flex-col">
              {bottlenecksData.map((item, index) => (
                <MobileAccordionCard
                  key={item.id}
                  item={item}
                  index={index}
                  isExpanded={expandedIndex === index}
                  onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
                />
              ))}
            </div>

            {/* ========== DESKTOP: Stacked Cards ========== */}
            <div className="hidden lg:block lg:w-[55%] relative h-[700px]">
              {bottlenecksData.map((item, index) => (
                <BottleneckCard
                  key={item.id}
                  item={item}
                  index={index}
                  totalCards={bottlenecksData.length}
                  scrollYProgress={scrollYProgress}
                  cardHeight={cardHeight}
                  collapsedOffset={collapsedOffset}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Mobile Accordion Card Component
interface MobileAccordionCardProps {
  item: (typeof bottlenecksData)[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

function MobileAccordionCard({ item, isExpanded, onToggle }: MobileAccordionCardProps) {
  return (
    <motion.div
      className="w-full overflow-hidden"
      style={{ backgroundColor: item.color }}
      initial={false}
      animate={{
        height: isExpanded ? "auto" : 72
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      {/* Header - Always Visible */}
      <div
        className="flex items-center justify-between px-4 cursor-pointer"
        style={{ height: 72, boxShadow: "0 1px 2px rgba(0,0,0,0.06)" }}
        onClick={onToggle}
      >
        <div className="flex items-center gap-3">
          {/* ID Badge - Inline */}
          <span
            className="text-[14px] font-bold px-2 py-1"
            style={{
              color: item.id === "04" ? "#000" : "#666"
            }}
          >
            {item.id}
          </span>
          {/* Title */}
          <h3 className="text-[16px] sm:text-[18px] text-black font-funnel font-medium leading-tight">
            {item.title}
          </h3>
        </div>
        {/* Expand Arrow Indicator */}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-black/30"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </motion.div>
      </div>

      {/* Expanded Content */}
      <motion.div
        className="px-4 pb-4"
        initial={false}
        animate={{
          opacity: isExpanded ? 1 : 0,
          height: isExpanded ? "auto" : 0
        }}
        transition={{
          duration: 0.2,
          delay: isExpanded ? 0.1 : 0
        }}
      >
        <div className="overflow-hidden">
          {/* Icon */}
          <div className="w-10 h-10 mb-3 flex items-center justify-center">
            <CardIcon type={item.icon} />
          </div>

          {/* Description */}
          <p className="text-[14px] text-black/80 font-inter leading-relaxed">
            {item.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface BottleneckCardProps {
  item: (typeof bottlenecksData)[0];
  index: number;
  totalCards: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  cardHeight: number;
  collapsedOffset: number;
}

function BottleneckCard({
  item,
  index,
  totalCards,
  scrollYProgress,
  cardHeight,
  collapsedOffset
}: BottleneckCardProps) {
  const isLastCard = index === totalCards - 1;

  // 初始位置：卡片垂直排列
  const initialY = index * cardHeight;

  // 动画分段：
  // 阶段0 (0 - 0.1): 初始状态，所有卡片展开
  // 阶段1 (0.1 - 0.35): 卡片2,3,4 一起向上移动，直到卡片2盖住卡片1
  // 阶段2 (0.35 - 0.6): 卡片3,4 一起向上移动，直到卡片3盖住卡片2
  // 阶段3 (0.6 - 0.85): 卡片4 向上移动，直到卡片4盖住卡片3

  // 计算每张卡片在各个阶段的位置
  const getCardPosition = (cardIndex: number) => {
    if (cardIndex === 0) {
      // 卡片1 始终在位置0
      return [0, 0, 0, 0, 0];
    }
    if (cardIndex === 1) {
      // 卡片2: 阶段1移动到叠加位置
      return [
        initialY, // 0: 初始
        initialY, // 0.1: 开始
        collapsedOffset, // 0.35: 盖住卡片1
        collapsedOffset, // 0.6
        collapsedOffset // 0.85
      ];
    }
    if (cardIndex === 2) {
      // 卡片3: 阶段1跟随卡片2，阶段2移动到叠加位置
      const phase1End = collapsedOffset + cardHeight; // 跟随卡片2后的位置
      return [
        initialY, // 0: 初始
        initialY, // 0.1: 开始
        phase1End, // 0.35: 跟随卡片2
        collapsedOffset * 2, // 0.6: 盖住卡片2
        collapsedOffset * 2 // 0.85
      ];
    }
    // 卡片4: 阶段1跟随卡片2，阶段2跟随卡片3，阶段3移动到叠加位置
    const phase1End = collapsedOffset + cardHeight * 2;
    const phase2End = collapsedOffset * 2 + cardHeight;
    return [
      initialY, // 0: 初始
      initialY, // 0.1: 开始
      phase1End, // 0.35: 跟随卡片2
      phase2End, // 0.6: 跟随卡片3
      collapsedOffset * 3 // 0.85: 盖住卡片3
    ];
  };

  const positions = getCardPosition(index);

  // Y轴位置动画
  const y = useTransform(scrollYProgress, [0, 0.1, 0.35, 0.6, 0.85], positions);

  // 内容透明度：被盖住时隐藏
  const getOpacityValues = (cardIndex: number) => {
    if (cardIndex === 0) return [1, 1, 0, 0, 0]; // 阶段1结束时隐藏
    if (cardIndex === 1) return [1, 1, 1, 0, 0]; // 阶段2结束时隐藏
    if (cardIndex === 2) return [1, 1, 1, 1, 0]; // 阶段3结束时隐藏
    return [1, 1, 1, 1, 1]; // 最后一张始终显示
  };

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.35, 0.6, 0.85],
    getOpacityValues(index)
  );

  return (
    <motion.div
      className="absolute w-full overflow-visible"
      style={{
        y,
        height: cardHeight,
        zIndex: index + 1,
        backgroundColor: item.color
      }}
    >
      {/* Trapezoid Tab - 梯形标签 */}
      <div
        className="absolute -top-[28px] h-[34px] flex items-center justify-center text-[20] font-medium"
        style={{
          left: `${item.tabOffset}px`,
          backgroundColor: item.color,
          clipPath: "polygon(8px 0%, calc(100% - 8px) 0%, 100% 100%, 0% 100%)",
          width: "94px",
          color: isLastCard ? "#000" : "#666",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px"
        }}
      >
        {item.id}
      </div>

      {/* Card Content */}
      <motion.div className="p-6 lg:p-10 pt-4 lg:pt-6" style={{ opacity: contentOpacity }}>
        {/* Icon */}
        <div className="w-12 h-12 mb-6 flex items-center justify-center text-black">
          <CardIcon type={item.icon} />
        </div>

        {/* Title */}
        <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] text-black mb-4 weight-[700] font-funnel">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-[#00000080] text-[16px] font-inter">
          {item.description}
        </p>
      </motion.div>
    </motion.div>
  );
}
