import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
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
    </>
  );
}
