// components/SmoothCursor.tsx
"use client";

import { useEffect, useRef } from "react";

export default function SmoothCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-[-5] left-[-7px] w-3 h-3 rounded-full bg-green-500  pointer-events-none z-50"
    />
  );
}
