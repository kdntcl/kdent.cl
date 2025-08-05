import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Ubicacion from '../components/Ubicacion';
const UbicacionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>
      <Navbar />
      <div className="pt-20">
        <div className="bg-gradient-to-b from-kdent-light-blue/50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-kdent-dark-blue mb-6">
                Clínica Dental Cerca de Ti en Concepción
              </h1>
              <p className="text-xl text-kdent-dark-gray/80 max-w-3xl mx-auto">
                Dirección Clínica KDENT Concepción: O'Higgins 630, Oficina 403. Ubicados en el centro de Concepción para brindarte fácil acceso a la mejor atención dental de la región.
              </p>
            </div>
          </div>
        </div>
        
        <Ubicacion />
        
        <div className="section-container py-16">
          <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-sm border border-gray-100 animate-fade-in">
            <h2 className="text-2xl font-display font-semibold text-kdent-dark-blue mb-6 text-center">
              ¿Cómo llegar a Clínica KDENT en Concepción?
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-kdent-dark-blue mb-2">En transporte público:</h3>
                <ul className="list-disc pl-5 space-y-2 text-kdent-dark-gray/80">
                  <li>Paraderos de micros en O'Higgins y San Martin a una cuadra de la clínica
                </li>
                  <li>Varias líneas de transporte público con parada en la zona</li>
                  <li>Fácil acceso desde cualquier punto de Concepción</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-kdent-dark-blue mb-2">En vehículo privado:</h3>
                <ul className="list-disc pl-5 space-y-2 text-kdent-dark-gray/80">
                  <li>Parking público a 100 metros de la clínica dental</li>
                  <li>Zona de estacionamiento regulado en las calles adyacentes</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-kdent-dark-blue mb-2">Accesibilidad:</h3>
                <p className="text-kdent-dark-gray/80">
                  Nuestra clínica dental en Concepción está adaptada para personas con movilidad reducida, con acceso sin escalones y aseos adaptados.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a href="https://wa.me/56922556473" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Agenda tu cita en Clínica KDENT
              </a>
            </div>
          </div>
          
          {/* Sección adicional de localización SEO */}
          <div className="max-w-4xl mx-auto mt-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-kdent-light-blue/20 rounded-2xl p-8">
              <h2 className="text-3xl font-display font-semibold text-kdent-dark-blue mb-6 text-center">
                ¿Buscas una Clínica Dental Cerca de Ti?
              </h2>
              <p className="text-lg text-kdent-dark-gray/80 text-center mb-8">
                Clínica KDENT es tu clínica dental cerca de ti en Concepción. Nuestra dirección Clínica KDENT Concepción 
                en O'Higgins 630, Oficina 403, nos posiciona estratégicamente en el centro de la ciudad para ofrecerte 
                la mejor atención dental con fácil acceso desde cualquier punto de Concepción y sus alrededores.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-kdent-blue text-4xl mb-4">📍</div>
                  <h3 className="text-xl font-semibold text-kdent-dark-blue mb-3">
                    Ubicación Estratégica
                  </h3>
                  <p className="text-kdent-dark-gray/80">
                    En pleno centro de Concepción, con fácil acceso en transporte público y privado. 
                    Tu clínica dental cerca de ti.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-kdent-blue text-4xl mb-4">🚌</div>
                  <h3 className="text-xl font-semibold text-kdent-dark-blue mb-3">
                    Fácil Acceso
                  </h3>
                  <p className="text-kdent-dark-gray/80">
                    Paraderos de micro a una cuadra, estacionamiento disponible y acceso 
                    adaptado para personas con movilidad reducida.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-lg font-medium text-kdent-dark-blue mb-4">
                  Dirección Clínica KDENT Concepción:
                </p>
                <p className="text-xl text-kdent-dark-gray/80 font-semibold">
                  O'Higgins 630, Oficina 403, Concepción
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <WhatsAppButton />
      <Footer />
    </>;
};
export default UbicacionPage;