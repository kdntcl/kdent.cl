export interface MetaTagsConfig {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogImage: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
}

export const metaTagsConfig: Record<string, MetaTagsConfig> = {
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
    ogImage: 'https://kdnt.cl/images/urgencias.webp',
    twitterTitle: 'Urgencias Dentales en Concepción | Atención 24/7 | KDENT',
    twitterDescription: 'Urgencias dentales en Concepción. Atención inmediata para dolor de muelas, traumatismos y emergencias odontológicas.',
    twitterImage: 'https://kdnt.cl/images/urgencias.webp'
  },
  '/endodoncia': {
    title: 'Endodoncia en Concepción | Tratamiento de Conducto | KDENT',
    description: 'Especialistas en endodoncia y tratamiento de conducto en Concepción. Tecnología rotatoria avanzada, sin dolor. Salva tu diente natural.',
    keywords: 'endodoncia concepción, tratamiento de conducto concepción, especialista endodoncia, dolor de muelas tratamiento, conducto dental concepción',
    canonical: 'https://kdnt.cl/endodoncia',
    ogTitle: 'Endodoncia en Concepción | Tratamiento de Conducto | KDENT',
    ogDescription: 'Especialistas en endodoncia y tratamiento de conducto en Concepción. Tecnología rotatoria avanzada, sin dolor.',
    ogUrl: 'https://kdnt.cl/endodoncia',
    ogImage: 'https://kdnt.cl/images/endodoncia.webp',
    twitterTitle: 'Endodoncia en Concepción | Tratamiento de Conducto | KDENT',
    twitterDescription: 'Especialistas en endodoncia y tratamiento de conducto en Concepción. Tecnología rotatoria avanzada, sin dolor.',
    twitterImage: 'https://kdnt.cl/images/endodoncia.webp'
  },
  '/implantologia': {
    title: 'Implantes Dentales en Concepción | Implantología | KDENT',
    description: 'Implantes dentales en Concepción con garantía. Especialistas en implantología, cirugía guiada y rehabilitación completa. Recupera tu sonrisa.',
    keywords: 'implantes dentales concepción, implantología concepción, dentadura fija concepción, cirugía dental concepción, especialista implantes',
    canonical: 'https://kdnt.cl/implantologia',
    ogTitle: 'Implantes Dentales en Concepción | Implantología | KDENT',
    ogDescription: 'Implantes dentales en Concepción con garantía. Especialistas en implantología, cirugía guiada y rehabilitación completa.',
    ogUrl: 'https://kdnt.cl/implantologia',
    ogImage: 'https://kdnt.cl/images/implantologia.webp',
    twitterTitle: 'Implantes Dentales en Concepción | Implantología | KDENT',
    twitterDescription: 'Implantes dentales en Concepción con garantía. Especialistas en implantología, cirugía guiada y rehabilitación completa.',
    twitterImage: 'https://kdnt.cl/images/implantologia.webp'
  },
  '/estetica-dental': {
    title: 'Estética Dental en Concepción | Diseño de Sonrisa | KDENT',
    description: 'Estética dental y diseño de sonrisa en Concepción. Carillas, blanqueamiento, coronas estéticas. Transforma tu sonrisa con especialistas.',
    keywords: 'estética dental concepción, diseño de sonrisa concepción, carillas dentales concepción, blanqueamiento dental concepción, sonrisa perfecta',
    canonical: 'https://kdnt.cl/estetica-dental',
    ogTitle: 'Estética Dental en Concepción | Diseño de Sonrisa | KDENT',
    ogDescription: 'Estética dental y diseño de sonrisa en Concepción. Carillas, blanqueamiento, coronas estéticas.',
    ogUrl: 'https://kdnt.cl/estetica-dental',
    ogImage: 'https://kdnt.cl/images/estetica-dental.webp',
    twitterTitle: 'Estética Dental en Concepción | Diseño de Sonrisa | KDENT',
    twitterDescription: 'Estética dental y diseño de sonrisa en Concepción. Carillas, blanqueamiento, coronas estéticas.',
    twitterImage: 'https://kdnt.cl/images/estetica-dental.webp'
  },
  '/rehabilitacion-oral': {
    title: 'Rehabilitación Oral en Concepción | Prótesis Dentales | KDENT',
    description: 'Rehabilitación oral completa en Concepción. Prótesis fijas, removibles, sobre implantes. Recupera función masticatoria y estética.',
    keywords: 'rehabilitación oral concepción, prótesis dentales concepción, dentadura postiza concepción, prótesis sobre implantes, restauración dental',
    canonical: 'https://kdnt.cl/rehabilitacion-oral',
    ogTitle: 'Rehabilitación Oral en Concepción | Prótesis Dentales | KDENT',
    ogDescription: 'Rehabilitación oral completa en Concepción. Prótesis fijas, removibles, sobre implantes.',
    ogUrl: 'https://kdnt.cl/rehabilitacion-oral',
    ogImage: 'https://kdnt.cl/images/rehabilitacion-oral.webp',
    twitterTitle: 'Rehabilitación Oral en Concepción | Prótesis Dentales | KDENT',
    twitterDescription: 'Rehabilitación oral completa en Concepción. Prótesis fijas, removibles, sobre implantes.',
    twitterImage: 'https://kdnt.cl/images/rehabilitacion-oral.webp'
  },
  '/estetica-facial': {
    title: 'Estética Facial en Concepción | Rejuvenecimiento | KDENT',
    description: 'Estética facial y rejuvenecimiento en Concepción. Botox, ácido hialurónico, tratamientos anti-edad. Realza tu belleza natural.',
    keywords: 'estética facial concepción, botox concepción, ácido hialurónico concepción, rejuvenecimiento facial, tratamientos anti-edad concepción',
    canonical: 'https://kdnt.cl/estetica-facial',
    ogTitle: 'Estética Facial en Concepción | Rejuvenecimiento | KDENT',
    ogDescription: 'Estética facial y rejuvenecimiento en Concepción. Botox, ácido hialurónico, tratamientos anti-edad.',
    ogUrl: 'https://kdnt.cl/estetica-facial',
    ogImage: 'https://kdnt.cl/images/estetica-facial.webp',
    twitterTitle: 'Estética Facial en Concepción | Rejuvenecimiento | KDENT',
    twitterDescription: 'Estética facial y rejuvenecimiento en Concepción. Botox, ácido hialurónico, tratamientos anti-edad.',
    twitterImage: 'https://kdnt.cl/images/estetica-facial.webp'
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
