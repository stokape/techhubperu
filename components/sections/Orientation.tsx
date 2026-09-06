import { siteConfig } from "@/lib/site.config";

export function Orientation() {
  const message = encodeURIComponent("Hola TechHub, no sé qué programa elegir, ¿me pueden orientar?");
  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`;

  return (
    <section data-el="home.orientation.section" className="bg-bg-soft py-[clamp(48px,7vw,80px)]">
      <div className="mx-auto flex max-w-[820px] flex-col items-center gap-5 px-5 text-center sm:px-8">
        <span className="tech-label !text-brand">Orientación</span>
        <h2 className="text-[clamp(1.5rem,1.2rem+1.4vw,2.1rem)] uppercase leading-[1.08]">
          ¿No sabes qué programa elegir?
        </h2>
        <p className="max-w-[52ch] text-[.96rem] text-ink-muted">
          Te orientamos sin compromiso para encontrar el programa adecuado según tu experiencia y objetivo
          profesional.
        </p>
        <a
          data-el="home.orientation.whatsapp"
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-lg bg-[#25D366] px-6 py-3.5 text-[.86rem] font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.77.46 3.45 1.34 4.94L2 22l5.29-1.39a9.86 9.86 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.02c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.13 1.01-2.42.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.27.36-.22.6-.13.24.09 1.55.73 1.82.86.27.13.44.2.51.31.07.11.07.63-.17 1.3Z" />
          </svg>
          Hablar por WhatsApp
        </a>
      </div>
    </section>
  );
}
