
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToEspecialidades = (e: React.MouseEvent) => {
    e.preventDefault();
    const especialidadesSection = document.getElementById('especialidades');
    if (especialidadesSection) {
      especialidadesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 rounded-full w-[30rem] h-[30rem] bg-kdent-light-blue/50 blur-3xl"></div>
        <div className="absolute left-0 bottom-0 translate-y-1/4 -translate-x-1/4 rounded-full w-[30rem] h-[30rem] bg-kdent-light-blue/30 blur-3xl"></div>
      </div>

      <div className="section-container pt-24 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-kdent-dark-blue leading-tight">
                Clínica Dental en Concepción<br />KDENT - Tu Dentista de Confianza
              </h1>
              <p className="mt-6 text-xl text-kdent-dark-gray/80 max-w-lg">
                Somos la mejor clínica dental en Concepción. Dentistas especializados con tecnología avanzada y atención personalizada. Agenda tu hora con nosotros y descubre por qué somos el dentista bueno y barato que buscas en Concepción.
              </p>
            </div>
            
            {/* CTAs Agresivos */}
            <div className="space-y-6">
              {/* CTA Principal - Optimizado para mobile */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/56922556473?text=Hola%20KDENT,%20quiero%20agendar%20mi%20CONSULTA%20GRATUITA.%20%C2%BFCu%C3%A1ndo%20tienen%20disponibilidad%3F" target="_blank" rel="noopener noreferrer" className="flex-1 bg-kdent-blue hover:bg-kdent-dark-blue text-white text-lg px-8 py-4 font-bold rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center">
                  CONSULTA GRATUITA - Agenda Ahora
                </a>
                <a href="tel:+56922556473" className="flex-1 sm:flex-none bg-kdent-light-blue hover:bg-kdent-blue text-kdent-dark-blue hover:text-white text-lg px-6 py-4 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                  Llamar Ahora
                  <ArrowRight size={20} />
                </a>
              </div>
              
              {/* Beneficios principales - Simplificado */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <div className="bg-kdent-light-blue/20 rounded-lg p-3 text-center">
                  <span className="text-kdent-dark-blue font-semibold">✓ Primera Consulta GRATIS</span>
                </div>
                <div className="bg-kdent-light-blue/20 rounded-lg p-3 text-center">
                  <span className="text-kdent-dark-blue font-semibold">✓ Atención Inmediata</span>
                </div>
                <div className="bg-kdent-light-blue/20 rounded-lg p-3 text-center">
                  <span className="text-kdent-dark-blue font-semibold">✓ Financiamiento Disponible</span>
                </div>
              </div>

              {/* Urgencias Banner - Más legible */}
              <div className="bg-red-50/40 border border-red-200/40 p-3 rounded-lg text-center">
                <p className="text-sm text-red-600">
                  🆘 <span className="font-medium">¿Urgencia Dental?</span> 
                  <a 
                    href="https://wa.me/56922556473?text=URGENCIA%20DENTAL%20-%20Necesito%20atención%20inmediata" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-red-700 hover:text-red-800 underline font-semibold ml-1"
                  >
                    Contáctanos de inmediato
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <img src="/images/avatar-1.webp" alt="Paciente satisfecho en Clínica KDENT Concepción" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <img src="/images/avatar-2.webp" alt="Paciente de odontología en Concepción" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <img src="/images/avatar-3.webp" alt="Tratamiento de estética facial en Clínica KDENT" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <img src="/images/avatar-4.webp" alt="Paciente de odontología estética en Concepción" className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <p className="font-medium text-kdent-dark-blue">+500 pacientes</p>
                <p className="text-sm text-gray-500">Satisfechos en nuestra clínica dental en Concepción</p>
              </div>
            </div>
          </div>
          
          <div className="relative lg:h-[500px] animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            <div className="absolute inset-0 bg-kdent-light-blue/20 rounded-2xl -rotate-3 transform"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl h-full w-full">
              <img 
                alt="Equipo profesional de Clínica KDENT en Concepción - Especialistas en odontología y estética facial" 
                className="w-full h-full object-cover" 
                src="/images/grupo-sonriendo.webp"
                loading="eager"
                fetchpriority="high"
                decoding="async"
              />
            </div>
            
            <div className="absolute -bottom-5 -left-5 glass-panel rounded-lg p-4 shadow-lg animate-float">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-kdent-blue flex items-center justify-center text-white">
                  <span>✓</span>
                </div>
                <div>
                  <p className="font-medium text-sm">Tecnología avanzada</p>
                  <p className="text-xs text-gray-500">Clínica dental moderna en Concepción</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-5 -right-5 glass-panel rounded-lg p-4 shadow-lg animate-float" style={{
              animationDelay: '1s'
            }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-kdent-blue flex items-center justify-center text-white">
                  <span>★</span>
                </div>
                <div>
                  <p className="font-medium text-sm">Especialistas Certificados</p>
                  <p className="text-xs text-gray-500">Odontología profesional en Concepción</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Hero);
