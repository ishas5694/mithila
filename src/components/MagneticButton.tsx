"use client";

import { forwardRef, useEffect, useRef } from "react";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  strength?: number; // 0-1, how strongly the button attracts the cursor
};

/**
 * Anchor that gently pulls toward the cursor on hover, then eases back.
 * Only active on hover-capable devices; respects prefers-reduced-motion.
 */
const MagneticButton = forwardRef<HTMLAnchorElement, Props>(function MagneticButton(
  { strength = 0.35, className = "", children, ...rest },
  ref,
) {
  const inner = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = inner.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    };
    const leave = () => {
      el.style.transform = "translate3d(0,0,0)";
    };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, [strength]);

  return (
    <a
      ref={(n) => {
        inner.current = n;
        if (typeof ref === "function") ref(n);
        else if (ref) (ref as React.MutableRefObject<HTMLAnchorElement | null>).current = n;
      }}
      className={`magnetic inline-block ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
});

export default MagneticButton;
