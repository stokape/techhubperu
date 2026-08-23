const fiberCode = [
  { n: "01", name: "Azul", hex: "#2A5BD7" },
  { n: "02", name: "Naranja", hex: "#E8650F" },
  { n: "03", name: "Verde", hex: "#149A52" },
  { n: "04", name: "Marrón", hex: "#8B5A2B" },
  { n: "05", name: "Gris", hex: "#8A93A6" },
  { n: "06", name: "Blanco", hex: "#F5F5F0" },
  { n: "07", name: "Rojo", hex: "#D62828" },
  { n: "08", name: "Negro", hex: "#14161C" },
  { n: "09", name: "Amarillo", hex: "#C99400" },
  { n: "10", name: "Violeta", hex: "#7C4DDA" },
  { n: "11", name: "Rosa", hex: "#E85D9E" },
  { n: "12", name: "Aqua", hex: "#0FA9B8" },
];

export function About() {
  return (
    <section id="nosotros" className="py-[clamp(60px,8vw,112px)]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-[clamp(32px,6vw,80px)] px-5 sm:px-8 min-[981px]:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="font-mono-th text-[.72rem] font-medium uppercase tracking-[.14em] text-brand">
            Quiénes somos
          </span>
          <h2 className="mb-5 mt-3 text-[clamp(2rem,1.3rem+2.6vw,3.2rem)] leading-[1.05] uppercase">
            Formamos talento para conectar el futuro
          </h2>
          <p className="mb-4 max-w-[56ch] text-[1.03rem] text-ink-muted">
            TechHub Perú nace con el propósito de reducir la brecha entre la formación técnica y las
            competencias que exige la operación real de las telecomunicaciones.
          </p>
          <p className="max-w-[56ch] text-[1.03rem] text-ink-muted">
            Nuestros programas combinan conocimiento, práctica, seguridad y tecnología para preparar
            especialistas capaces de integrarse y desarrollarse profesionalmente en una industria en
            constante evolución.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border">
          <div className="flex items-baseline justify-between gap-3 border-b border-border bg-surface-2 px-5 py-4 font-mono-th text-[.68rem] uppercase tracking-[.06em] text-ink-faint">
            <span>Ficha técnica</span>
            <b className="font-medium text-ink-muted">Código de colores · fibra óptica</b>
          </div>
          <div className="grid grid-cols-1 min-[561px]:grid-cols-2">
            {fiberCode.map((c, i) => (
              <span
                key={c.n}
                className={`flex items-center gap-2.5 border-b border-border px-5 py-2.5 text-[.86rem] text-ink-muted ${
                  i % 2 === 0 ? "min-[561px]:border-r" : ""
                }`}
              >
                <span className="font-mono-th text-[.72rem] text-ink-faint">{c.n}</span>
                <span className="h-3.5 w-3.5 flex-none rounded border border-border" style={{ background: c.hex }} />
                {c.name}
              </span>
            ))}
          </div>
          <div className="px-5 py-3.5 text-[.78rem] text-ink-faint">
            Secuencia estándar TIA-598-C, usada para identificar hebras en cables multifibra durante la
            instalación y el empalme.
          </div>
        </div>
      </div>
    </section>
  );
}
