/**
 * Central product catalog. Every product name maps 1:1 to its filenames in /public/media/:
 *   `${slug.toUpperCase()}.png`        — card image on shop page + review thumb
 *   `${slug.toUpperCase()}-1.png`      — product detail image 1
 *   `${slug.toUpperCase()}-2.png`      — product detail image 2
 *   `${slug.toUpperCase()}-3.png`      — product detail image 3
 *
 * Drop new files in `public/media/` under those exact names and they'll appear
 * across shop, category, product-detail, related, and review sections automatically.
 */
export type ProductSlug =
  | "TANGY-TAMATO-MAKHANA"
  | "ROCK-SALTED-MAKHANA"
  | "MINTY-PUDHINA-MAKHANA"
  | "CHUNKY-CHAAT-MAKHANA"
  | "ROSE-SAFFRON-GULKAND"
  | "ROYAL-SAFFRON-GULKAND"
  | "ARHAR-DAL"
  | "CHANA-DAL"
  | "KEOTI-DAL"
  | "CLASSIC-SATTU"
  | "LEMON-SATTU"
  | "KATRANI-RICE"
  | "MARCHA-RICE"
  | "PREMIUM-MUSTARD-OIL"
  | "MITHILA-GOLD-HONEY";

export type Product = {
  slug: ProductSlug;
  category: "Makhana" | "Gulkand" | "Daal" | "Sattu" | "Rice" | "Oil" | "Honey";
  name: string;
  desc: string;
  rating: number;
  price: string;
  detailPath: string; // path to product-detail page
  badge?: string;
  hasDetailImages?: boolean; // true when *-1/-2/-3 exist
};

export const products: Product[] = [
  // Makhana
  { slug: "TANGY-TAMATO-MAKHANA", category: "Makhana", name: "Tangy Tamato Makhana", desc: "Crunchy makhana with a bold, tangy tomato twist.", rating: 4.7, price: "Rs 420.00", detailPath: "/makhana", badge: "New", hasDetailImages: true },
  { slug: "ROCK-SALTED-MAKHANA",  category: "Makhana", name: "Rock Salted Makhana",  desc: "Roasted makhana with a delicate touch of rock salt.", rating: 4.5, price: "Rs 350.00", detailPath: "/makhana", hasDetailImages: true },
  { slug: "MINTY-PUDHINA-MAKHANA", category: "Makhana", name: "Minty Pudhina Makhana", desc: "Cool pudhina meets crisp roasted fox-nut.", rating: 4.8, price: "Rs 500.00", detailPath: "/makhana", hasDetailImages: true },
  { slug: "CHUNKY-CHAAT-MAKHANA", category: "Makhana", name: "Chunky Chaat Makhana", desc: "Crisp makhana with a zesty, savoury chaat flavour.", rating: 4.6, price: "Rs 500.00", detailPath: "/makhana", hasDetailImages: true },
  // Gulkand
  { slug: "ROSE-SAFFRON-GULKAND", category: "Gulkand", name: "Rose Saffron Gulkand", desc: "Handcrafted rose petal with a floral sweetness.", rating: 4.2, price: "Rs 650.00", detailPath: "/gulkand" },
  { slug: "ROYAL-SAFFRON-GULKAND",category: "Gulkand", name: "Royal Saffron Gulkand",desc: "Rose petals enriched with saffron for a luxurious lift.", rating: 4.7, price: "Rs 550.00", detailPath: "/gulkand" },
  // Daal
  { slug: "CHANA-DAL", category: "Daal", name: "Chana Dal", desc: "Rich in protein and perfect for everyday meals.", rating: 4.0, price: "Rs 600.00", detailPath: "/daal" },
  { slug: "ARHAR-DAL", category: "Daal", name: "Arhar Dal", desc: "Light, nourishing for a naturally comforting taste.", rating: 4.4, price: "Rs 700.00", detailPath: "/daal" },
  { slug: "KEOTI-DAL", category: "Daal", name: "Keoti Dal", desc: "Unique taste. Light, nourishing and full of goodness.", rating: 5.0, price: "Rs 800.00", detailPath: "/daal", badge: "Mithila Special" },
  // Sattu
  { slug: "CLASSIC-SATTU", category: "Sattu", name: "Classic Sattu", desc: "Roasted gram flour with a rich and natural goodness.", rating: 4.7, price: "Rs 400.00", detailPath: "/shop", hasDetailImages: true },
  { slug: "LEMON-SATTU",   category: "Sattu", name: "Lemon Sattu",   desc: "Roasted gram flour with a refreshing lemon note.", rating: 5.0, price: "Rs 450.00", detailPath: "/shop", badge: "Flavoured", hasDetailImages: true },
  // Rice — no new named files uploaded yet; reuse legacy
  { slug: "KATRANI-RICE", category: "Rice", name: "Katrani Rice", desc: "Naturally delicate aroma and soft texture.", rating: 4.7, price: "Rs 700.00", detailPath: "/rice", badge: "Mithila Special" },
  { slug: "MARCHA-RICE",  category: "Rice", name: "Marcha Rice",  desc: "Aromatic heritage grain, known for distinctive flavour.", rating: 4.8, price: "Rs 750.00", detailPath: "/rice", badge: "Mithila Special" },
  // Oil — legacy hero
  { slug: "PREMIUM-MUSTARD-OIL", category: "Oil", name: "Premium Mustard Oil", desc: "Pure mustard oil with a rich, earthy character.", rating: 4.6, price: "Rs 650.00", detailPath: "/oil" },
  // Honey — legacy hero
  { slug: "MITHILA-GOLD-HONEY", category: "Honey", name: "Mithila Gold Honey", desc: "Pure honey from the flower-rich landscapes of Mithila.", rating: 4.7, price: "Rs 500.00", detailPath: "/honey" },
];

// Convention: {slug}.png is the shop-card image; -1/-2/-3.png are product-detail images.
const NAMED_CARDS: ProductSlug[] = [
  "TANGY-TAMATO-MAKHANA",
  "ROCK-SALTED-MAKHANA",
  "MINTY-PUDHINA-MAKHANA",
  "CHUNKY-CHAAT-MAKHANA",
  "ROSE-SAFFRON-GULKAND",
  "ROYAL-SAFFRON-GULKAND",
  "ARHAR-DAL",
  "CHANA-DAL",
  "KEOTI-DAL",
  "CLASSIC-SATTU",
  "LEMON-SATTU",
];

// Legacy fallback map for products where the client hasn't shipped a new named card yet.
const LEGACY_CARDS: Record<string, string> = {
  "KATRANI-RICE": "/media/rice-hero-1.jpg",
  "MARCHA-RICE": "/media/rice-hero-3.jpg",
  "PREMIUM-MUSTARD-OIL": "/media/oil-hero-1.jpg",
  "MITHILA-GOLD-HONEY": "/media/honey-hero-1.jpg",
};

export function cardImage(slug: ProductSlug): string {
  if (NAMED_CARDS.includes(slug)) return `/media/${slug}.png`;
  return LEGACY_CARDS[slug] ?? "/media/logo-fan.png";
}

export function detailImages(slug: ProductSlug): string[] {
  if (NAMED_CARDS.includes(slug) && productsWithDetail.includes(slug)) {
    return [1, 2, 3].map((i) => `/media/${slug}-${i}.png`);
  }
  // Fallback: just repeat the card
  const card = cardImage(slug);
  return [card, card, card];
}

const productsWithDetail: ProductSlug[] = [
  "TANGY-TAMATO-MAKHANA",
  "ROCK-SALTED-MAKHANA",
  "MINTY-PUDHINA-MAKHANA",
  "CHUNKY-CHAAT-MAKHANA",
  "CLASSIC-SATTU",
  "LEMON-SATTU",
];

export const COMBO_IMAGE = "/media/MAKHANA-COMMON.png";

export function findProduct(slug: ProductSlug): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function relatedIn(category: Product["category"], excludeSlug?: ProductSlug, limit = 3): Product[] {
  return products.filter((p) => p.category === category && p.slug !== excludeSlug).slice(0, limit);
}
