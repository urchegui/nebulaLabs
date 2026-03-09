import { useMouseGlow } from '../hooks/useMouseGlow';

/**
 * Full-page glow that follows the cursor.
 * Rendered once in App.tsx, sits above the particle canvas but below content.
 */
export default function MouseGlow() {
  const ref = useMouseGlow();

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed z-[1] w-[700px] h-[700px] rounded-full"
      style={{
        background:
          'radial-gradient(circle, rgba(0,163,255,0.07) 0%, rgba(0,163,255,0.03) 35%, transparent 65%)',
        willChange: 'transform',
        top: 0,
        left: 0,
      }}
    />
  );
}
