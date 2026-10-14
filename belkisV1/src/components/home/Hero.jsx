import React from 'react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="bg-rose-gradient-hero py-5 position-relative overflow-hidden">
      {/* Círculos decorativos de fondo */}
      <div 
        className="position-absolute rounded-circle opacity-25"
        style={{
          width: '320px',
          height: '320px',
          background: 'radial-gradient(circle, #f8c9d6 0%, rgba(255,255,255,0) 70%)',
          top: '-60px',
          right: '-60px',
          zIndex: 0
        }}
      ></div>
      <div 
        className="position-absolute rounded-circle opacity-25"
        style={{
          width: '240px',
          height: '240px',
          background: 'radial-gradient(circle, #fde8ee 0%, rgba(255,255,255,0) 70%)',
          bottom: '10px',
          left: '-40px',
          zIndex: 0
        }}
      ></div>

      <div className="container py-4 position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center g-5">
          
          <div className="col-12 col-lg-7 text-center text-lg-start">
            <div className="d-inline-flex align-items-center gap-2 badge-rose px-3 py-2 mb-3">
              <i className="bi bi-heart-pulse-fill text-rose"></i>
              <span>Psicología Grupal & Facilitación Consciente</span>
            </div>

            <h1 className="display-4 fw-bold text-dark mb-3 lh-sm" style={{ letterSpacing: '-0.03em' }}>
              Hacer comunidad es un <span className="text-rose font-serif fst-italic">proceso vivo</span>, no una casualidad.
            </h1>

            <p className="lead text-muted mb-4" style={{ fontSize: '1.2rem', lineHeight: '1.7' }}>
              Acompañamos a líderes, facilitadores y equipos a comprender la dinámica psicológica 
              de cada etapa de sus grupos. Transforma la incertidumbre y las tensiones en vínculos sólidos, 
              colaboración fluida y proyectos sostenibles.
            </p>

            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-4">
              <a href="#etapas-grupales" className="btn btn-rose px-4 py-3">
                <i className="bi bi-compass"></i>
                <span>Explorar las 4 Etapas</span>
              </a>
              <Link to="/talleres" className="btn btn-outline-rose px-4 py-3">
                <i className="bi bi-mortarboard"></i>
                <span>Ver Próximos Talleres</span>
              </Link>
            </div>

            {/* Puntos destacados breves */}
            <div className="d-flex flex-wrap gap-4 pt-3 border-top justify-content-center justify-content-lg-start" style={{ borderColor: 'var(--border-light)' }}>
              <div className="d-flex align-items-center gap-2 small text-muted">
                <i className="bi bi-check-circle-fill text-rose fs-6"></i>
                <span>Seguridad psicológica</span>
              </div>
              <div className="d-flex align-items-center gap-2 small text-muted">
                <i className="bi bi-check-circle-fill text-rose fs-6"></i>
                <span>Mediación de conflictos</span>
              </div>
              <div className="d-flex align-items-center gap-2 small text-muted">
                <i className="bi bi-check-circle-fill text-rose fs-6"></i>
                <span>Cuidado colectivo</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="position-relative mx-auto" style={{ maxWidth: '440px' }}>
              <div 
                className="card-belkis p-4 p-md-5 text-center position-relative shadow-lg border-0"
                style={{ 
                  background: 'linear-gradient(145deg, #ffffff 0%, #fff7f9 100%)',
                  borderRadius: '2rem',
                  border: '1px solid var(--rose-border)'
                }}
              >
                <div 
                  className="rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3 shadow-sm text-white"
                  style={{ 
                    width: '76px', 
                    height: '76px', 
                    background: 'linear-gradient(135deg, #d94f70 0%, #b02f52 100%)',
                    fontSize: '2rem'
                  }}
                >
                  🌱
                </div>
                <h3 className="h5 fw-bold text-dark mb-2">Fundamento Metodológico</h3>
                <p className="text-muted small mb-4">
                  Todo grupo humano transita por un ciclo orgánico. Conocerlo es la clave para liderar con empatía y efectividad.
                </p>

                <div className="d-flex flex-column gap-2 text-start">
                  <div className="p-2 px-3 rounded-3 bg-white border border-light d-flex align-items-center justify-content-between">
                    <span className="small fw-semibold text-dark">1. Génesis y Acogida</span>
                    <span className="badge bg-rose-soft text-rose small">Nacimiento</span>
                  </div>
                  <div className="p-2 px-3 rounded-3 bg-white border border-light d-flex align-items-center justify-content-between">
                    <span className="small fw-semibold text-dark">2. Ajuste y Cohesión</span>
                    <span className="badge bg-rose-soft text-rose small">Vínculos</span>
                  </div>
                  <div className="p-2 px-3 rounded-3 bg-white border border-light d-flex align-items-center justify-content-between">
                    <span className="small fw-semibold text-dark">3. Acción y Desempeño</span>
                    <span className="badge bg-rose-soft text-rose small">Madurez</span>
                  </div>
                  <div className="p-2 px-3 rounded-3 bg-white border border-light d-flex align-items-center justify-content-between">
                    <span className="small fw-semibold text-dark">4. Cierre o Renovación</span>
                    <span className="badge bg-rose-soft text-rose small">Transición</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-top" style={{ borderColor: 'var(--border-light)' }}>
                  <Link to="/contacto" className="text-rose fw-semibold small text-decoration-none d-flex align-items-center justify-content-center gap-1">
                    <span>Solicitar asesoría para tu comunidad</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;