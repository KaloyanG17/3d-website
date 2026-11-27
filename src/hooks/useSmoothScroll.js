import { useEffect } from 'react';
import Lenis from 'lenis';

// Weighted, smooth scrolling for the whole page. In-page links (#projects…)
// glide too. Skipped for people who prefer reduced motion.
export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      anchors: true,
      autoRaf: true,
    });
    return () => lenis.destroy();
  }, []);
}
