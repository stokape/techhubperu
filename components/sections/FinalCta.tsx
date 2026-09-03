import { Button } from "@/components/ui/Button";

const strandColors = [
  "#2A5BD7", "#E8650F", "#149A52", "#8B5A2B", "#8A93A6", "#F5F5F0",
  "#D62828", "#14161C", "#C99400", "#7C4DDA", "#E85D9E", "#0FA9B8",
];

export function FinalCta() {
  return (
    <section className="bg-navy text-center text-white">
      <div className="flex h-[5px]">
        {strandColors.map((c) => (
          <i key={c} className="flex-1" style={{ background: c }} />
        ))}
      </div>
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
          <Button href="/#programas" variant="primary">Explorar programas</Button>
          <Button href="/#registro" variant="ghost-invert">Hablar con TechHub</Button>
        </div>
      </div>
    </section>
  );
}
