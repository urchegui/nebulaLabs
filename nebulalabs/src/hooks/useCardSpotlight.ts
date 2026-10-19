import { useRef, useCallback } from 'react';

/**
 * Returns a ref and event handlers to apply a radial spotlight
 * that follows the cursor inside a card element.
 *
 * Usage:
 *   const { ref, onMouseMove, onMouseLeave } = useCardSpotlight();
 *   <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} />
 */
export function useCardSpotlight<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--spot-x', `${x}px`);
    el.style.setProperty('--spot-y', `${y}px`);
    el.style.setProperty('--spot-opacity', '1');
  }, []);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--spot-opacity', '0');
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
