import { siteConfig } from "@/lib/site.config";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    description:
      "Formación especializada en fibra óptica, redes HFC, networking, WiFi, seguridad operativa y tecnologías de telecomunicaciones en Perú.",
    slogan: siteConfig.claim,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo/logo-light.png`,
    email: siteConfig.contact.email,
    sameAs: [siteConfig.social.instagram, siteConfig.social.tiktok].filter(Boolean),
    address: {
      "@type": "PostalAddress",
      addressCountry: "PE",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
