import React from 'react';
import EspecialidadLayout from './components/EspecialidadLayout';
import HeroSection from './components/HeroSection';
import ProcedureCard from './components/ProcedureCard';
import BenefitsSection from './components/BenefitsSection';
import FAQSection from './components/FAQSection';

const EndodonciaPage = () => {
  const metaTags = {
    title: 'Endodoncia Concepción | Tratamiento de Conducto | Clínica KDENT',
    description: 'Endodoncia en Concepción. Tratamientos de conducto especializados para salvar tus dientes. Clínica KDENT - Endodoncia sin dolor.',
    keywords: 'endodoncia concepción, tratamiento de conducto, dolor dental, salvar diente'
  };

  const procedures = [
    'Endodoncia convencional',
    'Retratamiento de conductos',
    'Endodoncia mecanizada',
    'Tratamiento de urgencias por dolor dental',
    'Apicectomía',
    'Tratamiento de fracturas dentales'
  ];

  const benefits = [
    'Preservación del diente natural',
    'Eliminación del dolor e infección',
    'Procedimiento realizado en una o dos sesiones',
    'Alta tasa de éxito a largo plazo',
    'Prevención de extracciones y complicaciones futuras'
  ];

  const ctaConfig = {
    title: '🦷 ¡Salva tu Diente HOY!',
    subtitle: 'EVALUACIÓN GRATUITA - No pierdas tu diente, la endodoncia puede salvarlo.',
    whatsappUrl: 'https://wa.me/56922556473?text=Hola%20KDENT,%20tengo%20dolor%20dental%20y%20necesito%20EVALUACI%C3%93N%20GRATUITA%20de%20endodoncia.%20%C2%BFPueden%20atenderme%20pronto%3F',
    whatsappText: '💬 EVALUACIÓN GRATIS - WhatsApp',
    phoneText: '📞 Llamar - Endodoncia',
    footerText: '✓ Salva tu diente natural • ✓ Sin dolor'
  };

  const faqs = [
    {
      question: '¿Duele el tratamiento de endodoncia?',
      answer: 'No, el tratamiento de endodoncia se realiza con anestesia local efectiva que bloquea completamente el dolor. Durante el procedimiento no sentirás molestias. Después del procedimiento puede haber leve sensibilidad que se controla con analgésicos comunes.'
    },
    {
      question: '¿Cuánto tiempo dura un tratamiento de conducto?',
      answer: 'La mayoría de endodoncias se completan en 1-2 sesiones de 60-90 minutos cada una. Casos complejos pueden requerir una sesión adicional. Utilizamos tecnología avanzada para optimizar los tiempos de tratamiento sin comprometer la calidad.'
    },
    {
      question: '¿Cuánto cuesta una endodoncia en Concepción?',
      answer: 'El costo de la endodoncia varía según la complejidad del caso (unirradicular, birradicular o multirradicular). Incluye diagnóstico, tratamiento y controles. Ofrecemos planes de financiamiento y evaluación inicial sin costo.'
    },
    {
      question: '¿Qué pasa si no me hago la endodoncia?',
      answer: 'Sin tratamiento, la infección puede extenderse, causando abscesos, pérdida ósea, dolor severo y eventual pérdida del diente. La infección dental puede afectar tu salud general. Es importante tratar a tiempo para salvar el diente.'
    },
    {
      question: '¿Cuánto dura un diente con endodoncia?',
      answer: 'Un diente con endodoncia bien realizada puede durar toda la vida con cuidado adecuado. La clave es la restauración oportuna con corona y mantenimiento regular. Nuestros tratamientos tienen éxito superior al 95% a 5 años.'
    },
    {
      question: '¿Necesito corona después de la endodoncia?',
      answer: 'Sí, especialmente en molares y premolares. La endodoncia debilita la estructura dental, y la corona protege contra fracturas. En dientes anteriores con suficiente estructura, puede ser suficiente una restauración estética.'
    }
  ];

  return (
    <EspecialidadLayout metaTags={metaTags}>
      <HeroSection
        title="Endodoncia Concepción"
        description="Endodoncia en Concepción con especialistas en tratamientos de conducto. ¿Qué es una endodoncia? Te explicamos todo sobre este tratamiento para eliminar el dolor y salvar tus dientes naturales."
        buttonText="Consultar Endodoncia"
        buttonUrl="https://wa.me/56922556473?text=Hola,%20necesito%20información%20sobre%20endodoncia%20en%20Concepción"
        imageSrc="/images/endodoncia.webp"
        imageAlt="Tratamiento de Endodoncia en Clínica KDENT Concepción"
      />

      {/* Descripción detallada */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-kdent-dark-blue mb-6">
              Endodoncia Concepción - Salva tu Diente Natural
            </h2>
            <div className="space-y-4 text-kdent-dark-gray/80">
              <p>
                La endodoncia en Concepción es el tratamiento especializado que permite salvar dientes con infecciones severas, daños pulpares o dolor dental intenso. En Clínica KDENT, somos expertos en tratamientos de conducto con más de 10 años de experiencia, utilizando tecnología de vanguardia y técnicas mínimamente invasivas para preservar tus dientes naturales.
              </p>
              
              <p>
                Nuestro enfoque integral de endodoncia combina diagnóstico preciso, tratamiento sin dolor y seguimiento personalizado. Utilizamos equipos especializados como localizadores de ápice, sistemas de irrigación ultrasónica y obturación termoplastificada para garantizar el éxito del tratamiento a largo plazo.
              </p>
              
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">
                ¿Cuándo Necesitas Endodoncia?
              </h3>
              <p>La endodoncia es necesaria cuando la pulpa dental (nervio del diente) se encuentra infectada, inflamada o necrótica. Los síntomas más comunes incluyen:</p>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
                <h4 className="font-semibold text-red-700 mb-2">Señales de Alerta:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4 text-red-600">
                  <li>Dolor dental intenso y persistente</li>
                  <li>Sensibilidad extrema al frío y calor</li>
                  <li>Dolor al morder o masticar</li>
                  <li>Hinchazón en la encía o rostro</li>
                  <li>Cambio de color del diente (oscurecimiento)</li>
                  <li>Aparición de abscesos o fístulas</li>
                  <li>Dolor nocturno que interrumpe el sueño</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">
                Proceso de Endodoncia en KDENT
              </h3>
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
              
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">
                Tecnología Avanzada en Endodoncia
              </h3>
              <p>En Clínica KDENT utilizamos la tecnología más avanzada para endodoncia:</p>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Localizador de ápice electrónico:</strong> Medición precisa de la longitud radicular</li>
                <li><strong>Sistemas rotatorios NiTi:</strong> Instrumentación eficiente y segura</li>
                <li><strong>Irrigación ultrasónica:</strong> Desinfección profunda de conductos</li>
                <li><strong>Obturación termoplastificada:</strong> Sellado hermético tridimensional</li>
                <li><strong>Radiografía digital:</strong> Diagnóstico preciso con menor radiación</li>
                <li><strong>Microendodoncia:</strong> Tratamiento con magnificación óptica</li>
              </ul>
              
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">
                Ventajas de la Endodoncia vs Extracción
              </h3>
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
              
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">
                Cuidados Post-Endodoncia
              </h3>
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

            <ProcedureCard procedures={procedures} />
          </div>

          <BenefitsSection benefits={benefits} ctaConfig={ctaConfig} />
        </div>
      </div>

      <FAQSection 
        title="Preguntas Frecuentes - Endodoncia"
        faqs={faqs}
      />
    </EspecialidadLayout>
  );
};

export default EndodonciaPage;
