import jFront1 from "@/images/althroextrafronyt.jpg";
import jBack1 from "@/images/arthroextra.jpg";
import jFront2 from "@/images/download (1).jpg";
import jBack2 from "@/images/download (2).jpg";
import jFront3 from "@/images/zaminacol.jpg";
import jBack3 from "@/images/download.jpg";
import { Plus } from "lucide-react";
import { Typewriter, useInView } from "./Typewriter";
import { Link } from "@tanstack/react-router";

const products = [
  { imgFront: jFront1, imgBack: jBack1, name: "ArthroExtra Joint Glow", tag: "Capsules · 60ct", price: 58, desc: "Type II collagen + turmeric for fluid joints and a luminous complexion. A daily ceremony in a single capsule.", notes: ["Marine collagen", "Curcumin 95%", "Vitamin C halo"] },
  { imgFront: jFront2, imgBack: jBack2, name: "Radiance Cream", tag: "Topical · 50ml", price: 72, desc: "Peptide-rich cream that soothes joint stiffness while plumping skin with marine botanicals.", notes: ["Peptide complex", "Squalane", "Cooling menthol"] },
  { imgFront: jFront3, imgBack: jBack3, name: "Zaminacol Flex Serum", tag: "Liquid · 30ml", price: 64, desc: "Bioavailable hyaluronic acid for lubricated joints and dewy skin from the inside out.", notes: ["Hyaluronic acid", "MSM", "Biotin"] },
];

function ProductCard({ p, i }: { p: typeof products[number]; i: number }) {
  const { ref, inView } = useInView<HTMLElement>(0.4);
  return (
    <article ref={ref} className="group relative">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-soft aspect-[4/5] shadow-soft transition-all duration-700 group-hover:shadow-product">
        {/* 3D stage */}
        <div className="absolute inset-0 flex items-center justify-center p-8 [perspective:1800px]">
          <div
            className="relative w-full h-full preserve-3d"
            style={{
              animation: "spin-product 14s linear infinite",
            }}
          >
            {/* Front */}
            <div className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden]">
              <img
                src={p.imgFront}
                alt={`Sumaboss ${p.name} Front`}
                loading="lazy"
                className="max-w-full max-h-full object-contain mix-blend-multiply"
                style={{ filter: "drop-shadow(0 8px 16px rgba(80,60,30,0.25)) contrast(1.15) saturate(1.1) brightness(1.05)" }}
              />
            </div>
            {/* Back */}
            <div
              className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden]"
              style={{ transform: "rotateY(180deg)" }}
            >
              <img
                src={p.imgBack}
                alt={`Sumaboss ${p.name} Back`}
                loading="lazy"
                className="max-w-full max-h-full object-contain mix-blend-multiply"
                style={{ filter: "drop-shadow(0 8px 16px rgba(80,60,30,0.25)) contrast(1.15) saturate(1.1) brightness(1.05)" }}
              />
            </div>
          </div>
        </div>

        {/* Ground shadow */}
        <div
          aria-hidden
          className="absolute left-1/2 bottom-8 -translate-x-1/2 w-[55%] h-4 rounded-[50%] bg-foreground/25 blur-md"
          style={{
            animation: "shadow-pulse 14s linear infinite",
          }}
        />

        <span className="absolute top-5 left-5 text-[10px] uppercase tracking-widest text-muted-foreground bg-background/80 backdrop-blur px-2 py-1 rounded-full">No. 0{i + 1}</span>
        <button className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition z-10" aria-label={`Add ${p.name}`}>
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
          <Link to="/products" className="hidden md:inline text-sm text-muted-foreground hover:text-foreground transition">View all →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => <ProductCard key={p.name} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
