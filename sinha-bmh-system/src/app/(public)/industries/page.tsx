import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import indSteel from "@/assets/industry-steel.jpg";
import indCement from "@/assets/industry-cement.jpg";
import indMining from "@/assets/industry-mining.jpg";
import indPower from "@/assets/industry-power.jpg";


const INDUSTRIES = [
  { img: indSteel, name: "Steel & Metals", body: "Raw material yards, sinter feed, coke handling and slag conveying for integrated steel plants." },
  { img: indCement, name: "Cement", body: "Limestone reclaim, clinker handling, coal mill feed and packing-plant conveying — wear-engineered for clinker abrasion." },
  { img: indMining, name: "Mining & Minerals", body: "ROM-to-port handling: apron feeders, crushers, overland conveyors and rail loadouts for iron-ore, coal and bauxite." },
  { img: indPower, name: "Thermal Power", body: "Coal handling plants from wagon tippler to bunker level, with dust suppression and fire-detection integrated." },
];

const SECONDARY = [
  { name: "Ports & Terminals", body: "Ship-loaders, conveyors and stackers for export terminals." },
  { name: "Fertilizers", body: "Hygroscopic handling for urea, DAP and complex fertilizers." },
  { name: "Sugar & Grain", body: "Stainless conveying and bucket elevators for food-grade duty." },
  { name: "Chemicals", body: "Pneumatic conveying and bag handling for process plants." },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Where continuous duty is <span className="text-gradient-ember">non-negotiable.</span></>}
        description="Our plants run 8,000 hours a year, on three shifts, in the most punishing climates. These are the sectors we know best."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-2">
          {INDUSTRIES.map((i, idx) => (
            <Reveal key={i.name} delay={idx * 0.05}>
              <article className="group relative h-[440px] overflow-hidden rounded-3xl border border-border/60">
                <Image src={i.img} alt={i.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3 className="text-3xl font-semibold">{i.name}</h3>
                  <p className="mt-3 max-w-md text-muted-foreground">{i.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 bg-surface/40 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-semibold max-w-xl leading-tight">Also delivered in</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SECONDARY.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.04}>
                <div className="rounded-2xl border border-border/60 bg-background p-6 h-full">
                  <h3 className="text-lg font-semibold">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Selected client roster */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-ember">Clients & Partners</div>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
              Selected client roster.
            </h2>
            <p className="mt-5 max-w-xl text-foreground/70 leading-relaxed">
              A snapshot of the operators, EPC majors and consulting engineers we work with.
              Full reference list available on request.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-border/60 border border-border/60">
              {Array.from({ length: 18 }, (_, i) => (
                <div
                  key={i}
                  className="flex h-28 items-center justify-center bg-surface/40 text-[11px] font-bold uppercase tracking-[0.28em] text-foreground/55 hover:text-ember hover:bg-surface transition-colors"
                >
                  Client {String(i + 1).padStart(2, "0")}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
