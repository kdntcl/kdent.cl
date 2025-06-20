const pages = [
  '/',
  '/nosotros',
  '/promociones',
  '/especialidades',
  '/contacto',
  '/politica-de-privacidad'
];

const especialidades = [
  'urgencias',
  'estetica-facial',
  'endodoncia',
  'rehabilitacion-oral',
  'implantologia',
  'estetica-dental'
];

const especialidadPages = especialidades.map(e => `/especialidades/${e}`);

export function prerender(): string[] {
  return [...pages, ...especialidadPages];
}
