import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-ember">
      <span className="h-px w-8 bg-gradient-ember" />
      {children}
    </div>
  );
}
