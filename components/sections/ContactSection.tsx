import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="registro" className="bg-bg-soft py-[clamp(60px,8vw,112px)]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-[clamp(28px,4vw,56px)] px-5 sm:px-8 min-[901px]:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="font-mono-th text-[.72rem] font-medium uppercase tracking-[.14em] text-brand">
            Inscripciones abiertas
          </span>
          <h2 className="my-3.5">Solicita información</h2>
          <p className="mb-6 max-w-[44ch] text-ink-muted">
            Completa el formulario y un asesor de TechHub Perú se pondrá en contacto contigo para
            orientarte sobre el programa que más te conviene.
          </p>
          <ul className="flex flex-col gap-3.5">
            {[
              "Respuesta en menos de 24 horas hábiles.",
              "Sin compromiso de matrícula.",
              "Tus datos no se comparten con terceros.",
            ].map((perk) => (
              <li key={perk} className="flex items-start gap-2.5 text-[.9rem] text-ink-muted">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-[18px] w-[18px] flex-none text-good">
                  <path d="M4 12l5 5L20 6" />
                </svg>
                {perk}
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
