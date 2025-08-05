import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const BlogPage = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  let content = null;

  if (slug === 'como-aliviar-dolor-de-muela') {
    content = (
      <>
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-kdent-light-blue/50 to-white pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <Link to="/blog" className="text-kdent-blue hover:text-kdent-dark-blue transition-colors inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="font-semibold">Volver al Blog</span>
              </Link>
            </div>
            
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-64 md:h-80">
                <img 
                  src="/images/blog-dolor muelas.webp" 
                  alt="Cómo aliviar el dolor de muela - Consejos de dentistas en Concepción" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 text-sm text-kdent-dark-gray/70 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Dr. Equipo KDENT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>5 min de lectura</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-display font-bold text-kdent-dark-blue mb-6">
                  Cómo Aliviar el Dolor de Muela: Guía Completa
                </h1>
                
                <div className="prose prose-lg max-w-none text-kdent-dark-gray/80">
                  <p className="text-xl mb-8 text-kdent-dark-gray/90">
                    El dolor de muela es una de las molestias más intensas que podemos experimentar. En Clínica KDENT Concepción, te explicamos qué hacer ante una urgencia dental y cómo aliviar el dolor mientras buscas atención profesional.
                  </p>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">¿Qué Causa el Dolor de Muela?</h2>
                  <p>El dolor dental puede tener múltiples causas:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Caries profundas:</strong> Cuando las bacterias alcanzan la pulpa dental</li>
                    <li><strong>Infecciones:</strong> Abscesos que requieren atención inmediata</li>
                    <li><strong>Fracturas dentales:</strong> Por traumatismos o desgaste</li>
                    <li><strong>Sensibilidad dental:</strong> Exposición de la dentina</li>
                    <li><strong>Problemas de encías:</strong> Gingivitis o periodontitis</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">Remedios Inmediatos para Aliviar el Dolor</h2>
                  
                  <h3 className="text-xl font-medium text-kdent-dark-blue mt-6 mb-3">1. Analgésicos de Venta Libre</h3>
                  <p>El ibuprofeno es especialmente efectivo para el dolor dental debido a sus propiedades antiinflamatorias. Sigue siempre las indicaciones del envase.</p>
                  
                  <h3 className="text-xl font-medium text-kdent-dark-blue mt-6 mb-3">2. Enjuague con Agua Salada</h3>
                  <p>Mezcla una cucharadita de sal en un vaso de agua tibia. Este enjuague natural ayuda a reducir la inflamación y eliminar bacterias.</p>
                  
                  <h3 className="text-xl font-medium text-kdent-dark-blue mt-6 mb-3">3. Compresas Frías</h3>
                  <p>Aplica hielo envuelto en una toalla en la mejilla durante 15-20 minutos. Esto reduce la inflamación y adormece el dolor.</p>
                  
                  <h3 className="text-xl font-medium text-kdent-dark-blue mt-6 mb-3">4. Clavo de Olor</h3>
                  <p>El eugenol presente en el clavo tiene propiedades anestésicas naturales. Aplica aceite de clavo con un algodón directamente en el diente.</p>
                  
                  <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
                    <h3 className="text-lg font-semibold text-red-800 mb-2">⚠️ Cuándo Buscar Atención Urgente</h3>
                    <p className="text-red-700">Contacta inmediatamente a un dentista si experimentas:</p>
                    <ul className="list-disc pl-6 mt-2 text-red-700">
                      <li>Dolor severo que no mejora con analgésicos</li>
                      <li>Hinchazón facial o en las encías</li>
                      <li>Fiebre acompañando el dolor dental</li>
                      <li>Dificultad para tragar o abrir la boca</li>
                      <li>Sabor desagradable persistente en la boca</li>
                    </ul>
                  </div>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">Prevención del Dolor Dental</h2>
                  <p>La mejor manera de evitar el dolor de muela es mantener una buena higiene oral:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Cepillado dental 3 veces al día</li>
                    <li>Uso diario de hilo dental</li>
                    <li>Visitas regulares al dentista cada 6 meses</li>
                    <li>Limpieza dental profesional periódica</li>
                    <li>Evitar alimentos muy azucarados</li>
                  </ul>
                  
                  <div className="bg-kdent-light-blue/20 rounded-lg p-6 my-8">
                    <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">💡 Consejo del Dr. KDENT</h3>
                    <p className="text-kdent-dark-gray/80">
                      "Recuerda que estos remedios son temporales. El dolor dental siempre requiere evaluación profesional para identificar y tratar la causa raíz. En Clínica KDENT Concepción ofrecemos atención de urgencias dentales para resolver tu problema de manera definitiva."
                    </p>
                  </div>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">¿Necesitas Atención Dental Urgente en Concepción?</h2>
                  <p>
                    En Clínica KDENT contamos con dentistas especializados en urgencias dentales. Nuestro equipo está preparado para atender casos de dolor agudo, infecciones y traumatismos dentales con la tecnología más avanzada.
                  </p>
                  
                  <div className="text-center mt-8">
                    <a 
                      href="https://wa.me/56922556473?text=Hola,%20tengo%20dolor%20de%20muela%20y%20necesito%20atención%20urgente%20en%20Concepción" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary inline-block"
                    >
                      Contactar por Urgencia Dental
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </>
    );
  } else if (slug === 'tipos-de-ortodoncia') {
    content = (
      <>
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-kdent-light-blue/50 to-white pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <Link to="/blog" className="text-kdent-blue hover:text-kdent-dark-blue transition-colors inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="font-semibold">Volver al Blog</span>
              </Link>
            </div>
            
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-64 md:h-80">
                <img 
                  src="/images/blog-ortodoncia.webp" 
                  alt="Tipos de ortodoncia disponibles en Concepción - Clínica KDENT" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 text-sm text-kdent-dark-gray/70 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Dr. Equipo KDENT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>8 min de lectura</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-display font-bold text-kdent-dark-blue mb-6">
                  Tipos de Ortodoncia: Guía Completa para Elegir el Mejor Tratamiento
                </h1>
                
                <div className="prose prose-lg max-w-none text-kdent-dark-gray/80">
                  <p className="text-xl mb-8 text-kdent-dark-gray/90">
                    La ortodoncia en Concepción ha evolucionado significativamente. En Clínica KDENT te explicamos todos los tipos de ortodoncia disponibles, sus ventajas y cómo elegir el tratamiento ideal para tu caso.
                  </p>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">¿Qué es la Ortodoncia?</h2>
                  <p>
                    La ortodoncia es la especialidad dental que se encarga de corregir la posición de los dientes y la mordida. Un tratamiento ortodóntico no solo mejora la estética de tu sonrisa, sino que también optimiza la función masticatoria y previene problemas futuros.
                  </p>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">Tipos de Ortodoncia Disponibles</h2>
                  
                  <h3 className="text-xl font-medium text-kdent-dark-blue mt-6 mb-3">1. Ortodoncia Metálica Tradicional</h3>
                  <p><strong>Características:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Brackets metálicos adheridos a los dientes</li>
                    <li>Alambres que ejercen presión controlada</li>
                    <li>Opción más económica y efectiva</li>
                    <li>Ideal para casos complejos</li>
                  </ul>
                  <p><strong>Ventajas:</strong> Menor costo, muy efectiva, resistente</p>
                  <p><strong>Desventajas:</strong> Más visible, puede causar molestias iniciales</p>
                  
                  <h3 className="text-xl font-medium text-kdent-dark-blue mt-6 mb-3">2. Ortodoncia Estética (Brackets Cerámicos)</h3>
                  <p><strong>Características:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Brackets del color del diente</li>
                    <li>Menos visibles que los metálicos</li>
                    <li>Misma efectividad que los tradicionales</li>
                    <li>Ideal para adultos preocupados por la estética</li>
                  </ul>
                  <p><strong>Ventajas:</strong> Discreta, efectiva, cómoda</p>
                  <p><strong>Desventajas:</strong> Costo mayor, pueden mancharse</p>
                  
                  <h3 className="text-xl font-medium text-kdent-dark-blue mt-6 mb-3">3. Ortodoncia Invisible (Alineadores)</h3>
                  <p><strong>Características:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Férulas transparentes removibles</li>
                    <li>Cambio cada 1-2 semanas</li>
                    <li>Prácticamente invisible</li>
                    <li>Permite comer y cepillarse normalmente</li>
                  </ul>
                  <p><strong>Ventajas:</strong> Invisible, removible, cómoda, higiénica</p>
                  <p><strong>Desventajas:</strong> Costo elevado, requiere disciplina, no para todos los casos</p>
                  
                  <h3 className="text-xl font-medium text-kdent-dark-blue mt-6 mb-3">4. Ortodoncia Lingual</h3>
                  <p><strong>Características:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Brackets colocados en la cara interna de los dientes</li>
                    <li>Completamente invisible desde el exterior</li>
                    <li>Técnica especializada</li>
                    <li>Personalizada para cada paciente</li>
                  </ul>
                  <p><strong>Ventajas:</strong> Totalmente invisible, muy efectiva</p>
                  <p><strong>Desventajas:</strong> Costo muy elevado, período de adaptación más largo</p>
                  
                  <div className="bg-kdent-light-blue/20 rounded-lg p-6 my-8">
                    <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">💰 Valor Ortodoncia Concepción</h3>
                    <p className="text-kdent-dark-gray/80">
                      El costo de la ortodoncia varía según el tipo de tratamiento y la complejidad del caso. En Clínica KDENT ofrecemos planes de financiamiento flexibles para hacer accesible tu tratamiento ortodóntico.
                    </p>
                  </div>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">¿Cómo Elegir el Tipo de Ortodoncia Adecuado?</h2>
                  
                  <h3 className="text-xl font-medium text-kdent-dark-blue mt-6 mb-3">Factores a Considerar:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Complejidad del caso:</strong> Algunos problemas requieren brackets tradicionales</li>
                    <li><strong>Edad del paciente:</strong> Los adolescentes pueden preferir opciones más discretas</li>
                    <li><strong>Estilo de vida:</strong> Profesionales pueden necesitar opciones invisibles</li>
                    <li><strong>Presupuesto:</strong> Los costos varían significativamente entre opciones</li>
                    <li><strong>Tiempo de tratamiento:</strong> Algunos métodos son más rápidos que otros</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">Duración del Tratamiento Ortodóntico</h2>
                  <p>La duración típica de los tratamientos ortodónticos es:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Casos simples:</strong> 12-18 meses</li>
                    <li><strong>Casos moderados:</strong> 18-24 meses</li>
                    <li><strong>Casos complejos:</strong> 24-36 meses</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">Cuidados Durante el Tratamiento</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Mantener excelente higiene oral</li>
                    <li>Evitar alimentos duros o pegajosos</li>
                    <li>Asistir a todas las citas de control</li>
                    <li>Usar retenedores según indicaciones</li>
                    <li>Realizar limpiezas dentales regulares</li>
                  </ul>
                  
                  <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">✅ Beneficios de la Ortodoncia</h3>
                    <ul className="list-disc pl-6 text-green-700 space-y-1">
                      <li>Mejora la estética de la sonrisa</li>
                      <li>Optimiza la función masticatoria</li>
                      <li>Facilita la higiene dental</li>
                      <li>Previene problemas de ATM</li>
                      <li>Aumenta la autoestima</li>
                      <li>Mejora la salud periodontal</li>
                    </ul>
                  </div>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">Ortodoncia en Concepción - Clínica KDENT</h2>
                  <p>
                    En Clínica KDENT Concepción contamos con ortodoncistas especializados y la tecnología más avanzada para ofrecerte el mejor tratamiento ortodóntico. Realizamos un estudio completo de tu caso para recomendarte la opción más adecuada según tus necesidades y presupuesto.
                  </p>
                  
                  <div className="text-center mt-8">
                    <a 
                      href="https://wa.me/56922556473?text=Hola,%20quiero%20información%20sobre%20ortodoncia%20en%20Concepción%20y%20conocer%20los%20precios" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary inline-block"
                    >
                      Consultar Ortodoncia Concepción
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </>
    );
  } else if (slug === 'importancia-limpieza-dental') {
    content = (
      <>
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-kdent-light-blue/50 to-white pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <Link to="/blog" className="text-kdent-blue hover:text-kdent-dark-blue transition-colors inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="font-semibold">Volver al Blog</span>
              </Link>
            </div>
            
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-64 md:h-80">
                <img 
                  src="/images/blog-cepillado.webp" 
                  alt="Importancia de la limpieza dental - Clínica KDENT Concepción" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 text-sm text-kdent-dark-gray/70 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Dr. Equipo KDENT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>6 min de lectura</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-display font-bold text-kdent-dark-blue mb-6">
                  Importancia de la Limpieza Dental: Tu Sonrisa Saludable
                </h1>
                
                <div className="prose prose-lg max-w-none text-kdent-dark-gray/80">
                  <p className="text-xl mb-8 text-kdent-dark-gray/90">
                    La limpieza dental Concepción es fundamental para mantener una salud bucal óptima. En Clínica KDENT te explicamos por qué es tan importante y cómo puede prevenir problemas graves.
                  </p>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">¿Qué es una Limpieza Dental Profesional?</h2>
                  <p>
                    La limpieza dental profesional, también conocida como profilaxis, es un procedimiento que elimina la placa bacteriana y el sarro acumulado que el cepillado diario no puede remover completamente.
                  </p>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">Beneficios de la Limpieza Dental</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Prevención de caries:</strong> Elimina las bacterias que causan deterioro dental</li>
                    <li><strong>Prevención de enfermedades periodontales:</strong> Mantiene las encías saludables</li>
                    <li><strong>Eliminación del mal aliento:</strong> Remueve bacterias causantes de halitosis</li>
                    <li><strong>Detección temprana:</strong> Permite identificar problemas en etapas iniciales</li>
                    <li><strong>Sonrisa más brillante:</strong> Elimina manchas superficiales</li>
                  </ul>
                  
                  <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">✅ ¿Cada Cuánto Hacer Limpieza Dental?</h3>
                    <p className="text-green-700">
                      Los dentistas recomiendan realizar una limpieza dental profesional cada 6 meses. Sin embargo, algunos pacientes con mayor riesgo de enfermedad periodontal pueden necesitarla cada 3-4 meses.
                    </p>
                  </div>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">Proceso de Limpieza Dental en Clínica KDENT</h2>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li><strong>Examen inicial:</strong> Evaluación del estado de dientes y encías</li>
                    <li><strong>Eliminación de sarro:</strong> Uso de instrumentos ultrasónicos</li>
                    <li><strong>Pulido dental:</strong> Suavizado de superficies dentales</li>
                    <li><strong>Aplicación de flúor:</strong> Fortalecimiento del esmalte dental</li>
                    <li><strong>Recomendaciones:</strong> Consejos personalizados de higiene</li>
                  </ol>
                  
                  <div className="text-center mt-8">
                    <a 
                      href="https://wa.me/56922556473?text=Hola,%20quiero%20agendar%20una%20limpieza%20dental%20en%20Concepción" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary inline-block"
                    >
                      Agendar Limpieza Dental
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </>
    );
  } else if (slug === 'odontopediatria-salud-bucal-ninos') {
    content = (
      <>
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-kdent-light-blue/50 to-white pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <Link to="/blog" className="text-kdent-blue hover:text-kdent-dark-blue transition-colors inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="font-semibold">Volver al Blog</span>
              </Link>
            </div>
            
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-64 md:h-80">
                <img 
                  src="/images/blog-pediatria.webp" 
                  alt="Odontopediatría Concepción - Salud bucal en niños" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 text-sm text-kdent-dark-gray/70 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Dr. Equipo KDENT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>7 min de lectura</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-display font-bold text-kdent-dark-blue mb-6">
                  Odontopediatría Concepción: Salud Bucal en Niños
                </h1>
                
                <div className="prose prose-lg max-w-none text-kdent-dark-gray/80">
                  <p className="text-xl mb-8 text-kdent-dark-gray/90">
                    La odontopediatría Concepción se especializa en el cuidado dental de bebés, niños y adolescentes. En Clínica KDENT entendemos la importancia de crear experiencias positivas desde temprana edad.
                  </p>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">¿Cuándo Llevar al Niño al Dentista?</h2>
                  <p>La primera visita dental debe realizarse:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Al aparecer el primer diente (alrededor de los 6 meses)</li>
                    <li>No más tarde del primer cumpleaños</li>
                    <li>Ante cualquier problema o dolor dental</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">Cuidados Dentales por Edad</h2>
                  
                  <h3 className="text-xl font-medium text-kdent-dark-blue mt-6 mb-3">0-2 años</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Limpiar encías con gasa húmeda</li>
                    <li>Cepillar dientes con cepillo suave sin pasta</li>
                    <li>Evitar biberón nocturno con líquidos azucarados</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium text-kdent-dark-blue mt-6 mb-3">2-6 años</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Cepillado supervisado con pasta fluorada</li>
                    <li>Enseñar técnica correcta de cepillado</li>
                    <li>Limitar dulces y bebidas azucaradas</li>
                    <li>Controles dentales cada 6 meses</li>
                  </ul>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">🦷 Consejos para Padres</h3>
                    <ul className="list-disc pl-6 text-blue-700 space-y-1">
                      <li>Hacer del cepillado una actividad divertida</li>
                      <li>Usar cepillos de colores atractivos</li>
                      <li>Establecer rutinas de higiene</li>
                      <li>Dar ejemplo con buenos hábitos</li>
                    </ul>
                  </div>
                  
                  <div className="text-center mt-8">
                    <a 
                      href="https://wa.me/56922556473?text=Hola,%20quiero%20agendar%20una%20consulta%20de%20odontopediatría%20en%20Concepción" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary inline-block"
                    >
                      Consultar Odontopediatría
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </>
    );
  } else if (slug === 'bruxismo-tratamiento-concepcion') {
    content = (
      <>
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-kdent-light-blue/50 to-white pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <Link to="/blog" className="text-kdent-blue hover:text-kdent-dark-blue transition-colors inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="font-semibold">Volver al Blog</span>
              </Link>
            </div>
            
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-64 md:h-80">
                <img 
                  src="/images/blog-bruxismo.webp" 
                  alt="Bruxismo tratamiento Concepción - Clínica KDENT" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 text-sm text-kdent-dark-gray/70 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Dr. Equipo KDENT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>6 min de lectura</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-display font-bold text-kdent-dark-blue mb-6">
                  Bruxismo Tratamiento Concepción: Soluciones Efectivas
                </h1>
                
                <div className="prose prose-lg max-w-none text-kdent-dark-gray/80">
                  <p className="text-xl mb-8 text-kdent-dark-gray/90">
                    El bruxismo tratamiento Concepción requiere atención especializada. En Clínica KDENT ofrecemos soluciones efectivas para proteger tus dientes del rechinar nocturno.
                  </p>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">¿Qué es el Bruxismo?</h2>
                  <p>
                    El bruxismo es el hábito involuntario de apretar o rechinar los dientes, especialmente durante el sueño. Puede causar desgaste dental, dolor de mandíbula y dolores de cabeza.
                  </p>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">Síntomas del Bruxismo</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Desgaste anormal de los dientes</li>
                    <li>Dolor de mandíbula al despertar</li>
                    <li>Dolores de cabeza frecuentes</li>
                    <li>Sensibilidad dental</li>
                    <li>Ruidos nocturnos reportados por la pareja</li>
                    <li>Tensión en músculos faciales</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">Tratamientos para el Bruxismo</h2>
                  
                  <h3 className="text-xl font-medium text-kdent-dark-blue mt-6 mb-3">1. Placa de Descarga</h3>
                  <p>Dispositivo personalizado que protege los dientes durante el sueño, reduciendo el desgaste y la presión sobre la mandíbula.</p>
                  
                  <h3 className="text-xl font-medium text-kdent-dark-blue mt-6 mb-3">2. Manejo del Estrés</h3>
                  <p>Técnicas de relajación, ejercicio regular y terapia para reducir la tensión que contribuye al bruxismo.</p>
                  
                  <h3 className="text-xl font-medium text-kdent-dark-blue mt-6 mb-3">3. Corrección de la Mordida</h3>
                  <p>En casos donde problemas de oclusión contribuyen al bruxismo, puede ser necesario tratamiento ortodóntico.</p>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">⚠️ Consecuencias del Bruxismo No Tratado</h3>
                    <ul className="list-disc pl-6 text-yellow-700 space-y-1">
                      <li>Desgaste severo del esmalte dental</li>
                      <li>Fracturas dentales</li>
                      <li>Problemas de la articulación temporomandibular (ATM)</li>
                      <li>Pérdida de la dimensión vertical facial</li>
                    </ul>
                  </div>
                  
                  <div className="text-center mt-8">
                    <a 
                      href="https://wa.me/56922556473?text=Hola,%20creo%20que%20tengo%20bruxismo%20y%20necesito%20tratamiento%20en%20Concepción" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary inline-block"
                    >
                      Consultar Tratamiento Bruxismo
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </>
    );
  } else if (slug === 'periodoncia-sintomas-periodontitis') {
    content = (
      <>
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-kdent-light-blue/50 to-white pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <Link to="/blog" className="text-kdent-blue hover:text-kdent-dark-blue transition-colors inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="font-semibold">Volver al Blog</span>
              </Link>
            </div>
            
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-64 md:h-80">
                <img 
                  src="/images/blog-periodoncia.webp" 
                  alt="Periodoncia Concepción - Síntomas de la periodontitis" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 text-sm text-kdent-dark-gray/70 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Dr. Equipo KDENT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>7 min de lectura</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-display font-bold text-kdent-dark-blue mb-6">
                  Periodoncia Concepción: Síntomas de la Periodontitis
                </h1>
                
                <div className="prose prose-lg max-w-none text-kdent-dark-gray/80">
                  <p className="text-xl mb-8 text-kdent-dark-gray/90">
                    La periodoncia Concepción trata las enfermedades de las encías y tejidos de soporte dental. Conoce los síntomas de la periodontitis y cuándo es importante buscar atención profesional.
                  </p>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">¿Qué es la Periodontitis?</h2>
                  <p>
                    La periodontitis es una infección grave de las encías que afecta los tejidos que sostienen los dientes. Sin tratamiento adecuado, puede llevar a la pérdida dental.
                  </p>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">Síntomas de la Periodontitis</h2>
                  <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
                    <h3 className="text-lg font-semibold text-red-800 mb-4">⚠️ Señales de Alerta</h3>
                    <ul className="list-disc pl-6 text-red-700 space-y-2">
                      <li>Encías hinchadas, rojas o sensibles</li>
                      <li>Sangrado al cepillarse o usar hilo dental</li>
                      <li>Encías que se retraen</li>
                      <li>Mal aliento persistente</li>
                      <li>Dientes flojos o que se separan</li>
                      <li>Pus entre dientes y encías</li>
                      <li>Dolor al masticar</li>
                    </ul>
                  </div>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">Factores de Riesgo</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Higiene oral deficiente</li>
                    <li>Tabaquismo</li>
                    <li>Diabetes</li>
                    <li>Cambios hormonales</li>
                    <li>Medicamentos que reducen la saliva</li>
                    <li>Predisposición genética</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">Prevención de la Periodontitis</h2>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Cepillado dental dos veces al día</li>
                    <li>Uso diario de hilo dental</li>
                    <li>Enjuague bucal antimicrobiano</li>
                    <li>Controles dentales regulares</li>
                    <li>Evitar el tabaco</li>
                    <li>Dieta equilibrada</li>
                  </ol>
                  
                  <div className="text-center mt-8">
                    <a 
                      href="https://wa.me/56922556473?text=Hola,%20tengo%20síntomas%20de%20periodontitis%20y%20necesito%20una%20consulta%20en%20Concepción" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary inline-block"
                    >
                      Consultar sobre Periodoncia
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </>
    );
  } else if (slug === 'sensibilidad-dental-causas-tratamiento') {
    content = (
      <>
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-kdent-light-blue/50 to-white pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <Link to="/blog" className="text-kdent-blue hover:text-kdent-dark-blue transition-colors inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="font-semibold">Volver al Blog</span>
              </Link>
            </div>
            
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-64 md:h-80">
                <img 
                  src="/images/blog-sensibilidad.webp" 
                  alt="Sensibilidad dental causas y tratamiento" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 text-sm text-kdent-dark-gray/70 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Dr. Equipo KDENT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>6 min de lectura</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-display font-bold text-kdent-dark-blue mb-6">
                  Sensibilidad Dental: Causas y Tratamiento
                </h1>
                
                <div className="prose prose-lg max-w-none text-kdent-dark-gray/80">
                  <p className="text-xl mb-8 text-kdent-dark-gray/90">
                    La sensibilidad dental es una molestia común que afecta a muchas personas. Conoce sus causas principales y las opciones de tratamiento disponibles.
                  </p>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">¿Qué es la Sensibilidad Dental?</h2>
                  <p>
                    La sensibilidad dental se produce cuando la dentina (capa interna del diente) queda expuesta, causando dolor agudo al contacto con estímulos fríos, calientes, dulces o ácidos.
                  </p>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">Principales Causas</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Cepillado agresivo:</strong> Desgasta el esmalte dental</li>
                    <li><strong>Recesión gingival:</strong> Expone la raíz del diente</li>
                    <li><strong>Caries dentales:</strong> Crean cavidades que exponen la dentina</li>
                    <li><strong>Bruxismo:</strong> Desgaste por rechinar los dientes</li>
                    <li><strong>Alimentos ácidos:</strong> Erosionan el esmalte</li>
                    <li><strong>Blanqueamientos excesivos:</strong> Pueden sensibilizar temporalmente</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">Tratamientos Disponibles</h2>
                  
                  <h3 className="text-xl font-medium text-kdent-dark-blue mt-6 mb-3">Tratamientos Caseros</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Pasta dental para dientes sensibles</li>
                    <li>Cepillo de cerdas suaves</li>
                    <li>Enjuague bucal desensibilizante</li>
                    <li>Evitar alimentos muy fríos o calientes</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium text-kdent-dark-blue mt-6 mb-3">Tratamientos Profesionales</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Aplicación de flúor</li>
                    <li>Selladores dentales</li>
                    <li>Resinas compuestas</li>
                    <li>Injertos gingivales (casos severos)</li>
                  </ul>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">💡 Consejos de Prevención</h3>
                    <ul className="list-disc pl-6 text-blue-700 space-y-1">
                      <li>Usa técnica de cepillado suave</li>
                      <li>Espera 30 minutos después de comer antes de cepillarte</li>
                      <li>Limita alimentos y bebidas ácidas</li>
                      <li>Usa protector nocturno si tienes bruxismo</li>
                    </ul>
                  </div>
                  
                  <div className="text-center mt-8">
                    <a 
                      href="https://wa.me/56922556473?text=Hola,%20tengo%20sensibilidad%20dental%20y%20necesito%20una%20consulta" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary inline-block"
                    >
                      Consultar Tratamiento
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </>
    );
  } else if (slug === 'blanqueamiento-dental-casero-vs-profesional') {
    content = (
      <>
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-kdent-light-blue/50 to-white pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <Link to="/blog" className="text-kdent-blue hover:text-kdent-dark-blue transition-colors inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="font-semibold">Volver al Blog</span>
              </Link>
            </div>
            
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-64 md:h-80">
                <img 
                  src="/images/blog-blanqueamiento.webp" 
                  alt="Blanqueamiento dental casero vs profesional" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 text-sm text-kdent-dark-gray/70 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Dr. Equipo KDENT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>8 min de lectura</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-display font-bold text-kdent-dark-blue mb-6">
                  Blanqueamiento Dental Casero vs Profesional
                </h1>
                
                <div className="prose prose-lg max-w-none text-kdent-dark-gray/80">
                  <p className="text-xl mb-8 text-kdent-dark-gray/90">
                    ¿Estás considerando blanquear tus dientes? Te ayudamos a decidir entre blanqueamiento dental casero vs profesional, analizando ventajas, desventajas y resultados.
                  </p>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">Blanqueamiento Dental Casero</h2>
                  
                  <h3 className="text-xl font-medium text-kdent-dark-blue mt-6 mb-3">Ventajas</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Menor costo inicial</li>
                    <li>Comodidad del hogar</li>
                    <li>Control del tiempo de aplicación</li>
                    <li>Variedad de productos disponibles</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium text-kdent-dark-blue mt-6 mb-3">Desventajas</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Resultados limitados y graduales</li>
                    <li>Riesgo de sensibilidad dental</li>
                    <li>Posible daño al esmalte por mal uso</li>
                    <li>Sin supervisión profesional</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">Blanqueamiento Dental Profesional</h2>
                  
                  <h3 className="text-xl font-medium text-kdent-dark-blue mt-6 mb-3">Ventajas</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Resultados rápidos y notables</li>
                    <li>Supervisión profesional</li>
                    <li>Tratamiento personalizado</li>
                    <li>Mayor seguridad y eficacia</li>
                    <li>Protección de encías durante el proceso</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium text-kdent-dark-blue mt-6 mb-3">Desventajas</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Mayor costo</li>
                    <li>Requiere citas en clínica</li>
                    <li>Posible sensibilidad temporal</li>
                  </ul>
                  
                  <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">✅ ¿Cuál Elegir?</h3>
                    <p className="text-green-700">
                      Para resultados óptimos y seguros, el blanqueamiento profesional es la mejor opción. Si buscas mantenimiento o mejoras graduales, los productos caseros pueden complementar el tratamiento profesional.
                    </p>
                  </div>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">Cuidados Post-Blanqueamiento</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Evitar alimentos y bebidas que manchan por 48 horas</li>
                    <li>Usar pasta dental para dientes sensibles</li>
                    <li>Mantener excelente higiene oral</li>
                    <li>Programar controles regulares</li>
                  </ul>
                  
                  <div className="text-center mt-8">
                    <a 
                      href="https://wa.me/56922556473?text=Hola,%20quiero%20información%20sobre%20blanqueamiento%20dental%20profesional" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary inline-block"
                    >
                      Consultar Blanqueamiento
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </>
    );
  } else if (slug === 'alimentos-que-manchan-los-dientes') {
    content = (
      <>
        <div className="bg-gradient-to-b from-kdent-light-blue/50 to-white pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <Link to="/blog" className="text-kdent-blue hover:text-kdent-dark-blue transition-colors inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="font-semibold">Volver al Blog</span>
              </Link>
            </div>
            
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-64 md:h-80">
                <img src="/images/blog-alimentos manchan dientes.webp" alt="Alimentos que manchan los dientes" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 text-sm text-kdent-dark-gray/70 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Dr. Equipo KDENT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>5 min de lectura</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-display font-bold text-kdent-dark-blue mb-6">
                  Alimentos que Manchan los Dientes: Guía Completa
                </h1>
                
                <div className="prose prose-lg max-w-none text-kdent-dark-gray/80">
                  <p className="text-xl mb-8 text-kdent-dark-gray/90">
                    Conoce qué alimentos que manchan los dientes debes evitar o consumir con moderación para mantener una sonrisa blanca y radiante.
                  </p>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">Principales Alimentos que Manchan</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Café:</strong> Los taninos causan manchas amarillentas</li>
                    <li><strong>Té negro:</strong> Más manchador que el café</li>
                    <li><strong>Vino tinto:</strong> Pigmentos intensos que penetran el esmalte</li>
                    <li><strong>Bebidas colá:</strong> Colorantes artificiales y ácidos</li>
                    <li><strong>Frutos rojos:</strong> Arándanos, moras, cerezas</li>
                    <li><strong>Salsa de tomate:</strong> Acidez y pigmentos rojos</li>
                    <li><strong>Curry y cúrcuma:</strong> Especias con pigmentos intensos</li>
                  </ul>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">💡 Consejos de Prevención</h3>
                    <ul className="list-disc pl-6 text-yellow-700 space-y-1">
                      <li>Usa pajita para bebidas manchadoras</li>
                      <li>Enjuágate la boca con agua después de consumirlos</li>
                      <li>Espera 30-60 minutos antes de cepillarte</li>
                      <li>Consume con moderación</li>
                    </ul>
                  </div>
                  
                  <div className="text-center mt-8">
                    <a href="https://wa.me/56922556473?text=Hola,%20quiero%20información%20sobre%20blanqueamiento%20dental" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
                      Consultar Blanqueamiento
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </>
    );
  } else if (slug === 'cuidados-despues-extraccion-dental') {
    content = (
      <>
        <div className="bg-gradient-to-b from-kdent-light-blue/50 to-white pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <Link to="/blog" className="text-kdent-blue hover:text-kdent-dark-blue transition-colors inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="font-semibold">Volver al Blog</span>
              </Link>
            </div>
            
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-64 md:h-80">
                <img src="/images/blog-cuidados post extraccion.webp" alt="Cuidados después de una extracción dental" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 text-sm text-kdent-dark-gray/70 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Dr. Equipo KDENT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>6 min de lectura</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-display font-bold text-kdent-dark-blue mb-6">
                  Cuidados Después de una Extracción Dental
                </h1>
                
                <div className="prose prose-lg max-w-none text-kdent-dark-gray/80">
                  <p className="text-xl mb-8 text-kdent-dark-gray/90">
                    Los cuidados después de una extracción dental son fundamentales para una recuperación exitosa. Sigue estas recomendaciones para evitar complicaciones.
                  </p>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">Primeras 24 Horas</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Mantén la gasa por 30-45 minutos</li>
                    <li>Aplica hielo 15 minutos cada hora</li>
                    <li>Evita enjuagarse vigorosamente</li>
                    <li>No fumes ni uses pajitas</li>
                    <li>Consume alimentos blandos y fríos</li>
                  </ul>
                  
                  <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
                    <h3 className="text-lg font-semibold text-red-800 mb-2">⚠️ Qué NO Hacer</h3>
                    <ul className="list-disc pl-6 text-red-700 space-y-1">
                      <li>No escupir con fuerza</li>
                      <li>No tocar la herida con la lengua</li>
                      <li>Evitar ejercicio intenso</li>
                      <li>No consumir alcohol</li>
                    </ul>
                  </div>
                  
                  <div className="text-center mt-8">
                    <a href="https://wa.me/56922556473?text=Hola,%20tengo%20dudas%20sobre%20mi%20extracción%20dental" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
                      Consultar Dudas
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </>
    );
  } else if (slug === 'como-elegir-buen-dentista-concepcion') {
    content = (
      <>
        <div className="bg-gradient-to-b from-kdent-light-blue/50 to-white pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <Link to="/blog" className="text-kdent-blue hover:text-kdent-dark-blue transition-colors inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="font-semibold">Volver al Blog</span>
              </Link>
            </div>
            
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-64 md:h-80">
                <img src="/images/blog-elegir un dentista.webp" alt="Cómo elegir un buen dentista en Concepción" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 text-sm text-kdent-dark-gray/70 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Dr. Equipo KDENT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>7 min de lectura</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-display font-bold text-kdent-dark-blue mb-6">
                  Cómo Elegir un Buen Dentista en Concepción
                </h1>
                
                <div className="prose prose-lg max-w-none text-kdent-dark-gray/80">
                  <p className="text-xl mb-8 text-kdent-dark-gray/90">
                    Elegir el dentista correcto es fundamental para tu salud oral. Te compartimos los criterios clave para tomar la mejor decisión en Concepción.
                  </p>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">Criterios Fundamentales</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Formación y certificaciones:</strong> Verifica títulos y especialidades</li>
                    <li><strong>Experiencia comprobable:</strong> Años de práctica y casos exitosos</li>
                    <li><strong>Tecnología moderna:</strong> Equipos actualizados y técnicas avanzadas</li>
                    <li><strong>Instalaciones higiénicas:</strong> Protocolos de esterilización rigurosos</li>
                    <li><strong>Atención personalizada:</strong> Tiempo dedicado a cada paciente</li>
                  </ul>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">✅ Preguntas Clave</h3>
                    <ul className="list-disc pl-6 text-blue-700 space-y-1">
                      <li>¿Qué especialidades maneja?</li>
                      <li>¿Ofrece planes de tratamiento detallados?</li>
                      <li>¿Cuenta con tecnología digital?</li>
                      <li>¿Qué opciones de pago tiene?</li>
                    </ul>
                  </div>
                  
                  <div className="text-center mt-8">
                    <a href="https://wa.me/56922556473?text=Hola,%20quiero%20agendar%20una%20consulta%20de%20evaluación" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
                      Agendar Consulta
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </>
    );
  } else if (slug === 'miedo-al-dentista-como-superarlo') {
    content = (
      <>
        <div className="bg-gradient-to-b from-kdent-light-blue/50 to-white pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <Link to="/blog" className="text-kdent-blue hover:text-kdent-dark-blue transition-colors inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="font-semibold">Volver al Blog</span>
              </Link>
            </div>
            
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-64 md:h-80">
                <img src="/images/blog-miedo dentista.webp" alt="Miedo al dentista: cómo superarlo" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 text-sm text-kdent-dark-gray/70 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Dr. Equipo KDENT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>6 min de lectura</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-display font-bold text-kdent-dark-blue mb-6">
                  Miedo al Dentista: Cómo Superarlo
                </h1>
                
                <div className="prose prose-lg max-w-none text-kdent-dark-gray/80">
                  <p className="text-xl mb-8 text-kdent-dark-gray/90">
                    El miedo al dentista es más común de lo que piensas. Descubre estrategias efectivas para superar la ansiedad dental y cuidar tu salud oral.
                  </p>
                  
                  <h2 className="text-2xl font-semibold text-kdent-dark-blue mt-8 mb-4">Técnicas de Relajación</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Respiración profunda:</strong> Inhala 4 segundos, mantén 4, exhala 6</li>
                    <li><strong>Relajación muscular:</strong> Tensa y relaja grupos musculares</li>
                    <li><strong>Visualización positiva:</strong> Imagina una experiencia exitosa</li>
                    <li><strong>Música relajante:</strong> Usa auriculares durante el tratamiento</li>
                  </ul>
                  
                  <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">💚 Consejos Prácticos</h3>
                    <ul className="list-disc pl-6 text-green-700 space-y-1">
                      <li>Programa citas en horarios relajados</li>
                      <li>Comunica tus miedos al dentista</li>
                      <li>Lleva acompañante si es necesario</li>
                      <li>Practica técnicas de relajación en casa</li>
                    </ul>
                  </div>
                  
                  <div className="text-center mt-8">
                    <a href="https://wa.me/56922556473?text=Hola,%20tengo%20ansiedad%20dental%20y%20necesito%20ayuda" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
                      Hablar con Especialista
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </>
    );
  } else {
    // Página de índice del blog
    content = (
      <>
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-kdent-light-blue/50 to-white pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-kdent-dark-blue mb-6">
                Blog de Salud Dental
              </h1>
              <p className="text-xl text-kdent-dark-gray/80 max-w-3xl mx-auto">
                Consejos, tratamientos y todo lo que necesitas saber sobre salud bucal de la mano de nuestros especialistas en Concepción.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Artículo 1 */}
              <Link to="/blog/como-aliviar-dolor-de-muela" className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img 
                    src="/images/blog-dolor muelas.webp" 
                    alt="Cómo aliviar el dolor de muela" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-kdent-dark-blue mb-3">
                    Cómo Aliviar el Dolor de Muela
                  </h3>
                  <p className="text-kdent-dark-gray/80 mb-4">
                    Descubre qué hacer ante una urgencia dental y cómo aliviar el dolor mientras buscas atención profesional.
                  </p>
                  <div className="flex items-center text-sm text-kdent-dark-gray/70">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>5 min de lectura</span>
                  </div>
                </div>
              </Link>
              
              {/* Artículo 2 */}
              <Link to="/blog/tipos-de-ortodoncia" className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img 
                    src="/images/blog-ortodoncia.webp" 
                    alt="Tipos de ortodoncia" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-kdent-dark-blue mb-3">
                    Tipos de Ortodoncia: Guía Completa
                  </h3>
                  <p className="text-kdent-dark-gray/80 mb-4">
                    Conoce todos los tipos de ortodoncia disponibles y cómo elegir el tratamiento ideal para tu caso.
                  </p>
                  <div className="flex items-center text-sm text-kdent-dark-gray/70">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>8 min de lectura</span>
                  </div>
                </div>
              </Link>
              
              {/* Artículo 3 */}
              <Link to="/blog/importancia-limpieza-dental" className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img 
                    src="/images/blog-cepillado.webp" 
                    alt="Importancia de la limpieza dental" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-kdent-dark-blue mb-3">
                    Importancia de la Limpieza Dental
                  </h3>
                  <p className="text-kdent-dark-gray/80 mb-4">
                    Descubre por qué la limpieza dental profesional es fundamental para tu salud bucal y cómo previene problemas graves.
                  </p>
                  <div className="flex items-center text-sm text-kdent-dark-gray/70">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>6 min de lectura</span>
                  </div>
                </div>
              </Link>
              
              {/* Artículo 4 */}
              <Link to="/blog/odontopediatria-salud-bucal-ninos" className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img 
                    src="/images/blog-pediatria.webp" 
                    alt="Odontopediatría y salud bucal en niños" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-kdent-dark-blue mb-3">
                    Odontopediatría: Salud Bucal en Niños
                  </h3>
                  <p className="text-kdent-dark-gray/80 mb-4">
                    Guía completa sobre el cuidado dental infantil y cuándo llevar a tu hijo al dentista por primera vez.
                  </p>
                  <div className="flex items-center text-sm text-kdent-dark-gray/70">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>7 min de lectura</span>
                  </div>
                </div>
              </Link>
              
              {/* Artículo 5 */}
              <Link to="/blog/bruxismo-tratamiento-concepcion" className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img 
                    src="/images/blog-bruxismo.webp" 
                    alt="Bruxismo tratamiento Concepción" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-kdent-dark-blue mb-3">
                    Bruxismo: Tratamiento y Soluciones
                  </h3>
                  <p className="text-kdent-dark-gray/80 mb-4">
                    Conoce los síntomas del bruxismo y las soluciones efectivas para proteger tus dientes del rechinar nocturno.
                  </p>
                  <div className="flex items-center text-sm text-kdent-dark-gray/70">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>6 min de lectura</span>
                  </div>
                </div>
              </Link>
              
              {/* Artículo 6: Periodoncia */}
              <Link to="/blog/periodoncia-sintomas-periodontitis" className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img 
                    src="/images/blog-periodoncia.webp" 
                    alt="Periodoncia Concepción" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-kdent-dark-blue mb-3">
                    Periodoncia: Cuidado de las Encías
                  </h3>
                  <p className="text-kdent-dark-gray/80 mb-4">
                    Conoce los síntomas de la periodontitis y cómo mantener unas encías saludables con el cuidado adecuado.
                  </p>
                  <div className="flex items-center text-sm text-kdent-dark-gray/70">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>7 min de lectura</span>
                  </div>
                </div>
              </Link>
              
              {/* Artículo 7: Sensibilidad Dental */}
              <Link to="/blog/sensibilidad-dental-causas-tratamiento" className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img 
                    src="/images/blog-sensibilidad.webp" 
                    alt="Sensibilidad dental" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-kdent-dark-blue mb-3">
                    Sensibilidad Dental: Causas y Tratamiento
                  </h3>
                  <p className="text-kdent-dark-gray/80 mb-4">
                    Descubre qué causa la sensibilidad dental y los tratamientos más efectivos para aliviar el dolor.
                  </p>
                  <div className="flex items-center text-sm text-kdent-dark-gray/70">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>6 min de lectura</span>
                  </div>
                </div>
              </Link>
              
              {/* Artículo 8: Blanqueamiento Dental */}
              <Link to="/blog/blanqueamiento-dental-casero-vs-profesional" className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img 
                    src="/images/blog-blanqueamiento.webp" 
                    alt="Blanqueamiento dental" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-kdent-dark-blue mb-3">
                    Blanqueamiento Dental: Casero vs Profesional
                  </h3>
                  <p className="text-kdent-dark-gray/80 mb-4">
                    Comparamos las opciones de blanqueamiento dental para ayudarte a elegir la mejor alternativa.
                  </p>
                  <div className="flex items-center text-sm text-kdent-dark-gray/70">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>8 min de lectura</span>
                  </div>
                </div>
              </Link>
              
              {/* Artículo 9: Alimentos que Manchan */}
              <Link to="/blog/alimentos-que-manchan-los-dientes" className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img 
                    src="/images/blog-alimentos manchan dientes.webp" 
                    alt="Alimentos que manchan los dientes" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-kdent-dark-blue mb-3">
                    Alimentos que Manchan los Dientes
                  </h3>
                  <p className="text-kdent-dark-gray/80 mb-4">
                    Conoce qué alimentos evitar o consumir con moderación para mantener una sonrisa blanca y radiante.
                  </p>
                  <div className="flex items-center text-sm text-kdent-dark-gray/70">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>5 min de lectura</span>
                  </div>
                </div>
              </Link>
              
              {/* Artículo 10: Cuidados Post-Extracción */}
              <Link to="/blog/cuidados-despues-extraccion-dental" className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img 
                    src="/images/blog-cuidados post extraccion.webp" 
                    alt="Cuidados después de extracción dental" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-kdent-dark-blue mb-3">
                    Cuidados Después de una Extracción
                  </h3>
                  <p className="text-kdent-dark-gray/80 mb-4">
                    Guía completa de cuidados post-extracción para una recuperación exitosa y sin complicaciones.
                  </p>
                  <div className="flex items-center text-sm text-kdent-dark-gray/70">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>6 min de lectura</span>
                  </div>
                </div>
              </Link>
              
              {/* Artículo 11: Cómo Elegir Dentista */}
              <Link to="/blog/como-elegir-buen-dentista-concepcion" className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img 
                    src="/images/blog-elegir un dentista.webp" 
                    alt="Cómo elegir un buen dentista" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-kdent-dark-blue mb-3">
                    Cómo Elegir un Buen Dentista
                  </h3>
                  <p className="text-kdent-dark-gray/80 mb-4">
                    Criterios fundamentales para elegir el dentista correcto y tomar la mejor decisión para tu salud oral.
                  </p>
                  <div className="flex items-center text-sm text-kdent-dark-gray/70">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>7 min de lectura</span>
                  </div>
                </div>
              </Link>
              
              {/* Artículo 12: Miedo al Dentista */}
              <Link to="/blog/miedo-al-dentista-como-superarlo" className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img 
                    src="/images/blog-miedo dentista.webp" 
                    alt="Miedo al dentista" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-kdent-dark-blue mb-3">
                    Miedo al Dentista: Cómo Superarlo
                  </h3>
                  <p className="text-kdent-dark-gray/80 mb-4">
                    Estrategias efectivas para superar la ansiedad dental y cuidar tu salud oral sin miedos.
                  </p>
                  <div className="flex items-center text-sm text-kdent-dark-gray/70">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>6 min de lectura</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {content}
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPage;
