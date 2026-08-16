import MediaSlot from "./MediaSlot";

export default function MustardOilFeature() {
  return (
    <section className="bg-cream pb-16 md:pb-24">
      <div className="mx-auto max-w-[1200px] px-0 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
          {/* Full-bleed sunflower field on the left */}
          <MediaSlot
            label="Sunflowers with bees at golden hour"
            videoSrc="/media/mustard-oil-sunflowers.mp4"
            variant="sunflower"
            aspect="aspect-[4/5] md:aspect-auto"
            className="min-h-[380px] md:min-h-[520px]"
          />

          {/* Product info */}
          <div className="bg-cream-soft/60 flex flex-col items-center justify-center text-center px-6 md:px-12 py-14 md:py-16">
            <h3 className="font-serif text-[26px] md:text-[34px] leading-tight text-ink">
              Wood Pressed Mustard Oil
            </h3>
            <p className="mt-5 max-w-[360px] text-[13px] md:text-[14px] leading-[1.7] text-ink-70">
              Sunflower oil is rich in Vitamin E, a powerful antioxidant that
              protects cells, boosts immunity, and promotes healthy skin.
            </p>

            <div className="mt-8 mx-auto w-[110px] aspect-[110/220]">
              <MediaSlot
                label="Mustard oil bottle"
                src="/media/mustard-oil-bottle.png"
                variant="transparent"
                aspect="aspect-[110/220]"
                fit="contain"
              />
            </div>

            <div className="mt-6">
              <div className="text-[14px] text-ink">Premium – Edible Oil</div>
              <div className="mt-1 text-[13px] text-ink-70">Rs 850</div>
            </div>

            <button className="mt-6 px-8 py-2.5 border border-ink text-[11px] tracking-[0.22em] uppercase text-ink rounded-full hover:bg-ink hover:text-cream transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
