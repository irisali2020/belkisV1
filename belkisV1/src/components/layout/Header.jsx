import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-white border-bottom py-3">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          
          {/* Logo y título */}
          <Link to="/" className="d-flex align-items-center gap-3 text-decoration-none">
            <span 
              className="d-inline-flex align-items-center justify-content-center rounded-3 bg-primary-custom text-white shadow-sm"
              style={{ width: '42px', height: '42px', fontSize: '1.25rem' }}
            >
              ✦
            </span>
            <div>
              <span className="d-block fw-bold fs-4 text-dark lh-1">
                MiProyecto
              </span>
              <small className="text-muted" style={{ fontSize: '0.8rem' }}>
                Comunidades y Aprendizaje
              </small>
            </div>
          </Link>

          {/* Contacto / botón rápido */}
          <div className="d-none d-sm-flex align-items-center gap-2">
            <Link to="/servicios" className="btn btn-sm btn-outline-primary fw-medium px-3">
              Contactar
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};