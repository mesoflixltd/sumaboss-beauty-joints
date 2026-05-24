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
      <div className="relative overflow-hidden rounded-3xl bg-[#FCFAF6] aspect-[4/5] shadow-soft transition-all duration-700 group-hover:shadow-product flex flex-col items-center justify-center">
        {/* Soft radial glow behind product */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,230,210,0.4)_0%,transparent_70%)]" />

        {/* Static, tilted product image */}
        <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
          <img
            src={p.imgFront}
            alt={`Sumaboss ${p.name}`}
            loading="lazy"
            className="max-w-[85%] max-h-[85%] object-contain mix-blend-multiply -rotate-6 transition-transform duration-700 group-hover:-rotate-3 group-hover:scale-105"
            style={{ 
              filter: "contrast(1.05) saturate(1.1) brightness(0.95)",
            }}
          />
        </div>

        {/* Platform Shadow (Ground shadow) */}
        <div
          aria-hidden
          className="absolute left-1/2 bottom-[15%] -translate-x-1/2 w-[60%] h-[12%] rounded-[50%] bg-[rgba(120,100,80,0.15)] blur-xl transition-all duration-700 group-hover:w-[50%] group-hover:opacity-60"
        />

        {/* Close, sharp shadow directly under the tilted product */}
        <div
          aria-hidden
          className="absolute left-[45%] bottom-[25%] -translate-x-1/2 w-[50%] h-[8%] rounded-[50%] bg-[rgba(100,80,60,0.12)] blur-md -rotate-6 transition-all duration-700 group-hover:translate-x-2"
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
