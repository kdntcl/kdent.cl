
import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const PoliticaDePrivacidad = () => {
  // Scroll to top on page load
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-blue lg:prose-lg max-w-none">
            <h1 className="text-3xl md:text-4xl font-semibold text-kdent-dark-blue mb-4">POLÍTICA DE PRIVACIDAD</h1>
            <p className="text-gray-600 mb-8">Última actualización: 04/05/2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kdent-dark-blue">1. Responsable</h2>
              <p><strong>Clínica KDENT</strong>, operada por Dental KD SpA (RUT 77.994.327-5), domicilio en O'Higgins 630, oficina 403, Concepción, Chile.<br />
              Contacto: contacto@kdnt.cl | Tel./WhatsApp +56 9 2255 6473.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kdent-dark-blue">2. Datos que recopilamos</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Identificación y contacto (nombre, RUT, teléfono, correo) obtenidos en formularios de reserva o contacto.</li>
                <li>Historial clínico y fotografías cuando se contrata un tratamiento.</li>
                <li>Datos de navegación (IP, dispositivo, páginas visitadas) a través de cookies (ver § 6).</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kdent-dark-blue">3. Finalidades y bases jurídicas</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 my-4">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-50">Finalidad</th>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-50">Base legal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Gestionar solicitudes y reservas</td>
                      <td className="border border-gray-300 px-4 py-2">Consentimiento (art. 4 Ley 19.628)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Prestación de servicios odontológicos/estéticos</td>
                      <td className="border border-gray-300 px-4 py-2">Ejecución de contrato</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Recordatorios y comunicaciones comerciales propias</td>
                      <td className="border border-gray-300 px-4 py-2">Interés legítimo ponderado¹</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Cumplimiento de obligaciones legales (SII, MINSAL)</td>
                      <td className="border border-gray-300 px-4 py-2">Obligación legal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm mt-2">¹ Según Orientación 4/2017 del Consejo para la Transparencia.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kdent-dark-blue">4. Destinatarios</h2>
              <p>SII (emisión de boletas), organismos sanitarios ante fiscalización, proveedores de hosting en 🇨🇱/🇺🇸 con cláusulas de confidencialidad. No cedemos datos a terceros para fines publicitarios.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kdent-dark-blue">5. Plazos de conservación</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Fichas clínicas: 10 años desde la última atención (Decreto 41/2012).</li>
                <li>Datos de contacto: hasta que se solicite supresión o tras 5 años de inactividad.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kdent-dark-blue">6. Cookies</h2>
              <p>Usamos cookies propias y de terceros (Google Analytics, Meta Pixel). Antes de instalarlas mostramos un banner que permite <strong>Aceptar</strong> o <strong>Rechazar</strong> su uso, conforme a la Directiva ePrivacy/GDPR. Puedes gestionar tu preferencia en /configurar-cookies.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kdent-dark-blue">7. Derechos ARCO</h2>
              <p>Para acceder, rectificar, cancelar u oponerte al tratamiento escribe a contacto@kdnt.cl adjuntando copia de tu cédula. Respondemos en ≤ 2 días hábiles.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kdent-dark-blue">8. Seguridad</h2>
              <p>Implementamos cifrado TLS 1.3, doble factor de autenticación y copias de seguridad diarias; las conversaciones de WhatsApp están cifradas de extremo a extremo.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kdent-dark-blue">9. Cambios</h2>
              <p>Cualquier modificación se publicará en esta misma URL con la fecha de actualización.</p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PoliticaDePrivacidad;
