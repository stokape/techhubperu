import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden text-white before:absolute before:inset-0 before:z-[1] before:bg-[linear-gradient(90deg,rgba(8,20,41,.96)_0%,rgba(8,20,41,.86)_32%,rgba(8,20,41,.42)_62%,rgba(8,20,41,.12)_100%)] max-[760px]:before:bg-[linear-gradient(180deg,rgba(8,20,41,.55)_0%,rgba(8,20,41,.94)_78%)]">
      <Image
        src="/images/hero/hero-tecnico.jpg"
        alt="Técnico de telecomunicaciones trabajando en una torre, con el skyline de la ciudad de fondo"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right max-[760px]:object-[center_20%]"
      />
      <div className="relative z-[2] mx-auto flex min-h-[clamp(420px,58vw,600px)] max-w-[1280px] items-center px-5 py-[clamp(64px,11vw,132px)] sm:px-8 max-[760px]:min-h-0 max-[760px]:items-end max-[760px]:py-[180px_40px]">
        <div className="max-w-[600px]">
          <span className="font-mono-th text-[.72rem] font-medium uppercase tracking-[.14em] text-accent-2">
            Formación especializada en telecomunicaciones
          </span>
          <h1 className="my-4 text-[clamp(2.3rem,1.5rem+3.2vw,3.6rem)] leading-[1.08] font-extrabold text-white">
            Donde nacen los expertos en telecomunicaciones
          </h1>
          <p className="mb-7 max-w-[52ch] text-[clamp(1rem,.94rem+.3vw,1.12rem)] text-white/86">
            Formación especializada, práctica y certificada para impulsar tu carrera en el sector de telecomunicaciones.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/#programas" variant="primary">Ver programas</Button>
            <Button href="/#registro" variant="ghost-invert">Solicitar información</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
