"use client";

import { useEffect, useRef, useState } from "react";

interface BarcodeScrollbarProps {
  scrollRef: React.RefObject<HTMLElement | null>;
}

// Pre-computed bar heights at half the original size (barcode aesthetic)
const BAR_HEIGHTS = [
  14, 21, 9, 27, 17, 11, 24, 7, 30, 19,
  12, 26, 8, 22, 15, 29, 10, 23, 6, 25,
  18, 12, 28, 9, 20,
];

const TOTAL_BARS = BAR_HEIGHTS.length; // 25 bars (half of original 50)

export default function BarcodeScrollbar({ scrollRef }: BarcodeScrollbarProps) {
  const [progress, setProgress] = useState(0); // 0..1
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const update = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const p = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
      setProgress(Math.min(1, Math.max(0, p)));
    };

    const observer = new ResizeObserver(() => {
      const el = scrollRef.current;
      if (el) setVisible(el.scrollWidth > el.clientWidth);
    });
    observer.observe(el);
    setVisible(el.scrollWidth > el.clientWidth);

    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    update();

    return () => {
      el.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [scrollRef]);

  if (!visible) return null;

  const windowSize = Math.round(TOTAL_BARS * 0.2);
  const activeStart = Math.round(progress * (TOTAL_BARS - windowSize));

  const handleBarClick = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const targetProgress = i / (TOTAL_BARS - 1);
    el.scrollTo({ left: targetProgress * maxScroll, behavior: "smooth" });
  };

  return (
    // Inline element — positioned by the parent layout (top-right of hero)
    <div
      className="flex items-end gap-[3px] cursor-pointer"
      title="Click to scroll"
    >
      {BAR_HEIGHTS.map((h, i) => {
        const isActive = i >= activeStart && i < activeStart + windowSize;
        return (
          <div
            key={i}
            onClick={() => handleBarClick(i)}
            className="transition-all duration-150"
            style={{
              width: "2px",
              height: `${h}px`,
              backgroundColor: isActive ? "#0a0a0a" : "#d1d1d1",
              borderRadius: "1px",
            }}
          />
        );
      })}
    </div>
  );
}
