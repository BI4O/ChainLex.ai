"use client";

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Platform", href: "/platform" },
  { name: "Ecosystem", href: "/ecosystem" },
  { name: "Research", href: "/research" },
  { name: "About", href: "/about" }
];

const socialLinks = [
  {
    name: "Email",
    href: "mailto:contact@chainlex.io",
    icon: (
      <Image src="/icons/email.svg" alt="Email Icon" width={32} height={32} />
    )
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/chainlex",
    icon: <Image src="/icons/twitter.svg" alt="X Icon" width={32} height={32} />
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@chainlex",
    icon: (
      <Image
        src="/icons/you-tube.svg"
        alt="YouTube Icon"
        width={32}
        height={32}
      />
    )
  }
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/icons/logo.svg"
              alt="ChainLex Logo"
              width={32}
              height={32}
            />
            <Image
              src="/icons/logo-text.svg"
              alt="ChainLex"
              width={150}
              height={24}
            />
          </Link>

          {/* Right Section: Contact + Social */}
          <div className="flex items-center gap-6">
            <span className="text-white/80">Contact us</span>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8 mb-12">
          {navLinks.map((link, index) => (
            <div key={link.name} className="flex items-center gap-8">
              <Link
                href={link.href}
                className="text-white/80 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
              {index < navLinks.length - 1 && (
                <span className="text-white/30">|</span>
              )}
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-white/50 text-[12px] leading-relaxed">
          <p>
            Crypto services are provided by Zero Hash and are not associated
            with Securitize Markets, LLC or its affiliates. Crypto assets are
            not protected by the Securities Investor Protection Corporation
            (SIPC), under the Securities Investor Protection Act (SIPA), or by
            federal securities laws. SIPC protection does not apply to funds
            held at SIPC-member broker-dealers if they are unrelated to the
            purchase or sale of eligible securities, intended for buying certain
            crypto assets not recognized as &quot;securities&quot; under SIPA,
            or transferred to a crypto asset platform. Crypto assets are neither
            cash nor cash equivalents and are not covered by the Federal Deposit
            Insurance Corporation (FDIC). The value of crypto assets is subject
            to significant market volatility. There is an increased risk of
            fraud or cyber attack associated with crypto assets and other forms
            of virtual currency. Zero Hash LLC and Zero Hash Liquidity Services
            are licensed to engage in Virtual Currency Business Activity by the
            New York State Department of Financial Services.
          </p>
        </div>
      </div>
    </footer>
  );
}
