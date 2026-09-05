import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="bg-navy text-center text-white">
      <div className="mx-auto max-w-[720px] px-5 py-[clamp(60px,8vw,112px)] sm:px-8">
        <span className="font-mono-th text-[.72rem] font-medium uppercase tracking-[.14em] text-accent-2">
          Empieza ahora
        </span>
        <h2 className="my-3.5 text-[clamp(2rem,1.5rem+2vw,3rem)] leading-[1.08] text-white normal-case">
          Conecta tu talento con el futuro de las telecomunicaciones
        </h2>
        <p className="mb-7 text-white/78">
          Desarrolla las competencias que demanda una industria cada vez más conectada.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button dataEl="home.finalcta.cta.programas" href="/#programas" variant="primary">Explorar programas</Button>
          <Button dataEl="home.finalcta.cta.registro" href="/#registro" variant="ghost-invert">Hablar con TechHub</Button>
        </div>
      </div>
    </section>
  );
}
