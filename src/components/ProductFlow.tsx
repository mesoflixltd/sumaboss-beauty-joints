import { useEffect, useRef } from "react";
import p1 from "@/assets/product-1.png";
import p2 from "@/assets/product-2.png";
import p3 from "@/assets/product-3.png";

const items = [p1, p2, p3, p1, p2, p3];

export function ProductFlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const y = window.scrollY;
      ref.current.style.setProperty("--scroll-y", `${y}px`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden perspective-1000">
      {items.map((src, i) => {
        const col = i % 3;
        const left = `${15 + col * 30}%`;
        const delay = `${i * 1.2}s`;
        const top = `${(i * 22) % 180}%`;
        const size = 120 + (i % 3) * 40;
        return (
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden
            style={{
              left,
              top,
              width: size,
              height: size,
              animationDelay: delay,
              transform: `translateY(calc(var(--scroll-y, 0px) * ${0.15 + (i % 3) * 0.08} * -1))`,
            }}
            className="absolute opacity-40 blur-[1px] animate-float-slow transition-transform duration-100"
          />
        );
      })}
    </div>
  );
}
