import Image from "next/image";
import Link from "next/link";
import MediaSlot from "@/components/MediaSlot";

export const metadata = { title: "Explore · Mithila Gharana" };

const sustainability = [
  { label: "A seedling begins", src: "/media/explore-sustain-1.jpg" },
  { label: "Rose petals at dawn", src: "/media/explore-sustain-2.jpg" },
  { label: "Hands at the wheel", src: "/media/explore-sustain-3.jpg" },
  { label: "Bamboo grove morning", src: "/media/explore-sustain-4.jpg" },
];

const communities = [
  {
    title: "Guardians of water Lily",
    src: "/media/explore-community-1.jpg",
  },
  {
    title: "Janakpur Nagar",
    src: "/media/explore-community-2.jpg",
  },
];

const values = [
  { label: "Madhubani — Procession", src: "/media/explore-values-1.jpg" },
  { label: "Madhubani — Ceremony", src: "/media/explore-values-2.jpg" },
  { label: "Madhubani — Under the tree", src: "/media/explore-values-3.jpg" },
  { label: "Madhubani — Tree of life", src: "/media/explore-values-4.jpg" },
];

function FanBadge({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/media/logo-fan.png"
      alt=""
      width={80}
      height={40}
      className={`w-auto ${className}`}
    />
  );
}

function SunBadge({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 30"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M6 28 Q32 4 58 28" />
      <line x1="32" y1="28" x2="32" y2="4" />
      <line x1="16" y1="28" x2="22" y2="8" />
      <line x1="48" y1="28" x2="42" y2="8" />
      <line x1="4" y1="28" x2="60" y2="28" />
    </svg>
  );
}

export default function ExplorePage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative w-full">
        <MediaSlot
          label="Village lake at golden hour, banyan tree & thatched hut"
          src="/media/explore-hero.jpg"
          variant="water"
          aspect="aspect-[16/9] md:aspect-[16/7]"
          className="w-full"
          labelClassName="text-cream/70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-serif text-cream text-[28px] md:text-[46px] leading-[1.2] tracking-[0.005em] max-w-[720px] [text-shadow:0_2px_18px_rgba(0,0,0,0.4)]">
            Rooted in Nature, Crafted
            <br />
            for you
          </h1>
          <Link
            href="/shop"
            className="mt-8 md:mt-10 inline-flex items-center px-8 py-3.5 border border-cream text-cream text-[11px] md:text-[12px] tracking-[0.28em] uppercase rounded-full hover:bg-cream hover:text-ink transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 2. OUR MISSION */}
      <section className="bg-cream py-16 md:py-28 reveal">
        <div className="mx-auto max-w-[900px] px-6 md:px-10 text-center">
          <FanBadge className="mx-auto h-8 md:h-10 opacity-70" />
          <h2 className="mt-6 font-serif text-[40px] md:text-[60px] leading-none text-ink">
            Our Mission
          </h2>
          <p className="mt-8 font-serif text-[22px] md:text-[32px] leading-[1.35] text-ink">
            Connecting culture, stories, and premium
            <br />
            products in one{" "}
            <span
              className="font-script text-[32px] md:text-[48px] leading-none align-baseline"
              style={{ color: "#6b7f3a", fontStyle: "italic" }}
            >
              ecosystem
            </span>
            .
          </p>
          <p className="mt-10 md:mt-12 max-w-[680px] mx-auto text-[14px] md:text-[15px] leading-[1.8] text-ink-70">
            Mithila is a cultural destination and premium marketplace that
            brings the heritage and stories of the Mithila region into everyday
            life.
            <br />
            We connect meaningful storytelling with curated pantry products,
            creating an ecosystem where culture inspires commerce and commerce
            preserves culture.
          </p>
        </div>
      </section>

      {/* 3. SUSTAINABILITY */}
      <section className="bg-cream py-16 md:py-24 reveal">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="text-center">
            <h2 className="font-serif text-[40px] md:text-[60px] leading-none text-ink">
              Sustainability
            </h2>
            <p className="mt-4 text-[13px] md:text-[14px] text-ink-70">
              From nature to home, every step is guided by responsibility.
            </p>
          </div>
          <ul className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 reveal-stagger">
            {sustainability.map((s, i) => (
              <li key={s.label} className="overflow-hidden rounded-[2px]">
                <div
                  className="animate-float h-full"
                  style={{ animationDelay: `${i * 0.35}s` }}
                >
                  <MediaSlot
                    label={s.label}
                    src={s.src}
                    variant="cream"
                    aspect="aspect-[3/4]"
                    className="transition-transform duration-[900ms] hover:scale-[1.03]"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. TIMELESS TRADITIONS */}
      <section className="bg-cream py-16 md:py-24 reveal">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="bg-cream-soft/60 rounded-[6px] p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
              <MediaSlot
                label="Bowl of makhana on linen — still life"
                src="/media/explore-makhana-bowl.jpg"
                variant="cream"
                aspect="aspect-[5/4]"
                className="rounded-[4px]"
              />
              <div>
                <h3 className="font-serif text-[28px] md:text-[38px] text-ink leading-[1.15]">
                  Timeless Traditions.
                  <br />
                  Thoughtful Creations
                </h3>
                <p className="mt-6 text-[14px] leading-[1.8] text-ink-70 max-w-[460px]">
                  Mithila is the birthplace of timeless traditions, rich culture
                  and vibrant stories. We draw inspiration from its heritage and
                  natural abundance to create products that are pure, meaningful
                  and made for today.
                </p>
                <Link
                  href="/shop"
                  className="mt-8 inline-flex items-center px-8 py-3 border border-ink text-[11px] tracking-[0.22em] uppercase text-ink rounded-full hover:bg-ink hover:text-cream transition-colors"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Kicker taglines row */}
      <section className="bg-cream-soft/70 py-10 md:py-14 reveal">
        <div className="mx-auto max-w-[1000px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-center">
          <div className="flex flex-col items-center">
            <FanBadge className="h-8 md:h-9 text-bronze" />
            <p className="mt-4 text-[12px] md:text-[13px] leading-[1.7] text-ink-70 max-w-[360px]">
              Our products carry the stories, flavours and traditions of
              Mithila, thoughtfully brought into the everyday.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <SunBadge className="w-16 h-8 md:w-[80px] md:h-9 text-bronze" />
            <p className="mt-4 text-[12px] md:text-[13px] leading-[1.7] text-ink-70 max-w-[360px]">
              From the landscapes, traditions and flavours of Mithila, we create
              products that carry its story into modern homes.
            </p>
          </div>
        </div>
      </section>

      {/* 6. COMMUNITY */}
      <section className="bg-cream py-16 md:py-24 reveal">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <h2 className="font-serif text-[40px] md:text-[56px] leading-none text-ink">
            Community
          </h2>
          <p className="mt-5 max-w-[820px] text-[14px] md:text-[15px] leading-[1.7] text-ink-70">
            Our community is the foundation of everything we create. By
            partnering with local farmers, artisans, and producers, we celebrate
            Mithila&apos;s rich heritage while fostering sustainable livelihoods
            and lasting cultural impact.
          </p>
          <ul className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 reveal-stagger">
            {communities.map((c) => (
              <li
                key={c.title}
                className="group relative rounded-[4px] overflow-hidden"
              >
                <MediaSlot
                  label={c.title}
                  src={c.src}
                  variant="cream"
                  aspect="aspect-[16/10]"
                  className="transition-transform duration-[900ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-cream">
                  <h3 className="font-serif italic text-[26px] md:text-[34px] leading-tight [text-shadow:0_2px_10px_rgba(0,0,0,0.4)]">
                    {c.title}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. OUR VALUES */}
      <section className="bg-cream py-16 md:py-24 reveal">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="text-center">
            <h2 className="font-serif text-[40px] md:text-[56px] leading-none text-ink">
              Our Values
            </h2>
            <p className="mt-4 text-[13px] md:text-[14px] text-ink-70">
              From nature to home, every step is guided by responsibility.
            </p>
          </div>
          <ul className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 reveal-stagger">
            {values.map((v, i) => (
              <li
                key={v.label}
                className="overflow-hidden rounded-[4px] group"
              >
                <MediaSlot
                  label={v.label}
                  src={v.src}
                  variant="cream"
                  aspect="aspect-[3/4]"
                  className="transition-transform duration-[900ms] group-hover:scale-[1.04]"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. A COLLECTION SHAPED BY TIME */}
      <section className="bg-cream py-16 md:py-24 reveal">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-10 md:gap-16 items-center">
            <MediaSlot
              label="Bottle + tin + cylinder collage with white flowers"
              src="/media/explore-collection.jpg"
              variant="cream"
              aspect="aspect-[5/4]"
              className="rounded-[4px]"
            />
            <div>
              <h3 className="font-serif text-[28px] md:text-[42px] leading-[1.1] text-ink">
                A Collection
                <br />
                Shaped by Time
              </h3>
              <p className="mt-6 text-[14px] leading-[1.8] text-ink-70 max-w-[440px]">
                Handcrafted pantry essentials inspired by the traditions,
                flavours, and stories of a remarkable region.
              </p>
              <Link
                href="/shop"
                className="mt-8 inline-flex items-center px-8 py-3 border border-ink text-[11px] tracking-[0.22em] uppercase text-ink rounded-full hover:bg-ink hover:text-cream transition-colors"
              >
                View Collection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
