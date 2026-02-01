"use client";

import Link from "next/link";
import Image from "next/image";

export default function DemoCTA() {
  return (
    <>
      <style>
        {`
          .demo-underline {
            width: 0;
            transition: width 0.3s ease-out;
          }
          .demo-link:hover .demo-underline {
            width: 100% !important;
          }
        `}
      </style>
      <section className="bg-white py-20 lg:py-36">
        <div className="px-[12%] flex items-center justify-center">
          <Link
            href="/demo"
            className="demo-link font-inter text-[32px] weight-[600] relative inline-flex items-center gap-3 text-black font-semibold pb-1"
          >
            Request a demo
            <Image
              src="/icons/arrow-black.svg"
              alt="arrow"
              width={24}
              height={24}
            />
            {/* Hover underline */}
            <span className="demo-underline absolute bottom-0 left-0 h-[3px] bg-black" />
          </Link>
        </div>
      </section>
    </>
  );
}
