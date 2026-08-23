import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

const strandColors = [
  "#2A5BD7", "#E8650F", "#149A52", "#8B5A2B", "#8A93A6", "#F5F5F0",
  "#D62828", "#14161C", "#C99400", "#7C4DDA", "#E85D9E", "#0FA9B8",
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-5 py-12 sm:px-8 sm:py-16 min-[561px]:grid-cols-2 min-[981px]:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div>
          <Link href="/" aria-label="TechHub Perú — inicio" className="inline-block">
            <Image src="/images/logo/logo-light.png" alt="TechHub Perú" width={229} height={155} className="h-16 w-auto dark:hidden" />
            <Image src="/images/logo/logo-dark.png" alt="TechHub Perú" width={265} height={144} className="hidden h-16 w-auto dark:block" />
          </Link>
          <p className="my-3.5 max-w-[26ch] text-[.9rem] text-ink-muted">{siteConfig.claim}</p>
          <div className="flex gap-2.5">
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-strong text-ink-muted transition-colors hover:border-brand hover:text-brand">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-3.5 w-3.5">
                <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                <circle cx="12" cy="12" r="3.8" />
                <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-strong text-ink-muted transition-colors hover:border-brand hover:text-brand">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                <path d="M14 4v10.2a2.8 2.8 0 1 1-2-2.68" />
                <path d="M14 4c.4 2.2 2 3.6 4 3.8" />
              </svg>
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} aria-label="Correo" className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-strong text-ink-muted transition-colors hover:border-brand hover:text-brand">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3.5 6.5 12 13l8.5-6.5" />
              </svg>
            </a>
            <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-strong text-ink-muted transition-colors hover:border-brand hover:text-brand">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                <path d="M7 17.5 4.5 20l1-3.4a8 8 0 1 1 2.9 2.6L7 17.5Z" />
              </svg>
            </a>
          </div>
        </div>

        <FooterCol title="TechHub">
          <FooterLink href="/">Inicio</FooterLink>
          <FooterLink href="/#nosotros">Nosotros</FooterLink>
          <FooterLink href="/empresas#registro-empresa">Empresas</FooterLink>
          <FooterLink href="/jobs">TechHub Jobs</FooterLink>
        </FooterCol>

        <FooterCol title="Cursos">
          <FooterLink href="/#cursos">HFC Básico / Avanzado</FooterLink>
          <FooterLink href="/#cursos">FTTH Básico / Avanzado</FooterLink>
          <FooterLink href="/#cursos">SSOMA para Telecomunicaciones</FooterLink>
          <FooterLink href="/#cursos">Trabajo Seguro en Altura</FooterLink>
        </FooterCol>

        <FooterCol title="Empresas">
          <FooterLink href="/empresas">Soluciones para su empresa</FooterLink>
          <FooterLink href="/empresas#registro-empresa">Solicitar propuesta</FooterLink>
        </FooterCol>

        <FooterCol title="Contacto">
          <a href={`mailto:${siteConfig.contact.email}`} className="text-[.87rem] text-ink-muted transition-colors hover:text-brand">
            {siteConfig.contact.email}
          </a>
          <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-[.87rem] text-ink-muted transition-colors hover:text-brand">
            {siteConfig.contact.whatsappDisplay}
          </a>
          {siteConfig.contact.address && (
            <span className="text-[.87rem] text-ink-muted">{siteConfig.contact.address}</span>
          )}
        </FooterCol>
      </div>

      <div className="flex h-1.5">
        {strandColors.map((c) => (
          <i key={c} className="flex-1" style={{ background: c }} />
        ))}
      </div>

      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 px-5 py-4 text-[.78rem] text-ink-faint sm:px-8">
        <span>© {new Date().getFullYear()} TechHub Perú. Todos los derechos reservados.</span>
        <div className="flex flex-wrap gap-5">
          <Link href={siteConfig.legal.privacyUrl} className="hover:text-ink">Política de privacidad</Link>
          <Link href={siteConfig.legal.termsUrl} className="hover:text-ink">Términos y condiciones</Link>
          {siteConfig.legal.complaintsBookUrl && (
            <a href={siteConfig.legal.complaintsBookUrl} className="hover:text-ink">Libro de reclamaciones</a>
          )}
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2.5">
      <h4 className="mb-1 font-mono-th text-[.66rem] font-medium uppercase tracking-[.1em] text-ink-faint">{title}</h4>
      {children}
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[.87rem] text-ink-muted transition-colors hover:text-brand">
      {children}
    </Link>
  );
}
