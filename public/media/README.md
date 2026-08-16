# Mithila — Media manifest

All assets live in this folder (`public/media/`). The site reads them by these **exact filenames**. You already dropped in the raw uploads; below is what each canonical name maps to and where in the code it is used.

## 1 · Brand assets

| Filename | Where it appears | Code |
|---|---|---|
| `logo-wordmark.png` | Header (top) + big Footer sign-off | `Header.tsx`, `Footer.tsx` |
| `logo-fan.png` | Fan icon in Hero, Best Sellers, Gharana strip | `Hero.tsx`, `BestSellers.tsx`, `GharanaStrip.tsx` |
| `footer-lotus.png` | Wide lotus/reeds/water scene under the footer wordmark | `Footer.tsx` |

## 2 · Videos

| Filename | Where it plays | Code |
|---|---|---|
| `hero-water.mp4` | Full-width water banner at the top of the homepage | `Hero.tsx` |
| `mustard-oil-sunflowers.mp4` | Left panel of the "Wood Pressed Mustard Oil" feature | `MustardOilFeature.tsx` |

## 3 · Hero — 5 featured tiles

| Filename | Slot |
|---|---|
| `featured-1-makhana.jpg` | "All natural" — Rock Salted Makhana tin |
| `featured-2-sattu.jpg` | "Ancient Super food" — Sattu tin |
| `featured-3-saffron-gulkand.jpg` | "Modern wellness" — Saffron Gulkand tin |
| `featured-4-marcha-rice.jpg` | "Forgotten grain" — Marcha Rice jute bag |
| `featured-5-kulhad-coffee.jpg` | "Crafted Elegance" — Keoti Daal cylinder |

## 4 · Best Sellers — 4-card row

| Filename | Slot |
|---|---|
| `best-1-rock-salted-makhana.jpg` | Rock Salted Makhana |
| `best-2-saffron-gulkand.jpg` | Saffron Gulkand |
| `best-3-marcha-rice.jpg` | Marcha Rice (open bag) |
| `best-4-minty-pudhina-makhana.jpg` | Minty Pudhina Makhana (open tin) |

## 5 · Mithila's Floral Legacy

| Filename | Slot |
|---|---|
| `floral-legacy.jpg` | Two gulkand tins on wood with rose petals |

## 6 · Our Roots Run Deep in Mithila — 3 tiles

| Filename | Slot |
|---|---|
| `roots-1-weaving.jpg` | Hand with jewelry / heritage moment |
| `roots-2-ghee-lamps.jpg` | Yellow flowers with dreamy bokeh |
| `roots-3-grinding-spices.jpg` | Hands grinding turmeric on stone |

## 7 · Wood Pressed Mustard Oil

| Filename | Slot |
|---|---|
| `mustard-oil-sunflowers.mp4` | Left panel — sunflower field video |
| `mustard-oil-bottle.jpg` | Right panel — mustard oil bottle |

## 8 · Sweet News (honey feature)

| Filename | Slot |
|---|---|
| `sweet-news-honey.jpg` | Wide dark honey/honeycomb/wood backdrop |
| `sweet-news-jar.jpg` | Small honey jar inside the round "Sweet News" card |

## 9 · Customer Reviews — thumbnails

| Filename | Slot |
|---|---|
| `review-1-thumb.jpg` | Alessandra M.'s review — top thumbnail |
| `review-1-product.jpg` | Alessandra M.'s review — product photo below text |
| `review-2-thumb.jpg` | Alexia K.'s review — top thumbnail |
| `review-2-trio.jpg` | Alexia K.'s review — trio photo below text |

## 10 · Social icons (Steep With Us)

| Filename | Slot |
|---|---|
| `social-fb.svg` | Facebook |
| `social-ig.svg` | Instagram |
| `social-in.svg` | LinkedIn |

---

### Swapping any asset later

Drop a new file with the **same name** into this folder — the site picks it up on next reload. To use a video where an image currently sits, save it as `.mp4` at the same base name and change `src="…jpg"` → `videoSrc="…mp4"` in the noted component.

The raw uploads (WhatsApp names, "no bg" variants, etc.) are still present in this folder as originals. Safe to delete once you're happy with the mappings; the canonical names above are what the code reads.
