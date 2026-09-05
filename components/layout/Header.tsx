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
            <a data-el="header.topbar.instagram" href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-ink-faint transition-colors hover:text-brand">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-3.5 w-3.5">
                <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                <circle cx="12" cy="12" r="3.8" />
                <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a data-el="header.topbar.tiktok" href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-ink-faint transition-colors hover:text-brand">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                <path d="M14 4v10.2a2.8 2.8 0 1 1-2-2.68" />
                <path d="M14 4c.4 2.2 2 3.6 4 3.8" />
              </svg>
            </a>
          </div>
          <div className="hidden gap-5 text-[.76rem] text-ink-faint sm:flex">
            <Link data-el="header.topbar.empresas" href="/empresas#registro-empresa" className="hover:text-ink">Empresas</Link>
            <Link data-el="header.topbar.jobs" href="/jobs" className="hover:text-ink">TechHub Jobs</Link>
            <a data-el="header.topbar.aula-virtual" href={siteConfig.lms.url} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              {siteConfig.lms.label}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b border-border bg-bg transition-[padding,box-shadow] duration-300 ${
          scrolled ? "py-3 shadow-[var(--shadow-sm)]" : "py-4"
        }`}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-5 px-5 sm:px-8">
          <Link data-el="header.logo" href="/" aria-label="TechHub Perú — inicio" className="flex items-center gap-3">
            <Image
              src="/images/logo/logo-light.png"
              alt="TechHub Perú"
              width={229}
              height={155}
              className={`logo-light-only w-auto shrink-0 transition-[height] duration-300 ${scrolled ? "h-[37px]" : "h-[41px]"}`}
              priority
            />
            <Image
              src="/images/logo/logo-dark.png"
              alt="TechHub Perú"
              width={217}
              height={144}
              className={`logo-dark-only w-auto shrink-0 transition-[height] duration-300 ${scrolled ? "h-[37px]" : "h-[41px]"}`}
              priority
            />
          </Link>

          <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                data-el={`header.nav.${item.slug}`}
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
              data-el="header.cta.aula-virtual"
              href={siteConfig.lms.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-[41px] items-center rounded-lg border border-border-strong px-[18px] text-[.86rem] font-bold uppercase tracking-wide text-ink transition-colors hover:border-brand min-[621px]:inline-flex"
            >
              {siteConfig.lms.label}
            </a>
            <Link
              data-el="header.cta.inscribete"
              href="/#registro"
              className="inline-flex h-[41px] items-center justify-center rounded-lg bg-brand px-[18px] text-[.86rem] font-bold uppercase tracking-wide text-on-brand transition-colors hover:bg-navy-2"
            >
              Inscríbete
            </Link>
            <button
              data-el="header.menu-toggle"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={mobileOpen}
              className="flex h-[41px] w-[41px] items-center justify-center rounded-lg border border-border text-ink-muted lg:hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-5 w-5">
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
