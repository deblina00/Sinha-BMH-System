import type { ReactNode } from "react";

import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <section className="relative isolate overflow-hidden pt-40 pb-20">
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="absolute inset-0 grid-lines opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-5 max-w-4xl text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05]">
            {title}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}