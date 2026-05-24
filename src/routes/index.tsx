import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductFlow } from "@/components/ProductFlow";
import { ProductGrid } from "@/components/ProductGrid";
import { Science } from "@/components/Science";
import { Ritual } from "@/components/Ritual";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sumaboss — Beauty & Joint Care Ritual" },
      { name: "description", content: "Sumaboss formulates clinical-grade supplements and creams where radiant skin and supple joints share one elegant daily ritual." },
      { property: "og:title", content: "Sumaboss — Beauty & Joint Care Ritual" },
      { property: "og:description", content: "Glow from within, move without limits. Three products, one ritual." },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sumaboss — Beauty & Joint Care Ritual" },
      { name: "twitter:description", content: "Glow from within, move without limits. Three products, one ritual." },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <div className="relative">
        <ProductFlow />
        <main className="relative z-10">
          <Hero />
          <ProductGrid />
          <Science />
          <Ritual />
          <Testimonials />
        </main>
      </div>
      <Footer />
    </div>
  );
}
