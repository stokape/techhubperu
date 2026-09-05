import type { Metadata } from "next";
import { Big_Shoulders, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site.config";
import { GoogleAnalytics } from "@/components/layout/GoogleAnalytics";
import { ElementTracker } from "@/components/layout/ElementTracker";
import { StructuredData } from "@/components/layout/StructuredData";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "TechHub Perú | Formación especializada en Telecomunicaciones",
    template: "%s | TechHub Perú",
  },
  description:
    "Formación especializada en fibra óptica, redes HFC, networking, WiFi, seguridad operativa y tecnologías de telecomunicaciones en Perú.",
  openGraph: {
    title: "TechHub Perú | Formación especializada en Telecomunicaciones",
    description:
      "Formación especializada en fibra óptica, redes HFC, networking, WiFi, seguridad operativa y tecnologías de telecomunicaciones en Perú.",
    url: siteConfig.url,
    siteName: "TechHub Perú",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechHub Perú | Formación especializada en Telecomunicaciones",
    description:
      "Formación especializada en fibra óptica, redes HFC, networking, WiFi, seguridad operativa y tecnologías de telecomunicaciones en Perú.",
  },
};

// Se aplica el tema guardado antes del primer render para evitar parpadeo (FOUC).
const themeInitScript = `
(function(){
  try{
    var stored = localStorage.getItem('techhub-theme');
    if (stored) document.documentElement.setAttribute('data-theme', stored);
  } catch(e){}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-PE"
      className={`${bigShoulders.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <GoogleAnalytics />
        <ElementTracker />
      </body>
    </html>
  );
}
