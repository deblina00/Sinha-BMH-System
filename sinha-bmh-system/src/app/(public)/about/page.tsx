import Link from "next/link";
import Image from "next/image";
import mdImg from "@/assets/team1.jpg";
import { Target, Rocket, ArrowRight, ShieldCheck } from "lucide-react";
// import { GitCommit } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/Eyebrow";
import aboutImg from "@/assets/about-plant.jpg";
import { Quote } from "lucide-react";

const VALUES = [
  {
    title: "Engineering Excellence",
    body: "Cultivating a zero-defect manufacturing culture through rigorous quality protocols, ensuring product consistency, reliability, and long-term operational performance.",
  },
  {
    title: "Operational Agility",
    body: "Ensuring 99%+ on-time delivery through precision manufacturing, providing maximum reliability for both custom-engineered components and bulk stock replenishment.",
  },
  {
    title: "Bespoke Customization",
    body: "Engineering tailored solutions that integrate seamlessly with client infrastructure, fostering long-term strategic partnerships and operational efficiency.",
  },
  {
    title: "Lead Time Optimization",
    body: "Utilizing streamlined production workflows to enable rapid manufacturing turnaround while reducing project lead times without compromising quality.",
  },
  {
    title: "Stakeholder Transparency",
    body: "Committing to proactive communication and complete project visibility, ensuring stakeholders remain informed throughout every stage of the project lifecycle.",
  },
  {
    title: "Lifecycle Support",
    body: "Delivering robust after-sales technical assistance and rapid-response service to maximize equipment uptime, reliability, and operational longevity.",
  },
];

// const MILESTONES = [
//   ["1998", "Founded as a fabrication unit in Kolkata."],
//   ["2004", "First turnkey CHP for a captive power plant."],
//   ["2010", "Cross 100 plants commissioned across India."],
//   ["2016", "Opens manufacturing facility in Jamshedpur."],
//   ["2021", "First export project — port stockyard in Indonesia."],
//   ["2026", "400+ plants in service across 18 countries."],
// ];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Engineering that <span className="text-gradient-ember">moves industries</span>, with precision and purpose.
          </>
        }
        description="Sinha BMH Systems delivers reliable conveyor mechanical systems that keep the world's most demanding industries moving."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-2 items-center">
          <Reveal>
            <Image src={aboutImg} alt="Sinha BMH plant" className="rounded-3xl shadow-elegant w-full h-[520px] object-cover" loading="lazy" />
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Our Story</Eyebrow>

            <h2 className="mt-5 text-4xl font-semibold leading-tight">
              Two decades of engineering confidence.
            </h2>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              Established in 2005 in Howrah, West Bengal, Sinha BMH Systems has grown into one of
              India's trusted engineering partners for Bulk Material Handling solutions. What began as
              a manufacturing-driven organization has evolved into a fully integrated EPC company,
              delivering everything from engineering design and precision manufacturing to procurement,
              erection supervision and commissioning support.
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today, our solutions operate across steel, mining, power, cement, ports and other
              process industries. Backed by modern manufacturing facilities, internationally accepted
              engineering standards and an experienced technical team, we help customers maximize
              plant reliability, operational efficiency and long-term performance.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 border-y border-border/60 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-20" />

        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <Eyebrow>Mission & Vision</Eyebrow>

            <h2 className="mt-4 max-w-3xl text-4xl sm:text-5xl font-semibold leading-tight">
              Building tomorrow's industrial infrastructure with purpose.
            </h2>

            <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
              Every project we undertake is guided by a commitment to engineering
              excellence, continuous innovation, and long-term customer success.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">

            {/* Mission */}

            <Reveal>
              <div className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-10 transition-all duration-500 hover:border-ember/40">

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-ember/10 text-ember text-2xl">
                  <Rocket className="h-7 w-7 text-ember" />
                </div>

                <h3 className="text-3xl font-semibold">
                  Our Mission
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Continual upgradation, innovation and implementation to meet the
                  evolving needs of our valued customers through dependable
                  engineering, quality manufacturing and responsive service.
                </p>
              </div>
            </Reveal>

            {/* Vision */}

            <Reveal delay={0.08}>
              <div className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-10 transition-all duration-500 hover:border-ember/40">

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand text-2xl">
                  <Target className="h-7 w-7 text-brand" />
                </div>

                <h3 className="text-3xl font-semibold">
                  Our Vision
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  To achieve prominent recognition in turnkey Bulk Material Handling
                  projects through uncompromising quality in engineering,
                  manufacturing, on-time delivery and lifetime customer support.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <Reveal>
            <Eyebrow>Leadership</Eyebrow>

            <h2 className="mt-4 text-4xl sm:text-5xl font-semibold">
              Engineering begins with leadership.
            </h2>

            <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
              At Sinha BMH Systems, every milestone is driven by a commitment to
              engineering excellence, innovation, and long-term customer
              relationships. Our leadership continues to shape that vision every
              single day.
            </p>
          </Reveal>

          <div className="mt-16 grid items-center gap-16 lg:grid-cols-[420px_1fr]">

            <Reveal>
              <Image
                src={mdImg}
                alt="Managing Director"
                className="aspect-[4/5] w-full rounded-3xl object-cover border border-border shadow-elegant"
              />
            </Reveal>

            <Reveal delay={0.08}>

              <span className="text-sm uppercase tracking-[0.25em] text-ember font-semibold">
                Managing Director
              </span>

              <h3 className="mt-3 text-4xl font-semibold">
                Mr. Prosenjit Sinha
              </h3>

              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                With over two decades of experience in bulk material handling,
                engineering, and industrial manufacturing, he has guided Sinha BMH
                Systems from a specialized manufacturing company into a trusted EPC
                partner serving industries across India.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                His leadership is built on technical excellence, customer trust,
                continuous innovation, and an uncompromising commitment to quality—
                values that continue to define every project delivered by the
                organization.
              </p>

              <div className="mt-10 rounded-2xl border border-border bg-surface p-6">

                <Quote className="h-8 w-8 text-ember" />

                <p className="mt-5 text-xl italic leading-relaxed">
                  "Great engineering is not measured by complexity, but by how
                  reliably it performs for decades."
                </p>

              </div>

            </Reveal>

          </div>

        </div>
      </section>

      <section className="py-24 bg-surface/40 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <Eyebrow>What we stand for</Eyebrow>
            {/* <h2 className="mt-4 text-4xl sm:text-5xl font-semibold max-w-xl leading-tight">Three values, non-negotiable.</h2> */}
            <h2 className="mt-4 text-4xl sm:text-5xl font-semibold max-w-xl leading-tight">Our non-negotiables.</h2>
          </Reveal>
          {/* <div className="mt-14 grid gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="rounded-2xl bg-surface p-8 border border-border/60 h-full">
                  <div className="text-5xl font-semibold text-gradient-ember">0{i + 1}</div>
                  <h3 className="mt-5 text-xl font-semibold">{v.title}</h3>
                  <p className="mt-3 text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div> */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="rounded-2xl bg-surface p-8 border border-border/60 h-full">
                  <div className="text-5xl font-semibold text-gradient-ember">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <h3 className="mt-5 text-xl font-semibold">
                    {v.title}
                  </h3>

                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-24 bg-brand/20 border-y border-border/60 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-20" /> */}

      {/* <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <Eyebrow>Milestones</Eyebrow>
            <h2 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight">
              A timeline of tonnage moved.
            </h2>
          </Reveal> */}

      {/* <div className="relative mt-20"> */}
      {/* Center Timeline */}
      {/* <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-ember via-ember/60 to-transparent" />

            <ol className="space-y-10 md:space-y-16">
              {MILESTONES.map(([year, body], i) => {
                const isRight = i % 2 === 1;

                return (
                  <Reveal key={year} delay={i * 0.08}>
                    <li className="relative grid items-center md:grid-cols-2 md:gap-12"> */}

      {/* LEFT CARD */}
      {/* {!isRight && (
                        <>
                          <div className="pr-16 text-right">
                            <div className="group relative overflow-hidden border border-ember/20 bg-surface/80 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-ember hover:shadow-[0_20px_50px_-20px_oklch(0.72_0.19_45_/_0.35)]"> */}

      {/* Glow line */}
      {/* <span className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-ember to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" /> */}

      {/* Header */}
      {/* <div className="flex items-center justify-end gap-2">
                                <GitCommit className="h-3.5 w-3.5 text-ember transition-all duration-500 group-hover:rotate-180 group-hover:scale-110" />
                                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ember">
                                  Year
                                </span>
                              </div> */}

      {/* Year */}
      {/* <div className="mt-2 text-4xl md:text-5xl font-bold text-ember transition-transform duration-500 group-hover:scale-105">
                                {year}
                              </div> */}

      {/* Description */}
      {/* <p className="mt-4 text-foreground/80 leading-relaxed">
                                {body}
                              </p>
                            </div>
                          </div>

                          <div />
                        </>
                      )} */}

      {/* RIGHT CARD */}
      {/* {isRight && (
                        <>
                          <div />

                          <div className="pl-16">
                            <div className="group relative overflow-hidden border border-ember/20 bg-surface/80 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-ember hover:shadow-[0_20px_50px_-20px_oklch(0.72_0.19_45_/_0.35)]"> */}

      {/* Glow line */}
      {/* <span className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-ember to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" /> */}

      {/* Header */}
      {/* <div className="flex items-center gap-2">
                                <GitCommit className="h-3.5 w-3.5 text-ember transition-all duration-500 group-hover:rotate-180 group-hover:scale-110" />
                                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ember">
                                  Year
                                </span>
                              </div> */}

      {/* Year */}
      {/* <div className="mt-2 text-4xl md:text-5xl font-bold text-ember transition-transform duration-500 group-hover:scale-105">
                                {year}
                              </div> */}

      {/* Description */}
      {/* <p className="mt-4 text-foreground/80 leading-relaxed">
                                {body}
                              </p>
                            </div>
                          </div>
                        </>
                      )} */}

      {/* Center Node */}
      {/* <span className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                        <span className="relative flex h-4 w-4 items-center justify-center">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-60" />
                          <span className="relative inline-flex h-3 w-3 rounded-full bg-ember ring-4 ring-background" />
                        </span>
                      </span> */}

      {/* Branch Line */}
      {/* <span
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
          </div> */}
      {/* </div> */}
      {/* </section> */}
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
