import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, Award, ShieldCheck } from "lucide-react";
import hero from "@/assets/hero-industrial.jpg";
import about from "@/assets/about-plant.jpg";
import conveyor from "@/assets/product-conveyor.jpg";
import elevator from "@/assets/product-elevator.jpg";
import screen from "@/assets/product-screen.jpg";
import feeder from "@/assets/product-feeder.jpg";
import steel from "@/assets/industry-steel.jpg";
import cement from "@/assets/industry-cement.jpg";
import mining from "@/assets/industry-mining.jpg";
import power from "@/assets/industry-power.jpg";

const SHOTS = [
  { img: hero, span: "lg:col-span-2 lg:row-span-2", title: "Integrated Steel Plant — CHP", year: "2024" },
  { img: about, span: "lg:col-span-2", title: "Coal Handling Yard — Eastern Coalfields", year: "2023" },
  { img: conveyor, span: "", title: "Belt Conveyor Pulley Assembly", year: "2024" },
  { img: elevator, span: "", title: "Bucket Elevator — Clinker Line", year: "2023" },
  { img: screen, span: "lg:col-span-2", title: "Vibrating Screen — Sized Iron Ore", year: "2022" },
  { img: feeder, span: "", title: "Apron Feeder — ROM Hopper", year: "2023" },
  { img: steel, span: "", title: "Sinter Plant Reclaim", year: "2022" },
  { img: cement, span: "lg:col-span-2", title: "Cement Silos — Western India", year: "2024" },
  { img: mining, span: "", title: "Bauxite Open Pit — Reclaim Line", year: "2022" },
  { img: power, span: "lg:col-span-2", title: "Thermal Power — Coal Handling", year: "2023" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Project gallery"
        title={<>Built. Delivered. <span className="text-gradient-ember">Running.</span></>}
        description="A small selection from twenty-five years of plants commissioned across India and abroad."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 lg:grid-cols-4 lg:auto-rows-[280px]">
            {SHOTS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.03} className={s.span}>
                <figure className="group relative h-full min-h-[280px] overflow-hidden rounded-2xl border border-border/60">
                  <Image src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/50 to-transparent p-5">
                    <div className="text-xs uppercase tracking-widest text-ember">{s.year}</div>
                    <div className="text-base font-semibold">{s.title}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEW LINK TO CERTIFICATES SECTION */}
      <section className="py-16 bg-surface/30 border-t border-border/60 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="border border-border/60 bg-background/60 p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-ember/10 border border-ember/30 rounded-xl text-ember shrink-0">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Compliance & Quality Frameworks</h3>
                <p className="mt-2 text-sm text-foreground/70 max-w-xl leading-relaxed">
                  Our manufacturing systems, safety criteria, and operational execution adhere to strict global frameworks including ISO 9001:2015 and verified statutory certifications.
                </p>
              </div>
            </div>
            <Link 
              href="/certificates" 
              className="group inline-flex items-center gap-2 bg-ember px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-foreground hover:bg-amber-glow clip-corner transition shrink-0"
            >
              View Verification Certificates <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}