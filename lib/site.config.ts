// ============================================================
// TechHub Perú — configuración central del sitio
// Edita este archivo para actualizar textos, contactos y enlaces
// en todo el sitio sin tocar los componentes.
// ============================================================

export const siteConfig = {
  name: "TechHub Perú",
  claim: "Donde nacen los expertos en telecomunicaciones.",
  url: "https://techhub.pe",

  contact: {
    email: "contacto@techhub.pe",
    whatsapp: "51940643633", // formato wa.me: código de país + número, sin '+' ni espacios
    whatsappDisplay: "+51 940 643 633",
    // Se agrega cuando esté confirmada — se omite del footer mientras sea null.
    address: null as string | null,
  },

  social: {
    instagram: "https://instagram.com/techhubpe",
    tiktok: "https://www.tiktok.com/@techhubperu",
    // TODO: agregar si existen — no inventar URLs.
    linkedin: null as string | null,
    facebook: null as string | null,
    youtube: null as string | null,
  },

  lms: {
    label: "Aula Virtual",
    url: "https://techhub.lms.stoka.pe/",
  },

  // Web3Forms (envío de formularios sin backend propio) — web3forms.com
  web3formsAccessKey: "d46583ab-aa1f-4222-a3bd-fe93d02df029",

  nav: [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/#nosotros" },
    { label: "Cursos", href: "/#cursos" },
    { label: "Empresas", href: "/empresas#registro-empresa" },
    { label: "Contacto", href: "/#registro" },
  ],

  legal: {
    // TODO: contenido real pendiente de redacción/revisión legal.
    privacyUrl: "/legal/privacidad",
    termsUrl: "/legal/terminos",
    // TODO: confirmar si ya existe un Libro de Reclamaciones habilitado (INDECOPI).
    complaintsBookUrl: null as string | null,
  },
} as const;

export type Course = {
  slug: string;
  title: string;
  duration: string;
  level: "Iniciación" | "Avanzado" | "Todo público";
  description: string;
  features: string[];
  image: {
    stage: string;
    thumb: string;
  };
};

// Catálogo de cursos — horas y contenido confirmados por TechHub Perú.
// TODO: confirmar si este catálogo de 6 cursos es el definitivo o se ampliará.
export const courses: Course[] = [
  {
    slug: "hfc-basico",
    title: "HFC Básico",
    duration: "40 horas",
    level: "Iniciación",
    description: "Para técnicos que se inician en redes HFC.",
    features: ["Empalme de conectores", "Instalación de TAP", "Diagnóstico básico"],
    image: {
      stage: "/images/courses/hfc-basico-stage.jpg",
      thumb: "/images/courses/hfc-basico-thumb.jpg",
    },
  },
  {
    slug: "hfc-avanzado",
    title: "HFC Avanzado",
    duration: "80 horas",
    level: "Avanzado",
    description: "Para técnicos con experiencia en redes HFC.",
    features: ["Medición de señal", "Balanceo de red", "Diagnóstico de nodo"],
    image: {
      stage: "/images/courses/hfc-avanzado-stage.jpg",
      thumb: "/images/courses/hfc-avanzado-thumb.jpg",
    },
  },
  {
    slug: "ftth-basico",
    title: "FTTH Básico",
    duration: "40 horas",
    level: "Iniciación",
    description: "Para técnicos que se inician en redes FTTH.",
    features: ["Empalme por fusión", "Cajas NAP", "Conectorización"],
    image: {
      stage: "/images/courses/ftth-basico-stage.jpg",
      thumb: "/images/courses/ftth-basico-thumb.jpg",
    },
  },
  {
    slug: "ftth-avanzado",
    title: "FTTH Avanzado",
    duration: "80 horas",
    level: "Avanzado",
    description: "Para técnicos con experiencia en redes FTTH.",
    features: ["Certificación OTDR", "Herramientas de precisión", "Diagnóstico de enlace"],
    image: {
      stage: "/images/courses/ftth-avanzado-stage.jpg",
      thumb: "/images/courses/ftth-avanzado-thumb.jpg",
    },
  },
  {
    slug: "ssoma-telecomunicaciones",
    title: "SSOMA para Telecomunicaciones",
    duration: "24 horas",
    level: "Todo público",
    description: "Seguridad, salud ocupacional y medio ambiente.",
    features: ["Procedimientos de seguridad", "Uso de EPP", "Trabajo en equipo"],
    image: {
      stage: "/images/courses/ssoma-stage.jpg",
      thumb: "/images/courses/ssoma-thumb.jpg",
    },
  },
  {
    slug: "trabajo-seguro-altura",
    title: "Trabajo Seguro en Altura",
    duration: "16 horas",
    level: "Todo público",
    description: "Técnicas y normas para trabajos en altura.",
    features: ["Arnés y anclaje", "Normativa vigente", "Prevención de caídas"],
    image: {
      stage: "/images/courses/altura-stage.jpg",
      thumb: "/images/courses/altura-thumb.jpg",
    },
  },
];

export type Feature = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

// "Así se aprende en TechHub" — diferenciales con foto real.
export const features: Feature[] = [
  {
    slug: "presencial",
    title: "Formación 100% presencial",
    description: "Sin clases virtuales: cada sesión ocurre en campo o en laboratorio, con equipos reales.",
    image: "/images/features/presencial.jpg",
  },
  {
    slug: "instructores",
    title: "Instructores con experiencia real",
    description: "Profesionales activos en la industria de telecomunicaciones, no solo en el aula.",
    image: "/images/features/instructores.jpg",
  },
  {
    slug: "laboratorio",
    title: "Laboratorios teórico-prácticos",
    description: "Equipos reales de fibra, HFC y redes para practicar antes de salir a campo.",
    image: "/images/features/laboratorio.jpg",
  },
  {
    slug: "certificacion",
    title: "Certificación digital con QR",
    description: "Constancia verificable en línea con un solo escaneo, sin trámites adicionales.",
    image: "/images/features/certificacion.jpg",
  },
  {
    slug: "bolsa",
    title: "Bolsa laboral especializada",
    description: "Acceso a vacantes técnicas evaluadas y filtradas por TechHub.",
    image: "/images/features/bolsa.jpg",
  },
  {
    slug: "incompany",
    title: "Programas in company",
    description: "Capacitación llevada directamente a las instalaciones de tu empresa.",
    image: "/images/features/incompany.jpg",
  },
];

export const empresaSolutions = [
  { title: "Capacitación técnica", description: "Actualización de cuadrillas y técnicos en operación." },
  { title: "Programas in company", description: "Formación llevada a las instalaciones de la empresa." },
  { title: "Evaluación de competencias", description: "Diagnóstico objetivo del nivel técnico de su equipo." },
  { title: "Bolsa laboral especializada", description: "Acceso a talento técnico ya evaluado por TechHub." },
  { title: "Seguridad y salud en el trabajo", description: "Formación en procedimientos seguros de campo." },
  { title: "Consultoría y acompañamiento", description: "Mejora de procesos y estándares de campo." },
] as const;

export const empresaStats = [
  { value: "30%", label: "Reducción de costos de capacitación" },
  { value: "25%", label: "Aumento de productividad" },
  { value: "35%", label: "Mejora en calidad de instalación" },
  { value: "40%", label: "Mayor satisfacción del cliente" },
] as const;

export const jobsStats = [
  { value: "+1500", label: "Técnicos certificados" },
  { value: "+50", label: "Empresas aliadas" },
  { value: "+200", label: "Ofertas laborales" },
  { value: "+95%", label: "Índice de empleabilidad" },
] as const;
