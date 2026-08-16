import ProductDetail from "@/components/ProductDetail";
import { cardImage, COMBO_IMAGE, findProduct, relatedIn } from "@/lib/products";

export const metadata = { title: "Arhar Dal · Mithila Gharana" };

export default function DaalPage() {
  const me = findProduct("ARHAR-DAL")!;
  const related = relatedIn("Daal", me.slug);
  const card = cardImage(me.slug);

  return (
    <ProductDetail
      breadcrumbs={["Shop", "Daal", me.name]}
      name={me.name}
      rating={me.rating}
      reviewsCount={19}
      description="Whole toor / arhar cleaned by hand and gently sun-dried. Light, nourishing and comforting — a Sunday khichdi, a weekday tadka, the food that raised us."
      price={me.price}
      sizeOptions={["500 g", "1 kg", "2 kg"]}
      addOn={{ name: "Add a cotton dry-goods pouch", price: "+ Rs 90" }}
      images={[card, "/media/daal-hero-2.jpg", "/media/daal-hero-3.jpg", "/media/daal-hero-4.jpg", "/media/daal-hero-5.jpg"]}
      ingredients={[
        { label: "Premium Whole Grain", note: "Hand-sorted whole arhar, cleaned twice for a lentil that looks like a lentil." },
        { label: "Naturally Sun Dried", note: "Sun-dried on cotton sheets to preserve texture and cooking behaviour." },
        { label: "Hand-Cleaned Grains", note: "Every batch is hand-cleaned; no stones, no husks, no surprises." },
        { label: "100% Natural", note: "No polish, no colour, no preservatives — one ingredient, its real name." },
      ]}
      storyImage="/media/rice-story.jpg"
      storyBody={[
        "For centuries, Kulthi Dal has been an essential part of Mithila's culinary tradition. Naturally sun-dried, carefully hand-cleaned and prepared with respect for age-old practices, it reflects the simplicity and nourishment that define wholesome food.",
        "At Mithila Gharana, we preserve this legacy by offering 100 % pure home-grown, thoughtfully sourced and minimally processed to retain its authentic flavour and natural goodness. Every grain tells the story of fertile fields, careful hands, and a tradition that continues to nourish generations.",
      ]}
      combo={{
        title: "The 3-Dal Trio · Arhar + Chana + Keoti",
        description: "One cylinder of each — the everyday dal, the protein-rich chana, the heirloom keoti. Enough dal for a month.",
        price: "Rs 1,999",
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
