import React from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  faqs: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ title, faqs }) => {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-kdent-dark-blue mb-8 text-center">
          {title}
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-kdent-dark-blue mb-3">
                {faq.question}
              </h3>
              <p className="text-kdent-dark-gray/80">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Schema Markup para FAQs */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }} 
      />
    </>
  );
};

export default FAQSection;
