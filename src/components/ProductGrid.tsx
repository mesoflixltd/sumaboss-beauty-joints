import p1 from "@/assets/product-1.png";
import p2 from "@/assets/product-2.png";
import p3 from "@/assets/product-3.png";
import { Plus } from "lucide-react";
import { Typewriter, useInView } from "./Typewriter";

const products = [
  { img: p1, name: "Joint Glow", tag: "Capsules · 60ct", price: 58, desc: "Type II collagen + turmeric for fluid joints and a luminous complexion. A daily ceremony in a single capsule." },
  { img: p2, name: "Radiance Cream", tag: "Topical · 50ml", price: 72, desc: "Peptide-rich cream that soothes joint stiffness while plumping skin with marine botanicals." },
  { img: p3, name: "Flex Serum", tag: "Liquid · 30ml", price: 64, desc: "Bioavailable hyaluronic acid for lubricated joints and dewy skin from the inside out." },
];

function ProductCard({ p, i }: { p: typeof products[number]; i: number }) {
  const { ref, inView } = useInView<HTMLElement>(0.45);
  return (
    <article ref={ref} className="group relative perspective-1000">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-soft aspect-[4/5] shadow-soft transition-all duration-700 group-hover:shadow-product">
        <div className="absolute inset-0 flex items-center justify-center p-8 preserve-3d">
          <img
            src={p.img}
            alt={`Sumaboss ${p.name}`}
            loading="lazy"
            width={400}
            height={400}
            className="w-full h-full object-contain transition-all duration-[1400ms] ease-out"
            style={{
              transform: inView
                ? "rotateY(360deg) scale(1)"
                : "rotateY(0deg) scale(0.85)",
              filter: "drop-shadow(0 20px 40px rgba(180,140,80,0.25))",
            }}
          />
        </div>
        <span className="absolute top-5 left-5 text-[10px] uppercase tracking-widest text-muted-foreground bg-background/80 backdrop-blur px-2 py-1 rounded-full">No. 0{i + 1}</span>
        <button className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition" aria-label={`Add ${p.name}`}>
          <Plus className="w-5 h-5" />
        </button>
      </div>
      <div className="pt-6 flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-2xl font-display">{p.name}</h3>
          <p className="text-xs text-muted-foreground mt-1">{p.tag}</p>
          <p className="text-sm text-muted-foreground mt-3 min-h-[4.5rem] leading-relaxed">
            <Typewriter text={p.desc} start={inView} />
          </p>
        </div>
        <span className="text-lg font-display">${p.price}</span>
      </div>
    </article>
  );
}

export function ProductGrid() {
  return (
    <section id="shop" className="relative py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">The Collection</p>
            <h2 className="text-5xl md:text-6xl font-light max-w-xl">Three products. One <span className="italic">ritual</span>.</h2>
          </div>
          <a href="#" className="hidden md:inline text-sm text-muted-foreground hover:text-foreground transition">View all →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => <ProductCard key={p.name} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
