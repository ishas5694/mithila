import MediaSlot from "./MediaSlot";
import { asset } from "@/lib/asset";
import SplitReveal from "./SplitReveal";

const tiles = [
  { label: "Weaving Madhubani art on cloth", src: "/media/roots-1-weaving.jpg" },
  { label: "Ghee lamps in a traditional ceremony", src: "/media/roots-2-ghee-lamps.jpg" },
  { label: "Hands at work grinding spices", src: "/media/roots-3-grinding-spices.jpg" },
];

export default function Roots() {
  return (
    <section className="bg-cream py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="reveal split-parent">
          <SplitReveal
            as="h2"
            className="font-serif text-[32px] md:text-[44px] leading-tight text-ink"
            lines={[<>Our Roots Run Deep in Mithila</>]}
          />
        </div>
        <p className="mt-5 max-w-[720px] text-[14px] md:text-[15px] leading-[1.8] text-ink-70 reveal">
          Products are deeply rooted in the heritage, traditions, and natural
          richness of Mithila. We bring these timeless roots into the present
          through thoughtfully crafted, authentic products.
        </p>

        <ul className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 reveal-stagger">
          {tiles.map((t) => (
            <li
              key={t.label}
              className="group relative overflow-hidden rounded-[4px] card-lift"
            >
              <div className="transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]">
                <MediaSlot
                  label={t.label}
                  src={asset(t.src)}
                  variant="roots"
                  aspect="aspect-[4/3]"
                />
              </div>
              {/* dark caption gradient on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="font-serif italic text-cream text-[18px] md:text-[22px] leading-tight [text-shadow:0_2px_10px_rgba(0,0,0,0.4)]">
                  {t.label}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
