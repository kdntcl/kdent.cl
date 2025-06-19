
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Use a more performant approach for hydration
const root = document.getElementById("root");

if (root) {
  const startTime = performance.now();
  
  createRoot(root).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  
  // Log performance metrics in development mode
  if (import.meta.env.DEV) {
    const renderTime = performance.now() - startTime;
    console.log(`Initial render completed in ${renderTime.toFixed(2)}ms`);
  }
} else {
  console.error("Root element not found");
}
