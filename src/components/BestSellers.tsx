"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { asset } from "@/lib/asset";

type Product = {
  name: string;
  price: string;
  href: string;
  images: [string, string, string]; // [default, hover-left, hover-right]
};

const products: Product[] = [
  {
    name: "Rock Salted Makhana",
    price: "Rs. 350.00",
    href: "/makhana",
    images: [
      "/media/test/review-1-thumb.jpg",
      "/media/test/rock-salted-front.png",
      "/media/test/review-1-thumb.png",
    ],
  },
  {
    name: "Saffron Gulkand",
    price: "Rs. 450.00",
    href: "/gulkand",
    images: [
      "/media/best-2-saffron-gulkand.png",
      "/media/test/ROYAL-SAFFRON-GULKAND.png",
      "/media/test/ROYAL-SAFFRON-GULKAND-Shade.png",
    ],
  },
  {
    name: "Marcha Rice",
    price: "Rs. 750.00",
    href: "/rice",
    images: [
      "/media/best-3-marcha-rice.png",
      "/media/test/marcha-rice-open.png",
      "/media/test/rice-hero-3.jpg",
    ],
  },
  {
    name: "Minty Pudhina Makhana",
    price: "Rs. 500.00",
    href: "/makhana",
    images: [
      "/media/best-4-minty-pudhina-makhana.png",
      "/media/test/minty-pudhina-open.png",
      "/media/best-4-minty-pudhina-makhana.png",
    ],
  },
];

function IconArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </svg>
  );
}

/** Rotating dashed outline around a circular CTA. */
function RotatingRing() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 w-full h-full pointer-events-none animate-slow-rotate text-bronze/60"
      style={{ animationDuration: "18s" }}
      aria-hidden
    >
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="1.5 4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProductCard({ p }: { p: Product }) {
  // 0 = default, 1 = hover-left, 2 = hover-right
  const [state, setState] = useState<0 | 1 | 2>(0);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const handleMove: React.MouseEventHandler = (e) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    setState(x < r.width / 2 ? 1 : 2);
  };

  return (
    <li className="text-center group">
      <Link
        href={p.href}
        aria-label={`Shop ${p.name}`}
        className="block relative rounded-[6px] p-4 -m-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-cream-soft/40 hover:shadow-[var(--shadow-soft)]"
      >
        <div
          ref={wrapRef}
          onMouseMove={handleMove}
          onMouseLeave={() => setState(0)}
          className="aspect-square relative overflow-hidden rounded-[4px] bg-cream-soft/40"
        >
          {/* Three stacked images — cross-fade + subtle scale between them */}
          {p.images.map((src, i) => (
            <Image
              key={src + i}
              src={asset(src)}
              alt={p.name}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
              className={`object-contain p-6 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                state === i
                  ? "opacity-100 scale-105"
                  : "opacity-0 scale-100"
              }`}
              style={{ willChange: "opacity, transform" }}
              priority={i === 0}
            />
          ))}

          {/* Warm hover glow behind product */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 [background:radial-gradient(circle_at_center,rgba(217,154,43,0.18),transparent_65%)]"
          />

          {/* Split-zone indicators (very subtle) — appear only on hover */}
          <div
            aria-hidden
            className={`pointer-events-none absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-ink-40 flex items-center justify-center text-ink-70 bg-cream/80 backdrop-blur transition-all duration-500 ${
              state === 1
                ? "left-3 opacity-100"
                : state === 2
                ? "right-3 opacity-100 rotate-180"
                : "left-3 opacity-0"
            }`}
          >
            <span className="text-[10px] leading-none">←</span>
          </div>

          {/* Dot indicator row */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`h-[3px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  state === i ? "w-6 bg-ink" : "w-2 bg-ink-40"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-5 text-left px-1 flex items-baseline justify-between gap-3">
          <div>
            <div className="text-[11px] tracking-[0.16em] uppercase text-ink transition-colors group-hover:text-bronze-deep">
              {p.name}
            </div>
            <div className="mt-1 text-[11px] tracking-[0.14em] uppercase text-ink-60">
              {p.price}
            </div>
          </div>
          <span
            aria-hidden
            className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-ink-20 text-ink-70 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            <IconArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </Link>
    </li>
  );
}

export default function BestSellers() {
  return (
    <section id="best-sellers" className="bg-cream pt-4 md:pt-8 pb-12 md:pb-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="flex flex-col items-center text-center reveal">
          <Image
            src={asset("/media/logo-fan.png")}
            alt=""
            width={64}
            height={34}
            className="h-[34px] md:h-[40px] w-auto mb-3"
          />
          <h2 className="font-serif text-[36px] md:text-[52px] leading-none text-ink tracking-[0.01em]">
            Best Sellers
          </h2>
        </div>

        <div className="mt-10 md:mt-14 relative">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 reveal-stagger">
            {products.map((p) => (
              <ProductCard key={p.name} p={p} />
            ))}
          </ul>

          {/* Rotating-outline next arrow */}
          <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 w-14 h-14">
            <RotatingRing />
            <button
              aria-label="Next products"
              className="absolute inset-1 rounded-full border border-ink-30 flex items-center justify-center text-ink bg-cream hover:bg-ink hover:text-cream hover:border-ink transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
            >
              <IconArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <span className="h-[2px] w-[36px] bg-ink" />
          <span className="h-[2px] w-[36px] bg-ink-20" />
          <span className="h-[2px] w-[36px] bg-ink-20" />
        </div>
      </div>
    </section>
  );
}
