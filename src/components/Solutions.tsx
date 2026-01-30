"use client";

import Image from "next/image";
import { useState } from "react";

const products = [
  {
    name: "LexStudio",
    subtitle: "Automated Legal Engineering.",
    description:
      "Transform static legal prose into executable smart contract logic in seconds, not weeks.",
    image: "/images/LexStudio.png",
    imageBlack: "/images/LexStudio-black.png"
  },
  {
    name: "LexOracle",
    subtitle: "Hybrid Oracle Framework.",
    description:
      "Combine the efficient responsiveness of centralization with the trusted security of decentralization to build an oracle service that balances performance and safety.",
    image: "/images/LexOracle.png",
    imageBlack: "/images/LexOracle-black.png"
  },
  {
    name: "LexEnforcer",
    subtitle: "Legally Binding Execution.",
    description:
      "Connect on-chain triggers to off-chain legal mandates. When the code executes, the law enforces.",
    image: "/images/LexEnforcer.png",
    imageBlack: "/images/LexEnforcer-black.png"
  }
];

const features = [
  { name: "Compliance Consultation", icon: "consultation" },
  { name: "Smart Due Diligence", icon: "diligence" },
  { name: "Multiple Jurisdictions Compliance Design", icon: "jurisdictions" },
  { name: "Documents Generation", icon: "documents" },
  { name: "Smart Contract management", icon: "contract" },
  { name: "Right Confirmation", icon: "confirmation" },
  { name: "Real-time State Sync", icon: "sync" },
  { name: "Holistic Risk Monitoring", icon: "risk" },
  { name: "Profit Distribution and Tax Compliance", icon: "profit" },
  { name: "Exception Event Report", icon: "exception" },
  { name: "On-chain Automated Enforcement", icon: "onchain" },
  { name: "Off-chain Legal Action", icon: "offchain" }
];

// Feature icon component with active state
function FeatureIcon({ type, isActive }: { type: string; isActive: boolean }) {
  const iconPath = isActive ? `/icons/${type}-black.svg` : `/icons/${type}.svg`;
  return (
    <Image
      src={iconPath}
      alt={type}
      width={32}
      height={32}
      className="transition-all duration-300"
    />
  );
}

// 计算每个产品激活到哪个 feature index
const productActiveIndex: Record<string, number> = {
  LexStudio: 2,    // jurisdictions (index 2)
  LexOracle: 7,    // risk (index 7)
  LexEnforcer: 11  // offchain (index 11, 最后一个)
};

export default function Solutions() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (
    <section className="bg-[#f5f7fa] py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <h2 className="font-[var(--font-playfair)] text-[48px] font-semibold text-black mb-4">
            How We Solve Pain Points?
          </h2>
          <p className="text-[#00000080] text-[18px]">
            End-to-End Lifecycle Compliance Platform
          </p>
        </div>

        {/* Product Cards */}
        <div className="flex flex-wrap gap-6 mb-16">
          {products.map((product, index) => {
            const isSelected = selectedCard === product.name;
            return (
              <div
                key={product.name}
                className="w-[412px] overflow-hidden cursor-pointer transition-all duration-300"
                onClick={() =>
                  setSelectedCard(isSelected ? null : product.name)
                }
              >
                {/* Card Image Area */}
                <div
                  className={`h-[220px] flex items-end justify-center relative overflow-hidden transition-colors duration-300 ${
                    isSelected ? "bg-[#1B1B1B]" : "bg-[#E1E9F6]"
                  }`}
                >
                  <Image
                    src={isSelected ? product.imageBlack : product.image}
                    alt={product.name}
                    width={412}
                    height={220}
                    className={`object-contain relative ${index === 0 ? "bottom-0" : "bottom-[-15px]"}`}
                  />
                </div>

                {/* Card Content */}
                <div
                  className={`p-10 pt-6 h-[270] transition-colors duration-300 ${
                    isSelected ? "bg-black" : "bg-white"
                  }`}
                >
                  <h3
                    className={`text-[24px] font-[700] mb-1 transition-colors duration-300 ${
                      isSelected ? "text-white" : "text-black"
                    }`}
                  >
                    {product.name}
                  </h3>
                  <p
                    className={`text-sm mb-4 transition-colors duration-300 ${
                      isSelected ? "text-[#FFFFFFCC]" : "text-[#324998]"
                    }`}
                  >
                    {product.subtitle}
                  </p>
                  <p
                    className={`text-[18px] transition-colors duration-300 ${
                      isSelected ? "text-[#FFFFFFCC]" : "text-[#000000CC]"
                    }`}
                  >
                    {product.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Flow */}
        <div className="pt-12 overflow-x-auto">
          <div className="relative flex justify-between min-w-[1200px]">
            {/* Connecting Dashed Line - 底层灰色虚线 */}
            <div
              className="absolute top-[18px] h-[2px] border-t-2 border-dashed border-[#C0C0C0]"
              style={{ left: "50px", right: "50px" }}
            />

            {/* Animated Progress Line - 黑色传输动画线 */}
            {selectedCard && (
              <div
                className="absolute top-[18px] h-[2px] bg-black origin-left"
                style={{
                  left: "50px",
                  width: `calc((100% - 100px) * ${(productActiveIndex[selectedCard] || 0) / (features.length - 1)})`,
                  transition: "width 0.8s ease-out"
                }}
              >
                {/* 传输动画光点 */}
                <div
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-black rounded-full animate-pulse"
                  style={{ boxShadow: "0 0 8px rgba(0,0,0,0.5)" }}
                />
              </div>
            )}

            {features.map((feature, index) => {
              const activeIndex = selectedCard ? (productActiveIndex[selectedCard] ?? -1) : -1;
              const isActive = index <= activeIndex;

              return (
                <div
                  key={feature.name}
                  className="relative flex flex-col items-center text-center w-[100px]"
                >
                  <div
                    className={`w-[38px] h-[38px] rounded-full flex items-center justify-center mb-3 relative z-10 transition-all duration-500 ${
                      isActive
                        ? "bg-black border-2 border-black"
                        : "bg-white border border-[#E0E0E0]"
                    }`}
                    style={{
                      transitionDelay: isActive ? `${index * 80}ms` : "0ms"
                    }}
                  >
                    <FeatureIcon type={feature.icon} isActive={isActive} />
                  </div>
                  <span
                    className={`text-xs leading-tight max-w-[100px] transition-colors duration-300 ${
                      isActive ? "text-black font-medium" : "text-gray-600"
                    }`}
                  >
                    {feature.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
