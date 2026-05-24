import { Link } from "@tanstack/react-router";
import { ReactNode, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import p1 from "@/assets/product-1.png";
import p2 from "@/assets/product-2.png";
import p3 from "@/assets/product-3.png";

interface AuthShellProps {
  title: string;
  subtitle: string;
  altText: string;
  altLink: string;
  altLabel: string;
  cta: string;
  children: ReactNode;
}

export function AuthShell({ title, subtitle, altText, altLink, altLabel, cta, children }: AuthShellProps) {
  const [loading, setLoading] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      {/* Visual side */}
      <div className="relative hidden lg:flex bg-gradient-soft overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-gradient-gold opacity-20 blur-3xl animate-float-slow" />
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-rose opacity-20 blur-3xl animate-float-down" />
        </div>
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          <Link to="/" className="flex items-center gap-2 group w-fit">
            <div className="w-8 h-8 rounded-full bg-gradient-gold shadow-soft transition-transform group-hover:rotate-180 duration-700" />
            <span className="font-display text-2xl">sumaboss</span>
          </Link>
          <div className="relative h-[400px] perspective-1000">
            <img src={p1} alt="" className="absolute left-0 top-0 w-48 animate-float-slow" style={{ filter: "drop-shadow(0 20px 40px rgba(180,140,80,0.3))" }} />
            <img src={p2} alt="" className="absolute right-0 top-20 w-56 animate-float-down" style={{ filter: "drop-shadow(0 20px 40px rgba(180,140,80,0.3))", animationDelay: "1s" }} />
            <img src={p3} alt="" className="absolute left-1/3 bottom-0 w-44 animate-float-slow" style={{ filter: "drop-shadow(0 20px 40px rgba(180,140,80,0.3))", animationDelay: "2s" }} />
          </div>
          <blockquote className="max-w-md">
            <p className="font-display text-2xl italic leading-snug">"My ritual. My glow. My mobility, restored."</p>
            <footer className="text-xs uppercase tracking-widest text-muted-foreground mt-4">— Léa M., believer since 2024</footer>
          </blockquote>
        </div>
      </div>

      {/* Form side */}
      <div className="relative flex items-center justify-center p-8 lg:p-16">
        <Link
          to="/"
          className="absolute top-6 left-6 lg:top-8 lg:left-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" />
          Back to home
        </Link>
        <div className="w-full max-w-md animate-[fade-in_0.6s_ease-out]">
          <Link to="/" className="lg:hidden flex items-center gap-2 mb-12 mt-8">
            <div className="w-7 h-7 rounded-full bg-gradient-gold" />
            <span className="font-display text-xl">sumaboss</span>
          </Link>
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Welcome</p>
          <h1 className="text-5xl font-light mb-3 leading-tight">{title}</h1>
          <p className="text-muted-foreground mb-10">{subtitle}</p>

          <form onSubmit={onSubmit} className="space-y-5">
            {children}
            <button
              type="submit"
              disabled={loading}
              className="group w-full flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-foreground text-background hover:bg-gradient-gold transition-all text-sm tracking-wide disabled:opacity-60"
            >
              {loading ? "One moment…" : cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
          </form>

          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">or</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <button className="w-full px-7 py-4 rounded-full border border-border hover:bg-secondary transition text-sm flex items-center justify-center gap-3">
            <span className="w-5 h-5 rounded-full bg-gradient-gold" /> Continue with Google
          </button>

          <p className="text-sm text-muted-foreground text-center mt-10">
            {altText}{" "}
            <Link to={altLink} className="text-foreground underline-offset-4 hover:underline hover:text-gradient-gold">{altLabel}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export function AuthField({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <label className="block group">
      <span className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-base transition-colors placeholder:text-muted-foreground/50"
      />
    </label>
  );
}
