"use client";

import Image from "next/image";
import Link from "next/link";

const architectureItems = [
  {
    title: "Agent Matrix",
    subtitle: "LLM-Native Legal Infrastructure.",
    description:
      "A network of ChainLex AI agents continuously interprets, normalizes, and aligns global regulations into an executable compliance layer.",
    image: "/images/agent-matrix.png"
  },
  {
    title: "ZK-Proofs",
    subtitle: "Proof, Not Disclosure.",
    description:
      "ChainLex uses zero-knowledge proofs to generate verifiable, constraint-based attestations of compliance logic—allowing regulators to validate rules, thresholds, and eligibility without access to underlying transaction data.",
    image: "/images/zk-proofs.png"
  },
  {
    title: "Enforcement Network",
    subtitle: "Cyber-Physical Coupling Protocol",
    description:
      "Transcend the boundaries of code and forge legal anchors in the physical world. Through protocol-level judicial mapping, endow digital instructions with enforceable power that penetrates legal jurisdictions.",
    image: "/images/enforcement.png"
  }
];

export default function Architecture() {
  return (
    <section className="bg-[#f5f7fa] py-20 lg:py-32">
      <div className="px-[12%]">
        {/* Header */}
        <h2 className="font-bodoni text-[48px] weight-[600] text-black mb-12">
          The Architecture of Trust
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Agent Matrix Card */}
          <div className="group relative overflow-hidden h-[410px] cursor-pointer">
            {/* Layer 1: 底图 */}
            <Image
              src={architectureItems[0].image}
              alt={architectureItems[0].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Layer 2: 蒙版 */}
            <Image
              src="/images/mask.png"
              alt="mask"
              fill
              className="object-cover"
            />
            {/* Layer 3: 文本内容 */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="font-funnel text-[24px] font-bold text-white mb-1">
                {architectureItems[0].title}
              </h3>
              <p className="font-inter text-[#FFFFFF80] text-sm mb-4">
                {architectureItems[0].subtitle}
              </p>
              <p className="font-inter text-[#FFFFFFCC] text-[16px] leading-relaxed">
                {architectureItems[0].description}
              </p>
            </div>
          </div>

          {/* ZK-Proofs Card */}
          <div className="group relative overflow-hidden h-[410px] cursor-pointer">
            {/* Layer 1: 底图 */}
            <Image
              src={architectureItems[1].image}
              alt={architectureItems[1].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Layer 2: 蒙版 */}
            <Image
              src="/images/mask.png"
              alt="mask"
              fill
              className="object-cover"
            />
            {/* Layer 3: 文本内容 */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="font-funnel text-[24px] weight-[700] text-white mb-1">
                {architectureItems[1].title}
              </h3>
              <p className="font-inter text-[#FFFFFF] opacity-50 mb-4">
                {architectureItems[1].subtitle}
              </p>
              <p className="font-inter text-[#FFFFFFCC] text-[18px]">
                {architectureItems[1].description}
              </p>
            </div>
          </div>

          {/* Enforcement Network Card - Full Width */}
          <div className="group md:col-span-2 relative overflow-hidden h-[260px] cursor-pointer">
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
            <div className="absolute inset-0 p-10 flex flex-col justify-center max-w-[50%]">
              <h3 className="font-funnel text-[24px] font-bold text-white mb-1">
                {architectureItems[2].title}
              </h3>
              <p className="font-inter text-[#FFFFFF80] text-sm mb-4">
                {architectureItems[2].subtitle}
              </p>
              <p className="font-inter text-[#FFFFFFCC] text-[16px] leading-relaxed">
                {architectureItems[2].description}
              </p>
            </div>
          </div>
        </div>

        {/* Whitepaper Button */}
        <div className="flex justify-center">
          <Link
            href="/whitepaper"
            className="text-[20px] weight-[500] font-inter inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full hover:opacity-[0.86] transition-opacity"
          >
            Whitepaper
            <Image src="/icons/arrow.svg" alt="arrow" width={14} height={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
