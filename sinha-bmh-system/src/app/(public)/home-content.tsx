//src/app/(public/home-content.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Cog,
  Factory,
  HardHat,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import heroImage from "@/assets/hero-industrial.jpg";
import { PRODUCTS } from "@/data/products";
import SectionScrollNav from "@/components/site/SectionScrollNav";
import powerImg from "@/assets/industry-power.jpg";
import steelImg from "@/assets/industry-steel.jpeg";
import cementImg from "@/assets/industry-cement.jpg";
import portsImg from "@/assets/industry-ports.jpg";
import miningImg from "@/assets/industry-mining.jpg";
import fertilizerImg from "@/assets/industry-fertilizer.jpeg";

import tataSteelLogo from "@/assets/clients/Adani_logo.png";
import jswLogo from "@/assets/clients/Cspdcl_logo.png";
import sailLogo from "@/assets/clients/Essar_logo.png";
import accLogo from "@/assets/clients/Ntpc_logo.png";
import ultratechLogo from "@/assets/clients/PPA-Logo.png";
import ntpcLogo from "@/assets/clients/Rashmi-logo.png";
import adaniLogo from "@/assets/clients/Secl_logo.png";
import vedantaLogo from "@/assets/clients/Thriveny_logo.png";
import hindalcoLogo from "@/assets/clients/Vedanta_logo.png";
import jindalLogo from "@/assets/clients/aditya-birla-group-logo.png";

import testimonial1 from "@/assets/testimonials/testimonial1.png";
import testimonial2 from "@/assets/testimonials/testimonial2.png";
import testimonial3 from "@/assets/testimonials/testimonial3.png";
import testimonial4 from "@/assets/testimonials/testimonial4.png";
import testimonial5 from "@/assets/testimonials/testimonial5.png";
import testimonial6 from "@/assets/testimonials/testimonial6.png";

const sections = [
  { id: "hero", label: "Intro" },
  { id: "about", label: "Who we are" },
  { id: "products", label: "Products" },
  { id: "services", label: "Services" },
  { id: "industries", label: "Industries" },
  { id: "clients", label: "Clients" },
  { id: "testimonial", label: "Testimonial" },
  { id: "contact", label: "Get in touch" },


];

const STATS = [
  ["99% +", "on Time Delivery"],
  ["250+", "Clients Served"],
  ["300 mtrs", "Conveying System/Day"],
  ["250 tons", "Heavy Fabrication & Equipment/Month"],
  ["1,00,000 +", "Sq.Ft. of Covered Production Area"],
  ["2,00,000 +", "Sq.Ft. of Uncovered Area"],
];

const SERVICE_TABS = ["All", "Engineering", "Manufacturing", "Execution", "Support"] as const;
type ServiceTab = (typeof SERVICE_TABS)[number];

const SERVICES: { title: string; body: string; tag: ServiceTab; icon: typeof Cog }[] = [
  { title: "EPC & Engineering", body: "Concept to commissioning — process design, structural & mechanical engineering.", tag: "Engineering", icon: Cog },
  { title: "Manufacturing", body: "In-house manufacturing & fabrication of conveyor spares, technological structures &  fabricated equipment.", tag: "Manufacturing", icon: Factory },
  { title: "Erection & Commissioning", body: "Supervision of Turnkey Installation, Erection & Commissioning.", tag: "Execution", icon: HardHat },
  { title: "O&M Support", body: "Spares, retrofits, AMC and Comprehensive after sales support.", tag: "Support", icon: ShieldCheck },
];

const INDUSTRIES = [
  {
    name: "Power",
    image: powerImg,
  },
  {
    name: "Steel",
    image: steelImg,
  },
  {
    name: "Cement",
    image: cementImg,
  },
  {
    name: "Ports",
    image: portsImg,
  },
  {
    name: "Mining",
    image: miningImg,
  },
  {
    name: "Fertilizers",
    image: fertilizerImg,
  },
];

const CLIENTS = [
  { name: "TATA STEEL", logo: tataSteelLogo },
  { name: "JSW", logo: jswLogo },
  { name: "SAIL", logo: sailLogo },
  { name: "ACC", logo: accLogo },
  { name: "UltraTech", logo: ultratechLogo },
  { name: "NTPC", logo: ntpcLogo },
  { name: "Adani", logo: adaniLogo },
  { name: "Vedanta", logo: vedantaLogo },
  { name: "Hindalco", logo: hindalcoLogo },
  { name: "Jindal", logo: jindalLogo },
];

const TESTIMONIALS = [
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
  testimonial5,
  testimonial6,
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

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const visibleTestimonials = Array.from({ length: 3 }, (_, i) => {
    return TESTIMONIALS[(testimonialIndex + i) % TESTIMONIALS.length];
  });

  const nextTestimonials = () => {
    setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonials = () => {
    setTestimonialIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };


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
              <span className="h-1.5 w-1.5 bg-ember" /> Engineering since 2005
            </span>
          </motion.div>

          {/* <motion.h1
            className="mt-8 max-w-5xl text-5xl sm:text-7xl lg:text-[5.75rem] font-bold leading-[0.98] tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Two Decades of <span className="text-outline-ember italic">Bulk Material</span>
            <br /> Handling Excellence.
          </motion.h1> */}

          <motion.h1
            className="mt-8 max-w-5xl text-5xl sm:text-7xl lg:text-[5.75rem] font-bold leading-[0.98] tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="whitespace-nowrap">
              20 Years of <span className="text-outline-ember italic">Bulk Material</span>
            </span>
            <br />
            Handling Excellence.
          </motion.h1>

          <motion.p
            className="mt-8 max-w-3xl text-base sm:text-lg text-foreground/75 leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Sinha BMH designs, manufactures and commissions bulk material handling systems for
            power, steel, cement, ports and mining — engineered for the punishing demands of heavy industry. */}
            Sinha BMH Systems has evolved into an ISO 9001:2015 certified, vertically integrated engineering powerhouse engaged in the design, engineering, manufacturing, and supervison of erection and commissioning of complete mechanical conveyor systems.
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
              Talk to an Expert
            </Link>
          </motion.div>
        </div>

        {/* Stats strip */}
        <div className="relative border-t border-white/15 bg-black/50 backdrop-blur-md">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-6 divide-x divide-white/50">
              {/* {STATS.map(([n, l]) => (
                <div key={l} className="px-6 py-8">
                  <div className="text-4xl sm:text-5xl font-bold text-ember">
                    {n}
                  </div>

                  <div className="mt-2 text-[11px] uppercase tracking-[0.24em] text-white/70">
                    {l}
                  </div>
                </div>
              ))} */}
              {STATS.map(([n, l], i) => (
                <div
                  key={i}
                  className="px-6 py-8"
                >
                  {/* <div>{i + 1}</div> */}

                  <div className="text-3xl font-bold text-ember">
                    {n}
                  </div>

                  <div className="mt-6">{l}</div>
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
            <SectionNumber n="02" label="Who we are" />
            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Conveyor Systems and Material Handling Solutions Provider.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-foreground/80 leading-relaxed">
              {/* Sinha BMH System India Pvt. Ltd. is a full-service bulk material handling company headquartered in Ranchi.
              We engineer, fabricate and commission systems that move millions of tonnes of coal, ore, clinker and
              aggregate every year. */}
              We manage the entire bulk handling asset lifecycle — from conceptual design and precision manufacturing of critical conveyor spares, to heavy structural fabrication and commissioning supervision.
            </p>
            <p className="mt-5 text-foreground/70 leading-relaxed">
              {/* From a single feeder to a complete plant package — including civil, structural, mechanical, electrical
              and instrumentation — we own the outcome. */}
              Trusted by global leaders across the steel, cement, power, mining, and port sectors, our mechanical packages are engineered for one uncompromising purpose: continuous and high-efficiency operations.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-4 text-sm">
              {["CEMA/IS Compliant", "MSME Registered", "In-house Design", "Precision Manufacturing", "Turnkey Delivery", "PAN-India Execution",].map((b) => (
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
              <SectionNumber n="03" label="Product Categories" />
              <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                {/* Built for continuous duty. */}
                Our Core Offerings.
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
              <SectionNumber n="04" label="Services" />
              <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                {/* End-to-end ownership, on the ground. */}
                End-to-end ownership.
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
                {/* <div className="h-full bg-background/40 p-6">
                  <s.icon size={26} className="text-ember" />
                  <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{s.body}</p>
                  <div className="mt-6 text-[11px] font-bold uppercase tracking-[0.22em] text-ember">{s.tag}</div>
                </div> */}
                <div className="flex h-full min-h-[270px] flex-col bg-background/40 p-6">
                  <s.icon size={26} className="text-ember" />

                  <h3 className="mt-5 text-lg font-bold">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                    {s.body}
                  </p>

                  <div className="mt-auto pt-6 text-[11px] font-bold uppercase tracking-[0.22em] text-ember">
                    {s.tag}
                  </div>
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
            <SectionNumber n="05" label="Industries" />
            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Where Our Products Operate.
            </h2>
            <Link href="/industries" className="mt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-ember">
              Explore More <ArrowRight size={12} />
            </Link>
          </Reveal>

          {/* <Reveal delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-10">
              {INDUSTRIES.map((name, i) => (
                <div key={name} className="flex items-start gap-4 border-l border-border/60 pl-4 hover:border-ember transition-colors">
                  <span className="text-2xl font-bold text-ember tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span className="pt-1 text-lg font-semibold">{name}</span>
                </div>
              ))}
            </div>
          </Reveal> */}
          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {INDUSTRIES.map((industry, i) => (
                <div
                  key={industry.name}
                  className="group overflow-hidden rounded-lg border border-border/60 bg-surface hover:border-ember transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <span className="absolute top-4 left-4 text-sm font-bold text-ember">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <h3 className="absolute bottom-5 left-5 text-xl font-bold text-white">
                      {industry.name}
                    </h3>
                  </div>
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
            {[...CLIENTS, ...CLIENTS].map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="relative h-20 w-44 flex-shrink-0"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — TESTIMONIALS */}
      <section id="testimonial" className="py-24 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">

          <SectionNumber n="06" label="What Clients Say" />

          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold">
            Client Certificates
          </h2>

          <div className="relative mt-16">

            {/* LEFT */}
            <button
              onClick={prevTestimonials}
              className="absolute -left-16 top-1/2 z-20 -translate-y-1/2 h-14 w-14 rounded-full border border-border bg-background/90 backdrop-blur flex items-center justify-center hover:border-ember hover:text-ember transition"
            >
              <ChevronLeft size={26} />
            </button>

            {/* RIGHT */}
            <button
              onClick={nextTestimonials}
              className="absolute -right-16 top-1/2 z-20 -translate-y-1/2 h-14 w-14 rounded-full border border-border bg-background/90 backdrop-blur flex items-center justify-center hover:border-ember hover:text-ember transition"
            >
              <ChevronRight size={26} />
            </button>

            <div className="grid gap-8 md:grid-cols-3">
              {visibleTestimonials.map((img, index) => (
                <Reveal
                  key={`${testimonialIndex}-${index}`}
                  delay={index * 0.08}
                >
                  <div className="group overflow-hidden rounded-lg border border-border/60 bg-white hover:border-ember transition">

                    <Image
                      src={img}
                      alt={`Certificate ${index + 1}`}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                  </div>
                </Reveal>
              ))}
            </div>

            {/* DOTS */}

            <div className="mt-10 flex justify-center gap-3">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${i === testimonialIndex
                    ? "bg-ember w-8"
                    : "bg-white/30 hover:bg-white/60"
                    }`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-brand">
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-ember">Start a Project</div>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight text-brand-foreground">
              You want to Convey Bulk Materials ?<br />
              Send us your requirement,<br />
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
