"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Review = {
  name: string;
  location: string;
  date: string;
  stars: number;
  heading: string;
  body: string;
  product: string;
  thumbSrc: string;
};

const reviews: Review[] = [
  {
    name: "Alessandra M.",
    location: "Mumbai",
    date: "4/26/24",
    stars: 5,
    heading: "Authentic food",
    body: "The quality is exceptional. You can genuinely feel the difference compared to regular grocery brands. Everything arrived fresh and beautifully packed.",
    product: "Rock Salted Makhana",
    thumbSrc: "/media/ROCK-SALTED-MAKHANA.png",
  },
  {
    name: "Alexia K.",
    location: "Bengaluru",
    date: "1/11/24",
    stars: 5,
    heading: "Makhana combo is my new snack",
    body: "Every product feels thoughtfully sourced. The packaging is minimal, premium, and the story behind the brand makes the experience even more meaningful.",
    product: "Minty Pudhina Makhana",
    thumbSrc: "/media/MINTY-PUDHINA-MAKHANA.png",
  },
  {
    name: "Elizabeth W.",
    location: "London",
    date: "7/4/26",
    stars: 5,
    heading: "Gulkand tastes like home",
    body: "Pure flavors. Honest sourcing. A brand I'll keep coming back to. The saffron gulkand reminded me of my grandmother's kitchen.",
    product: "Saffron Gulkand",
    thumbSrc: "/media/ROSE-SAFFRON-GULKAND.png",
  },
  {
    name: "Rohan K.",
    location: "Delhi",
    date: "3/12/24",
    stars: 5,
    heading: "Best mustard oil online",
    body: "Sharp, aromatic, cold-pressed for real. When it hits a hot kadhai the aroma is unmatched — three bottles ordered for family in one week.",
    product: "Wood Pressed Mustard Oil",
    thumbSrc: "/media/oil-hero-1.jpg",
  },
  {
    name: "Priya S.",
    location: "Bhagalpur",
    date: "2/02/24",
    stars: 5,
    heading: "My Katrani rice person now",
    body: "I grew up eating Katrani rice and gave up finding it in Bombay. Mithila delivers it in a week and the grain is picture-perfect.",
    product: "Marcha Rice",
    thumbSrc: "/media/rice-hero-3.jpg",
  },
  {
    name: "Neha B.",
    location: "Pune",
    date: "6/18/26",
    stars: 5,
    heading: "Honey worth the wait",
    body: "Set the jar on my breakfast counter and it doubles as decor. Raw, uncrystallised, and heart-stoppingly floral.",
    product: "Organic Wild Forest Honey",
    thumbSrc: "/media/review-3-honey.png",
  },
];

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="inline-flex items-center gap-[3px] text-script">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="w-[13px] h-[13px]"
          fill={i < n ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden
        >
          <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
        </svg>
      ))}
    </span>
  );
}

function IconChevron(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

function IconQuote(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M6 17c0-2.5.5-4.5 1.5-6S10.5 8 12 8V6c-3 0-5.5 1-7.5 3S1.5 13.5 1.5 17H6Zm11 0c0-2.5.5-4.5 1.5-6S21.5 8 23 8V6c-3 0-5.5 1-7.5 3s-3 4.5-3 8H17Z" />
    </svg>
  );
}

export default function Reviews() {
  const scrollerRef = useRef<HTMLUListElement | null>(null);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);
  const total = reviews.length;
  const maxIndex = Math.max(0, total - visible);

  // Track visible cards based on viewport
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setVisible(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Snap-scroll to the current index
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const first = el.children[0] as HTMLElement | undefined;
    if (!first) return;
    const gap = parseInt(window.getComputedStyle(el).columnGap || "0", 10);
    el.scrollTo({ left: index * (first.offsetWidth + gap), behavior: "smooth" });
  }, [index, visible]);

  // Auto-advance every 5s; pause on hover
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1 > maxIndex ? 0 : i + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [paused, maxIndex]);

  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(
    () => setIndex((i) => (i + 1 > maxIndex ? 0 : i + 1)),
    [maxIndex],
  );

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <span className="text-[11px] tracking-[0.28em] uppercase text-ink-70">
              Kind words
            </span>
            <h2 className="mt-3 font-serif text-[36px] md:text-[52px] leading-[1.02] text-ink">
              Loved by our people
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Stars />
            <div className="text-[13px] text-ink-70">
              <span className="text-ink font-medium">4.9</span> · 812 verified reviews
            </div>
            <div className="ml-4 flex items-center gap-2">
              <button
                aria-label="Previous"
                onClick={prev}
                className="w-10 h-10 rounded-full border border-ink-40 flex items-center justify-center text-ink hover:bg-ink hover:text-cream hover:border-ink transition"
              >
                <IconChevron className="w-4 h-4 rotate-180" />
              </button>
              <button
                aria-label="Next"
                onClick={next}
                className="w-10 h-10 rounded-full border border-ink-40 flex items-center justify-center text-ink hover:bg-ink hover:text-cream hover:border-ink transition"
              >
                <IconChevron className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel scroller */}
        <div
          className="mt-10 md:mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <ul
            ref={scrollerRef}
            className="flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((r) => (
              <li
                key={r.name}
                className="snap-start shrink-0 basis-full sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)]"
              >
                <article className="relative h-full bg-cream-soft/70 border border-ink-10 rounded-[8px] p-7 md:p-8 flex flex-col">
                  <IconQuote className="w-8 h-8 text-script/50" />
                  <Stars n={r.stars} />
                  <h3 className="mt-5 font-serif text-[22px] md:text-[24px] leading-[1.2] text-ink">
                    {r.heading}
                  </h3>
                  <p className="mt-4 text-[14px] leading-[1.7] text-ink-70 flex-1">
                    &ldquo;{r.body}&rdquo;
                  </p>
                  <div className="mt-8 pt-6 border-t border-ink-10 flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-cream border border-ink-10">
                      <Image
                        src={r.thumbSrc}
                        alt={r.product}
                        fill
                        sizes="48px"
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 text-[12px]">
                      <div className="text-ink font-medium">{r.name}</div>
                      <div className="text-ink-70">
                        Verified buyer · {r.location}
                      </div>
                    </div>
                    <div className="text-[11px] text-ink-40">{r.date}</div>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          {/* Progress dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-[3px] rounded-full transition-all ${
                  i === index ? "w-8 bg-ink" : "w-4 bg-ink-20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
