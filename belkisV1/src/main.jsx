import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Estilos de Bootstrap y Bootstrap Icons
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Estilos globales de marca y paleta rosa
import './index.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
