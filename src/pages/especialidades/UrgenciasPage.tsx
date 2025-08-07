import React from 'react';
import EspecialidadLayout from './components/EspecialidadLayout';
import HeroSection from './components/HeroSection';
import ProcedureCard from './components/ProcedureCard';
import BenefitsSection from './components/BenefitsSection';
import FAQSection from './components/FAQSection';

const UrgenciasPage = () => {
  const metaTags = {
    title: 'Urgencia Dental Concepción | Dentista 24 Horas | Clínica KDENT',
    description: 'Urgencias dentales en Concepción. Atención inmediata para dolor dental, traumatismos e infecciones. Clínica KDENT - Dentista 24 horas.',
    keywords: 'urgencia dental concepción, dentista 24 horas concepción, dolor de muela, emergencia dental'
  };

  const procedures = [
    'Tratamiento de dolor dental agudo',
    'Manejo de traumatismos dentales',
    'Control de infecciones y abscesos',
    'Reparación de restauraciones fracturadas',
    'Reparación de prótesis dentales',
    'Extracciones de emergencia'
  ];

  const benefits = [
    'Atención rápida y prioritaria',
    'Alivio inmediato del dolor',
    'Diagnóstico preciso con tecnología avanzada',
    'Tratamientos efectivos de emergencia',
    'Seguimiento post-tratamiento personalizado'
  ];

  const ctaConfig = {
    title: '🆘 ¿URGENCIA DENTAL? ¡Atención Inmediata!',
    subtitle: 'No esperes más. Dolor dental, trauma o emergencia - Te atendemos HOY mismo.',
    whatsappUrl: 'https://wa.me/56922556473?text=URGENCIA%20DENTAL%20-%20Necesito%20atención%20inmediata%20para%20urgencias',
    whatsappText: '💬 WhatsApp - URGENCIA AHORA',
    phoneText: '📞 LLAMAR DIRECTO - Urgencias',
    footerText: '✓ Atención 24/7 para emergencias'
  };

  const faqs = [
    {
      question: '¿Qué hacer ante una urgencia dental en Concepción?',
      answer: 'Ante una urgencia dental, mantén la calma y contáctanos inmediatamente al +56 9 2255 6473. Si hay sangrado, aplica presión suave con gasa limpia. Para dolor intenso, puedes tomar analgésicos según indicaciones médicas mientras llegas a nuestra clínica.'
    },
    {
      question: '¿Cuánto cuesta una urgencia dental en Concepción?',
      answer: 'El costo de una urgencia dental varía según el tipo de tratamiento requerido. Ofrecemos evaluación inicial sin costo y planes de pago flexibles. Contáctanos para conocer opciones de financiamiento y cobertura de seguros.'
    },
    {
      question: '¿Atienden urgencias dentales los fines de semana?',
      answer: 'Sí, atendemos urgencias dentales los 7 días de la semana. Nuestro servicio de urgencias está disponible las 24 horas para emergencias reales. Contáctanos por WhatsApp o teléfono para coordinar tu atención inmediata.'
    },
    {
      question: '¿Qué incluye el tratamiento de urgencia dental?',
      answer: 'El tratamiento de urgencia incluye: evaluación clínica completa, radiografías digitales si es necesario, control inmediato del dolor, tratamiento de estabilización y plan de seguimiento. Todo orientado a resolver tu emergencia de forma efectiva.'
    },
    {
      question: '¿Cómo aliviar el dolor dental mientras llego a la clínica?',
      answer: 'Puedes tomar analgésicos de venta libre según indicaciones del envase, aplicar frío en la zona externa (nunca hielo directo), evitar alimentos muy calientes o fríos, y mantener la cabeza elevada. No apliques aspirina directamente en el diente.'
    },
    {
      question: '¿Qué hacer si se me cae un diente por trauma?',
      answer: 'Si se cae un diente completo, tómalo por la corona (nunca por la raíz), enjuágalo suavemente con agua si está sucio, y trata de reinsertarlo en su lugar. Si no es posible, guárdalo en leche o saliva y ven inmediatamente a nuestra clínica.'
    }
  ];

  return (
    <EspecialidadLayout metaTags={metaTags}>
      <HeroSection
        title="Urgencia Dental Concepción"
        description="Dentista 24 horas en Concepción. Atención inmediata para emergencias dentales como dolor agudo, infecciones o fracturas. ¿Qué hacer ante una urgencia dental? Contáctanos ahora."
        buttonText="Urgencia Dental 24 Horas"
        buttonUrl="https://wa.me/56922556473?text=Hola,%20tengo%20una%20urgencia%20dental%20en%20Concepción,%20necesito%20atención%20inmediata"
        imageSrc="/images/urgencias.webp"
        imageAlt="Tratamiento de Urgencias en Clínica KDENT Concepción"
      />

      {/* Descripción detallada */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-kdent-dark-blue mb-6">
              Urgencias Dentales en Concepción - Atención 24 Horas
            </h2>
            <div className="space-y-4 text-kdent-dark-gray/80">
              <p>
                Las urgencias dentales pueden presentarse en cualquier momento y requieren atención inmediata para evitar complicaciones graves. En Clínica KDENT, entendemos que el dolor dental no espera y por eso ofrecemos un servicio de urgencias dentales especializado en Concepción, disponible las 24 horas del día.
              </p>
              
              <p>
                Nuestro equipo de dentistas especializados en urgencias cuenta con más de 10 años de experiencia atendiendo emergencias dentales. Utilizamos tecnología de vanguardia para diagnósticos precisos y tratamientos efectivos que alivian el dolor de manera inmediata.
              </p>
              
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">
                ¿Cuándo Acudir a Urgencias Dentales?
              </h3>
              <p>
                Es fundamental saber reconocer cuándo una situación dental constituye una verdadera urgencia. Debes buscar atención inmediata si experimentas:
              </p>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Dolor dental severo e insoportable</strong> que no cede con analgésicos comunes</li>
                <li><strong>Traumatismo dental</strong> por accidente, caída o golpe que fracture o desplace dientes</li>
                <li><strong>Infección dental aguda</strong> con hinchazón facial, fiebre o dificultad para tragar</li>
                <li><strong>Sangrado abundante</strong> en encías o tejidos bucales que no se detiene</li>
                <li><strong>Pérdida de restauraciones</strong> (coronas, empastes) que expone el nervio</li>
                <li><strong>Absceso dental</strong> con pus y dolor pulsátil intenso</li>
              </ul>
              
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">
                Nuestro Protocolo de Urgencias
              </h3>
              <p>
                En Clínica KDENT seguimos un protocolo especializado para urgencias dentales que garantiza la atención más rápida y efectiva:
              </p>
              
              <div className="bg-blue-50 border-l-4 border-kdent-blue p-4 my-6">
                <div className="space-y-3">
                  <div><strong>1. Evaluación inmediata:</strong> Valoración del dolor y síntomas en menos de 15 minutos</div>
                  <div><strong>2. Diagnóstico preciso:</strong> Radiografías digitales y examen clínico completo</div>
                  <div><strong>3. Control del dolor:</strong> Anestesia local y medicación para alivio inmediato</div>
                  <div><strong>4. Tratamiento de emergencia:</strong> Procedimiento necesario para estabilizar la situación</div>
                  <div><strong>5. Plan de seguimiento:</strong> Cita de control y tratamiento definitivo si es necesario</div>
                </div>
              </div>
              
              <p>
                Nuestro compromiso es brindarte alivio inmediato y una solución definitiva a tu problema dental. No dejes que el dolor arruine tu día - contáctanos ahora para atención de urgencia en Concepción.
              </p>
            </div>

            <ProcedureCard procedures={procedures} />
          </div>

          <BenefitsSection benefits={benefits} ctaConfig={ctaConfig} />
        </div>
      </div>

      <FAQSection 
        title="Preguntas Frecuentes - Urgencias Dentales"
        faqs={faqs}
      />
    </EspecialidadLayout>
  );
};

export default UrgenciasPage;
