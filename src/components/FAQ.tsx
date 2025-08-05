
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="section-container">
      <div className="animate-fade-in">
        <h2 className="section-title">Preguntas frecuentes sobre tratamientos dentales y estéticos</h2>
        <p className="section-description">
          Respuestas a las dudas más comunes sobre nuestros servicios y tratamientos en Clínica KDENT Concepción.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-12 space-y-4">
        {/* Primera pregunta */}
        <div className="border border-gray-200 rounded-lg overflow-hidden animate-fade-in" style={{ animationDelay: '0s' }}>
          <button
            className={`w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none ${
              activeIndex === 0 ? 'bg-kdent-light-blue' : 'bg-white hover:bg-gray-50'
            }`}
            onClick={() => toggleFAQ(0)}
          >
            <span className="font-medium text-kdent-dark-blue">¿Cómo puedo agendar una cita?</span>
            {activeIndex === 0 ? (
              <ChevronUp className="w-5 h-5 text-kdent-blue" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          
          <div 
            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
              activeIndex === 0 ? 'max-h-96 py-4' : 'max-h-0 py-0'
            }`}
          >
            <p className="text-gray-600">Puede agendar una cita llamando a nuestro número de teléfono <a href="tel:+56922556473" className="text-kdent-blue hover:text-kdent-dark-blue hover:underline font-medium">+569 2255 6473</a> o enviando un mensaje de WhatsApp. Nuestro equipo de Clínica KDENT en Concepción le responderá a la brevedad para confirmar su cita.</p>
          </div>
        </div>

        {/* Segunda pregunta */}
        <div className="border border-gray-200 rounded-lg overflow-hidden animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <button
            className={`w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none ${
              activeIndex === 1 ? 'bg-kdent-light-blue' : 'bg-white hover:bg-gray-50'
            }`}
            onClick={() => toggleFAQ(1)}
          >
            <span className="font-medium text-kdent-dark-blue">¿Qué métodos de pago aceptan?</span>
            {activeIndex === 1 ? (
              <ChevronUp className="w-5 h-5 text-kdent-blue" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          
          <div 
            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
              activeIndex === 1 ? 'max-h-96 py-4' : 'max-h-0 py-0'
            }`}
          >
            <p className="text-gray-600">En Clínica KDENT Concepción aceptamos efectivo, tarjetas de crédito/débito, transferencias bancarias y ofrecemos planes de financiamiento para tratamientos de mayor costo.</p>
          </div>
        </div>

        {/* Tercera pregunta */}
        <div className="border border-gray-200 rounded-lg overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <button
            className={`w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none ${
              activeIndex === 2 ? 'bg-kdent-light-blue' : 'bg-white hover:bg-gray-50'
            }`}
            onClick={() => toggleFAQ(2)}
          >
            <span className="font-medium text-kdent-dark-blue">¿Cuánto tiempo dura un blanqueamiento dental?</span>
            {activeIndex === 2 ? (
              <ChevronUp className="w-5 h-5 text-kdent-blue" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          
          <div 
            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
              activeIndex === 2 ? 'max-h-96 py-4' : 'max-h-0 py-0'
            }`}
          >
            <p className="text-gray-600">Los resultados de un blanqueamiento dental en nuestra clínica en Concepción pueden durar entre 1 y 3 años, dependiendo de sus hábitos (consumo de café, té, vino tinto, tabaco) y del cuidado dental diario.</p>
          </div>
        </div>

        {/* Cuarta pregunta */}
        <div className="border border-gray-200 rounded-lg overflow-hidden animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <button
            className={`w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none ${
              activeIndex === 3 ? 'bg-kdent-light-blue' : 'bg-white hover:bg-gray-50'
            }`}
            onClick={() => toggleFAQ(3)}
          >
            <span className="font-medium text-kdent-dark-blue">¿Los implantes dentales son dolorosos?</span>
            {activeIndex === 3 ? (
              <ChevronUp className="w-5 h-5 text-kdent-blue" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          
          <div 
            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
              activeIndex === 3 ? 'max-h-96 py-4' : 'max-h-0 py-0'
            }`}
          >
            <p className="text-gray-600">El procedimiento se realiza con anestesia local, por lo que no sentirá dolor durante la intervención. Después del procedimiento, puede experimentar algunas molestias que se controlan fácilmente con analgésicos. En Clínica KDENT Concepción priorizamos su comodidad en todo momento.</p>
          </div>
        </div>

        {/* Quinta pregunta */}
        <div className="border border-gray-200 rounded-lg overflow-hidden animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <button
            className={`w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none ${
              activeIndex === 4 ? 'bg-kdent-light-blue' : 'bg-white hover:bg-gray-50'
            }`}
            onClick={() => toggleFAQ(4)}
          >
            <span className="font-medium text-kdent-dark-blue">¿Cuál es la diferencia entre las carillas y las coronas dentales?</span>
            {activeIndex === 4 ? (
              <ChevronUp className="w-5 h-5 text-kdent-blue" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          
          <div 
            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
              activeIndex === 4 ? 'max-h-96 py-4' : 'max-h-0 py-0'
            }`}
          >
            <p className="text-gray-600">Las carillas son finas láminas que se adhieren a la parte frontal del diente y se utilizan principalmente con fines estéticos. Las coronas, en cambio, cubren todo el diente y se utilizan cuando hay daño estructural importante. En Clínica KDENT Concepción le asesoramos sobre la mejor opción para su caso específico.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
