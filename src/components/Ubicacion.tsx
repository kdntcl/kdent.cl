import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
const Ubicacion = () => {
  return <div className="section-container" id="ubicacion">
      <div className="animate-fade-in">
        <h2 className="section-title">Clínica KDENT en Concepción</h2>
        <p className="section-description">
          Estamos ubicados en una zona céntrica de fácil acceso en Concepción. Visita nuestra clínica dental y de estética facial hoy mismo.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        <div className="lg:col-span-2 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-[400px] animate-fade-in">
          {/* Google Maps iframe */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3180.7350807722574!2d-73.05051768814673!3d-36.82694377249053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9669b5d46910cd97%3A0x46e8fe641ab6ff6c!2sO&#39;Higgins%20630%2C%20Concepci%C3%B3n%2C%20B%C3%ADo%20B%C3%ADo%2C%20Chile!5e0!3m2!1ses!2sus!4v1744119249647!5m2!1ses!2sus" width="100%" height="100%" style={{
          border: 0
        }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación de Clínica KDENT en O'Higgins 630, Concepción">
          </iframe>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-fade-in" style={{
        animationDelay: '0.2s'
      }}>
          <h3 className="text-xl font-display font-medium text-kdent-dark-blue mb-6">Contacto Clínica KDENT</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-kdent-blue mr-3 mt-0.5" />
              <div>
                <h4 className="font-medium text-gray-900">Dirección</h4>
                <p className="text-gray-600 mt-1">
                  O'Higgins 630, Oficina 403<br />
                  Concepción, Chile
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="w-5 h-5 text-kdent-blue mr-3 mt-0.5" />
              <div>
                <h4 className="font-medium text-gray-900">Teléfono</h4>
                <p className="text-gray-600 mt-1">
                  <a href="tel:+56922556473" className="text-kdent-blue hover:text-kdent-dark-blue hover:underline font-medium">+56 9 2255 6473</a><br />
                  (WhatsApp disponible)
                </p>
                <p className="text-gray-600 mt-1">Email: Contacto@kdnt.cl</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="w-5 h-5 text-kdent-blue mr-3 mt-0.5" />
              <div>
                <h4 className="font-medium text-gray-900">Horario de atención</h4>
                <div className="text-gray-600 mt-1 space-y-1">
                  <p>Lunes a Viernes: 9:00 - 20:00</p>
                  <p>Sábados: 9:00 - 14:00</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <a href="https://wa.me/56922556473" target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">
              Agenda tu cita ahora
            </a>
          </div>
        </div>
      </div>
    </div>;
};
export default Ubicacion;