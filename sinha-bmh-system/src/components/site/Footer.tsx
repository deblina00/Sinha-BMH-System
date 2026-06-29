import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import logoAsset from "@/assets/sinha-bmh-logo.png";

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.16_0.03_255)] text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <Image
            src={logoAsset}
            alt="Sinha BMH Systems"
            width={280}
            height={80}
            priority
            className="h-14 w-auto object-contain"
          />

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-foreground/70">
            Engineering bulk material handling systems for India&rsquo;s heavy industry —
            power, steel, cement, ports and mining.
          </p>
        </div>

        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.24em] text-ember">Company</h4>
          <ul className="mt-5 space-y-3 text-sm text-foreground/75">
            <li><Link href="/about" className="hover:text-ember">About Us</Link></li>
            <li><Link href="/industries" className="hover:text-ember">Industries</Link></li>
            <li><Link href="/gallery" className="hover:text-ember">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-ember">Purchase Orders</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.24em] text-ember">Capabilities</h4>
          <ul className="mt-5 space-y-3 text-sm text-foreground/75">
            <li><Link href="/products" className="hover:text-ember">Products</Link></li>
            <li><Link href="/products" className="hover:text-ember">All Products</Link></li>
            <li><Link href="/contact" className="hover:text-ember">Request Quote</Link></li>
            <li><Link href="/services" className="hover:text-ember">Services</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.24em] text-ember">Contact</h4>
          <ul className="mt-5 space-y-4 text-sm text-foreground/75">
            <li className="flex gap-3"><MapPin size={16} className="mt-0.5 text-ember shrink-0" /> Industrial Area, Ranchi, Jharkhand, India</li>
            <li>
              <a
                href="tel:+913340000000"
                className="flex gap-3 hover:text-ember transition-colors"
              >
                <Phone size={16} className="mt-0.5 text-ember shrink-0" />
                +91 33 4000 0000
              </a>
            </li>
            <li>
              <a
                href="mailto:info@sinhabmh.in"
                className="flex gap-3 hover:text-ember transition-colors"
              >
                <Mail size={16} className="mt-0.5 text-ember shrink-0" />
                info@sinhabmh.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foreground/60">
          <p>© {new Date().getFullYear()} Sinha BMH System India Pvt. Ltd. All rights reserved.</p>
          <p className="uppercase tracking-[0.22em]">ISO 9001:2015 · Made in India</p>
        </div>
      </div>
    </footer>
  );
}
