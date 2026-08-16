import ProductDetail from "@/components/ProductDetail";
import { cardImage, COMBO_IMAGE, detailImages, findProduct, relatedIn } from "@/lib/products";

export const metadata = { title: "Rose Saffron Gulkand · Mithila Gharana" };

export default function GulkandPage() {
  const me = findProduct("ROSE-SAFFRON-GULKAND")!;
  const related = relatedIn("Gulkand", me.slug);

  return (
    <ProductDetail
      breadcrumbs={["Shop", "Gulkand", me.name]}
      name={me.name}
      rating={me.rating}
      reviewsCount={22}
      description="A slow-made sweet preserve of hand-picked rose petals and Kashmir saffron. Cooling, floral and deeply nourishing — a spoon at dawn or a whisper in warm milk before bed."
      price={me.price}
      sizeOptions={["150 g", "300 g", "500 g"]}
      addOn={{ name: "Add a hand-blown glass jar", price: "+ Rs 220" }}
      images={detailImages(me.slug)}
      ingredients={[
        { label: "Premium Saffron", note: "Long-thread saffron sourced from Kashmiri growers, gently colouring every jar." },
        { label: "Handpicked Rose Petal", note: "Damask rose petals plucked at dawn for maximum fragrance and softness.", icon: "/media/explore-sustain-2.jpg" },
        { label: "Raw Honey", note: "Sweetened with raw forest honey — no refined sugar, no shortcuts.", icon: "/media/honey-hero-1.jpg" },
        { label: "Green Cardamom", note: "A subtle warmth of freshly ground green cardamom to lift the floral notes." },
      ]}
      storyImage="/media/gulkand-story.jpg"
      storyBody={[
        "Before the day begins, the finest roses are handpicked for their fragrance and freshness. Layered with natural ingredients and slowly matured using traditional techniques, they gradually develop into a delicately sweet preserve that has been cherished for generations.",
        "At Mithila Gharana, we continue this timeless tradition through thoughtful craftsmanship and small-batch preparation. Every jar reflects our belief that true luxury comes from patience, authenticity and a deep respect for heritage — bringing the gentle essence of blooming roses to your table, one spoonful at a time.",
      ]}
      combo={{
        title: "Both Gulkand Jars · Rose + Royal Saffron",
        description: "Try both slow-made preserves in one box, gift-ready in a hand-block-printed pouch.",
        price: "Rs 1,150",
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
