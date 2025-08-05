
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import SobreNosotros from '../components/SobreNosotros';

const SobreNosotrosPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <div className="bg-gradient-to-b from-kdent-light-blue/50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-kdent-dark-blue mb-6">
                Dentistas KDENT Concepción
              </h1>
              <p className="text-xl text-kdent-dark-gray/80 max-w-3xl mx-auto">
                Conoce a nuestro equipo de especialistas en odontología y estética facial en Concepción. Descubre nuestras especialidades odontológicas KDENT y por qué somos la clínica dental de confianza en la región.
              </p>
            </div>
          </div>
        </div>
        
        <SobreNosotros />
        
        <div className="section-container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-display font-semibold text-kdent-dark-blue mb-6">
                Nuestra Misión
              </h2>
              <p className="text-kdent-dark-gray/80 mb-4">
                En Clínica KDENT, nuestra misión es proporcionar atención odontológica y de estética facial de la más alta calidad, centrada en el paciente, utilizando tecnología avanzada y las técnicas más innovadoras.
              </p>
              <p className="text-kdent-dark-gray/80">
                Nos esforzamos por crear un ambiente cálido y acogedor donde nuestros pacientes se sientan cómodos y seguros, mientras reciben tratamientos personalizados que mejoran su salud bucal, su estética y su calidad de vida.
              </p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-display font-semibold text-kdent-dark-blue mb-6">
                Nuestra Visión
              </h2>
              <p className="text-kdent-dark-gray/80 mb-4">
                Aspiramos a ser reconocidos como la clínica dental y de estética facial de referencia, conocida por su excelencia clínica, atención personalizada y resultados excepcionales.
              </p>
              <p className="text-kdent-dark-gray/80">
                Buscamos transformar vidas a través de sonrisas saludables y hermosas, así como rostros rejuvenecidos, contribuyendo al bienestar y la confianza de nuestros pacientes.
              </p>
            </div>
          </div>
          
          <div className="mt-20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl font-display font-semibold text-kdent-dark-blue mb-6 text-center">
              Nuestros Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                {
                  title: "Excelencia",
                  description: "Nos esforzamos por alcanzar la excelencia en todos los aspectos de nuestro trabajo, desde la atención al paciente hasta los tratamientos clínicos.",
                  icon: "⭐"
                },
                {
                  title: "Integridad",
                  description: "Actuamos con honestidad y transparencia en todas nuestras interacciones, priorizando siempre el bienestar del paciente.",
                  icon: "🤝"
                },
                {
                  title: "Innovación",
                  description: "Nos mantenemos a la vanguardia de los avances tecnológicos y las técnicas más modernas para ofrecer los mejores tratamientos.",
                  icon: "💡"
                },
                {
                  title: "Empatía",
                  description: "Comprendemos las preocupaciones y necesidades de nuestros pacientes, y nos esforzamos por hacer que su experiencia sea lo más cómoda posible.",
                  icon: "❤️"
                },
                {
                  title: "Trabajo en equipo",
                  description: "Colaboramos como un equipo cohesionado para ofrecer una atención integral y coordinada a cada paciente.",
                  icon: "👥"
                },
                {
                  title: "Responsabilidad",
                  description: "Asumimos la responsabilidad de nuestras acciones y decisiones, comprometiéndonos con la salud y satisfacción de nuestros pacientes.",
                  icon: "✅"
                }
              ].map((valor, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-4">{valor.icon}</div>
                  <h3 className="text-xl font-display font-medium text-kdent-dark-blue mb-2">
                    {valor.title}
                  </h3>
                  <p className="text-kdent-dark-gray/80">
                    {valor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Sección de Especialidades Odontológicas KDENT */}
          <div className="mt-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl font-display font-semibold text-kdent-dark-blue mb-6 text-center">
              Especialidades Odontológicas KDENT
            </h2>
            <p className="text-lg text-kdent-dark-gray/80 text-center max-w-4xl mx-auto mb-12">
              Nuestros dentistas KDENT Concepción están especializados en diversas áreas de la odontología moderna, 
              ofreciendo tratamientos integrales con tecnología de vanguardia y atención personalizada.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-kdent-blue text-3xl mb-4">🦾</div>
                <h3 className="text-xl font-semibold text-kdent-dark-blue mb-3">
                  Implantología
                </h3>
                <p className="text-kdent-dark-gray/80">
                  Reemplazo de dientes perdidos con implantes dentales de última generación para restaurar tu sonrisa.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-kdent-blue text-3xl mb-4">✨</div>
                <h3 className="text-xl font-semibold text-kdent-dark-blue mb-3">
                  Estética Dental
                </h3>
                <p className="text-kdent-dark-gray/80">
                  Tratamientos estéticos para mejorar la apariencia de tu sonrisa con carillas, blanqueamiento y más.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-kdent-blue text-3xl mb-4">🦷</div>
                <h3 className="text-xl font-semibold text-kdent-dark-blue mb-3">
                  Endodoncia
                </h3>
                <p className="text-kdent-dark-gray/80">
                  Tratamientos de conducto especializados para salvar dientes dañados y eliminar el dolor.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-kdent-blue text-3xl mb-4">🎆</div>
                <h3 className="text-xl font-semibold text-kdent-dark-blue mb-3">
                  Estética Facial
                </h3>
                <p className="text-kdent-dark-gray/80">
                  Tratamientos faciales no invasivos para rejuvenecer y realzar tu belleza natural.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-kdent-blue text-3xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold text-kdent-dark-blue mb-3">
                  Rehabilitación Oral
                </h3>
                <p className="text-kdent-dark-gray/80">
                  Restauración completa de la función y estética de tu boca con prótesis y coronas.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-kdent-blue text-3xl mb-4">🆘</div>
                <h3 className="text-xl font-semibold text-kdent-dark-blue mb-3">
                  Urgencias Dentales
                </h3>
                <p className="text-kdent-dark-gray/80">
                  Atención inmediata para emergencias dentales, dolor agudo y traumatismos.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg text-kdent-dark-gray/80 mb-6">
                ¿Quieres conocer más sobre nuestras especialidades odontológicas KDENT?
              </p>
              <a 
                href="https://wa.me/56123456789?text=Hola,%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20las%20especialidades%20de%20Cl%C3%ADnica%20KDENT" 
                className="inline-flex items-center px-8 py-3 bg-kdent-blue text-white font-semibold rounded-full hover:bg-kdent-dark-blue transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar Especialidades
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default SobreNosotrosPage;
