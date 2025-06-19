import React, { memo } from 'react';
const SobreNosotros = memo(() => {
  return <div className="section-container" id="sobre-nosotros">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-kdent-dark-blue mb-6">
            Una clínica con experiencia y compromiso
          </h2>
          <div className="space-y-4 text-kdent-dark-gray/80">
            <p>
              En Clínica KDENT nos hemos dedicado durante años a la salud bucodental y la estética facial, combinando tecnología de vanguardia con un equipo de especialistas altamente cualificados.
            </p>
            <p>
              Nuestra filosofía se basa en tres pilares fundamentales: excelencia clínica, atención personalizada y resultados duraderos. Nos esforzamos por que cada paciente reciba un tratamiento adaptado a sus necesidades específicas.
            </p>
            <p>
              Estamos comprometidos con la formación continua y la incorporación de las técnicas más innovadoras para ofrecer los mejores tratamientos disponibles en odontología y estética facial.
            </p>
          </div>
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-display font-bold text-kdent-blue mb-1">+10</div>
              <p className="text-sm text-gray-600">Años de experiencia</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-display font-bold text-kdent-blue mb-1">+5k</div>
              <p className="text-sm text-gray-600">Pacientes atendidos</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-display font-bold text-kdent-blue mb-1">100%</div>
              <p className="text-sm text-gray-600">Compromiso y calidad</p>
            </div>
          </div>
        </div>
        
        <div className="relative animate-fade-in order-1 lg:order-2">
          <div className="absolute inset-0 bg-kdent-light-blue/30 rounded-2xl rotate-3 transform"></div>
          <div className="relative h-80 md:h-[500px] overflow-hidden rounded-2xl shadow-xl">
            <img alt="Pacientes satisfechos en Clínica KDENT" className="w-full h-full object-cover" loading="lazy" src="/lovable-uploads/027c7b13-77f9-445f-af80-97fbe81e7868.jpg" />
          </div>
        </div>
      </div>
    </div>;
});
SobreNosotros.displayName = 'SobreNosotros';
export default SobreNosotros;