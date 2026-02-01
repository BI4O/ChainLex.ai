"use client";

import Image from "next/image";
import { useState, useRef } from "react";

const modules = [
  {
    name: "LexStudio",
    items: [
      "Compliance design",
      "SPV Setup",
      "KYC/AML",
      "eBL Wrapping",
      "Smart Contract Deploy"
    ]
  },
  {
    name: "LexOracle",
    items: ["Logistics API", "Legal State Monitor", "Risk Trigger"]
  },
  {
    name: "LexEnforcer",
    items: [
      "Scenario A (Success): Cargo Arrives-Auto-Repayment via Smart Contract.",
      "Scenario B (Default): Payment Missed-- Trigger Maritime Lien & Asset Seizure."
    ]
  }
];

// 图标配置：默认黑色，激活后蓝色
const icons = [
  { name: "ship", black: "/icons/ship-black.svg", color: "/icons/ship.svg" },
  {
    name: "grid",
    black: "/icons/nine-square-grid-black.svg",
    color: "/icons/nine-square-grid.svg"
  },
  {
    name: "trend",
    black: "/icons/trend-line-black.svg",
    color: "/icons/trend-line.svg"
  }
];

export default function FlagshipUseCase() {
  const [isActivated, setIsActivated] = useState(false);
  const [activeIconIndex, setActiveIconIndex] = useState(-1);
  const [activeModuleIndex, setActiveModuleIndex] = useState(-1);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
    timeoutsRef.current = [];
  };

  const handleClick = () => {
    // 清除所有未完成的 timeout
    clearAllTimeouts();

    if (isActivated) {
      // 重置状态
      setIsActivated(false);
      setActiveIconIndex(-1);
      setActiveModuleIndex(-1);
      return;
    }

    // 开始动画序列
    setIsActivated(true);

    // 依次激活 (总时长约4秒)
    // 顺序: 第一个图标 -> LexStudio -> LexOracle -> LexEnforcer -> 第二个图标 -> 第三个图标
    timeoutsRef.current.push(setTimeout(() => setActiveIconIndex(0), 0)); // 第一个图标
    timeoutsRef.current.push(setTimeout(() => setActiveModuleIndex(0), 700)); // LexStudio
    timeoutsRef.current.push(setTimeout(() => setActiveModuleIndex(1), 1400)); // LexOracle
    timeoutsRef.current.push(setTimeout(() => setActiveModuleIndex(2), 2100)); // LexEnforcer
    timeoutsRef.current.push(setTimeout(() => setActiveIconIndex(1), 2800)); // 第二个图标
    timeoutsRef.current.push(setTimeout(() => setActiveIconIndex(2), 3500)); // 第三个图标
  };

  return (
    <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image src="/images/flagship-bg.png" alt="Flagship background" fill />
      </div>

      <div className="relative px-[16%]">
        {/* Header */}
        <div className="mb-8">
          <h2 className="font-bodoni weight-[600] text-[48px] font-semibold text-black mb-2">
            Flagship Use Case
          </h2>
          <p className="font-inter text-[#00000080] text-[18px]">
            Transforming the $25 trillion of global trade underpinned by Bills
            of Lading into liquid, programmable, and enforceable digital assets.
          </p>
        </div>

        {/* Subtitle */}
        <h3 className="font-inter text-[32px] font-semibold text-black text-center mb-14">
          eBL RWA Tokenization
        </h3>

        {/* Process Flow */}
        <div className="flex items-start justify-between gap-4 mb-12">
          {/* Ship Icon */}
          <div className="flex-shrink-0 transition-all duration-500">
            <Image
              src={activeIconIndex >= 0 ? icons[0].color : icons[0].black}
              alt="Ship Icon"
              width={80}
              height={60}
            />
          </div>

          {/* Dotted Line Arrow */}
          <div className="flex items-center pt-8 flex-shrink-0">
            <Image
              src={
                activeIconIndex >= 0
                  ? "/icons/dotted-line-haircut.svg"
                  : "/icons/dotted-line-haircut-black.svg"
              }
              alt="Arrow"
              width={80}
              height={12}
            />
          </div>

          {/* Three Module Cards */}
          <div className="flex gap-4 justify-center mt-2">
            {modules.map((module, index) => {
              const isModuleActive = activeModuleIndex >= index;
              return (
                <div key={index} className="flex flex-col items-center">
                  {/* Module Card */}
                  <div
                    className={`font-inter px-6 py-3 rounded-xl weight-[600] text-[20px] font-semibold min-w-[190px] flex items-center justify-center relative transition-all duration-500 h-[60px] ${
                      isModuleActive
                        ? "text-white"
                        : "text-black bg-white shadow-sm"
                    }`}
                    style={{
                      background: isModuleActive
                        ? "linear-gradient(180deg, #324998 0%, #1a2a5e 100%)"
                        : "white"
                    }}
                  >
                    {module.name}
                    {/* Triangle pointer - only show when activated */}
                    {isModuleActive && (
                      <div
                        className="absolute left-1/2 -translate-x-1/2 -bottom-[7px] w-6 h-2"
                        style={{
                          background: "#1a2a5e",
                          clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)"
                        }}
                      />
                    )}
                  </div>

                  {/* Items List - 保留占位空间，只切换可见性 */}
                  <div
                    className={`mt-6 space-y-2 transition-opacity duration-500 ${
                      isModuleActive ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {module.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center gap-1 text-[14px] text-[#000000CC] bg-[#FFFFFF80] rounded-[10px] px-4 py-2 w-[190px] relative"
                        style={{
                          transitionDelay: `${itemIndex * 100}ms`
                        }}
                      >
                        <span className="font-inter flex-1 flex items-center justify-between">
                          {item}
                          <svg
                            className="w-5 h-5 text-[#4CAF50] flex-shrink-0 absolute right-[5px] bottom-[8px]"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dotted Line Arrow */}
          <div className="flex items-center pt-8 flex-shrink-0">
            <Image
              src={
                activeIconIndex >= 1
                  ? "/icons/dotted-line-haircut.svg"
                  : "/icons/dotted-line-haircut-black.svg"
              }
              alt="Arrow"
              width={80}
              height={12}
            />
          </div>

          {/* Grid Icon */}
          <div className="transition-all duration-500">
            <Image
              src={activeIconIndex >= 1 ? icons[1].color : icons[1].black}
              alt="Grid Icon"
              width={64}
              height={80}
            />
          </div>

          <div className="flex items-center pt-8 flex-shrink-0">
            <Image
              src={
                activeIconIndex >= 2
                  ? "/icons/dotted-line-haircut.svg"
                  : "/icons/dotted-line-haircut-black.svg"
              }
              alt="Arrow"
              width={80}
              height={12}
            />
          </div>

          {/* Trend Icon */}
          <div className="transition-all duration-500">
            <Image
              src={activeIconIndex >= 2 ? icons[2].color : icons[2].black}
              alt="Trend Icon"
              width={64}
              height={64}
            />
          </div>
        </div>

        {/* Timeline with Scale */}
        <div className="relative mb-12">
          {/* Scale Marks - pointing up */}
          <div className="relative h-4">
            {/* Mark 1 - after eBL */}
            <div
              className="absolute w-[2px] h-4 bg-black bottom-0"
              style={{ left: "8%" }}
            />
            {/* Mark 2 - after ChainLex Platform */}
            <div
              className="absolute w-[2px] h-4 bg-black bottom-0"
              style={{ left: "68%" }}
            />
            {/* Mark 3 - after eBL RWA */}
            <div
              className="absolute w-[2px] h-4 bg-black bottom-0"
              style={{ left: "85%" }}
            />
          </div>

          {/* Horizontal Line */}
          <div className="h-[2px] bg-black" />

          {/* Labels - positioned in center of each region */}
          <div className="flex pt-4">
            {/* eBL region: 0% - 8% */}
            <div style={{ width: "8%" }} className="text-center">
              <span className="font-inter text-[18px] weight-[500] font-medium text-black">
                eBL
              </span>
            </div>
            {/* ChainLex Platform region: 8% - 68% */}
            <div style={{ width: "60%" }} className="text-center">
              <span className="text-[14px] font-medium text-black">
                ChainLex Platform
              </span>
            </div>
            {/* eBL RWA region: 68% - 85% */}
            <div style={{ width: "17%" }} className="text-center">
              <span className="text-[14px] font-medium text-black">
                eBL RWA
              </span>
            </div>
            {/* Global Liquidity Layer region: 85% - 100% */}
            <div style={{ width: "15%" }} className="text-center">
              <span className="text-[14px] font-medium text-black">
                Global Liquidity
                <br />
                Layer
              </span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button
            onClick={handleClick}
            className="font-inter text-[20px] weight-[500] font-medium inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full hover:opacity-[0.86] transition-opacity"
          >
            {isActivated ? "Try again" : "Click it"}
            <Image src="/icons/arrow.svg" alt="arrow" width={14} height={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
