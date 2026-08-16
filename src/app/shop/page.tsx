"use client";
import { asset } from "@/lib/asset";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import MediaSlot from "@/components/MediaSlot";
import { cardImage, products, type Product } from "@/lib/products";

const filters: (Product["category"] | "All Products")[] = [
  "All Products",
  "Makhana",
  "Gulkand",
  "Daal",
  "Sattu",
  "Rice",
  "Oil",
  "Honey",
];

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="inline-flex items-center gap-[2px] text-script">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="w-[11px] h-[11px]" fill={i < n ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
        </svg>
      ))}
    </span>
  );
}

function ProductCard({ p }: { p: Product }) {
  return (
    <li className="group">
      <Link href={p.detailPath} className="block">
        <div className="relative aspect-square bg-cream-soft/60 rounded-[4px] overflow-hidden">
          <Image
            src={cardImage(p.slug)}
            alt={p.name}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
            className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
          />
          {p.badge && (
            <span className="absolute top-3 right-3 bg-cream text-ink text-[10px] tracking-[0.18em] uppercase px-3 py-1 rounded-full border border-ink-10">
              {p.badge}
            </span>
          )}
        </div>
        <div className="mt-4 flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="text-[12px] tracking-[0.14em] uppercase text-ink truncate">
              {p.name}
            </h3>
            <p className="mt-1 text-[12px] text-ink-70 line-clamp-1">{p.desc}</p>
          </div>
          <div className="flex items-center gap-1 shrink-0 text-[11px] text-ink-70">
            <Stars />
            <span className="text-ink">{p.rating}</span>
          </div>
        </div>
        <button className="mt-3 w-full h-10 rounded-full bg-bronze text-cream text-[11px] tracking-[0.22em] uppercase hover:bg-bronze-deep transition inline-flex items-center justify-between px-5">
          Add to Cart
          <span className="text-cream/80 tracking-normal normal-case">{p.price}</span>
        </button>
      </Link>
    </li>
  );
}

export default function ShopPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All Products");
  const filtered = useMemo(
    () => (active === "All Products" ? products : products.filter((p) => p.category === active)),
    [active],
  );
  const grouped = useMemo(() => {
    const map = new Map<Product["category"], Product[]>();
    for (const p of filtered) {
      if (!map.has(p.category)) map.set(p.category, []);
      map.get(p.category)!.push(p);
    }
    return Array.from(map.entries());
  }, [filtered]);

  return (
    <>
      {/* Hero */}
      <section className="relative w-full">
        <MediaSlot
          label="Lotus leaves & flowers — shop banner"
          src={asset("/media/roots-2-ghee-lamps.jpg")}
          variant="cream"
          aspect="aspect-[16/5]"
          className="w-full"
          labelClassName="text-cream/70"
        />
        <div className="absolute inset-0 flex items-end md:items-center justify-center pb-8 md:pb-0">
          <h1 className="font-serif text-cream text-[36px] md:text-[64px] leading-none tracking-[0.02em] uppercase [text-shadow:0_2px_20px_rgba(0,0,0,0.35)]">
            Shop
          </h1>
        </div>
      </section>

      {/* Filter row */}
      <div className="sticky top-0 z-30 bg-cream/95 backdrop-blur border-b border-ink-10">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 h-14 flex items-center gap-2 overflow-x-auto">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`h-9 px-4 rounded-full text-[11px] tracking-[0.14em] uppercase whitespace-nowrap transition ${
                active === f
                  ? "bg-ink text-cream"
                  : "text-ink hover:bg-cream-soft border border-transparent"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Product grid grouped by category */}
      <section className="mx-auto max-w-[1280px] px-6 md:px-10 py-12 md:py-16">
        {grouped.map(([cat, items]) => (
          <div key={cat} className="mb-16 last:mb-0">
            <h2 className="font-serif text-[28px] md:text-[36px] text-ink mb-8">
              {cat}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {items.map((p) => (
                <ProductCard key={p.slug} p={p} />
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
