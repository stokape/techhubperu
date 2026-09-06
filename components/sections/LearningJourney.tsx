const stages = [
  { n: "01", label: "Fundamentos", description: "Bases teóricas de redes, fibra óptica, HFC y Wi-Fi." },
  { n: "02", label: "Laboratorio", description: "Práctica con equipos reales antes de salir a campo." },
  { n: "03", label: "Campo", description: "Instalación y diagnóstico en condiciones reales de trabajo." },
  { n: "04", label: "Certificación", description: "Evaluación final y constancia digital verificable con QR." },
];

export function LearningJourney() {
  return (
    <section data-el="home.journey.section" className="bg-graphite py-[clamp(56px,8vw,100px)] text-white">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <span className="tech-label !text-accent-2">Recorrido de aprendizaje</span>
        <h2 className="mt-2 max-w-[22ch] text-[clamp(1.7rem,1.3rem+1.8vw,2.5rem)] uppercase leading-[1.05] text-white">
          De la teoría a la torre, en cuatro tramos
        </h2>

        <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-4 sm:gap-6">
          <div
            className="absolute left-0 right-0 top-[9px] hidden h-px bg-[repeating-linear-gradient(90deg,rgba(255,255,255,.28)_0,rgba(255,255,255,.28)_6px,transparent_6px,transparent_14px)] sm:block"
            aria-hidden
          />
          {stages.map((s) => (
            <div key={s.n} className="relative flex flex-col gap-3">
              <div className="flex items-center gap-3 sm:block">
                <span className="relative z-[1] flex h-[19px] w-[19px] flex-none items-center justify-center rounded-full border-2 border-accent-2 bg-graphite">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
                </span>
                <span className="tech-label sm:mt-3 sm:block !text-white/50">TRAMO {s.n}</span>
              </div>
              <h3 className="text-[1.05rem] font-bold uppercase leading-tight text-white">{s.label}</h3>
              <p className="max-w-[26ch] text-[.86rem] leading-relaxed text-white/70">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
