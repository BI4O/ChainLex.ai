"use client";

import Image from "next/image";

// 区块链图标
const blockchains = [
  { name: "Ethereum", icon: "/icons/ethereum.svg" },
  { name: "Chainlink", icon: "/icons/chainlink.svg" },
  {
    name: "Avalanche",
    icon: "/icons/avalanche.svg",
    bgColor: "bg-[#E84142]"
  },
  { name: "Solana", icon: "/icons/solana.svg" }
];

// 合规标准
const standards = [
  { name: "ERC-3643" },
  { name: "ERC-7943" },
  { name: "ZK-KYC" },
  { name: "FATF Travel Rule" }
];

// 国家/地区
const jurisdictions = [
  { name: "Hong Kong", icon: "/images/hk.png" },
  { name: "United States", icon: "/images/us.png" },
  { name: "European Union", icon: "/images/eu.png" },
  { name: "UAE", icon: "/images/uae.png" }
];

export default function Compliance() {
  return (
    <section className="bg-[#FFFFFF] py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Title */}
        <h2 className="font-[var(--font-playfair)] text-[48px] font-semibold text-black mb-16">
          Write once, Compliance everywhere.
        </h2>

        {/* Icons Grid */}
        <div className="flex flex-col items-center gap-6 mb-16">
          {/* Row 1: Blockchains */}
          <div className="flex justify-center gap-4">
            {blockchains.map((item, index) => (
              <div
                key={item.name}
                className="w-[100px] h-[100px] rounded-full bg-[#F4F7FB] shadow-sm flex items-center justify-center"
              >
                <div
                  className={`w-[50px] h-[50px] rounded-full ${item.bgColor || "bg-black"} flex items-center justify-center`}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={index === 3 ? 50 : 24}
                    height={index === 3 ? 50 : 24}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Standards */}
          <div className="flex justify-center gap-4">
            {standards.map((item) => (
              <div
                key={item.name}
                className="w-[100px] h-[100px] rounded-full bg-[#F4F7FB] shadow-sm flex items-center justify-center"
              >
                <span className="text-[18px] text-[#000000] px-5 font-medium text-center leading-tight">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          {/* Row 3: Jurisdictions */}
          <div className="flex justify-center gap-4">
            {jurisdictions.map((item) => (
              <div
                key={item.name}
                className="w-[100px] h-[100px] rounded-full bg-[#F4F7FB] shadow-sm flex items-center justify-center overflow-hidden"
              >
                <Image src={item.icon} alt={item.name} width={50} height={50} />
              </div>
            ))}
          </div>
        </div>

        {/* Cross Labels */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <span className="text-[24px] font-semibold text-black">Cross Chain</span>
          <span className="text-[#00000050] text-[24px]">·</span>
          <span className="text-[24px] font-semibold text-black">Cross Protocol</span>
          <span className="text-[#00000050] text-[24px]">·</span>
          <span className="text-[24px] font-semibold text-black">Cross Jurisdictional</span>
        </div>

        {/* Description */}
        <p className="text-center text-[#000000CC] text-[16px] leading-relaxed max-w-[1000px] mx-auto">
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
