"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Layer = "campo" | "equipos" | "certificacion";

type Hotspot = {
  id: string;
  layer: Layer;
  x: number;
  y: number;
  coord: string;
  title: string;
  description: string;
};

const hotspots: Hotspot[] = [
  {
    id: "equipos",
    layer: "equipos",
    x: 83,
    y: 18,
    coord: "N.01 / RF",
    title: "Equipos reales",
    description: "Trabajas con antenas, conectores y herramientas de medición usadas en la industria — no simuladores.",
  },
  {
    id: "campo",
    layer: "campo",
    x: 71,
    y: 47,
    coord: "N.02 / EPP",
    title: "Seguridad en campo",
    description: "Aprendes los procedimientos y el equipo de protección personal que exige una instalación real en altura.",
  },
  {
    id: "practica",
    layer: "campo",
    x: 80,
    y: 82,
    coord: "N.03 / OPS",
    title: "Aplicación práctica",
    description: "Cada competencia se practica en campo, sobre la torre y el equipo real, no solo en el aula.",
  },
  {
    id: "certificacion",
    layer: "certificacion",
    x: 54,
    y: 34,
    coord: "N.04 / QR",
    title: "Certificación digital",
    description: "Al aprobar, recibes una constancia verificable con un solo escaneo QR.",
  },
];

const layers: { id: Layer; label: string }[] = [
  { id: "campo", label: "Campo" },
  { id: "equipos", label: "Equipos" },
  { id: "certificacion", label: "Certificación" },
];

export function HeroInteractive({ children }: { children?: React.ReactNode }) {
  const [activeLayer, setActiveLayer] = useState<Layer | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  // No dispara re-render a propósito: solo lo lee el handler de mousemove,
  // nunca el JSX, así que un ref evita un setState innecesario en el efecto.
  const canParallaxRef = useRef(false);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    canParallaxRef.current = !coarse && !reduced;
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenId(null);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!canParallaxRef.current || !imgWrapRef.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const maxShift = 10;
    imgWrapRef.current.style.transform = `translate(${(-px * maxShift).toFixed(2)}px, ${(-py * maxShift).toFixed(2)}px) scale(1.04)`;
  }

  function onMouseLeave() {
    if (imgWrapRef.current) imgWrapRef.current.style.transform = "";
  }

  const openHotspot = hotspots.find((h) => h.id === openId) ?? null;

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/10] lg:aspect-[21/9]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-kenburns absolute inset-[-14px]">
          <div
            ref={imgWrapRef}
            className="absolute inset-[-12px] transition-transform duration-300 ease-out will-change-transform"
          >
            <Image
              src="/images/hero/hero-tecnico.jpg"
              alt="Técnico de telecomunicaciones asegurado con arnés, escalando una torre sobre el skyline de la ciudad"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[78%_32%]"
            />
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 bg-[linear-gradient(0deg,rgba(10,20,68,.92)_0%,rgba(10,20,68,.55)_38%,rgba(10,20,68,.15)_65%)] sm:bg-[linear-gradient(90deg,rgba(10,20,68,.92)_0%,rgba(10,20,68,.5)_42%,rgba(10,20,68,.08)_72%)]"
        aria-hidden
      />

      {/* Hasta "lg" el texto vive aparte, debajo de la foto (ver Hero.tsx) —
          con 4 puntos repartidos en toda la altura no hay ancho suficiente
          para superponer texto sin taparlos antes de ese punto. */}
      {children && (
        <div className="absolute inset-0 z-[1] hidden items-center lg:flex">
          <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">{children}</div>
        </div>
      )}

      {hotspots.map((h) => {
          const dimmed = activeLayer !== null && activeLayer !== h.layer;
          const isOpen = openId === h.id;
          return (
            <button
              key={h.id}
              type="button"
              data-el={`home.hero.hotspot.${h.id}`}
              aria-expanded={isOpen}
              aria-label={h.title}
              onClick={() => setOpenId(h.id)}
              onFocus={() => setOpenId(h.id)}
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
              className={`group absolute -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${dimmed ? "opacity-25" : "opacity-100"}`}
            >
              {!isOpen && (
                <span
                  className="absolute inset-0 -m-2.5 rounded-full border border-accent-2/50 motion-safe:animate-ping"
                  aria-hidden
                />
              )}
              <span className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent-2 bg-navy/70 text-accent-2 backdrop-blur-sm transition-transform group-hover:scale-110">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
                </svg>
              </span>
              <span className="tech-label absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap !text-white/75">
                {h.coord}
              </span>
            </button>
          );
        })}

      {openHotspot && (
        <div
          role="dialog"
          aria-label={openHotspot.title}
          className="absolute z-10 w-[calc(100%-2.5rem)] max-w-[260px] rounded-lg border border-accent-2/40 bg-navy/95 p-4 text-white shadow-[var(--shadow-lg)] backdrop-blur"
          style={
            openHotspot.y > 55
              ? {
                  left: `clamp(1.25rem, ${openHotspot.x}%, calc(100% - 280px))`,
                  bottom: `calc(100% - ${openHotspot.y - 8}%)`,
                }
              : {
                  left: `clamp(1.25rem, ${openHotspot.x}%, calc(100% - 280px))`,
                  top: `min(${openHotspot.y + 10}%, 68%)`,
                }
          }
        >
          <button
            type="button"
            onClick={() => setOpenId(null)}
            aria-label="Cerrar"
            className="absolute right-2.5 top-2.5 flex h-5 w-5 items-center justify-center text-white/60 hover:text-white"
          >
            ×
          </button>
          <span className="tech-label !text-accent-2">{openHotspot.coord}</span>
          <h4 className="mt-1 text-[.92rem] font-bold uppercase leading-tight">{openHotspot.title}</h4>
          <p className="mt-1.5 text-[.8rem] leading-relaxed text-white/78">{openHotspot.description}</p>
        </div>
      )}

      <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5 sm:bottom-6 sm:left-auto sm:right-6">
        {layers.map((l) => (
          <button
            key={l.id}
            type="button"
            data-el={`home.hero.layer.${l.id}`}
            aria-pressed={activeLayer === l.id}
            onClick={() => setActiveLayer(activeLayer === l.id ? null : l.id)}
            className={`tech-label rounded-full border px-3 py-1.5 backdrop-blur-sm transition-colors !text-[.66rem] ${
              activeLayer === l.id
                ? "border-accent-2 bg-accent-2/20 !text-white"
                : "border-white/30 !text-white/70 hover:border-white/60"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>
    </div>
  );
}
