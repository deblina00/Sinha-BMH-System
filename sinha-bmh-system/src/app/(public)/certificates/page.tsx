import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Award, ShieldCheck, FileCheck, ExternalLink } from "lucide-react";
import Link from "next/link";

const CERTIFICATES = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015 Certification",
    issuer: "International Organization for Standardization",
    scope: "Design, Manufacture, Supply, Erection and Commissioning of Bulk Material Handling Systems.",
    status: "Active / Verified",
    code: "Cert No: Q-2409812",
  },
  {
    id: "msme-reg",
    title: "MSME UDYAM Registration",
    issuer: "Ministry of Micro, Small & Medium Enterprises, Govt. of India",
    scope: "Heavy Industrial Manufacturing Machinery & Engineering Services.",
    status: "Registered",
    code: "UDYAM-JH-20-XXXXXXX",
  },
  {
    id: "nsic-cert",
    title: "NSIC Single Point Registration",
    issuer: "National Small Industries Corporation",
    scope: "Government Purchase Programme allocation for bulk equipment design tenders.",
    status: "Verified vendor",
    code: "NSIC/SPR/2025/XYZ",
  },
  {
    id: "safety-award",
    title: "Safety Performance Excellence Award",
    issuer: "Major Integrated Power Client Auditing Board",
    scope: "Successful delivery of complex Coal Handling upgrades under zero-accident constraints.",
    status: "Honored",
    code: "Year: 2024",
  }
];

export default function CertificatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Compliance & Quality"
        title={<>Validated and accredited to <span className="text-gradient-ember">perform.</span></>}
        description="Sinha BMH operates under structured industrial quality controls. View our statutory certifications and credentials."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {CERTIFICATES.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.05}>
                <div className="border border-border/60 bg-surface/40 p-8 rounded-2xl flex flex-col justify-between h-full hover:border-ember/60 transition-colors">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="p-2.5 bg-ember/10 border border-ember/30 rounded-lg text-ember">
                        {c.id.includes("iso") ? <ShieldCheck size={22} /> : <Award size={22} />}
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                        {c.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight mt-6 text-foreground">{c.title}</h3>
                    <p className="text-xs text-foreground/50 mt-1 font-medium">{c.issuer}</p>
                    
                    <div className="h-px bg-border/40 my-4" />
                    
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      <span className="block text-[11px] uppercase tracking-wider text-foreground/40 font-semibold mb-1">Certified Scope</span>
                      {c.scope}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border/30 flex items-center justify-between text-xs text-foreground/60 font-mono">
                    <span>{c.code}</span>
                    <button className="inline-flex items-center gap-1.5 font-sans font-semibold text-ember hover:text-amber-glow transition cursor-not-allowed text-[11px] uppercase tracking-wider">
                      <FileCheck size={14} /> Request Copy
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Quick Notice */}
          <div className="mt-12 p-6 border border-border/40 bg-surface/20 rounded-xl text-center max-w-2xl mx-auto">
            <p className="text-xs text-foreground/60 leading-relaxed">
              Full copies of certification dossiers, credentials validation codes, and financial/statutory safety track records are made available directly to procurement boards and planning engineers upon formal RFQ inquiry submission.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}