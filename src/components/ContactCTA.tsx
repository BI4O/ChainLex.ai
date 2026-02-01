"use client";

import Link from "next/link";
import Image from "next/image";

export default function ContactCTA() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="px-[12%]">
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 pb-1"
          >
            <span className="font-inter weight-[600] font-semibold text-[32px] text-black">
              Contact us to get a tailored solution
            </span>
            <Image
              src="/icons/arrow-black.svg"
              alt="arrow"
              width={32}
              height={32}
            />
            {/* Hover underline */}
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
