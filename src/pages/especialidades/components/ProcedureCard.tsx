import React from 'react';
import { Check } from 'lucide-react';

interface ProcedureCardProps {
  procedures: string[];
  title?: string;
}

const ProcedureCard: React.FC<ProcedureCardProps> = ({ 
  procedures, 
  title = "Procedimientos" 
}) => {
  return (
    <div>
      <h3 className="text-xl font-display font-medium text-kdent-dark-blue mt-10 mb-4">
        {title}
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {procedures.map((procedure, index) => (
          <li key={index} className="flex items-center">
            <div className="w-6 h-6 mr-3 rounded-full bg-kdent-blue/10 flex items-center justify-center">
              <Check className="w-4 h-4 text-kdent-blue" />
            </div>
            <span>{procedure}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProcedureCard;
