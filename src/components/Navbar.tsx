import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
const especialidades = [{
  name: 'Urgencias',
  path: '/especialidades/urgencias'
}, {
  name: 'Estética Facial',
  path: '/especialidades/estetica-facial'
}, {
  name: 'Endodoncia',
  path: '/especialidades/endodoncia'
}, {
  name: 'Rehabilitación Oral',
  path: '/especialidades/rehabilitacion-oral'
}, {
  name: 'Implantología',
  path: '/especialidades/implantologia'
}, {
  name: 'Estética Dental',
  path: '/especialidades/estetica-dental'
}];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);
  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const handleLogoClick = e => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/" onClick={handleLogoClick} className="flex items-center">
              <img alt="Clínica KDENT" className="h-20 object-contain" src="/images/logo-kdent.webp" />
            </a>
            <a href="/" onClick={handleLogoClick} className="ml-3 text-gray-700 hover:text-kdent-blue transition-colors hidden sm:block">
              Clínica KDENT
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button className={`navlink flex items-center gap-1 ${location.pathname.includes('/especialidades') ? 'navlink-active' : ''}`} onClick={toggleDropdown}>
                Especialidades
                {dropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              
              {dropdownOpen && <div className="absolute top-full mt-1 w-64 rounded-lg bg-white shadow-lg border border-gray-100 py-2 z-50 animate-fade-in-fast">
                  {especialidades.map(item => <Link key={item.path} to={item.path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-kdent-light-blue transition-colors">
                      {item.name}
                    </Link>)}
                </div>}
            </div>
            
            <Link to="/sobre-nosotros" className={`navlink ${location.pathname === '/sobre-nosotros' ? 'navlink-active' : ''}`}>
              Sobre Nosotros
            </Link>
            
            <Link to="/ubicacion" className={`navlink ${location.pathname === '/ubicacion' ? 'navlink-active' : ''}`}>
              Ubicación
            </Link>
            
            <a href="https://wa.me/56922556473" target="_blank" rel="noopener noreferrer" className="btn-primary">
              ¡Agenda tu hora!
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-kdent-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-kdent-blue">
              <span className="sr-only">Abrir menú</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && <div className="md:hidden bg-white w-full absolute top-20 left-0 shadow-lg z-50 animate-fade-in-fast">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="px-3 py-2 text-gray-700">
              <a href="/" onClick={handleLogoClick} className="flex items-center">
                Clínica KDENT
              </a>
            </div>
            
            <div>
              <button className={`w-full px-3 py-2 flex items-center justify-between ${location.pathname.includes('/especialidades') ? 'text-kdent-blue font-medium' : 'text-gray-700'}`} onClick={toggleDropdown}>
                <span>Especialidades</span>
                {dropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              
              {dropdownOpen && <div className="pl-6 py-2 space-y-1 border-l-2 border-kdent-light-blue ml-3">
                  {especialidades.map(item => <Link key={item.path} to={item.path} className="block px-3 py-2 text-sm text-gray-700 hover:text-kdent-blue transition-colors">
                      {item.name}
                    </Link>)}
                </div>}
            </div>
            
            <Link to="/sobre-nosotros" className={`block px-3 py-2 ${location.pathname === '/sobre-nosotros' ? 'text-kdent-blue font-medium' : 'text-gray-700'}`}>
              Sobre Nosotros
            </Link>
            
            <Link to="/ubicacion" className={`block px-3 py-2 ${location.pathname === '/ubicacion' ? 'text-kdent-blue font-medium' : 'text-gray-700'}`}>
              Ubicación
            </Link>
            
            <a href="https://wa.me/56922556473" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 bg-kdent-blue text-white rounded-md font-medium mt-4">
              ¡Agenda tu hora!
            </a>
          </div>
        </div>}
    </nav>;
};
export default Navbar;