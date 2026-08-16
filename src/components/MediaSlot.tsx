import { asset } from "@/lib/asset";
import { clsx } from "@/lib/clsx";

type Variant =
  | "transparent"
  | "cream"
  | "water"
  | "gulkand"
  | "sunflower"
  | "honey"
  | "roots"
  | "bronze";

type Props = {
  /** Short description of the intended asset (shown as placeholder text). */
  label: string;
  /**
   * Public path of the image or video to drop in.
   * Example: "/media/hero-water.jpg" — the file lives in `public/media/`.
   * When the file exists it covers the coloured placeholder; when missing
   * the placeholder stays visible. Leave `undefined` to keep the placeholder.
   */
  src?: string;
  /**
   * Optional video path — when set, renders a muted autoplay loop instead of an <img>.
   */
  videoSrc?: string;
  aspect?: string;
  variant?: Variant;
  kind?: "image" | "video";
  /** How the media fits its container. Default: cover. */
  fit?: "cover" | "contain";
  className?: string;
  overlayClassName?: string;
  labelClassName?: string;
  children?: React.ReactNode;
};

const variantBg: Record<Variant, string> = {
  transparent: "bg-transparent text-ink-70",
  cream: "img-cream text-ink-70",
  water: "img-water text-cream/80",
  gulkand: "img-gulkand text-cream/85",
  sunflower: "img-sunflower text-cream/90",
  honey: "img-honey text-cream/85",
  roots: "img-roots text-cream/85",
  bronze: "bg-bronze text-cream/85",
};

/**
 * Placeholder that becomes a real image (or video) as soon as the file exists
 * at `src` (or `videoSrc`). Until then the coloured swatch + label stays visible.
 */
export default function MediaSlot({
  label,
  src,
  videoSrc,
  aspect,
  variant = "cream",
  kind = "image",
  fit = "cover",
  className,
  overlayClassName,
  labelClassName,
  children,
}: Props) {
  const hasMedia = Boolean(src || videoSrc);
  const objectFit = fit === "cover" ? "object-cover" : "object-contain";

  return (
    <div
      className={clsx(
        "relative w-full h-full overflow-hidden",
        aspect,
        variantBg[variant],
        className,
      )}
      data-media-slot={label}
      data-media-src={src || videoSrc || undefined}
    >
      {/* Placeholder layer — visible only when no media is provided */}
      {!hasMedia && (
        <>
          <div className="absolute top-2 left-2 text-[9px] tracking-[0.2em] uppercase opacity-70">
            {kind === "video" ? "Video" : "Image"}
          </div>
          <div
            className={clsx(
              "absolute inset-0 flex items-center justify-center px-3 text-center",
              overlayClassName,
            )}
          >
            <span
              className={clsx(
                "font-serif text-[13px] md:text-[15px] tracking-[0.06em] leading-tight max-w-[85%]",
                labelClassName,
              )}
            >
              {label}
            </span>
          </div>
        </>
      )}

      {/* Real media layer */}
      {videoSrc ? (
        <video
          className={clsx("absolute inset-0 w-full h-full", objectFit)}
          src={asset(videoSrc)}
          autoPlay
          muted
          loop
          playsInline
          aria-label={label}
        />
      ) : src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={asset(src)}
          alt={label}
          className={clsx("absolute inset-0 w-full h-full", objectFit)}
          loading="lazy"
        />
      ) : null}

      {children}
    </div>
  );
}
