# Hoja de vida — Jimena

Hoja de vida / portafolio interactivo construido con **Next.js 14**, **TypeScript** y **TailwindCSS**, siguiendo el diseño base propuesto en Figma y organizado con **Atomic Design** (átomos, moléculas y organismos) para maximizar la reutilización de componentes.

## Propósito

Este proyecto cumple el taller de "hoja de vida" del curso: un sitio de una sola página con tres zonas (menú izquierdo fijo, contenido central con scroll, menú derecho fijo), construido a partir de un modelo de datos único (`src/data/cv-data.ts`) que alimenta todos los componentes.

## Estructura del proyecto

```
src/
├── app/                  # App Router de Next.js (layout, página, estilos globales)
├── types/cv.ts           # Modelo de datos (Profile, Contact, Skill, Knowledge, ...)
├── data/cv-data.ts        # ← Aquí se edita todo el contenido real de la hoja de vida
└── components/
    ├── atoms/            # Icon, Button, ProgressBar
    ├── molecules/        # SkillItem, KnowledgeCard, EducationCard, ProjectCard,
    │                     # SocialIconLink, Modal
    └── organisms/        # LeftSidebar, RightSidebar, ProfileSection,
                          # KnowledgeSection, EducationSection, PortfolioSection, Footer
```

La regla de reutilización es la misma que se definió en el análisis previo: un mismo componente (por ejemplo `SkillItem` o `KnowledgeCard`) recibe distintos datos en lugar de crear un componente por cada elemento parecido.

## Cómo correr el proyecto localmente

Requisitos: Node.js 18.18 o superior.

```bash
npm install
npm run dev
```

Abre [http://localhost:3000] en tu navegador.

## Decisiones de diseño

- **Paleta:** azul de "plano técnico" (`#101B33`) en el sidebar, fondo neutro (`#F5F6F8`) en el contenido y un acento ámbar (`#E8A33D`) inspirado en las anotaciones de un plano.
- **Tipografía:** `Fraunces` para títulos y `IBM Plex Sans` para el cuerpo del texto (cargadas con `next/font/google`, se optimizan automáticamente en el build).
- **Íconos:** se usa [`lucide-react`](https://lucide.dev) en lugar de Flaticon/Iconify para poder tipar los nombres de ícono en TypeScript
- **Componentes reutilizables (mínimo 6 exigidos):** `Icon`, `Button`, `ProgressBar`, `SkillItem`, `KnowledgeCard`, `EducationCard`, `ProjectCard`, `SocialIconLink` y `Modal` — 9 en total, usados en más de dos lugares del código.

## Notas

- Las fuentes de Google requieren acceso a internet durante `npm run build` / `npm run dev`; esto funciona sin problema en tu máquina y en Vercel.
