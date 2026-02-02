"use client";

import Link from "next/link";
import Image from "next/image";

export default function ContactCTA() {
  return (
    <>
      <style>
        {`
          .contact-underline {
            width: 0;
            transition: width 0.3s ease-out;
          }
          .contact-link:hover .contact-underline {
            width: 100% !important;
          }
        `}
      </style>
      <section className="bg-white py-16 lg:py-24">
        <div className="px-6 lg:px-[12%]">
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="contact-link relative inline-flex items-center gap-2 pb-1"
            >
              <span className="font-inter weight-[600] font-semibold text-[24px] md:text-[28px] lg:text-[32px] text-black">
                Contact us to get a tailored solution
              </span>
              <Image
                src="/icons/arrow-black.svg"
                alt="arrow"
                width={24}
                height={24}
                className="md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px]"
              />
              {/* Hover underline */}
              <span className="contact-underline absolute bottom-0 left-0 h-[3px] bg-black" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
