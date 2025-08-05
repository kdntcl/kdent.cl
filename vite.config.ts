import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import viteCommonjs from 'vite-plugin-commonjs';
import prerender from 'vite-plugin-prerender-esm-fix';


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: '::',
    port: 8080,
  },
  plugins: [
    react(),
    viteCommonjs(),
    
      prerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: [
        '/',
        '/sobre-nosotros',
        '/ubicacion',
        '/politica-de-privacidad',
        '/terminos-y-condiciones',
        '/blog',

        // Especialidades - Páginas Individuales
        '/urgencias',
        '/estetica-dental',
        '/estetica-facial',
        '/endodoncia',
        '/rehabilitacion-oral',
        '/implantologia',

        // Artículos del Blog
        '/blog/como-aliviar-dolor-de-muela',
        '/blog/tipos-de-ortodoncia',
        '/blog/importancia-limpieza-dental',
        '/blog/odontopediatria-salud-bucal-ninos',
        '/blog/bruxismo-causas-tratamientos',
        '/blog/miedo-al-dentista-como-superarlo',
        '/blog/blanqueamiento-dental-profesional',
        '/blog/cuidados-post-extraccion-dental',
        '/blog/alimentos-que-manchan-dientes',
        '/blog/sensibilidad-dental-causas-soluciones',
        '/blog/elegir-un-dentista-en-concepcion',
        '/blog/gingivitis-periodontitis-cuidado-encias'
      ],
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    minify: true,
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
  },
}));

