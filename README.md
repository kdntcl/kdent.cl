# Clínica KDENT - Sitio Web Oficial

Bienvenido al repositorio del sitio web de la **Clínica KDENT**. Este documento sirve como una guía técnica completa para desarrolladores, detallando la arquitectura, el stack tecnológico, las optimizaciones y los procedimientos operativos del proyecto en su estado actual de alto rendimiento.

**URL del Sitio en Producción:** [https://kdnt.cl](https://kdnt.cl)

## 1. Filosofía y Arquitectura del Proyecto

El proyecto ha sido transformado de una Single Page Application (SPA) estándar a un **Sitio Estático Pre-renderizado (SSG)**. Esta decisión arquitectónica es la piedra angular del proyecto y se tomó para alcanzar dos objetivos primordiales:

1.  **Rendimiento Máximo:** Servir archivos HTML estáticos y optimizados para lograr tiempos de carga casi instantáneos (First Contentful Paint).
2.  **SEO Superior:** Garantizar que los motores de búsqueda como Google puedan rastrear e indexar el contenido de manera eficiente, al recibir HTML completo en la primera solicitud.

La aplicación se construye con herramientas modernas como Vite, React y TypeScript, pero se despliega como un conjunto de archivos estáticos (HTML, CSS, JS), eliminando la necesidad de un servidor de Node.js en producción.

## 2. Stack Tecnológico Detallado

-   **Framework Principal:** **React 18** para la construcción de interfaces de usuario declarativas y componentizadas.
-   **Lenguaje:** **TypeScript** para añadir tipado estático, mejorar la mantenibilidad y reducir errores en tiempo de ejecución.
-   **Herramienta de Build:** **Vite 5.x** como motor de desarrollo y empaquetado, ofreciendo un arranque en frío instantáneo y Hot Module Replacement (HMR) extremadamente rápido.
-   **Componentes de UI:** **shadcn/ui**, una colección de componentes reutilizables construidos sobre **Radix UI** (para la accesibilidad) y estilizados con **Tailwind CSS**.
-   **Estilos:** **Tailwind CSS**, un framework utility-first que permite un diseño rápido y consistente directamente en el marcado.
-   **Enrutamiento:** **React Router DOM v6** para gestionar las rutas de la aplicación del lado del cliente antes de la hidratación.
-   **Generación Estática (SSG):** **`vite-plugin-prerender-esm-fix`**, un plugin de Vite que renderiza las rutas de la aplicación a archivos HTML estáticos durante el proceso de build.
-   **Gestor de Paquetes:** **npm**, estandarizado como el único gestor de dependencias del proyecto.
-   **Plataforma de Despliegue:** **Netlify**, para hosting de sitios estáticos con integración y despliegue continuo (CI/CD).

## 3. Estructura del Proyecto

La organización de los archivos está diseñada para ser intuitiva y escalable.

```
kdent.cl/
├── dist/             # Directorio de salida de la compilación (ignorado por Git).
├── public/           # Activos estáticos que se copian directamente a `dist`.
│   ├── images/       # Todas las imágenes optimizadas en formato WebP.
│   ├── robots.txt    # Reglas para los crawlers de motores de búsqueda.
│   └── sitemap.xml   # Mapa del sitio para una indexación eficiente.
├── src/              # Código fuente principal de la aplicación.
│   ├── components/   # Componentes reutilizables de React.
│   │   ├── ui/       # Componentes base de shadcn/ui.
│   │   ├── Hero.tsx
│   │   └── Navbar.tsx
│   ├── lib/          # Funciones de utilidad (e.g., `cn` de shadcn).
│   ├── pages/        # Componentes que representan las páginas completas.
│   └── main.tsx      # Punto de entrada de la aplicación React.
├── .gitignore        # Archivos y directorios ignorados por Git.
├── index.html        # Plantilla HTML principal que Vite utiliza.
├── netlify.toml      # Configuración de despliegue para Netlify.
├── package.json      # Dependencias, scripts y metadatos del proyecto.
├── tasks.md          # Historial de tareas de optimización (completado).
├── tsconfig.json     # Configuración del compilador de TypeScript.
└── vite.config.ts    # Archivo de configuración principal de Vite.
```

## 4. Optimizaciones Críticas Implementadas

### 4.1. Static Site Generation (SSG)

-   El plugin `vite-plugin-prerender-esm-fix` se configura en `vite.config.ts` para tomar las rutas definidas y generar un directorio con un archivo `index.html` para cada una.
-   **Proceso:** Durante `npm run build`, después de que Vite compila el JS y CSS, el plugin inicia un servidor sin cabeza (headless), visita cada ruta, captura el HTML renderizado y lo guarda en un archivo.
-   **Resultado:** Un sitio web completamente estático que no depende de JavaScript para mostrar su contenido inicial, ideal para la velocidad y el SEO.

### 4.2. Optimización de Activos Digitales

-   **Formato de Imagen:** Todas las imágenes (JPG, PNG) han sido convertidas al formato **WebP** para una compresión de última generación, reduciendo significativamente su peso.
-   **Redimensionamiento:** Las imágenes se han escalado a las dimensiones máximas requeridas en el layout para evitar el envío de datos innecesarios.
-   **Alojamiento Local:** Todos los activos se sirven desde el mismo dominio, eliminando latencia y dependencias de CDNs o servicios de terceros.

## 5. Flujo de Trabajo de Desarrollo

### 5.1. Prerrequisitos

-   Node.js (v18 o superior)
-   npm (v9 o superior)

### 5.2. Instalación

Clonar el repositorio y ejecutar el siguiente comando para instalar las dependencias:

```bash
npm install
```

### 5.3. Servidor de Desarrollo

Para iniciar el servidor de desarrollo de Vite con Hot-Module Replacement (HMR):

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:8080`.

### 5.4. Compilación para Producción

Para ejecutar el proceso de build y generar el sitio estático en el directorio `dist/`:

```bash
npm run build
```

## 6. Despliegue en Netlify

El despliegue está automatizado a través de Netlify y su integración con GitHub.

-   **Configuración (`netlify.toml`):**
    -   `command = "npm run build"`: El comando de compilación.
    -   `publish = "dist"`: El directorio que se despliega.
-   **Lógica de Despliegue:** Cualquier `push` a la rama `main` dispara un nuevo build y despliegue.
-   **Nota Crítica:** El archivo `netlify.toml` **no contiene** una regla de redirección de SPA (`/* -> /index.html`). Su ausencia es intencional y necesaria para que Netlify sirva correctamente los archivos HTML de cada subdirectorio generado por el pre-rendering.

## 7. Configuración SEO

-   **`robots.txt`:** Permite el rastreo completo del sitio y apunta al `sitemap.xml`.
-   **`sitemap.xml`:** Contiene todas las URLs canónicas. Debe ser actualizado manualmente si se añaden nuevas páginas.
-   **Meta Tags:** `index.html` contiene metadatos cruciales para SEO, Open Graph (Facebook, etc.) y Twitter Cards, asegurando una correcta previsualización al compartir enlaces.
