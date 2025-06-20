# Clínica KDENT - Sitio Web

Bienvenido al repositorio del sitio web de la **Clínica KDENT**, una moderna aplicación web desarrollada para ofrecer una experiencia de usuario excepcional y una gestión de contenido eficiente. Este documento sirve como una guía completa para desarrolladores y administradores del sitio, detallando la arquitectura, tecnologías, y procedimientos operativos.

## 1. Descripción General del Proyecto

Este proyecto es una Single Page Application (SPA) construida con tecnologías web modernas, diseñada para ser rápida, escalable y fácil de mantener. El sitio web presenta los servicios de la clínica, información de contacto, y secciones informativas para los pacientes.

- **URL de Producción:** [https://www.kdnt.cl](https://www.kdnt.cl)
- **Hosting:** Netlify

## 2. Stack Tecnológico

El proyecto utiliza un stack tecnológico moderno y robusto, enfocado en el ecosistema de React:

- **Framework Principal:** [React](https://react.dev/) v18
- **Bundler y Entorno de Desarrollo:** [Vite](https://vitejs.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) - Una colección de componentes de UI reutilizables y personalizables.
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) - Un framework de CSS utility-first para un diseño rápido y consistente.
- **Routing:** [React Router](https://reactrouter.com/) - Para la navegación y gestión de rutas en la aplicación.
- **Gestión de Estado Asíncrono:** [TanStack Query](https://tanstack.com/query/latest) - Para la gestión de datos de servidor, caching, y sincronización.

## 3. Estructura del Proyecto

El proyecto sigue una estructura organizada y modular para facilitar el desarrollo y mantenimiento:

```
/kdent.cl
├── /public/                # Archivos estáticos (imágenes, favicon, etc.)
├── /src/
│   ├── /components/        # Componentes de React reutilizables
│   │   ├── /ui/            # Componentes base de shadcn/ui
│   │   └── ...             # Componentes específicos de la aplicación
│   ├── /hooks/             # Hooks personalizados de React
│   ├── /lib/               # Funciones de utilidad (e.g., utils.ts)
│   ├── /pages/             # Componentes que representan las páginas del sitio
│   ├── App.tsx             # Componente raíz con la configuración de rutas
│   ├── main.tsx            # Punto de entrada de la aplicación
│   └── index.css           # Estilos globales
├── .gitignore              # Archivos y carpetas ignorados por Git
├── index.html              # Punto de entrada HTML de la aplicación
├── package.json            # Dependencias y scripts del proyecto
├── tailwind.config.ts      # Configuración de Tailwind CSS
├── tsconfig.json           # Configuración de TypeScript
└── vite.config.ts          # Configuración de Vite
```

## 4. Configuración y Puesta en Marcha

Para configurar y ejecutar el proyecto en un entorno de desarrollo local, sigue estos pasos:

**Requisitos Previos:**

- [Node.js](https://nodejs.org/en/) (versión 18 o superior)
- [pnpm](https://pnpm.io/installation) (recomendado como gestor de paquetes)
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/d17ba1b4-461d-465d-980c-85e38700c51c) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
