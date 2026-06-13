import { useEffect, useRef } from 'react';

// A small trailing pink sparkle that follows the cursor.
export default function CursorSparkle() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate3d(${ringX - 14}px, ${ringY - 14}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    let raf = requestAnimationFrame(tick);
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-sparkle pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full"
        style={{
          background: '#f4a7c3',
          boxShadow: '0 0 12px 2px rgba(244,167,195,0.8)',
        }}
      />
      <div
        ref={ringRef}
        className="cursor-sparkle pointer-events-none fixed top-0 left-0 z-[9998] w-7 h-7 rounded-full border"
        style={{ borderColor: 'rgba(168, 85, 247, 0.5)' }}
      />
    </>
  );
}
