//src/app/(public/home-content.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, BadgeCheck, Cog, Factory, HardHat, Quote, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import heroImage from "@/assets/hero-industrial.jpg";
import { PRODUCTS } from "@/data/products";
import SectionScrollNav from "@/components/site/SectionScrollNav";

const sections = [
  { id: "hero", label: "Intro" },
  { id: "about", label: "Who we are" },
  { id: "products", label: "Products" },
  { id: "services", label: "Services" },
  { id: "industries", label: "Industries" },
  { id: "testimonial", label: "Testimonial" },
  { id: "clients", label: "Clients" },
  { id: "contact", label: "Get in touch" },


];

const STATS = [
  ["25+", "Years in industry"],
  ["180+", "Projects delivered"],
  ["40+", "Active clients"],
  ["9", "States served"],
];

const SERVICE_TABS = ["All", "Engineering", "Manufacturing", "Execution", "Support"] as const;
type ServiceTab = (typeof SERVICE_TABS)[number];

const SERVICES: { title: string; body: string; tag: ServiceTab; icon: typeof Cog }[] = [
  { title: "EPC & Engineering", body: "Concept to commissioning — process design, structural & mechanical engineering.", tag: "Engineering", icon: Cog },
  { title: "Manufacturing", body: "In-house fabrication of conveyors, chutes, hoppers and structural assemblies.", tag: "Manufacturing", icon: Factory },
  { title: "Erection & Commissioning", body: "Site execution, alignment, no-load and load trials with documented handover.", tag: "Execution", icon: HardHat },
  { title: "O&M Support", body: "Spares, retrofits, AMC and 24×7 field support to keep plants running.", tag: "Support", icon: ShieldCheck },
];

const INDUSTRIES = ["Power", "Steel", "Cement", "Ports & Logistics", "Mining", "Fertilizers"];

const CLIENTS = ["TATA STEEL", "JSW", "SAIL", "ACC", "ULTRATECH", "NTPC", "ADANI", "VEDANTA", "HINDALCO", "JINDAL"];

const TESTIMONIALS = [
  {
    quote:
      "Sinha BMH delivered our coal handling upgrade two weeks ahead of schedule. Build quality and site discipline were outstanding.",
    by: "Project Director, Thermal Power Major",
  },
  {
    quote:
      "Their engineering team understood our process constraints from day one. A genuine partner, not a vendor.",
    by: "Plant Head, Integrated Steel Plant",
  },
];

function SectionNumber({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-ember">
      <span>{n}</span>
      <span className="h-px w-6 bg-ember/60" />
      <span className="text-foreground/70">{label}</span>
    </div>
  );
}


export default function HomeContent() {
  const [tab, setTab] = useState<ServiceTab>("All");
  const filtered = SERVICES.filter((s) => tab === "All" || s.tag === tab);

  return (
    <>

      <SectionScrollNav items={sections} />


      {/* HERO */}
      <section id="hero" className="relative isolate overflow-hidden pt-[148px] md:pt-[176px] pb-0">
        <div className="absolute inset-0 -z-10">
          <Image src={heroImage} alt="Sinha BMH Systems Industrial Infrastructure Background" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand/40 via-background/85 to-background" />
          <div className="absolute inset-0 grid-lines opacity-40" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 rounded-sm border border-ember/40 bg-ember/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-ember">
              <span className="h-1.5 w-1.5 bg-ember" /> Engineering since 1998
            </span>
          </motion.div>

          <motion.h1
            className="mt-8 max-w-5xl text-5xl sm:text-7xl lg:text-[5.75rem] font-bold leading-[0.98] tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Moving the <span className="text-outline-ember italic">materials</span>
            <br /> that build India.
          </motion.h1>

          <motion.p
            className="mt-8 max-w-2xl text-base sm:text-lg text-foreground/75 leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Sinha BMH designs, manufactures and commissions bulk material handling systems for
            power, steel, cement, ports and mining — engineered for the punishing demands of heavy industry.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >

            <Link href="/products" className="quote-btn group inline-flex items-center gap-2 bg-ember px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-foreground transition hover:bg-amber-glow clip-corner">
              Explore Capabilities <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link href="/contact" className="inline-flex items-center gap-2 border border-foreground/30 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground hover:border-ember hover:text-ember transition">
              Talk to an Engineer
            </Link>
          </motion.div>
        </div>

        {/* Stats strip */}
        <div className="relative border-t border-white/15 bg-black/50 backdrop-blur-md">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/50">
              {STATS.map(([n, l]) => (
                <div key={l} className="px-6 py-8">
                  <div className="text-4xl sm:text-5xl font-bold text-ember">
                    {n}
                  </div>

                  <div className="mt-2 text-[11px] uppercase tracking-[0.24em] text-white/70">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 01 — WHO WE ARE */}
      <section id="about" className="py-24 bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-[1.1fr_1fr] items-start">
          <Reveal>
            <SectionNumber n="01" label="Who we are" />
            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Two decades of solving heavy-industry handling problems.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-foreground/80 leading-relaxed">
              Sinha BMH System India Pvt. Ltd. is a full-service bulk material handling company headquartered in Ranchi.
              We engineer, fabricate and commission systems that move millions of tonnes of coal, ore, clinker and
              aggregate every year.
            </p>
            <p className="mt-5 text-foreground/70 leading-relaxed">
              From a single feeder to a complete plant package — including civil, structural, mechanical, electrical
              and instrumentation — we own the outcome.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-4 text-sm">
              {["ISO 9001:2015", "MSME Registered", "In-house Design", "PAN-India Execution"].map((b) => (
                <li key={b} className="flex items-center gap-2 text-foreground/80">
                  <BadgeCheck size={16} className="text-ember" /> {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 02 — PRODUCT CATEGORIES */}
      <section id="products" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <SectionNumber n="02" label="Product Categories" />
              <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                Built for continuous duty.
              </h2>
            </Reveal>
            <Link href="/products" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-foreground hover:text-ember">
              All Products <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {/* Added .slice(0, 3) here to limit the displayed loop components */}
            {PRODUCTS.slice(0, 3).map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <article className="group border border-border/60 bg-surface/60 hover:border-ember transition-colors">
                  <div className="aspect-[4/3] overflow-hidden border-b border-border/60">
                    <Image src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold">{p.title}</h3>
                    <p className="mt-2 text-sm text-foreground/70">{p.desc}</p>
                    <Link href={`/products/${p.slug}`} className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-ember">
                      Details <ArrowRight size={12} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — SERVICES */}
      <section id="services" className="py-24 bg-brand/25 border-y border-border/60 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] items-start">
            <Reveal>
              <SectionNumber n="03" label="Services" />
              <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                End-to-end ownership, on the ground.
              </h2>
            </Reveal>
            <div className="flex flex-wrap gap-2 lg:justify-end lg:pt-12">
              {SERVICE_TABS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] border transition ${tab === t
                    ? "bg-ember border-ember text-primary-foreground"
                    : "border-foreground/30 text-foreground/80 hover:border-ember hover:text-ember"
                    }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-px bg-border/40 sm:grid-cols-2 lg:grid-cols-4 border border-border/40">
            {filtered.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="h-full bg-background/40 p-6">
                  <s.icon size={26} className="text-ember" />
                  <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{s.body}</p>
                  <div className="mt-6 text-[11px] font-bold uppercase tracking-[0.22em] text-ember">{s.tag}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — INDUSTRIES */}
      <section id="industries" className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-[1fr_1.4fr] items-start">
          <Reveal>
            <SectionNumber n="04" label="Industries We Serve" />
            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Where our systems run.
            </h2>
            <Link href="/industries" className="mt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-ember">
              Clients & Partners <ArrowRight size={12} />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-10">
              {INDUSTRIES.map((name, i) => (
                <div key={name} className="flex items-start gap-4 border-l border-border/60 pl-4 hover:border-ember transition-colors">
                  <span className="text-2xl font-bold text-ember tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span className="pt-1 text-lg font-semibold">{name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section id="clients" className="py-14 border-y border-border/60 bg-surface/40 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.32em] text-foreground/60">
            Trusted by industry leaders
          </p>
        </div>
        <div className="mt-8 relative">
          <div className="flex marquee gap-16 whitespace-nowrap">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span key={`${c}-${i}`} className="text-xl font-bold tracking-[0.18em] text-foreground/40">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — TESTIMONIALS */}
      <section id="testimonial" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionNumber n="05" label="What Clients Say" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <figure className="border border-border/60 bg-surface/40 p-8">
                  <Quote size={28} className="text-ember" />
                  <blockquote className="mt-5 text-lg leading-relaxed text-foreground/90">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 text-[11px] font-bold uppercase tracking-[0.22em] text-foreground/60">
                    — {t.by}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-brand">
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-ember">Start a Project</div>
            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-brand-foreground">
              Have a handling problem?<br />
              Send us the tonnage,<br />
              we&rsquo;ll send a solution.
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-3 bg-ember px-7 py-4 text-xs font-bold uppercase tracking-[0.22em] text-primary-foreground hover:opacity-90 transition"
            >
              Request Quotation <ArrowUpRight size={14} />
              <span className="absolute right-0 top-0 h-0 w-0 translate-x-full border-y-[28px] border-l-[18px] border-y-transparent border-l-ember" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
