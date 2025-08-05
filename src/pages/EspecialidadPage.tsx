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
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-kdent-dark-blue mb-6">Urgencias</h2>
              <div className="space-y-4 text-kdent-dark-gray/80">
                <p>Nuestro servicio de urgencias dentales está diseñado para atender casos que requieren intervención inmediata.</p>
                <p>Contamos con profesionales especializados y la tecnología necesaria para diagnosticar y tratar problemas dentales urgentes.</p>
                <p>Ofrecemos horarios extendidos y atención prioritaria para casos de dolor agudo, traumatismos, infecciones y otras emergencias.</p>
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
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-kdent-dark-blue mb-6">Estética Facial</h2>
              <div className="space-y-4 text-kdent-dark-gray/80">
                <p>Nuestros tratamientos de estética facial están diseñados para realzar tu belleza natural y rejuvenecer tu rostro sin necesidad de cirugía.</p>
                <p>Utilizamos las técnicas más avanzadas y productos de alta calidad para garantizar resultados naturales y duraderos.</p>
                <p>Cada tratamiento es personalizado según tus necesidades específicas y objetivos estéticos.</p>
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
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-kdent-dark-blue mb-6">Endodoncia</h2>
              <div className="space-y-4 text-kdent-dark-gray/80">
                <p>La endodoncia es el tratamiento que permite salvar dientes con infecciones o daños severos en su interior.</p>
                <p>Utilizamos técnicas modernas y equipos especializados para realizar el procedimiento con mínimas molestias.</p>
                <p>Nuestro objetivo es preservar tus dientes naturales y eliminar el dolor causado por infecciones o lesiones pulpares.</p>
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
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-kdent-dark-blue mb-6">Rehabilitación Oral</h2>
              <div className="space-y-4 text-kdent-dark-gray/80">
                <p>La rehabilitación oral es un conjunto de procedimientos destinados a restaurar la función, estética y salud bucal.</p>
                <p>Abordamos casos complejos que requieren un enfoque multidisciplinario para recuperar la función masticatoria y la sonrisa.</p>
                <p>Nuestro equipo de especialistas trabaja de manera coordinada para ofrecer soluciones integrales personalizadas.</p>
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
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-kdent-dark-blue mb-6">Implantología</h2>
              <div className="space-y-4 text-kdent-dark-gray/80">
                <p>
                  Los implantes dentales son la solución más avanzada para reemplazar dientes perdidos, ofreciendo estética y funcionalidad similar a los dientes naturales.
                </p>
                <p>Utilizamos implantes de titanio de la más alta calidad y técnicas mínimamente invasivas para garantizar el mejor resultado.</p>
                <p>Ofrecemos diversas modalidades de tratamiento, desde implantes unitarios hasta rehabilitaciones completas con carga inmediata.</p>
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
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-kdent-dark-blue mb-6">Estética Dental</h2>
              <div className="space-y-4 text-kdent-dark-gray/80">
                <p>La odontología estética se enfoca en mejorar la apariencia de tu sonrisa a través de diversos procedimientos.</p>
                <p>Combinamos arte y ciencia para crear sonrisas naturales, armónicas y radiantes que realcen tus rasgos faciales.</p>
                <p>Ofrecemos soluciones personalizadas para corregir problemas como manchas, decoloraciones, dientes irregulares o espaciados.</p>
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