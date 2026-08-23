"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site.config";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Barra superior: redes sociales + accesos rápidos */}
      <div className="border-b border-border bg-surface-2">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-[7px] sm:px-8">
          <div className="flex gap-3.5">
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-ink-faint transition-colors hover:text-brand">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-3.5 w-3.5">
                <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                <circle cx="12" cy="12" r="3.8" />
                <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-ink-faint transition-colors hover:text-brand">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                <path d="M14 4v10.2a2.8 2.8 0 1 1-2-2.68" />
                <path d="M14 4c.4 2.2 2 3.6 4 3.8" />
              </svg>
            </a>
          </div>
          <div className="hidden gap-5 text-[.76rem] text-ink-faint sm:flex">
            <Link href="/empresas#registro-empresa" className="hover:text-ink">Empresas</Link>
            <Link href="/jobs" className="hover:text-ink">TechHub Jobs</Link>
            <a href={siteConfig.lms.url} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              {siteConfig.lms.label}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b border-border transition-[padding,background,box-shadow] duration-300 ${
          scrolled ? "bg-header-bg py-2 shadow-[var(--shadow-sm)] backdrop-blur-md" : "bg-bg py-2.5"
        }`}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-5 px-5 sm:px-8">
          <Link href="/" aria-label="TechHub Perú — inicio" className="flex items-center gap-3">
            <Image
              src="/images/logo/logo-light.png"
              alt="TechHub Perú"
              width={229}
              height={155}
              className={`logo-light-only h-auto w-auto transition-[height] duration-300 ${scrolled ? "h-8" : "h-9"}`}
              priority
            />
            <Image
              src="/images/logo/logo-dark.png"
              alt="TechHub Perú"
              width={265}
              height={144}
              className={`logo-dark-only h-auto w-auto transition-[height] duration-300 ${scrolled ? "h-8" : "h-9"}`}
              priority
            />
          </Link>

          <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[.86rem] font-semibold text-ink-muted transition-colors hover:text-brand"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={siteConfig.lms.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-lg border border-border-strong px-6 py-3 text-[.86rem] font-bold uppercase tracking-wide text-ink transition-colors hover:border-brand min-[621px]:inline-flex"
            >
              {siteConfig.lms.label}
            </a>
            <Link
              href="/#registro"
              className="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-[.86rem] font-bold uppercase tracking-wide text-on-brand transition-colors hover:bg-navy-2"
            >
              Inscríbete
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={mobileOpen}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-ink-muted lg:hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-[18px] w-[18px]">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
