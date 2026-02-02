import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function NotFound() {
  const navLinks = [
    { name: "Platform", href: "/platform" },
    { name: "Ecosystem", href: "/ecosystem" },
    { name: "Research", href: "/research" },
    { name: "About", href: "/about" }
  ];

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:lee@chainlex.ai",
      iconSrc: "/icons/email.svg",
      alt: "Email Icon"
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/ChainLex_ai",
      iconSrc: "/icons/twitter.svg",
      alt: "X Icon"
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@chainlex",
      iconSrc: "/icons/you-tube.svg",
      alt: "YouTube Icon"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section with Background - same as research page */}
      <section className="relative h-[480px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/research-bg.webp"
            alt="background"
            fill
            className="object-cover"
          />
          {/* Mask Overlay */}
          <Image
            src="/images/mask.webp"
            alt="mask"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full px-[12%] pt-[160px] flex flex-col justify-center">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-white hover:opacity-80 transition-opacity mb-6"
          >
            <Image src="/icons/back.svg" alt="Back" width={24} height={24} />
            <span className="font-inter text-[16px] font-medium weight-[500]">
              Back
            </span>
          </Link>

          <div className="mb-6 w-full h-[1px] bg-[#FFFFFF1F]" />

          {/* 404 Number */}
          <h1 className="font-bodoni text-[120px] sm:text-[140px] md:text-[160px] text-white leading-none mb-6">
            404
          </h1>

          {/* Subtitle */}
          <p className="font-inter text-white/80 text-[20px] md:text-[24px] max-w-2xl">
            Oops! We couldn't find that page. Let's get you back on track.
          </p>
        </div>
      </section>

      {/* City Skyline Image */}
      <div className="relative h-[200px] md:h-[300px] lg:h-[400px]">
        <Image src="/images/city-skyline.webp" alt="City Skyline" fill className="object-cover" />
      </div>

      {/* Simplified Footer */}
      <footer className="bg-black text-white">
        <div className="px-6 lg:px-[12%] py-8 md:py-12">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 md:mb-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 mb-4 lg:mb-0">
              <Image
                src="/icons/logo.svg"
                alt="ChainLex Logo"
                width={28}
                height={28}
                className="md:w-[32px] md:h-[32px]"
              />
              <Image
                src="/icons/logo-text.svg"
                alt="ChainLex"
                width={120}
                height={20}
                className="md:w-[150px] md:h-[24px]"
              />
            </Link>

            {/* Right Section: Contact + Social */}
            <div className="flex items-center gap-4 md:gap-6">
              <span className="font-inter text-white/50 text-[14px] md:text-base">Contact us</span>
              <div className="flex items-center gap-3 md:gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    className="text-white hover:text-white/80 transition-colors"
                  >
                    <span className="md:block hidden">
                      <Image src={social.iconSrc} alt={social.alt} width={32} height={32} />
                    </span>
                    <span className="block md:hidden">
                      <Image src={social.iconSrc} alt={social.alt} width={20} height={20} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap items-center gap-4 md:gap-8">
            {navLinks.map((link, index) => (
              <div key={link.name} className="flex items-center gap-4 md:gap-8">
                <Link
                  href={link.href}
                  className="font-inter text-white/50 hover:text-white transition-colors text-[14px] md:text-base"
                >
                  {link.name}
                </Link>
                {index < navLinks.length - 1 && (
                  <span className="text-white/16 hidden md:inline">|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
