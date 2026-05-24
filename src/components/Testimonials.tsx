const quotes = [
  { q: "My knees feel ten years younger and my skin has never looked better. One ritual, two miracles.", a: "Léa M.", r: "Yoga Instructor" },
  { q: "I stopped buying separate skincare and joint supplements. Sumaboss replaced six bottles on my counter.", a: "Amara K.", r: "Marathon Runner" },
  { q: "The texture, the scent, the results. It feels like luxury that actually works.", a: "Sofia R.", r: "Dermatologist" },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 text-center">Believers</p>
        <h2 className="text-5xl md:text-6xl font-light text-center mb-20">Words from <span className="italic">the radiant</span>.</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {quotes.map((q, i) => (
            <figure key={i} className="bg-card p-10 rounded-3xl shadow-soft hover:shadow-product transition">
              <div className="text-gold text-3xl font-display mb-4">"</div>
              <blockquote className="text-lg font-display leading-relaxed mb-8">{q.q}</blockquote>
              <figcaption className="text-sm">
                <div className="font-medium">{q.a}</div>
                <div className="text-muted-foreground text-xs mt-1">{q.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
