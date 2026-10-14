import React from 'react';
import { environments } from '../../data/homeData';

export const Environments = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container py-4">
        
        <div className="text-center mb-5">
          <span className="badge-rose px-3 py-2 mb-2">
            <i className="bi bi-geo-alt-fill text-rose"></i>
            Ámbitos de Aplicación
          </span>
          <h2 className="display-6 fw-bold text-dark mt-2 mb-3">
            Espacios donde cobra vida la metodología
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '640px' }}>
            Diseñado para aplicarse en cualquier contexto donde las personas se unan por un propósito compartido, 
            desde startups y ONGs hasta colectivos artísticos y comunidades vecinales.
          </p>
        </div>

        <div className="row g-4">
          {environments.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-3">
              <div 
                className="card-belkis p-4 h-100 d-flex flex-column text-start"
                style={{ border: '1px solid var(--border-light)' }}
              >
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div 
                    className="d-flex align-items-center justify-content-center rounded-3 bg-rose-soft text-rose"
                    style={{ width: '48px', height: '48px', fontSize: '1.4rem' }}
                  >
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <span className="badge bg-light text-muted border small">
                    {item.badge}
                  </span>
                </div>

                <h4 className="h6 fw-bold text-dark mb-2">{item.title}</h4>
                <p className="small text-muted mb-0" style={{ lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Environments;