"use client";

import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Arthur Lee",
    role: "CEO",
    description: [
      "Former Police Officer",
      "Ex-Chief Legal Officer of a Publicly",
      "Listed Internet Company"
    ],
    image: "/images/team-arthur.png",
    twitter: "https://x.com/arthurlee"
  },
  {
    name: "Neo",
    role: "CTO",
    description: [
      "Former NLP Engineer",
      "Ex-Product Manager at Global",
      "Bank,AI Product Lead in Web3"
    ],
    image: "/images/team-neo.png",
    twitter: "https://x.com/neo"
  }
];

export default function Team() {
  return (
    <section className="bg-[#f5f7fa] py-20 h-[1080px]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Title */}
        <h2 className="font-bodoni weight-[600] text-[48px] font-semibold text-black mb-55">
          Born at the Convergence of Law and Code.
        </h2>

        {/* Team Members */}
        <div className="relative">
          {/* Decorative Lines - TODO: 可能需要 SVG 装饰线 */}
          <div className="absolute inset-0 pointer-events-none">
            {/* 装饰性连接线占位 */}
          </div>

          <div className="flex justify-center">
            {/* Neo - Left */}
            <div className="flex items-end gap-8">
              <Image
                src={"/images/team-neo.png"}
                alt="team-neo"
                width={675}
                height={430}
              />
            </div>

            {/* Arthur - Right */}
            <div className="flex items-start gap-8 mt-[-140px]">
              {/* Photo */}
              <Image
                src={"/images/team-arthur.png"}
                alt="team-arthur"
                width={675}
                height={430}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
