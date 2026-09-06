import { features } from "@/lib/site.config";
import { FlipPhoto } from "@/components/ui/FlipPhoto";

export function MethodologyEditorial() {
  return (
    <section data-el="home.methodology.section" className="py-[clamp(56px,8vw,100px)]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="mb-12 max-w-[640px]">
          <span className="tech-label !text-brand">Metodología</span>
          <h2 className="mt-2 text-[clamp(1.8rem,1.3rem+2vw,2.7rem)] uppercase leading-[1.05]">
            Aprender haciendo no es un concepto. Es el método.
          </h2>
        </div>

        <div className="flex flex-col">
          {features.map((f, i) => {
            const reversed = i % 2 === 1;
            return (
              <article
                key={f.slug}
                data-el={`home.methodology.item.${f.slug}`}
                className="grid grid-cols-1 items-center gap-6 border-b border-dashed border-border-strong py-8 first:pt-0 last:border-b-0 sm:grid-cols-[auto_1fr_minmax(0,260px)] sm:gap-10"
              >
                <span
                  className={`font-display text-[3rem] font-black leading-none text-border-strong sm:text-[3.6rem] ${
                    reversed ? "sm:order-3" : "sm:order-1"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="sm:order-2">
                  <h3 className="mb-2 text-[1.15rem] font-bold uppercase leading-tight text-ink">{f.title}</h3>
                  <p className="max-w-[48ch] text-[.92rem] leading-relaxed text-ink-muted">{f.description}</p>
                </div>
                <FlipPhoto
                  image={f.image}
                  alt={f.title}
                  back={f.detail}
                  dataEl={`home.methodology.item.${f.slug}.photo`}
                  className={`aspect-[4/3] sm:aspect-[3/2] sm:w-[260px] ${reversed ? "sm:order-1" : "sm:order-3"}`}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
