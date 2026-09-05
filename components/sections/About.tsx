export function About() {
  return (
    <section id="nosotros" data-el="home.about.section" className="py-[clamp(60px,8vw,112px)]">
      <div className="mx-auto max-w-[760px] px-5 text-center sm:px-8">
        <span className="font-mono-th text-[.72rem] font-medium uppercase tracking-[.14em] text-brand">
          Quiénes somos
        </span>
        <h2 className="mb-5 mt-3 text-[clamp(2rem,1.3rem+2.6vw,3.2rem)] leading-[1.05] uppercase">
          Formamos talento para conectar el futuro
        </h2>
        <p className="mb-4 text-[1.03rem] text-ink-muted">
          TechHub Perú nace con el propósito de reducir la brecha entre la formación técnica y las
          competencias que exige la operación real de las telecomunicaciones.
        </p>
        <p className="text-[1.03rem] text-ink-muted">
          Nuestros programas combinan conocimiento, práctica, seguridad y tecnología para preparar
          especialistas capaces de integrarse y desarrollarse profesionalmente en una industria en
          constante evolución.
        </p>
      </div>
    </section>
  );
}
