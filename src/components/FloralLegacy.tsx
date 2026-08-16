import MediaSlot from "./MediaSlot";

export default function FloralLegacy() {
  return (
    <section id="heritage" className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <span className="text-[11px] tracking-[0.24em] uppercase text-ink-70">
              Rose leaf and Saffron
            </span>
            <h2 className="mt-5 font-serif font-black text-[38px] md:text-[54px] leading-[1.02] tracking-[0.005em] text-ink uppercase">
              Mithila&apos;s Floral
              <br />
              Legacy
            </h2>
            <p className="mt-6 max-w-[420px] text-[14px] leading-[1.7] text-ink-70">
              More than a sweet preserve, Gulkand is a story of Mithila&apos;s
              relationship with nature, craftsmanship, and celebration. Made
              from carefully selected rose petals and traditional preparation
              techniques, it delivers a rich floral sweetness that connects
              every taste to the heritage of the region.
            </p>
            <a
              href="#gulkand"
              className="mt-8 inline-flex items-center px-8 py-3 border border-ink text-[11px] tracking-[0.22em] uppercase text-ink rounded-full hover:bg-ink hover:text-cream transition-colors"
            >
              Shop More
            </a>
          </div>

          <div className="relative">
            <MediaSlot
              label="Two Mithila gulkand tins on rose petals · dark gulkand backdrop"
              src="/media/floral-legacy.jpg"
              variant="gulkand"
              aspect="aspect-[4/5]"
              className="rounded-[2px] shadow-soft"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
