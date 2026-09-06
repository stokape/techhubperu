import Image from "next/image";

export function About() {
  return (
    <section id="nosotros" data-el="home.about.section" className="py-[clamp(56px,8vw,100px)]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
        <div>
          <span className="tech-label !text-brand">Quiénes somos</span>
          <h2 className="mb-5 mt-3 text-[clamp(2rem,1.3rem+2.6vw,3.2rem)] leading-[1.05] uppercase">
            Formamos talento para conectar el futuro
          </h2>
          <p className="mb-4 max-w-[52ch] text-[1.03rem] text-ink-muted">
            TechHub Perú nace con el propósito de reducir la brecha entre la formación técnica y las
            competencias que exige la operación real de las telecomunicaciones.
          </p>
          <p className="max-w-[52ch] text-[1.03rem] text-ink-muted">
            Nuestros programas combinan conocimiento, práctica, seguridad y tecnología para preparar
            especialistas capaces de integrarse y desarrollarse profesionalmente en una industria en
            constante evolución.
          </p>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl sm:aspect-[3/4]">
            <Image
              src="/images/features/laboratorio.jpg"
              alt="Laboratorio teórico-práctico de TechHub Perú"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <span className="tech-label absolute -bottom-4 left-4 rounded-md border border-border-strong bg-surface px-3 py-1.5 shadow-[var(--shadow-sm)]">
            LAB.01 — Formación teórico-práctica
          </span>
        </div>
      </div>
    </section>
  );
}
