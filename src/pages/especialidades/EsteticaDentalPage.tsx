import React from 'react';
import EspecialidadLayout from './components/EspecialidadLayout';
import HeroSection from './components/HeroSection';
import ProcedureCard from './components/ProcedureCard';
import BenefitsSection from './components/BenefitsSection';
import FAQSection from './components/FAQSection';

const EsteticaDentalPage = () => {
  const metaTags = {
    title: 'Blanqueamiento Dental Concepción | Carillas Dentales | Clínica KDENT',
    description: 'Blanqueamiento dental y carillas dentales en Concepción. Descubre la diferencia entre blanqueamiento dental casero vs profesional. Sonrisa perfecta con estética dental.',
    keywords: 'blanqueamiento dental concepción, carillas dentales, estética dental, sonrisa perfecta, blanqueamiento profesional'
  };

  const procedures = [
    'Carillas de porcelana',
    'Blanqueamiento dental profesional',
    'Reconstrucciones con resina',
    'Corrección de sonrisa gingival',
    'Diseño digital de sonrisa',
    'Microcarillas sin tallado dental'
  ];

  const benefits = [
    'Mejora inmediata en la apariencia de la sonrisa',
    'Aumento de la confianza y autoestima',
    'Tratamientos mínimamente invasivos',
    'Resultados naturales y armónicos',
    'Soluciones personalizadas para cada paciente'
  ];

  const ctaConfig = {
    title: '✨ ¡Sonrisa de Revista HOY!',
    subtitle: 'EVALUACIÓN GRATUITA - Plan a tu medida.',
    whatsappUrl: 'https://wa.me/56922556473?text=Hola%20KDENT,%20quiero%20solicitar%20una%20hora%20para%20est%C3%A9tica%20dental,%20%C2%BFCu%C3%A1ndo%20puedo%20agendar%3F',
    whatsappText: '💬 Evaluación Gratis - WhatsApp',
    phoneText: '📞 Llamar - Estética Dental',
    footerText: '✓ Sonrisa perfecta • ✓ Resultados inmediatos'
  };

  const faqs = [
    {
      question: '¿Cuál es la diferencia entre blanqueamiento dental casero y profesional?',
      answer: 'El blanqueamiento profesional ofrece resultados inmediatos (hasta 8 tonos más blanco en una sesión), mayor seguridad con protección de encías, menor sensibilidad y duración de 2-3 años. El casero requiere 2-4 semanas, tiene menor concentración de agentes activos y resultados menos predecibles.'
    },
    {
      question: '¿Cuánto duran las carillas dentales?',
      answer: 'Las carillas de porcelana de alta calidad pueden durar entre 15-20 años con cuidado adecuado. Su durabilidad depende de la higiene oral, hábitos alimentarios, evitar el bruxismo y asistir a controles regulares cada 6 meses.'
    },
    {
      question: '¿El blanqueamiento dental causa sensibilidad?',
      answer: 'Con el blanqueamiento profesional en clínica, la sensibilidad es mínima y temporal gracias a la protección de encías y concentración controlada. Utilizamos agentes desensibilizantes y técnicas que minimizan las molestias post-tratamiento.'
    },
    {
      question: '¿Las carillas dentales se ven naturales?',
      answer: 'Sí, las carillas de porcelana modernas son prácticamente indistinguibles de los dientes naturales. Utilizamos diseño digital 3D y materiales que replican perfectamente la translucidez, color y textura del esmalte dental natural.'
    },
    {
      question: '¿Puedo comer normalmente después del blanqueamiento?',
      answer: 'Las primeras 48 horas después del blanqueamiento se recomienda evitar alimentos y bebidas pigmentantes (café, té, vino tinto, curry). Después puedes comer normalmente, aunque limitar estos alimentos ayuda a mantener los resultados por más tiempo.'
    },
    {
      question: '¿Qué incluye el diseño de sonrisa digital?',
      answer: 'Incluye análisis facial digital con proporción áurea, simulación 3D de resultados, mockup dental para probar temporalmente la nueva sonrisa, ajustes personalizados según preferencias y planificación precisa del tratamiento completo.'
    }
  ];

  return (
    <EspecialidadLayout metaTags={metaTags}>
      <HeroSection
        title="Blanqueamiento Dental Concepción"
        description="Blanqueamiento dental y carillas dentales en Concepción. Descubre la diferencia entre blanqueamiento dental casero vs profesional. Sonrisa perfecta con estética dental."
        buttonText="Consultar Blanqueamiento Dental"
        buttonUrl="https://wa.me/56922556473?text=Hola,%20quiero%20información%20sobre%20blanqueamiento%20dental%20Concepción"
        imageSrc="/images/estetica-dental.webp"
        imageAlt="Tratamiento de Estética Dental en Clínica KDENT Concepción"
      />

      {/* Descripción detallada */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-kdent-dark-blue mb-6">
              Estética Dental Concepción - Sonrisa Perfecta
            </h2>
            <div className="space-y-4 text-kdent-dark-gray/80">
              <p>
                La estética dental en Concepción ha evolucionado significativamente, y en Clínica KDENT somos pioneros en ofrecer los tratamientos más avanzados para transformar tu sonrisa. Combinamos arte, ciencia y tecnología de vanguardia para crear sonrisas naturales, armónicas y radiantes que realcen tu belleza facial y aumenten tu confianza.
              </p>
              
              <p>
                Nuestro enfoque integral de estética dental abarca desde blanqueamiento dental profesional hasta carillas de porcelana y diseño de sonrisa digital. Cada tratamiento es personalizado según las características únicas de tu rostro, personalidad y expectativas, garantizando resultados excepcionales y duraderos.
              </p>
              
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">
                Blanqueamiento Dental Profesional vs Casero
              </h3>
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
              
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">
                Carillas Dentales: Transformación Completa
              </h3>
              <p>Las carillas dentales representan la solución más versátil para corregir múltiples problemas estéticos simultáneamente. En KDENT ofrecemos carillas de porcelana de última generación que proporcionan:</p>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Corrección de forma y tamaño:</strong> Dientes pequeños, desgastados o irregulares</li>
                <li><strong>Eliminación de manchas permanentes:</strong> Tetraciclinas, fluorosis o traumatismos</li>
                <li><strong>Cierre de espacios:</strong> Diastemas y separaciones antiestéticas</li>
                <li><strong>Alineación visual:</strong> Corrección de apiñamiento leve sin ortodoncia</li>
                <li><strong>Rejuvenecimiento facial:</strong> Restauración de dimensión vertical perdida</li>
              </ul>
              
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">
                Diseño de Sonrisa Digital
              </h3>
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
              
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">
                Cuidados Post-Tratamiento
              </h3>
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
            </div>

            <ProcedureCard procedures={procedures} />
          </div>

          <BenefitsSection benefits={benefits} ctaConfig={ctaConfig} />
        </div>
      </div>

      <FAQSection 
        title="Preguntas Frecuentes - Estética Dental"
        faqs={faqs}
      />
    </EspecialidadLayout>
  );
};

export default EsteticaDentalPage;
