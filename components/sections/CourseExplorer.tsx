"use client";

import Image from "next/image";
import { useState } from "react";
import { courses } from "@/lib/site.config";

export function CourseExplorer() {
  const [activeSlug, setActiveSlug] = useState(courses[0].slug);
  const active = courses.find((c) => c.slug === activeSlug) ?? courses[0];

  return (
    <section id="cursos" className="py-[clamp(60px,8vw,112px)]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="mb-[clamp(34px,5vw,52px)] flex items-center justify-center gap-4 text-center uppercase">
          <span className="h-2 w-2 flex-none rounded-full border-[1.5px] border-brand" aria-hidden />
          <h2 className="text-[clamp(1.9rem,1.3rem+2.2vw,2.9rem)] leading-[1.08]">Cursos Destacados</h2>
          <span className="h-2 w-2 flex-none rounded-full border-[1.5px] border-brand" aria-hidden />
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 min-[981px]:grid-cols-[1.35fr_1fr]">
          {/* Vista grande */}
          <div className="relative min-h-[340px] overflow-hidden rounded-2xl shadow-[var(--shadow-lg)] min-[981px]:min-h-[480px]">
            <Image
              key={active.slug}
              src={active.image.stage}
              alt={active.title}
              fill
              sizes="(max-width: 980px) 100vw, 60vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,20,41,.94)_0%,rgba(8,20,41,.62)_42%,rgba(8,20,41,.08)_72%)]" />
            <div className="relative z-[1] flex h-full flex-col justify-end p-[clamp(24px,3.4vw,42px)] text-white">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/28 bg-white/14 px-3 py-1.5 font-mono-th text-[.66rem] uppercase tracking-[.05em] backdrop-blur-sm">
                  Nivel: {active.level}
                </span>
                <span className="rounded-full border border-brand bg-brand px-3 py-1.5 font-mono-th text-[.66rem] uppercase tracking-[.05em]">
                  {active.duration}
                </span>
              </div>
              <h3 className="mb-2.5 text-[clamp(1.5rem,1.15rem+1.5vw,2.15rem)] uppercase leading-[1.08]">
                {active.title}
              </h3>
              <p className="mb-5 max-w-[54ch] text-[.95rem] text-white/86">{active.description}</p>
              <div className="mb-6 flex flex-wrap gap-2.5">
                {active.features.map((f) => (
                  <span
                    key={f}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/22 bg-white/10 px-3.5 py-1.5 text-[.78rem]"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-accent-2">
                      <path d="M4 12l5 5L20 6" />
                    </svg>
                    {f}
                  </span>
                ))}
              </div>
              <a
                href="#registro"
                className="inline-flex w-fit items-center justify-center rounded-lg bg-brand px-7 py-3.5 text-[.86rem] font-bold uppercase tracking-wide text-on-brand transition-colors hover:bg-navy-2"
              >
                Ver programa completo
              </a>
            </div>
          </div>

          {/* Lista de cursos */}
          <div className="flex flex-col gap-2.5 min-[981px]:flex-col max-[980px]:flex-row max-[980px]:overflow-x-auto max-[980px]:pb-1.5" role="listbox" aria-label="Cursos">
            {courses.map((course) => {
              const isActive = course.slug === activeSlug;
              return (
                <button
                  key={course.slug}
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => setActiveSlug(course.slug)}
                  className={`flex w-full flex-none items-center gap-3.5 rounded-xl border p-2.5 text-left transition-colors max-[980px]:w-[220px] ${
                    isActive ? "border-brand bg-brand/[.07]" : "border-border hover:border-border-strong"
                  }`}
                >
                  <div className="relative h-[54px] w-[54px] flex-none overflow-hidden rounded-lg">
                    <Image src={course.image.thumb} alt="" fill sizes="54px" className="object-cover" />
                  </div>
                  <span className="min-w-0 flex-1">
                    <span className={`mb-0.5 block text-[.9rem] font-bold uppercase tracking-[.01em] transition-colors ${isActive ? "text-brand" : ""}`}>
                      {course.title}
                    </span>
                    <span className="font-mono-th text-[.68rem] tracking-[.03em] text-ink-faint">{course.duration}</span>
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-4 w-4 flex-none transition-[transform,color] ${isActive ? "translate-x-0.5 text-brand" : "text-ink-faint"}`}
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              );
            })}
          </div>
        </div>

        <p className="mt-5 text-center font-mono-th text-[.7rem] text-ink-faint">
          * Catálogo y horas confirmados por TechHub Perú.
        </p>
      </div>
    </section>
  );
}
