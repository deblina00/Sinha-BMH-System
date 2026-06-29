import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { Reveal } from "@/components/site/Reveal";

interface Props {
  params: Promise<{ slug: string }> | { slug: string };
}

// Generate static params for fast build performance
export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProductDetailPage({ params }: Props) {
  // Resolve params if async wrapper is enforced by newer Next.js versions
  const resolvedParams = await params;
  const product = PRODUCTS.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Breadcrumb / Back button */}
        <Link 
          href="/products" 
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground/60 hover:text-ember transition mb-8"
        >
          <ArrowLeft size={14} /> Back to all products
        </Link>

        {/* Hero split layout */}
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <Reveal>
            <div className="border border-border/60 bg-surface/40 p-2 rounded-sm">
              <Image 
                src={product.image} 
                alt={product.title} 
                className="w-full h-auto object-cover border border-border/40" 
                priority
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-sm border border-ember/30 bg-ember/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-ember">
                Industrial Portfolio
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{product.title}</h1>
              <p className="text-lg text-foreground/80 leading-relaxed font-medium">{product.desc}</p>
              <div className="h-px bg-border/60 my-6" />
              <p className="text-sm text-foreground/70 leading-relaxed">{product.longDesc}</p>
            </div>
          </Reveal>
        </div>

        {/* Varieties & Options Showcase */}
        <section className="mt-20 pt-12 border-t border-border/60">
          <Reveal>
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Available Varieties & Configurations</h2>
              <p className="text-sm text-foreground/60 mt-2">Custom tailorable layouts based on plant parameters and spatial configuration.</p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.varieties.map((variety, index) => (
              <Reveal key={variety.name} delay={index * 0.05}>
                <div className="border border-border/40 bg-surface/20 p-6 rounded-sm hover:border-ember/60 transition-colors h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-ember mt-0.5 shrink-0" />
                      <h3 className="text-base font-bold text-foreground">{variety.name}</h3>
                    </div>
                    <p className="mt-3 text-xs text-foreground/70 leading-relaxed pl-7.5">
                      {variety.specs}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Inner page Call to Action */}
        <section className="mt-20 bg-brand p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 grid-lines opacity-20" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-brand-foreground">Need a custom blueprint configuration?</h3>
              <p className="text-xs text-brand-foreground/70 mt-1">Our engineering office at Ranchi can adapt dimensions to match existing layouts.</p>
            </div>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-ember px-5 py-3 text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-amber-glow clip-corner transition"
            >
              Get Technical Datasheet <ChevronRight size={14} />
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}