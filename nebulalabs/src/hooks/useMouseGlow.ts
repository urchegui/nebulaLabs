import { useEffect, useRef } from 'react';

/**
 * Attaches a full-page radial glow that follows the mouse cursor.
 * Returns a ref to attach to the glow div.
 */
export function useMouseGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    // Lerp loop — smooth lag-follow feel
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      currentX = lerp(currentX, targetX, 0.07);
      currentY = lerp(currentY, targetY, 0.07);

      if (ref.current) {
        ref.current.style.transform = `translate(${currentX - 350}px, ${currentY - 350}px)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return ref;
}
