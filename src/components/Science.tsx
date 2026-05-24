import { Sparkles, Leaf, Activity, Droplets } from "lucide-react";

const pillars = [
  { icon: Sparkles, title: "Marine Collagen", text: "Type II peptides rebuild cartilage while restoring skin elasticity." },
  { icon: Leaf, title: "Botanical Turmeric", text: "Curcumin extract calms inflammation in joints and complexion alike." },
  { icon: Activity, title: "Hyaluronic Matrix", text: "Cushions joints and floods skin with sustained hydration." },
  { icon: Droplets, title: "Vitamin Halo", text: "C, D3, and biotin for radiant glow and resilient connective tissue." },
];

export function Science() {
  return (
    <section id="science" className="relative py-32 bg-secondary/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">The Science</p>
          <h2 className="text-5xl md:text-6xl font-light leading-tight">A formula that treats your joints and your reflection as <span className="italic">one</span>.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden shadow-soft">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-background p-10 hover:bg-card transition group">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-display mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
