import Link from "next/link";
import Image from "next/image";
import { GitCommit } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/Eyebrow";
import aboutImg from "@/assets/about-plant.jpg";



const VALUES = [
  { title: "Engineer first", body: "Every drawing reviewed by senior engineers before it touches the shop floor." },
  { title: "Built to last", body: "We design for the 30th year of duty, not the first commissioning report." },
  { title: "Own the outcome", body: "EPC, O&M, spares — one accountable partner across the asset's life." },
];

const MILESTONES = [
  ["1998", "Founded as a fabrication unit in Kolkata."],
  ["2004", "First turnkey CHP for a captive power plant."],
  ["2010", "Cross 100 plants commissioned across India."],
  ["2016", "Opens manufacturing facility in Jamshedpur."],
  ["2021", "First export project — port stockyard in Indonesia."],
  ["2026", "400+ plants in service across 18 countries."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Engineering that <span className="text-gradient-ember">earns its keep</span>, year after year.
          </>
        }
        description="Sinha BMH Systems is a Kolkata-based bulk material handling EPC house. We design, manufacture and commission heavy plants for the industries that move the country forward."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-2 items-center">
          <Reveal>
            <Image src={aboutImg} alt="Sinha BMH plant" className="rounded-3xl shadow-elegant w-full h-[520px] object-cover" loading="lazy" />
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold leading-tight">
              From a single workshop to a global EPC partner.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Founded in 1998 by a team of mechanical engineers who believed Indian-built equipment
              could match the toughest imported names, Sinha BMH grew through one principle:
              <span className="text-foreground"> build it like you have to run it. </span>
              Today our plants handle iron ore, coal, clinker, bauxite, fertilizers and grain
              across 18 countries.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We retained our engineering culture as we scaled. Senior engineers still review every
              critical drawing; site managers still walk the conveyors at handover.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-surface/40 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <Eyebrow>What we stand for</Eyebrow>
            <h2 className="mt-4 text-4xl sm:text-5xl font-semibold max-w-xl leading-tight">Three values, non-negotiable.</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="rounded-2xl bg-surface p-8 border border-border/60 h-full">
                  <div className="text-5xl font-semibold text-gradient-ember">0{i + 1}</div>
                  <h3 className="mt-5 text-xl font-semibold">{v.title}</h3>
                  <p className="mt-3 text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand/20 border-y border-border/60 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-20" />

        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <Eyebrow>Milestones</Eyebrow>
            <h2 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight">
              A timeline of tonnage moved.
            </h2>
          </Reveal>

          <div className="relative mt-20">
            {/* Center Timeline */}
            <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-ember via-ember/60 to-transparent" />

            <ol className="space-y-10 md:space-y-16">
              {MILESTONES.map(([year, body], i) => {
                const isRight = i % 2 === 1;

                return (
                  <Reveal key={year} delay={i * 0.08}>
                    <li className="relative grid items-center md:grid-cols-2 md:gap-12">

                      {/* LEFT CARD */}
                      {!isRight && (
                        <>
                          <div className="pr-16 text-right">
                            <div className="group relative overflow-hidden border border-ember/20 bg-surface/80 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-ember hover:shadow-[0_20px_50px_-20px_oklch(0.72_0.19_45_/_0.35)]">

                              {/* Glow line */}
                              <span className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-ember to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                              {/* Header */}
                              <div className="flex items-center justify-end gap-2">
                                <GitCommit className="h-3.5 w-3.5 text-ember transition-all duration-500 group-hover:rotate-180 group-hover:scale-110" />
                                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ember">
                                  Year
                                </span>
                              </div>

                              {/* Year */}
                              <div className="mt-2 text-4xl md:text-5xl font-bold text-ember transition-transform duration-500 group-hover:scale-105">
                                {year}
                              </div>

                              {/* Description */}
                              <p className="mt-4 text-foreground/80 leading-relaxed">
                                {body}
                              </p>
                            </div>
                          </div>

                          <div />
                        </>
                      )}

                      {/* RIGHT CARD */}
                      {isRight && (
                        <>
                          <div />

                          <div className="pl-16">
                            <div className="group relative overflow-hidden border border-ember/20 bg-surface/80 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-ember hover:shadow-[0_20px_50px_-20px_oklch(0.72_0.19_45_/_0.35)]">

                              {/* Glow line */}
                              <span className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-ember to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                              {/* Header */}
                              <div className="flex items-center gap-2">
                                <GitCommit className="h-3.5 w-3.5 text-ember transition-all duration-500 group-hover:rotate-180 group-hover:scale-110" />
                                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ember">
                                  Year
                                </span>
                              </div>

                              {/* Year */}
                              <div className="mt-2 text-4xl md:text-5xl font-bold text-ember transition-transform duration-500 group-hover:scale-105">
                                {year}
                              </div>

                              {/* Description */}
                              <p className="mt-4 text-foreground/80 leading-relaxed">
                                {body}
                              </p>
                            </div>
                          </div>
                        </>
                      )}

                      {/* Center Node */}
                      <span className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                        <span className="relative flex h-4 w-4 items-center justify-center">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-60" />
                          <span className="relative inline-flex h-3 w-3 rounded-full bg-ember ring-4 ring-background" />
                        </span>
                      </span>

                      {/* Branch Line */}
                      <span
                        className={`absolute top-1/2 h-px bg-ember/50 ${isRight
                          ? "left-1/2 w-16"
                          : "right-1/2 w-16"
                          }`}
                      />
                    </li>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
