const fs = require('fs');
const path = require('path');

// Configuración de meta tags por ruta
const metaTagsConfig = {
  '/': {
    title: 'Clínica Dental en Concepción | KDENT - Dentista de Confianza',
    description: 'Clínica dental KDENT en Concepción. Dentistas especializados, tecnología avanzada y atención personalizada. Agenda tu hora online. Mejor clínica dental Concepción.',
    keywords: 'clínica dental en concepción, dentista en concepción, mejor clínica dental concepción, dentista bueno y barato concepción, agendar hora dentista concepción, kdnt.cl',
    canonical: 'https://kdnt.cl/',
    ogTitle: 'Clínica Dental en Concepción | KDENT - Dentista de Confianza',
    ogDescription: 'Clínica dental KDENT en Concepción. Dentistas especializados, tecnología avanzada y atención personalizada. Agenda tu hora online.',
    ogUrl: 'https://kdnt.cl/',
    ogImage: 'https://kdnt.cl/images/social.webp',
    twitterTitle: 'Clínica Dental en Concepción | KDENT - Dentista de Confianza',
    twitterDescription: 'Clínica dental KDENT en Concepción. Dentistas especializados, tecnología avanzada y atención personalizada. Agenda tu hora online.',
    twitterImage: 'https://kdnt.cl/images/social.webp'
  },
  '/urgencias': {
    title: 'Urgencias Dentales en Concepción | Atención 24/7 | KDENT',
    description: 'Urgencias dentales en Concepción. Atención inmediata para dolor de muelas, traumatismos y emergencias odontológicas. Dentista de urgencia disponible.',
    keywords: 'urgencias dentales concepción, dentista de urgencia concepción, dolor de muelas concepción, emergencia dental concepción, atención dental 24 horas',
    canonical: 'https://kdnt.cl/urgencias',
    ogTitle: 'Urgencias Dentales en Concepción | Atención 24/7 | KDENT',
    ogDescription: 'Urgencias dentales en Concepción. Atención inmediata para dolor de muelas, traumatismos y emergencias odontológicas.',
    ogUrl: 'https://kdnt.cl/urgencias',
    ogImage: 'https://kdnt.cl/images/urgencias-og.webp',
    twitterTitle: 'Urgencias Dentales en Concepción | Atención 24/7 | KDENT',
    twitterDescription: 'Urgencias dentales en Concepción. Atención inmediata para dolor de muelas, traumatismos y emergencias odontológicas.',
    twitterImage: 'https://kdnt.cl/images/urgencias-og.webp'
  },
  '/endodoncia': {
    title: 'Endodoncia en Concepción | Tratamiento de Conducto | KDENT',
    description: 'Especialistas en endodoncia y tratamiento de conducto en Concepción. Tecnología rotatoria avanzada, sin dolor. Salva tu diente natural.',
    keywords: 'endodoncia concepción, tratamiento de conducto concepción, especialista endodoncia, dolor de muelas tratamiento, conducto dental concepción',
    canonical: 'https://kdnt.cl/endodoncia',
    ogTitle: 'Endodoncia en Concepción | Tratamiento de Conducto | KDENT',
    ogDescription: 'Especialistas en endodoncia y tratamiento de conducto en Concepción. Tecnología rotatoria avanzada, sin dolor.',
    ogUrl: 'https://kdnt.cl/endodoncia',
    ogImage: 'https://kdnt.cl/images/endodoncia-og.webp',
    twitterTitle: 'Endodoncia en Concepción | Tratamiento de Conducto | KDENT',
    twitterDescription: 'Especialistas en endodoncia y tratamiento de conducto en Concepción. Tecnología rotatoria avanzada, sin dolor.',
    twitterImage: 'https://kdnt.cl/images/endodoncia-og.webp'
  },
  '/implantologia': {
    title: 'Implantes Dentales en Concepción | Implantología | KDENT',
    description: 'Implantes dentales en Concepción con garantía. Especialistas en implantología, cirugía guiada y rehabilitación completa. Recupera tu sonrisa.',
    keywords: 'implantes dentales concepción, implantología concepción, dentadura fija concepción, cirugía dental concepción, especialista implantes',
    canonical: 'https://kdnt.cl/implantologia',
    ogTitle: 'Implantes Dentales en Concepción | Implantología | KDENT',
    ogDescription: 'Implantes dentales en Concepción con garantía. Especialistas en implantología, cirugía guiada y rehabilitación completa.',
    ogUrl: 'https://kdnt.cl/implantologia',
    ogImage: 'https://kdnt.cl/images/implantologia-og.webp',
    twitterTitle: 'Implantes Dentales en Concepción | Implantología | KDENT',
    twitterDescription: 'Implantes dentales en Concepción con garantía. Especialistas en implantología, cirugía guiada y rehabilitación completa.',
    twitterImage: 'https://kdnt.cl/images/implantologia-og.webp'
  },
  '/estetica-dental': {
    title: 'Estética Dental en Concepción | Diseño de Sonrisa | KDENT',
    description: 'Estética dental y diseño de sonrisa en Concepción. Carillas, blanqueamiento, coronas estéticas. Transforma tu sonrisa con especialistas.',
    keywords: 'estética dental concepción, diseño de sonrisa concepción, carillas dentales concepción, blanqueamiento dental concepción, sonrisa perfecta',
    canonical: 'https://kdnt.cl/estetica-dental',
    ogTitle: 'Estética Dental en Concepción | Diseño de Sonrisa | KDENT',
    ogDescription: 'Estética dental y diseño de sonrisa en Concepción. Carillas, blanqueamiento, coronas estéticas.',
    ogUrl: 'https://kdnt.cl/estetica-dental',
    ogImage: 'https://kdnt.cl/images/estetica-dental-og.webp',
    twitterTitle: 'Estética Dental en Concepción | Diseño de Sonrisa | KDENT',
    twitterDescription: 'Estética dental y diseño de sonrisa en Concepción. Carillas, blanqueamiento, coronas estéticas.',
    twitterImage: 'https://kdnt.cl/images/estetica-dental-og.webp'
  },
  '/rehabilitacion-oral': {
    title: 'Rehabilitación Oral en Concepción | Prótesis Dentales | KDENT',
    description: 'Rehabilitación oral completa en Concepción. Prótesis fijas, removibles, sobre implantes. Recupera función masticatoria y estética.',
    keywords: 'rehabilitación oral concepción, prótesis dentales concepción, dentadura postiza concepción, prótesis sobre implantes, restauración dental',
    canonical: 'https://kdnt.cl/rehabilitacion-oral',
    ogTitle: 'Rehabilitación Oral en Concepción | Prótesis Dentales | KDENT',
    ogDescription: 'Rehabilitación oral completa en Concepción. Prótesis fijas, removibles, sobre implantes.',
    ogUrl: 'https://kdnt.cl/rehabilitacion-oral',
    ogImage: 'https://kdnt.cl/images/rehabilitacion-oral-og.webp',
    twitterTitle: 'Rehabilitación Oral en Concepción | Prótesis Dentales | KDENT',
    twitterDescription: 'Rehabilitación oral completa en Concepción. Prótesis fijas, removibles, sobre implantes.',
    twitterImage: 'https://kdnt.cl/images/rehabilitacion-oral-og.webp'
  },
  '/estetica-facial': {
    title: 'Estética Facial en Concepción | Rejuvenecimiento | KDENT',
    description: 'Estética facial y rejuvenecimiento en Concepción. Botox, ácido hialurónico, tratamientos anti-edad. Realza tu belleza natural.',
    keywords: 'estética facial concepción, botox concepción, ácido hialurónico concepción, rejuvenecimiento facial, tratamientos anti-edad concepción',
    canonical: 'https://kdnt.cl/estetica-facial',
    ogTitle: 'Estética Facial en Concepción | Rejuvenecimiento | KDENT',
    ogDescription: 'Estética facial y rejuvenecimiento en Concepción. Botox, ácido hialurónico, tratamientos anti-edad.',
    ogUrl: 'https://kdnt.cl/estetica-facial',
    ogImage: 'https://kdnt.cl/images/estetica-facial-og.webp',
    twitterTitle: 'Estética Facial en Concepción | Rejuvenecimiento | KDENT',
    twitterDescription: 'Estética facial y rejuvenecimiento en Concepción. Botox, ácido hialurónico, tratamientos anti-edad.',
    twitterImage: 'https://kdnt.cl/images/estetica-facial-og.webp'
  },
  '/sobre-nosotros': {
    title: 'Sobre Nosotros | Clínica KDENT Concepción | Nuestro Equipo',
    description: 'Conoce al equipo de especialistas de Clínica KDENT en Concepción. Más de 10 años de experiencia, tecnología avanzada y atención personalizada.',
    keywords: 'clínica kdent concepción, equipo dental concepción, dentistas especialistas concepción, experiencia dental, tecnología dental avanzada',
    canonical: 'https://kdnt.cl/sobre-nosotros',
    ogTitle: 'Sobre Nosotros | Clínica KDENT Concepción | Nuestro Equipo',
    ogDescription: 'Conoce al equipo de especialistas de Clínica KDENT en Concepción. Más de 10 años de experiencia.',
    ogUrl: 'https://kdnt.cl/sobre-nosotros',
    ogImage: 'https://kdnt.cl/images/equipo-og.webp',
    twitterTitle: 'Sobre Nosotros | Clínica KDENT Concepción | Nuestro Equipo',
    twitterDescription: 'Conoce al equipo de especialistas de Clínica KDENT en Concepción. Más de 10 años de experiencia.',
    twitterImage: 'https://kdnt.cl/images/equipo-og.webp'
  },
  '/ubicacion': {
    title: 'Ubicación | Clínica KDENT Concepción | Cómo Llegar',
    description: 'Ubicación de Clínica KDENT en Concepción. Dirección, horarios de atención, contacto y cómo llegar. Estacionamiento disponible.',
    keywords: 'ubicación kdent concepción, dirección clínica dental concepción, horarios atención dental, contacto dentista concepción, estacionamiento',
    canonical: 'https://kdnt.cl/ubicacion',
    ogTitle: 'Ubicación | Clínica KDENT Concepción | Cómo Llegar',
    ogDescription: 'Ubicación de Clínica KDENT en Concepción. Dirección, horarios de atención, contacto y cómo llegar.',
    ogUrl: 'https://kdnt.cl/ubicacion',
    ogImage: 'https://kdnt.cl/images/ubicacion-og.webp',
    twitterTitle: 'Ubicación | Clínica KDENT Concepción | Cómo Llegar',
    twitterDescription: 'Ubicación de Clínica KDENT en Concepción. Dirección, horarios de atención, contacto y cómo llegar.',
    twitterImage: 'https://kdnt.cl/images/ubicacion-og.webp'
  }
};

function updateMetaTags(htmlFilePath, route) {
  const metaConfig = metaTagsConfig[route];
  if (!metaConfig) {
    console.log(`No meta config found for route: ${route}`);
    return;
  }

  let html = fs.readFileSync(htmlFilePath, 'utf8');

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

  // Escribir el archivo actualizado
  fs.writeFileSync(htmlFilePath, html);
  console.log(`✅ Updated meta tags for ${route} -> ${htmlFilePath}`);
}

// Función principal
function main() {
  const distDir = path.join(__dirname, '..', 'dist');
  
  // Mapeo de archivos HTML a rutas
  const htmlFiles = [
    { file: path.join(distDir, 'index.html'), route: '/' },
    { file: path.join(distDir, 'urgencias', 'index.html'), route: '/urgencias' },
    { file: path.join(distDir, 'endodoncia', 'index.html'), route: '/endodoncia' },
    { file: path.join(distDir, 'implantologia', 'index.html'), route: '/implantologia' },
    { file: path.join(distDir, 'estetica-dental', 'index.html'), route: '/estetica-dental' },
    { file: path.join(distDir, 'rehabilitacion-oral', 'index.html'), route: '/rehabilitacion-oral' },
    { file: path.join(distDir, 'estetica-facial', 'index.html'), route: '/estetica-facial' },
    { file: path.join(distDir, 'sobre-nosotros', 'index.html'), route: '/sobre-nosotros' },
    { file: path.join(distDir, 'ubicacion', 'index.html'), route: '/ubicacion' }
  ];

  console.log('🚀 Starting meta tags update process...');
  
  htmlFiles.forEach(({ file, route }) => {
    if (fs.existsSync(file)) {
      updateMetaTags(file, route);
    } else {
      console.log(`⚠️  File not found: ${file}`);
    }
  });

  console.log('✅ Meta tags update process completed!');
}

// Ejecutar el script
main();
