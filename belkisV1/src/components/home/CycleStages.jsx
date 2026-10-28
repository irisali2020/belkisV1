import React from 'react';
import { cycleStages } from '../../data/homeData';
import { StageCard } from './StageCard';
import { Link } from 'react-router-dom';

export const CycleStages = () => {
  return (
    <section id="etapas-grupales" className="py-5" style={{ backgroundColor: '#fff9fa' }}>
      <div className="container py-4">
        
        {/* Encabezado de la sección */}
        <div className="text-center mb-5">
          <span className="badge-rose px-3 py-2 mb-2">
            <i className="bi bi-diagram-3-fill text-rose"></i>
            Fundamento Teórico-Práctico
          </span>
          <h2 className="display-6 fw-bold text-dark mt-2 mb-3">
            Las 4 etapas del ciclo de vida grupal
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '640px', fontSize: '1.1rem' }}>
            Un grupo es un conjunto de individuos cuyas relaciones mutuas los hacen interdependientes en algún grado significativo.
            ¿Cuándo pasamos de un grupo a una comunidad?
            
          </p>
        </div>

        {/* Grilla de las 4 tarjetas de fases */}
        <div className="row g-4 mb-5">
          {cycleStages.map((stage) => (
            <StageCard key={stage.id} stage={stage} />
          ))}
        </div>

        {/* Banner interior explicativo */}
        <div 
          className="p-4 p-md-5 rounded-4 shadow-sm"
          style={{ 
            background: 'linear-gradient(135deg, #ffffff 0%, #fde8ee 100%)',
            border: '1px solid var(--rose-border)'
          }}
        >
          <div className="row align-items-center g-4">
            <div className="col-12 col-md-8">
              <h3 className="h4 fw-bold text-dark mb-2">
                ¿No estás seguro de en qué fase se encuentra tu grupo o comunidad?
              </h3>
              <p className="text-muted mb-0 small">
                A través de un diagnóstico de clima y madurez colectiva podemos mapear las dinámicas de poder, 
                los niveles de confianza y los retos específicos de tu equipo para diseñar el acompañamiento ideal.
              </p>
            </div>
            <div className="col-12 col-md-4 text-md-end">
              <Link to="/servicios" className="btn btn-rose px-4 py-2">
                <span>Conocer Diagnóstico Grupal</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CycleStages;