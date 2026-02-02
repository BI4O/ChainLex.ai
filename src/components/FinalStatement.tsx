"use client";

import Image from "next/image";

export default function FinalStatement() {
  return (
    <section className="relative">
      {/* Statement Section */}
      <div className="bg-white py-16 md:py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[12%]">
          <div className="text-center">
            <p className="weight-[600] font-inter text-[20px] sm:text-[28px] md:text-[32px] lg:text-[42px] font-semibold text-black leading-tight">
              This time,
            </p>
            <p className="weight-[600] font-inter text-[20px] sm:text-[28px] md:text-[32px] lg:text-[42px] font-semibold text-black leading-tight">
              compliance is no longer a barrier to RWA.
            </p>
          </div>
        </div>
      </div>

      {/* City Background Image */}
      <div className="relative h-[340px] md:h-[500px] lg:h-[680px]">
        <Image src="/images/city-skyline.webp" alt="City Skyline" fill />
      </div>
    </section>
  );
}
