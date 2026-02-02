"use client";

import Image from "next/image";
import Link from "next/link";

const architectureItems = [
  {
    title: "Agent Matrix",
    subtitle: "LLM-Native Legal Infrastructure.",
    description:
      "A network of ChainLex AI agents continuously interprets, normalizes, and aligns global regulations into an executable compliance layer.",
    image: "/images/agent-matrix.webp"
  },
  {
    title: "ZK-Proofs",
    subtitle: "Proof, Not Disclosure.",
    description:
      "ChainLex uses zero-knowledge proofs to generate verifiable, constraint-based attestations of compliance logic—allowing regulators to validate rules, thresholds, and eligibility without access to underlying transaction data.",
    image: "/images/zk-proofs.webp"
  },
  {
    title: "Enforcement Network",
    subtitle: "Cyber-Physical Coupling Protocol",
    description:
      "Transcend the boundaries of code and forge legal anchors in the physical world. Through protocol-level judicial mapping, endow digital instructions with enforceable power that penetrates legal jurisdictions.",
    image: "/images/enforcement.webp"
  }
];

export default function Architecture() {
  return (
    <section className="bg-[#f5f7fa] py-20 lg:py-32">
      <div className="px-6 lg:px-[12%]">
        {/* Header */}
        <h2 className="font-bodoni text-[28px] sm:text-[36px] lg:text-[48px] weight-[600] text-black mb-8 md:mb-12">
          The Architecture of Trust
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
          {/* Agent Matrix Card */}
          <div className="group relative overflow-hidden h-[280px] md:h-[410px] cursor-pointer">
            {/* Layer 1: 底图 */}
            <Image
              src={architectureItems[0].image}
              alt={architectureItems[0].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Layer 2: 蒙版 */}
            <Image
              src="/images/mask.webp"
              alt="mask"
              fill
              className="object-cover"
            />
            {/* Layer 3: 文本内容 */}
            <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end">
              <h3 className="font-funnel text-[20px] md:text-[24px] font-bold text-white mb-1">
                {architectureItems[0].title}
              </h3>
              <p className="font-inter text-[#FFFFFF80] text-xs md:text-sm mb-3 md:mb-4">
                {architectureItems[0].subtitle}
              </p>
              <p className="font-inter text-[#FFFFFFCC] text-[14px] md:text-[16px] leading-relaxed">
                {architectureItems[0].description}
              </p>
            </div>
          </div>

          {/* ZK-Proofs Card */}
          <div className="group relative overflow-hidden h-[280px] md:h-[410px] cursor-pointer">
            {/* Layer 1: 底图 */}
            <Image
              src={architectureItems[1].image}
              alt={architectureItems[1].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Layer 2: 蒙版 */}
            <Image
              src="/images/mask.webp"
              alt="mask"
              fill
              className="object-cover"
            />
            {/* Layer 3: 文本内容 */}
            <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end">
              <h3 className="font-funnel font-bold text-[20px] md:text-[24px] weight-[700] text-white mb-1">
                {architectureItems[1].title}
              </h3>
              <p className="font-inter text-[#FFFFFF] opacity-50 text-xs md:text-sm mb-3 md:mb-4">
                {architectureItems[1].subtitle}
              </p>
              <p className="font-inter text-[#FFFFFFCC] text-[14px] md:text-[18px]">
                {architectureItems[1].description}
              </p>
            </div>
          </div>

          {/* Enforcement Network Card - Full Width */}
          <div className="group md:col-span-2 relative overflow-hidden h-[220px] md:h-[260px] cursor-pointer">
            {/* Layer 1: 底图 */}
            <Image
              src={architectureItems[2].image}
              alt={architectureItems[2].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Layer 2: 蒙版 - 从左到右渐变 */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, #1B2338 0%, #1B2338 40%, transparent 100%)"
              }}
            />
            {/* Layer 3: 文本内容 - 左侧 */}
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-center max-w-[100%] md:max-w-[50%]">
              <h3 className="font-funnel text-[20px] md:text-[24px] font-bold text-white mb-1">
                {architectureItems[2].title}
              </h3>
              <p className="font-inter text-[#FFFFFF80] text-xs md:text-sm mb-3 md:mb-4">
                {architectureItems[2].subtitle}
              </p>
              <p className="font-inter text-[#FFFFFFCC] text-[14px] md:text-[16px] leading-relaxed">
                {architectureItems[2].description}
              </p>
            </div>
          </div>
        </div>

        {/* Whitepaper Button */}
        <div className="flex justify-center">
          <Link
            href="/whitepaper"
            className="font-inter weight-[500] text-[16px] md:text-[20px] inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-black text-white rounded-full hover:opacity-[0.86] transition-opacity"
          >
            Whitepaper
            <Image src="/icons/arrow.svg" alt="arrow" width={14} height={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
