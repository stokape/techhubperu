"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Trackeo automático de clics para todo elemento marcado con data-el
 * (ver docs/ELEMENTS.md para el índice completo). No requiere cablear
 * gtag() a mano en cada botón/link: basta con agregar el atributo
 * data-el="area.elemento" y este listener global se encarga de emitir
 * el evento GA4 "element_click" con ese id como element_id.
 *
 * Si NEXT_PUBLIC_GA_ID no está configurado, window.gtag nunca se crea
 * (ver GoogleAnalytics.tsx) y este componente no hace nada.
 */
export function ElementTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (typeof window.gtag !== "function") return;

      const target = e.target as Element | null;
      const el = target?.closest<HTMLElement>("[data-el]");
      if (!el) return;

      const elementId = el.getAttribute("data-el");
      if (!elementId) return;

      window.gtag("event", "element_click", {
        element_id: elementId,
        element_tag: el.tagName.toLowerCase(),
        page_path: window.location.pathname,
      });
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
