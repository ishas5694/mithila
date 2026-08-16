"use client";

import { useEffect } from "react";

/**
 * IntersectionObserver that toggles `data-in="1"` on elements marked with
 * `.reveal`, `.reveal-stagger`, `.reveal-mask`, `.split-parent`, or `.split-line`.
 *
 * Also runs a lightweight parallax loop for `[data-parallax]` elements —
 * they translate on Y proportional to the viewport scroll. Cheap, transform-only.
 */
export default function RevealScript() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll(
        ".reveal, .reveal-stagger, .reveal-mask, .split-parent, .split-line",
      ),
    ) as HTMLElement[];

    if (els.length) {
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              (e.target as HTMLElement).dataset.in = "1";
              io.unobserve(e.target);
            }
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
      );
      els.forEach((el) => io.observe(el));

      // Cleanup only for the observer
      var disconnectIO = () => io.disconnect();
    } else {
      var disconnectIO = () => {};
    }

    // Parallax loop for [data-parallax="0.15"] (strength 0-1).
    // Respects prefers-reduced-motion.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const parallaxEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );
    let raf = 0;
    let last = -1;
    const tick = () => {
      const y = window.scrollY;
      if (y !== last) {
        for (const el of parallaxEls) {
          const strength = parseFloat(el.dataset.parallax || "0.15");
          // Anchor: element's offsetTop relative to page; keeps effect local per element
          const rect = el.getBoundingClientRect();
          const middle = rect.top + rect.height / 2;
          const delta = (middle - window.innerHeight / 2) * strength * -1;
          el.style.transform = `translate3d(0, ${delta.toFixed(1)}px, 0)`;
        }
        last = y;
      }
      raf = requestAnimationFrame(tick);
    };
    if (!reduce && parallaxEls.length) raf = requestAnimationFrame(tick);

    return () => {
      disconnectIO();
      if (raf) cancelAnimationFrame(raf);
      parallaxEls.forEach((el) => (el.style.transform = ""));
    };
  }, []);
  return null;
}
