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
        '/especialidades/urgencias',
        '/especialidades/estetica-facial',
        '/especialidades/endodoncia',
        '/especialidades/rehabilitacion-oral',
        '/especialidades/implantologia'
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

