import Image from "next/image";
import MediaSlot from "./MediaSlot";

const products = [
  { name: "Rock Salted Makhana", price: "Rs. 350.00", src: "/media/best-1-rock-salted-makhana.png" },
  { name: "Saffron Gulkand", price: "Rs. 450.00", src: "/media/best-2-saffron-gulkand.png" },
  { name: "Marcha Rice", price: "Rs. 550.00", src: "/media/best-3-marcha-rice.png" },
  { name: "Minty Pudhina Makhana", price: "Rs. 500.00", src: "/media/best-4-minty-pudhina-makhana.png" },
];

function IconArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </svg>
  );
}

export default function BestSellers() {
  return (
    <section id="best-sellers" className="bg-cream pt-4 md:pt-8 pb-12 md:pb-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/media/logo-fan.png"
            alt=""
            width={64}
            height={34}
            className="h-[34px] md:h-[40px] w-auto mb-3"
          />
          <h2 className="font-serif text-[36px] md:text-[52px] leading-none text-ink tracking-[0.01em]">
            Best Sellers
          </h2>
        </div>

        {/* Cards + next arrow */}
        <div className="mt-10 md:mt-14 relative">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products.map((p) => (
              <li key={p.name} className="text-center">
                <div className="aspect-square">
                  <MediaSlot
                    label={p.name}
                    src={p.src}
                    variant="transparent"
                    aspect="aspect-square"
                    fit="contain"
                  />
                </div>
                <div className="mt-5 text-left px-1">
                  <div className="text-[11px] tracking-[0.16em] uppercase text-ink">
                    {p.name}
                  </div>
                  <div className="mt-1 text-[11px] tracking-[0.14em] uppercase text-ink-60">
                    {p.price}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <button
            aria-label="Next products"
            className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-ink-40 items-center justify-center text-ink hover:bg-ink hover:text-cream hover:border-ink transition"
          >
            <IconArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="h-[2px] w-[36px] bg-ink" />
          <span className="h-[2px] w-[36px] bg-ink-20" />
          <span className="h-[2px] w-[36px] bg-ink-20" />
        </div>
      </div>
    </section>
  );
}
