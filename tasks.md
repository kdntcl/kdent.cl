# Plan de Optimización para Kdent.cl

Este documento detalla el plan de acción para optimizar el sitio web de la Clínica KDENT, con un enfoque en mejorar la velocidad de carga y el posicionamiento en motores de búsqueda (SEO).

## Fase 1: Optimización de Activos (Imágenes)

Esta es la fase más crítica para obtener una mejora inmediata en el rendimiento.

-   [x] **Tarea 1.1: Reorganizar y Renombrar Imágenes**
    -   [x] Crear un nuevo directorio: `public/images`.
    -   [x] Mover todas las imágenes de `public/lovable-uploads` a `public/images`.
    -   [x] Renombrar cada imagen con un nombre descriptivo y relevante para el SEO (e.g., `logo-kdent.png` -> `logo-kdent.webp`, `promocion-botox.png` -> `promocion-botox.webp`).

-   [x] **Tarea 1.2: Convertir y Redimensionar Imágenes**
    -   [x] Convertir todas las imágenes de formato PNG y JPG al formato `WebP` para una compresión superior.
    -   [x] Redimensionar las imágenes a un tamaño apropiado para su uso en el sitio web:
        -   Logo: `160px` de alto.
        -   Imágenes de promociones y especialidades: `800px` de ancho.
        -   Otras imágenes: Evaluar su tamaño de despliegue y redimensionar en consecuencia.

-   [x] **Tarea 1.3: Actualizar Referencias en el Código**
    -   [x] Actualizar todas las rutas de las imágenes en el código fuente (`.tsx` y `.html`) para que apunten al nuevo directorio `public/images` y a los nuevos nombres de archivo con la extensión `.webp`.

## Fase 2: Implementación de Pre-rendering (SSG)

Esta fase es crucial para mejorar el SEO y la velocidad de renderizado inicial.

-   [x] **Tarea 2.1: Instalar y Configurar Plugin de Pre-rendering**
    -   [x] Añadir `vite-plugin-prerender` como una dependencia de desarrollo.
    -   [x] Configurar el plugin en `vite.config.ts`.

-   [x] **Tarea 2.2: Definir Rutas para Pre-renderizar**
    -   [x] Listar todas las rutas estáticas en la configuración del plugin (`/`, `/sobre-nosotros`, `/ubicacion`, `/politica-de-privacidad`, `/terminos-y-condiciones`).
    -   [x] Investigar y definir una estrategia para pre-renderizar las rutas dinámicas (`/especialidades/:id`). Esto podría implicar obtener la lista de especialidades y generar una página para cada una.

## Fase 3: Limpieza y Pulido Final

Los toques finales para asegurar que el proyecto esté limpio y optimizado.

-   [x] **Tarea 3.1: Eliminar Dependencias Innecesarias**
    -   [x] Eliminar `lovable-tagger` de `package.json`.
    -   [x] Eliminar la configuración de `lovable-tagger` de `vite.config.ts`.

-   [x] **Tarea 3.2: Actualizar Metadatos y SEO**
    -   [x] Revisar `index.html` y eliminar cualquier URL residual de `lovable.dev`.
    -   [x] Actualizar las URLs de las imágenes en los metadatos (Open Graph, Twitter Cards, JSON-LD) para que apunten a las nuevas imágenes optimizadas en `public/images`.

-   [x] **Tarea 3.3: Revisar `robots.txt` y `sitemap.xml`**
    -   [x] Asegurarse de que `robots.txt` permita el rastreo de todos los recursos importantes.
    -   [x] Verificar que `sitemap.xml` esté actualizado y sea correcto después de implementar el pre-rendering.
