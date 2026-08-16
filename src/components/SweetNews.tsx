import Image from "next/image";
import MediaSlot from "./MediaSlot";

function IconArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </svg>
  );
}

/**
 * Curved "SWEET NEWS" along the top of the pill card.
 * SVG viewBox is 360x120; the text follows an arc that sits inside the pill's top curve.
 */
function ArcSweetNews() {
  return (
    <svg
      viewBox="0 0 360 130"
      className="absolute top-6 md:top-8 left-1/2 -translate-x-1/2 w-[85%] h-auto pointer-events-none"
      aria-hidden
    >
      <defs>
        <path
          id="sweet-news-arc"
          d="M 40 110 Q 180 -30 320 110"
          fill="none"
        />
      </defs>
      <text
        fill="currentColor"
        className="font-serif"
        style={{ fontSize: "22px", letterSpacing: "0.32em" }}
      >
        <textPath href="#sweet-news-arc" startOffset="50%" textAnchor="middle">
          SWEET NEWS
        </textPath>
      </text>
    </svg>
  );
}

export default function SweetNews() {
  return (
    <section className="relative bg-cream pb-16 md:pb-24">
      <div className="mx-auto max-w-[1440px] px-0 md:px-10">
        <div className="relative">
          {/* Dark food image behind */}
          <MediaSlot
            label="Organic wild forest honey on wooden board with honeycomb & flowers"
            src="/media/sweet-news-honey.jpg"
            variant="honey"
            aspect="aspect-[16/9] md:aspect-[16/7]"
            className="rounded-[2px]"
            overlayClassName="items-end justify-center pb-6 md:pb-10"
            labelClassName="text-cream/60 text-[11px] tracking-[0.28em] uppercase"
          />

          {/* Floating vertical PILL card at top-left */}
          <div className="absolute top-6 left-6 md:top-14 md:left-16 w-[220px] h-[340px] md:w-[300px] md:h-[460px] bg-cream rounded-full shadow-soft flex flex-col items-center pt-14 md:pt-16 pb-8 md:pb-10 px-6 md:px-8 text-center">
            <ArcSweetNews />
            <div className="mt-16 md:mt-24 w-[110px] md:w-[150px] aspect-square">
              <Image
                src="/media/sweet-news-jar.png"
                alt="Mithila honey jar"
                width={300}
                height={300}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="mt-4 md:mt-6 text-[12px] md:text-[13px] leading-[1.5] text-ink">
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
            className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-bronze/70 items-center justify-center text-bronze hover:bg-bronze hover:text-cream hover:border-bronze transition"
          >
            <IconArrow className="w-5 h-5" />
          </button>

          {/* Caption line at bottom center */}
          <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 text-[10px] md:text-[11px] tracking-[0.32em] uppercase text-cream/80">
            Organic wild forest honey
          </div>
        </div>
      </div>
    </section>
  );
}
