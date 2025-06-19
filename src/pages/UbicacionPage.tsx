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
              <h1 className="text-4xl md:text-5xl font-display font-bold text-kdent-dark-blue mb-6">Clínica KDENT</h1>
              <p className="text-xl text-kdent-dark-gray/80 max-w-3xl mx-auto">
                Estamos ubicados en O'Higgins 630, Oficina 403, Concepción. Una zona céntrica y de fácil acceso para todos nuestros pacientes.
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
        </div>
      </div>
      
      <WhatsAppButton />
      <Footer />
    </>;
};
export default UbicacionPage;