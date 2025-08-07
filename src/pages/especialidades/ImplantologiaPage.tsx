import React from 'react';
import EspecialidadLayout from './components/EspecialidadLayout';
import HeroSection from './components/HeroSection';
import ProcedureCard from './components/ProcedureCard';
import BenefitsSection from './components/BenefitsSection';
import FAQSection from './components/FAQSection';

const ImplantologiaPage = () => {
  const metaTags = {
    title: 'Implantes Dentales Concepción | Precio y Tecnología | Clínica KDENT',
    description: 'Implantes dentales en Concepción con la mejor tecnología. Conoce precios y beneficios de los implantes dentales. Prótesis dentales y soluciones completas.',
    keywords: 'implantes dentales concepción, precio implantes dentales, implantología concepción, prótesis dentales'
  };

  const procedures = [
    'Implantes unitarios',
    'Implantes múltiples',
    'All-on-4 y All-on-6',
    'Carga inmediata',
    'Regeneración ósea guiada',
    'Elevación de seno maxilar'
  ];

  const benefits = [
    'Apariencia y función similar a dientes naturales',
    'Preservación del hueso maxilar',
    'Estabilidad y comodidad superiores a otras prótesis',
    'Solución duradera a largo plazo',
    'Mejora en la calidad de vida y autoestima'
  ];

  const ctaConfig = {
    title: '🦷 ¡Dientes Fijos de por Vida!',
    subtitle: 'EVALUACIÓN 3D GRATUITA - Descubre si eres candidato para implantes dentales.',
    whatsappUrl: 'https://wa.me/56922556473?text=Hola%20KDENT,%20quiero%20mi%20EVALUACIÓN%203D%20GRATUITA%20para%20implantes%20dentales.%20%C2%BFCuándo%20puedo%20agendar%3F',
    whatsappText: '💬 EVALUACIÓN 3D GRATIS - WhatsApp',
    phoneText: '📞 Llamar - Implantes',
    footerText: '✓ Dientes fijos • ✓ Tecnología 3D avanzada'
  };

  const faqs = [
    {
      question: '¿Cuánto cuesta un implante dental en Concepción?',
      answer: 'El precio de un implante dental varía según el caso específico. Incluye implante de titanio, corona y cirugía. Ofrecemos planes de financiamiento y evaluación gratuita. Contáctanos para conocer el presupuesto personalizado para tu caso.'
    },
    {
      question: '¿Cuánto tiempo dura un implante dental?',
      answer: 'Con cuidado adecuado, un implante dental puede durar toda la vida. Nuestros implantes de titanio tienen una tasa de éxito superior al 95% con seguimiento especializado. El mantenimiento es similar al de los dientes naturales.'
    },
    {
      question: '¿Duele la cirugía de implantes dentales?',
      answer: 'La cirugía de implantes se realiza con anestesia local, por lo que no sentirás dolor durante el procedimiento. Post-operatoriamente, el dolor es mínimo y se controla con analgésicos comunes. La mayoría de pacientes se reincorporan a sus actividades al día siguiente.'
    },
    {
      question: '¿Cuánto tiempo toma el proceso completo?',
      answer: 'El proceso completo toma entre 3-6 meses. Incluye colocación del implante, período de osteointegración y colocación de la corona final. En casos seleccionados ofrecemos carga inmediata con dientes el mismo día.'
    },
    {
      question: '¿Qué cuidados requiere un implante dental?',
      answer: 'Los implantes requieren el mismo cuidado que los dientes naturales: cepillado diario, uso de hilo dental y controles regulares. Es importante evitar el tabaco y mantener una buena higiene oral para asegurar la longevidad del implante.'
    },
    {
      question: '¿Soy candidato para implantes dentales?',
      answer: 'La mayoría de personas son candidatas para implantes dentales. Se requiere hueso suficiente y encías sanas. Evaluamos cada caso individualmente con exámenes clínicos y radiografías 3D. Agenda tu evaluación gratuita para conocer tu elegibilidad.'
    }
  ];

  return (
    <EspecialidadLayout metaTags={metaTags}>
      <HeroSection
        title="Implantes Dentales Concepción"
        description="Implantes dentales en Concepción con la mejor tecnología. Conoce precios y beneficios de los implantes dentales. Prótesis dentales y soluciones completas para recuperar tu sonrisa."
        buttonText="Consultar Precio Implantes"
        buttonUrl="https://wa.me/56922556473?text=Hola,%20quiero%20conocer%20precio%20implantes%20dentales%20Concepción"
        imageSrc="/images/implantologia.webp"
        imageAlt="Tratamiento de Implantología en Clínica KDENT Concepción"
      />

      {/* Descripción detallada */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-kdent-dark-blue mb-6">
              Implantes Dentales en Concepción - Tecnología Avanzada
            </h2>
            <div className="space-y-4 text-kdent-dark-gray/80">
              <p>
                Los implantes dentales representan la solución más avanzada y duradera para reemplazar dientes perdidos en Concepción. En Clínica KDENT, contamos con más de 10 años de experiencia en implantología, utilizando tecnología de vanguardia y materiales de la más alta calidad para garantizar resultados excepcionales.
              </p>
              
              <p>
                Nuestros implantes dentales de titanio grado médico se integran perfectamente con el hueso maxilar, proporcionando una base sólida y permanente para coronas, puentes o prótesis completas. Esta integración, conocida como osteointegración, asegura la estabilidad y funcionalidad a largo plazo.
              </p>
              
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">
                ¿Por Qué Elegir Implantes Dentales?
              </h3>
              <p>Los implantes dentales ofrecen ventajas significativas sobre otras opciones de reemplazo dental:</p>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Durabilidad excepcional:</strong> Con cuidado adecuado, pueden durar toda la vida</li>
                <li><strong>Preservación del hueso:</strong> Estimulan el hueso maxilar, evitando su reabsorción</li>
                <li><strong>Estética natural:</strong> Indistinguibles de los dientes naturales</li>
                <li><strong>Funcionalidad completa:</strong> Permiten masticar y hablar con normalidad</li>
                <li><strong>No afectan dientes adyacentes:</strong> A diferencia de los puentes tradicionales</li>
                <li><strong>Fácil mantenimiento:</strong> Se limpian como dientes naturales</li>
              </ul>
              
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">
                Proceso de Implantología en KDENT
              </h3>
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
              
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">
                Tecnología de Vanguardia
              </h3>
              <p>En Clínica KDENT utilizamos la tecnología más avanzada para implantología:</p>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Tomografía computarizada 3D:</strong> Planificación precisa y segura</li>
                <li><strong>Implantes de titanio grado 4:</strong> Máxima biocompatibilidad</li>
                <li><strong>Coronas de zirconia:</strong> Estética superior y resistencia</li>
                <li><strong>Carga inmediata:</strong> Dientes el mismo día en casos seleccionados</li>
              </ul>
              
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">
                Tipos de Implantes Dentales
              </h3>
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
              
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">
                ¿Eres Candidato para Implantes Dentales?
              </h3>
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
              
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">
                Ventajas de los Implantes vs Otras Opciones
              </h3>
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
              
              <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-8 mb-4">
                Cuidados Post-Implante
              </h3>
              <p>El éxito a largo plazo de los implantes dentales depende del cuidado adecuado:</p>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                <div className="space-y-3">
                  <div><strong>Primeras 24-48 horas:</strong> Reposo, dieta blanda, aplicar hielo, tomar medicación prescrita</div>
                  <div><strong>Primera semana:</strong> Higiene cuidadosa, enjuagues con suero fisiológico, evitar ejercicio intenso</div>
                  <div><strong>Período de cicatrización:</strong> Controles regulares, evitar cargas excesivas sobre el implante</div>
                  <div><strong>Mantenimiento a largo plazo:</strong> Higiene diaria, controles cada 6 meses, evitar hábitos nocivos</div>
                </div>
              </div>
            </div>

            <ProcedureCard procedures={procedures} />
          </div>

          <BenefitsSection benefits={benefits} ctaConfig={ctaConfig} />
        </div>

        {/* Precios y paquetes */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
            <h3 className="text-xl font-display font-medium text-kdent-dark-blue mb-4">
              Precios de Implantes Dentales en Concepción
            </h3>
            <p className="text-kdent-dark-gray/80 mb-4">
              Ofrecemos planes de financiamiento flexibles y precios competitivos para hacer accesible la implantología. Nuestros paquetes incluyen:
            </p>
            <div className="space-y-2">
              <div><strong>✓ Implante de titanio premium</strong></div>
              <div><strong>✓ Corona de porcelana o zirconia</strong></div>
              <div><strong>✓ Cirugía y colocación</strong></div>
              <div><strong>✓ Controles post-operatorios</strong></div>
              <div><strong>✓ Seguimiento especializado</strong></div>
            </div>
          </div>
        </div>
      </div>

      <FAQSection 
        title="Preguntas Frecuentes - Implantes Dentales"
        faqs={faqs}
      />
    </EspecialidadLayout>
  );
};

export default ImplantologiaPage;
