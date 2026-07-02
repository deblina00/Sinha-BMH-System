"use client"

import { useState } from "react";
import { z } from "zod";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";



const schema = z.object({
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional(),
  material: z.string().trim().max(120).optional(),
  capacity: z.string().trim().max(60).optional(),
  description: z.string().trim().max(1500).optional(),
});

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Tell us what you move. <span className="text-gradient-ember">We'll engineer how.</span></>}
        description="Share material, tonnage and a rough site description. Our engineering desk responds within one working day."
      />

      {/* BODY */}
      <section className="py-20 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-[1fr_1.8fr] items-start">
          {/* LEFT — reach us */}
          <Reveal>
            <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-ember">Reach Us</div>
            <h2 className="mt-5 text-3xl sm:text-4xl font-bold leading-[1.1] tracking-tight">
              Direct lines, not call centres.
            </h2>

            <ul className="mt-10 space-y-7 text-sm">
              <ContactRow icon={MapPin} title="Works - I">
                Saraswati Complex, Nimerhati, Makardah, Howrah, West Bengal, 711409
              </ContactRow>
              <ContactRow icon={MapPin} title="Works - II">
                Dakshin Jhapardah, PS: Domjur, Howrah, West bengal, 711405
              </ContactRow>
              <ContactRow icon={MapPin} title="Corporate Office">
                Unit - 2WS5A, 2nd Floor, West Block, Mani Casadona, Action Area - 11F, Netown, Kolkata, 700160
              </ContactRow>
              <ContactRow icon={Phone} title="Phone">
                +91 9831172193
              </ContactRow>
              <ContactRow icon={Mail} title="Email">
                info@sinhabmh.in
              </ContactRow>
            </ul>
          </Reveal>

          {/* RIGHT — form */}
          <Reveal delay={0.08}>
            <form
              className="border border-border/60 bg-background/60 p-8 sm:p-10"
              onSubmit={(e) => {
                e.preventDefault();
                setError(null);
                const fd = new FormData(e.currentTarget);
                const parsed = schema.safeParse(Object.fromEntries(fd));
                if (!parsed.success) {
                  setError(parsed.error.issues[0]?.message ?? "Please check the form.");
                  return;
                }
                setSent(true);
              }}
            >
              <h3 className="text-2xl font-bold tracking-tight">Project enquiry</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-ember">
                All fields are confidential. Add an NDA request in the message if needed.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Company" name="company" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" />
                <Field label="Material (coal, ore, clinker…)" name="material" />
                <Field label="Required capacity (TPH)" name="capacity" />
              </div>

              <div className="mt-5">
                <label className="block text-[11px] font-bold uppercase tracking-[0.22em] text-foreground/70 mb-2">
                  Project description
                </label>
                <textarea
                  name="description"
                  rows={5}
                  maxLength={1500}
                  className="w-full border border-border/70 bg-background/40 px-4 py-3 text-sm focus:border-ember focus:outline-none"
                  placeholder="Site location, scope (greenfield / retrofit / spares), key constraints, target commissioning date…"
                />
              </div>

              {error && <p className="mt-4 text-sm text-destructive">{error}</p>}

              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-foreground/60">
                  By submitting you agree to be contacted about your enquiry.
                </p>
                <button
                  type="submit"
                  disabled={sent}
                  className="inline-flex items-center gap-2 bg-brand px-6 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-brand-foreground hover:opacity-90 transition disabled:opacity-60"
                >
                  {sent ? "Enquiry received" : <>Send Enquiry <ArrowUpRight size={14} /></>}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", required,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-[11px] font-bold uppercase tracking-[0.22em] text-foreground/70 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        maxLength={255}
        className="w-full border border-border/70 bg-background/40 px-4 py-3 text-sm focus:border-ember focus:outline-none"
      />
    </div>
  );
}

function ContactRow({
  icon: Icon, title, children,
}: { icon: React.ComponentType<{ size?: number; className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-ember/40 bg-ember/10 text-ember">
        <Icon size={16} />
      </span>
      <div>
        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-ember">{title}</div>
        <div className="mt-1.5 text-sm text-foreground/85 leading-relaxed">{children}</div>
      </div>
    </li>
  );
}
