import MediaSlot from "./MediaSlot";

const tiles = [
  { label: "Weaving Madhubani art on cloth", src: "/media/roots-1-weaving.jpg" },
  { label: "Ghee lamps in a traditional ceremony", src: "/media/roots-2-ghee-lamps.jpg" },
  { label: "Hands at work grinding spices", src: "/media/roots-3-grinding-spices.jpg" },
];

export default function Roots() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <h2 className="font-serif text-[30px] md:text-[42px] leading-tight text-ink">
          Our Roots Run Deep in Mithila
        </h2>
        <p className="mt-4 max-w-[720px] text-[14px] md:text-[15px] leading-[1.7] text-ink-70">
          Products are deeply rooted in the heritage, traditions, and natural
          richness of Mithila. We bring these timeless roots into the present
          through thoughtfully crafted, authentic products.
        </p>

        <ul className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((t) => (
            <li key={t.label}>
              <MediaSlot
                label={t.label}
                src={t.src}
                variant="roots"
                aspect="aspect-[4/3]"
                className="rounded-[2px]"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
