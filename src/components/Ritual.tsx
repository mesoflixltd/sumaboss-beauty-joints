import p2 from "@/assets/product-2.png";

const steps = [
  { n: "01", title: "Morning capsule", text: "Two Joint Glow capsules with water to start your day mobile and bright." },
  { n: "02", title: "Midday serum", text: "Three drops of Flex Serum sublingually for sustained collagen support." },
  { n: "03", title: "Evening cream", text: "Massage Radiance Cream into knees, elbows and face. Skin and joints, one motion." },
];

export function Ritual() {
  return (
    <section id="ritual" className="relative py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative h-[600px] order-2 lg:order-1">
          <div className="absolute inset-0 bg-gradient-soft rounded-[3rem] shadow-product" />
          <img src={p2} alt="Radiance Cream" loading="lazy" width={500} height={500} className="absolute inset-0 m-auto w-[80%] animate-float-slow" style={{ filter: "drop-shadow(0 30px 50px rgba(180,140,80,0.3))" }} />
          <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-2xl shadow-product max-w-[220px]">
            <p className="text-xs uppercase tracking-widest text-gold mb-2">Clinical trial</p>
            <p className="text-sm">After 8 weeks, 94% reported supple joints and a visibly brighter complexion.</p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">The Ritual</p>
          <h2 className="text-5xl md:text-6xl font-light mb-12 leading-tight">Three moments. <span className="italic">All day</span> radiance.</h2>
          <ol className="space-y-10">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-6 group">
                <span className="font-display text-3xl text-gradient-gold w-12">{s.n}</span>
                <div className="flex-1 border-l border-border pl-6 pb-2 group-hover:border-gold transition">
                  <h3 className="text-2xl font-display mb-2">{s.title}</h3>
                  <p className="text-muted-foreground">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
