import { Fragment, type ReactNode } from "react";

type Props = {
  /** Lines of text (or React nodes) rendered one per masked line. */
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  /** If true, wraps as a `.split-parent` so all lines animate on the parent's [data-in]. */
  parent?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "div";
};

/**
 * Splits a headline into masked lines that rise from below the mask when
 * the parent element gets `data-in="1"` (via RevealScript). Purely CSS —
 * no JS per line — so it's cheap and 60fps.
 *
 * Wrap the outer container with `className="reveal split-parent"` so the
 * observer flips `data-in` on the parent and CSS animates all children.
 */
export default function SplitReveal({
  lines,
  className,
  lineClassName,
  parent = false,
  as: Tag = "div",
}: Props) {
  const cls = [className, parent ? "split-parent" : ""].filter(Boolean).join(" ");
  return (
    <Tag className={cls}>
      {lines.map((line, i) => (
        <span key={i} className={`split-line ${lineClassName ?? ""}`}>
          <span>{line}</span>
        </span>
      ))}
    </Tag>
  );
}

/** Convenience: render a single-line phrase with a masked rise. */
export function SplitLine({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`split-line ${className ?? ""}`}>
      <span>{children}</span>
    </span>
  );
}

// Silence unused Fragment import in some builds
export { Fragment as _Fragment };
