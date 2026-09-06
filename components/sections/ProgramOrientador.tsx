import Link from "next/link";

const options = [
  {
    coord: "A",
    title: "Inicia tu carrera",
    description: "Da tus primeros pasos en telecomunicaciones, sin experiencia previa.",
    programSlug: "programa-tecnico-inicial",
  },
  {
    coord: "B",
    title: "Actualízate y certifícate",
    description: "Ya trabajas en el sector y buscas reforzar y certificar tus competencias.",
    programSlug: "programa-actualizacion-certificacion",
  },
  {
    coord: "C",
    title: "Especialízate en In House",
    description: "Domina servicios de telecomunicaciones dentro del hogar, de punta a punta.",
    programSlug: "programa-tecnico-experto-in-house",
  },
];

export function ProgramOrientador() {
  return (
    <section data-el="home.orientador.section" className="bg-bg py-[clamp(48px,7vw,88px)]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="mb-8 flex items-end justify-between gap-4 border-b border-border-strong pb-4">
          <h2 className="text-[clamp(1.5rem,1.15rem+1.5vw,2.1rem)] uppercase leading-[1.05]">
            Elige tu punto de partida
          </h2>
          <span className="tech-label hidden sm:inline">3 rutas</span>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {options.map((o) => (
            <Link
              key={o.coord}
              href="/#programas"
              data-el={`home.orientador.option.${o.programSlug}`}
              className="group flex flex-col gap-3 bg-surface p-6 transition-colors hover:bg-bg-soft sm:p-7"
            >
              <span className="font-display text-[2.2rem] font-black leading-none text-border-strong transition-colors group-hover:text-accent-2">
                {o.coord}
              </span>
              <h3 className="text-[1.02rem] font-bold uppercase leading-tight text-ink">{o.title}</h3>
              <p className="text-[.86rem] leading-relaxed text-ink-muted">{o.description}</p>
              <span className="tech-label mt-auto flex items-center gap-1.5 pt-2 !text-brand">
                Ver programa
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 transition-transform group-hover:translate-x-0.5">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
