"use client";

import React from "react";
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
    href: "mailto:lee@chainlex.ai",
    icon: (
      <Image src="/icons/email.svg" alt="Email Icon" width={32} height={32} />
    )
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/ChainLex_ai",
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
                    {social.icon}
                  </span>
                  <span className="block md:hidden">
                    {React.cloneElement(
                      social.icon as React.ReactElement,
                      { width: 20, height: 20 }
                    )}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap items-center gap-4 md:gap-8 mb-8 md:mb-12">
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

        {/* Disclaimer */}
        <div className="text-white/50 leading-relaxed text-[12px] md:text-sm">
          <p className="weight-[500] mb-2">About Us</p>
          <p className="font-inter mb-4">
            Chainlex builds the first cross-chain, cross-protocol, and
            cross-jurisdictional compliance layer for RWAs. Through LexStudio,
            LexOracle, and LexEnforcer, we transform static paper assets into
            liquid, programmable, and legally enforceable digital assets.
          </p>
          <p className="font-inter weight-[500] mb-2">Legal Disclaimer</p>
          <p className="font-inter">
            1. No Investment Advice.The information provided on this website is
            for general informational purposes only and does not constitute
            financial, legal, tax, or investment advice. You should not rely on
            this information as a basis for making any investment decisions.
            Please consult with a professional licensed advisor before engaging
            in any financial activities. 2.Regulatory Compliance.Chainlex
            operates in strict adherence to applicable regulatory frameworks,
            including but not limited to US SEC (Reg D/S), EU MiCA, and HK SFC
            guidelines. However, the regulatory landscape for digital assets is
            evolving. It is the user's responsibility to ensure that their use
            of Chainlex services complies with the laws and regulations of their
            specific jurisdiction. 3.Technology Provider.Chainlex is a software
            development and technology infrastructure company. We are not a
            bank, asset manager, or regulated exchange. Our protocols are
            designed to assist issuers in achieving compliance, but Chainlex
            does not guarantee the value, liquidity, or security of the
            underlying assets.
          </p>
        </div>
      </div>
    </footer>
  );
}
