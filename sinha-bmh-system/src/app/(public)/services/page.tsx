import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Factory, Wrench, ShieldCheck, Gauge, Zap, CheckCircle2 } from "lucide-react";

const SERVICES = [
  { icon: Factory, title: "Turnkey EPC", body: "Concept-to-commissioning execution across engineering, procurement, fabrication, erection and performance trials." },
  { icon: Wrench, title: "Plant Modernization", body: "Brownfield retrofits that lift throughput, drop power draw and extend plant life — phased around your production calendar." },
  { icon: ShieldCheck, title: "O&M Contracts", body: "Long-term operation and maintenance with guaranteed availability KPIs and on-site spares stocking." },
  { icon: Gauge, title: "Performance Audits", body: "Instrumented audits of conveyor capacity, idler health, drive efficiency and dust extraction." },
  { icon: Zap, title: "Automation & Controls", body: "PLC/SCADA upgrades, weigh-feeder integration, condition monitoring and digital twin handover." },
  { icon: CheckCircle2, title: "Spares & Service", body: "OEM-grade belts, idlers, pulleys, chutes, screens and gearboxes — stocked across India for 48-hour dispatch." },
];

const PROCESS = [
  { step: "01", title: "Discovery", body: "Site walk, material characterisation, throughput model and constraint mapping." },
  { step: "02", title: "Engineering", body: "Process flow, plant layout, GA drawings, structural calcs and 3D model freeze." },
  { step: "03", title: "Fabrication", body: "In-house manufacturing under ISO 9001 with third-party WPS/PQR and NDT records." },
  { step: "04", title: "Erection", body: "Self-performed civil interface, mechanical erection and electrical termination." },
  { step: "05", title: "Commissioning", body: "Dry runs, load trials, performance guarantee runs and hand-over with digital twin." },
  { step: "06", title: "Support", body: "AMC, condition monitoring, planned shutdowns and spares — for the asset's whole life." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>One partner. <span className="text-gradient-ember">Whole-life</span> accountability.</>}
        description="From greenfield EPC to the night-shift call thirty years in. Our service offering is designed to keep your plant running, not to bill another invoice."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border/60 bg-surface p-8 hover:border-ember/60 hover:-translate-y-1 transition-all">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-ember/20 text-ember">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 bg-surface/40 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-semibold max-w-2xl leading-tight">
              A six-stage delivery method that <span className="text-gradient-brand">leaves nothing to chance.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.04}>
                <div className="rounded-2xl border border-border/60 bg-background p-7 h-full">
                  <div className="text-5xl font-semibold text-gradient-ember">{p.step}</div>
                  <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
