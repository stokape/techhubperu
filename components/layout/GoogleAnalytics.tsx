import Script from "next/script";

// Analítica GA4 — crea una propiedad en analytics.google.com y define
// NEXT_PUBLIC_GA_ID en tu .env.local / variables de entorno de Vercel.
// Sin esa variable, este componente no carga nada (no rompe el sitio).
export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
