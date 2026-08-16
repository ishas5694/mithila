import Image from "next/image";
import { asset } from "@/lib/asset";

const items = [
  "Mithila Gharana",
  "Where Heritage Becomes Home",
  "Mithila Gharana",
  "Where Heritage Becomes Home",
];

export default function GharanaStrip() {
  return (
    <section className="relative bg-bronze text-cream">
      {/* soft edge fades so the marquee doesn't hard-cut */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 z-[1] bg-gradient-to-r from-bronze to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 z-[1] bg-gradient-to-l from-bronze to-transparent"
      />
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 h-[60px] flex items-center justify-center overflow-hidden">
        <div className="flex items-center gap-10 md:gap-16 whitespace-nowrap animate-marquee">
          {[...items, ...items].map((label, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-6 shrink-0">
              <Image
                src={asset("/media/logo-fan.png")}
                alt=""
                width={40}
                height={22}
                className="h-[18px] w-auto invert opacity-80"
              />
              <span className="text-[11px] md:text-[13px] tracking-[0.32em] uppercase">
                {label}
              </span>
              <Image
                src={asset("/media/logo-fan.png")}
                alt=""
                width={40}
                height={22}
                className="h-[18px] w-auto invert opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
