"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail, Menu, Phone, ShieldCheck, X } from "lucide-react";
import logoAsset from "@/assets/sinha-bmh-logo.png";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/services", label: "Services" },
  { href: "/purchase-orders", label: "Purchase-Orders" },
  { href: "/gallery", label: "Gallery" },
  { href: "/careers", label: "Career" },
  { href: "/contact", label: "Contact" },
] as const;

const NEWS = [
  "ISO 9001:2015 recertified — quality systems audited across Ranchi works",
  "New 2,400 TPH coal handling package commissioned at Eastern thermal site",
  "Stacker-Reclaimer order book grows 32% YoY across power & port segments",
  "Sinha BMH joins MSME Sustainable (ZED) Bronze certification programme",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top utility strip */}
      <div className="hidden md:block bg-[oklch(0.12_0.03_255)] text-foreground/85 text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-6 uppercase tracking-[0.18em]">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-ember" /> ISO 9001:2015 Certified</span>
            <span className="text-foreground/40">·</span>
            <span className="flex items-center gap-2">
              <ShieldCheck size={12} className="text-ember" /> MSME Registered</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+913340000000" className="flex items-center gap-2 hover:text-ember">
              <Phone size={12} /> +91 33 4000 0000</a>
            <a href="mailto:info@sinhabmh.in" className="flex items-center gap-2 hover:text-ember">
              <Mail size={12} /> info@sinhabmh.in</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-colors duration-300 ${scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border/60" : "bg-background/60 backdrop-blur-md border-b border-border/30"
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3.5">
          {/* <Link
            href="/"
            className="shrink-0 transition-opacity hover:opacity-90"
            // className="shrink-0 transition-opacity hover:opacity-90 bg-white px-4 py-2 rounded-md"
          >
            <Image
              src={logoAsset}
              alt="Sinha BMH Systems"
              width={280}
              height={80}
              priority
              className="h-14 w-auto object-contain "
            />
          </Link> */}

          <Link
            href="/"
            className="shrink-0 transition-all hover:opacity-95 bg-white/95 backdrop-blur px-4 py-2.5 rounded-md shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/20 flex items-center justify-center"
          >
            <Image
              src={logoAsset}
              alt="Sinha BMH Systems"
              width={280}
              height={80}
              priority
              className="h-10 w-auto object-contain" // Slightly reduced height to account for the new padding frame
            />
          </Link>
          <nav className="hidden flex-1 lg:flex items-center justify-center gap-8">
            {NAV.map((n) => {
              const isActive =
                n.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(n.href);

              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className="relative py-2 text-[15px] font-medium text-foreground/80 transition-colors hover:text-foreground"
                >
                  <span>{n.label}</span>

                  {isActive && (
                    <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-ember" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 bg-brand px-7 py-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-foreground transition hover:opacity-90 clip-corner"
          >
            Get a Quote
            <ArrowUpRight size={16} />

            <span className="absolute right-0 top-0 h-0 w-0 translate-x-full border-y-[24px] border-l-[18px] border-y-transparent border-l-brand" />
          </Link> */}

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="quote-btn group inline-flex items-center gap-2 bg-brand px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-foreground transition hover:opacity-90"
            >
              Get a Quote
              <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <button
            className="relative lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/60 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Latest news ticker */}
      <div className="hidden md:block border-b border-border/60 bg-surface/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-stretch overflow-hidden">
          <div className="relative flex shrink-0 items-center bg-brand px-6 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-foreground">
            Latest News

            <span className="absolute right-0 top-0 h-0 w-0 translate-x-full border-y-[22px] border-l-[16px] border-y-transparent border-l-brand" />
          </div>

          <div className="relative flex-1 overflow-hidden">
            <div className="flex marquee-fast gap-14 whitespace-nowrap py-3 pl-8 text-sm text-foreground/80">
              {[...NEWS, ...NEWS].map((n, i) => (
                <span key={i} className="flex items-center gap-4">
                  <span className="h-1.5 w-1.5 rounded-sm bg-ember" />
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col px-6 py-4">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground/80 hover:text-foreground border-b border-border/40 last:border-0"
              >
                {n.label}
              </Link>
            ))}
            {/* <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-sm bg-brand px-5 py-3 text-sm font-semibold uppercase tracking-widest text-brand-foreground"
            >
              Get a Quote
            </Link> */}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 bg-brand px-4 py-3 text-xs font-semibold uppercase tracking-wider text-brand-foreground clip-corner"
            >
              Get a Quote
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
