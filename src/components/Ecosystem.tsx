"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ecosystemItems = [
  {
    id: "lawyer",
    title: "Global Lawyer Network",
    description:
      "We have broken down the geographical boundaries of legal services. Chainlex connects top-tier law firms and service institutions worldwide to build a distributed compliance collaboration platform. No matter where assets flow, you can obtain second-level responsive localized compliance guidance and penetrating legal enforcement support.",
    image: "/images/ecosystem-lawyer.webp"
  },
  {
    id: "certification",
    title: "Certification",
    description:
      "Establishing trust anchors in an unordered market. We provide authoritative compliance audits and endorsements for high-quality RWA projects, establishing institutional-level asset safety access standards from the confirmation of underlying asset rights to on-chain logic verification.",
    image: "/images/ecosystem-certification.webp"
  },
  {
    id: "academy",
    title: "Academy",
    description:
      "We are committed to empowering ecological partners and cultivating the next generation of interdisciplinary talents who understand both law and coding.",
    image: "/images/ecosystem-academy.webp"
  }
];

export default function Ecosystem() {
  const [activeId, setActiveId] = useState("lawyer");

  return (
    <section className="bg-[#F4F7FB] py-20 lg:py-32">
      <div className="px-[12%]">
        {/* Title */}
        <h2 className="font-bodoni text-[48px] weight-[600] text-black mb-12">
          Building the Compliance Ecosystem.
        </h2>

        {/* Cards Container */}
        <div className="flex gap-4 h-[480px] mb-12">
          {ecosystemItems.map((item) => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${
                  isActive ? "flex-[2]" : "flex-[0.6]"
                }`}
                onClick={() => setActiveId(item.id)}
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: isActive
                      ? "linear-gradient(to top, rgba(27,35,56,0.95) 0%, rgba(27,35,56,0.6) 40%, transparent 100%)"
                      : "linear-gradient(to top, rgba(27,35,56,0.95) 0%, rgba(27,35,56,0.4) 60%, transparent 100%)"
                  }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  {isActive ? (
                    /* Expanded State */
                    <div className="transition-opacity duration-500">
                      <h3 className="font-funnel text-[24px] weight-[700] text-white mb-4">
                        {item.title}
                      </h3>
                      <p className="font-inter text-white text-[18px] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ) : (
                    /* Collapsed State */
                    <div className="flex items-center justify-between">
                      <h3 className="text-[20px] font-bold text-white leading-tight">
                        {item.title.split(" ").length > 2 ? (
                          <>
                            {item.title.split(" ").slice(0, 2).join(" ")}
                            <br />
                            {item.title.split(" ").slice(2).join(" ")}
                          </>
                        ) : (
                          item.title
                        )}
                      </h3>
                      <Image
                        src="/icons/arrow-right.svg"
                        alt="Arrow Right"
                        width={32}
                        height={32}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Join Us Button */}
        <div className="flex justify-center">
          <Link
            href="mailto:lee@chainlex.ai"
            className="font-inter weight-[500] text-[20px] inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full hover:opacity-[0.86] transition-opacity"
          >
            Join us
            <Image src="/icons/arrow.svg" alt="arrow" width={14} height={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
