
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SobreNosotrosPage from "./pages/SobreNosotrosPage";
import UbicacionPage from "./pages/UbicacionPage";
import PoliticaDePrivacidad from "./pages/PoliticaDePrivacidad";
import TerminosYCondiciones from "./pages/TerminosYCondiciones";
import BlogPage from "./pages/BlogPage";
import NotFound from "./pages/NotFound";

// Importar páginas individuales de especialidades
import UrgenciasPage from "./pages/especialidades/UrgenciasPage";
import ImplantologiaPage from "./pages/especialidades/ImplantologiaPage";
import EsteticaDentalPage from "./pages/especialidades/EsteticaDentalPage";
import EndodonciaPage from "./pages/especialidades/EndodonciaPage";
import RehabilitacionOralPage from "./pages/especialidades/RehabilitacionOralPage";
import EsteticaFacialPage from "./pages/especialidades/EsteticaFacialPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        
        {/* Rutas directas para especialidades individuales - URLs SEO optimizadas */}
        <Route path="/urgencias" element={<UrgenciasPage />} />
        <Route path="/implantologia" element={<ImplantologiaPage />} />
        <Route path="/estetica-dental" element={<EsteticaDentalPage />} />
        <Route path="/endodoncia" element={<EndodonciaPage />} />
        <Route path="/rehabilitacion-oral" element={<RehabilitacionOralPage />} />
        <Route path="/estetica-facial" element={<EsteticaFacialPage />} />
        
        <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
        <Route path="/ubicacion" element={<UbicacionPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
        <Route path="/politica-de-privacidad" element={<PoliticaDePrivacidad />} />
        <Route path="/terminos-y-condiciones" element={<TerminosYCondiciones />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
