"use client";

import Image from "next/image";

export default function Support() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Title */}
        <h2 className="font-[var(--font-playfair)] text-[48px] font-semibold text-black mb-16">
          Support
        </h2>
        <Image
          src="/images/logos.png"
          alt="Support Logos"
          width={1358}
          height={214}
        />
      </div>
    </section>
  );
}
