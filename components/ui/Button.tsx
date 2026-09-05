import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost-invert";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: ReactNode;
  /** Id estable para tagging/analítica (data-el) — ver docs/ELEMENTS.md. */
  dataEl?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand text-on-brand shadow-[0_1px_0_0_rgba(255,255,255,.12)_inset] hover:bg-navy-2",
  outline: "bg-transparent text-ink border-border-strong border hover:border-brand",
  "ghost-invert": "bg-transparent text-white border border-white/40 hover:bg-white/12 hover:border-white",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 font-body font-bold text-[.86rem] tracking-wide uppercase whitespace-nowrap transition-colors duration-200";

export function Button({ href, external, children, variant = "primary", className = "", icon, dataEl }: ButtonAsLink) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (external) {
    return (
      <a data-el={dataEl} href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link data-el={dataEl} href={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}
