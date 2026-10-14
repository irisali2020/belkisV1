import React from 'react';
import { Link } from 'react-router-dom';

export const HomeCtaBanner = () => {
  return (
    <section 
      className="py-5 text-white text-center position-relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #9c2548 0%, #b02f52 50%, #d94f70 100%)',
      }}
    >
      {/* Círculo decorativo */}
      <div 
        className="position-absolute rounded-circle opacity-10"
        style={{
          width: '400px',
          height: '400px',
          background: '#ffffff',
          top: '-100px',
          right: '-100px',
        }}
      ></div>

      <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
        <div className="mx-auto" style={{ maxWidth: '680px' }}>
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(4px)' }}>
            <span style={{ fontSize: '1rem' }}>🌸</span>
            <span className="small fw-semibold text-white">Construyamos juntos espacios de cuidado mutuo</span>
          </div>

          <h2 className="display-6 fw-bold mb-3 text-white">
            ¿Coordinas o lideras un grupo actualmente?
          </h2>
          
          <p className="lead opacity-90 mx-auto mb-4" style={{ fontSize: '1.15rem', lineHeight: '1.7' }}>
            No tienes que sostenerlo en soledad. Te ayudamos a diseñar la facilitación adecuada 
            o a acompañar el momento de transición que están atravesando.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link 
              to="/contacto" 
              className="btn btn-light px-4 py-3 fw-bold rounded-pill shadow-sm"
              style={{ color: '#9c2548' }}
            >
              <i className="bi bi-chat-heart-fill me-2"></i>
              Conversemos sobre tu comunidad
            </Link>
            <Link 
              to="/talleres" 
              className="btn btn-outline-light px-4 py-3 fw-semibold rounded-pill"
            >
              <i className="bi bi-calendar3 me-2"></i>
              Explorar agenda de talleres
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCtaBanner;