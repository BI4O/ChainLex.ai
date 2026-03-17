"use client";

import Image from "next/image";
import Link from "next/link";

// 支持带加粗的文本片段
type TextSegment = string | { text: string; bold?: boolean };

const teamMembers = [
  {
    name: "Arthur Lee",
    role: "CEO",
    description: [
      [
        "Former Police Officer, ",
        { text: "Third-Class Police Superintendent", bold: true },
        "."
      ],
      [
        "Former General Counsel (GC) of a ",
        { text: "Publicly Listed AI Company", bold: true },
        "."
      ],
      [
        { text: "Founder", bold: true },
        " of a legal AI company."
      ],
      [
        { text: "Master of Laws", bold: true },
        " / Chinese Legal Professional Qualification."
      ],
      [
        "Qualifications in the ",
        { text: "securities industry and fund industry", bold: true },
        "."
      ]
    ] as TextSegment[][],
    image: "/images/team-arthur.webp",
    twitter: "https://x.com/pentiumtime"
  },
  {
    name: "Neo",
    role: "CTO",
    description: [
      [
        "Former ",
        { text: "NLP Engineer", bold: true }
      ],
      [
        "Ex-Product Manager at a ",
        { text: "Global Bank", bold: true },
        ", AI Product Lead in Web3"
      ],
      [
        { text: "Openbuild AI+web3 Hackthon Champion", bold: true }
      ],
      [
        { text: "ETHshenzhen 3rd prize", bold: true },
        ", ",
        { text: "ETHshanghai Merit prize", bold: true }
      ],
      [
        { text: "Monad Blitz Shenzhen Hackthon 3rd", bold: true }
      ]
    ] as TextSegment[][],
    image: "/images/team-neo.webp",
    twitter: "https://x.com/bi4o1995"
  },
  {
    name: "Jiajia Chan",
    role: "COO & Head of Product",
    description: [
      [
        { text: "Master of Computer Science", bold: true },
        ", ",
        { text: "New York University", bold: true }
      ],
      [
        "Former Full-stack Engineer at ",
        { text: "US Foods Holding Corp.", bold: true }
      ],
      [
        "Former Engineer at ",
        { text: "Google", bold: true }
      ],
      [
        { text: "Former Co-Founder", bold: true },
        " at an AI startup, leading AI technology & product design"
      ],
      [
        "DevRel & Tech Ops Lead at ",
        { text: "Minara.ai", bold: true },
        " (",
        { text: "Invested by Circle", bold: true },
        ")"
      ]
    ] as TextSegment[][],
    image: "/images/team-jiajia.webp",
    twitter: "https://x.com/0xJChen"
  }
];

// 渲染带加粗的文本行
function renderTextSegments(segments: TextSegment[]) {
  return segments.map((segment, i) => {
    if (typeof segment === "string") {
      return <span key={i}>{segment}</span>;
    }
    return (
      <span key={i} className={segment.bold ? "font-semibold text-black/70" : ""}>
        {segment.text}
      </span>
    );
  });
}

export default function Team() {
  return (
    <section className="bg-[#f5f7fa] py-12 md:py-20 lg:py-32">
      <div className="px-6 md:px-[12%]">
        {/* Title */}
        <h2 className="font-bodoni weight-[600] text-[28px] sm:text-[36px] lg:text-[48px] text-black mb-12 md:mb-16 lg:mb-20">
          Born at the Convergence of&nbsp;&nbsp;Law and Code.
        </h2>

        {/* ========== MOBILE: Team Members ========== */}
        <div className="md:hidden flex flex-col gap-8 pb-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
              <div className="flex gap-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={135}
                  className="object-cover shrink-0"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-funnel text-[20px] font-bold text-black mb-1">
                      {member.name}
                    </h3>
                    <p className="font-inter text-[14px] font-medium text-[#324998] mb-3">
                      {member.role}
                    </p>
                    <p className="font-inter text-[12px] text-black/50 leading-relaxed">
                      {member.description.map((line, i) => (
                        <span key={i}>
                          {renderTextSegments(line)}
                          {i < member.description.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                  <Link
                    href={member.twitter}
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
          ))}
        </div>

        {/* ========== DESKTOP: Team Members - Horizontal Layout ========== */}
        <div className="hidden md:flex justify-between items-stretch">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col flex-1 max-w-[320px]">
              <div className="w-[280px] h-[376px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={280}
                  height={376}
                  className="w-full h-full object-cover relative z-10"
                />
              </div>
              <div className="mt-6 text-left w-full">
                <h3 className="font-funnel text-[28px] font-bold text-black">
                  {member.name}
                </h3>
                <p className="font-inter text-[18px] font-medium text-[#324998] mb-3">
                  {member.role}
                </p>
                <div className="h-[250px]">
                  <div className="font-inter text-[16px] text-black/50 leading-6 space-y-2">
                    {member.description.map((line, i) => (
                      <div key={i}>
                        {renderTextSegments(line)}
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href={member.twitter}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
