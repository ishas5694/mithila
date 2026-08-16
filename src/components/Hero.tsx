import Image from "next/image";
import MediaSlot from "./MediaSlot";

const featured = [
  { label: "All natural", note: "Rock Salted Makhana", src: "/media/featured-1-makhana.png", offset: 0 },
  { label: "Ancient Super food", note: "Sattu", src: "/media/featured-2-sattu.png", offset: 1 },
  { label: "Modern wellness", note: "Saffron Gulkand", src: "/media/featured-3-saffron-gulkand.png", offset: 2 },
  { label: "Forgotten grain", note: "Marcha Rice", src: "/media/featured-4-marcha-rice.png", offset: 3 },
  { label: "Crafted Elegance", note: "Keoti Dal", src: "/media/featured-5-kulhad-coffee.png", offset: 4 },
];

export default function Hero() {
  return (
    <section id="top" className="relative bg-cream">
      {/* Full-bleed cinematic water video */}
      <div className="relative w-full">
        <MediaSlot
          label="Dark rippled water — cinematic hero backdrop"
          videoSrc="/media/hero-water.mp4"
          variant="water"
          aspect="aspect-[16/9] md:aspect-auto"
          className="w-full md:h-[calc(100vh-142px)] md:min-h-[560px] md:max-h-[820px]"
          labelClassName="text-cream/60 text-[11px] md:text-[13px]"
        />

        {/* Overlay: heading + EXPLORE */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-serif text-cream text-[24px] md:text-[38px] leading-[1.35] tracking-[0.16em] uppercase [text-shadow:0_1px_10px_rgba(0,0,0,0.35)]">
            Timeless Traditions
            <br />
            Curated for Modern Living
          </h1>
          <a
            href="#shop"
            className="pointer-events-auto mt-10 md:mt-12 inline-flex items-center px-9 py-3.5 border border-cream text-cream text-[12px] md:text-[13px] tracking-[0.28em] uppercase rounded-full hover:bg-cream hover:text-ink transition-colors"
          >
            Explore
          </a>
        </div>
      </div>

      {/* Hero copy — Big fan + centered serif line */}
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-20 md:pt-28 pb-8 md:pb-12 text-center">
        <Image
          src="/media/logo-fan.png"
          alt=""
          width={220}
          height={110}
          priority
          className="mx-auto h-[80px] md:h-[110px] w-auto"
        />
        <h2 className="mt-10 md:mt-14 font-serif text-[26px] md:text-[42px] leading-[1.35] text-ink">
          Every tradition begins with a{" "}
          <span
            className="font-script text-script text-[38px] md:text-[62px] leading-none align-baseline"
            style={{ fontStyle: "italic" }}
          >
            story
          </span>
          .
          <br />
          Every story begins in the heart of Mithila.
        </h2>
      </div>

      {/* Featured product tiles — 5 across, floating up/down */}
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 pb-20 md:pb-28">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-12 items-end">
          {featured.map((f) => (
            <li key={f.label} className="text-center">
              <div
                className="mx-auto w-full max-w-[210px] aspect-square animate-float"
                style={{ animationDelay: `${f.offset * 0.4}s` }}
              >
                <MediaSlot
                  label={f.note}
                  src={f.src}
                  variant="transparent"
                  aspect="aspect-square"
                  fit="contain"
                />
              </div>
              <p
                className={`mt-5 text-[13px] md:text-[15px] text-ink ${
                  f.offset % 2 === 1 ? "md:mt-10" : ""
                }`}
              >
                {f.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
