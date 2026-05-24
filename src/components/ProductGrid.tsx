import jFront1 from "@/images/althroextrafronyt-removebg-preview.png";
import jFront2 from "@/images/download-removebg-preview.png";
import jFront3 from "@/images/zaminacol-removebg-preview.png";
import { Plus } from "lucide-react";
import { Typewriter, useInView } from "./Typewriter";
import { Link } from "@tanstack/react-router";

const products = [
  { imgFront: jFront1, name: "ArthroExtra Joint Glow", tag: "Capsules · 60ct", price: 58, originalPrice: 85, desc: "Type II collagen + turmeric for fluid joints and a luminous complexion. A daily ceremony in a single capsule.", notes: ["Marine collagen", "Curcumin 95%", "Vitamin C halo"] },
  { imgFront: jFront2, name: "Radiance Cream", tag: "Topical · 50ml", price: 72, originalPrice: 95, desc: "Peptide-rich cream that soothes joint stiffness while plumping skin with marine botanicals.", notes: ["Peptide complex", "Squalane", "Cooling menthol"] },
  { imgFront: jFront3, name: "Zaminacol Flex Serum", tag: "Liquid · 30ml", price: 64, originalPrice: 80, desc: "Bioavailable hyaluronic acid for lubricated joints and dewy skin from the inside out.", notes: ["Hyaluronic acid", "MSM", "Biotin"] },
];

function ProductCard({ p, i }: { p: typeof products[number]; i: number }) {
  const { ref, inView } = useInView<HTMLElement>(0.4);
  return (
    <article ref={ref} className="group relative overflow-hidden rounded-[2.5rem] bg-[#FCFAF6] shadow-soft transition-all duration-700 hover:shadow-product flex flex-col p-8 border border-black/5">
      {/* Top: Tag & Title */}
      <div className="z-10 relative flex justify-between items-start mb-2">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground bg-background/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
          No. 0{i + 1}
        </span>
      </div>
      <div className="z-10 relative mt-2 text-center">
        <h3 className="text-2xl font-display">{p.name}</h3>
        <p className="text-xs text-muted-foreground mt-1 tracking-wide">{p.tag}</p>
      </div>

      {/* Middle: Image Platform */}
      <div className="relative flex-1 min-h-[280px] flex items-center justify-center my-6">
        {/* Soft radial glow behind product */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,230,210,0.6)_0%,transparent_70%)]" />

        {/* Static, tilted product image */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <img
            src={p.imgFront}
            alt={`Sumaboss ${p.name}`}
            loading="lazy"
            className="max-w-[90%] max-h-[90%] object-contain -rotate-6 transition-transform duration-700 group-hover:-rotate-3 group-hover:scale-105"
            style={{ 
              filter: "drop-shadow(0px 15px 15px rgba(100,80,60,0.15)) contrast(1.15) saturate(1.15) brightness(1.05)",
            }}
          />
        </div>

        {/* Platform Shadow (Ground shadow) */}
        <div
          aria-hidden
          className="absolute left-1/2 bottom-[10%] -translate-x-1/2 w-[70%] h-[12%] rounded-[50%] bg-[rgba(120,100,80,0.15)] blur-xl transition-all duration-700 group-hover:w-[60%] group-hover:opacity-60"
        />
        {/* Close, sharp shadow directly under the tilted product */}
        <div
          aria-hidden
          className="absolute left-[45%] bottom-[20%] -translate-x-1/2 w-[55%] h-[8%] rounded-[50%] bg-[rgba(100,80,60,0.12)] blur-md -rotate-6 transition-all duration-700 group-hover:translate-x-2"
        />
      </div>

      {/* Bottom: Description & Action */}
      <div className="z-10 relative mt-auto">
        <p className="text-sm text-muted-foreground leading-relaxed text-center mb-6 min-h-[4.5rem]">
          <Typewriter text={p.desc} start={inView} />
        </p>
        
        <div className="flex items-center justify-between pt-5 border-t border-black/5">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-gold font-medium mb-0.5">Special Price</span>
            <div className="flex items-baseline gap-2">
              <span className="text-sm text-muted-foreground line-through decoration-rose/50 decoration-2">${p.originalPrice}</span>
              <span className="text-2xl font-display text-foreground">${p.price}</span>
            </div>
          </div>
          
          <button className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-gold transition-colors shadow-lg hover:shadow-gold/20 hover:-translate-y-1 duration-300" aria-label={`Add ${p.name}`}>
            <Plus className="w-5 h-5" />
          </button>
        </div>
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
