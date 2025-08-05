import type { Plugin } from 'vite';
import { metaTagsConfig } from '../config/metaTags';

export function metaTagsPlugin(): Plugin {
  return {
    name: 'meta-tags-injection',
    writeBundle(options, bundle) {
      // Este hook se ejecuta después de que todos los archivos han sido escritos
      // Necesitamos procesar los archivos HTML después del prerenderizado
    },
    generateBundle(options, bundle) {
      // Procesar cada archivo HTML generado
      Object.keys(bundle).forEach(fileName => {
        const chunk = bundle[fileName];
        
        if (chunk.type === 'asset' && fileName.endsWith('.html')) {
          let html = chunk.source as string;
          
          // Determinar la ruta basada en el nombre del archivo
          let route = '/';
          
          // Mapear nombres de archivos a rutas
          if (fileName === 'index.html') {
            route = '/';
          } else if (fileName.includes('/')) {
            // Para archivos como 'urgencias/index.html', 'endodoncia/index.html', etc.
            const pathParts = fileName.split('/');
            if (pathParts.length >= 2 && pathParts[1] === 'index.html') {
              route = '/' + pathParts[0];
            }
          }
          
          // Obtener configuración de meta tags para esta ruta
          const metaConfig = metaTagsConfig[route];
          
          if (metaConfig) {
            // Reemplazar title
            html = html.replace(
              /<title>.*?<\/title>/i,
              `<title>${metaConfig.title}</title>`
            );
            
            // Reemplazar meta description
            html = html.replace(
              /<meta name="description" content=".*?">/i,
              `<meta name="description" content="${metaConfig.description}">`
            );
            
            // Reemplazar meta keywords
            html = html.replace(
              /<meta name="keywords" content=".*?">/i,
              `<meta name="keywords" content="${metaConfig.keywords}">`
            );
            
            // Reemplazar canonical URL
            html = html.replace(
              /<link rel="canonical" href=".*?">/i,
              `<link rel="canonical" href="${metaConfig.canonical}">`
            );
            
            // Reemplazar Open Graph tags
            html = html.replace(
              /<meta property="og:title" content=".*?">/i,
              `<meta property="og:title" content="${metaConfig.ogTitle}">`
            );
            
            html = html.replace(
              /<meta property="og:description" content=".*?">/i,
              `<meta property="og:description" content="${metaConfig.ogDescription}">`
            );
            
            html = html.replace(
              /<meta property="og:url" content=".*?">/i,
              `<meta property="og:url" content="${metaConfig.ogUrl}">`
            );
            
            html = html.replace(
              /<meta property="og:image" content=".*?">/i,
              `<meta property="og:image" content="${metaConfig.ogImage}">`
            );
            
            // Reemplazar Twitter Cards
            html = html.replace(
              /<meta name="twitter:title" content=".*?">/i,
              `<meta name="twitter:title" content="${metaConfig.twitterTitle}">`
            );
            
            html = html.replace(
              /<meta name="twitter:description" content=".*?">/i,
              `<meta name="twitter:description" content="${metaConfig.twitterDescription}">`
            );
            
            html = html.replace(
              /<meta name="twitter:image" content=".*?">/i,
              `<meta name="twitter:image" content="${metaConfig.twitterImage}">`
            );
            
            // Actualizar el contenido del chunk
            chunk.source = html;
          }
        }
      });
    }
  };
}
