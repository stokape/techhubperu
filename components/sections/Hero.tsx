import { Button } from "@/components/ui/Button";
import { HeroInteractive } from "./HeroInteractive";

function HeroCopy() {
  return (
    <div className="max-w-[560px]">
      <h1 className="text-[clamp(2.1rem,1.5rem+2.6vw,3.4rem)] font-black uppercase leading-[1.02] text-white">
        Conecta tu talento con el futuro de las telecomunicaciones
      </h1>
      <p className="mt-5 max-w-[46ch] text-[1.02rem] leading-relaxed text-white/86">
        Formación presencial, práctica y certificada para desarrollar las competencias que exige el trabajo real.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button dataEl="home.hero.cta.programas" href="/#programas" variant="primary">
          Explorar programas
        </Button>
        <Button dataEl="home.hero.cta.registro" href="/#registro" variant="ghost-invert">
          Solicitar información
        </Button>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative">
      <HeroInteractive>
        <HeroCopy />
      </HeroInteractive>
      {/* Hasta "lg": el overlay se oculta dentro de HeroInteractive en ese
          rango, así que el texto va aparte, debajo de la foto. */}
      <div className="bg-navy px-5 py-10 sm:px-8 lg:hidden">
        <HeroCopy />
      </div>
    </section>
  );
}
