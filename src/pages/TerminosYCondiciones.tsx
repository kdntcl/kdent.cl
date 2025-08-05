
import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const TerminosYCondiciones = () => {
  // Scroll to top on page load
  React.useEffect(() => {
    window.scrollTo(0, 0);
    
    // Meta tags SEO para Términos y Condiciones
    document.title = 'Términos y Condiciones | Clínica KDENT Concepción';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Términos y condiciones de uso de Clínica KDENT Concepción. Conoce nuestras políticas de servicio y atención dental.');
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://kdnt.cl/terminos-y-condiciones');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-blue lg:prose-lg max-w-none">
            <h1 className="text-3xl md:text-4xl font-semibold text-kdent-dark-blue mb-6">TÉRMINOS Y CONDICIONES DE USO</h1>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kdent-dark-blue">1. Titular del sitio</h2>
              <p>Dental KD SpA (nombre de fantasía <strong>Clínica KDENT</strong>)<br />
              RUT 77.994.327-5<br />
              Domicilio: O'Higgins 630 Of. 403, Concepción, Chile<br />
              E-mail: contacto@kdnt.cl | Tel./WhatsApp: +56 9 2255 6473</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kdent-dark-blue">2. Objeto</h2>
              <p>Regulan el acceso y uso de <strong>www.kdnt.cl</strong> y de los servicios de reserva, información de tratamientos y comunicación vía chat/WhatsApp.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kdent-dark-blue">3. Uso correcto del sitio</h2>
              <p>El usuario se compromete a emplear el contenido de forma lícita; queda prohibido enviar spam, difamar o vulnerar derechos de terceros. El contenido tiene fines informativos y <strong>no sustituye la evaluación presencial por un profesional de la salud</strong>.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kdent-dark-blue">4. Propiedad intelectual</h2>
              <p>Textos, imágenes y marcas son propiedad de Dental KD SpA o se usan con licencia. Queda prohibida su reproducción sin autorización.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kdent-dark-blue">5. Reservas y cancelaciones</h2>
              <p>La reserva se confirma por escrito. Cancelaciones con ≥ 24 h de anticipación: sin costo; cancelaciones posteriores: cargo del 30 % (Reglamento de Comercio Electrónico, art. 16).</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kdent-dark-blue">6. Precios y promociones</h2>
              <p>Precios en pesos chilenos (CLP) e incluyen impuestos. Las promociones publicadas son válidas hasta la fecha indicada o agotar stock.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kdent-dark-blue">7. Responsabilidad médica</h2>
              <p>Los resultados varían según cada paciente; no garantizamos resultados idénticos. Todos los procedimientos se realizan bajo la normativa sanitaria vigente.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kdent-dark-blue">8. Enlaces externos</h2>
              <p>KDENT no se hace responsable del contenido de sitios enlazados; el acceso es responsabilidad del usuario.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kdent-dark-blue">9. Legislación y jurisdicción</h2>
              <p>Se aplican las leyes de la República de Chile; cualquier controversia se someterá a los tribunales de Concepción.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kdent-dark-blue">10. Contacto</h2>
              <p>Para dudas sobre estas condiciones: contacto@kdnt.cl o +56 9 2255 6473.</p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TerminosYCondiciones;
