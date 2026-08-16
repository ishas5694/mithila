import Image from "next/image";
import MediaSlot from "./MediaSlot";
import { asset } from "@/lib/asset";

function IconArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </svg>
  );
}

/**
 * Curved "SWEET NEWS" along the top of the pill card. Slowly rotates for
 * ambient motion.
 */
function ArcSweetNews() {
  return (
    <svg
      viewBox="0 0 360 360"
      className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 w-[92%] h-auto pointer-events-none animate-slow-rotate"
      aria-hidden
    >
      <defs>
        <path
          id="sweet-news-arc"
          d="M 60 170 A 120 120 0 0 1 300 170"
          fill="none"
        />
      </defs>
      <text
        fill="currentColor"
        className="font-serif"
        style={{ fontSize: "22px", letterSpacing: "0.32em" }}
      >
        <textPath href="#sweet-news-arc" startOffset="50%" textAnchor="middle">
          SWEET NEWS · SWEET NEWS ·
        </textPath>
      </text>
    </svg>
  );
}

export default function SweetNews() {
  return (
    <section className="relative bg-cream pb-20 md:pb-28 reveal">
      <div className="mx-auto max-w-[1440px] px-0 md:px-10">
        <div className="relative group overflow-hidden md:rounded-[3px]">
          {/* Dark food image behind — ken burns for slow ambience */}
          <div className="animate-ken-burns">
            <MediaSlot
              label="Organic wild forest honey on wooden board with honeycomb & flowers"
              src={asset("/media/sweet-news-honey.jpg")}
              variant="honey"
              aspect="aspect-[16/9] md:aspect-[16/7]"
              className="md:rounded-[3px]"
              overlayClassName="items-end justify-center pb-6 md:pb-10"
              labelClassName="text-cream/60 text-[11px] tracking-[0.28em] uppercase"
            />
          </div>

          {/* Warm vignette overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[1] [background:radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.35)_100%)]"
          />

          {/* Floating vertical PILL card at top-left */}
          <div
            className="absolute top-6 left-6 md:top-14 md:left-16 z-[3] w-[220px] h-[340px] md:w-[300px] md:h-[460px] bg-cream rounded-full shadow-[var(--shadow-lift)] flex flex-col items-center pt-16 md:pt-20 pb-8 md:pb-10 px-6 md:px-8 text-center transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1"
            data-parallax="0.05"
          >
            <ArcSweetNews />
            <div className="mt-10 md:mt-16 w-[110px] md:w-[150px] aspect-square relative">
              <Image
                src={asset("/media/sweet-news-jar.png")}
                alt="Mithila honey jar"
                width={300}
                height={300}
                className="w-full h-full object-contain drop-shadow-[0_10px_18px_rgba(122,90,47,0.25)]"
              />
            </div>
            <p className="mt-4 md:mt-6 text-[12px] md:text-[13px] leading-[1.6] tracking-[0.02em] text-ink">
              From our Hives
              <br />
              to
              <br />
              Your Homes
            </p>
          </div>

          {/* Next arrow */}
          <button
            aria-label="Next"
            className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-[3] w-12 h-12 rounded-full border-2 border-cream/70 items-center justify-center text-cream hover:bg-cream hover:text-ink hover:border-cream transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-110"
          >
            <IconArrow className="w-5 h-5" />
          </button>

          {/* Caption line at bottom center */}
          <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-[3] text-[10px] md:text-[11px] tracking-[0.4em] uppercase text-cream/85">
            Organic wild forest honey
          </div>
        </div>
      </div>
    </section>
  );
}
