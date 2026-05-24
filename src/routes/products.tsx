import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import jFront1 from "@/images/althroextrafronyt-removebg-preview.png";
import jFront2 from "@/images/download-removebg-preview.png";
import jFront3 from "@/images/zaminacol-removebg-preview.png";
import { Plus, Eye, ShoppingCart } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [{ title: "Shop — Sumaboss" }],
  }),
  component: ProductsPage,
});

const allProducts = [
  { imgFront: jFront1, name: "ArthroExtra Joint Glow", tag: "Capsules · 60ct", price: 58, desc: "Type II collagen + turmeric for fluid joints and a luminous complexion. A daily ceremony in a single capsule." },
  { imgFront: jFront2, name: "Radiance Cream", tag: "Topical · 50ml", price: 72, desc: "Peptide-rich cream that soothes joint stiffness while plumping skin with marine botanicals." },
  { imgFront: jFront3, name: "Zaminacol Flex Serum", tag: "Liquid · 30ml", price: 64, desc: "Bioavailable hyaluronic acid for lubricated joints and dewy skin from the inside out." },
];

function ProductsPage() {
  return (
    <div className="relative bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-light">All Products</h1>
            <p className="mt-4 text-muted-foreground">Discover the complete collection for your daily ritual.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {allProducts.map((p, i) => (
              <article key={p.name} className="group relative">
                <div className="relative overflow-hidden rounded-3xl bg-[#FCFAF6] aspect-[4/5] shadow-soft transition-all duration-700 group-hover:shadow-product flex flex-col items-center justify-center p-8">
                  {/* Soft radial glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,230,210,0.4)_0%,transparent_70%)]" />

                  {/* Image */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <img
                      src={p.imgFront}
                      alt={p.name}
                      className="max-w-[85%] max-h-[85%] object-contain -rotate-6 transition-transform duration-700 group-hover:-rotate-3 group-hover:scale-105"
                      style={{ filter: "drop-shadow(0px 15px 15px rgba(100,80,60,0.15)) contrast(1.15) saturate(1.15) brightness(1.05)" }}
                    />
                  </div>

                  {/* Shadows (Platform effect) */}
                  <div className="absolute left-1/2 bottom-[15%] -translate-x-1/2 w-[60%] h-[12%] rounded-[50%] bg-[rgba(120,100,80,0.15)] blur-xl transition-all duration-700 group-hover:w-[50%] group-hover:opacity-60" />
                  <div className="absolute left-[45%] bottom-[25%] -translate-x-1/2 w-[50%] h-[8%] rounded-[50%] bg-[rgba(100,80,60,0.12)] blur-md -rotate-6 transition-all duration-700 group-hover:translate-x-2" />
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-background/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <button className="w-14 h-14 rounded-full bg-background text-foreground flex items-center justify-center shadow-xl hover:bg-gold hover:text-white transition-colors" aria-label="Quick View">
                      <Eye className="w-6 h-6" />
                    </button>
                    <button className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center shadow-xl hover:bg-gold hover:text-white transition-colors" aria-label="Add to Cart">
                      <ShoppingCart className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-display">{p.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{p.tag}</p>
                    </div>
                    <span className="text-lg font-display">${p.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
