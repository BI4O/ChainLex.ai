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
    image: "/images/team-arthur.webp",
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
    image: "/images/team-neo.webp",
    twitter: "https://x.com/neo"
  }
];

export default function Team() {
  return (
    <section className="bg-[#f5f7fa] py-12 md:py-20 lg:py-32 min-h-screen md:h-[1080px]">
      <div className="px-6 md:px-[12%]">
        {/* Title */}
        <h2 className="font-bodoni weight-[600] text-[28px] sm:text-[36px] lg:text-[48px] text-black mb-8 md:mb-12 lg:mb-[220px]">
          Born at the Convergence of&nbsp;&nbsp;Law and Code.
        </h2>

        {/* ========== MOBILE: Team Members ========== */}
        <div className="md:hidden flex flex-col gap-8 pb-4">
          {/* Arthur Lee - CEO */}
          <div className="bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
            <div className="flex gap-4">
              {/* Photo */}
              <Image
                src={"/images/team-arthur.webp"}
                alt="team-arthur"
                width={100}
                height={135}
                className="object-cover flex-shrink-0"
              />
              {/* Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-funnel text-[20px] font-bold text-black mb-1">
                    Arthur Lee
                  </h3>
                  <p className="font-inter text-[14px] font-medium text-[#324998] mb-3">
                    CEO
                  </p>
                  <p className="font-inter text-[12px] text-black/50 leading-relaxed">
                    Former Police Officer
                    <br />
                    Ex-Chief Legal Officer of a Publicly
                    <br />
                    Listed Internet Company
                  </p>
                </div>
                <Link
                  href="https://x.com/pentiumtime"
                  target="_blank"
                  className="self-start"
                >
                  <Image
                    src="/icons/twitter1.svg"
                    alt="X"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Neo - CTO */}
          <div className="bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
            <div className="flex gap-4">
              {/* Photo */}
              <Image
                src={"/images/team-neo.webp"}
                alt="team-neo"
                width={100}
                height={135}
                className="object-cover flex-shrink-0"
              />
              {/* Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-funnel text-[20px] font-bold text-black mb-1">
                    Neo
                  </h3>
                  <p className="font-inter text-[14px] font-medium text-[#324998] mb-3">
                    CTO
                  </p>
                  <p className="font-inter text-[12px] text-black/50 leading-relaxed">
                    Former NLP Engineer
                    <br />
                    Ex-Product Manager at Global Bank,
                    <br />
                    AI Product Lead in Web3
                  </p>
                </div>
                <Link
                  href="https://x.com/bi4o1995"
                  target="_blank"
                  className="self-start"
                >
                  <Image
                    src="/icons/twitter1.svg"
                    alt="X"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ========== DESKTOP: Team Members ========== */}
        <div className="hidden md:flex justify-start">
          {/* Neo - Left */}
          <div className="flex items-end gap-6 relative mt-[130px]">
            <Image
              src={"/images/team-neo.webp"}
              alt="team-neo"
              width={320}
              height={430}
              className="relative z-10"
            />
            {/* Neo Info */}
            <div>
              <h3 className="font-funnel text-[32px] font-bold text-black">
                Neo
              </h3>
              <p className="font-inter text-[20px] font-medium text-[#324998] mb-4">
                CTO
              </p>
              <p className="font-inter text-[18px] text-black/50 font-regular leading-relaxed">
                Former NLP Engineer
                <br />
                Ex-Product Manager at Global
                <br />
                Bank,AI Product Lead in Web3
              </p>
              <Link
                href="https://x.com/bi4o1995"
                target="_blank"
                className="inline-block mt-4 relative z-5"
              >
                <Image
                  src="/icons/twitter1.svg"
                  alt="X"
                  width={28}
                  height={28}
                />
              </Link>
            </div>
            <Image
              src="/icons/decorative-lines.svg"
              alt="decorative-lines"
              width={645}
              height={149}
              className="absolute top-[95px] left-[65px]"
            />
          </div>

          {/* Arthur - Right */}
          <div className="flex items-start gap-6 mt-[-140px] relative">
            {/* Photo */}
            <Image
              src={"/images/team-arthur.webp"}
              alt="team-arthur"
              width={320}
              height={430}
              className="relative z-10"
            />
            {/* Arthur Info */}
            <div>
              <h3 className="font-funnel text-[32px] font-bold text-black">
                Arthur Lee
              </h3>
              <p className="font-inter text-[20px] font-medium text-[#324998] mb-4">
                CEO
              </p>
              <p className="font-inter text-[18px] text-black/50 font-regular leading-relaxed">
                Former Police Officer
                <br />
                Ex-Chief Legal Officer of a Publicly
                <br />
                Listed Internet Company
              </p>
              <Link
                href="https://x.com/pentiumtime"
                target="_blank"
                className="inline-block mt-4 relative z-5"
              >
                <Image
                  src="/icons/twitter1.svg"
                  alt="X"
                  width={28}
                  height={28}
                />
              </Link>
            </div>
            <Image
              src="/icons/decorative-lines2.svg"
              alt="decorative-lines"
              width={645}
              height={149}
              className="absolute top-[200px] left-[65px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
