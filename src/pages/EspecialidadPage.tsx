import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

// Meta tags SEO para cada especialidad
const getMetaTags = (especialidad: string) => {
  const metaTags = {
    urgencias: {
      title: 'Urgencia Dental Concepción | Dentista 24 Horas | Clínica KDENT',
      description: 'Urgencias dentales en Concepción. Atención inmediata para dolor dental, traumatismos e infecciones. Clínica KDENT - Dentista 24 horas.',
      keywords: 'urgencia dental concepción, dentista 24 horas concepción, dolor de muela, emergencia dental'
    },
    implantologia: {
      title: 'Implantes Dentales Concepción | Implantología | Clínica KDENT',
      description: 'Implantes dentales en Concepción con tecnología avanzada. Recupera tu sonrisa con implantología de calidad en Clínica KDENT.',
      keywords: 'implantes dentales concepción, implantología, prótesis dental, reemplazo dientes'
    },
    'estetica-dental': {
      title: 'Estética Dental Concepción | Carillas y Blanqueamiento | KDENT',
      description: 'Estética dental en Concepción. Carillas, blanqueamiento y tratamientos estéticos para una sonrisa perfecta. Clínica KDENT.',
      keywords: 'estética dental concepción, carillas dentales, blanqueamiento dental, sonrisa perfecta'
    },
    endodoncia: {
      title: 'Endodoncia Concepción | Tratamiento de Conducto | Clínica KDENT',
      description: 'Endodoncia en Concepción. Tratamientos de conducto especializados para salvar tus dientes. Clínica KDENT - Endodoncia sin dolor.',
      keywords: 'endodoncia concepción, tratamiento de conducto, dolor dental, salvar diente'
    },
    'rehabilitacion-oral': {
      title: 'Rehabilitación Oral Concepción | Prótesis Dentales | KDENT',
      description: 'Rehabilitación oral en Concepción. Prótesis dentales, coronas y restauraciones completas. Recupera la función de tu boca en Clínica KDENT.',
      keywords: 'rehabilitación oral concepción, prótesis dentales, coronas, restauración dental'
    },
    'estetica-facial': {
      title: 'Estética Facial Concepción | Tratamientos Faciales | Clínica KDENT',
      description: 'Estética facial en Concepción. Tratamientos faciales no invasivos para rejuvenecer tu rostro. Clínica KDENT - Belleza y salud.',
      keywords: 'estética facial concepción, tratamientos faciales, rejuvenecimiento, belleza facial'
    }
  };
  
  return metaTags[especialidad as keyof typeof metaTags] || {
    title: 'Especialidades Dentales | Clínica KDENT Concepción',
    description: 'Especialidades dentales en Concepción. Atención odontológica integral con tecnología avanzada.',
    keywords: 'especialidades dentales, clínica dental concepción, odontología'
  };
};
const EspecialidadPage = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Actualizar meta tags dinámicamente
    if (id) {
      const metaTags = getMetaTags(id);
      
      // Actualizar title
      document.title = metaTags.title;
      
      // Actualizar meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', metaTags.description);
      
      // Actualizar meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', metaTags.keywords);
      
      // Meta tags Open Graph
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', metaTags.title);
      
      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
      }
      ogDescription.setAttribute('content', metaTags.description);
    }
    
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }, [id]);
  let content = null;
  if (id === 'urgencias') {
    content = <>
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-kdent-light-blue/50 to-white pt-12 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <Link to="/#especialidades" className="text-kdent-blue hover:text-kdent-dark-blue transition-colors inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="font-semibold text-2xl">Todas las especialidades</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-kdent-dark-blue mb-6">
                  Urgencia Dental Concepción
                </h1>
                <p className="text-xl text-kdent-dark-gray/80 mb-8">Dentista 24 horas en Concepción. Atención inmediata para emergencias dentales como dolor agudo, infecciones o fracturas. ¿Qué hacer ante una urgencia dental? Contáctanos ahora.</p>
                <a href="https://wa.me/56922556473?text=Hola,%20tengo%20una%20urgencia%20dental%20en%20Concepción,%20necesito%20atención%20inmediata" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Urgencia Dental 24 Horas
                </a>
              </div>
              <div className="relative h-80 md:h-[400px] animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                <div className="absolute inset-0 bg-kdent-light-blue/30 rounded-2xl -rotate-2 transform"></div>
                <div className="relative h-full overflow-hidden rounded-2xl shadow-xl">
                  <img src="/images/urgencias.webp" alt="Tratamiento de Urgencias en Clínica KDENT Concepción" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Descripción detallada */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-kdent-dark-blue mb-6">Urgencias Dentales en Concepción - Atención 24 Horas</h2>
              <div className="space-y-4 text-kdent-dark-gray/80">
                <p>Las urgencias dentales pueden presentarse en cualquier momento y requieren atención inmediata para evitar complicaciones graves. En Clínica KDENT, entendemos que el dolor dental no espera y por eso ofrecemos un servicio de urgencias dentales especializado en Concepción, disponible las 24 horas del día.</p>
                
                <p>Nuestro equipo de dentistas especializados en urgencias cuenta con más de 10 años de experiencia atendiendo emergencias dentales. Utilizamos tecnología de vanguardia para diagnósticos precisos y tratamientos efectivos que alivian el dolor de manera inmediata.</p>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">¿Cuándo Acudir a Urgencias Dentales?</h3>
                <p>Es fundamental saber reconocer cuándo una situación dental constituye una verdadera urgencia. Debes buscar atención inmediata si experimentas:</p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Dolor dental severo e insoportable</strong> que no cede con analgésicos comunes</li>
                  <li><strong>Traumatismo dental</strong> por accidente, caída o golpe que fracture o desplace dientes</li>
                  <li><strong>Infección dental aguda</strong> con hinchazón facial, fiebre o dificultad para tragar</li>
                  <li><strong>Sangrado abundante</strong> en encías o tejidos bucales que no se detiene</li>
                  <li><strong>Pérdida de restauraciones</strong> (coronas, empastes) que expone el nervio</li>
                  <li><strong>Absceso dental</strong> con pus y dolor pulsátil intenso</li>
                </ul>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Nuestro Protocolo de Urgencias</h3>
                <p>En Clínica KDENT seguimos un protocolo especializado para urgencias dentales que garantiza la atención más rápida y efectiva:</p>
                
                <div className="bg-blue-50 border-l-4 border-kdent-blue p-4 my-6">
                  <div className="space-y-3">
                    <div><strong>1. Evaluación inmediata:</strong> Valoración del dolor y síntomas en menos de 15 minutos</div>
                    <div><strong>2. Diagnóstico preciso:</strong> Radiografías digitales y examen clínico completo</div>
                    <div><strong>3. Control del dolor:</strong> Anestesia local y medicación para alivio inmediato</div>
                    <div><strong>4. Tratamiento de emergencia:</strong> Procedimiento necesario para estabilizar la situación</div>
                    <div><strong>5. Plan de seguimiento:</strong> Cita de control y tratamiento definitivo si es necesario</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Tecnología Avanzada para Urgencias</h3>
                <p>Contamos con equipamiento de última generación que nos permite brindar la mejor atención en situaciones de urgencia:</p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Evaluación clínica especializada</strong> para diagnóstico preciso</li>
                  <li><strong>Sistemas de anestesia computarizada</strong> para máximo confort</li>
                  <li><strong>Instrumental rotatorio de alta velocidad</strong> para procedimientos rápidos</li>
                  <li><strong>Láser dental</strong> para tratamientos menos invasivos</li>
                  <li><strong>Microscopio dental</strong> para precisión en endodoncias de urgencia</li>
                </ul>
                
                <p>Nuestro compromiso es brindarte alivio inmediato y una solución definitiva a tu problema dental. No dejes que el dolor arruine tu día - contáctanos ahora para atención de urgencia en Concepción.</p>
              </div>
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-10 mb-4">Procedimientos</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Tratamiento de dolor dental agudo</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Manejo de traumatismos dentales</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Control de infecciones y abscesos</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Reparación de restauraciones fracturadas</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Reparación de prótesis dentales</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Extracciones de emergencia</span>
                </li>
              </ul>
            </div>
            <div className="animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mb-6">Beneficios</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Atención rápida y prioritaria
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Alivio inmediato del dolor
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Diagnóstico preciso con tecnología avanzada
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Tratamientos efectivos de emergencia
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Seguimiento post-tratamiento personalizado
                  </li>
                </ul>
                <div className="mt-8 bg-red-50 border-2 border-red-200 rounded-lg p-6">
                  <h4 className="font-display font-bold text-red-700 mb-3 text-lg">🆘 ¿URGENCIA DENTAL? ¡Atención Inmediata!</h4>
                  <p className="text-sm text-red-600 mb-4 font-medium">
                    No esperes más. Dolor dental, trauma o emergencia - Te atendemos HOY mismo.
                  </p>
                  <div className="space-y-3">
                    <a href="https://wa.me/56922556473?text=URGENCIA%20DENTAL%20-%20Necesito%20atención%20inmediata%20para%20urgencias" target="_blank" rel="noopener noreferrer" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg flex justify-center items-center transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse">
                      💬 WhatsApp - URGENCIA AHORA
                    </a>
                    <a href="tel:+56922556473" className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg flex justify-center items-center transition-all duration-300 animate-pulse">
                      📞 LLAMAR DIRECTO - Urgencias
                    </a>
                  </div>
                  <p className="text-xs text-red-500 text-center mt-2 font-medium">✓ Atención 24/7 para emergencias</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQs Estructuradas para Urgencias */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-kdent-dark-blue mb-8 text-center">Preguntas Frecuentes - Urgencias Dentales</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Qué hacer ante una urgencia dental en Concepción?</h3>
                <p className="text-kdent-dark-gray/80">Ante una urgencia dental, mantén la calma y contáctanos inmediatamente al +56 9 2255 6473. Si hay sangrado, aplica presión suave con gasa limpia. Para dolor intenso, puedes tomar analgésicos según indicaciones médicas mientras llegas a nuestra clínica.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Cuánto cuesta una urgencia dental en Concepción?</h3>
                <p className="text-kdent-dark-gray/80">El costo de una urgencia dental varía según el tipo de tratamiento requerido. Ofrecemos evaluación inicial sin costo y planes de pago flexibles. Contáctanos para conocer opciones de financiamiento y cobertura de seguros.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Atienden urgencias dentales los fines de semana?</h3>
                <p className="text-kdent-dark-gray/80">Sí, atendemos urgencias dentales los 7 días de la semana. Nuestro servicio de urgencias está disponible las 24 horas para emergencias reales. Contáctanos por WhatsApp o teléfono para coordinar tu atención inmediata.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Qué incluye el tratamiento de urgencia dental?</h3>
                <p className="text-kdent-dark-gray/80">El tratamiento de urgencia incluye: evaluación clínica completa, radiografías digitales si es necesario, control inmediato del dolor, tratamiento de estabilización y plan de seguimiento. Todo orientado a resolver tu emergencia de forma efectiva.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Cómo aliviar el dolor dental mientras llego a la clínica?</h3>
                <p className="text-kdent-dark-gray/80">Puedes tomar analgésicos de venta libre según indicaciones del envase, aplicar frío en la zona externa (nunca hielo directo), evitar alimentos muy calientes o fríos, y mantener la cabeza elevada. No apliques aspirina directamente en el diente.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Qué hacer si se me cae un diente por trauma?</h3>
                <p className="text-kdent-dark-gray/80">Si se cae un diente completo, tómalo por la corona (nunca por la raíz), enjuágalo suavemente con agua si está sucio, y trata de reinsertarlo en su lugar. Si no es posible, guárdalo en leche o saliva y ven inmediatamente a nuestra clínica.</p>
              </div>
            </div>
          </div>
          
          {/* Schema Markup para FAQs */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "¿Qué hacer ante una urgencia dental en Concepción?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ante una urgencia dental, mantén la calma y contáctanos inmediatamente al +56 9 2255 6473. Si hay sangrado, aplica presión suave con gasa limpia. Para dolor intenso, puedes tomar analgésicos según indicaciones médicas mientras llegas a nuestra clínica."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cuánto cuesta una urgencia dental en Concepción?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El costo de una urgencia dental varía según el tipo de tratamiento requerido. Ofrecemos evaluación inicial sin costo y planes de pago flexibles. Contáctanos para conocer opciones de financiamiento y cobertura de seguros."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Atienden urgencias dentales los fines de semana?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, atendemos urgencias dentales los 7 días de la semana. Nuestro servicio de urgencias está disponible las 24 horas para emergencias reales. Contáctanos por WhatsApp o teléfono para coordinar tu atención inmediata."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Qué incluye el tratamiento de urgencia dental?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El tratamiento de urgencia incluye: evaluación clínica completa, radiografías digitales si es necesario, control inmediato del dolor, tratamiento de estabilización y plan de seguimiento. Todo orientado a resolver tu emergencia de forma efectiva."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cómo aliviar el dolor dental mientras llego a la clínica?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Puedes tomar analgésicos de venta libre según indicaciones del envase, aplicar frío en la zona externa (nunca hielo directo), evitar alimentos muy calientes o fríos, y mantener la cabeza elevada. No apliques aspirina directamente en el diente."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Qué hacer si se me cae un diente por trauma?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Si se cae un diente completo, tómalo por la corona (nunca por la raíz), enjuágalo suavemente con agua si está sucio, y trata de reinsertarlo en su lugar. Si no es posible, guárdalo en leche o saliva y ven inmediatamente a nuestra clínica."
                  }
                }
              ]
            })
          }} />
        </div>
      </>;
  } else if (id === 'estetica-facial') {
    content = <>
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-kdent-light-blue/50 to-white pt-12 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <Link to="/#especialidades" className="text-kdent-blue hover:text-kdent-dark-blue transition-colors inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="font-semibold text-2xl">Todas las especialidades</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-kdent-dark-blue mb-6">Estética Facial Concepción</h1>
                <p className="text-xl text-kdent-dark-gray/80 mb-8">
                  Botox Concepción y tratamientos de estética facial no invasivos. Realzamos tu belleza natural y rejuvenecemos tu rostro con las técnicas más avanzadas.
                </p>
                <a href="https://wa.me/56922556473?text=Hola,%20quiero%20información%20sobre%20botox%20y%20estética%20facial%20en%20Concepción" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Consultar Botox Concepción
                </a>
              </div>
              <div className="relative h-80 md:h-[400px] animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                <div className="absolute inset-0 bg-kdent-light-blue/30 rounded-2xl -rotate-2 transform"></div>
                <div className="relative h-full overflow-hidden rounded-2xl shadow-xl">
                  <img alt="Tratamiento de Estética Facial en Clínica KDENT Concepción" className="w-full h-full object-cover" loading="lazy" src="/images/estetica-facial.webp" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Descripción detallada */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-kdent-dark-blue mb-6">Estética Facial Concepción - Botox y Tratamientos Anti-Edad</h2>
              <div className="space-y-4 text-kdent-dark-gray/80">
                <p>La estética facial en Concepción ha alcanzado nuevos estándares de excelencia, y en Clínica KDENT somos líderes en tratamientos no invasivos que realzan tu belleza natural. Nuestros especialistas en medicina estética combinan arte, ciencia y tecnología avanzada para ofrecer resultados excepcionales que rejuvenecen tu rostro de manera natural y armónica.</p>
                
                <p>Cada tratamiento de estética facial es personalizado según tu anatomía facial única, tipo de piel, edad y objetivos estéticos específicos. Utilizamos únicamente productos premium de marcas reconocidas mundialmente, garantizando seguridad, eficacia y resultados duraderos que respetan la expresividad natural de tu rostro.</p>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Botox Concepción - Toxina Botulínica Premium</h3>
                <p>El botox es el tratamiento de estética facial más popular y efectivo para suavizar arrugas dinámicas y prevenir el envejecimiento prematuro:</p>
                
                <div className="bg-blue-50 border-l-4 border-kdent-blue p-4 my-6">
                  <h4 className="font-semibold text-kdent-dark-blue mb-2">Áreas de Aplicación del Botox:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>Arrugas de expresión:</strong> Entrecejo, patas de gallo, frente</li>
                    <li><strong>Lifting de cejas:</strong> Elevación natural sin cirugía</li>
                    <li><strong>Sonrisa gingival:</strong> Reducción de exposición excesiva de encía</li>
                    <li><strong>Bruxismo:</strong> Relajación de músculos masticatorios</li>
                    <li><strong>Hiperhidrosis:</strong> Control de sudoración excesiva</li>
                    <li><strong>Cuello:</strong> Bandas platismales y arrugas horizontales</li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Rellenos Faciales con Ácido Hialurónico</h3>
                <p>Los rellenos faciales restauran volumen perdido, definen contornos y rejuvenecen el rostro de manera inmediata:</p>
                
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 my-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-2">Relleno de Labios:</h4>
                      <p className="text-purple-600">Aumento natural de volumen, definición del contorno y corrección de asimetrías. Resultados inmediatos con aspecto completamente natural.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-2">Surcos Nasogenianos:</h4>
                      <p className="text-purple-600">Suavización de líneas de expresión desde la nariz hasta las comisuras labiales, restaurando la juventud del tercio medio facial.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-2">Pómulos y Mejillas:</h4>
                      <p className="text-purple-600">Restauración de volumen perdido, definición de contornos y lifting no quirúrgico del tercio medio facial.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-2">Ojeras y Lágrimas:</h4>
                      <p className="text-purple-600">Corrección de ojeras hundidas y surcos de lágrimas, rejuveneciendo la mirada de manera natural.</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Hilos Tensores - Lifting Sin Cirugía</h3>
                <p>Los hilos tensores ofrecen un lifting facial inmediato y estimulan la producción natural de colágeno:</p>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                  <ul className="space-y-2">
                    <li><strong>• Hilos PDO:</strong> Estimulación de colágeno y tensado suave</li>
                    <li><strong>• Hilos COG:</strong> Lifting inmediato con espículas de tracción</li>
                    <li><strong>• Hilos Lisos:</strong> Revitalización y mejora de textura</li>
                    <li><strong>• Hilos Espiculados:</strong> Máximo efecto tensor y lifting</li>
                    <li><strong>• Duración:</strong> 12-18 meses con resultados progresivos</li>
                    <li><strong>• Recuperación:</strong> Inmediata, sin tiempo de inactividad</li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Tratamientos Complementarios</h3>
                <p>Potenciamos los resultados con tratamientos complementarios de última generación:</p>
                
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-amber-700 mb-2">Mesoterapia Facial:</h4>
                      <ul className="space-y-1 text-amber-600">
                        <li>• Hidratación profunda</li>
                        <li>• Vitaminas y antioxidantes</li>
                        <li>• Estimulación celular</li>
                        <li>• Mejora de textura</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-700 mb-2">Plasma Rico en Plaquetas:</h4>
                      <ul className="space-y-1 text-amber-600">
                        <li>• Regeneración natural</li>
                        <li>• Estimulación de colágeno</li>
                        <li>• Mejora de cicatrices</li>
                        <li>• Rejuvenecimiento global</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Protocolo de Seguridad y Calidad</h3>
                <p>En Clínica KDENT seguimos protocolos internacionales de seguridad y calidad:</p>
                
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 my-6">
                  <div className="space-y-3">
                    <div><strong>1. Consulta inicial:</strong> Evaluación facial completa, análisis de expectativas y planificación personalizada</div>
                    <div><strong>2. Productos premium:</strong> Solo utilizamos marcas líderes mundiales con certificación FDA</div>
                    <div><strong>3. Técnica avanzada:</strong> Aplicación con cánulas romas para minimizar trauma y hematomas</div>
                    <div><strong>4. Seguimiento post-tratamiento:</strong> Controles incluidos para optimizar resultados</div>
                    <div><strong>5. Compromiso de calidad:</strong> Seguimiento personalizado para optimizar resultados</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Precios y Financiamiento Estética Facial</h3>
                <p>Hacemos accesible la estética facial con precios competitivos y opciones de financiamiento:</p>
                
                <div className="bg-green-50 rounded-lg p-4 my-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Botox Concepción:</h4>
                      <ul className="space-y-1 text-green-600">
                        <li>• Consulta y evaluación gratuita</li>
                        <li>• Precio por unidad competitivo</li>
                        <li>• Paquetes por zonas</li>
                        <li>• Opciones de financiamiento disponibles</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Rellenos Faciales:</h4>
                      <ul className="space-y-1 text-green-600">
                        <li>• Ácido hialurónico premium</li>
                        <li>• Precio por jeringa transparente</li>
                        <li>• Planes de tratamiento integral</li>
                        <li>• Planes de financiamiento flexibles</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Candidatos Ideales para Estética Facial</h3>
                <p>Los tratamientos de estética facial son adecuados para personas que desean:</p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Prevenir el envejecimiento:</strong> Desde los 25-30 años con botox preventivo</li>
                  <li><strong>Suavizar arrugas existentes:</strong> Líneas de expresión y arrugas dinámicas</li>
                  <li><strong>Restaurar volumen perdido:</strong> Mejillas, labios, surcos y ojeras</li>
                  <li><strong>Mejorar contornos faciales:</strong> Definición de pómulos y mandíbula</li>
                  <li><strong>Rejuvenecer sin cirugía:</strong> Resultados naturales sin tiempo de recuperación</li>
                  <li><strong>Aumentar autoestima:</strong> Sentirse más seguro y atractivo</li>
                </ul>
                
                <p>En Clínica KDENT, la estética facial trasciende la simple aplicación de productos. Nuestro enfoque artístico y científico garantiza resultados que realzan tu belleza natural, respetan tu expresividad y te hacen lucir como la mejor versión de ti mismo. Agenda tu consulta gratuita y descubre cómo podemos ayudarte a lograr el rostro que siempre has deseado con la máxima seguridad y naturalidad.</p>
              </div>
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-10 mb-4">Procedimientos</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Rellenos faciales con ácido hialurónico</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Tratamientos con toxina botulínica</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Hilos tensores</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Peeling químico</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Mesoterapia facial</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Bioestimulación con plasma rico en plaquetas</span>
                </li>
              </ul>
            </div>
            <div className="animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mb-6">Beneficios</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Resultados visibles desde la primera sesión
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Procedimientos mínimamente invasivos
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Recuperación rápida sin tiempo de inactividad
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Apariencia natural y rejuvenecida
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Aumento de la autoestima y confianza
                  </li>
                </ul>
                <div className="mt-8 bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-200 rounded-lg p-6">
                  <h4 className="font-display font-bold text-pink-700 mb-3 text-lg">✨ ¡Transformá tu Sonrisa HOY!</h4>
                  <p className="text-sm text-pink-600 mb-4 font-medium">
                    CONSULTA GRATUITA - Descubre cómo lucirás con nuestros tratamientos de estética facial.
                  </p>
                  <div className="space-y-3">
                    <a href="https://wa.me/56922556473?text=Hola%20KDENT,%20quiero%20mi%20CONSULTA%20GRATUITA%20de%20est%C3%A9tica%20facial.%20%C2%BFCu%C3%A1ndo%20puedo%20agendar%3F" target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg flex justify-center items-center transition-all duration-300 shadow-lg hover:shadow-xl">
                      💬 CONSULTA GRATIS - WhatsApp
                    </a>
                    <a href="tel:+56922556473" className="w-full bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-6 rounded-lg flex justify-center items-center transition-all duration-300">
                      📞 Llamar - Estética Facial
                    </a>
                  </div>
                  <p className="text-xs text-pink-500 text-center mt-2 font-medium">✓ Sin compromiso • ✓ Evaluación personalizada</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQs Estructuradas para Estética Facial */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-kdent-dark-blue mb-8 text-center">Preguntas Frecuentes - Estética Facial</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Cuánto cuesta el botox en Concepción?</h3>
                <p className="text-kdent-dark-gray/80">El precio del botox varía según la zona a tratar y unidades necesarias. Ofrecemos consulta gratuita para evaluar tu caso y presupuesto personalizado. Contamos con opciones de financiamiento disponibles.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Cuánto duran los efectos del botox?</h3>
                <p className="text-kdent-dark-gray/80">Los efectos del botox duran entre 4-6 meses. Los resultados son visibles a los 3-7 días y alcanzan su máximo efecto a las 2 semanas. Con tratamientos regulares, la duración puede extenderse progresivamente.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Los rellenos faciales se ven naturales?</h3>
                <p className="text-kdent-dark-gray/80">Sí, utilizamos ácido hialurónico premium y técnicas avanzadas para resultados completamente naturales. Nuestro enfoque conservador respeta tu expresividad facial y realza tu belleza sin cambiar tu identidad.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Duele el tratamiento de estética facial?</h3>
                <p className="text-kdent-dark-gray/80">Las molestias son mínimas. Utilizamos anestesia tópica y cánulas romas para mayor comodidad. La mayoría de pacientes describe la sensación como un pequeño pinchazo. El procedimiento dura 15-30 minutos.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Cuándo puedo ver los resultados de los hilos tensores?</h3>
                <p className="text-kdent-dark-gray/80">Los resultados son inmediatos con el efecto tensor, y continúan mejorando durante 3-6 meses por la estimulación de colágeno. La duración es de 12-18 meses. No requiere tiempo de inactividad.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Qué cuidados necesito después del tratamiento?</h3>
                <p className="text-kdent-dark-gray/80">Evitar ejercicio intenso por 24 horas, no masajear la zona tratada, usar protector solar y seguir las indicaciones específicas. Proporcionamos guía completa de cuidados post-tratamiento y seguimiento personalizado.</p>
              </div>
            </div>
          </div>
          
          {/* Schema Markup para FAQs de Estética Dental */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "¿Cuál es la diferencia entre blanqueamiento dental casero y profesional?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El blanqueamiento profesional ofrece resultados inmediatos (hasta 8 tonos más blanco) con supervisión especializada y menor sensibilidad. El casero requiere 2-4 semanas, tiene menor concentración de agentes activos y resultados menos predecibles."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cuánto duran las carillas dentales?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Las carillas de porcelana pueden durar 15-20 años con cuidado adecuado. Su durabilidad depende de la higiene oral, hábitos alimenticios y controles regulares. Incluimos seguimiento personalizado especializado."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cuánto cuesta un blanqueamiento dental en Concepción?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El precio del blanqueamiento dental varía según el tipo de tratamiento. Ofrecemos blanqueamiento profesional en clínica y sistemas caseros supervisados. Contáctanos para una evaluación gratuita y conocer las opciones de financiamiento disponibles."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Las carillas dentales dañan los dientes naturales?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Las carillas modernas requieren mínimo desgaste dental (0.3-0.5mm). Utilizamos técnicas mínimamente invasivas que preservan la estructura dental. El procedimiento es reversible y protege el diente subyacente a largo plazo."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Qué incluye el diseño de sonrisa digital?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Incluye análisis facial digital, simulación 3D de resultados, mockup dental temporal, ajustes personalizados según tus preferencias y planificación detallada del tratamiento. Podrás ver tu nueva sonrisa antes de iniciar el tratamiento."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cuánto tiempo toma un tratamiento de estética dental completo?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Depende del tratamiento: blanqueamiento (1 sesión), carillas (2-3 citas en 2 semanas), diseño de sonrisa completo (3-4 semanas). Cada caso es personalizado según tus necesidades y objetivos estéticos específicos."
                  }
                }
              ]
            })
          }} />
        </div>
      </>;
  } else if (id === 'endodoncia') {
    content = <>
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-kdent-light-blue/50 to-white pt-12 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <Link to="/#especialidades" className="text-kdent-blue hover:text-kdent-dark-blue transition-colors inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="font-semibold text-2xl">Todas las especialidades</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-kdent-dark-blue mb-6">Endodoncia Concepción</h1>
                <p className="text-xl text-kdent-dark-gray/80 mb-8">
                  Endodoncia en Concepción con especialistas en tratamientos de conducto. ¿Qué es una endodoncia? Te explicamos todo sobre este tratamiento para eliminar el dolor y salvar tus dientes naturales.
                </p>
                <a href="https://wa.me/56922556473?text=Hola,%20necesito%20información%20sobre%20endodoncia%20en%20Concepción" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Consultar Endodoncia
                </a>
              </div>
              <div className="relative h-80 md:h-[400px] animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                <div className="absolute inset-0 bg-kdent-light-blue/30 rounded-2xl -rotate-2 transform"></div>
                <div className="relative h-full overflow-hidden rounded-2xl shadow-xl">
                  <img alt="Tratamiento de Endodoncia en Clínica KDENT Concepción" className="w-full h-full object-cover" loading="lazy" src="/images/endodoncia.webp" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Descripción detallada */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-kdent-dark-blue mb-6">Endodoncia Concepción - Salva tu Diente Natural</h2>
              <div className="space-y-4 text-kdent-dark-gray/80">
                <p>La endodoncia en Concepción es el tratamiento especializado que permite salvar dientes con infecciones severas, daños pulpares o dolor dental intenso. En Clínica KDENT, somos expertos en tratamientos de conducto con más de 10 años de experiencia, utilizando tecnología de vanguardia y técnicas mínimamente invasivas para preservar tus dientes naturales.</p>
                
                <p>Nuestro enfoque integral de endodoncia combina diagnóstico preciso, tratamiento sin dolor y seguimiento personalizado. Utilizamos equipos especializados como localizadores de ápice, sistemas de irrigación ultrasónica y obturación termoplastificada para garantizar el éxito del tratamiento a largo plazo.</p>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">¿Cuándo Necesitas Endodoncia?</h3>
                <p>La endodoncia es necesaria cuando la pulpa dental (nervio del diente) se encuentra infectada, inflamada o necrótica. Los síntomas más comunes incluyen:</p>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
                  <h4 className="font-semibold text-red-700 mb-2">Señales de Alerta:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-red-600">
                    <li>Dolor dental intenso y persistente</li>
                    <li>Sensibilidad extrema al frío y calor</li>
                    <li>Dolor al morder o masticar</li>
                    <li>Hinchazón en la encía o rostro</li>
                    <li>Cambio de color del diente (oscurecimiento)</li>
                    <li>Aparición de abscesos o fistulas</li>
                    <li>Dolor nocturno que interrumpe el sueño</li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Proceso de Endodoncia en KDENT</h3>
                <p>Nuestro protocolo de endodoncia sigue estándares internacionales para garantizar el éxito del tratamiento:</p>
                
                <div className="bg-blue-50 border-l-4 border-kdent-blue p-4 my-6">
                  <div className="space-y-3">
                    <div><strong>1. Diagnóstico preciso:</strong> Examen clínico, radiografías digitales y pruebas de vitalidad pulpar</div>
                    <div><strong>2. Anestesia efectiva:</strong> Bloqueo completo del dolor con técnicas avanzadas</div>
                    <div><strong>3. Aislamiento absoluto:</strong> Campo estéril con dique de goma para prevenir contaminación</div>
                    <div><strong>4. Acceso y limpieza:</strong> Remoción completa del tejido infectado</div>
                    <div><strong>5. Conformación de conductos:</strong> Preparación mecánica con sistemas rotatorios</div>
                    <div><strong>6. Desinfección:</strong> Irrigación ultrasónica con soluciones antimicrobianas</div>
                    <div><strong>7. Obturación:</strong> Sellado hermético con gutapercha termoplastificada</div>
                    <div><strong>8. Restauración final:</strong> Corona o restauración definitiva</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Tecnología Avanzada en Endodoncia</h3>
                <p>En Clínica KDENT utilizamos la tecnología más avanzada para endodoncia:</p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Localizador de ápice electrónico:</strong> Medición precisa de la longitud radicular</li>
                  <li><strong>Sistemas rotatorios NiTi:</strong> Instrumentación eficiente y segura</li>
                  <li><strong>Irrigación ultrasónica:</strong> Desinfección profunda de conductos</li>
                  <li><strong>Obturación termoplastificada:</strong> Sellado hermético tridimensional</li>
                  <li><strong>Radiografía digital:</strong> Diagnóstico preciso con menor radiación</li>
                  <li><strong>Microendodoncia:</strong> Tratamiento con magnificación óptica</li>
                </ul>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Ventajas de la Endodoncia vs Extracción</h3>
                <p>Salvar tu diente natural mediante endodoncia ofrece ventajas significativas:</p>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Beneficios de la Endodoncia:</h4>
                      <ul className="space-y-1 text-green-600">
                        <li>✓ Preservación del diente natural</li>
                        <li>✓ Mantenimiento de la función masticatoria</li>
                        <li>✓ Estética natural conservada</li>
                        <li>✓ Menor costo que reemplazo</li>
                        <li>✓ Prevención de migración dental</li>
                        <li>✓ Preservación del hueso alveolar</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Consecuencias de la Extracción:</h4>
                      <ul className="space-y-1 text-red-600">
                        <li>✗ Pérdida permanente del diente</li>
                        <li>✗ Necesidad de reemplazo costoso</li>
                        <li>✗ Reabsorción ósea progresiva</li>
                        <li>✗ Migración de dientes adyacentes</li>
                        <li>✗ Alteración de la oclusión</li>
                        <li>✗ Impacto estético y funcional</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Cuidados Post-Endodoncia</h3>
                <p>Para garantizar el éxito a largo plazo de tu tratamiento de endodoncia:</p>
                
                <div className="bg-blue-50 rounded-lg p-4 my-6">
                  <ul className="space-y-2">
                    <li><strong>• Evitar masticar:</strong> No usar el diente tratado hasta la restauración final</li>
                    <li><strong>• Medicación:</strong> Tomar analgésicos según indicaciones</li>
                    <li><strong>• Higiene cuidadosa:</strong> Cepillado suave en la zona tratada</li>
                    <li><strong>• Controles regulares:</strong> Seguimiento radiológico periódico</li>
                    <li><strong>• Restauración oportuna:</strong> Corona o restauración en tiempo adecuado</li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Tasa de Éxito y Seguimiento</h3>
                <p>Nuestros tratamientos de endodoncia tienen una tasa de éxito superior al 95%, respaldada por:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li><strong>Tecnología de vanguardia:</strong> Localizadores de ápice y microscopía dental</li>
                  <li><strong>Calidad comprobada:</strong> Protocolos clínicos de excelencia</li>
                  <li><strong>Seguimiento personalizado:</strong> Controles incluidos sin costo adicional</li>
                  <li><strong>Materiales premium:</strong> Selladores biocompatibles de última generación</li>
                </ul>
                
                <p>No permitas que el dolor dental arruine tu calidad de vida. En Clínica KDENT, salvamos dientes que otros consideran perdidos. Nuestro compromiso es preservar tu sonrisa natural con la más alta calidad y tecnología disponible en Concepción. Agenda tu evaluación de urgencia y descubre cómo podemos salvar tu diente hoy mismo.</p>
              </div>
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-10 mb-4">Procedimientos</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Endodoncia convencional</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Retratamiento de conductos</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Endodoncia mecanizada</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Tratamiento de urgencias por dolor dental</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Apicectomía</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Tratamiento de fracturas dentales</span>
                </li>
              </ul>
            </div>
            <div className="animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mb-6">Beneficios</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Preservación del diente natural
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Eliminación del dolor e infección
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Procedimiento realizado en una o dos sesiones
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Alta tasa de éxito a largo plazo
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Prevención de extracciones y complicaciones futuras
                  </li>
                </ul>
                <div className="mt-8 bg-gradient-to-r from-blue-50 to-teal-50 border-2 border-blue-200 rounded-lg p-6">
                  <h4 className="font-display font-bold text-blue-700 mb-3 text-lg">🦷 ¡Salva tu Diente HOY!</h4>
                  <p className="text-sm text-blue-600 mb-4 font-medium">
                    EVALUACIÓN GRATUITA - No pierdas tu diente, la endodoncia puede salvarlo.
                  </p>
                  <div className="space-y-3">
                    <a href="https://wa.me/56922556473?text=Hola%20KDENT,%20tengo%20dolor%20dental%20y%20necesito%20EVALUACI%C3%93N%20GRATUITA%20de%20endodoncia.%20%C2%BFPueden%20atenderme%20pronto%3F" target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-lg flex justify-center items-center transition-all duration-300 shadow-lg hover:shadow-xl">
                      💬 EVALUACIÓN GRATIS - WhatsApp
                    </a>
                    <a href="tel:+56922556473" className="w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg flex justify-center items-center transition-all duration-300">
                      📞 Llamar - Endodoncia
                    </a>
                  </div>
                  <p className="text-xs text-blue-500 text-center mt-2 font-medium">✓ Salva tu diente natural • ✓ Sin dolor</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQs Estructuradas para Endodoncia */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-kdent-dark-blue mb-8 text-center">Preguntas Frecuentes - Endodoncia</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Duele el tratamiento de endodoncia?</h3>
                <p className="text-kdent-dark-gray/80">No, el tratamiento de endodoncia se realiza con anestesia local efectiva que bloquea completamente el dolor. Durante el procedimiento no sentirás molestias. Post-operatoriamente puede haber leve sensibilidad que se controla con analgésicos comunes.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Cuánto tiempo dura un tratamiento de conducto?</h3>
                <p className="text-kdent-dark-gray/80">La mayoría de endodoncias se completan en 1-2 sesiones de 60-90 minutos cada una. Casos complejos pueden requerir una sesión adicional. Utilizamos tecnología avanzada para optimizar los tiempos de tratamiento sin comprometer la calidad.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Cuánto cuesta una endodoncia en Concepción?</h3>
                <p className="text-kdent-dark-gray/80">El costo de la endodoncia varía según la complejidad del caso (unirradicular, birradicular o multirradicular). Incluye diagnóstico, tratamiento y controles. Ofrecemos planes de financiamiento y evaluación inicial sin costo.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Qué pasa si no me hago la endodoncia?</h3>
                <p className="text-kdent-dark-gray/80">Sin tratamiento, la infección puede extenderse, causando abscesos, pérdida ósea, dolor severo y eventual pérdida del diente. La infección dental puede afectar tu salud general. Es importante tratar a tiempo para salvar el diente.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Cuánto dura un diente con endodoncia?</h3>
                <p className="text-kdent-dark-gray/80">Un diente con endodoncia bien realizada puede durar toda la vida con cuidado adecuado. La clave es la restauración oportuna con corona y mantenimiento regular. Nuestros tratamientos tienen éxito superior al 95% a 5 años.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Necesito corona después de la endodoncia?</h3>
                <p className="text-kdent-dark-gray/80">Sí, especialmente en molares y premolares. La endodoncia debilita la estructura dental, y la corona protege contra fracturas. En dientes anteriores con suficiente estructura, puede ser suficiente una restauración estética.</p>
              </div>
            </div>
          </div>
          
          {/* Schema Markup para FAQs de Endodoncia */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "¿Duele el tratamiento de endodoncia?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, el tratamiento de endodoncia se realiza con anestesia local efectiva que bloquea completamente el dolor. Durante el procedimiento no sentirás molestias. Post-operatoriamente puede haber leve sensibilidad que se controla con analgésicos comunes."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cuánto tiempo dura un tratamiento de conducto?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La mayoría de endodoncias se completan en 1-2 sesiones de 60-90 minutos cada una. Casos complejos pueden requerir una sesión adicional. Utilizamos tecnología avanzada para optimizar los tiempos de tratamiento sin comprometer la calidad."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cuánto cuesta una endodoncia en Concepción?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El costo de la endodoncia varía según la complejidad del caso (unirradicular, birradicular o multirradicular). Incluye diagnóstico, tratamiento y controles. Ofrecemos planes de financiamiento y evaluación inicial sin costo."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Qué pasa si no me hago la endodoncia?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sin tratamiento, la infección puede extenderse, causando abscesos, pérdida ósea, dolor severo y eventual pérdida del diente. La infección dental puede afectar tu salud general. Es importante tratar a tiempo para salvar el diente."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cuánto dura un diente con endodoncia?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Un diente con endodoncia bien realizada puede durar toda la vida con cuidado adecuado. La clave es la restauración oportuna con corona y mantenimiento regular. Nuestros tratamientos tienen éxito superior al 95% a 5 años."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Necesito corona después de la endodoncia?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, especialmente en molares y premolares. La endodoncia debilita la estructura dental, y la corona protege contra fracturas. En dientes anteriores con suficiente estructura, puede ser suficiente una restauración estética."
                  }
                }
              ]
            })
          }} />
        </div>
      </>;
  } else if (id === 'rehabilitacion-oral') {
    content = <>
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-kdent-light-blue/50 to-white pt-12 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <Link to="/#especialidades" className="text-kdent-blue hover:text-kdent-dark-blue transition-colors inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="font-semibold text-2xl">Todas las especialidades</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-kdent-dark-blue mb-6">Rehabilitación Oral Concepción</h1>
                <p className="text-xl text-kdent-dark-gray/80 mb-8">
                  Prótesis dentales Concepción y rehabilitación oral completa. Restauramos la función y estética de tu boca con las técnicas más avanzadas en odontología restaurativa.
                </p>
                <a href="https://wa.me/56922556473?text=Hola,%20quiero%20información%20sobre%20prótesis%20dentales%20y%20rehabilitación%20oral%20en%20Concepción" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Consultar Prótesis Dentales
                </a>
              </div>
              <div className="relative h-80 md:h-[400px] animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                <div className="absolute inset-0 bg-kdent-light-blue/30 rounded-2xl -rotate-2 transform"></div>
                <div className="relative h-full overflow-hidden rounded-2xl shadow-xl">
                  <img alt="Tratamiento de Rehabilitación Oral en Clínica KDENT Concepción" className="w-full h-full object-cover" loading="lazy" src="/images/rehabilitacion-oral.webp" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Descripción detallada */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-kdent-dark-blue mb-6">Rehabilitación Oral Concepción - Prótesis Dentales Avanzadas</h2>
              <div className="space-y-4 text-kdent-dark-gray/80">
                <p>La rehabilitación oral en Concepción es la especialidad odontológica que se encarga de restaurar integralmente la función masticatoria, fonética y estética de pacientes con pérdida dental parcial o total. En Clínica KDENT, somos especialistas en prótesis dentales con más de 10 años de experiencia, utilizando tecnología CAD/CAM y materiales de última generación para devolver la funcionalidad completa a tu boca.</p>
                
                <p>Nuestro enfoque integral de rehabilitación oral combina diagnóstico digital avanzado, planificación 3D y tratamiento multidisciplinario. Trabajamos con laboratorios especializados y utilizamos sistemas de impresión digital para garantizar prótesis dentales de máxima precisión, comodidad y durabilidad.</p>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">¿Cuándo Necesitas Rehabilitación Oral?</h3>
                <p>La rehabilitación oral está indicada en casos de pérdida dental múltiple, desgaste severo o deterioro funcional significativo:</p>
                
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                  <h4 className="font-semibold text-amber-700 mb-2">Indicaciones Principales:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-amber-600">
                    <li>Pérdida dental múltiple o total (edentulismo)</li>
                    <li>Desgaste dental severo por bruxismo</li>
                    <li>Fracturas dentales extensas</li>
                    <li>Colapso de la dimensión vertical</li>
                    <li>Problemas de oclusión y articulación</li>
                    <li>Deterioro estético significativo</li>
                    <li>Dificultades para masticar o hablar</li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Tipos de Prótesis Dentales en KDENT</h3>
                <p>Ofrecemos la gama completa de prótesis dentales, desde soluciones removibles hasta rehabilitaciones fijas sobre implantes:</p>
                
                <div className="bg-blue-50 border-l-4 border-kdent-blue p-4 my-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-kdent-dark-blue mb-2">Prótesis Removibles:</h4>
                      <ul className="space-y-1 ml-4">
                        <li><strong>• Prótesis total (dentadura completa):</strong> Para pacientes sin dientes</li>
                        <li><strong>• Prótesis parcial removible:</strong> Con ganchos o ataches de precisión</li>
                        <li><strong>• Prótesis flexible (Valplast):</strong> Sin ganchos metálicos visibles</li>
                        <li><strong>• Sobredentaduras:</strong> Prótesis sobre implantes removibles</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-kdent-dark-blue mb-2">Prótesis Fijas:</h4>
                      <ul className="space-y-1 ml-4">
                        <li><strong>• Coronas individuales:</strong> Zirconio, porcelana, metal-porcelana</li>
                        <li><strong>• Puentes dentales:</strong> Reemplazo de uno o varios dientes</li>
                        <li><strong>• Rehabilitación sobre implantes:</strong> All-on-4, All-on-6</li>
                        <li><strong>• Carillas de porcelana:</strong> Para casos estéticos</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Proceso de Rehabilitación Oral</h3>
                <p>Nuestro protocolo de rehabilitación oral sigue fases específicas para garantizar resultados óptimos:</p>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                  <div className="space-y-3">
                    <div><strong>Fase 1 - Diagnóstico:</strong> Examen clínico, radiografías panorámicas, modelos de estudio y análisis oclusal</div>
                    <div><strong>Fase 2 - Planificación:</strong> Diseño digital 3D, selección de materiales y cronograma de tratamiento</div>
                    <div><strong>Fase 3 - Preparación:</strong> Tratamientos previos (endodoncias, extracciones, implantes)</div>
                    <div><strong>Fase 4 - Provisionales:</strong> Prótesis temporales para mantener función y estética</div>
                    <div><strong>Fase 5 - Impresiones:</strong> Toma de impresiones digitales o convencionales</div>
                    <div><strong>Fase 6 - Pruebas:</strong> Verificación de ajuste, oclusión y estética</div>
                    <div><strong>Fase 7 - Instalación:</strong> Cementado o fijación de prótesis definitivas</div>
                    <div><strong>Fase 8 - Seguimiento:</strong> Controles periódicos y mantenimiento</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Tecnología Avanzada en Prótesis</h3>
                <p>Utilizamos la tecnología más moderna para fabricar prótesis dentales de máxima calidad:</p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Escáner intraoral:</strong> Impresiones digitales precisas sin moldes</li>
                  <li><strong>Diseño CAD/CAM:</strong> Planificación digital 3D personalizada</li>
                  <li><strong>Fresado CNC:</strong> Fabricación automatizada de alta precisión</li>
                  <li><strong>Zirconio monolítico:</strong> Material biocompatible y estético</li>
                  <li><strong>Porcelana feldespática:</strong> Máxima naturalidad y translucidez</li>
                  <li><strong>Articulador semiajustable:</strong> Simulación precisa de movimientos</li>
                </ul>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Ventajas de la Rehabilitación Oral</h3>
                <p>Una rehabilitación oral exitosa transforma completamente tu calidad de vida:</p>
                
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 my-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-2">Beneficios Funcionales:</h4>
                      <ul className="space-y-1 text-purple-600">
                        <li>✓ Recuperación de la masticación eficiente</li>
                        <li>✓ Mejora en la fonética y pronunciación</li>
                        <li>✓ Estabilización de la articulación</li>
                        <li>✓ Prevención de problemas digestivos</li>
                        <li>✓ Soporte facial adecuado</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-2">Beneficios Estéticos y Sociales:</h4>
                      <ul className="space-y-1 text-purple-600">
                        <li>✓ Sonrisa natural y armoniosa</li>
                        <li>✓ Mejora en la autoestima</li>
                        <li>✓ Confianza en situaciones sociales</li>
                        <li>✓ Aspecto facial rejuvenecido</li>
                        <li>✓ Calidad de vida mejorada</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Cuidados y Mantenimiento</h3>
                <p>Para garantizar la durabilidad de tu rehabilitación oral:</p>
                
                <div className="bg-blue-50 rounded-lg p-4 my-6">
                  <ul className="space-y-2">
                    <li><strong>• Higiene específica:</strong> Técnicas de limpieza según tipo de prótesis</li>
                    <li><strong>• Controles regulares:</strong> Revisiones cada 6 meses</li>
                    <li><strong>• Ajustes periódicos:</strong> Rebasados y reparaciones oportunas</li>
                    <li><strong>• Protección nocturna:</strong> Férulas para pacientes con bruxismo</li>
                    <li><strong>• Alimentación cuidadosa:</strong> Evitar alimentos muy duros inicialmente</li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Seguimiento y Cuidados</h3>
                <p>Nuestras rehabilitaciones orales incluyen seguimiento integral y cuidados personalizados:</p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Materiales de calidad:</strong> Utilizamos los mejores materiales disponibles</li>
                  <li><strong>Período de adaptación:</strong> Ajustes incluidos para comodidad óptima</li>
                  <li><strong>Seguimiento personalizado:</strong> Controles programados sin costo</li>
                  <li><strong>Servicio técnico:</strong> Mantenimiento y cuidados especializados</li>
                  <li><strong>Atención prioritaria:</strong> Urgencias atendidas el mismo día</li>
                </ul>
                
                <p>No dejes que la pérdida dental limite tu vida. En Clínica KDENT, devolvemos la función completa a tu boca con prótesis dentales de última generación. Nuestro equipo de especialistas en rehabilitación oral te acompañará en cada paso hacia una sonrisa funcional, estética y duradera. Agenda tu evaluación integral y descubre cómo podemos transformar tu calidad de vida.</p>
              </div>
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-10 mb-4">Procedimientos</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Coronas y puentes</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Prótesis fijas sobre implantes</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Prótesis removibles</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Incrustaciones de porcelana</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Reconstrucciones complejas</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Rehabilitación de boca completa</span>
                </li>
              </ul>
            </div>
            <div className="animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mb-6">Beneficios</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Mejora de la función masticatoria
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Restauración de la estética dental
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Corrección de problemas de mordida
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Prevención de pérdida ósea
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Soluciones personalizadas y duraderas
                  </li>
                </ul>
                <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-6">
                  <h4 className="font-display font-bold text-green-700 mb-3 text-lg">🦷 ¡Recupera tu Sonrisa Completa!</h4>
                  <p className="text-sm text-green-600 mb-4 font-medium">
                    PLAN PERSONALIZADO GRATIS - Diseñamos la rehabilitación perfecta para ti.
                  </p>
                  <div className="space-y-3">
                    <a href="https://wa.me/56922556473?text=Hola%20KDENT,%20necesito%20rehabilitación%20oral%20y%20quiero%20mi%20PLAN%20PERSONALIZADO%20GRATIS.%20%C2%BFCuándo%20puedo%20agendar%3F" target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 px-6 rounded-lg flex justify-center items-center transition-all duration-300 shadow-lg hover:shadow-xl">
                      💬 PLAN GRATIS - WhatsApp
                    </a>
                    <a href="tel:+56922556473" className="w-full bg-green-400 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-lg flex justify-center items-center transition-all duration-300">
                      📞 Llamar - Rehabilitación
                    </a>
                  </div>
                  <p className="text-xs text-green-500 text-center mt-2 font-medium">✓ Sonrisa completa • ✓ Financiamiento disponible</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQs Estructuradas para Rehabilitación Oral */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-kdent-dark-blue mb-8 text-center">Preguntas Frecuentes - Rehabilitación Oral</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Cuánto cuesta una rehabilitación oral completa?</h3>
                <p className="text-kdent-dark-gray/80">El costo varía según el tipo de rehabilitación (removible o fija), número de dientes a reemplazar y materiales seleccionados. Ofrecemos planes de financiamiento y evaluación inicial sin costo para determinar el presupuesto exacto.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Cuánto tiempo dura el proceso de rehabilitación oral?</h3>
                <p className="text-kdent-dark-gray/80">El tiempo varía según la complejidad del caso. Prótesis removibles: 4-6 semanas. Prótesis fijas: 6-12 semanas. Rehabilitaciones sobre implantes: 3-6 meses. Incluye todas las fases desde diagnóstico hasta instalación final.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Qué tipo de prótesis dental es mejor para mí?</h3>
                <p className="text-kdent-dark-gray/80">Depende de factores como cantidad de dientes perdidos, salud ósea, presupuesto y preferencias. Las prótesis fijas ofrecen mayor comodidad y estética, mientras que las removibles son más económicas y fáciles de mantener.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Las prótesis dentales se ven naturales?</h3>
                <p className="text-kdent-dark-gray/80">Sí, utilizamos materiales de última generación como zirconio y porcelana feldespática que imitan perfectamente el color, textura y translucidez de los dientes naturales. Cada prótesis se personaliza según tu sonrisa original.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Puedo comer normalmente con prótesis dentales?</h3>
                <p className="text-kdent-dark-gray/80">Sí, después del período de adaptación (2-4 semanas) podrás comer la mayoría de alimentos. Las prótesis fijas permiten masticar con mayor fuerza que las removibles. Te daremos instrucciones específicas para cada tipo.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Cuánto duran las prótesis dentales?</h3>
                <p className="text-kdent-dark-gray/80">Prótesis fijas (coronas, puentes): 10-15 años o más. Prótesis removibles: 5-7 años con mantenimiento adecuado. La durabilidad depende del cuidado, higiene y controles regulares. Incluimos seguimiento personalizado especializado.</p>
              </div>
            </div>
          </div>
          
          {/* Schema Markup para FAQs de Rehabilitación Oral */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "¿Cuánto cuesta una rehabilitación oral completa?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El costo varía según el tipo de rehabilitación (removible o fija), número de dientes a reemplazar y materiales seleccionados. Ofrecemos planes de financiamiento y evaluación inicial sin costo para determinar el presupuesto exacto."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cuánto tiempo dura el proceso de rehabilitación oral?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El tiempo varía según la complejidad del caso. Prótesis removibles: 4-6 semanas. Prótesis fijas: 6-12 semanas. Rehabilitaciones sobre implantes: 3-6 meses. Incluye todas las fases desde diagnóstico hasta instalación final."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Qué tipo de prótesis dental es mejor para mí?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Depende de factores como cantidad de dientes perdidos, salud ósea, presupuesto y preferencias. Las prótesis fijas ofrecen mayor comodidad y estética, mientras que las removibles son más económicas y fáciles de mantener."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Las prótesis dentales se ven naturales?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, utilizamos materiales de última generación como zirconio y porcelana feldespática que imitan perfectamente el color, textura y translucidez de los dientes naturales. Cada prótesis se personaliza según tu sonrisa original."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Puedo comer normalmente con prótesis dentales?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, después del período de adaptación (2-4 semanas) podrás comer la mayoría de alimentos. Las prótesis fijas permiten masticar con mayor fuerza que las removibles. Te daremos instrucciones específicas para cada tipo."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cuánto duran las prótesis dentales?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Prótesis fijas (coronas, puentes): 10-15 años o más. Prótesis removibles: 5-7 años con mantenimiento adecuado. La durabilidad depende del cuidado, higiene y controles regulares. Incluimos seguimiento personalizado especializado."
                  }
                }
              ]
            })
          }} />
        </div>
      </>;
  } else if (id === 'implantologia') {
    content = <>
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-kdent-light-blue/50 to-white pt-12 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <Link to="/#especialidades" className="text-kdent-blue hover:text-kdent-dark-blue transition-colors inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="font-semibold text-2xl">Todas las especialidades</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-kdent-dark-blue mb-6">Implantes Dentales Concepción</h1>
                <p className="text-xl text-kdent-dark-gray/80 mb-8">
                  Implantes dentales en Concepción con la mejor tecnología. Conoce precios y beneficios de los implantes dentales. Prótesis dentales y soluciones completas para recuperar tu sonrisa.
                </p>
                <a href="https://wa.me/56922556473?text=Hola,%20quiero%20conocer%20precio%20implantes%20dentales%20Concepción" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Consultar Precio Implantes
                </a>
              </div>
              <div className="relative h-80 md:h-[400px] animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                <div className="absolute inset-0 bg-kdent-light-blue/30 rounded-2xl -rotate-2 transform"></div>
                <div className="relative h-full overflow-hidden rounded-2xl shadow-xl">
                  <img alt="Tratamiento de Implantología en Clínica KDENT Concepción" className="w-full h-full object-cover" loading="lazy" src="/images/implantologia.webp" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Descripción detallada */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-kdent-dark-blue mb-6">Implantes Dentales en Concepción - Tecnología Avanzada</h2>
              <div className="space-y-4 text-kdent-dark-gray/80">
                <p>Los implantes dentales representan la solución más avanzada y duradera para reemplazar dientes perdidos en Concepción. En Clínica KDENT, contamos con más de 10 años de experiencia en implantología, utilizando tecnología de vanguardia y materiales de la más alta calidad para garantizar resultados excepcionales.</p>
                
                <p>Nuestros implantes dentales de titanio grado médico se integran perfectamente con el hueso maxilar, proporcionando una base sólida y permanente para coronas, puentes o prótesis completas. Esta integración, conocida como osteointegración, asegura la estabilidad y funcionalidad a largo plazo.</p>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">¿Por Qué Elegir Implantes Dentales?</h3>
                <p>Los implantes dentales ofrecen ventajas significativas sobre otras opciones de reemplazo dental:</p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Durabilidad excepcional:</strong> Con cuidado adecuado, pueden durar toda la vida</li>
                  <li><strong>Preservación del hueso:</strong> Estimulan el hueso maxilar, evitando su reabsorción</li>
                  <li><strong>Estética natural:</strong> Indistinguibles de los dientes naturales</li>
                  <li><strong>Funcionalidad completa:</strong> Permiten masticar y hablar con normalidad</li>
                  <li><strong>No afectan dientes adyacentes:</strong> A diferencia de los puentes tradicionales</li>
                  <li><strong>Fácil mantenimiento:</strong> Se limpian como dientes naturales</li>
                </ul>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Proceso de Implantología en KDENT</h3>
                <p>Nuestro protocolo de implantología sigue estándares internacionales para garantizar el éxito del tratamiento:</p>
                
                <div className="bg-blue-50 border-l-4 border-kdent-blue p-4 my-6">
                  <div className="space-y-3">
                    <div><strong>1. Evaluación integral:</strong> Examen clínico, radiografías 3D y planificación digital</div>
                    <div><strong>2. Preparación del sitio:</strong> Extracción si es necesaria y preparación del lecho óseo</div>
                    <div><strong>3. Colocación del implante:</strong> Cirugía mínimamente invasiva con anestesia local</div>
                    <div><strong>4. Período de osteointegración:</strong> 3-6 meses para integración completa</div>
                    <div><strong>5. Colocación de la corona:</strong> Restauración final personalizada</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Tecnología de Vanguardia</h3>
                <p>En Clínica KDENT utilizamos la tecnología más avanzada para implantología:</p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Tomografía computarizada 3D:</strong> Planificación precisa y segura</li>
                  <li><strong>Cirugía guiada por computadora:</strong> Colocación exacta de implantes</li>
                  <li><strong>Implantes de titanio grado 4:</strong> Máxima biocompatibilidad</li>
                  <li><strong>Coronas de zirconia:</strong> Estética superior y resistencia</li>
                  <li><strong>Carga inmediata:</strong> Dientes el mismo día en casos seleccionados</li>
                </ul>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Precios de Implantes Dentales en Concepción</h3>
                <p>Ofrecemos planes de financiamiento flexibles y precios competitivos para hacer accesible la implantología. Nuestros paquetes incluyen:</p>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                  <div className="space-y-2">
                    <div><strong>✓ Implante de titanio premium</strong></div>
                    <div><strong>✓ Corona de porcelana o zirconia</strong></div>
                    <div><strong>✓ Cirugía y colocación</strong></div>
                    <div><strong>✓ Controles post-operatorios</strong></div>
                    <div><strong>✓ Seguimiento especializado</strong></div>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Tipos de Implantes Dentales</h3>
                <p>En Clínica KDENT ofrecemos diferentes tipos de implantes según las necesidades específicas de cada paciente:</p>
                
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 my-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-2">Implantes Unitarios:</h4>
                      <p className="text-purple-600">Para reemplazar un solo diente perdido. Incluye implante de titanio, pilar y corona personalizada. Ideal para mantener la integridad de los dientes adyacentes.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-2">Implantes Múltiples:</h4>
                      <p className="text-purple-600">Para reemplazar varios dientes perdidos. Pueden soportar puentes fijos o prótesis parciales, restaurando completamente la función masticatoria.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-2">All-on-4 / All-on-6:</h4>
                      <p className="text-purple-600">Rehabilitación completa con solo 4 o 6 implantes por arcada. Solución ideal para pacientes con pérdida dental total o múltiple.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-2">Carga Inmediata:</h4>
                      <p className="text-purple-600">Dientes fijos el mismo día de la cirugía en casos seleccionados. Permite recuperar la función y estética inmediatamente.</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">¿Eres Candidato para Implantes Dentales?</h3>
                <p>La mayoría de las personas pueden recibir implantes dentales. Evaluamos cada caso individualmente considerando:</p>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                  <h4 className="font-semibold text-green-700 mb-2">Candidatos Ideales:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-green-600">
                    <li>Adultos con uno o más dientes perdidos</li>
                    <li>Hueso maxilar suficiente (o posibilidad de regeneración)</li>
                    <li>Encías saludables</li>
                    <li>Buena salud general</li>
                    <li>No fumadores o dispuestos a dejar el hábito</li>
                    <li>Compromiso con la higiene oral</li>
                    <li>Expectativas realistas sobre el tratamiento</li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Ventajas de los Implantes vs Otras Opciones</h3>
                <p>Los implantes dentales superan significativamente a otras alternativas de reemplazo dental:</p>
                
                <div className="bg-blue-50 border-l-4 border-kdent-blue p-4 my-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-kdent-dark-blue mb-2">Implantes Dentales:</h4>
                      <ul className="space-y-1 text-kdent-dark-blue">
                        <li>✓ Duración: Toda la vida</li>
                        <li>✓ Preservan el hueso maxilar</li>
                        <li>✓ No afectan dientes sanos</li>
                        <li>✓ Función masticatoria 100%</li>
                        <li>✓ Estética completamente natural</li>
                        <li>✓ Higiene como dientes naturales</li>
                        <li>✓ Comodidad total</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Prótesis Removibles:</h4>
                      <ul className="space-y-1 text-red-600">
                        <li>✗ Duración: 5-7 años</li>
                        <li>✗ Reabsorción ósea progresiva</li>
                        <li>✗ Incomodidad y movilidad</li>
                        <li>✗ Función masticatoria limitada</li>
                        <li>✗ Problemas de retención</li>
                        <li>✗ Higiene compleja</li>
                        <li>✗ Impacto en la confianza</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Cuidados Post-Implante</h3>
                <p>El éxito a largo plazo de los implantes dentales depende del cuidado adecuado:</p>
                
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                  <div className="space-y-3">
                    <div><strong>Primeras 24-48 horas:</strong> Reposo, dieta blanda, aplicar hielo, tomar medicación prescrita</div>
                    <div><strong>Primera semana:</strong> Higiene cuidadosa, enjuagues con suero fisiológico, evitar ejercicio intenso</div>
                    <div><strong>Período de cicatrización:</strong> Controles regulares, evitar cargas excesivas sobre el implante</div>
                    <div><strong>Mantenimiento a largo plazo:</strong> Higiene diaria, controles cada 6 meses, evitar hábitos nocivos</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Financiamiento y Garantías</h3>
                <p>Hacemos accesible la implantología con opciones de financiamiento flexibles:</p>
                
                <div className="bg-green-50 rounded-lg p-4 my-6">
                  <ul className="space-y-2">
                    <li><strong>• Planes de financiamiento:</strong> Opciones flexibles disponibles</li>
                    <li><strong>• Evaluación gratuita:</strong> Diagnóstico y presupuesto sin costo</li>
                    <li><strong>• Calidad comprobada:</strong> Materiales premium y seguimiento especializado</li>
                    <li><strong>• Seguimiento incluido:</strong> Controles post-operatorios sin costo adicional</li>
                    <li><strong>• Atención 24/7:</strong> Disponibilidad para emergencias post-quirúrgicas</li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Tasa de Éxito y Resultados</h3>
                <p>Nuestros implantes dentales tienen una tasa de éxito superior al 98% a 10 años:</p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Éxito clínico comprobado:</strong> Más de 2,000 implantes colocados exitosamente</li>
                  <li><strong>Tecnología de vanguardia:</strong> Equipos de última generación y materiales premium</li>
                  <li><strong>Equipo especializado:</strong> Cirujanos con certificación internacional</li>
                  <li><strong>Seguimiento personalizado:</strong> Protocolo de cuidados post-operatorios</li>
                  <li><strong>Satisfacción del paciente:</strong> 99% de pacientes recomiendan nuestros servicios</li>
                </ul>
                
                <p>No dejes que la pérdida dental limite tu calidad de vida. En Clínica KDENT, los implantes dentales representan la solución definitiva para recuperar tu sonrisa con la máxima funcionalidad, estética y durabilidad. Nuestro equipo de especialistas en implantología te acompañará en cada paso hacia una sonrisa completa y confiada. Agenda tu evaluación gratuita y descubre por qué somos la mejor opción en implantes dentales en Concepción.</p>
              </div>
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-10 mb-4">Procedimientos</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Implantes unitarios</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Implantes múltiples</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>All-on-4 y All-on-6</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Carga inmediata</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Regeneración ósea guiada</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Elevación de seno maxilar</span>
                </li>
              </ul>
            </div>
            <div className="animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mb-6">Beneficios</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Apariencia y función similar a dientes naturales
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Preservación del hueso maxilar
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Estabilidad y comodidad superiores a otras prótesis
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Solución duradera a largo plazo
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Mejora en la calidad de vida y autoestima
                  </li>
                </ul>
                <div className="mt-8 bg-gradient-to-r from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-lg p-6">
                  <h4 className="font-display font-bold text-indigo-700 mb-3 text-lg">🦷 ¡Dientes Fijos de por Vida!</h4>
                  <p className="text-sm text-indigo-600 mb-4 font-medium">
                    EVALUACIÓN 3D GRATUITA - Descubre si eres candidato para implantes dentales.
                  </p>
                  <div className="space-y-3">
                    <a href="https://wa.me/56922556473?text=Hola%20KDENT,%20quiero%20mi%20EVALUACIÓN%203D%20GRATUITA%20para%20implantes%20dentales.%20%C2%BFCuándo%20puedo%20agendar%3F" target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg flex justify-center items-center transition-all duration-300 shadow-lg hover:shadow-xl">
                      💬 EVALUACIÓN 3D GRATIS - WhatsApp
                    </a>
                    <a href="tel:+56922556473" className="w-full bg-indigo-400 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-lg flex justify-center items-center transition-all duration-300">
                      📞 Llamar - Implantes
                    </a>
                  </div>
                  <p className="text-xs text-indigo-500 text-center mt-2 font-medium">✓ Dientes fijos • ✓ Tecnología 3D avanzada</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQs Estructuradas para Implantología */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-kdent-dark-blue mb-8 text-center">Preguntas Frecuentes - Implantes Dentales</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Cuánto cuesta un implante dental en Concepción?</h3>
                <p className="text-kdent-dark-gray/80">El precio de un implante dental varía según el caso específico. Incluye implante de titanio, corona y cirugía. Ofrecemos planes de financiamiento y evaluación gratuita. Contáctanos para conocer el presupuesto personalizado para tu caso.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Cuánto tiempo dura un implante dental?</h3>
                <p className="text-kdent-dark-gray/80">Con cuidado adecuado, un implante dental puede durar toda la vida. Nuestros implantes de titanio tienen una tasa de éxito superior al 95% con seguimiento especializado. El mantenimiento es similar al de los dientes naturales.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Duele la cirugía de implantes dentales?</h3>
                <p className="text-kdent-dark-gray/80">La cirugía de implantes se realiza con anestesia local, por lo que no sentirás dolor durante el procedimiento. Post-operatoriamente, el dolor es mínimo y se controla con analgésicos comunes. La mayoría de pacientes se reincorporan a sus actividades al día siguiente.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Cuánto tiempo toma el proceso completo?</h3>
                <p className="text-kdent-dark-gray/80">El proceso completo toma entre 3-6 meses. Incluye colocación del implante, período de osteointegración y colocación de la corona final. En casos seleccionados ofrecemos carga inmediata con dientes el mismo día.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Qué cuidados requiere un implante dental?</h3>
                <p className="text-kdent-dark-gray/80">Los implantes requieren el mismo cuidado que los dientes naturales: cepillado diario, uso de hilo dental y controles regulares. Es importante evitar el tabaco y mantener una buena higiene oral para asegurar la longevidad del implante.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Soy candidato para implantes dentales?</h3>
                <p className="text-kdent-dark-gray/80">La mayoría de personas son candidatas para implantes dentales. Se requiere hueso suficiente y encías sanas. Evaluamos cada caso individualmente con exámenes clínicos y radiografías 3D. Agenda tu evaluación gratuita para conocer tu elegibilidad.</p>
              </div>
            </div>
          </div>
          
          {/* Schema Markup para FAQs de Implantología */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "¿Cuánto cuesta un implante dental en Concepción?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El precio de un implante dental varía según el caso específico. Incluye implante de titanio, corona y cirugía. Ofrecemos planes de financiamiento y evaluación gratuita. Contáctanos para conocer el presupuesto personalizado para tu caso."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cuánto tiempo dura un implante dental?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Con cuidado adecuado, un implante dental puede durar toda la vida. Nuestros implantes de titanio tienen una tasa de éxito superior al 95% con seguimiento especializado. El mantenimiento es similar al de los dientes naturales."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Duele la cirugía de implantes dentales?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La cirugía de implantes se realiza con anestesia local, por lo que no sentirás dolor durante el procedimiento. Post-operatoriamente, el dolor es mínimo y se controla con analgésicos comunes. La mayoría de pacientes se reincorporan a sus actividades al día siguiente."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cuánto tiempo toma el proceso completo?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El proceso completo toma entre 3-6 meses. Incluye colocación del implante, período de osteointegración y colocación de la corona final. En casos seleccionados ofrecemos carga inmediata con dientes el mismo día."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Qué cuidados requiere un implante dental?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Los implantes requieren el mismo cuidado que los dientes naturales: cepillado diario, uso de hilo dental y controles regulares. Es importante evitar el tabaco y mantener una buena higiene oral para asegurar la longevidad del implante."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Soy candidato para implantes dentales?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La mayoría de personas son candidatas para implantes dentales. Se requiere hueso suficiente y encías sanas. Evaluamos cada caso individualmente con exámenes clínicos y radiografías 3D. Agenda tu evaluación gratuita para conocer tu elegibilidad."
                  }
                }
              ]
            })
          }} />
        </div>
      </>;
  } else if (id === 'estetica-dental') {
    content = <>
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-kdent-light-blue/50 to-white pt-12 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <Link to="/#especialidades" className="text-kdent-blue hover:text-kdent-dark-blue transition-colors inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="font-semibold text-2xl">Todas las especialidades</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-kdent-dark-blue mb-6">Blanqueamiento Dental Concepción</h1>
                <p className="text-xl text-kdent-dark-gray/80 mb-8">
                  Blanqueamiento dental y carillas dentales en Concepción. Descubre la diferencia entre blanqueamiento dental casero vs profesional. Sonrisa perfecta con estética dental.
                </p>
                <a href="https://wa.me/56922556473?text=Hola,%20quiero%20información%20sobre%20blanqueamiento%20dental%20Concepción" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Consultar Blanqueamiento Dental
                </a>
              </div>
              <div className="relative h-80 md:h-[400px] animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                <div className="absolute inset-0 bg-kdent-light-blue/30 rounded-2xl -rotate-2 transform"></div>
                <div className="relative h-full overflow-hidden rounded-2xl shadow-xl">
                  <img alt="Tratamiento de Estética Dental en Clínica KDENT Concepción" className="w-full h-full object-cover" loading="lazy" src="/images/estetica-dental.webp" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Descripción detallada */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-kdent-dark-blue mb-6">Estética Dental Concepción - Sonrisa Perfecta</h2>
              <div className="space-y-4 text-kdent-dark-gray/80">
                <p>La estética dental en Concepción ha evolucionado significativamente, y en Clínica KDENT somos pioneros en ofrecer los tratamientos más avanzados para transformar tu sonrisa. Combinamos arte, ciencia y tecnología de vanguardia para crear sonrisas naturales, armónicas y radiantes que realcen tu belleza facial y aumenten tu confianza.</p>
                
                <p>Nuestro enfoque integral de estética dental abarca desde blanqueamiento dental profesional hasta carillas de porcelana y diseño de sonrisa digital. Cada tratamiento es personalizado según las características únicas de tu rostro, personalidad y expectativas, garantizando resultados excepcionales y duraderos.</p>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Blanqueamiento Dental Profesional vs Casero</h3>
                <p>El blanqueamiento dental es uno de los tratamientos estéticos más solicitados en Concepción. La diferencia entre el blanqueamiento dental casero y profesional es significativa:</p>
                
                <div className="bg-blue-50 border-l-4 border-kdent-blue p-4 my-6">
                  <h4 className="font-semibold text-kdent-dark-blue mb-2">Blanqueamiento Profesional en Clínica:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Resultados inmediatos: hasta 8 tonos más blanco en una sesión</li>
                    <li>Concentración segura y controlada de agentes blanqueadores</li>
                    <li>Protección completa de encías y tejidos blandos</li>
                    <li>Supervisión profesional durante todo el proceso</li>
                    <li>Menor sensibilidad post-tratamiento</li>
                    <li>Duración de resultados: 2-3 años con cuidado adecuado</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                  <h4 className="font-semibold text-kdent-dark-blue mb-2">Blanqueamiento Casero:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Resultados graduales: 2-4 semanas de tratamiento</li>
                    <li>Concentración menor de agentes activos</li>
                    <li>Riesgo de sensibilidad si no se usa correctamente</li>
                    <li>Resultados menos predecibles</li>
                    <li>Requiere disciplina y constancia</li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Carillas Dentales: Transformación Completa</h3>
                <p>Las carillas dentales representan la solución más versátil para corregir múltiples problemas estéticos simultáneamente. En KDENT ofrecemos carillas de porcelana de última generación que proporcionan:</p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Corrección de forma y tamaño:</strong> Dientes pequeños, desgastados o irregulares</li>
                  <li><strong>Eliminación de manchas permanentes:</strong> Tetraciclinas, fluorosis o traumatismos</li>
                  <li><strong>Cierre de espacios:</strong> Diastemas y separaciones antiestéticas</li>
                  <li><strong>Alineación visual:</strong> Corrección de apiñamiento leve sin ortodoncia</li>
                  <li><strong>Rejuvenecimiento facial:</strong> Restauración de dimensión vertical perdida</li>
                </ul>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Diseño de Sonrisa Digital</h3>
                <p>Utilizamos tecnología de diseño digital para planificar tu nueva sonrisa antes del tratamiento. Este proceso incluye:</p>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                  <div className="space-y-3">
                    <div><strong>1. Análisis facial digital:</strong> Proporción áurea y armonía facial</div>
                    <div><strong>2. Simulación 3D:</strong> Visualización de resultados antes del tratamiento</div>
                    <div><strong>3. Mockup dental:</strong> Prueba temporal de la nueva sonrisa</div>
                    <div><strong>4. Ajustes personalizados:</strong> Modificaciones según tus preferencias</div>
                    <div><strong>5. Planificación precisa:</strong> Protocolo detallado de tratamiento</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Ventajas de la Estética Dental en KDENT</h3>
                <p>Nuestro enfoque integral de estética dental ofrece beneficios únicos:</p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Tecnología avanzada:</strong> Escáner intraoral, diseño CAD/CAM</li>
                  <li><strong>Materiales premium:</strong> Porcelanas de última generación</li>
                  <li><strong>Mínima invasión:</strong> Preservación máxima de estructura dental</li>
                  <li><strong>Resultados predecibles:</strong> Planificación digital precisa</li>
                  <li><strong>Durabilidad excepcional:</strong> 15-20 años con cuidado adecuado</li>
                  <li><strong>Seguimiento personalizado:</strong> Respaldo de calidad y satisfacción</li>
                </ul>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Cuidados Post-Tratamiento</h3>
                <p>Para mantener los resultados de tu tratamiento estético, recomendamos:</p>
                
                <div className="bg-blue-50 rounded-lg p-4 my-6">
                  <ul className="space-y-2">
                    <li><strong>• Higiene rigurosa:</strong> Cepillado y uso de hilo dental diario</li>
                    <li><strong>• Controles regulares:</strong> Visitas cada 6 meses para mantenimiento</li>
                    <li><strong>• Protección nocturna:</strong> Placa de relajación si hay bruxismo</li>
                    <li><strong>• Evitar hábitos dañinos:</strong> No morder objetos duros</li>
                    <li><strong>• Alimentación consciente:</strong> Limitar alimentos pigmentantes</li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Tipos de Tratamientos Estéticos Disponibles</h3>
                <p>En Clínica KDENT ofrecemos una gama completa de tratamientos estéticos dentales adaptados a cada necesidad:</p>
                
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 my-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-2">Blanqueamiento Dental Profesional:</h4>
                      <p className="text-purple-600">Tratamiento en clínica con resultados inmediatos. Hasta 8 tonos más blanco en una sesión de 60 minutos. Incluye protección completa de encías y seguimiento post-tratamiento.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-2">Carillas de Porcelana:</h4>
                      <p className="text-purple-600">Láminas ultra-delgadas de porcelana que transforman completamente la apariencia dental. Ideales para corregir forma, color, tamaño y posición de los dientes.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-2">Reconstrucciones Estéticas:</h4>
                      <p className="text-purple-600">Restauraciones con resinas compuestas de última generación que imitan perfectamente el color y textura del diente natural.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-2">Contorneado Gingival:</h4>
                      <p className="text-purple-600">Corrección de sonrisa gingival mediante láser, creando una línea de encía armónica y proporcionada.</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Tecnología de Vanguardia en Estética Dental</h3>
                <p>Utilizamos la tecnología más avanzada para garantizar resultados excepcionales:</p>
                
                <div className="bg-blue-50 border-l-4 border-kdent-blue p-4 my-6">
                  <ul className="space-y-2">
                    <li><strong>• Escáner intraoral 3D:</strong> Impresiones digitales precisas sin moldes incómodos</li>
                    <li><strong>• Diseño CAD/CAM:</strong> Planificación digital y fabricación asistida por computadora</li>
                    <li><strong>• Fotografía dental especializada:</strong> Documentación profesional del caso</li>
                    <li><strong>• Simulación 3D de resultados:</strong> Visualización previa del tratamiento</li>
                    <li><strong>• Láser dental:</strong> Procedimientos mínimamente invasivos</li>
                    <li><strong>• Microscopio dental:</strong> Precisión máxima en cada detalle</li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Precios y Financiamiento Estética Dental</h3>
                <p>Hacemos accesible la estética dental con opciones de financiamiento flexibles y precios competitivos:</p>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Blanqueamiento Dental:</h4>
                      <ul className="space-y-1 text-green-600">
                        <li>• Evaluación gratuita incluida</li>
                        <li>• Sesión completa en clínica</li>
                        <li>• Kit de mantenimiento</li>
                        <li>• Seguimiento de resultados</li>
                        <li>• Opciones de financiamiento disponibles</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Carillas de Porcelana:</h4>
                      <ul className="space-y-1 text-green-600">
                        <li>• Diseño digital incluido</li>
                        <li>• Mockup temporal gratuito</li>
                        <li>• Porcelana premium importada</li>
                        <li>• Calidad comprobada</li>
                        <li>• Planes de financiamiento flexibles</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Beneficios de la Estética Dental</h3>
                <p>Los tratamientos estéticos dentales van más allá de la apariencia, ofreciendo beneficios integrales:</p>
                
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-amber-700 mb-2">Beneficios Psicológicos:</h4>
                      <ul className="space-y-1 text-amber-600">
                        <li>✓ Aumento de la autoestima</li>
                        <li>✓ Mayor confianza social</li>
                        <li>✓ Mejora en relaciones interpersonales</li>
                        <li>✓ Reducción de ansiedad social</li>
                        <li>✓ Actitud más positiva</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-700 mb-2">Beneficios Funcionales:</h4>
                      <ul className="space-y-1 text-amber-600">
                        <li>✓ Mejor función masticatoria</li>
                        <li>✓ Protección del esmalte dental</li>
                        <li>✓ Corrección de problemas de oclusión</li>
                        <li>✓ Facilita la higiene oral</li>
                        <li>✓ Prevención de desgaste dental</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Proceso de Tratamiento Paso a Paso</h3>
                <p>Nuestro protocolo de estética dental garantiza resultados excepcionales:</p>
                
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 my-6">
                  <div className="space-y-3">
                    <div><strong>1. Consulta inicial:</strong> Evaluación completa, fotografías y diseño de sonrisa</div>
                    <div><strong>2. Planificación digital:</strong> Simulación 3D y aprobación del diseño</div>
                    <div><strong>3. Preparación dental:</strong> Mínima invasión con técnicas conservadoras</div>
                    <div><strong>4. Mockup temporal:</strong> Prueba de la nueva sonrisa antes del resultado final</div>
                    <div><strong>5. Fabricación:</strong> Elaboración personalizada en laboratorio especializado</div>
                    <div><strong>6. Cementado final:</strong> Colocación definitiva con técnicas de adhesión avanzada</div>
                    <div><strong>7. Seguimiento:</strong> Controles regulares y mantenimiento preventivo</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Candidatos Ideales para Estética Dental</h3>
                <p>La estética dental es adecuada para la mayoría de personas que desean mejorar su sonrisa:</p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Dientes manchados o decolorados:</strong> Por edad, medicamentos, hábitos o traumas</li>
                  <li><strong>Dientes pequeños o desgastados:</strong> Que requieren aumento de tamaño o longitud</li>
                  <li><strong>Espacios entre dientes:</strong> Diastemas que afectan la estética</li>
                  <li><strong>Dientes irregulares:</strong> Formas o posiciones que requieren corrección</li>
                  <li><strong>Sonrisa gingival:</strong> Exposición excesiva de encía al sonreír</li>
                  <li><strong>Restauraciones antiguas:</strong> Que requieren renovación estética</li>
                </ul>
                
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">Compromiso de Calidad y Seguimiento</h3>
                <p>En Clínica KDENT respaldamos nuestros tratamientos estéticos con el más alto estándar de calidad:</p>
                
                <div className="bg-green-50 rounded-lg p-4 my-6">
                  <ul className="space-y-2">
                    <li><strong>• Compromiso de satisfacción:</strong> Dedicación total con tus expectativas</li>
                    <li><strong>• Materiales premium:</strong> Solo utilizamos los mejores materiales disponibles</li>
                    <li><strong>• Seguimiento personalizado:</strong> Controles incluidos para óptimos resultados</li>
                    <li><strong>• Mantenimiento preventivo:</strong> Programa de cuidados a largo plazo</li>
                    <li><strong>• Atención prioritaria:</strong> Disponibilidad inmediata ante cualquier eventualidad</li>
                  </ul>
                </div>
                
                <p>En Clínica KDENT, transformamos sonrisas y cambiamos vidas a través de la estética dental más avanzada de Concepción. Nuestro equipo de especialistas combina arte, ciencia y tecnología para crear sonrisas únicas que reflejen tu personalidad y realcen tu belleza natural. No esperes más para tener la sonrisa que siempre soñaste. Agenda tu consulta de evaluación gratuita y descubre cómo podemos transformar tu sonrisa con resultados que durarán toda la vida.</p>
              </div>
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-10 mb-4">Procedimientos</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Carillas de porcelana</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Blanqueamiento dental profesional</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Reconstrucciones con resina</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Corrección de sonrisa gingival</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Diseño digital de sonrisa</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-kdent-blue" />
                  </div>
                  <span>Microcarillas sin tallado dental</span>
                </li>
              </ul>
            </div>
            <div className="animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-display font-medium text-kdent-dark-blue mb-6">Beneficios</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Mejora inmediata en la apariencia de la sonrisa
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Aumento de la confianza y autoestima
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Tratamientos mínimamente invasivos
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Resultados naturales y armónicos
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    Soluciones personalizadas para cada paciente
                  </li>
                </ul>
                <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg p-6">
                  <h4 className="font-display font-bold text-purple-700 mb-3 text-lg">✨ ¡Sonrisa de Revista HOY!</h4>
                  <p className="text-sm text-purple-600 mb-4 font-medium">
                    DISEÑO DE SONRISA GRATIS - Ve cómo lucirás antes de decidir.
                  </p>
                  <div className="space-y-3">
                    <a href="https://wa.me/56922556473?text=Hola%20KDENT,%20quiero%20mi%20DISEÑO%20DE%20SONRISA%20GRATIS%20y%20ver%20cómo%20luciré%20con%20estética%20dental.%20%C2%BFCuándo%20puedo%20agendar%3F" target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg flex justify-center items-center transition-all duration-300 shadow-lg hover:shadow-xl">
                      💬 DISEÑO GRATIS - WhatsApp
                    </a>
                    <a href="tel:+56922556473" className="w-full bg-purple-400 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-lg flex justify-center items-center transition-all duration-300">
                      📞 Llamar - Estética Dental
                    </a>
                  </div>
                  <p className="text-xs text-purple-500 text-center mt-2 font-medium">✓ Sonrisa perfecta • ✓ Resultados inmediatos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQs Estructuradas para Estética Dental */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-kdent-dark-blue mb-8 text-center">Preguntas Frecuentes - Estética Dental</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Cuánto cuesta un blanqueamiento dental en Concepción?</h3>
              <p className="text-kdent-dark-gray/80">El precio del blanqueamiento dental varía según el tipo de tratamiento. El blanqueamiento profesional en clínica tiene resultados inmediatos y mayor durabilidad. Ofrecemos evaluación gratuita y planes de financiamiento. Contáctanos para conocer el presupuesto personalizado.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Cuál es la diferencia entre blanqueamiento casero y profesional?</h3>
              <p className="text-kdent-dark-gray/80">El blanqueamiento profesional ofrece resultados inmediatos (hasta 8 tonos más blanco en una sesión), mayor seguridad con protección de encías, y supervisión profesional. El casero requiere semanas de tratamiento y tiene resultados menos predecibles.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Cuánto duran las carillas de porcelana?</h3>
              <p className="text-kdent-dark-gray/80">Las carillas de porcelana pueden durar entre 15-20 años con cuidado adecuado. Son resistentes a manchas y desgaste. En Clínica KDENT utilizamos carillas de porcelana premium con seguimiento especializado.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Las carillas dentales se ven naturales?</h3>
              <p className="text-kdent-dark-gray/80">Sí, las carillas de porcelana modernas son indistinguibles de los dientes naturales. Utilizamos diseño digital 3D y porcelanas premium que imitan perfectamente el color, textura y translucidez del esmalte dental natural.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Duele el tratamiento de carillas dentales?</h3>
              <p className="text-kdent-dark-gray/80">El procedimiento es mínimamente invasivo y se realiza con anestesia local. La mayoría de pacientes experimentan molestias mínimas. Utilizamos técnicas conservadoras que preservan la mayor cantidad de estructura dental natural.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">¿Puedo ver cómo luciré antes del tratamiento?</h3>
              <p className="text-kdent-dark-gray/80">Sí, ofrecemos diseño de sonrisa digital 3D gratuito donde puedes visualizar los resultados antes del tratamiento. También realizamos mockups temporales para que pruebes tu nueva sonrisa antes de la colocación definitiva.</p>
            </div>
          </div>
        </div>
        
        {/* Schema Markup para FAQs de Estética Dental */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Cuánto cuesta un blanqueamiento dental en Concepción?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "El precio del blanqueamiento dental varía según el tipo de tratamiento. El blanqueamiento profesional en clínica tiene resultados inmediatos y mayor durabilidad. Ofrecemos evaluación gratuita y planes de financiamiento. Contáctanos para conocer el presupuesto personalizado."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuál es la diferencia entre blanqueamiento casero y profesional?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "El blanqueamiento profesional ofrece resultados inmediatos (hasta 8 tonos más blanco en una sesión), mayor seguridad con protección de encías, y supervisión profesional. El casero requiere semanas de tratamiento y tiene resultados menos predecibles."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuánto duran las carillas de porcelana?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Las carillas de porcelana pueden durar entre 15-20 años con cuidado adecuado. Son resistentes a manchas y desgaste. En Clínica KDENT utilizamos carillas de porcelana premium con seguimiento especializado."
                }
              },
              {
                "@type": "Question",
                "name": "¿Las carillas dentales se ven naturales?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, las carillas de porcelana modernas son indistinguibles de los dientes naturales. Utilizamos diseño digital 3D y porcelanas premium que imitan perfectamente el color, textura y translucidez del esmalte dental natural."
                }
              },
              {
                "@type": "Question",
                "name": "¿Duele el tratamiento de carillas dentales?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "El procedimiento es mínimamente invasivo y se realiza con anestesia local. La mayoría de pacientes experimentan molestias mínimas. Utilizamos técnicas conservadoras que preservan la mayor cantidad de estructura dental natural."
                }
              },
              {
                "@type": "Question",
                "name": "¿Puedo ver cómo luciré antes del tratamiento?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, ofrecemos diseño de sonrisa digital 3D gratuito donde puedes visualizar los resultados antes del tratamiento. También realizamos mockups temporales para que pruebes tu nueva sonrisa antes de la colocación definitiva."
                }
              }
            ]
          })
        }} />
      </>;
  }
  if (!content) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-kdent-dark-blue mb-4">Especialidad no encontrada</h1>
          <p className="text-xl text-gray-600 mb-8">La especialidad que buscas no existe o ha sido removida.</p>
          <Link to="/" className="btn-primary">
            Volver al inicio
          </Link>
        </div>
      </div>;
  }
  return <>
      <Navbar />
      <div className="pt-20">{content}</div>
      <WhatsAppButton />
      <Footer />
    </>;
};
export default EspecialidadPage;