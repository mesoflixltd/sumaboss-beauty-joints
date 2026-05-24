import { useEffect, useRef, useState } from "react";

export function Typewriter({ text, start, speed = 25 }: { text: string; start: boolean; speed?: number }) {
  const [out, setOut] = useState("");
  useEffect(() => {
    if (!start) { setOut(""); return; }
    let i = 0;
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [start, text, speed]);
  return (
    <span>
      {out}
      <span className="inline-block w-[2px] h-[1em] bg-gold align-middle ml-0.5 animate-pulse" />
    </span>
  );
}

export function useInView<T extends HTMLElement>(threshold = 0.4) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}
