"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { programs, type Program } from "@/lib/site.config";
import { Modal } from "@/components/ui/Modal";

export function ProgramsSection() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const active = programs.find((p) => p.slug === activeSlug) ?? null;

  return (
    <section id="programas" data-el="home.programs.section" className="py-[clamp(60px,8vw,112px)]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="mb-[clamp(34px,5vw,52px)] flex items-center justify-center gap-4 text-center uppercase">
          <span className="h-2 w-2 flex-none rounded-full border-[1.5px] border-brand" aria-hidden />
          <h2 className="text-[clamp(1.9rem,1.3rem+2.2vw,2.9rem)] leading-[1.08]">Programas Destacados</h2>
          <span className="h-2 w-2 flex-none rounded-full border-[1.5px] border-brand" aria-hidden />
        </div>

        <div className="grid grid-cols-1 gap-6 min-[721px]:grid-cols-2 min-[1101px]:grid-cols-3">
          {programs.map((program) => (
            <button
              key={program.slug}
              type="button"
              data-el={`home.programs.card.${program.slug}`}
              onClick={() => setActiveSlug(program.slug)}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface text-left shadow-[var(--shadow-sm)] transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-brand hover:shadow-[var(--shadow-md)]"
            >
              <div className="relative h-[190px] w-full flex-none overflow-hidden">
                <Image
                  src={program.image.stage}
                  alt={program.title}
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,20,41,.9)_0%,rgba(8,20,41,.35)_55%,rgba(8,20,41,.05)_100%)]" />
                <span className="absolute bottom-3 left-3.5 rounded-full border border-brand bg-brand px-3 py-1.5 font-mono-th text-[.66rem] uppercase tracking-[.05em] text-white">
                  {program.duration ?? "Duración a confirmar"}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-1.5 text-[1.08rem] uppercase leading-[1.12]">{program.title}</h3>
                <p className="mb-4 text-[.86rem] text-ink-muted">{program.subtitle}</p>

                <div className="mt-auto flex flex-col gap-2 pt-2">
                  <Link
                    href="/#registro"
                    data-el={`home.programs.card.${program.slug}.cta-registro`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex w-full items-center justify-center rounded-lg bg-brand px-4 py-2.5 text-[.8rem] font-bold uppercase tracking-wide text-on-brand transition-colors hover:bg-navy-2"
                  >
                    Solicitar información
                  </Link>
                  <span className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-border-strong px-4 py-2.5 text-[.8rem] font-bold uppercase tracking-wide text-ink transition-colors group-hover:border-brand group-hover:text-brand">
                    Ver contenido del programa
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5">
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <p className="mt-5 text-center font-mono-th text-[.7rem] text-ink-faint">
          * Catálogo, contenido y horas confirmados por TechHub Perú.
        </p>
      </div>

      <ProgramModal program={active} onClose={() => setActiveSlug(null)} />
    </section>
  );
}

function ProgramModal({ program, onClose }: { program: Program | null; onClose: () => void }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Modal open={program !== null} onClose={onClose} labelledBy="program-modal-title" dataEl={program ? `home.programs.modal.${program.slug}` : undefined}>
      {program && (
        <>
          <div className="relative h-[180px] w-full overflow-hidden sm:h-[220px]">
            <Image src={program.image.stage} alt={program.title} fill sizes="720px" className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,20,41,.94)_0%,rgba(8,20,41,.55)_55%,rgba(8,20,41,.15)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
              <span className="mb-2 inline-block rounded-full border border-brand bg-brand px-3 py-1.5 font-mono-th text-[.66rem] uppercase tracking-[.05em]">
                {program.duration ?? "Duración a confirmar"}
              </span>
              <h3 id="program-modal-title" className="text-[clamp(1.3rem,1.05rem+1vw,1.7rem)] uppercase leading-[1.1]">
                {program.title}
              </h3>
              <p className="mt-1 text-[.9rem] text-white/86">{program.subtitle}</p>
            </div>
          </div>

          <div className="flex flex-col gap-7 p-5 sm:p-7">
            <p className="text-[.95rem] text-ink-muted">{program.description}</p>

            <section>
              <h4 className="mb-2.5 text-[.98rem] font-bold uppercase tracking-[.01em] text-brand">¿Este programa es para ti?</h4>
              <p className="mb-3 text-[.88rem] text-ink-muted">{program.audienceIntro}</p>
              <ul className="flex flex-col gap-1.5">
                {program.audience.map((a) => (
                  <ChecklistItem key={a}>{a}</ChecklistItem>
                ))}
              </ul>
            </section>

            <section>
              <h4 className="mb-2.5 text-[.98rem] font-bold uppercase tracking-[.01em] text-brand">¿Qué aprenderás a hacer?</h4>
              <ul className="flex flex-col gap-2.5">
                {program.skills.map((s) => (
                  <ChecklistItem key={s.title}>
                    <span className="font-semibold text-ink">{s.title}:</span> {s.description}
                  </ChecklistItem>
                ))}
              </ul>
            </section>

            <section>
              <h4 className="mb-2.5 text-[.98rem] font-bold uppercase tracking-[.01em] text-brand">Contenido del programa</h4>
              <div className="flex flex-wrap gap-2">
                {program.content.map((c) => (
                  <span key={c} className="rounded-full border border-border-strong bg-bg-soft px-3.5 py-1.5 text-[.8rem] text-ink">
                    {c}
                  </span>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-border bg-bg-soft p-4">
              <h4 className="mb-1.5 text-[.98rem] font-bold uppercase tracking-[.01em] text-brand">¿Qué recibirás al aprobar?</h4>
              <p className="text-[.88rem] text-ink-muted">{program.certification.text}</p>
              <p className="mt-1 text-[.8rem] text-ink-faint">Requisito para obtenerlo: {program.certification.requirement}</p>
            </section>

            <section>
              <h4 className="mb-2.5 text-[.98rem] font-bold uppercase tracking-[.01em] text-brand">Preguntas frecuentes</h4>
              <div className="flex flex-col gap-2">
                {program.faq.map((item, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div key={item.q} className="rounded-lg border border-border">
                      <button
                        type="button"
                        data-el={`home.programs.modal.${program.slug}.faq.${i}`}
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-[.86rem] font-semibold text-ink"
                      >
                        {item.q}
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`h-4 w-4 flex-none text-ink-faint transition-transform ${isOpen ? "rotate-180" : ""}`}
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </button>
                      {isOpen && <p className="px-4 pb-3.5 text-[.85rem] text-ink-muted">{item.a}</p>}
                    </div>
                  );
                })}
              </div>
            </section>

            <Link
              href="/#registro"
              data-el={`home.programs.modal.${program.slug}.cta-registro`}
              onClick={onClose}
              className="inline-flex w-full items-center justify-center rounded-lg bg-brand py-3.5 text-[.86rem] font-bold uppercase tracking-wide text-on-brand transition-colors hover:bg-navy-2"
            >
              Solicitar información
            </Link>
          </div>
        </>
      )}
    </Modal>
  );
}

function ChecklistItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-[.88rem] text-ink-muted">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 flex-none text-accent-2">
        <path d="M4 12l5 5L20 6" />
      </svg>
      <span>{children}</span>
    </li>
  );
}
