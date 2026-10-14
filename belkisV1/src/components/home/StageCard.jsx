import React from 'react';
import { Link } from 'react-router-dom';

export const StageCard = ({ stage }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3 d-flex">
      <div 
        className="card-belkis w-100 p-4 d-flex flex-column position-relative"
        style={{
          borderTop: `4px solid ${stage.colorAccent}`,
          background: 'linear-gradient(180deg, #ffffff 0%, #fffcfd 100%)'
        }}
      >
        {/* Cabecera de la tarjeta */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span 
            className="fw-extrabold fs-3"
            style={{ color: stage.colorAccent, letterSpacing: '-0.03em' }}
          >
            {stage.number}
          </span>
          <span 
            className="badge rounded-pill small px-3 py-1"
            style={{ 
              backgroundColor: stage.colorBg, 
              color: stage.colorAccent,
              border: `1px solid ${stage.colorAccent}33`
            }}
          >
            <i className={`bi ${stage.icon} me-1`}></i>
            {stage.etiqueta}
          </span>
        </div>

        {/* Título y subtítulo */}
        <h3 className="h5 fw-bold text-dark mb-1">{stage.title}</h3>
        <p className="small text-muted mb-3 fw-medium">{stage.subtitle}</p>
        
        {/* Desafío psicológico */}
        <div className="p-3 rounded-3 mb-3" style={{ backgroundColor: stage.colorBg }}>
          <p className="small fw-bold mb-1" style={{ color: stage.colorAccent, fontSize: '0.8rem' }}>
            <i className="bi bi-exclamation-circle me-1"></i> EL DESAFÍO:
          </p>
          <p className="small text-dark mb-0" style={{ lineHeight: '1.45' }}>
            {stage.challenge}
          </p>
        </div>

        {/* Enfoque de facilitación */}
        <div className="mb-4">
          <p className="small fw-bold text-muted mb-1" style={{ fontSize: '0.8rem' }}>
            <i className="bi bi-lightbulb me-1 text-rose"></i> ENFOQUE CLAVE:
          </p>
          <p className="small text-secondary mb-0" style={{ lineHeight: '1.45' }}>
            {stage.solution}
          </p>
        </div>

        {/* Enlace al taller correspondiente */}
        <div className="mt-auto pt-3 border-top" style={{ borderColor: 'var(--border-light)' }}>
          <Link 
            to={`/talleres?fase=${stage.id}`} 
            className="small fw-semibold text-decoration-none d-flex align-items-center justify-content-between"
            style={{ color: stage.colorAccent }}
          >
            <span>Ver talleres de esta etapa</span>
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StageCard;