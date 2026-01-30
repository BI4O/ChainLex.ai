"use client";

import Link from "next/link";
import Image from "next/image";

export default function DemoCTA() {
  return (
    <section className="bg-white py-20 lg:py-36">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-center">
        <Link
          href="/demo"
          className="group inline-flex items-center gap-3 text-black text-xl md:text-2xl font-semibold hover:opacity-70 transition-opacity"
        >
          Request a demo
          <Image
            src="/icons/arrow-black.svg"
            alt="arrow"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </section>
  );
}
