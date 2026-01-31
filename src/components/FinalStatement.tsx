"use client";

import Image from "next/image";

export default function FinalStatement() {
  return (
    <section className="relative">
      {/* Statement Section */}
      <div className="bg-white py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center">
            <p className="weight-[600] font-inter text-[32px] lg:text-[42px] font-semibold text-black leading-tight">
              This time,
            </p>
            <p className="weight-[600] font-inter text-[32px] lg:text-[42px] font-semibold text-black leading-tight">
              compliance is no longer a barrier to asset tokenization.
            </p>
          </div>
        </div>
      </div>

      {/* City Background Image */}
      <div className="relative h-[680px] lg:h-[680px]">
        <Image src="/images/city-skyline.png" alt="City Skyline" fill />
      </div>
    </section>
  );
}
