import type { Metadata } from "next";
import Image from "next/image";
import { jobsStats } from "@/lib/site.config";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "TechHub Jobs",
  description: "El ecosistema que conecta talento técnico certificado con empresas de telecomunicaciones.",
};

const steps = [
  { n: "01", title: "Capacitación", desc: "Formación técnica orientada a la industria." },
  { n: "02", title: "Evaluación", desc: "Diagnóstico de competencias adquiridas." },
  { n: "03", title: "Certificación", desc: "Constancia verificable en línea." },
  { n: "04", title: "Empleabilidad", desc: "Conexión con empresas del sector." },
];

export default function JobsPage() {
  return (
    <>
      <section className="relative overflow-hidden text-white before:absolute before:inset-0 before:z-[1] before:bg-[linear-gradient(90deg,rgba(8,20,41,.96)_0%,rgba(8,20,41,.86)_32%,rgba(8,20,41,.42)_62%,rgba(8,20,41,.12)_100%)] max-[760px]:before:bg-[linear-gradient(180deg,rgba(8,20,41,.55)_0%,rgba(8,20,41,.94)_78%)]">
        <Image
          src="/images/hero/hero-tecnico.jpg"
          alt="Técnico de telecomunicaciones trabajando en una torre, con el skyline de la ciudad de fondo"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right max-[760px]:object-[center_20%]"
        />
        <div className="relative z-[2] mx-auto flex min-h-[clamp(420px,58vw,600px)] max-w-[1280px] items-center px-5 py-[clamp(64px,11vw,132px)] sm:px-8">
          <div className="max-w-[600px]">
            <span className="font-mono-th text-[.72rem] font-medium uppercase tracking-[.14em] text-accent-2">TechHub Jobs</span>
            <h1 className="my-4 text-[clamp(2.3rem,1.5rem+3.2vw,3.6rem)] leading-[1.08] font-extrabold text-white">
              Formamos. Certificamos. <span className="text-accent-2">Conectamos.</span>
            </h1>
            <p className="mb-7 max-w-[52ch] text-[clamp(1rem,.94rem+.3vw,1.12rem)] text-white/86">
              El ecosistema que impulsa tu talento y tu futuro en telecomunicaciones.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button dataEl="jobs.hero.cta.capacitarme" href="#perfil" variant="primary">Quiero capacitarme</Button>
              <Button dataEl="jobs.hero.cta.empresa" href="#vacante" variant="ghost-invert">Soy empresa</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface min-[821px]:flex-row">
            {steps.map((s, i) => (
              <div key={s.n} data-el={`jobs.steps.step.${i}`} className={`relative flex-1 p-5 ${i < steps.length - 1 ? "border-b border-border min-[821px]:border-b-0 min-[821px]:border-r" : ""}`}>
                <span className="font-mono-th text-[.7rem] tracking-[.06em] text-brand">{s.n}</span>
                <h4 className="my-2 text-[.98rem] font-bold">{s.title}</h4>
                <p className="text-[.82rem] text-ink-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[clamp(60px,8vw,112px)]">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="mx-auto mb-[clamp(34px,5vw,52px)] max-w-[680px] text-center">
            <span className="font-mono-th text-[.72rem] font-medium uppercase tracking-[.14em] text-brand">El ecosistema</span>
            <h2 className="mt-3">TechHub Jobs</h2>
            <p className="mt-3.5 text-ink-muted">Conectamos talento certificado con empresas que necesitan cubrir vacantes técnicas.</p>
          </div>
          <div className="grid grid-cols-1 items-start gap-[clamp(24px,4vw,48px)] min-[821px]:grid-cols-2">
            <div id="perfil" data-el="jobs.perfil.section" className="rounded-3xl border border-border bg-surface p-[clamp(26px,4vw,36px)] shadow-[var(--shadow-sm)]">
              <h3 className="mb-5 text-[1.3rem] font-bold text-brand">Para estudiantes y técnicos</h3>
              <ul className="mb-6 flex flex-col gap-3">
                {["Perfil profesional verificado", "Acceso a alertas laborales", "Visibilidad ante empresas del sector", "Crecimiento profesional continuo"].map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[.92rem] text-ink-muted">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-[18px] w-[18px] flex-none text-good"><path d="M4 12l5 5L20 6" /></svg>
                    {i}
                  </li>
                ))}
              </ul>
              <Button dataEl="jobs.perfil.cta" href="/#registro" variant="primary" className="w-full">Crear mi perfil</Button>
            </div>
            <div id="vacante" data-el="jobs.vacante.section" className="rounded-3xl border border-border bg-surface p-[clamp(26px,4vw,36px)] shadow-[var(--shadow-sm)]">
              <h3 className="mb-5 text-[1.3rem] font-bold text-brand">Para empresas</h3>
              <ul className="mb-6 flex flex-col gap-3">
                {["Publica tus vacantes técnicas", "Encuentra talento certificado", "Evaluación de competencias incluida", "Reducción de tiempos de selección"].map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[.92rem] text-ink-muted">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-[18px] w-[18px] flex-none text-good"><path d="M4 12l5 5L20 6" /></svg>
                    {i}
                  </li>
                ))}
              </ul>
              <Button dataEl="jobs.vacante.cta" href="/empresas#registro-empresa" variant="outline" className="w-full">Publicar vacante</Button>
            </div>
          </div>
        </div>
      </section>

      <section data-el="jobs.stats.section" className="bg-navy text-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-5 px-5 py-[clamp(60px,8vw,112px)] text-center sm:px-8 min-[701px]:grid-cols-4">
          {jobsStats.map((s, i) => (
            <div key={s.label} data-el={`jobs.stats.stat.${i}`}>
              <div className="font-display text-[clamp(2rem,1.5rem+1.6vw,2.9rem)] font-black text-white">{s.value}</div>
              <div className="mt-2 font-mono-th text-[.7rem] uppercase tracking-[.05em] text-white/72">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
