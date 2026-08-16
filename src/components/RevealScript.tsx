"use client";

import { useEffect } from "react";

/**
 * Tiny IntersectionObserver that toggles data-in on any element with the
 * `.reveal` or `.reveal-stagger` class, letting CSS animate them in on scroll.
 * Runs once per page mount and re-scans on route changes.
 */
export default function RevealScript() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll(".reveal, .reveal-stagger"),
    ) as HTMLElement[];
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).dataset.in = "1";
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
