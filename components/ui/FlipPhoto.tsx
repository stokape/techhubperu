"use client";

import Image from "next/image";
import { useState } from "react";

type FlipPhotoProps = {
  image: string;
  alt: string;
  index: string;
  title: string;
  description: string;
  detail?: string;
  className?: string;
  sizes?: string;
  dataEl?: string;
};

/**
 * Tarjeta que se voltea (flip 3D) al pasar el mouse, tocar o enfocar con
 * teclado: el frente muestra la foto con el título superpuesto, el reverso
 * revela la descripción completa sobre fondo de marca. Es un <button> real
 * (accesible por teclado, aria-pressed) y respeta prefers-reduced-motion.
 */
export function FlipPhoto({ image, alt, index, title, description, detail, className = "", sizes, dataEl }: FlipPhotoProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      data-el={dataEl}
      onClick={() => setFlipped((f) => !f)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      aria-pressed={flipped}
      aria-label={`${title} — ${description}`}
      className={`group relative block w-full text-left [perspective:1200px] ${className}`}
    >
      <div
        className={`relative h-full w-full transition-transform duration-500 ease-out motion-reduce:transition-none [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Frente: foto + título superpuesto */}
        <div className="flip-face absolute inset-0 overflow-hidden rounded-xl">
          <Image src={image} alt={alt} fill loading="lazy" sizes={sizes ?? "(max-width: 640px) 45vw, 16vw"} className="object-cover transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,20,41,.88)_0%,rgba(8,20,41,.15)_60%,transparent_100%)]" />
          <div className="absolute inset-x-0 bottom-0 p-3.5">
            <span className="tech-label !text-white/60">{index}</span>
            <h3 className="mt-0.5 text-[.86rem] font-bold uppercase leading-tight text-white">{title}</h3>
          </div>
        </div>

        {/* Reverso: descripción completa */}
        <div className="flip-face flip-face-back absolute inset-0 flex flex-col justify-center overflow-hidden rounded-xl bg-navy p-4">
          <span className="tech-label !text-accent-2">{index}</span>
          <h3 className="mt-1 text-[.86rem] font-bold uppercase leading-tight text-white">{title}</h3>
          <p className="mt-2 text-[.78rem] leading-relaxed text-white/85">{description}</p>
          {detail && <p className="mt-1.5 text-[.72rem] leading-relaxed text-white/60">{detail}</p>}
        </div>
      </div>
    </button>
  );
}
