import React from 'react';
import { Link } from 'react-router-dom';
const Especialidades = () => {
  return <div className="section-container" id="especialidades">
      <div className="animate-fade-in">
        <h2 className="section-title">Nuestras Especialidades</h2>
        <p className="section-description">
          Ofrecemos una amplia gama de servicios odontológicos y de estética facial para cuidar tu salud y tu imagen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Urgencias */}
        <Link to="/especialidades/urgencias" className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in" style={{
        animationDelay: '0s'
      }}>
          <div className="h-40 overflow-hidden">
            <img alt="Urgencias en Clínica KDENT Concepción" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" src="/images/urgencias.webp" />
          </div>
          <div className="absolute top-0 left-0 w-1 h-full bg-kdent-blue transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
          <div className="p-6 space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-red-50 text-red-600 border-red-100 border text-xl">
              🚑
            </div>
            
            <h3 className="text-xl font-display font-medium text-kdent-dark-blue group-hover:text-kdent-blue transition-colors">
              Urgencias
            </h3>
            
            <p className="text-gray-600">Atención inmediata para emergencias dentales como dolor agudo, infecciones o fracturas.</p>
            
            <div className="pt-2">
              <span className="text-kdent-blue font-medium inline-flex items-center">
                Ver más
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </Link>
        {/* Estética Facial */}
        <Link to="/especialidades/estetica-facial" className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in" style={{
        animationDelay: '0s'
      }}>
          <div className="h-40 overflow-hidden">
            <img alt="Estética Facial en Clínica KDENT Concepción" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" src="/images/estetica-facial-2.webp" />
          </div>
          <div className="absolute top-0 left-0 w-1 h-full bg-kdent-blue transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
          <div className="p-6 space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600 border-blue-100 border text-xl">
              ✨
            </div>
            
            <h3 className="text-xl font-display font-medium text-kdent-dark-blue group-hover:text-kdent-blue transition-colors">
              Estética Facial
            </h3>
            
            <p className="text-gray-600">
              Tratamientos no invasivos que realzan tu belleza natural y rejuvenecen tu rostro.
            </p>
            
            <div className="pt-2">
              <span className="text-kdent-blue font-medium inline-flex items-center">
                Ver más
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </Link>

        {/* Endodoncia */}
        <Link to="/especialidades/endodoncia" className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in" style={{
        animationDelay: '0.1s'
      }}>
          <div className="h-40 overflow-hidden">
            <img alt="Endodoncia en Clínica KDENT Concepción" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" src="/images/endodoncia-2.webp" />
          </div>
          <div className="absolute top-0 left-0 w-1 h-full bg-kdent-blue transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
          <div className="p-6 space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-50 text-purple-600 border-purple-100 border text-xl">
              🦷
            </div>
            
            <h3 className="text-xl font-display font-medium text-kdent-dark-blue group-hover:text-kdent-blue transition-colors">
              Endodoncia
            </h3>
            
            <p className="text-gray-600">
              Especialistas en tratamientos de conducto para eliminar el dolor y salvar tus dientes naturales.
            </p>
            
            <div className="pt-2">
              <span className="text-kdent-blue font-medium inline-flex items-center">
                Ver más
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </Link>

        {/* Rehabilitación Oral */}
        <Link to="/especialidades/rehabilitacion-oral" className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in" style={{
        animationDelay: '0.2s'
      }}>
          <div className="h-40 overflow-hidden">
            <img alt="Rehabilitación Oral en Clínica KDENT Concepción" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" src="/images/rehabilitacion-oral-2.webp" />
          </div>
          <div className="absolute top-0 left-0 w-1 h-full bg-kdent-blue transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
          <div className="p-6 space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-red-50 text-red-600 border-red-100 border text-xl">
              👄
            </div>
            
            <h3 className="text-xl font-display font-medium text-kdent-dark-blue group-hover:text-kdent-blue transition-colors">
              Rehabilitación Oral
            </h3>
            
            <p className="text-gray-600">
              Restauramos la función y estética de tu boca con las más avanzadas técnicas.
            </p>
            
            <div className="pt-2">
              <span className="text-kdent-blue font-medium inline-flex items-center">
                Ver más
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </Link>

        {/* Implantología */}
        <Link to="/especialidades/implantologia" className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in" style={{
        animationDelay: '0.3s'
      }}>
          <div className="h-40 overflow-hidden">
            <img alt="Implantología en Clínica KDENT Concepción" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" src="/images/implantologia-2.webp" />
          </div>
          <div className="absolute top-0 left-0 w-1 h-full bg-kdent-blue transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
          <div className="p-6 space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-50 text-green-600 border-green-100 border text-xl">
              🔬
            </div>
            
            <h3 className="text-xl font-display font-medium text-kdent-dark-blue group-hover:text-kdent-blue transition-colors">
              Implantología
            </h3>
            
            <p className="text-gray-600">
              Implantes dentales de titanio que lucen y funcionan como dientes naturales.
            </p>
            
            <div className="pt-2">
              <span className="text-kdent-blue font-medium inline-flex items-center">
                Ver más
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </Link>

        {/* Estética Dental */}
        <Link to="/especialidades/estetica-dental" className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in" style={{
        animationDelay: '0.4s'
      }}>
          <div className="h-40 overflow-hidden">
            <img alt="Estética Dental en Clínica KDENT Concepción" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" src="/images/estetica-dental-2.webp" />
          </div>
          <div className="absolute top-0 left-0 w-1 h-full bg-kdent-blue transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
          <div className="p-6 space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-amber-50 text-amber-600 border-amber-100 border text-xl">
              😁
            </div>
            
            <h3 className="text-xl font-display font-medium text-kdent-dark-blue group-hover:text-kdent-blue transition-colors">
              Estética Dental
            </h3>
            
            <p className="text-gray-600">
              Transforma tu sonrisa con carillas, blanqueamientos y otros tratamientos estéticos.
            </p>
            
            <div className="pt-2">
              <span className="text-kdent-blue font-medium inline-flex items-center">
                Ver más
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>;
};
export default Especialidades;