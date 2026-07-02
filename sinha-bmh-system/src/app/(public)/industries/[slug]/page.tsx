//src/app/(public)/industries/[slug]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ChevronRight } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { INDUSTRIES } from "@/data/industries";

interface Props {
  params: Promise<{ slug: string }> | { slug: string };
}

export async function generateStaticParams() {
  return INDUSTRIES.map((i) => ({
    slug: i.slug,
  }));
}

export default async function IndustryDetailPage({ params }: Props) {
  const resolvedParams = await params;

  const industry = INDUSTRIES.find(
    (i) => i.slug === resolvedParams.slug
  );

  if (!industry) notFound();

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">

        <Link
          href="/industries"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground/60 hover:text-ember transition mb-8"
        >
          <ArrowLeft size={14} />
          Back to Industries
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">

          <Reveal>
            <div className="border border-border/60 bg-surface/40 p-2">
              <Image
                src={industry.image}
                alt={industry.title}
                priority
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>

            <span className="inline-flex rounded-sm border border-ember/30 bg-ember/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ember">
              Industry
            </span>

            <h1 className="mt-5 text-5xl font-bold">
              {industry.title}
            </h1>

            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
              {industry.longDesc}
            </p>

          </Reveal>

        </div>

        <section className="mt-20">

          <h2 className="text-3xl font-bold">
            Typical Applications
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {industry.applications.map((app) => (

              <div
                key={app.title}
                className="border border-border/60 bg-surface/40 p-6"
              >
                <h3 className="font-bold text-xl">
                  {app.title}
                </h3>

                <p className="mt-3 text-sm text-foreground/70">
                  {app.description}
                </p>

              </div>

            ))}

          </div>

        </section>

        <section className="mt-20 bg-brand p-10">

          <div className="flex flex-col md:flex-row justify-between gap-6 items-center">

            <div>

              <h3 className="text-2xl font-bold text-brand-foreground">
                Need a solution for the {industry.title} industry?
              </h3>

              <p className="mt-2 text-brand-foreground/70">
                Our engineering team can recommend the right material handling system.
              </p>

            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-ember px-5 py-3 text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-amber-glow clip-corner transition"
            >
              Contact Us
              <ChevronRight size={14} />
            </Link>

          </div>

        </section>

      </div>
    </main>
  );
}