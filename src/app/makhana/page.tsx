import ProductDetail from "@/components/ProductDetail";
import { cardImage, COMBO_IMAGE, detailImages, findProduct, relatedIn } from "@/lib/products";

export const metadata = { title: "Minty Pudhina Makhana · Mithila Gharana" };

export default function MakhanaPage() {
  const me = findProduct("MINTY-PUDHINA-MAKHANA")!;
  const related = relatedIn("Makhana", me.slug);

  return (
    <ProductDetail
      breadcrumbs={["Shop", "Makhana", me.name]}
      name={me.name}
      rating={me.rating}
      reviewsCount={19}
      description="Crisp, cool and quietly moreish. Roasted fox nuts tumbled in dried pudhina leaves, Himalayan rock salt and a whisper of cold-pressed oil — a snack that tastes like an evening in the garden."
      price={me.price}
      sizeOptions={["100 g", "250 g", "500 g"]}
      addOn={{ name: "Add a hand-block-printed cloth bag", price: "+ Rs 120" }}
      images={detailImages(me.slug)}
      ingredientsTitle="Our Natural Ingredients"
      ingredients={[
        { label: "Premium Makhana", note: "Handpicked from pristine wetlands of Mithila, naturally rich in protein.", icon: "/media/ing-premium-makhana.png" },
        { label: "Dried Pudhina Leaves", note: "Carefully selected sun-dried mint leaves that deliver a refreshing aroma and cool finish.", icon: "/media/ing-pudhina-leaves.png" },
        { label: "Himalayan Rock Salt", note: "Naturally mineral-rich, unrefined salt that enhances the taste without preserving fire.", icon: "/media/ing-rock-salt.png" },
        { label: "Cold-Pressed Oil", note: "Wooden-ghani cold-pressed oil that carries the authentic flavour of the harvest.", icon: "/media/ing-cold-pressed-oil.png" },
      ]}
      storyImage="/media/makhana-story.jpg"
      storyBody={[
        "In the quiet ponds where lotus blooms under the morning sun, a small seed begins its journey. Nurtured by the patient hands of Mithila farmers, it becomes Makhana, a food that nourishes families, supports livelihoods, and carries generations of tradition.",
        "At Mithila Gharana, we honour that legacy. Each tin carries not just a snack, but a connection to the wetlands, the farmers, and the culture that shapes every crunch. From the waters of Mithila to your home, it's a story worth preserving.",
      ]}
      combo={{
        title: "The 4-Flavour Makhana Combo",
        description: "One tin each of Rock Salted, Tangy Tomato, Minty Pudhina and Chunky Chaat — every flavour of the field, ready for the shelf.",
        price: "Rs 1,499",
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
