import React from 'react';
import EspecialidadLayout from './components/EspecialidadLayout';
import HeroSection from './components/HeroSection';
import ProcedureCard from './components/ProcedureCard';
import BenefitsSection from './components/BenefitsSection';
import FAQSection from './components/FAQSection';

const RehabilitacionOralPage = () => {
  const metaTags = {
    title: 'Rehabilitación Oral Concepción | Prótesis Dentales | Clínica KDENT',
    description: 'Rehabilitación oral en Concepción. Prótesis dentales fijas y removibles, coronas y puentes. Recupera tu sonrisa con tratamientos integrales.',
    keywords: 'rehabilitación oral concepción, prótesis dentales, coronas, puentes, dentadura completa'
  };

  const procedures = [
    'Coronas y puentes',
    'Prótesis fijas sobre implantes',
    'Prótesis removibles',
    'Incrustaciones de porcelana',
    'Reconstrucciones complejas',
    'Rehabilitación de boca completa'
  ];

  const benefits = [
    'Mejora de la función masticatoria',
    'Restauración de la estética dental',
    'Corrección de problemas de mordida',
    'Prevención de pérdida ósea',
    'Soluciones personalizadas y duraderas'
  ];

  const ctaConfig = {
    title: '🦷 ¡Recupera tu Sonrisa Completa!',
    subtitle: 'PLAN PERSONALIZADO GRATIS - Diseñamos la rehabilitación perfecta para ti.',
    whatsappUrl: 'https://wa.me/56922556473?text=Hola%20KDENT,%20necesito%20rehabilitación%20oral%20y%20quiero%20mi%20PLAN%20PERSONALIZADO%20GRATIS.%20%C2%BFCuándo%20puedo%20agendar%3F',
    whatsappText: '💬 PLAN GRATIS - WhatsApp',
    phoneText: '📞 Llamar - Rehabilitación',
    footerText: '✓ Sonrisa completa • ✓ Financiamiento disponible'
  };

  const faqs = [
    {
      question: '¿Qué es la rehabilitación oral?',
      answer: 'La rehabilitación oral es la especialidad que se encarga de restaurar la función, estética y salud de la boca cuando hay pérdida dental múltiple o daño severo. Incluye prótesis dentales, coronas, puentes e implantes para devolver la función masticatoria completa.'
    },
    {
      question: '¿Cuánto tiempo toma una rehabilitación oral completa?',
      answer: 'El tiempo varía según la complejidad del caso, desde 2-3 meses para casos simples hasta 6-12 meses para rehabilitaciones complejas con implantes. Incluye fases de planificación, preparación, fabricación y adaptación de las prótesis.'
    },
    {
      question: '¿Cuál es la diferencia entre prótesis fija y removible?',
      answer: 'Las prótesis fijas (coronas, puentes) se cementan permanentemente y no se pueden retirar. Las removibles se pueden quitar para limpieza. Las fijas ofrecen mayor comodidad y función, mientras las removibles son más económicas y fáciles de reparar.'
    },
    {
      question: '¿Las prótesis dentales se ven naturales?',
      answer: 'Sí, las prótesis modernas utilizan materiales avanzados como porcelana y zirconia que replican perfectamente el color, forma y translucidez de los dientes naturales. El diseño se personaliza según las características faciales de cada paciente.'
    },
    {
      question: '¿Cómo cuidar las prótesis dentales?',
      answer: 'Las prótesis fijas se limpian como dientes naturales con cepillado e hilo dental. Las removibles requieren limpieza diaria con productos específicos, remojo nocturno y cepillado suave. Controles regulares cada 6 meses son esenciales.'
    },
    {
      question: '¿Puedo comer normalmente con prótesis dentales?',
      answer: 'Sí, las prótesis bien adaptadas permiten comer la mayoría de alimentos. Inicialmente se recomienda comenzar con alimentos blandos y progresar gradualmente. Las prótesis fijas ofrecen mayor capacidad masticatoria que las removibles.'
    }
  ];

  return (
    <EspecialidadLayout metaTags={metaTags}>
      <HeroSection
        title="Rehabilitación Oral Concepción"
        description="Rehabilitación oral en Concepción. Prótesis dentales fijas y removibles, coronas y puentes. Recupera tu sonrisa y función masticatoria con tratamientos integrales personalizados."
        buttonText="Consultar Rehabilitación Oral"
        buttonUrl="https://wa.me/56922556473?text=Hola,%20quiero%20información%20sobre%20rehabilitación%20oral%20en%20Concepción"
        imageSrc="/images/rehabilitacion-oral.webp"
        imageAlt="Tratamiento de Rehabilitación Oral en Clínica KDENT Concepción"
      />

      {/* Descripción detallada */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-kdent-dark-blue mb-6">
              Rehabilitación Oral Concepción - Recupera tu Sonrisa
            </h2>
            <div className="space-y-4 text-kdent-dark-gray/80">
              <p>
                La rehabilitación oral en Concepción es la especialidad dental que se encarga de restaurar integralmente la función, estética y salud bucal cuando existe pérdida dental múltiple o daño severo en la estructura dental. En Clínica KDENT, ofrecemos soluciones completas y personalizadas para devolver la función masticatoria, mejorar la estética facial y aumentar significativamente tu calidad de vida.
              </p>
              
              <p>
                Nuestro enfoque integral combina tecnología avanzada, materiales de última generación y un equipo multidisciplinario para crear tratamientos que no solo restauran la función, sino que también mejoran la armonía facial y la confianza personal. Cada plan de rehabilitación es único y se adapta a las necesidades específicas, expectativas y presupuesto de cada paciente.
              </p>
              
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">
                ¿Cuándo Necesitas Rehabilitación Oral?
              </h3>
              <p>La rehabilitación oral está indicada en diversas situaciones:</p>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Pérdida dental múltiple:</strong> Ausencia de varios dientes que afecta la función</li>
                <li><strong>Desgaste dental severo:</strong> Por bruxismo, erosión o envejecimiento</li>
                <li><strong>Fracturas dentales extensas:</strong> Que comprometen la estructura dental</li>
                <li><strong>Falla de tratamientos previos:</strong> Prótesis desadaptadas o dañadas</li>
                <li><strong>Problemas de oclusión:</strong> Mordida incorrecta que causa dolor</li>
                <li><strong>Estética comprometida:</strong> Sonrisa que afecta la autoestima</li>
              </ul>
              
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">
                Tipos de Rehabilitación Oral
              </h3>
              <p>Ofrecemos diferentes opciones según las necesidades específicas:</p>
              
              <div className="bg-blue-50 border-l-4 border-kdent-blue p-4 my-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-kdent-dark-blue mb-2">Prótesis Fijas:</h4>
                    <p>Coronas individuales, puentes y prótesis sobre implantes que se cementan permanentemente. Ofrecen máxima comodidad, función y estética natural.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-kdent-dark-blue mb-2">Prótesis Removibles:</h4>
                    <p>Dentaduras parciales o completas que se pueden retirar para limpieza. Solución económica y efectiva para reemplazar múltiples dientes.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-kdent-dark-blue mb-2">Rehabilitación Mixta:</h4>
                    <p>Combinación de prótesis fijas y removibles para optimizar función, estética y presupuesto según las necesidades específicas.</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">
                Materiales de Alta Calidad
              </h3>
              <p>Utilizamos los mejores materiales disponibles en el mercado:</p>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Zirconia:</strong> Máxima resistencia y estética natural</li>
                <li><strong>Porcelana feldespática:</strong> Excelente estética para sector anterior</li>
                <li><strong>Aleaciones nobles:</strong> Biocompatibilidad y durabilidad superior</li>
                <li><strong>Resinas de alta calidad:</strong> Para prótesis removibles estéticas</li>
                <li><strong>Titanio para implantes:</strong> Integración ósea perfecta</li>
              </ul>
              
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">
                Proceso de Rehabilitación
              </h3>
              <p>Nuestro protocolo garantiza resultados predecibles y satisfactorios:</p>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                <div className="space-y-3">
                  <div><strong>1. Evaluación integral:</strong> Examen clínico, radiografías y modelos de estudio</div>
                  <div><strong>2. Planificación digital:</strong> Diseño de sonrisa y simulación de resultados</div>
                  <div><strong>3. Fase preparatoria:</strong> Tratamientos previos necesarios (endodoncias, extracciones)</div>
                  <div><strong>4. Fabricación de prótesis:</strong> Elaboración en laboratorio especializado</div>
                  <div><strong>5. Instalación y ajustes:</strong> Colocación y adaptación precisa</div>
                  <div><strong>6. Seguimiento y mantenimiento:</strong> Controles regulares para longevidad</div>
                </div>
              </div>
            </div>

            <ProcedureCard procedures={procedures} />
          </div>

          <BenefitsSection benefits={benefits} ctaConfig={ctaConfig} />
        </div>
      </div>

      <FAQSection 
        title="Preguntas Frecuentes - Rehabilitación Oral"
        faqs={faqs}
      />
    </EspecialidadLayout>
  );
};

export default RehabilitacionOralPage;
