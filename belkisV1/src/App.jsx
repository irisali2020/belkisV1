import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes de Layout global
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Páginas de la SPA solicitadas por el usuario
import { Home } from './pages/Home/Home';
import { Servicios } from './pages/Servicios/Servicios';
import { Talleres } from './pages/Talleres/Talleres';
import { Blog } from './pages/Blog/Blog';
import { Contacto } from './pages/Contacto/Contacto';

function App() {
  return (
    <BrowserRouter>
      {/* 1. Navbar persistente en todas las vistas con navegación a Inicio, Servicios, Talleres, Blog, Contacto */}
      <Navbar />

      {/* 2. Contenedor de vistas SPA */}
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/talleres" element={<Talleres />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
          
          {/* Ruta fallback hacia Inicio */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>

      {/* 3. Footer global */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;