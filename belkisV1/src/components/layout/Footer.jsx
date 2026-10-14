import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-top mt-auto" style={{ backgroundColor: '#fff7f9', borderColor: 'var(--border-light)' }}>
      <div className="container py-5">
        <div className="row g-4 justify-content-between">
          
          {/* Columna 1: Marca y Propósito */}
          <div className="col-12 col-md-5">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div 
                className="d-flex align-items-center justify-content-center rounded-circle text-white shadow-sm"
                style={{ 
                  width: '38px', 
                  height: '38px', 
                  background: 'linear-gradient(135deg, #d94f70 0%, #b02f52 100%)',
                  fontSize: '1rem'
                }}
              >
                🌸
              </div>
              <span className="fw-bold fs-4 text-dark">Belkis</span>
            </div>
            <p className="text-muted small mb-3" style={{ maxWidth: '380px' }}>
              Espacio de psicología aplicada y facilitación comunitaria. 
              Acompañamos a grupos y líderes en cada etapa de su evolución para tejer vínculos seguros, reflexivos y colaborativos.
            </p>
            <div className="d-flex gap-3">
              <a href="#instagram" className="btn btn-sm btn-outline-rose rounded-circle p-2 d-inline-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }} title="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#linkedin" className="btn btn-sm btn-outline-rose rounded-circle p-2 d-inline-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }} title="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-rose rounded-circle p-2 d-inline-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }} title="WhatsApp">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div className="col-6 col-md-3">
            <h6 className="fw-bold text-dark mb-3">Navegación</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2 mb-0">
              <li>
                <Link to="/" className="text-decoration-none text-muted hover-rose">
                  <i className="bi bi-chevron-right text-rose me-1 small"></i> Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-decoration-none text-muted hover-rose">
                  <i className="bi bi-chevron-right text-rose me-1 small"></i> Servicios Psicológicos
                </Link>
              </li>
              <li>
                <Link to="/talleres" className="text-decoration-none text-muted hover-rose">
                  <i className="bi bi-chevron-right text-rose me-1 small"></i> Talleres & Encuentros
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-decoration-none text-muted hover-rose">
                  <i className="bi bi-chevron-right text-rose me-1 small"></i> Blog & Reflexiones
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-decoration-none text-muted hover-rose">
                  <i className="bi bi-chevron-right text-rose me-1 small"></i> Contacto Directo
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Las 4 Fases Fundamentales */}
          <div className="col-6 col-md-4">
            <h6 className="fw-bold text-dark mb-3">Etapas Grupales</h6>
            <div className="d-flex flex-column gap-2 small">
              <div className="d-flex align-items-center gap-2">
                <span className="badge-rose" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>01</span>
                <span className="text-muted">Génesis & Acogida</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span className="badge-rose" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>02</span>
                <span className="text-muted">Ajuste & Cohesión</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span className="badge-rose" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>03</span>
                <span className="text-muted">Acción & Desempeño</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span className="badge-rose" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>04</span>
                <span className="text-muted">Cierre & Renovación</span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-top" style={{ borderColor: 'var(--border-light)' }}>
              <p className="text-muted small mb-0">
                <i className="bi bi-envelope-heart text-rose me-1"></i> contacto@belkiscomunidad.com
              </p>
            </div>
          </div>

        </div>

        <div className="border-top mt-4 pt-4 text-center text-muted small" style={{ borderColor: 'var(--border-light)' }}>
          <p className="mb-0">
            © {new Date().getFullYear()} Belkis • Psicología & Hacer Comunidad. Construyendo grupos vivos y conscientes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
