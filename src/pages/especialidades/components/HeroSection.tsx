import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  imageSrc: string;
  imageAlt: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  buttonText,
  buttonUrl,
  imageSrc,
  imageAlt
}) => {
  return (
    <div className="bg-gradient-to-b from-kdent-light-blue/50 to-white pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <Link 
            to="/#especialidades" 
            className="text-kdent-blue hover:text-kdent-dark-blue transition-colors inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="font-semibold text-2xl">Todas las especialidades</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-kdent-dark-blue mb-6">
              {title}
            </h1>
            <p className="text-xl text-kdent-dark-gray/80 mb-8">
              {description}
            </p>
            <a 
              href={buttonUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              {buttonText}
            </a>
          </div>
          <div 
            className="relative h-80 md:h-[400px] animate-fade-in" 
            style={{ animationDelay: '0.2s' }}
          >
            <div className="absolute inset-0 bg-kdent-light-blue/30 rounded-2xl -rotate-2 transform"></div>
            <div className="relative h-full overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover" 
                loading="lazy" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
