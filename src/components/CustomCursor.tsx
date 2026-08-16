"use client";

import { useEffect } from "react";

/**
 * Premium two-piece cursor: fast dot + trailing ring.
 * - Uses transform-only updates in requestAnimationFrame for 60fps.
 * - Grows on links/buttons/interactive elements via `data-active`.
 * - Auto-disabled on touch devices via CSS (see globals.css).
 * - Respects prefers-reduced-motion (also via CSS).
 */
export default function CustomCursor() {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dot = document.createElement("div");
    const ring = document.createElement("div");
    dot.className = "cursor-dot";
    ring.className = "cursor-ring";
    dot.setAttribute("aria-hidden", "true");
    ring.setAttribute("aria-hidden", "true");
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    document.documentElement.classList.add("cursor-none");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;
    let visible = false;

    const setPos = () => {
      // ring lags via lerp for that expensive trailing feel
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%,-50%)`;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%,-50%)`;
      raf = requestAnimationFrame(setPos);
    };
    raf = requestAnimationFrame(setPos);

    const show = () => {
      if (visible) return;
      visible = true;
      dot.dataset.hidden = "0";
      ring.dataset.hidden = "0";
    };
    const hide = () => {
      visible = false;
      dot.dataset.hidden = "1";
      ring.dataset.hidden = "1";
    };
    hide();

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      show();
    };

    const isInteractive = (el: EventTarget | null): boolean => {
      if (!(el instanceof HTMLElement)) return false;
      return Boolean(
        el.closest(
          'a, button, [role="button"], input, textarea, select, [data-cursor="active"]',
        ),
      );
    };

    const over = (e: MouseEvent) => {
      if (isInteractive(e.target)) ring.dataset.active = "1";
      else ring.dataset.active = "0";
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("mouseleave", hide);
    window.addEventListener("blur", hide);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
      dot.remove();
      ring.remove();
      document.documentElement.classList.remove("cursor-none");
    };
  }, []);

  return null;
}
