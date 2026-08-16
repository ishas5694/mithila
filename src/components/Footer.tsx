import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";

type Col = { title: string; items: { label: string; href: string }[] };

const columns: Col[] = [
  {
    title: "Makhana",
    items: [
      { label: "Rock Salted", href: "/makhana" },
      { label: "Tangy Tomato", href: "/makhana" },
      { label: "Mind Pudhina", href: "/makhana" },
      { label: "Chunky Chat", href: "/makhana" },
    ],
  },
  {
    title: "Daal",
    items: [
      { label: "Kulthi daal", href: "/daal" },
      { label: "Chana daal", href: "/daal" },
      { label: "Keoti daal", href: "/daal" },
    ],
  },
  {
    title: "Rice",
    items: [
      { label: "Marcha daal", href: "/rice" },
      { label: "Katrani rice", href: "/rice" },
    ],
  },
  {
    title: "Oil",
    items: [
      { label: "Cold pressed", href: "/oil" },
      { label: "mustard oil", href: "/oil" },
    ],
  },
  {
    title: "Gulkand",
    items: [
      { label: "Rose petal", href: "/gulkand" },
      { label: "Saffron", href: "/gulkand" },
    ],
  },
];

const columns2: Col[] = [
  {
    title: "Achaar",
    items: [{ label: "Mango", href: "/shop" }],
  },
  {
    title: "Sattu",
    items: [
      { label: "Plain", href: "/shop" },
      { label: "Salty", href: "/shop" },
      { label: "Mango", href: "/shop" },
      { label: "Litchi", href: "/shop" },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Contact", href: "#" },
      { label: "My Account", href: "/login" },
      { label: "Shipping & Returns", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
    ],
  },
  {
    title: "Collections",
    items: [
      { label: "Makhana", href: "/makhana" },
      { label: "Daal", href: "/daal" },
      { label: "Rice", href: "/rice" },
      { label: "Oil", href: "/oil" },
      { label: "Gulkand", href: "/gulkand" },
      { label: "Honey", href: "/honey" },
      { label: "Achar", href: "/shop" },
      { label: "Sattu", href: "/shop" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-cream">
      {/* Bronze columns block */}
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="bg-bronze text-cream rounded-[2px]">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 p-8 md:p-12">
            {columns.map((c) => (
              <div key={c.title}>
                <div className="font-serif text-[20px] text-cream">
                  {c.title}
                </div>
                <ul className="mt-4 space-y-2">
                  {c.items.map((i) => (
                    <li key={i.label}>
                      <Link
                        href={i.href}
                        className="text-[13px] text-cream/70 hover:text-cream transition-colors"
                      >
                        {i.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 px-8 md:px-12 pb-10 md:pb-14 pt-2 md:pt-4">
            {columns2.map((c) => (
              <div key={c.title}>
                <div className="font-serif text-[20px] text-cream">
                  {c.title}
                </div>
                <ul className="mt-4 space-y-2">
                  {c.items.map((i) => (
                    <li key={i.label}>
                      <Link
                        href={i.href}
                        className="text-[13px] text-cream/70 hover:text-cream transition-colors"
                      >
                        {i.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wordmark + decorative lotus scene */}
      <div className="pt-14 md:pt-20 pb-6 md:pb-10 text-center">
        <Image
          src={asset("/media/logo-wordmark.png")}
          alt="Mithila Gharana 2026"
          width={720}
          height={144}
          className="mx-auto h-[80px] md:h-[120px] w-auto"
        />

        {/* Lotus / reed water illustration */}
        <div className="mt-6 md:mt-10 mx-auto max-w-[1440px] px-4 md:px-10">
          <Image
            src={asset("/media/footer-lotus.png")}
            alt=""
            width={2000}
            height={480}
            className="w-full h-auto"
          />
        </div>

        {/* Legacy SVG (kept as fallback, not rendered) */}
        <div className="hidden">
          <svg viewBox="0 0 1200 340" className="w-full h-auto text-ink-70" fill="none" aria-hidden>
            {/* horizon line */}
            <line x1="0" y1="220" x2="1200" y2="220" stroke="currentColor" strokeWidth="0.8" />
            {/* sun */}
            <circle cx="600" cy="170" r="26" stroke="currentColor" strokeWidth="0.8" />

            {/* left reeds */}
            <g stroke="currentColor" strokeWidth="0.9" strokeLinecap="round">
              {[...Array(9)].map((_, i) => (
                <path
                  key={i}
                  d={`M${140 + i * 8} 220 Q${150 + i * 8} ${
                    100 + (i % 3) * 20
                  } ${160 + i * 8} ${80 + (i % 2) * 40}`}
                />
              ))}
            </g>
            {/* right reeds */}
            <g stroke="currentColor" strokeWidth="0.9" strokeLinecap="round">
              {[...Array(9)].map((_, i) => (
                <path
                  key={i}
                  d={`M${940 + i * 8} 220 Q${950 + i * 8} ${
                    120 + (i % 3) * 20
                  } ${960 + i * 8} ${90 + (i % 2) * 40}`}
                />
              ))}
            </g>

            {/* lily pads */}
            <g stroke="currentColor" strokeWidth="0.9" fill="none">
              {[
                [230, 260, 40, 12],
                [360, 285, 46, 14],
                [500, 265, 42, 13],
                [700, 280, 50, 15],
                [850, 260, 42, 13],
                [990, 285, 48, 14],
              ].map(([cx, cy, rx, ry], i) => (
                <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={ry} />
              ))}
            </g>

            {/* lotuses */}
            <g stroke="currentColor" strokeWidth="0.9" fill="none">
              {[350, 570, 720, 870].map((cx, i) => (
                <g key={i} transform={`translate(${cx} 250)`}>
                  {[...Array(6)].map((_, j) => {
                    const a = -Math.PI / 2 + (j - 2.5) * 0.35;
                    const x = 18 * Math.cos(a);
                    const y = 18 * Math.sin(a);
                    return <path key={j} d={`M0 0 Q${x / 2} ${y - 4} ${x} ${y}`} />;
                  })}
                  <circle cx={0} cy={-4} r={4} />
                </g>
              ))}
            </g>

            {/* water ripples */}
            <g stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.6">
              {[240, 260, 280, 300, 320].map((y, i) => (
                <path key={i} d={`M0 ${y} Q300 ${y - 4} 600 ${y} T1200 ${y}`} />
              ))}
            </g>
          </svg>
        </div>
      </div>
    </footer>
  );
}
