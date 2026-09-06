import { Button } from "@/components/ui/Button";
import { HeroInteractive } from "./HeroInteractive";

export function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[minmax(0,40%)_1fr]">
      <div className="order-2 flex flex-col justify-center bg-bg px-5 py-10 sm:px-8 sm:py-14 lg:order-1 lg:px-10 lg:py-0 xl:px-14">
        <div className="mb-6 flex items-center gap-3">
          <span className="tech-label !text-brand">MOD.00</span>
          <span className="h-px flex-1 bg-border-strong" aria-hidden />
          <span className="tech-label">FORMACIÓN ESPECIALIZADA</span>
        </div>
        <h1 className="text-[clamp(2.1rem,1.5rem+2.6vw,3.4rem)] font-black uppercase leading-[1.02] text-ink">
          Conecta tu talento con el futuro de las telecomunicaciones
        </h1>
        <p className="mt-5 max-w-[46ch] text-[1.02rem] leading-relaxed text-ink-muted">
          Formación presencial, práctica y certificada para desarrollar las competencias que exige el trabajo real.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button dataEl="home.hero.cta.programas" href="/#programas" variant="primary">
            Explorar programas
          </Button>
          <Button dataEl="home.hero.cta.registro" href="/#registro" variant="outline">
            Solicitar información
          </Button>
        </div>
      </div>
      <div className="order-1 lg:order-2">
        <HeroInteractive />
      </div>
    </section>
  );
}
