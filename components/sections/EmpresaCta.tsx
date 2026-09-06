import { Button } from "@/components/ui/Button";

export function EmpresaCta() {
  return (
    <section data-el="home.empresa-cta.section" className="bg-navy py-[clamp(48px,7vw,80px)] text-white">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-6 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[46ch]">
          <span className="tech-label !text-accent-2">Para empresas</span>
          <h2 className="mt-2 text-[clamp(1.5rem,1.2rem+1.4vw,2.1rem)] uppercase leading-[1.08] text-white">
            Formamos equipos que impulsan negocios
          </h2>
          <p className="mt-3 text-[.94rem] text-white/78">
            Programas a medida para operadores, contratistas y empresas que necesitan desarrollar o
            estandarizar las competencias técnicas de sus equipos.
          </p>
        </div>
        <Button dataEl="home.empresa-cta.cta" href="/empresas#registro-empresa" variant="ghost-invert" className="flex-none">
          Solicitar propuesta
        </Button>
      </div>
    </section>
  );
}
