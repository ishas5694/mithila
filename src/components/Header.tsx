"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { asset } from "@/lib/asset";

const nav = [
  { label: "Shop", href: "/shop" },
  { label: "Most Loved", href: "/shop#most-loved" },
  { label: "Grocery", href: "/shop" },
  { label: "Instant", href: "/shop" },
  { label: "Rituals & Sets", href: "/shop" },
  { label: "Explore", href: "/explore" },
];

function IconSearch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}
function IconUser(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
    </svg>
  );
}
function IconHeart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M12 21s-7-4.35-9.5-8.5C.9 9 3 5 6.5 5c2 0 3.5 1.2 5.5 3.5C14 6.2 15.5 5 17.5 5 21 5 23.1 9 21.5 12.5 19 16.65 12 21 12 21z" />
    </svg>
  );
}
function IconBag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M5 8h14l-1.2 12a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md shadow-[0_1px_0_rgba(42,42,42,0.06)]"
          : "bg-cream"
      }`}
    >
      {/* Row 1: search / wordmark / user·heart·cart */}
      <div
        className={`mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-[1fr_auto_1fr] items-center gap-4 transition-[height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "h-[68px]" : "h-[88px]"
        }`}
      >
        {/* Search pill */}
        <div className="hidden md:flex items-center gap-3 pl-4 pr-5 h-11 w-full max-w-[240px] rounded-full border border-ink-20 text-ink-70 hover:border-ink transition-colors duration-500">
          <IconSearch className="w-[16px] h-[16px]" />
          <input
            type="text"
            placeholder="SEARCH"
            className="flex-1 bg-transparent text-[12px] tracking-[0.22em] uppercase text-ink placeholder:text-ink-40 focus:outline-none"
          />
        </div>
        <button aria-label="Search" className="md:hidden justify-self-start text-ink">
          <IconSearch className="w-[20px] h-[20px]" />
        </button>

        {/* Centered wordmark */}
        <Link
          href="/"
          className="flex-shrink-0 justify-self-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          aria-label="Mithila Gharana — home"
          style={{ transform: scrolled ? "scale(0.9)" : "scale(1)" }}
        >
          <Image
            src={asset("/media/logo-wordmark.png")}
            alt="Mithila Gharana 2026"
            width={260}
            height={54}
            priority
            className="h-[42px] md:h-[54px] w-auto"
          />
        </Link>

        {/* Right icons */}
        <div className="flex items-center justify-end gap-5 md:gap-6 text-ink">
          <Link href="/login" aria-label="Account" className="hover:text-script transition-colors duration-300">
            <IconUser className="w-[22px] h-[22px]" />
          </Link>
          <button aria-label="Wishlist" className="hidden sm:inline hover:text-script transition-colors duration-300">
            <IconHeart className="w-[22px] h-[22px]" />
          </button>
          <button aria-label="Cart" className="relative hover:text-script transition-colors duration-300">
            <IconBag className="w-[22px] h-[22px]" />
            <span className="absolute -top-1 -right-2 min-w-[16px] h-[16px] px-1 rounded-full bg-script text-cream text-[10px] font-medium flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Row 2: centered primary nav with animated underline */}
      <nav className="border-t border-ink-10">
        <ul className="mx-auto max-w-[1440px] px-6 md:px-10 h-[54px] flex items-center justify-center gap-6 md:gap-12 overflow-x-auto">
          {nav.map((n) => (
            <li key={n.label}>
              <Link
                href={n.href}
                className="link-uline text-[14px] md:text-[15px] text-ink hover:text-script transition-colors duration-300 whitespace-nowrap"
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
