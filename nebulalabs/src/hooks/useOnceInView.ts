import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref and `played`, which turns true once the element enters the viewport.
 * Animations are declared in CSS and stay paused until the element gets `is-played`,
 * so the server-rendered HTML (no JS) always shows the final state.
 */
export function useOnceInView<T extends Element>(threshold = 0.35) {
  const ref = useRef<T>(null);
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || played) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setPlayed(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [played, threshold]);

  return [ref, played] as const;
}
