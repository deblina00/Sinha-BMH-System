//src/app/(public)/products/page.tsx

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { PRODUCTS } from "@/data/products";

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title={<>Bulk handling equipment for <span className="text-gradient-ember">continuous operations.</span></>}
        description="Engineered for high tonnage, extreme environments, and maximum uptime. Explore our range of products and accessories below."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, idx) => (
            <Reveal key={p.slug} delay={idx * 0.05}>
              <article className="group border border-border/60 bg-surface/60 hover:border-ember transition-colors flex flex-col h-full">
                <div className="aspect-[4/3] overflow-hidden border-b border-border/60">
                  <Image 
                    src={p.image} 
                    alt={p.title} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    loading="lazy" 
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{p.title}</h3>
                    <p className="mt-2 text-sm text-foreground/70">{p.desc}</p>
                  </div>
                  <Link 
                    href={`/products/${p.slug}`} 
                    className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-ember group-hover:text-amber-glow"
                  >
                    View Deatils <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}