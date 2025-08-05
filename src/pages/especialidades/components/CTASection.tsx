import React from 'react';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonUrl: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  whatsappMessage?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonUrl,
  secondaryButtonText,
  secondaryButtonUrl,
  whatsappMessage
}) => {
  const whatsappUrl = whatsappMessage 
    ? `https://wa.me/56922556473?text=${encodeURIComponent(whatsappMessage)}`
    : "https://wa.me/56922556473";

  return (
    <div className="bg-gradient-to-r from-kdent-blue to-kdent-dark-blue py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary bg-white text-kdent-blue hover:bg-gray-50"
          >
            {primaryButtonText}
          </a>
          {secondaryButtonText && secondaryButtonUrl && (
            <a 
              href={secondaryButtonUrl}
              className="btn-outline border-white text-white hover:bg-white hover:text-kdent-blue"
            >
              {secondaryButtonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CTASection;
