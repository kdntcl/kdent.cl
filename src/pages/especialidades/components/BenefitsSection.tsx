import React from 'react';
import { Check } from 'lucide-react';

interface BenefitsSectionProps {
  benefits: string[];
  title?: string;
  ctaConfig?: {
    title: string;
    subtitle: string;
    whatsappUrl: string;
    whatsappText: string;
    phoneText: string;
    footerText: string;
  };
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ 
  benefits, 
  title = "Beneficios", 
  ctaConfig 
}) => {
  return (
    <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-xl font-display font-medium text-kdent-dark-blue mb-6">
          {title}
        </h3>
        <ul className="space-y-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <div className="w-6 h-6 mr-3 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              {benefit}
            </li>
          ))}
        </ul>
        
        {/* CTA integrado dentro de la misma caja de beneficios */}
        {ctaConfig && (
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-teal-50 border-2 border-blue-200 rounded-lg p-6">
            <h4 className="font-display font-bold text-blue-700 mb-3 text-lg">{ctaConfig.title}</h4>
            <p className="text-sm text-blue-600 mb-4 font-medium">
              {ctaConfig.subtitle}
            </p>
            <div className="space-y-3">
              <a 
                href={ctaConfig.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-lg flex justify-center items-center transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {ctaConfig.whatsappText}
              </a>
              <a 
                href="tel:+56922556473" 
                className="w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg flex justify-center items-center transition-all duration-300"
              >
                {ctaConfig.phoneText}
              </a>
            </div>
            <p className="text-xs text-blue-500 text-center mt-2 font-medium">{ctaConfig.footerText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BenefitsSection;
