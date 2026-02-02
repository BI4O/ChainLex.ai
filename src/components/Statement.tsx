"use client";

export default function Statement() {
  return (
    <section className="relative overflow-hidden h-[680px] bg-black">
      {/* Right Side - Background Image */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/statement-bg.webp')`
        }}
      />

      {/* Middle - Gradient Overlay on the image */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full"
        style={{
          background:
            "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #000000 100%)"
        }}
      />

      {/* Content - Left Side */}
      <div className="relative z-10 h-full flex items-center">
        <div className="px-6 lg:px-[12%]">
          <p className="text-white text-[24px] md:text-[28px] lg:text-[32px] weight-[600] font-inter font-semibold max-w-[600px]">
            This is not a legal problem,
            <br />
            it&apos;s a missing compliance infrastructure problem.
          </p>
        </div>
      </div>
    </section>
  );
}
