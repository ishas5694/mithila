"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { asset } from "@/lib/asset";
import MagneticButton from "./MagneticButton";
import MediaSlot from "./MediaSlot";
import SplitReveal from "./SplitReveal";

const featured = [
  { label: "All natural",       note: "Rock Salted Makhana",  src: "/media/featured-1-makhana.png",         href: "/makhana", offset: 0 },
  { label: "Ancient Super food",note: "Sattu",                src: "/media/featured-2-sattu.png",           href: "/shop#sattu", offset: 1 },
  { label: "Modern wellness",   note: "Saffron Gulkand",      src: "/media/featured-3-saffron-gulkand.png", href: "/gulkand", offset: 2 },
  { label: "Forgotten grain",   note: "Marcha Rice",          src: "/media/featured-4-marcha-rice.png",     href: "/rice",    offset: 3 },
  { label: "Crafted Elegance",  note: "Keoti Dal",            src: "/media/featured-5-kulhad-coffee.png",   href: "/daal",    offset: 4 },
];

/**
 * Cursor-tilt: element gently rotates/lifts toward the pointer.
 * Disabled on touch + reduced-motion.
 */
function useTilt() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const nx = (e.clientX - cx) / r.width;   // -0.5 → 0.5
      const ny = (e.clientY - cy) / r.height;
      const rotY = nx * 12;
      const rotX = -ny * 12;
      const tx = nx * 6;
      const ty = ny * 6;
      el.style.transform = `perspective(800px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translate3d(${tx}px, ${ty}px, 0)`;
    };
    const leave = () => {
      el.style.transform = "perspective(800px) rotateX(0) rotateY(0) translate3d(0,0,0)";
    };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);
  return ref;
}

function ScrollCue() {
  return (
    <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none">
      <span className="text-cream/80 text-[10px] tracking-[0.3em] uppercase">
        Scroll
      </span>
      <span aria-hidden className="relative block h-9 w-[1px] bg-cream/30 overflow-hidden">
        <span className="absolute inset-x-0 top-0 h-3 bg-cream animate-[scroll-cue_2.2s_cubic-bezier(0.6,0.05,0.15,0.95)_infinite]" />
      </span>
      <style jsx>{`
        @keyframes scroll-cue {
          0%   { transform: translateY(-100%); opacity: 0; }
          40%  { opacity: 1; }
          100% { transform: translateY(120%); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function FeaturedTile({
  f,
  idx,
}: {
  f: (typeof featured)[number];
  idx: number;
}) {
  const ref = useTilt();
  return (
    <li className="text-center group">
      <Link
        href={f.href}
        aria-label={`Shop ${f.note}`}
        className="block"
      >
        <div
          className="mx-auto w-full max-w-[210px] aspect-square animate-float relative"
          style={{ animationDelay: `${f.offset * 0.4}s` }}
        >
          <div
            ref={ref}
            className="w-full h-full transition-[filter] duration-500 group-hover:[filter:drop-shadow(0_12px_18px_rgba(122,90,47,0.28))]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <MediaSlot
              label={f.note}
              src={asset(f.src)}
              variant="transparent"
              aspect="aspect-square"
              fit="contain"
            />
          </div>
        </div>
        <p
          className={`mt-5 text-[13px] md:text-[15px] text-ink transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-bronze-deep ${
            idx % 2 === 1 ? "md:mt-10" : ""
          }`}
        >
          {f.label}
        </p>
      </Link>
    </li>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative bg-cream overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════
         1. Cinematic full-bleed hero — video + ken burns + vignette
         ═══════════════════════════════════════════════════════════ */}
      <div className="relative w-full grain vignette-b">
        <div className="animate-ken-burns w-full">
          <MediaSlot
            label="Dark rippled water — cinematic hero backdrop"
            videoSrc="/media/hero-water.mp4"
            variant="water"
            aspect="aspect-[16/9] md:aspect-auto"
            className="w-full md:h-[calc(100vh-142px)] md:min-h-[560px] md:max-h-[820px]"
            labelClassName="text-cream/60 text-[11px] md:text-[13px]"
          />
        </div>

        {/* Overlay copy */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-[2] reveal split-parent"
          data-parallax="0.06"
        >
          <SplitReveal
            as="h1"
            className="font-serif text-cream text-[24px] md:text-[42px] leading-[1.35] tracking-[0.18em] uppercase [text-shadow:0_2px_20px_rgba(0,0,0,0.35)]"
            lines={["Timeless Traditions", "Curated for Modern Living"]}
          />
          <MagneticButton
            href="#shop"
            strength={0.35}
            className="mt-10 md:mt-14"
          >
            <span className="inline-flex items-center px-9 py-3.5 border border-cream text-cream text-[12px] md:text-[13px] tracking-[0.32em] uppercase rounded-full hover:bg-cream hover:text-ink transition-colors duration-500 backdrop-blur-[2px]">
              Explore
            </span>
          </MagneticButton>
        </div>

        <ScrollCue />
      </div>

      {/* ═══════════════════════════════════════════════════════════
         2. Fan + big serif line with red script "story"
         ═══════════════════════════════════════════════════════════ */}
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-24 md:pt-36 pb-8 md:pb-12 text-center">
        <div className="reveal">
          <Image
            src={asset("/media/logo-fan.png")}
            alt=""
            width={220}
            height={110}
            priority
            className="mx-auto h-[80px] md:h-[110px] w-auto"
          />
        </div>
        <div className="mt-10 md:mt-14 reveal split-parent">
          <SplitReveal
            as="h2"
            className="font-serif text-[26px] md:text-[42px] leading-[1.35] text-ink"
            lines={[
              <>
                Every tradition begins with a{" "}
                <span
                  className="font-script text-script text-[38px] md:text-[62px] leading-none align-baseline inline-block"
                  style={{ fontStyle: "italic" }}
                >
                  story
                </span>
                .
              </>,
              <>Every story begins in the heart of Mithila.</>,
            ]}
          />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
         3. Featured product tiles — floating, tilt on hover
         ═══════════════════════════════════════════════════════════ */}
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 pb-24 md:pb-32">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-12 items-end reveal-stagger">
          {featured.map((f, i) => (
            <FeaturedTile key={f.label} f={f} idx={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
