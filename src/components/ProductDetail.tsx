"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MediaSlot from "./MediaSlot";

export type ProductDetailProps = {
  breadcrumbs: string[];
  name: string;
  rating: number;
  reviewsCount: number;
  description: string;
  price: string;
  sizeOptions: string[];
  addOn?: { name: string; price: string };
  images: string[]; // hero + thumbnails; first is main
  ingredientsTitle?: string;
  ingredients: { label: string; note: string; icon?: string }[];
  storyImage: string;
  storyTitle?: string;
  storyBody: string[];
  relatedTitle?: string;
  related: { name: string; price: string; src: string; badge?: string; href?: string }[];
  combo?: { title: string; description: string; price: string; image: string };
};

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="inline-flex items-center gap-[3px] text-script">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="w-[13px] h-[13px]"
          fill={i < n ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden
        >
          <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
        </svg>
      ))}
    </span>
  );
}

function IconMinus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden {...props}>
      <path d="M5 12h14" />
    </svg>
  );
}
function IconPlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
function IconLeaf(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M20 4c-6 0-12 4-12 12v2h2c8 0 12-6 12-12 0-1 0-2-.5-2Z" />
      <path d="M8 20c1-3 3-6 8-10" />
    </svg>
  );
}
function IconCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M4 12l5 5L20 7" />
    </svg>
  );
}
function IconGlobe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

export default function ProductDetail(p: ProductDetailProps) {
  const [image, setImage] = useState(p.images[0]);
  const [size, setSize] = useState(p.sizeOptions[0]);
  const [qty, setQty] = useState(1);
  const [addOn, setAddOn] = useState(false);

  return (
    <>
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 pt-8 md:pt-10 text-[11px] tracking-[0.14em] uppercase text-ink-60">
        {p.breadcrumbs.map((b, i) => (
          <span key={b}>
            {i > 0 && <span className="mx-2 text-ink-40">/</span>}
            {i === p.breadcrumbs.length - 1 ? (
              <span className="text-ink">{b}</span>
            ) : (
              <Link href="/shop" className="hover:text-ink transition-colors">
                {b}
              </Link>
            )}
          </span>
        ))}
      </div>

      {/* Product hero */}
      <section className="mx-auto max-w-[1280px] px-6 md:px-10 pt-8 md:pt-10 pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT: main image + thumbnails */}
          <div>
            <div className="relative w-full aspect-square bg-cream-soft/60 rounded-[2px] overflow-hidden">
              <Image
                key={image}
                src={image}
                alt={p.name}
                fill
                sizes="(max-width: 1024px) 90vw, 600px"
                className="object-contain p-6 md:p-10 animate-fade-in"
              />
            </div>
            {p.images.length > 1 && (
              <ul className="mt-4 grid grid-cols-5 gap-3">
                {p.images.map((src) => (
                  <li key={src}>
                    <button
                      onClick={() => setImage(src)}
                      className={`relative w-full aspect-square bg-cream-soft/60 rounded-[2px] overflow-hidden border transition ${
                        image === src ? "border-bronze" : "border-transparent hover:border-ink-20"
                      }`}
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="100px"
                        className="object-contain p-2"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* RIGHT: info */}
          <div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-ink-70">
              {p.breadcrumbs[p.breadcrumbs.length - 2] || "Mithila Gharana"}
            </div>
            <h1 className="mt-1 font-serif text-[32px] md:text-[42px] leading-[1.1] text-ink">
              {p.name}
            </h1>
            <div className="mt-2 flex items-center gap-3">
              <Stars n={Math.round(p.rating)} />
              <span className="text-[12px] text-ink-70">
                {p.rating.toFixed(1)} · {p.reviewsCount} reviews
              </span>
            </div>

            <p className="mt-5 text-[14px] leading-[1.7] text-ink-70 max-w-[520px]">
              {p.description}
            </p>

            {/* Feature chips */}
            <ul className="mt-5 flex flex-wrap gap-2">
              {["100% natural", "Small batch", "Farm traceable"].map((f) => (
                <li
                  key={f}
                  className="inline-flex items-center gap-2 h-8 px-3 rounded-full border border-ink-20 text-[11px] tracking-[0.14em] uppercase text-ink-70"
                >
                  <IconCheck className="w-3 h-3 text-bronze" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Sizes */}
            <div className="mt-8">
              <div className="text-[11px] tracking-[0.22em] uppercase text-ink-70">
                Choose size
              </div>
              <div className="mt-3 flex gap-3 flex-wrap">
                {p.sizeOptions.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`h-10 px-5 rounded-full text-[12px] tracking-[0.14em] uppercase border transition ${
                      size === s
                        ? "bg-ink text-cream border-ink"
                        : "border-ink-20 text-ink hover:border-ink"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Qty + Price + CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center h-12 border border-ink-20 rounded-full overflow-hidden">
                <button
                  aria-label="Decrease"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-10 h-full flex items-center justify-center text-ink hover:bg-cream-soft transition"
                >
                  <IconMinus className="w-4 h-4" />
                </button>
                <div className="w-8 text-center text-[13px] tabular-nums text-ink">
                  {qty}
                </div>
                <button
                  aria-label="Increase"
                  onClick={() => setQty((q) => q + 1)}
                  className="w-10 h-full flex items-center justify-center text-ink hover:bg-cream-soft transition"
                >
                  <IconPlus className="w-4 h-4" />
                </button>
              </div>
              <button className="h-12 px-7 rounded-full bg-bronze text-cream text-[12px] tracking-[0.22em] uppercase hover:bg-bronze-deep transition inline-flex items-center gap-4">
                Add to Cart
                <span className="text-cream/80 border-l border-cream/30 pl-4 tracking-normal normal-case">
                  {p.price}
                </span>
              </button>
            </div>

            {/* Add-on */}
            {p.addOn && (
              <label className="mt-6 flex items-center gap-4 p-4 border border-ink-10 rounded-[6px] cursor-pointer hover:border-ink-20 transition">
                <input
                  type="checkbox"
                  checked={addOn}
                  onChange={(e) => setAddOn(e.target.checked)}
                  className="w-4 h-4 accent-bronze"
                />
                <div className="flex-1">
                  <div className="text-[13px] text-ink">{p.addOn.name}</div>
                  <div className="text-[11px] text-ink-70">{p.addOn.price}</div>
                </div>
                <IconLeaf className="w-5 h-5 text-bronze" />
              </label>
            )}

            {/* Shipping badges */}
            <div className="mt-6 flex flex-wrap gap-4 text-[11px] tracking-[0.12em] uppercase text-ink-70">
              <span className="inline-flex items-center gap-2">
                <IconGlobe className="w-3.5 h-3.5" /> Ships across India
              </span>
              <span className="inline-flex items-center gap-2">
                <IconCheck className="w-3.5 h-3.5 text-bronze" /> Cash on delivery
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Essence / Ingredients */}
      <section className="bg-cream py-16 md:py-20 reveal">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="font-serif text-[30px] md:text-[42px] text-center text-ink">
            {p.ingredientsTitle || "The Essence of Purity"}
          </h2>
          <ul className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 reveal-stagger">
            {p.ingredients.map((ing) => (
              <li
                key={ing.label}
                className="bg-cream-soft/60 rounded-[6px] p-6 md:p-7 flex flex-col items-center text-center transition hover:-translate-y-1 hover:shadow-soft duration-500"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-cream flex items-center justify-center shadow-soft overflow-hidden">
                  {ing.icon ? (
                    <Image
                      src={ing.icon}
                      alt=""
                      width={80}
                      height={80}
                      className="w-[80%] h-[80%] object-contain"
                    />
                  ) : (
                    <IconLeaf className="w-8 h-8 text-bronze" />
                  )}
                </div>
                <h3 className="mt-4 font-serif text-[16px] md:text-[18px] text-ink">
                  {ing.label}
                </h3>
                <p className="mt-2 text-[12px] leading-[1.5] text-ink-70">
                  {ing.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Story */}
      <section className="bg-cream py-16 md:py-24 reveal">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="font-serif text-[30px] md:text-[42px] text-center text-ink">
            {p.storyTitle || "Story of Product Category"}
          </h2>
          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <MediaSlot
              label={`${p.name} — landscape shot`}
              src={p.storyImage}
              variant="cream"
              aspect="aspect-[4/5]"
              className="rounded-[6px] shadow-soft"
            />
            <div>
              {p.storyBody.map((para, i) => (
                <p
                  key={i}
                  className="text-[14px] md:text-[15px] leading-[1.8] text-ink-70 mb-4 last:mb-0"
                >
                  {para}
                </p>
              ))}
              <div className="mt-6 flex items-center gap-4">
                <span className="w-11 h-11 rounded-full bg-cream-soft border border-ink-10 flex items-center justify-center">
                  <IconLeaf className="w-5 h-5 text-bronze" />
                </span>
                <span className="w-11 h-11 rounded-full bg-cream-soft border border-ink-10 flex items-center justify-center">
                  <IconGlobe className="w-5 h-5 text-bronze" />
                </span>
                <span className="w-11 h-11 rounded-full bg-cream-soft border border-ink-10 flex items-center justify-center">
                  <IconCheck className="w-5 h-5 text-bronze" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buy combo */}
      {p.combo && (
        <section className="bg-cream py-8 md:py-12 reveal">
          <div className="mx-auto max-w-[1200px] px-6 md:px-10">
            <div className="bg-cream-soft/60 rounded-[10px] p-5 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] shrink-0">
                <Image
                  src={p.combo.image}
                  alt={p.combo.title}
                  fill
                  sizes="200px"
                  className="object-contain"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="text-[11px] tracking-[0.22em] uppercase text-script">
                  Buy Combo · Save More
                </div>
                <h3 className="mt-2 font-serif text-[24px] md:text-[30px] leading-tight text-ink">
                  {p.combo.title}
                </h3>
                <p className="mt-2 text-[13px] md:text-[14px] leading-[1.7] text-ink-70 max-w-[520px] mx-auto md:mx-0">
                  {p.combo.description}
                </p>
              </div>
              <button className="shrink-0 h-12 px-6 md:px-8 rounded-full bg-bronze text-cream text-[11px] tracking-[0.22em] uppercase hover:bg-bronze-deep transition inline-flex items-center gap-4">
                Add Combo
                <span className="text-cream/80 border-l border-cream/30 pl-4 tracking-normal normal-case">
                  {p.combo.price}
                </span>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      <section className="bg-cream py-16 md:py-24 reveal">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="font-serif text-[30px] md:text-[42px] text-center text-ink">
            {p.relatedTitle || "Other Product You Might like"}
          </h2>
          <ul className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 reveal-stagger">
            {p.related.map((r) => {
              const inner = (
                  <>
                    <div className="relative aspect-square bg-cream-soft/60 rounded-[6px] overflow-hidden">
                      <Image
                        src={r.src}
                        alt={r.name}
                        fill
                        sizes="(max-width: 640px) 90vw, 33vw"
                        className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                      />
                      {r.badge && (
                        <span className="absolute top-3 right-3 bg-cream text-ink text-[10px] tracking-[0.18em] uppercase px-3 py-1 rounded-full border border-ink-10">
                          {r.badge}
                        </span>
                      )}
                    </div>
                    <div className="mt-4">
                      <h3 className="text-[13px] tracking-[0.14em] uppercase text-ink">
                        {r.name}
                      </h3>
                      <button className="mt-3 w-full h-10 rounded-full bg-bronze text-cream text-[11px] tracking-[0.22em] uppercase hover:bg-bronze-deep transition inline-flex items-center justify-center gap-4">
                        Add to Cart
                        <span className="text-cream/80 border-l border-cream/30 pl-4 tracking-normal normal-case">
                          {r.price}
                        </span>
                      </button>
                    </div>
                  </>
                );
              return (
                <li key={r.name} className="group">
                  {r.href ? (
                    <Link href={r.href} className="block">{inner}</Link>
                  ) : (
                    <div className="block">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
