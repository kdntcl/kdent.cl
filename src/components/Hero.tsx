
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
                Clínica KDENT<br />Odontología y Estética Facial en Concepción
              </h1>
              <p className="mt-6 text-xl text-kdent-dark-gray/80 max-w-lg">
                En Clínica KDENT Concepción combinamos tecnología avanzada y atención personalizada para transformar tu salud dental y estética facial. Somos la clínica dental especializada que buscas en Concepción.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/56922556473" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Agenda tu cita
              </a>
              <a href="#especialidades" onClick={scrollToEspecialidades} className="btn-secondary flex items-center gap-2">
                <span>Explora nuestros tratamientos</span>
                <ArrowRight size={18} />
              </a>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <img src="https://img.freepik.com/free-photo/portrait-happy-female-dental-patient-sitting-dentist-chair_1262-4575.jpg?t=st=1744119399~exp=1744122999~hmac=d38aa2ccb25ac97ac68e3a54a6f9b38577f61aacf95cff61cc7bf3ca9cc1bbca&w=740" alt="Paciente satisfecho en Clínica KDENT Concepción" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <img src="https://img.freepik.com/free-photo/portrait-young-handsome-bearded-man-standing-outdoors-city-street-smiling_1258-149732.jpg?t=st=1744119489~exp=1744123089~hmac=2b1f63ad5bd7e9eb65f7ce56b6df1c04a7ae1bbd35f71d8347b6e5e9c4b02e93&w=740" alt="Paciente de odontología en Concepción" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <img src="https://img.freepik.com/free-photo/beautiful-brunette-latin-woman-with-vivid-makeup-smiling_176420-7366.jpg?t=st=1744119534~exp=1744123134~hmac=3de11ebd5a1b5f0dbeb0ac87b55e37b76d77eee3a33db7e1c83c27b90e2b9f0a&w=740" alt="Tratamiento de estética facial en Clínica KDENT" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <img src="https://img.freepik.com/free-photo/portrait-pretty-cheerful-girl-with-curly-hair_176420-226.jpg?t=st=1744119575~exp=1744123175~hmac=aecfb1e4d16b0764c77d3ae93faf25c95b0b3c30f71d2edeb87c99a51b6dbb4c&w=740" alt="Paciente de odontología estética en Concepción" className="w-full h-full object-cover" />
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
                src="https://img.freepik.com/free-photo/group-business-executives-forming-huddle_1170-1719.jpg?t=st=1742863492~exp=1742867092~hmac=2d9297c28d02c3d16d21eacc6a7a198abec6d90ef78f78902c93b10d7f6cd648&w=740"
                loading="eager"
                fetchPriority="high"
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
