//src/app/(public)/industries/page.tsx

import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ChevronRight } from "lucide-react";
import { INDUSTRIES } from "@/data/industries";

const CASE_STUDIES = [
  {
    title: "Integrated Steel Plant",
    challenge:
      "Continuous iron ore handling under abrasive operating conditions.",
    solution:
      "Heavy-duty idlers, pulleys and engineered structures designed for maximum durability.",
    outcome:
      "Improved reliability with reduced maintenance downtime.",
  },
  {
    title: "Thermal Power CHP",
    challenge:
      "Continuous coal movement with stringent safety requirements.",
    solution:
      "Complete Coal Handling Plant infrastructure including precision drives and FRAS-compliant conveyor components.",
    outcome:
      "Reliable 24×7 fuel handling for uninterrupted power generation.",
  },
  {
    title: "Cement Plant",
    challenge:
      "High-temperature clinker conveying and severe dust ingress.",
    solution:
      "Advanced sealing technology with heat-resistant conveyor components.",
    outcome:
      "Improved equipment life and higher plant availability.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Where continuous duty is{" "}
            <span className="text-gradient-ember">
              non-negotiable.
            </span>
          </>
        }
        description="We engineer reliable bulk material handling solutions for some of the most demanding industries—where downtime is never an option and performance defines productivity."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-2">
          {INDUSTRIES.map((i, idx) => (
            <Link key={i.slug} href={`/industries/${i.slug}`}>
              <Reveal delay={idx * 0.05}>
                <article className="group relative h-[440px] overflow-hidden rounded-3xl border border-border/60">
                  <Image
                    src={i.image}
                    alt={i.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <h3 className="text-3xl font-semibold">{i.title}</h3>
                    <p className="mt-3 max-w-md text-muted-foreground">
                      {i.shortDesc}
                    </p>
                  </div>
                </article>
              </Reveal>
            </Link>
          ))}
        </div>
      </section>

      {/* Engineering Case Studies */}
      <section className="py-24 bg-surface/40 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6">

          <Reveal>

            <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-ember">
              Engineering Case Studies
            </div>

            <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight">
              Proven across demanding industrial environments.
            </h2>

            <p className="mt-5 max-w-3xl text-foreground/70 leading-relaxed">
              Every installation reflects our commitment to dependable engineering,
              precision manufacturing and long-term operational performance.
            </p>

          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">

            {CASE_STUDIES.map((study, i) => (

              <Reveal key={study.title} delay={i * 0.05}>

                <div className="rounded-2xl border border-border/60 bg-background p-8 h-full">

                  <h3 className="text-2xl font-semibold">
                    {study.title}
                  </h3>

                  <div className="mt-8">

                    <h4 className="text-sm uppercase tracking-wider text-ember font-semibold">
                      Challenge
                    </h4>

                    <p className="mt-2 text-muted-foreground">
                      {study.challenge}
                    </p>

                  </div>

                  <div className="mt-6">

                    <h4 className="text-sm uppercase tracking-wider text-ember font-semibold">
                      Solution
                    </h4>

                    <p className="mt-2 text-muted-foreground">
                      {study.solution}
                    </p>

                  </div>

                  <div className="mt-6">

                    <h4 className="text-sm uppercase tracking-wider text-ember font-semibold">
                      Outcome
                    </h4>

                    <p className="mt-2 text-muted-foreground">
                      {study.outcome}
                    </p>

                  </div>

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
            <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-ember">
              Clients & Partners
            </div>

            <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight">
              Trusted by Industry Leaders.
            </h2>

            <p className="mt-5 max-w-2xl text-foreground/70 leading-relaxed">
              Our engineering solutions support leading organizations
              across steel, cement, mining, thermal power, ports and
              process industries. A comprehensive client reference list
              is available upon request.
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

      {/* CTA SECTION */}
      <section className="py-28 border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <Reveal>

            <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-ember">
              Ready to Get Started?
            </div>

            <h2 className="mt-5 text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
              Ready to engineer your next project?
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-foreground/70 leading-relaxed mb-7">
              Whether you're building a new facility,
              modernizing an existing plant or replacing
              critical conveyor components, our engineering
              team is ready to help.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-ember px-5 py-3 text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-amber-glow clip-corner transition"
            >
              Request a Quote <ChevronRight size={14} />
            </Link>
          </Reveal>

        </div>
      </section>
    </>
  );
}
