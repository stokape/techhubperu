import type { Metadata } from "next";
import Image from "next/image";
import { empresaSolutions, empresaStats } from "@/lib/site.config";
import { Button } from "@/components/ui/Button";
import { EmpresaForm } from "@/components/sections/EmpresaForm";

export const metadata: Metadata = {
  title: "TechHub para empresas",
  description:
    "Programas de capacitación técnica a medida para operadores, contratistas y empresas de telecomunicaciones.",
};

export default function EmpresasPage() {
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
            <span className="font-mono-th text-[.72rem] font-medium uppercase tracking-[.14em] text-accent-2">
              TechHub para empresas
            </span>
            <h1 className="my-4 text-[clamp(2.3rem,1.5rem+3.2vw,3.6rem)] leading-[1.08] font-extrabold text-white">
              Transformamos talento técnico en <span className="text-accent-2">productividad operacional</span>
            </h1>
            <p className="mb-7 max-w-[52ch] text-[clamp(1rem,.94rem+.3vw,1.12rem)] text-white/86">
              Programas a medida para operadores, contratistas y empresas que necesitan desarrollar,
              actualizar o estandarizar las competencias de sus equipos técnicos.
            </p>
            <Button dataEl="empresas.hero.cta.propuesta" href="/empresas#registro-empresa" variant="primary">Solicitar propuesta</Button>
          </div>
        </div>
      </section>

      <section data-el="empresas.stats.section" className="bg-navy text-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-5 px-5 py-[clamp(60px,8vw,112px)] text-center sm:px-8 min-[701px]:grid-cols-4">
          {empresaStats.map((s, i) => (
            <div key={s.label} data-el={`empresas.stats.stat.${i}`}>
              <div className="font-display text-[clamp(2rem,1.5rem+1.6vw,2.9rem)] font-black text-white">{s.value}</div>
              <div className="mt-2 font-mono-th text-[.7rem] uppercase tracking-[.05em] text-white/72">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section data-el="empresas.solutions.section" className="py-[clamp(60px,8vw,112px)]">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="mx-auto mb-[clamp(34px,5vw,52px)] max-w-[680px] text-center">
            <span className="font-mono-th text-[.72rem] font-medium uppercase tracking-[.14em] text-brand">Soluciones</span>
            <h2 className="mt-3">Soluciones para su empresa</h2>
            <p className="mt-3.5 text-ink-muted">Programas adaptables al modelo de sus operaciones.</p>
          </div>
          <div className="grid grid-cols-1 gap-[22px] min-[621px]:grid-cols-2 min-[981px]:grid-cols-3">
            {empresaSolutions.map((s, i) => (
              <div key={s.title} data-el={`empresas.solutions.card.${i}`} className="rounded-2xl border border-border bg-surface p-6 transition-[transform,box-shadow,border-color] duration-250 hover:-translate-y-1 hover:border-border-strong hover:shadow-[var(--shadow-md)]">
                <h3 className="mb-2 text-[1.05rem] font-bold">{s.title}</h3>
                <p className="text-[.88rem] text-ink-muted">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="registro-empresa" data-el="empresas.form.section" className="bg-[linear-gradient(120deg,var(--navy)_0%,var(--navy-2)_100%)] py-[clamp(60px,8vw,112px)] text-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-[clamp(28px,4vw,56px)] px-5 sm:px-8 min-[901px]:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="font-mono-th text-[.72rem] font-medium uppercase tracking-[.14em] text-accent-2">Empieza ahora</span>
            <h2 className="my-3.5 text-white">¿Listo para potenciar a tu equipo?</h2>
            <p className="mb-6 max-w-[48ch] text-white/80">
              Cuéntanos qué necesita tu empresa y te preparamos una propuesta a la medida, sin compromiso.
            </p>
            <ul className="flex flex-col gap-3.5">
              {[
                "Un asesor te contacta en menos de 24 horas hábiles.",
                "Propuesta ajustada al tamaño y objetivos de tu equipo.",
                "Sin compromiso de contratación.",
              ].map((perk) => (
                <li key={perk} className="flex items-start gap-2.5 text-[.9rem] text-white/82">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-[18px] w-[18px] flex-none text-accent-2">
                    <path d="M4 12l5 5L20 6" />
                  </svg>
                  {perk}
                </li>
              ))}
            </ul>
          </div>
          <EmpresaForm />
        </div>
      </section>
    </>
  );
}
