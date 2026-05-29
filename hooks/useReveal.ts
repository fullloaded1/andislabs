"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal hook — observes an element and flips `visible` to `true`
 * the first time the element enters the viewport.
 *
 * Usage:
 * ```tsx
 * const { ref, visible } = useReveal(0.12);
 * <div ref={ref} className={visible ? "reveal-visible" : "reveal-hidden"}>
 * ```
 */
export function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}
