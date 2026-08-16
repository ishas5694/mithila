import ProductDetail from "@/components/ProductDetail";
import { cardImage, COMBO_IMAGE, findProduct } from "@/lib/products";

export const metadata = { title: "Premium Mustard Oil · Mithila Gharana" };

export default function OilPage() {
  const me = findProduct("PREMIUM-MUSTARD-OIL")!;

  return (
    <ProductDetail
      breadcrumbs={["Shop", "Oil", me.name]}
      name={me.name}
      rating={me.rating}
      reviewsCount={19}
      description="Sharp, aromatic, wood-pressed mustard oil made from carefully selected seeds. The way our grandmothers cooked, in every kadhai — pungent when it meets heat, mellow on the plate."
      price={me.price}
      sizeOptions={["500 ml", "1 L", "2 L"]}
      addOn={{ name: "Add a hand-thrown clay bottle", price: "+ Rs 380" }}
      images={["/media/oil-hero-1.jpg", "/media/oil-hero-2.jpg", "/media/oil-hero-1.jpg", "/media/oil-hero-2.jpg", "/media/oil-hero-1.jpg"]}
      ingredients={[
        { label: "Premium Mustard Seeds", note: "Small-lot, carefully sorted seeds from farms across Mithila." },
        { label: "Traditional Wood Pressed", note: "Cold-pressed on wooden ghanis — no heat, no chemicals, no shortcuts." },
        { label: "Naturally Aromatic", note: "Full-bodied, sharp aroma that carries the character of a real kadhai." },
        { label: "100% Natural", note: "Unrefined, unbleached, unblended — one ingredient, its real name." },
      ]}
      storyImage="/media/oil-story.jpg"
      storyBody={[
        "Mustard oil has long been an essential part of Mithila's culinary heritage, celebrated for its bold aroma and rich flavour. Made from carefully selected mustard seeds and traditionally wood-pressed, it preserves the natural goodness that has nourished generations.",
        "At Mithila Gharana, every bottle reflects our commitment to authenticity, purity and timeless craftsmanship. Free from artificial additives and prepared with care, our mustard oil brings the true essence of Mithila to every meal.",
      ]}
      combo={{
        title: "Pantry Starter · Oil + Dal + Rice",
        description: "One bottle of oil, one cylinder of dal, one bag of rice — a week's worth of dinners in one box.",
        price: "Rs 1,899",
        image: COMBO_IMAGE,
      }}
      related={[
        { name: "Rock Salted Makhana", price: "Rs 350", src: cardImage("ROCK-SALTED-MAKHANA"), href: "/makhana" },
        { name: "Classic Sattu", price: "Rs 400", src: cardImage("CLASSIC-SATTU"), href: "/shop" },
        { name: "Arhar Dal", price: "Rs 700", src: cardImage("ARHAR-DAL"), href: "/daal" },
      ]}
    />
  );
}
