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
    <section className="bg-bronze text-cream">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 h-[56px] flex items-center justify-center overflow-hidden">
        <div className="flex items-center gap-10 md:gap-16 whitespace-nowrap animate-marquee">
          {[...items, ...items].map((label, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-6 shrink-0">
              <Image
                src={asset("/media/logo-fan.png")}
                alt=""
                width={40}
                height={22}
                className="h-[18px] w-auto invert opacity-90"
              />
              <span className="text-[11px] md:text-[13px] tracking-[0.28em] uppercase">
                {label}
              </span>
              <Image
                src={asset("/media/logo-fan.png")}
                alt=""
                width={40}
                height={22}
                className="h-[18px] w-auto invert opacity-90"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
