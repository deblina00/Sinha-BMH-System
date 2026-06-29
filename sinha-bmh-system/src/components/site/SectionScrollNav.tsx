import { useCallback, useEffect, useRef, useState } from "react";

export type ScrollNavItem = { id: string; label: string };

export default function SectionScrollNav({ items }: { items: ScrollNavItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const rafRef = useRef<number | null>(null);

  // Scroll-spy that works on every viewport. Picks the section whose
  // top is closest to (but not past) 35% of the viewport.
  const recompute = useCallback(() => {
    const vh = window.innerHeight;
    const anchor = vh * 0.35;
    let bestId = items[0]?.id ?? "";
    let bestDist = Infinity;
    for (const it of items) {
      const el = document.getElementById(it.id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > vh) continue;
      const dist = Math.abs(rect.top - anchor);
      if (rect.top <= anchor + 1 && dist < bestDist) {
        bestDist = dist;
        bestId = it.id;
      }
    }
    setActive(bestId);
  }, [items]);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        recompute();
      });
    };
    recompute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("orientationchange", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("orientationchange", onScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [recompute]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    const el = document.getElementById(id);
    if (!el) return;

    e.preventDefault();

    const navbarOffset = 180;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      navbarOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setActive(id);
  };

  return (
    <>
      {/* Desktop: vertical rail on the right */}
      <nav
        aria-label="Section navigation"
        className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
      >
        <ul className="pointer-events-auto flex flex-col gap-1">
          {items.map((item, idx) => {
            const isActive = active === item.id;
            const num = String(idx + 1).padStart(2, "0");
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`group flex items-center gap-3 py-1.5 pr-2 pl-3 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ember ${isActive ? "text-ember" : "text-steel hover:text-foreground"
                    }`}
                >
                  <span
                    className={`h-px transition-all ${isActive ? "w-10 bg-ember" : "w-5 bg-steel/50 group-hover:w-7 group-hover:bg-foreground"
                      }`}
                  />
                  <span className="tabular-nums">{num}</span>
                  <span
                    className={`overflow-hidden transition-all duration-300 ${isActive ? "max-w-[160px] opacity-100" : "max-w-0 opacity-0 group-hover:max-w-[160px] group-hover:opacity-100"
                      }`}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile / tablet: horizontal scrollable pill bar pinned bottom */}
      <nav
        aria-label="Section navigation"
        className="fixed inset-x-0 bottom-3 z-40 px-3 lg:hidden"
      >
        <div className="mx-auto max-w-full overflow-x-auto rounded-full border border-border bg-background/85 px-2 py-1.5 shadow-lg backdrop-blur-md [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <ul className="flex items-center gap-1">
            {items.map((item, idx) => {
              const isActive = active === item.id;
              const num = String(idx + 1).padStart(2, "0");
              return (
                <li key={item.id} className="shrink-0">
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleClick(e, item.id)}
                    aria-current={isActive ? "true" : undefined}
                    aria-label={`${num} ${item.label}`}
                    className={`inline-flex min-h-9 items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ember ${isActive
                        ? "bg-ember text-ember-foreground"
                        : "text-steel hover:text-foreground"
                      }`}
                  >
                    <span className="tabular-nums">{num}</span>
                    <span className={isActive ? "inline" : "hidden"}>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
