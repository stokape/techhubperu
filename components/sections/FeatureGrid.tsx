import Image from "next/image";
import { features } from "@/lib/site.config";

export function FeatureGrid() {
  return (
    <section aria-label="Diferenciales" className="py-[clamp(60px,8vw,112px)]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="mb-[clamp(34px,5vw,52px)] max-w-[680px]">
          <span className="font-mono-th text-[.72rem] font-medium uppercase tracking-[.14em] text-brand">
            Formación real
          </span>
          <h2 className="mt-3 text-[clamp(2rem,1.3rem+2.6vw,3.2rem)] leading-[1.05] uppercase">
            Así se aprende en TechHub
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-[22px] min-[621px]:grid-cols-2 min-[981px]:grid-cols-3">
          {features.map((feature, i) => (
            <article
              key={feature.slug}
              className="overflow-hidden rounded-2xl border border-border bg-surface transition-[transform,box-shadow,border-color] duration-250 hover:-translate-y-1 hover:border-border-strong hover:shadow-[var(--shadow-md)]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={feature.image}
                  alt=""
                  fill
                  sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,20,41,.5)_0%,transparent_55%)]" />
                <span className="absolute left-3.5 top-3 font-mono-th text-[.68rem] tracking-[.05em] text-white/65">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-5">
                <h3 className="mb-1.5 text-[.96rem] font-bold uppercase tracking-[.01em]">{feature.title}</h3>
                <p className="text-[.85rem] leading-relaxed text-ink-muted">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
