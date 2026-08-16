import ProductDetail from "@/components/ProductDetail";
import { cardImage, COMBO_IMAGE, findProduct, relatedIn } from "@/lib/products";

export const metadata = { title: "Katarni Rice · Mithila Gharana" };

export default function RicePage() {
  const me = findProduct("KATRANI-RICE")!;
  const related = relatedIn("Rice", me.slug);

  return (
    <ProductDetail
      breadcrumbs={["Shop", "Rice", me.name]}
      name={me.name}
      rating={me.rating}
      reviewsCount={19}
      description="A naturally fragrant, soft-textured, GI-tagged heirloom rice cultivated in the fertile plains of Bihar. Aged gently to preserve its subtle sweetness and to make every meal an occasion."
      price={me.price}
      sizeOptions={["500 g", "1 kg", "2 kg"]}
      addOn={{ name: "Add a jute rice storage pouch", price: "+ Rs 150" }}
      images={["/media/rice-hero-1.jpg", "/media/rice-hero-2.jpg", "/media/rice-hero-3.jpg", "/media/rice-hero-4.jpg", "/media/rice-hero-1.jpg"]}
      ingredients={[
        { label: "Premium Katarni Rice", note: "GI-tagged short-grain aromatic rice, handpicked and sun-dried." },
        { label: "Naturally Sun-Dried", note: "Dried in the open air to lock in its natural aromatic oils." },
        { label: "Naturally Aromatic", note: "A subtle, floral fragrance that fills the kitchen from the first boil." },
        { label: "100% Natural", note: "No polishing, no additives, no preservatives — just pure heirloom rice." },
      ]}
      storyImage="/media/rice-story.jpg"
      storyBody={[
        "Katarni Rice has been cherished for generations for its naturally fragrant aroma, soft texture, and rich culinary heritage. Cultivated in the fertile lands of Bihar, it is carefully grown, naturally sun-dried, and thoughtfully prepared to preserve its authentic character.",
        "At Mithila Gharana, we bring this timeless grain to your table with the same respect for tradition and purity that has defined it for centuries. Every bowl celebrates the essence of Mithila — simple, authentic, and deeply rooted in heritage.",
      ]}
      combo={{
        title: "Both Rice Bags · Katrani + Marcha",
        description: "The everyday rice you'll cook with, plus the heirloom marcha for a Sunday khichdi.",
        price: "Rs 1,350",
        image: COMBO_IMAGE,
      }}
      related={related.map((r) => ({
        name: r.name,
        price: r.price,
        src: cardImage(r.slug),
        badge: r.badge,
        href: r.detailPath,
      }))}
    />
  );
}
