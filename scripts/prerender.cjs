const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Separar rutas por complejidad para optimizar tiempos
const simpleRoutes = [
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
];

// Rutas complejas que requieren más tiempo
const complexRoutes = [
  '/',
  '/sobre-nosotros',
  '/ubicacion'
];

async function prerenderRoute(page, route, distDir, isComplex = false) {
  try {
    console.log(`📄 Prerendering: ${route}`);
    
    const timeout = isComplex ? 45000 : 15000;
    const waitTime = isComplex ? 3000 : 1000;
    
    // Navegar a la página
    await page.goto(`http://localhost:4173${route}`, {
      waitUntil: 'networkidle2', // Más rápido que networkidle0
      timeout: timeout
    });
    
    // Esperar a que React se renderice completamente
    await page.waitForSelector('#root > *', { timeout: 10000 });
    
    // Esperar adicional según complejidad
    await new Promise(resolve => setTimeout(resolve, waitTime));
    
    // Obtener el HTML completo renderizado
    const html = await page.content();
    
    // Determinar la ruta del archivo
    let filePath;
    if (route === '/') {
      filePath = path.join(distDir, 'index.html');
    } else {
      const routeDir = path.join(distDir, route);
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      filePath = path.join(routeDir, 'index.html');
    }
    
    // Escribir el HTML prerenderizado
    fs.writeFileSync(filePath, html);
    console.log(`✅ Prerendered: ${route} -> ${filePath}`);
    return true;
    
  } catch (error) {
    console.error(`❌ Error prerendering ${route}:`, error.message);
    return false;
  }
}

async function prerenderRoutes() {
  console.log('🚀 Starting optimized prerendering process...');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox', 
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu'
    ]
  });
  
  const page = await browser.newPage();
  
  // Configurar viewport y user agent
  await page.setViewport({ width: 1200, height: 800 });
  await page.setUserAgent('Mozilla/5.0 (compatible; PrerenderBot/1.0)');
  
  // Optimizar rendimiento
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    if(req.resourceType() == 'stylesheet' || req.resourceType() == 'font' || req.resourceType() == 'image'){
      req.abort();
    } else {
      req.continue();
    }
  });
  
  const distDir = path.join(__dirname, '..', 'dist');
  let successCount = 0;
  let totalRoutes = simpleRoutes.length + complexRoutes.length;
  
  // Procesar rutas simples primero (más rápido)
  console.log('📋 Processing simple routes...');
  for (const route of simpleRoutes) {
    const success = await prerenderRoute(page, route, distDir, false);
    if (success) successCount++;
  }
  
  // Procesar rutas complejas con más tiempo
  console.log('📋 Processing complex routes...');
  for (const route of complexRoutes) {
    const success = await prerenderRoute(page, route, distDir, true);
    if (success) successCount++;
  }
  
  await browser.close();
  console.log(`🎉 Prerendering completed! ${successCount}/${totalRoutes} routes successful`);
}

// Ejecutar solo si se llama directamente
if (require.main === module) {
  prerenderRoutes().catch(console.error);
}

module.exports = { prerenderRoutes };
