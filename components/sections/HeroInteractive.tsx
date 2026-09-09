"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Foto de hero con dos capas de movimiento: un Ken Burns ambiental en loop
 * (zoom + paneo lento) y un parallax sutil que sigue al cursor, en capas
 * separadas para que no se pisen entre sí. Ninguna de las dos corre si el
 * usuario prefiere menos movimiento (ver .hero-kenburns y canParallaxRef).
 */
export function HeroInteractive({ children }: { children?: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const canParallaxRef = useRef(false);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    canParallaxRef.current = !coarse && !reduced;
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

      {children && (
        <div className="absolute inset-0 z-[1] flex items-center">
          <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">{children}</div>
        </div>
      )}
    </div>
  );
}
