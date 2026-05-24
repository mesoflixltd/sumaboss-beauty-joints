import { ShoppingBag, Search, Menu } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-gold shadow-soft" />
          <span className="font-display text-2xl tracking-wide">sumaboss</span>
        </div>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <li><a href="#shop" className="hover:text-foreground transition">Shop</a></li>
          <li><a href="#science" className="hover:text-foreground transition">Science</a></li>
          <li><a href="#ritual" className="hover:text-foreground transition">Ritual</a></li>
          <li><a href="#journal" className="hover:text-foreground transition">Journal</a></li>
        </ul>
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="hidden sm:block text-muted-foreground hover:text-foreground"><Search className="w-5 h-5" /></button>
          <button aria-label="Cart" className="relative text-foreground"><ShoppingBag className="w-5 h-5" /><span className="absolute -top-1 -right-2 text-[10px] bg-gradient-gold text-white rounded-full w-4 h-4 flex items-center justify-center">3</span></button>
          <button aria-label="Menu" className="md:hidden"><Menu className="w-5 h-5" /></button>
        </div>
      </nav>
    </header>
  );
}
