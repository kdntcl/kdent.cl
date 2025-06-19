
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  return <footer className="bg-white text-gray-800 py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Clinic Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-kdent-dark-blue">Clínica KDENT</h3>
            <p className="mb-4 text-sm">
              Somos especialistas en odontología y estética facial en Concepción, comprometidos con tu salud y belleza. Utilizamos tecnología de vanguardia para garantizar los mejores resultados.
            </p>
            <div className="space-y-2 text-sm">
              <p>O'Higgins 630, Oficina 403</p>
              <p>Concepción, Chile</p>
              <p>Teléfono: +569 2255 6473</p>
              <p>Email: contacto@kdnt.cl</p>
            </div>
            <div className="mt-4">
              <a href="https://wa.me/56922556473?text=Hola%2C%20quiero%20agendar%20una%20hora%20en%20Cl%C3%ADnica%20KDENT" target="_blank" rel="noopener noreferrer" className="inline-flex">
                <Button variant="outline" className="rounded-md border-kdent-blue text-kdent-blue hover:bg-kdent-light-blue hover:text-kdent-dark-blue">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </a>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/profile.php?id=61568989310413" target="_blank" rel="noopener noreferrer" className="text-kdent-blue hover:text-kdent-dark-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/kdent.clinica/" target="_blank" rel="noopener noreferrer" className="text-kdent-blue hover:text-kdent-dark-blue transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Especialidades - Static and manually editable list with links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-kdent-dark-blue">Especialidades</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/especialidades/urgencias" className="hover:text-kdent-blue transition-colors">
                  Urgencias
                </Link>
              </li>
              <li>
                <Link to="/especialidades/estetica-facial" className="hover:text-kdent-blue transition-colors">
                  Estética Facial
                </Link>
              </li>
              <li>
                <Link to="/especialidades/endodoncia" className="hover:text-kdent-blue transition-colors">
                  Endodoncia
                </Link>
              </li>
              <li>
                <Link to="/especialidades/rehabilitacion-oral" className="hover:text-kdent-blue transition-colors">
                  Rehabilitación Oral
                </Link>
              </li>
              <li>
                <Link to="/especialidades/implantologia" className="hover:text-kdent-blue transition-colors">
                  Implantología
                </Link>
              </li>
              <li>
                <Link to="/especialidades/estetica-dental" className="hover:text-kdent-blue transition-colors">
                  Estética Dental
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Quick Links - Static and manually editable */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-kdent-dark-blue">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-kdent-blue transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="hover:text-kdent-blue transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/ubicacion" className="hover:text-kdent-blue transition-colors">
                  Ubicación
                </Link>
              </li>
              <li>
                <Link to="/politica-de-privacidad" className="hover:text-kdent-blue transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/terminos-y-condiciones" className="hover:text-kdent-blue transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Clínica KDENT. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>;
};

export default Footer;
