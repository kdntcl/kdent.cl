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

## 📝 **FASE 4: REFACTORIZACIÓN DE ESPECIALIDADES - DIVISIÓN EN ARCHIVOS INDIVIDUALES**

### **Objetivo:**
Dividir el archivo `EspecialidadPage.tsx` (161KB) en archivos individuales por especialidad para mejorar:
- **Mantenibilidad:** Código más organizado y fácil de mantener
- **SEO:** Mejor indexación con páginas individuales
- **Performance:** Carga más rápida con code splitting
- **Desarrollo:** Trabajo paralelo en diferentes especialidades

### **Estructura Actual:**
- `EspecialidadPage.tsx` (161KB) - Contiene todas las 6 especialidades
- Ruta dinámica: `/especialidades/:id`
- Especialidades: urgencias, implantologia, estetica-dental, endodoncia, rehabilitacion-oral, estetica-facial

### **Estructura Propuesta:**
```
src/pages/especialidades/
├── UrgenciasPage.tsx
├── ImplantologiaPage.tsx  
├── EsteticaDentalPage.tsx
├── EndodonciaPage.tsx
├── RehabilitacionOralPage.tsx
├── EsteticaFacialPage.tsx
└── components/
    ├── EspecialidadLayout.tsx (Layout común)
    ├── CTASection.tsx (Sección CTA reutilizable)
    └── FAQSection.tsx (Sección FAQ reutilizable)
```

### **Plan de Acción Detallado:**

#### **📝 Tarea 4.1: Preparación y Análisis**
- [ ] Crear directorio `src/pages/especialidades/`
- [ ] Crear directorio `src/pages/especialidades/components/`
- [ ] Analizar y documentar componentes comunes reutilizables
- [ ] Identificar meta tags y schema markup por especialidad

#### **📝 Tarea 4.2: Crear Componentes Base Reutilizables**
- [ ] **EspecialidadLayout.tsx** - Layout común con:
  - Navbar y Footer
  - WhatsAppButton
  - Estructura base de página
  - Meta tags dinámicos
- [ ] **CTASection.tsx** - Sección de llamadas a la acción reutilizable
- [ ] **FAQSection.tsx** - Sección de preguntas frecuentes con schema markup
- [ ] **ProcedureCard.tsx** - Tarjetas de procedimientos reutilizables

#### **📝 Tarea 4.3: Extraer Especialidades Individuales**
- [ ] **UrgenciasPage.tsx** - Extraer contenido de urgencias
- [ ] **ImplantologiaPage.tsx** - Extraer contenido de implantología  
- [ ] **EsteticaDentalPage.tsx** - Extraer contenido de estética dental
- [ ] **EndodonciaPage.tsx** - Extraer contenido de endodoncia
- [ ] **RehabilitacionOralPage.tsx** - Extraer contenido de rehabilitación oral
- [ ] **EsteticaFacialPage.tsx** - Extraer contenido de estética facial

#### **📝 Tarea 4.4: Actualizar Sistema de Rutas**
- [ ] Modificar `App.tsx` para usar rutas individuales:
  ```tsx
  <Route path="/urgencias" element={<UrgenciasPage />} />
  <Route path="/implantologia" element={<ImplantologiaPage />} />
  <Route path="/estetica-dental" element={<EsteticaDentalPage />} />
  <Route path="/endodoncia" element={<EndodonciaPage />} />
  <Route path="/rehabilitacion-oral" element={<RehabilitacionOralPage />} />
  <Route path="/estetica-facial" element={<EsteticaFacialPage />} />
  ```
- [ ] Mantener ruta dinámica como fallback: `/especialidades/:id`
- [ ] Actualizar enlaces en navegación y componentes

#### **📝 Tarea 4.5: Actualizar Pre-rendering y SEO**
- [ ] Modificar `vite.config.ts` para incluir nuevas rutas:
  ```js
  routes: [
    '/',
    '/urgencias',
    '/implantologia', 
    '/estetica-dental',
    '/endodoncia',
    '/rehabilitacion-oral',
    '/estetica-facial',
    // ... otras rutas
  ]
  ```
- [ ] Actualizar `sitemap.xml` con las nuevas URLs
- [ ] Verificar meta tags individuales por página
- [ ] Actualizar schema markup para cada especialidad

#### **📝 Tarea 4.6: Actualizar Enlaces y Navegación**
- [ ] Actualizar `Navbar.tsx` - Enlaces de especialidades
- [ ] Actualizar `Hero.tsx` - Enlaces desde homepage
- [ ] Actualizar `Footer.tsx` - Enlaces en footer
- [ ] Revisar todos los enlaces internos en el sitio
- [ ] Actualizar breadcrumbs si existen

#### **📝 Tarea 4.7: Testing y Verificación**
- [ ] Probar todas las rutas nuevas funcionan correctamente
- [ ] Verificar que el diseño se mantiene idéntico
- [ ] Comprobar responsive design en todas las páginas
- [ ] Validar meta tags y schema markup
- [ ] Verificar pre-rendering genera HTML completo
- [ ] Probar navegación entre páginas

#### **📝 Tarea 4.8: Limpieza y Optimización**
- [ ] Eliminar `EspecialidadPage.tsx` original (hacer backup)
- [ ] Limpiar imports no utilizados
- [ ] Optimizar bundle size con code splitting
- [ ] Documentar nueva estructura en README.md

### **Beneficios Esperados:**

#### **🚀 SEO:**
- **URLs más limpias:** `/urgencias` vs `/especialidades/urgencias`
- **Mejor indexación:** Páginas individuales en sitemap
- **Meta tags específicos:** Optimización individual por especialidad
- **Schema markup dedicado:** Mejor rich snippets

#### **💻 Desarrollo:**
- **Mantenibilidad:** Archivos más pequeños y enfocados
- **Code splitting:** Carga más rápida
- **Trabajo paralelo:** Equipos pueden trabajar en especialidades diferentes
- **Debugging:** Más fácil encontrar y corregir errores

#### **📊 Performance:**
- **Menor bundle inicial:** Solo carga la especialidad necesaria
- **Mejor Core Web Vitals:** Tiempos de carga optimizados
- **Caché más eficiente:** Actualizaciones granulares

### **Consideraciones Importantes:**
- **Mantener diseño idéntico:** Sin cambios visuales
- **Preservar funcionalidad:** Todos los features actuales
- **SEO continuidad:** Redirects si es necesario
- **Testing exhaustivo:** Verificar cada especialidad

### **Cronograma Estimado:**
- **Fase 1-2:** 2-3 horas (Preparación y componentes base)
- **Fase 3:** 3-4 horas (Extracción de especialidades)
- **Fase 4-6:** 2-3 horas (Rutas, SEO y enlaces)
- **Fase 7-8:** 2-3 horas (Testing y limpieza)
- **Total:** 9-13 horas aproximadamente
