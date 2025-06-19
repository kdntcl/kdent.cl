
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Promociones from '../components/Promociones';
import Especialidades from '../components/Especialidades';
import Testimonios from '../components/Testimonios';
import FAQ from '../components/FAQ';
import SobreNosotros from '../components/SobreNosotros';
import Ubicacion from '../components/Ubicacion';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Get the element with the id specified in the hash
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      
      // If the element exists, scroll to it with smooth behavior
      if (element) {
        // Small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Promociones />
      <Especialidades />
      <Testimonios />
      <SobreNosotros />
      <Ubicacion />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
