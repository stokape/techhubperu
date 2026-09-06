"use client";

import Image from "next/image";
import { useState } from "react";

type FlipPhotoProps = {
  image: string;
  alt: string;
  back: string;
  className?: string;
  sizes?: string;
  dataEl?: string;
};

/**
 * Foto que se voltea (flip 3D) al pasar el mouse o al tocar/hacer clic,
 * revelando un texto complementario en el reverso. Funciona con teclado
 * (es un <button>) y respeta prefers-reduced-motion (transición instantánea).
 */
export function FlipPhoto({ image, alt, back, className = "", sizes, dataEl }: FlipPhotoProps) {
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
      aria-label={alt}
      className={`relative block w-full text-left [perspective:1200px] ${className}`}
    >
      <div
        className={`relative h-full w-full transition-transform duration-500 ease-out motion-reduce:transition-none [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div className="flip-face absolute inset-0 overflow-hidden rounded-lg">
          <Image src={image} alt={alt} fill loading="lazy" sizes={sizes ?? "(max-width: 640px) 100vw, 260px"} className="object-cover" />
        </div>
        <div className="flip-face flip-face-back absolute inset-0 flex items-center overflow-hidden rounded-lg bg-navy p-4">
          <p className="text-[.82rem] leading-relaxed text-white/92">{back}</p>
        </div>
      </div>
    </button>
  );
}
