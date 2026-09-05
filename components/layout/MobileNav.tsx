"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { siteConfig } from "@/lib/site.config";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[60] flex flex-col bg-bg px-6 pt-5 pb-10 transition-[opacity,transform,visibility] duration-250 sm:px-10 ${
        open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
      }`}
    >
      <div className="mb-8 flex items-center justify-between">
        <Image data-el="mobilenav.logo" src="/images/logo/logo-light.png" alt="TechHub Perú" width={229} height={155} className="logo-light-only h-9 w-auto" />
        <Image data-el="mobilenav.logo" src="/images/logo/logo-dark.png" alt="TechHub Perú" width={217} height={144} className="logo-dark-only h-9 w-auto" />
        <button data-el="mobilenav.close" onClick={onClose} aria-label="Cerrar menú" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-ink-muted">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-[18px] w-[18px]">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <nav aria-label="Navegación móvil">
        {siteConfig.nav.map((item) => (
          <Link
            key={item.href}
            data-el={`mobilenav.nav.${item.slug}`}
            href={item.href}
            onClick={onClose}
            className="block border-b border-border py-3.5 font-display text-2xl font-extrabold uppercase text-ink"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <a
        data-el="mobilenav.cta.aula-virtual"
        href={siteConfig.lms.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 block w-full rounded-lg border border-border-strong px-6 py-3.5 text-center text-[.86rem] font-bold uppercase tracking-wide text-ink"
      >
        {siteConfig.lms.label}
      </a>
      <Link
        data-el="mobilenav.cta.inscribete"
        href="/#registro"
        onClick={onClose}
        className="mt-3 block w-full rounded-lg bg-brand px-6 py-3.5 text-center text-[.86rem] font-bold uppercase tracking-wide text-on-brand"
      >
        Inscríbete
      </Link>
    </div>
  );
}
