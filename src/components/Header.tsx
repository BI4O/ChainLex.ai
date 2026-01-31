"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Platfotm", href: "/platfotm", hasDropdown: true },
  { label: "Ecosystem", href: "/ecosystem", hasDropdown: true },
  { label: "Research", href: "/research", hasDropdown: true },
  { label: "About", href: "/about", hasDropdown: true }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/icons/logo.svg"
              alt="ChainLex Logo"
              width={32}
              height={32}
              priority
            />
            <Image
              src="/icons/logo-text.svg"
              alt="ChainLex"
              width={150}
              height={24}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-white/80 hover:text-white transition-colors text-sm"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/signup"
              className="w-[88px] h-[40px] flex items-center justify-center text-sm text-black bg-white rounded-[41px] hover:opacity-90 transition-opacity"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="w-[88px] h-[40px] flex items-center justify-center text-sm text-[#FFFFFFCC] border border-[#FFFFFF80] rounded-[41px] hover:opacity-90 transition-opacity"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/90 backdrop-blur-md rounded-lg p-4 mt-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-3 text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-3 mt-4 pt-4 border-t border-white/10">
              <Link
                href="/signup"
                className="flex-1 px-4 py-2 text-sm text-white text-center border border-white/30 rounded-full"
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                className="flex-1 px-4 py-2 text-sm text-white text-center border border-white/30 rounded-full"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
