import Image from "next/image";
import Link from "next/link";
import { programs } from "@/lib/site.config";

// Título corto orientado a la decisión del visitante — distinto del subtítulo
// real del programa (que ya se usa como descripción, debajo).
const actionTitles: Record<string, string> = {
  "programa-tecnico-inicial": "Inicia tu carrera",
  "programa-actualizacion-certificacion": "Actualízate y certifícate",
  "programa-tecnico-experto-in-house": "Especialízate en In House",
};

export function ProgramOrientador() {
  const [progA, progB, progC] = programs;

  return (
    <section data-el="home.orientador.section" className="bg-bg py-[clamp(48px,7vw,88px)]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="mb-8 flex items-end justify-between gap-4 border-b border-border-strong pb-4">
          <h2 className="text-[clamp(1.5rem,1.15rem+1.5vw,2.1rem)] uppercase leading-[1.05]">
            Elige tu punto de partida
          </h2>
          <span className="tech-label hidden sm:inline">3 rutas</span>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-[260px_260px]">
          <OptionCard letter="A" program={progA} className="md:col-start-2 md:row-start-1" />
          <PhotoTile program={progA} className="md:col-start-1 md:row-start-1" />

          <OptionCard letter="B" program={progB} className="md:col-start-1 md:row-start-2" />
          <PhotoTile program={progB} className="md:col-start-2 md:row-start-2" />

          <FeaturedCard letter="C" program={progC} className="md:col-start-3 md:row-start-1 md:row-span-2" />
        </div>
      </div>
    </section>
  );
}

function OptionCard({
  letter,
  program,
  className = "",
}: {
  letter: string;
  program: (typeof programs)[number];
  className?: string;
}) {
  return (
    <Link
      href="/#programas"
      data-el={`home.orientador.option.${program.slug}`}
      className={`group flex flex-col gap-3 rounded-xl border border-border bg-surface p-6 transition-colors hover:border-brand hover:bg-bg-soft sm:p-7 ${className}`}
    >
      <span className="font-display text-[2.2rem] font-black leading-none text-border-strong transition-colors group-hover:text-accent-2">
        {letter}
      </span>
      <h3 className="text-[1.02rem] font-bold uppercase leading-tight text-ink">{actionTitles[program.slug]}</h3>
      <p className="text-[.86rem] leading-relaxed text-ink-muted">{program.subtitle}</p>
      <span className="tech-label mt-auto flex items-center gap-1.5 pt-2 !text-brand">
        Ver programa
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 transition-transform group-hover:translate-x-0.5">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </span>
    </Link>
  );
}

function PhotoTile({ program, className = "" }: { program: (typeof programs)[number]; className?: string }) {
  return (
    <Link
      href="/#programas"
      data-el={`home.orientador.photo.${program.slug}`}
      className={`relative block h-[200px] overflow-hidden rounded-xl md:h-full ${className}`}
    >
      <Image
        src={program.image.thumb}
        alt={program.title}
        fill
        loading="lazy"
        sizes="(max-width: 767px) 100vw, 33vw"
        className="object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,20,41,.75)_0%,transparent_55%)]" />
      <span className="tech-label absolute bottom-3 left-3.5 !text-white/85">{program.duration ?? "—"}</span>
    </Link>
  );
}

function FeaturedCard({
  letter,
  program,
  className = "",
}: {
  letter: string;
  program: (typeof programs)[number];
  className?: string;
}) {
  return (
    <Link
      href="/#programas"
      data-el={`home.orientador.option.${program.slug}`}
      className={`group relative flex min-h-[260px] flex-col justify-end overflow-hidden rounded-xl p-6 text-white sm:p-7 ${className}`}
    >
      <Image
        src={program.image.stage}
        alt={program.title}
        fill
        loading="lazy"
        sizes="(max-width: 767px) 100vw, 33vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,20,41,.92)_0%,rgba(8,20,41,.55)_55%,rgba(8,20,41,.2)_100%)]" />
      <div className="relative">
        <span className="font-display text-[2.2rem] font-black leading-none text-white/40">{letter}</span>
        <h3 className="mt-2 text-[1.05rem] font-bold uppercase leading-tight text-white">{actionTitles[program.slug]}</h3>
        <p className="mt-2 text-[.86rem] leading-relaxed text-white/78">{program.subtitle}</p>
        <span className="tech-label mt-4 flex items-center gap-1.5 !text-accent-2">
          Ver programa
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 transition-transform group-hover:translate-x-0.5">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
