import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top py-3" style={{ borderColor: 'var(--border-light)' }}>
      <div className="container">
        
        {/* Logo de Marca */}
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2 text-decoration-none" onClick={closeNav}>
          <div 
            className="d-flex align-items-center justify-content-center rounded-circle text-white shadow-sm"
            style={{ 
              width: '44px', 
              height: '44px', 
              background: 'linear-gradient(135deg, #d94f70 0%, #b02f52 100%)',
              fontSize: '1.2rem'
            }}
          >
            🌸
          </div>
          <div>
            <span className="d-block fw-bold fs-4 text-dark lh-1" style={{ letterSpacing: '-0.02em' }}>
              Belkis
            </span>
            <small className="text-muted fw-semibold" style={{ fontSize: '0.75rem', letterSpacing: '0.04em' }}>
              PSICOLOGÍA & COMUNIDAD
            </small>
          </div>
        </Link>

        {/* Botón hamburguesa responsive */}
        <button 
          className="navbar-toggler border-0 shadow-none px-2 py-1" 
          type="button" 
          onClick={toggleNav}
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
          style={{ color: 'var(--rose-primary)' }}
        >
          <i className={`bi ${isNavOpen ? 'bi-x-lg' : 'bi-list'} fs-2`}></i>
        </button>

        {/* Menú de Navegación */}
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''} justify-content-between`}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-1 py-2 py-lg-0">
            <li className="nav-item">
              <NavLink 
                to="/" 
                end
                className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`}
                onClick={closeNav}
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/servicios" 
                className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`}
                onClick={closeNav}
              >
                Servicios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/talleres" 
                className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`}
                onClick={closeNav}
              >
                Talleres
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/blog" 
                className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`}
                onClick={closeNav}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/contacto" 
                className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`}
                onClick={closeNav}
              >
                Contacto
              </NavLink>
            </li>
          </ul>

          {/* Botón CTA derecho */}
          <div className="d-flex align-items-center gap-2 pt-2 pt-lg-0">
            <Link 
              to="/contacto" 
              className="btn btn-rose btn-sm px-3 py-2 w-100 text-center"
              onClick={closeNav}
            >
              <i className="bi bi-calendar-heart"></i>
              <span>Agendar Sesión</span>
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
