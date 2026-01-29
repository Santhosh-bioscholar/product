"use client";

import { useMemo } from "react";

interface BubbleProps {
  size: number;
  left: number;
  delay: number;
  duration: number;
}

const Bubble = ({ size, left, delay, duration }: BubbleProps) => {
  return (
    <div
      className="absolute rounded-full bubble animate-bubble-rise bg-black"
      style={{
        width: size,
        height: size,
        left: `${left}%`,
        bottom: "-10%",
        animationDelay: `${delay}s`,
        ["--duration" as any]: `${duration}s`,
      }}
    >
      <div className="absolute inset-0 rounded-full animate-bubble-wobble" />
    </div>
  );
};

interface BubblesContainerProps {
  count?: number;
}

const BubblesContainer = ({ count = 20 }: BubblesContainerProps) => {
  const bubbles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 20 ,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 8 + 6,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <Bubble
          key={bubble.id}
          size={bubble.size}
          left={bubble.left}
          delay={bubble.delay}
          duration={bubble.duration}
        />
      ))}
    </div>
  );
};

export default BubblesContainer;
