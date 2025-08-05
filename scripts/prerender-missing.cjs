const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const missingRoutes = [
  '/',
  '/sobre-nosotros',
  '/ubicacion'
];

async function prerenderMissingRoutes() {
  console.log('🚀 Starting prerendering for missing routes...');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Configurar viewport y user agent
  await page.setViewport({ width: 1200, height: 800 });
  await page.setUserAgent('Mozilla/5.0 (compatible; PrerenderBot/1.0)');
  
  const distDir = path.join(__dirname, '..', 'dist');
  
  for (const route of missingRoutes) {
    try {
      console.log(`📄 Prerendering: ${route}`);
      
      // Navegar a la página
      await page.goto(`http://localhost:4174${route}`, {
        waitUntil: 'networkidle0',
        timeout: 60000
      });
      
      // Esperar a que React se renderice completamente
      await page.waitForSelector('#root > *', { timeout: 15000 });
      
      // Esperar adicional para páginas complejas
      await new Promise(resolve => setTimeout(resolve, 3000));
      
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
      
    } catch (error) {
      console.error(`❌ Error prerendering ${route}:`, error.message);
    }
  }
  
  await browser.close();
  console.log('🎉 Missing routes prerendering completed!');
}

prerenderMissingRoutes().catch(console.error);
