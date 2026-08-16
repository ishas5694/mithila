import MediaSlot from "./MediaSlot";
import { asset } from "@/lib/asset";
import SplitReveal from "./SplitReveal";

export default function FloralLegacy() {
  return (
    <section id="heritage" className="bg-cream py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="reveal split-parent">
            <span className="text-[11px] tracking-[0.24em] uppercase text-ink-70 inline-block">
              Rose leaf and Saffron
            </span>
            <SplitReveal
              as="h2"
              className="mt-5 font-serif font-black text-[40px] md:text-[60px] leading-[1] tracking-[0.005em] text-ink uppercase"
              lines={["Mithila's Floral", "Legacy"]}
            />
            <p className="mt-8 max-w-[440px] text-[14px] md:text-[15px] leading-[1.8] text-ink-70">
              More than a sweet preserve, Gulkand is a story of Mithila&apos;s
              relationship with nature, craftsmanship, and celebration. Made
              from carefully selected rose petals and traditional preparation
              techniques, it delivers a rich floral sweetness that connects
              every taste to the heritage of the region.
            </p>
            <a
              href="/gulkand"
              className="group mt-10 inline-flex items-center gap-3 px-9 py-3.5 border border-ink text-[11px] tracking-[0.28em] uppercase text-ink rounded-full hover:bg-ink hover:text-cream transition-colors duration-500 relative overflow-hidden"
            >
              <span className="relative z-[1]">Shop More</span>
              <span
                aria-hidden
                className="relative z-[1] inline-block transition-transform duration-500 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>

          <div className="relative">
            <div className="reveal overflow-hidden rounded-[3px] shadow-[var(--shadow-lift)]">
              <div className="animate-ken-burns">
                <MediaSlot
                  label="Two Mithila gulkand tins on rose petals · dark gulkand backdrop"
                  src={asset("/media/floral-legacy.jpg")}
                  variant="gulkand"
                  aspect="aspect-[4/5]"
                />
              </div>
            </div>
            {/* subtle glow behind card */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 -z-[1] opacity-60 blur-3xl [background:radial-gradient(circle_at_center,rgba(107,26,32,0.28),transparent_70%)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
