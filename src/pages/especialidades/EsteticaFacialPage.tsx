import React from 'react';
import EspecialidadLayout from './components/EspecialidadLayout';
import HeroSection from './components/HeroSection';
import ProcedureCard from './components/ProcedureCard';
import BenefitsSection from './components/BenefitsSection';
import FAQSection from './components/FAQSection';

const EsteticaFacialPage = () => {
  const metaTags = {
    title: 'Estética Facial Concepción | Botox y Rellenos | Clínica KDENT',
    description: 'Estética facial en Concepción. Botox, rellenos de ácido hialurónico y tratamientos faciales. Rejuvenece tu rostro con especialistas.',
    keywords: 'estética facial concepción, botox, rellenos faciales, ácido hialurónico, rejuvenecimiento facial'
  };

  const procedures = [
    'Rellenos faciales con ácido hialurónico',
    'Tratamientos con toxina botulínica',
    'Hilos tensores',
    'Peeling químico',
    'Mesoterapia facial',
    'Bioestimulación con plasma rico en plaquetas'
  ];

  const benefits = [
    'Resultados visibles desde la primera sesión',
    'Procedimientos mínimamente invasivos',
    'Recuperación rápida sin tiempo de inactividad',
    'Apariencia natural y rejuvenecida',
    'Aumento de la autoestima y confianza'
  ];

  const ctaConfig = {
    title: '✨ ¡Transforma tu Sonrisa HOY!',
    subtitle: 'CONSULTA GRATUITA - Descubre cómo lucirás con nuestros tratamientos de estética facial.',
    whatsappUrl: 'https://wa.me/56922556473?text=Hola%20KDENT,%20quiero%20mi%20CONSULTA%20GRATUITA%20de%20est%C3%A9tica%20facial.%20%C2%BFCu%C3%A1ndo%20puedo%20agendar%3F',
    whatsappText: '💬 CONSULTA GRATIS - WhatsApp',
    phoneText: '📞 Llamar - Estética Facial',
    footerText: '✓ Sin compromiso • ✓ Evaluación personalizada'
  };

  const faqs = [
    {
      question: '¿Cuánto cuesta el botox en Concepción?',
      answer: 'El precio del botox varía según la zona a tratar y unidades necesarias. Ofrecemos consulta gratuita para evaluar tu caso y presupuesto personalizado. Contamos con opciones de financiamiento disponibles.'
    },
    {
      question: '¿Cuánto duran los efectos del botox?',
      answer: 'Los efectos del botox duran entre 4-6 meses. Los resultados son visibles a los 3-7 días y alcanzan su máximo efecto a las 2 semanas. Con tratamientos regulares, la duración puede extenderse progresivamente.'
    },
    {
      question: '¿Los rellenos faciales se ven naturales?',
      answer: 'Sí, utilizamos ácido hialurónico premium y técnicas avanzadas para resultados completamente naturales. Nuestro enfoque conservador respeta tu expresividad facial y realza tu belleza sin cambiar tu identidad.'
    },
    {
      question: '¿Duele el tratamiento de estética facial?',
      answer: 'Las molestias son mínimas. Utilizamos anestesia tópica y cánulas romas para mayor comodidad. La mayoría de pacientes describe la sensación como un pequeño pinchazo. El procedimiento dura 15-30 minutos.'
    },
    {
      question: '¿Cuándo puedo ver los resultados de los hilos tensores?',
      answer: 'Los resultados son inmediatos con el efecto tensor, y continúan mejorando durante 3-6 meses por la estimulación de colágeno. La duración es de 12-18 meses. No requiere tiempo de inactividad.'
    },
    {
      question: '¿Qué cuidados necesito después del tratamiento?',
      answer: 'Evitar ejercicio intenso por 24 horas, no masajear la zona tratada, usar protector solar y seguir las indicaciones específicas. Proporcionamos guía completa de cuidados post-tratamiento y seguimiento personalizado.'
    }
  ];

  return (
    <EspecialidadLayout metaTags={metaTags}>
      <HeroSection
        title="Estética Facial Concepción"
        description="Estética facial en Concepción. Botox, rellenos de ácido hialurónico y tratamientos faciales. Rejuvenece tu rostro con especialistas certificados en procedimientos seguros y efectivos."
        buttonText="Consultar Estética Facial"
        buttonUrl="https://wa.me/56922556473?text=Hola,%20quiero%20información%20sobre%20tratamientos%20de%20estética%20facial%20en%20Concepción"
        imageSrc="/images/estetica-facial.webp"
        imageAlt="Tratamiento de Estética Facial en Clínica KDENT Concepción"
      />

      {/* Descripción detallada */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-kdent-dark-blue mb-6">
              Estética Facial Concepción - Botox y Tratamientos Anti-Edad
            </h2>
            <div className="space-y-4 text-kdent-dark-gray/80">
              <p>
                La estética facial en Concepción ha alcanzado nuevos estándares de excelencia, y en Clínica KDENT somos líderes en tratamientos no invasivos que realzan tu belleza natural. Nuestros especialistas en medicina estética combinan arte, ciencia y tecnología avanzada para ofrecer resultados excepcionales que rejuvenecen tu rostro de manera natural y armónica.
              </p>
              
              <p>
                Cada tratamiento de estética facial es personalizado según tu anatomía facial única, tipo de piel, edad y objetivos estéticos específicos. Utilizamos únicamente productos premium de marcas reconocidas mundialmente, garantizando seguridad, eficacia y resultados duraderos que respetan la expresividad natural de tu rostro.
              </p>
              
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
                    <h4 className="font-semibold text-purple-700 mb-2">Ojeras:</h4>
                    <p className="text-purple-600">Corrección de ojeras hundidas, rejuveneciendo la mirada de manera natural.</p>
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
              
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">
                Proceso de Tratamiento
              </h3>
              <p>Nuestro protocolo garantiza seguridad y resultados óptimos:</p>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                <div className="space-y-3">
                  <div><strong>1. Consulta inicial:</strong> Evaluación facial completa y análisis de expectativas</div>
                  <div><strong>2. Planificación personalizada:</strong> Diseño del plan de tratamiento específico</div>
                  <div><strong>3. Preparación:</strong> Limpieza y aplicación de anestesia tópica si es necesario</div>
                  <div><strong>4. Aplicación:</strong> Inyección precisa con técnicas avanzadas</div>
                  <div><strong>5. Cuidados post-tratamiento:</strong> Instrucciones detalladas para optimizar resultados</div>
                  <div><strong>6. Seguimiento:</strong> Control a las 2 semanas para evaluar resultados</div>
                </div>
              </div>
              
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">
                Ventajas de Nuestros Tratamientos
              </h3>
              <p>Por qué elegir KDENT para tu estética facial:</p>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Especialistas certificados:</strong> Nuestros especialistas cuentan con formación específica en medicina estética</li>
                <li><strong>Productos premium:</strong> Solo utilizamos marcas reconocidas mundialmente</li>
                <li><strong>Técnicas avanzadas:</strong> Métodos de última generación para resultados naturales</li>
                <li><strong>Ambiente seguro:</strong> Instalaciones médicas con todos los protocolos de seguridad</li>
                <li><strong>Resultados naturales:</strong> Enfoque conservador que respeta la expresividad facial</li>
                <li><strong>Seguimiento personalizado:</strong> Acompañamiento durante todo el proceso</li>
              </ul>
              
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">
                Cuidados Post-Tratamiento
              </h3>
              <p>Para optimizar y prolongar los resultados:</p>
              
              <div className="bg-blue-50 rounded-lg p-4 my-6">
                <ul className="space-y-2">
                  <li><strong>• Evita ejercicio intenso</strong> las primeras 24 horas</li>
                  <li><strong>• No masajees la zona tratada</strong> durante 48 horas</li>
                  <li><strong>• Mantén la cabeza elevada</strong> al dormir los primeros días</li>
                  <li><strong>• Usa protector solar</strong> diariamente para proteger la piel</li>
                  <li><strong>• Evita calor excesivo</strong> (sauna, sol directo) por una semana</li>
                  <li><strong>• Hidrátate adecuadamente</strong> para mantener la piel saludable</li>
                </ul>
              </div>
            </div>

            <ProcedureCard procedures={procedures} />
          </div>

          <BenefitsSection benefits={benefits} ctaConfig={ctaConfig} />
        </div>
      </div>

      <FAQSection 
        title="Preguntas Frecuentes - Estética Facial"
        faqs={faqs}
      />
    </EspecialidadLayout>
  );
};

export default EsteticaFacialPage;
