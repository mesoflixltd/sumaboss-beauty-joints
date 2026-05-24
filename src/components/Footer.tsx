export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-gold" />
              <span className="font-display text-2xl">sumaboss</span>
            </div>
            <p className="text-sm opacity-60 max-w-xs">Joint care and beauty, formulated as one elegant ritual.</p>
          </div>
          {[
            { t: "Shop", l: ["Joint Glow", "Radiance Cream", "Flex Serum", "The Trio"] },
            { t: "Discover", l: ["The Science", "Our Ritual", "Journal", "Reviews"] },
            { t: "Care", l: ["Contact", "Shipping", "Returns", "FAQ"] },
          ].map((c) => (
            <div key={c.t}>
              <h4 className="text-sm uppercase tracking-widest opacity-60 mb-4">{c.t}</h4>
              <ul className="space-y-2 text-sm">{c.l.map(i => <li key={i}><a href="#" className="hover:text-gold transition">{i}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>© 2026 Sumaboss. Beauty + Joints, refined.</p>
          <div className="flex gap-6"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Accessibility</a></div>
        </div>
      </div>
    </footer>
  );
}
