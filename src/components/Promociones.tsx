import React from 'react';
import { ArrowRight } from 'lucide-react';
const Promociones = () => {
  return <div className="bg-gradient-to-b from-white to-kdent-light-blue/30 py-16" id="promociones">
      <div className="section-container py-10 md:py-16">
        <div className="animate-fade-in">
          <h2 className="section-title">Promociones Especiales en Clínica KDENT</h2>
          <p className="section-description">
            Aprovecha nuestras ofertas limitadas en tratamientos dentales y de estética facial en Concepción. Comienza tu tratamiento con los mejores precios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Botox 3 zonas */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden animate-scale-in" style={{
          animationDelay: '0s'
        }}>
            <div className="h-32 overflow-hidden">
              <img alt="Botox 3 zonas - Promoción en Clínica KDENT Concepción" className="w-full h-full object-cover object-center" loading="lazy" width="400" height="225" src="/lovable-uploads/fe1f13f0-0965-45f1-9f06-d310db3e5eee.png" />
            </div>
            
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-kdent-blue text-white text-xs rounded-full mb-2">Oferta Especial</span>
              <h3 className="font-display font-medium text-xl text-kdent-dark-blue">Aplicación de Botox</h3>
              <p className="text-gray-600 my-4 min-h-[72px]">Tratamiento de estética facial en Concepción. Incluye: consulta inicial, aplicación de 1 a 3 zonas, control y seguimiento, retoque si es necesario.</p>
              
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-display font-bold text-kdent-blue">$99.990</span>
                <span className="ml-2 text-gray-500 line-through text-sm">$269.990</span>
                <span className="ml-2 bg-red-100 text-red-700 text-xs px-2 py-1 rounded">-37%</span>
              </div>
              
              <a href="https://wa.me/56922556473" target="_blank" rel="noopener noreferrer" className="w-full btn-primary flex justify-center items-center" aria-label="Reservar aplicación de Botox">
                <span>Reservar</span>
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>

          {/* Mesoterapia con NCTF 135-HA + Higiene oral */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden animate-scale-in" style={{
          animationDelay: '0.1s'
        }}>
            <div className="h-32 overflow-hidden">
              <img alt="Mesoterapia con NCTF 135-HA + Higiene oral - Promoción en Clínica KDENT Concepción" className="w-full h-full object-cover object-center" loading="lazy" width="400" height="225" src="/lovable-uploads/5d9a9415-8fae-4487-ad7d-78513fd37116.jpg" />
            </div>
            
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-kdent-blue text-white text-xs rounded-full mb-2">Oferta Especial</span>
              <h3 className="font-display font-medium text-xl text-kdent-dark-blue">Mesoterapia con NCTF 135-HA + Higiene oral</h3>
              <p className="text-gray-600 my-4 min-h-[72px]">Tratamiento combinado de estética facial y dental. Incluye: consulta inicial, 3 sesiones de NCTF 135-HA, control y seguimiento, más una sesión de higiene oral.</p>
              
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-display font-bold text-kdent-blue">$399.990</span>
                <span className="ml-2 text-gray-500 line-through text-sm">$475.000</span>
                <span className="ml-2 bg-red-100 text-red-700 text-xs px-2 py-1 rounded">
                  -16%
                </span>
              </div>
              
              <a href="https://wa.me/56922556473" target="_blank" rel="noopener noreferrer" className="w-full btn-primary flex justify-center items-center" aria-label="Reservar mesoterapia">
                <span>Reservar</span>
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>

          {/* Higiene dental 3x2 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden animate-scale-in" style={{
          animationDelay: '0.2s'
        }}>
            <div className="h-32 overflow-hidden">
              <img alt="Higiene dental 3x2 - Promoción en Clínica KDENT Concepción" className="w-full h-full object-cover object-center" loading="lazy" width="400" height="225" src="/lovable-uploads/b5ed2762-0b6e-4f5d-8f74-bc26a3b69243.jpg" />
            </div>
            
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-kdent-blue text-white text-xs rounded-full mb-2">Oferta Especial</span>
              <h3 className="font-display font-medium text-xl text-kdent-dark-blue">Higiene dental 3x2</h3>
              <p className="text-gray-600 my-4 min-h-[72px]">Promoción especial en nuestra clínica dental en Concepción. Se atienden 3 pacientes y pagan solo 2 tratamientos. Ideal para familias.</p>
              
              <div className="flex items-baseline mb-4">
                <span className="text-2xl font-display font-bold text-kdent-blue">Promoción especial</span>
              </div>
              
              <a href="https://wa.me/56922556473" target="_blank" rel="noopener noreferrer" className="w-full btn-primary flex justify-center items-center" aria-label="Reservar higiene dental 3x2">
                <span>Reservar</span>
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Promociones;