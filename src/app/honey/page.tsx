import ProductDetail from "@/components/ProductDetail";
import { cardImage, COMBO_IMAGE, findProduct } from "@/lib/products";

export const metadata = { title: "Mithila Gold Honey · Mithila Gharana" };

export default function HoneyPage() {
  const me = findProduct("MITHILA-GOLD-HONEY")!;

  return (
    <ProductDetail
      breadcrumbs={["Shop", "Honey", me.name]}
      name={me.name}
      rating={me.rating}
      reviewsCount={19}
      description="Raw, unpasteurised wild-forest honey gathered from flower-rich landscapes across Mithila. Floral on the nose, warm on the palate, and slow to crystallise."
      price={me.price}
      sizeOptions={["250 g", "500 g", "1 kg"]}
      addOn={{ name: "Add a hand-carved wooden dipper", price: "+ Rs 180" }}
      images={["/media/honey-hero-1.jpg", "/media/honey-hero-2.jpg", "/media/honey-hero-1.jpg", "/media/honey-hero-2.jpg", "/media/honey-hero-1.jpg"]}
      ingredients={[
        { label: "Pure & Natural Honey", note: "Unpasteurised, unblended honey drawn directly from the comb." },
        { label: "Naturally Harvested", note: "Traditional harvesting that leaves the hive intact and the bees healthy." },
        { label: "Rich in Natural Goodness", note: "Naturally occurring enzymes, pollen and antioxidants — nothing added." },
        { label: "100% Natural", note: "One ingredient, its real name. No sugar, no glucose, no cheating." },
      ]}
      storyImage="/media/sweet-news-honey.jpg"
      storyBody={[
        "Honey has been cherished for generations as a natural source of sweetness and nourishment. Gathered from flower-rich landscapes, it captures the delicate aroma and natural goodness of the blossoms from which it comes.",
        "At Mithila Gharana, we reflect our commitment to purity, authenticity and timeless craftsmanship. Carefully sourced and naturally preserved, our honey brings the golden sweetness of nature and the warmth of Mithila to every table.",
      ]}
      combo={{
        title: "Sweetness Duo · Honey + Rose Saffron Gulkand",
        description: "A jar of raw honey and a jar of gulkand — the sweetest morning ritual, in one box.",
        price: "Rs 1,050",
        image: COMBO_IMAGE,
      }}
      related={[
        { name: "Rose Saffron Gulkand", price: "Rs 650", src: cardImage("ROSE-SAFFRON-GULKAND"), href: "/gulkand" },
        { name: "Rock Salted Makhana", price: "Rs 350", src: cardImage("ROCK-SALTED-MAKHANA"), href: "/makhana" },
        { name: "Chunky Chaat Makhana", price: "Rs 500", src: cardImage("CHUNKY-CHAAT-MAKHANA"), href: "/makhana" },
      ]}
    />
  );
}
