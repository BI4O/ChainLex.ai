"use client";

import Link from "next/link";
import Image from "next/image";

export default function ContactCTA() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-[24px] font-semibold text-black"
          >
            <span className="relative pb-2">
              Contact us to get a tailored solution
              {/* Half-width underline */}
              <span className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-black group-hover:bg-gray-500 transition-colors" />
            </span>
            <Image
              src="/icons/arrow-black.svg"
              alt="arrow"
              width={32}
              height={32}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
