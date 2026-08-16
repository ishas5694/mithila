import MediaSlot from "./MediaSlot";
import { asset } from "@/lib/asset";
import SplitReveal from "./SplitReveal";

export default function MustardOilFeature() {
  return (
    <section className="bg-cream pb-20 md:pb-28 reveal overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-0 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch group/feature">
          {/* Full-bleed sunflower video — subtle zoom on hover */}
          <div className="overflow-hidden md:rounded-l-[3px] transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/feature:scale-[1.02]">
            <MediaSlot
              label="Sunflowers with bees at golden hour"
              videoSrc="/media/mustard-oil-sunflowers.mp4"
              variant="sunflower"
              aspect="aspect-[4/5] md:aspect-auto"
              className="min-h-[380px] md:min-h-[560px] h-full"
            />
          </div>

          {/* Product info card */}
          <div className="bg-cream-soft/60 flex flex-col items-center justify-center text-center px-6 md:px-12 py-14 md:py-16 md:rounded-r-[3px] split-parent">
            <SplitReveal
              as="h3"
              className="font-serif text-[28px] md:text-[36px] leading-tight text-ink"
              lines={[<>Wood Pressed Mustard Oil</>]}
            />
            <p className="mt-5 max-w-[360px] text-[13px] md:text-[14px] leading-[1.8] text-ink-70">
              Sunflower oil is rich in Vitamin E, a powerful antioxidant that
              protects cells, boosts immunity, and promotes healthy skin.
            </p>

            <div className="mt-8 mx-auto w-[110px] aspect-[110/220] animate-float">
              <MediaSlot
                label="Mustard oil bottle"
                src={asset("/media/mustard-oil-bottle.png")}
                variant="transparent"
                aspect="aspect-[110/220]"
                fit="contain"
              />
            </div>

            <div className="mt-6">
              <div className="text-[14px] tracking-[0.06em] text-ink">
                Premium – Edible Oil
              </div>
              <div className="mt-1 text-[13px] text-ink-70">Rs 850</div>
            </div>

            <a
              href="/oil"
              className="group/btn mt-7 relative inline-flex items-center gap-3 px-9 py-3 border border-ink text-[11px] tracking-[0.28em] uppercase text-ink rounded-full overflow-hidden transition-colors duration-500 hover:text-cream"
            >
              <span
                aria-hidden
                className="absolute inset-0 bg-ink translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              <span className="relative z-[1]">Add to Cart</span>
              <span
                aria-hidden
                className="relative z-[1] inline-block transition-transform duration-500 group-hover/btn:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
