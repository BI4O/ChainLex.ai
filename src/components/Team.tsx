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
      <div className="px-[16%]">
        {/* Title */}
        <h2 className="font-bodoni weight-[600] text-[48px] font-semibold text-black mb-55">
          Born at the Convergence of Law and Code.
        </h2>

        {/* Team Members */}
        <div className="flex justify-start">
          {/* Neo - Left */}
          <div className="flex items-end gap-6 relative mt-[130px]">
            <Image
              src={"/images/team-neo.png"}
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
                className="inline-block mt-4"
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
              src={"/images/team-arthur.png"}
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
                className="inline-block mt-4"
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
