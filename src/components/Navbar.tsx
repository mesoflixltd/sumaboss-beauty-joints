import { Link } from "@tanstack/react-router";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#shop", label: "Shop" },
  { href: "/#science", label: "Science" },
  { href: "/#ritual", label: "Ritual" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-gold shadow-soft transition-transform group-hover:rotate-180 duration-700" />
            <span className="font-display text-2xl tracking-wide">sumaboss</span>
          </Link>
          <ul className="hidden md:flex items-center gap-8 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative text-muted-foreground hover:text-foreground transition group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <button aria-label="Search" className="hidden sm:block text-muted-foreground hover:text-foreground transition hover:scale-110">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/login" className="hidden sm:inline text-sm text-muted-foreground hover:text-foreground transition">Sign in</Link>
            <Link to="/signup" className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-foreground text-background text-xs tracking-wide hover:bg-gradient-gold transition-all hover:scale-105">
              Begin glowing
            </Link>
            <button aria-label="Cart" className="relative text-foreground hover:scale-110 transition">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-2 text-[10px] bg-gradient-gold text-white rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </button>
            <button aria-label="Menu" className="md:hidden" onClick={() => setOpen(true)}>
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] bg-background transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="hover:rotate-90 transition-transform duration-300">
            <X className="w-6 h-6" />
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center gap-8 mt-20">
          {[
            ...links.map((l) => ({ href: l.href, label: l.label, route: false as const })),
            { href: "/login", label: "Sign in", route: true as const },
            { href: "/signup", label: "Join", route: true as const },
          ].map((l, i) => (
            <li
              key={l.label}
              style={{ transitionDelay: open ? `${i * 80}ms` : "0ms" }}
              className={`transition-all duration-500 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              {l.route ? (
                <Link to={l.href} onClick={() => setOpen(false)} className="font-display text-4xl hover:text-gradient-gold hover:italic transition">{l.label}</Link>
              ) : (
                <a href={l.href} onClick={() => setOpen(false)} className="font-display text-4xl hover:text-gradient-gold hover:italic transition">{l.label}</a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
