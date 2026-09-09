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
    // Ocultos a pedido — URL real conservada acá para reactivar en un
    // segundo cuando se quieran mostrar de nuevo (null = oculto en todo
    // el sitio: topbar, footer y datos estructurados).
    instagram: null as string | null, // "https://instagram.com/techhubpe"
    tiktok: null as string | null, // "https://www.tiktok.com/@techhubperu"
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

  // slug: id estable para data-el (tagging/analítica) — no depende del label ni del href,
  // así que un cambio de texto o de ancla no rompe las referencias existentes.
  nav: [
    { slug: "inicio", label: "Inicio", href: "/" },
    { slug: "nosotros", label: "Nosotros", href: "/#nosotros" },
    { slug: "programas", label: "Programas", href: "/#programas" },
    { slug: "empresas", label: "Empresas", href: "/empresas#registro-empresa" },
    { slug: "contacto", label: "Contacto", href: "/#registro" },
  ],

  legal: {
    // TODO: contenido real pendiente de redacción/revisión legal.
    privacyUrl: "/legal/privacidad",
    termsUrl: "/legal/terminos",
    // TODO: confirmar si ya existe un Libro de Reclamaciones habilitado (INDECOPI).
    complaintsBookUrl: null as string | null,
  },
} as const;

export type ProgramFaq = {
  q: string;
  a: string;
};

export type ProgramSkill = {
  title: string;
  description: string;
};

export type Program = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string | null; // null = por confirmar
  audienceIntro: string;
  audience: string[];
  skills: ProgramSkill[];
  content: string[];
  certification: {
    text: string;
    requirement: string;
  };
  faq: ProgramFaq[];
  image: {
    stage: string;
    thumb: string;
  };
};

// Catálogo de programas — contenido confirmado por TechHub Perú.
export const programs: Program[] = [
  {
    slug: "programa-tecnico-inicial",
    title: "Programa Técnico Inicial",
    subtitle: "Da tus primeros pasos en telecomunicaciones",
    description:
      "Aprende las bases para instalar, configurar y diagnosticar servicios de conectividad. Desarrolla habilidades en fibra óptica, HFC, Wi-Fi y redes de datos, incorporando buenas prácticas de seguridad y atención al cliente.",
    duration: "80 horas",
    audienceIntro:
      "Este programa está dirigido a personas que desean comenzar su formación técnica en telecomunicaciones y a quienes tienen experiencia inicial y buscan fortalecer sus conocimientos.",
    audience: [
      "Comprender cómo funcionan los servicios de conectividad.",
      "Aprender sobre instalaciones y redes utilizadas en hogares.",
      "Familiarizarte con herramientas y equipos de trabajo técnico.",
      "Desarrollar habilidades para identificar y resolver problemas básicos.",
      "Prepararte para continuar hacia programas de mayor especialización.",
    ],
    skills: [
      { title: "Reconocer los componentes de una instalación", description: "identificar equipos, materiales y conexiones en redes de telecomunicaciones." },
      { title: "Realizar configuraciones básicas", description: "trabajar con redes domésticas y equipos de conectividad." },
      { title: "Comprobar el funcionamiento del servicio", description: "realizar verificaciones y mediciones básicas." },
      { title: "Identificar fallas frecuentes", description: "reconocer problemas de conexión y aplicar procedimientos iniciales de diagnóstico." },
      { title: "Aplicar medidas de seguridad", description: "incorporar prácticas de trabajo seguro durante las actividades técnicas." },
      { title: "Comunicar el trabajo realizado", description: "explicar al cliente las acciones efectuadas y registrar información del servicio." },
    ],
    content: ["Wi-Fi", "Trabajos en altura", "Fibra óptica", "Redes domésticas · Home Networking", "HFC", "Redes de datos"],
    certification: {
      text: "Recibirás un certificado del Programa Técnico Inicial, emitido por TECH HUB PERÚ.",
      requirement: "Aprobar el programa.",
    },
    faq: [
      { q: "¿Para quién está pensado este programa?", a: "Para personas que desean iniciar su formación en telecomunicaciones y para quienes cuentan con experiencia inicial y buscan reforzar sus bases técnicas." },
      { q: "¿Cuánto dura?", a: "El programa tiene una duración total de 80 horas." },
      { q: "¿Qué tecnologías se estudian?", a: "El contenido incluye Wi-Fi, fibra óptica, HFC, redes domésticas y redes de datos. También contempla seguridad para trabajos en altura." },
      { q: "¿Incluye actividades prácticas?", a: "Sí. La malla contempla formación teórica y práctica para desarrollar habilidades relacionadas con instalaciones, configuración y diagnóstico." },
      { q: "¿Cómo se obtiene el certificado?", a: "Debes aprobar el programa para recibir el certificado del Programa Técnico Inicial, emitido por TECH HUB PERÚ." },
      { q: "¿Puedo continuar mi formación después?", a: "TECH HUB PERÚ también cuenta con el Programa de Actualización y Certificación y el Programa Técnico Experto en Servicios In House. El acceso a cada uno depende de sus requisitos de ingreso." },
      { q: "¿Cómo solicito información?", a: "Selecciona «Solicitar información» para consultar requisitos, horarios e inscripción." },
    ],
    image: {
      stage: "/images/programs/hfc-basico-stage.jpg",
      thumb: "/images/programs/hfc-basico-thumb.jpg",
    },
  },
  {
    slug: "programa-actualizacion-certificacion",
    title: "Programa de Actualización y Certificación",
    subtitle: "Actualiza tus conocimientos y fortalece tus habilidades técnicas",
    description:
      "Refuerza tus competencias en instalación, configuración y diagnóstico de servicios de telecomunicaciones. Actualiza tus conocimientos en fibra óptica, HFC, Wi-Fi y redes de datos mediante actividades orientadas al trabajo técnico.",
    duration: "40 horas",
    audienceIntro:
      "Este programa está dirigido a personas con conocimientos o experiencia previa en telecomunicaciones que desean actualizar sus habilidades y demostrar su desempeño técnico.",
    audience: [
      "Reforzar los conocimientos que utilizas en tu trabajo.",
      "Mejorar tus procedimientos de instalación y configuración.",
      "Fortalecer tu capacidad para diagnosticar fallas.",
      "Aplicar buenas prácticas de seguridad y atención al cliente.",
      "Obtener una certificación al aprobar el programa.",
    ],
    skills: [
      { title: "Mejorar tus procedimientos de instalación", description: "aplicar buenas prácticas en las conexiones y el uso de materiales." },
      { title: "Configurar equipos de conectividad", description: "ajustar parámetros para el funcionamiento de redes domésticas." },
      { title: "Realizar mediciones técnicas", description: "comprobar las condiciones del servicio e interpretar resultados." },
      { title: "Diagnosticar problemas de conexión", description: "identificar posibles causas y determinar acciones correctivas." },
      { title: "Resolver fallas frecuentes", description: "aplicar procedimientos de solución y verificar el resultado." },
      { title: "Documentar el servicio", description: "registrar el trabajo realizado y comunicar las recomendaciones al cliente." },
    ],
    content: ["Wi-Fi", "Trabajos en altura", "Fibra óptica", "Redes domésticas · Home Networking", "HFC", "Redes de datos"],
    certification: {
      text: "Recibirás un certificado del Programa de Actualización y Certificación, emitido por TECH HUB PERÚ.",
      requirement: "Aprobar el programa.",
    },
    faq: [
      { q: "¿Para quién está pensado este programa?", a: "Para personas con conocimientos o experiencia previa en telecomunicaciones que buscan actualizarse y fortalecer su desempeño técnico." },
      { q: "¿Cuánto dura?", a: "El programa tiene una duración total de 40 horas." },
      { q: "¿Necesito conocimientos previos?", a: "Sí. Está orientado a participantes que ya cuentan con una base técnica. Consulta los requisitos de ingreso para verificar si corresponde a tu preparación." },
      { q: "¿Qué tecnologías se estudian?", a: "El contenido incluye Wi-Fi, fibra óptica, HFC, redes domésticas y redes de datos. También contempla seguridad para trabajos en altura." },
      { q: "¿Incluye actividades prácticas?", a: "Sí. La formación contempla actividades prácticas y resolución de casos para aplicar los conocimientos técnicos." },
      { q: "¿Cómo se obtiene el certificado?", a: "Debes aprobar el programa para recibir el certificado del Programa de Actualización y Certificación, emitido por TECH HUB PERÚ." },
      { q: "¿Puedo continuar mi formación después?", a: "Puedes consultar los requisitos del Programa Técnico Experto en Servicios In House para continuar desarrollando tus competencias." },
      { q: "¿Cómo solicito información?", a: "Selecciona «Solicitar información» para consultar requisitos, horarios e inscripción." },
    ],
    image: {
      stage: "/images/programs/ftth-basico-stage.jpg",
      thumb: "/images/programs/ftth-basico-thumb.jpg",
    },
  },
  {
    slug: "programa-tecnico-experto-in-house",
    title: "Programa Técnico Experto en Servicios In House",
    subtitle: "Fortalece tu dominio técnico en servicios de telecomunicaciones",
    description:
      "Integra tus conocimientos de instalación, configuración, medición y diagnóstico para atender servicios de telecomunicaciones dentro del hogar. Desarrolla tu capacidad para resolver problemas y demostrar tus competencias mediante actividades prácticas.",
    duration: "95 horas",
    audienceIntro:
      "Este programa está dirigido a técnicos con formación o experiencia en telecomunicaciones que buscan consolidar sus habilidades y demostrar un mayor dominio de los servicios In House.",
    audience: [
      "Integrar tus conocimientos para atender un servicio de principio a fin.",
      "Profundizar en el diagnóstico y la resolución de problemas.",
      "Fortalecer tu criterio para interpretar mediciones y elegir soluciones.",
      "Mejorar la calidad de tus instalaciones y configuraciones.",
      "Demostrar tus competencias técnicas y de atención al cliente.",
    ],
    skills: [
      { title: "Realizar instalaciones de servicios In House", description: "integrar conexiones, equipos y procedimientos de trabajo seguro." },
      { title: "Configurar redes y dispositivos", description: "preparar los equipos de conectividad según las necesidades de la instalación." },
      { title: "Interpretar mediciones", description: "utilizar los resultados para evaluar el estado del servicio y orientar el diagnóstico." },
      { title: "Diagnosticar fallas de manera ordenada", description: "revisar los componentes de la instalación e identificar el origen de los problemas." },
      { title: "Aplicar y comprobar soluciones", description: "corregir fallas y verificar el funcionamiento del servicio." },
      { title: "Completar la atención técnica", description: "explicar el trabajo realizado, brindar recomendaciones y registrar la intervención." },
    ],
    content: ["Wi-Fi", "Trabajos en altura", "Fibra óptica", "Redes domésticas · Home Networking", "HFC", "Redes de datos", "Diagnóstico y resolución de problemas"],
    certification: {
      text: "Recibirás un certificado del Programa Técnico Experto en Servicios In House, emitido por TECH HUB PERÚ.",
      requirement: "Aprobar el programa.",
    },
    faq: [
      { q: "¿Para quién está pensado este programa?", a: "Para técnicos con formación o experiencia previa que desean consolidar y demostrar sus competencias en servicios de telecomunicaciones dentro del hogar." },
      { q: "¿Qué significa In House?", a: "Se refiere al trabajo técnico realizado dentro del hogar, como la instalación, configuración y revisión de equipos y conexiones para el funcionamiento del servicio." },
      { q: "¿Necesito conocimientos previos?", a: "Sí. Este programa requiere una base técnica. Consulta las condiciones de ingreso según tu formación y experiencia." },
      { q: "¿Qué diferencia a este programa de los otros?", a: "Se enfoca en integrar las habilidades de instalación, configuración, medición, diagnóstico y atención al cliente para resolver situaciones de servicio de manera integral." },
      { q: "¿Incluye actividades prácticas?", a: "Sí. El programa contempla actividades prácticas para demostrar el manejo de procedimientos técnicos y la resolución de problemas." },
      { q: "¿Cómo se obtiene el certificado?", a: "Debes aprobar el programa para recibir el certificado del Programa Técnico Experto en Servicios In House, emitido por TECH HUB PERÚ." },
      { q: "¿Cómo solicito información?", a: "Selecciona «Solicitar información» para consultar requisitos, duración, horarios e inscripción." },
    ],
    image: {
      stage: "/images/programs/ftth-avanzado-stage.jpg",
      thumb: "/images/programs/ftth-avanzado-thumb.jpg",
    },
  },
];

export type Feature = {
  slug: string;
  title: string;
  description: string;
  // Texto que aparece al voltear la foto (ver FlipPhoto) — un detalle
  // adicional, no una repetición de `description`.
  detail: string;
  image: string;
};

// "Así se aprende en TechHub" — diferenciales con foto real.
export const features: Feature[] = [
  {
    slug: "presencial",
    title: "Formación 100% presencial",
    description: "Sin clases virtuales: cada sesión ocurre en campo o en laboratorio, con equipos reales.",
    detail: "Mismo horario y lugar cada semana, sin depender de conexión a internet ni clases grabadas.",
    image: "/images/features/presencial.jpg",
  },
  {
    slug: "instructores",
    title: "Instructores con experiencia real",
    description: "Profesionales activos en la industria de telecomunicaciones, no solo en el aula.",
    detail: "Técnicos que hoy resuelven instalaciones reales fuera del aula, no solo enseñan teoría.",
    image: "/images/features/instructores.jpg",
  },
  {
    slug: "laboratorio",
    title: "Laboratorios teórico-prácticos",
    description: "Equipos reales de fibra, HFC y redes para practicar antes de salir a campo.",
    detail: "Fibra óptica, HFC, Wi-Fi y redes domésticas: los mismos equipos que verás en los programas.",
    image: "/images/features/laboratorio.jpg",
  },
  {
    slug: "certificacion",
    title: "Certificación digital con QR",
    description: "Constancia verificable en línea con un solo escaneo, sin trámites adicionales.",
    detail: "El QR enlaza directo a tu constancia verificada — cualquier empresa puede confirmarla al instante.",
    image: "/images/features/certificacion.jpg",
  },
  {
    slug: "bolsa",
    title: "Bolsa laboral especializada",
    description: "Acceso a vacantes técnicas evaluadas y filtradas por TechHub.",
    detail: "Tu perfil evaluado se conecta con empresas del sector a través de TechHub Jobs.",
    image: "/images/features/bolsa.jpg",
  },
  {
    slug: "incompany",
    title: "Programas in company",
    detail: "Ideal para operadores y contratistas que necesitan estandarizar competencias de sus propios equipos.",
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
