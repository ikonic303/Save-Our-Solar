import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// Elements matching these selectors fade/slide into view as they enter the viewport.
// Reusing existing component classes means every page gets the effect automatically —
// no need to hand-wrap each section in a dedicated component.
const REVEAL_SELECTORS = [
  ".hero-inner",
  ".hero-image",
  ".section-head",
  ".card",
  ".stat-tile",
  ".cta-band-inner",
  ".impact-stat",
  ".gallery-item",
];

// Parents whose children should reveal with a staggered delay instead of all at once.
const STAGGER_PARENT_SELECTOR = ".grid, .impact-stats-grid, .gallery-grid";

// The first page load arrives prerendered and is already painted before JS runs, so
// hiding on-screen elements to fade them back in would flicker. Only below-the-fold
// elements reveal on that first load; later route changes animate as before.
let isFirstLoad = true;

export default function useScrollReveal() {
  const { pathname } = useLocation();

  // useLayoutEffect (not useEffect) so the "reveal" class lands before the browser
  // paints — otherwise content would flash fully visible for a frame before hiding.
  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const els = Array.from(document.querySelectorAll(REVEAL_SELECTORS.join(",")));
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    const skipOnScreen = isFirstLoad;
    isFirstLoad = false;

    els.forEach((el) => {
      if (skipOnScreen && el.getBoundingClientRect().top < window.innerHeight) return;
      el.classList.add("reveal");
      const parent = el.parentElement;
      if (parent && parent.matches(STAGGER_PARENT_SELECTOR)) {
        const idx = Array.prototype.indexOf.call(parent.children, el);
        el.style.animationDelay = `${Math.min(idx, 5) * 70}ms`;
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);
}
