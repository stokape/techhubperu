import { features } from "@/lib/site.config";
import { FlipPhoto } from "@/components/ui/FlipPhoto";

export function MethodologyEditorial() {
  return (
    <section data-el="home.methodology.section" className="py-[clamp(56px,8vw,100px)]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="mb-10 max-w-[640px]">
          <span className="tech-label !text-brand">Metodología</span>
          <h2 className="mt-2 text-[clamp(1.8rem,1.3rem+2vw,2.7rem)] uppercase leading-[1.05]">
            Aprender haciendo no es un concepto. Es el método.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-6">
          {features.map((f, i) => (
            <FlipPhoto
              key={f.slug}
              image={f.image}
              alt={f.title}
              index={String(i + 1).padStart(2, "0")}
              title={f.title}
              description={f.description}
              detail={f.detail}
              dataEl={`home.methodology.item.${f.slug}`}
              className="aspect-[3/4]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
