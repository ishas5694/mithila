import Image from "next/image";
import MediaSlot from "./MediaSlot";
import { asset } from "@/lib/asset";

const products = [
  { name: "Rock Salted Makhana",  price: "Rs. 350.00", src: "/media/best-1-rock-salted-makhana.png" },
  { name: "Saffron Gulkand",       price: "Rs. 450.00", src: "/media/best-2-saffron-gulkand.png" },
  { name: "Marcha Rice",           price: "Rs. 550.00", src: "/media/best-3-marcha-rice.png" },
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
        <div className="flex flex-col items-center text-center reveal">
          <Image
            src={asset("/media/logo-fan.png")}
            alt=""
            width={64}
            height={34}
            className="h-[34px] md:h-[40px] w-auto mb-3"
          />
          <h2 className="font-serif text-[36px] md:text-[52px] leading-none text-ink tracking-[0.01em]">
            Best Sellers
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-10 md:mt-14 relative">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 reveal-stagger">
            {products.map((p) => (
              <li key={p.name} className="text-center group">
                <a
                  href="/shop"
                  className="block relative rounded-[6px] p-4 -m-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-cream-soft/60 hover:shadow-[var(--shadow-soft)]"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <div className="w-full h-full transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:-rotate-1 will-change-transform">
                      <MediaSlot
                        label={p.name}
                        src={asset(p.src)}
                        variant="transparent"
                        aspect="aspect-square"
                        fit="contain"
                      />
                    </div>
                    {/* Warm hover glow behind product */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 [background:radial-gradient(circle_at_center,rgba(217,154,43,0.18),transparent_65%)]"
                    />
                  </div>
                  <div className="mt-5 text-left px-1 flex items-baseline justify-between gap-3">
                    <div>
                      <div className="text-[11px] tracking-[0.16em] uppercase text-ink transition-colors group-hover:text-bronze-deep">
                        {p.name}
                      </div>
                      <div className="mt-1 text-[11px] tracking-[0.14em] uppercase text-ink-60">
                        {p.price}
                      </div>
                    </div>
                    <span
                      aria-hidden
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-ink-20 text-ink-70 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    >
                      <IconArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <button
            aria-label="Next products"
            className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-ink-40 items-center justify-center text-ink hover:bg-ink hover:text-cream hover:border-ink transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-110"
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
