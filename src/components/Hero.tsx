import p1 from "@/assets/product-1.png";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-gold opacity-10 blur-3xl animate-spin-slow" />
      </div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs tracking-widest uppercase text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Beauty meets Mobility
          </span>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95]">
            Glow from <span className="italic text-gradient-gold">within</span>, move without limits.
          </h1>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            Sumaboss formulates clinical-grade supplements where radiant skin and supple joints share the same daily ritual.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#shop" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-foreground text-background hover:bg-foreground/90 transition text-sm tracking-wide">
              Shop the ritual <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
            <a href="#science" className="inline-flex items-center px-7 py-4 rounded-full border border-border hover:bg-secondary transition text-sm tracking-wide">
              Our science
            </a>
          </div>
          <div className="flex items-center gap-8 pt-6 text-xs text-muted-foreground">
            <div><div className="text-2xl font-display text-foreground">98%</div>felt smoother joints</div>
            <div><div className="text-2xl font-display text-foreground">12k+</div>radiant believers</div>
            <div><div className="text-2xl font-display text-foreground">A+</div>clean rating</div>
          </div>
        </div>
        <div className="relative h-[600px] perspective-1000">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-soft shadow-product" />
            <div className="absolute w-[320px] h-[320px] rounded-full border border-gold/30 animate-spin-slow" />
            <img
              src={p1}
              alt="Sumaboss Joint Glow hero bottle"
              width={520}
              height={520}
              className="relative z-10 w-[460px] drop-shadow-2xl animate-float-down"
              style={{ filter: "drop-shadow(0 30px 60px rgba(180,140,80,0.35))" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
