#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuración de meta tags por página
const metaConfigs = {
  '/': {
    title: 'Clínica Dental en Concepción | KDENT - Dentista de Confianza',
    description: 'Clínica dental KDENT en Concepción. Dentistas especializados, tecnología avanzada y atención personalizada. Agenda tu hora online.',
    canonical: 'https://kdnt.cl/',
    ogImage: 'https://kdnt.cl/images/kdent-og.webp'
  },
  '/urgencias': {
    title: 'Urgencias Dentales 24/7 en Concepción | Clínica KDENT',
    description: 'Atención de urgencias dentales en Concepción. Dolor de muelas, traumatismos y emergencias dentales. Atención inmediata en Clínica KDENT.',
    canonical: 'https://kdnt.cl/urgencias',
    ogImage: 'https://kdnt.cl/images/urgencias-og.webp'
  },
  '/endodoncia': {
    title: 'Endodoncia en Concepción | Tratamiento de Conducto | KDENT',
    description: 'Tratamiento de endodoncia en Concepción. Salvamos tu diente con tratamiento de conducto especializado. Tecnología avanzada en Clínica KDENT.',
    canonical: 'https://kdnt.cl/endodoncia',
    ogImage: 'https://kdnt.cl/images/endodoncia-og.webp'
  },
  '/implantologia': {
    title: 'Implantes Dentales en Concepción | Implantología | KDENT',
    description: 'Implantes dentales en Concepción con tecnología de vanguardia. Recupera tu sonrisa con implantología especializada en Clínica KDENT.',
    canonical: 'https://kdnt.cl/implantologia',
    ogImage: 'https://kdnt.cl/images/implantologia-og.webp'
  },
  '/estetica-dental': {
    title: 'Estética Dental en Concepción | Diseño de Sonrisa | KDENT',
    description: 'Estética dental en Concepción. Blanqueamiento, carillas y diseño de sonrisa. Transforma tu sonrisa en Clínica KDENT.',
    canonical: 'https://kdnt.cl/estetica-dental',
    ogImage: 'https://kdnt.cl/images/estetica-dental-og.webp'
  },
  '/rehabilitacion-oral': {
    title: 'Rehabilitación Oral en Concepción | Prótesis Dentales | KDENT',
    description: 'Rehabilitación oral completa en Concepción. Prótesis fijas, removibles y sobre implantes. Recupera tu función masticatoria en KDENT.',
    canonical: 'https://kdnt.cl/rehabilitacion-oral',
    ogImage: 'https://kdnt.cl/images/rehabilitacion-oral-og.webp'
  },
  '/estetica-facial': {
    title: 'Estética Facial en Concepción | Botox y Rellenos | KDENT',
    description: 'Tratamientos de estética facial en Concepción. Botox, ácido hialurónico y rejuvenecimiento facial. Belleza integral en Clínica KDENT.',
    canonical: 'https://kdnt.cl/estetica-facial',
    ogImage: 'https://kdnt.cl/images/estetica-facial-og.webp'
  },
  '/sobre-nosotros': {
    title: 'Sobre Nosotros | Clínica Dental KDENT Concepción',
    description: 'Conoce la historia de Clínica KDENT. Más de 10 años brindando atención dental de calidad en Concepción con tecnología de vanguardia.',
    canonical: 'https://kdnt.cl/sobre-nosotros',
    ogImage: 'https://kdnt.cl/images/sobre-nosotros-og.webp'
  },
  '/ubicacion': {
    title: 'Ubicación y Contacto | Clínica Dental KDENT Concepción',
    description: 'Visítanos en Clínica KDENT Concepción. Dirección, horarios de atención y cómo llegar. Agenda tu hora online o por teléfono.',
    canonical: 'https://kdnt.cl/ubicacion',
    ogImage: 'https://kdnt.cl/images/ubicacion-og.webp'
  }
};

function updateMetaTags() {
  console.log('🚀 Starting post-build meta tags update...');
  
  const distPath = path.join(process.cwd(), 'dist');
  let updatedCount = 0;
  
  // Actualizar cada ruta
  Object.entries(metaConfigs).forEach(([route, config]) => {
    const filePath = route === '/' 
      ? path.join(distPath, 'index.html')
      : path.join(distPath, route.substring(1), 'index.html');
    
    if (fs.existsSync(filePath)) {
      try {
        let html = fs.readFileSync(filePath, 'utf8');
        
        // Actualizar title
        html = html.replace(/<title>.*?<\/title>/, `<title>${config.title}</title>`);
        
        // Actualizar description
        html = html.replace(
          /<meta name="description" content=".*?">/,
          `<meta name="description" content="${config.description}">`
        );
        
        // Agregar/actualizar canonical
        if (html.includes('<link rel="canonical"')) {
          html = html.replace(
            /<link rel="canonical" href=".*?">/,
            `<link rel="canonical" href="${config.canonical}">`
          );
        } else {
          html = html.replace(
            '</head>',
            `  <link rel="canonical" href="${config.canonical}">\n</head>`
          );
        }
        
        // Agregar/actualizar Open Graph
        const ogTags = [
          `<meta property="og:title" content="${config.title}">`,
          `<meta property="og:description" content="${config.description}">`,
          `<meta property="og:url" content="${config.canonical}">`,
          `<meta property="og:image" content="${config.ogImage}">`,
          `<meta property="og:type" content="website">`,
          `<meta name="twitter:card" content="summary_large_image">`,
          `<meta name="twitter:title" content="${config.title}">`,
          `<meta name="twitter:description" content="${config.description}">`,
          `<meta name="twitter:image" content="${config.ogImage}">`
        ];
        
        // Remover meta tags existentes
        html = html.replace(/<meta property="og:.*?">/g, '');
        html = html.replace(/<meta name="twitter:.*?">/g, '');
        
        // Agregar nuevos meta tags
        html = html.replace('</head>', `  ${ogTags.join('\n  ')}\n</head>`);
        
        fs.writeFileSync(filePath, html);
        console.log(`✅ Updated meta tags for ${route} -> ${filePath}`);
        updatedCount++;
      } catch (error) {
        console.error(`❌ Error updating ${route}:`, error.message);
      }
    } else {
      console.log(`⚠️  File not found: ${filePath}`);
    }
  });
  
  console.log(`🎉 Meta tags update completed! Updated ${updatedCount} files.`);
}

// Ejecutar solo si hay archivos prerenderizados
setTimeout(() => {
  updateMetaTags();
}, 2000); // Esperar 2 segundos para que el plugin termine
