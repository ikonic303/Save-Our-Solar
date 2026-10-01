import { useEffect, useRef, useState } from "react";

// Counts up from 0 to `value` once, when the element first scrolls into view.
export default function StatCounter({ value, prefix = "", suffix = "", decimals = 0, duration = 1600 }) {
  const ref = useRef(null);
  // Start at the real value so the prerendered HTML (what crawlers read) shows the
  // actual figure; the effect resets to 0 in the browser just before animating.
  const [display, setDisplay] = useState(value);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    setDisplay(0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || hasRun.current) return;
          hasRun.current = true;
          const start = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setDisplay(value * eased);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className="stat-counter">
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
