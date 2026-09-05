# Índice de elementos taggeados (`data-el`)

Cada elemento interactivo o de contenido relevante del sitio lleva un atributo
`data-el="area.elemento"` en el código. Sirve para tres cosas a la vez:

1. **Referencia precisa en pedidos de cambio** — en vez de describir "el botón
   azul de arriba", se puede nombrar el id exacto (ej. `header.cta.inscribete`)
   y localizar/editar el elemento sin ambigüedad.
2. **Analítica automática** — [`ElementTracker`](../components/layout/ElementTracker.tsx)
   escucha clics en cualquier `[data-el]` y emite un evento GA4 `element_click`
   con `element_id` = ese mismo string. No hace falta cablear `gtag()` a mano
   por botón.
3. **Automatización externa** — cualquier herramienta (script, extensión,
   QA) puede ubicar el elemento con `document.querySelector('[data-el="..."]')`
   sin depender de clases de Tailwind (que cambian con el diseño).

**Convención de nombres:** `área.subárea.elemento[.variante]`, todo en
minúsculas y kebab-case dentro de cada segmento. `${slug}` indica que el id
real se arma dinámicamente a partir de un slug de `lib/site.config.ts`.

No todos los nodos del DOM están taggeados — solo los interactivos (links,
botones, campos de formulario) y los contenedores de contenido reutilizable
(tarjetas, secciones, stats). Texto suelto (párrafos, listas de viñetas) no
lleva tag porque no es un punto de automatización útil.

## Header / navegación global (`components/layout/Header.tsx`)

| data-el | Elemento |
|---|---|
| `header.logo` | Logo, link a inicio |
| `header.nav.inicio` / `.nosotros` / `.programas` / `.empresas` / `.contacto` | Links del nav desktop (slugs vienen de `siteConfig.nav`) |
| `header.cta.aula-virtual` | Botón "Aula Virtual" (abre en nueva pestaña) |
| `header.cta.inscribete` | Botón "Inscríbete" |
| `header.menu-toggle` | Botón hamburguesa (abre `MobileNav`) |
| `header.theme-toggle` | Botón de tema claro/oscuro (`ThemeToggle.tsx`) |
| `header.topbar.instagram` / `.tiktok` | Íconos de redes en la barra superior |
| `header.topbar.empresas` / `.jobs` / `.aula-virtual` | Accesos rápidos de la barra superior |

## Menú móvil (`components/layout/MobileNav.tsx`)

| data-el | Elemento |
|---|---|
| `mobilenav.logo` | Logo (ambas variantes claro/oscuro) |
| `mobilenav.close` | Botón cerrar |
| `mobilenav.nav.inicio` / `.nosotros` / `.programas` / `.empresas` / `.contacto` | Links del menú |
| `mobilenav.cta.aula-virtual` | Botón "Aula Virtual" |
| `mobilenav.cta.inscribete` | Botón "Inscríbete" |

## Footer (`components/layout/Footer.tsx`)

| data-el | Elemento |
|---|---|
| `footer.logo` | Logo, link a inicio |
| `footer.social.instagram` / `.tiktok` / `.email` / `.whatsapp` | Íconos de redes del bloque de marca |
| `footer.col.techhub.inicio` / `.nosotros` / `.empresas` / `.jobs` | Columna "TechHub" |
| `footer.col.programas.${slug}` | Columna "Programas" (uno por programa, ver tabla de programas abajo) |
| `footer.col.empresas.soluciones` / `.propuesta` | Columna "Empresas" |
| `footer.contact.email` / `.whatsapp` | Datos de contacto (columna "Contacto") |

## Flotante de WhatsApp (`components/layout/WhatsAppFloat.tsx`)

| data-el | Elemento |
|---|---|
| `whatsapp-float.button` | Botón flotante verde |

## Home — Hero (`components/sections/Hero.tsx`)

| data-el | Elemento |
|---|---|
| `home.hero.cta.programas` | Botón "Ver programas" |
| `home.hero.cta.registro` | Botón "Solicitar información" |

## Home — Diferenciales (`components/sections/FeatureGrid.tsx`)

| data-el | Elemento |
|---|---|
| `home.features.section` | Sección completa |
| `home.features.card.presencial` / `.instructores` / `.laboratorio` / `.certificacion` / `.bolsa` / `.incompany` | Cada tarjeta (slugs de `features` en `site.config.ts`) |

## Home — Quiénes somos (`components/sections/About.tsx`)

| data-el | Elemento |
|---|---|
| `home.about.section` | Sección completa (`#nosotros`) |

## Home — Programas (`components/sections/ProgramsSection.tsx`)

Slugs de programa actuales: `programa-tecnico-inicial`,
`programa-actualizacion-certificacion`, `programa-tecnico-experto-in-house`.

| data-el | Elemento |
|---|---|
| `home.programs.section` | Sección completa (`#programas`) |
| `home.programs.card.${slug}` | Tarjeta del programa (clic abre el popup) |
| `home.programs.card.${slug}.cta-registro` | Botón "Solicitar información" dentro de la tarjeta |
| `home.programs.modal.${slug}` | El popup/diálogo en sí, una vez abierto |
| `home.programs.modal.${slug}.close` | Botón "×" para cerrar el popup |
| `home.programs.modal.${slug}.faq.${i}` | Cada pregunta del acordeón FAQ dentro del popup (`i` = índice, 0-based) |
| `home.programs.modal.${slug}.cta-registro` | Botón "Solicitar información" al final del popup |

## Home — CTA final (`components/sections/FinalCta.tsx`)

| data-el | Elemento |
|---|---|
| `home.finalcta.cta.programas` | Botón "Explorar programas" |
| `home.finalcta.cta.registro` | Botón "Hablar con TechHub" |

## Home — Contacto (`components/sections/ContactSection.tsx` + `ContactForm.tsx`)

| data-el | Elemento |
|---|---|
| `home.contact.section` | Sección completa (`#registro`) |
| `home.contact.form` | El formulario |
| `home.contact.form.field.name` / `.email` / `.phone` / `.company` / `.message` | Campos de texto |
| `home.contact.form.field.program` | Select "Programa de interés" |
| `home.contact.form.step1.continue` | Botón "Continuar" (paso 1 → 2) |
| `home.contact.form.step2.back` / `.continue` | Botones del paso 2 |
| `home.contact.form.step3.back` | Botón "Atrás" (paso 3) |
| `home.contact.form.submit` | Botón final "Enviar solicitud" |

## Empresas (`app/empresas/page.tsx` + `EmpresaForm.tsx`)

| data-el | Elemento |
|---|---|
| `empresas.hero.cta.propuesta` | Botón del hero "Solicitar propuesta" |
| `empresas.stats.section` | Sección de cifras |
| `empresas.stats.stat.${i}` | Cada cifra (`i` = índice, 0-3) |
| `empresas.solutions.section` | Sección "Soluciones para su empresa" |
| `empresas.solutions.card.${i}` | Cada tarjeta de solución (`i` = índice, 0-5) |
| `empresas.form.section` | Sección del formulario (`#registro-empresa`) |
| `empresas.form` | El formulario |
| `empresas.form.field.company` / `.contact` / `.email` / `.phone` | Campos de texto |
| `empresas.form.field.interest` | Select "Tipo de capacitación" |
| `empresas.form.field.team-size` | Select "N.° aproximado de técnicos" |
| `empresas.form.field.message` | Textarea mensaje |
| `empresas.form.submit` | Botón "Solicitar propuesta" |

## TechHub Jobs (`app/jobs/page.tsx`)

| data-el | Elemento |
|---|---|
| `jobs.hero.cta.capacitarme` | Botón hero "Quiero capacitarme" |
| `jobs.hero.cta.empresa` | Botón hero "Soy empresa" |
| `jobs.steps.step.${i}` | Cada paso de la franja de 4 pasos (`i` = índice, 0-3) |
| `jobs.perfil.section` | Bloque "Para estudiantes y técnicos" (`#perfil`) |
| `jobs.perfil.cta` | Botón "Crear mi perfil" |
| `jobs.vacante.section` | Bloque "Para empresas" (`#vacante`) |
| `jobs.vacante.cta` | Botón "Publicar vacante" |
| `jobs.stats.section` | Sección de cifras |
| `jobs.stats.stat.${i}` | Cada cifra (`i` = índice, 0-3) |

## Cómo agregar un tag nuevo

1. Elige un id siguiendo la convención de arriba (revisa que no choque con uno existente).
2. Agrega `data-el="ese-id"` al elemento en el JSX (o pasa `dataEl="ese-id"` si es
   un `<Button>` o `<Modal>`, que ya soportan la prop y la propagan).
3. Documenta la fila nueva en este archivo.
4. No hace falta tocar `ElementTracker.tsx` — el trackeo a GA4 es automático
   para cualquier `[data-el]`, sin importar dónde esté.
