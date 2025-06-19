import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
const EspecialidadPage = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  useEffect(() => {
    window.scrollTo(0, 0);
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
                  Urgencias
                </h1>
                <p className="text-xl text-kdent-dark-gray/80 mb-8">Atención inmediata para emergencias dentales como dolor agudo, infecciones o fracturas.</p>
                <a href="https://wa.me/56922556473?text=Hola,%20me%20interesa%20información%20sobre%20los%20tratamientos%20de%20Urgencias" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Solicitar información
                </a>
              </div>
              <div className="relative h-80 md:h-[400px] animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                <div className="absolute inset-0 bg-kdent-light-blue/30 rounded-2xl -rotate-2 transform"></div>
                <div className="relative h-full overflow-hidden rounded-2xl shadow-xl">
                  <img src="/lovable-uploads/7dac6877-e1c4-4a24-add9-771da91fa8d9.png" alt="Tratamiento de Urgencias en Clínica KDENT Concepción" className="w-full h-full object-cover" loading="lazy" />
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
                <div className="mt-8 bg-kdent-light-blue/40 rounded-lg p-5">
                  <h4 className="font-display font-medium text-kdent-dark-blue mb-3">¿Tienes dudas sobre este tratamiento?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Contáctanos y te brindaremos toda la información que necesitas sin compromiso.
                  </p>
                  <a href="https://wa.me/56922556473?text=Hola,%20me%20interesa%20información%20sobre%20los%20tratamientos%20de%20Urgencias" target="_blank" rel="noopener noreferrer" className="w-full btn-primary flex justify-center items-center">
                    Contactar por WhatsApp
                  </a>
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
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-kdent-dark-blue mb-6">Estética Facial</h1>
                <p className="text-xl text-kdent-dark-gray/80 mb-8">
                  Tratamientos no invasivos que realzan tu belleza natural y rejuvenecen tu rostro.
                </p>
                <a href="https://wa.me/56922556473?text=Hola,%20me%20interesa%20información%20sobre%20los%20tratamientos%20de%20Estética%20Facial" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Solicitar información
                </a>
              </div>
              <div className="relative h-80 md:h-[400px] animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                <div className="absolute inset-0 bg-kdent-light-blue/30 rounded-2xl -rotate-2 transform"></div>
                <div className="relative h-full overflow-hidden rounded-2xl shadow-xl">
                  <img alt="Tratamiento de Estética Facial en Clínica KDENT Concepción" className="w-full h-full object-cover" loading="lazy" src="/lovable-uploads/17094830-28ed-42b5-83ad-b1c4451096f3.jpg" />
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
                <div className="mt-8 bg-kdent-light-blue/40 rounded-lg p-5">
                  <h4 className="font-display font-medium text-kdent-dark-blue mb-3">¿Tienes dudas sobre este tratamiento?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Contáctanos y te brindaremos toda la información que necesitas sin compromiso.
                  </p>
                  <a href="https://wa.me/56922556473?text=Hola,%20me%20interesa%20información%20sobre%20los%20tratamientos%20de%20Estética%20Facial" target="_blank" rel="noopener noreferrer" className="w-full btn-primary flex justify-center items-center">
                    Contactar por WhatsApp
                  </a>
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
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-kdent-dark-blue mb-6">Endodoncia</h1>
                <p className="text-xl text-kdent-dark-gray/80 mb-8">
                  Especialistas en tratamientos de conducto para eliminar el dolor y salvar tus dientes naturales.
                </p>
                <a href="https://wa.me/56922556473?text=Hola,%20me%20interesa%20información%20sobre%20los%20tratamientos%20de%20Endodoncia" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Solicitar información
                </a>
              </div>
              <div className="relative h-80 md:h-[400px] animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                <div className="absolute inset-0 bg-kdent-light-blue/30 rounded-2xl -rotate-2 transform"></div>
                <div className="relative h-full overflow-hidden rounded-2xl shadow-xl">
                  <img alt="Tratamiento de Endodoncia en Clínica KDENT Concepción" className="w-full h-full object-cover" loading="lazy" src="/lovable-uploads/ccd64cdf-e74e-4fc3-8607-0a5896b90564.jpg" />
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
                <div className="mt-8 bg-kdent-light-blue/40 rounded-lg p-5">
                  <h4 className="font-display font-medium text-kdent-dark-blue mb-3">¿Tienes dudas sobre este tratamiento?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Contáctanos y te brindaremos toda la información que necesitas sin compromiso.
                  </p>
                  <a href="https://wa.me/56922556473?text=Hola,%20me%20interesa%20información%20sobre%20los%20tratamientos%20de%20Endodoncia" target="_blank" rel="noopener noreferrer" className="w-full btn-primary flex justify-center items-center">
                    Contactar por WhatsApp
                  </a>
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
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-kdent-dark-blue mb-6">Rehabilitación Oral</h1>
                <p className="text-xl text-kdent-dark-gray/80 mb-8">
                  Restauramos la función y estética de tu boca con las más avanzadas técnicas.
                </p>
                <a href="https://wa.me/56922556473?text=Hola,%20me%20interesa%20información%20sobre%20los%20tratamientos%20de%20Rehabilitación%20Oral" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Solicitar información
                </a>
              </div>
              <div className="relative h-80 md:h-[400px] animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                <div className="absolute inset-0 bg-kdent-light-blue/30 rounded-2xl -rotate-2 transform"></div>
                <div className="relative h-full overflow-hidden rounded-2xl shadow-xl">
                  <img alt="Tratamiento de Rehabilitación Oral en Clínica KDENT Concepción" className="w-full h-full object-cover" loading="lazy" src="/lovable-uploads/c743bb70-767e-430f-9c90-c90d4bdf80c7.jpg" />
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
                <div className="mt-8 bg-kdent-light-blue/40 rounded-lg p-5">
                  <h4 className="font-display font-medium text-kdent-dark-blue mb-3">¿Tienes dudas sobre este tratamiento?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Contáctanos y te brindaremos toda la información que necesitas sin compromiso.
                  </p>
                  <a href="https://wa.me/56922556473?text=Hola,%20me%20interesa%20información%20sobre%20los%20tratamientos%20de%20Rehabilitación%20Oral" target="_blank" rel="noopener noreferrer" className="w-full btn-primary flex justify-center items-center">
                    Contactar por WhatsApp
                  </a>
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
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-kdent-dark-blue mb-6">Implantología</h1>
                <p className="text-xl text-kdent-dark-gray/80 mb-8">
                  Implantes dentales de titanio que lucen y funcionan como dientes naturales.
                </p>
                <a href="https://wa.me/56922556473?text=Hola,%20me%20interesa%20información%20sobre%20los%20tratamientos%20de%20Implantología" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Solicitar información
                </a>
              </div>
              <div className="relative h-80 md:h-[400px] animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                <div className="absolute inset-0 bg-kdent-light-blue/30 rounded-2xl -rotate-2 transform"></div>
                <div className="relative h-full overflow-hidden rounded-2xl shadow-xl">
                  <img alt="Tratamiento de Implantología en Clínica KDENT Concepción" className="w-full h-full object-cover" loading="lazy" src="/lovable-uploads/c2b8c1a0-ac33-4897-8f38-ad2b4af18c9b.jpg" />
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
                <div className="mt-8 bg-kdent-light-blue/40 rounded-lg p-5">
                  <h4 className="font-display font-medium text-kdent-dark-blue mb-3">¿Tienes dudas sobre este tratamiento?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Contáctanos y te brindaremos toda la información que necesitas sin compromiso.
                  </p>
                  <a href="https://wa.me/56922556473?text=Hola,%20me%20interesa%20información%20sobre%20los%20tratamientos%20de%20Implantología" target="_blank" rel="noopener noreferrer" className="w-full btn-primary flex justify-center items-center">
                    Contactar por WhatsApp
                  </a>
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
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-kdent-dark-blue mb-6">Estética Dental</h1>
                <p className="text-xl text-kdent-dark-gray/80 mb-8">
                  Transforma tu sonrisa con carillas, blanqueamientos y otros tratamientos estéticos.
                </p>
                <a href="https://wa.me/56922556473?text=Hola,%20me%20interesa%20información%20sobre%20los%20tratamientos%20de%20Estética%20Dental" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Solicitar información
                </a>
              </div>
              <div className="relative h-80 md:h-[400px] animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                <div className="absolute inset-0 bg-kdent-light-blue/30 rounded-2xl -rotate-2 transform"></div>
                <div className="relative h-full overflow-hidden rounded-2xl shadow-xl">
                  <img alt="Tratamiento de Estética Dental en Clínica KDENT Concepción" className="w-full h-full object-cover" loading="lazy" src="/lovable-uploads/e3c82b14-ceae-4082-8fcc-4a5d610f0393.jpg" />
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
                <div className="mt-8 bg-kdent-light-blue/40 rounded-lg p-5">
                  <h4 className="font-display font-medium text-kdent-dark-blue mb-3">¿Tienes dudas sobre este tratamiento?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Contáctanos y te brindaremos toda la información que necesitas sin compromiso.
                  </p>
                  <a href="https://wa.me/56922556473?text=Hola,%20me%20interesa%20información%20sobre%20los%20tratamientos%20de%20Estética%20Dental" target="_blank" rel="noopener noreferrer" className="w-full btn-primary flex justify-center items-center">
                    Contactar por WhatsApp
                  </a>
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