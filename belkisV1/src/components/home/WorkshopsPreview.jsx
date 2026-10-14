import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTalleres } from '../../services/api';

export const WorkshopsPreview = () => {
  const [talleres, setTalleres] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await fetchTalleres();
      setTalleres(data.slice(0, 2)); // Mostrar los 2 primeros destacados
    }
    load();
  }, []);

  return (
    <section className="py-5" style={{ backgroundColor: '#fffcfd' }}>
      <div className="container py-4">
        
        <div className="d-flex flex-wrap align-items-end justify-content-between gap-3 mb-5">
          <div>
            <span className="badge-rose px-3 py-2 mb-2">
              <i className="bi bi-calendar2-heart text-rose"></i>
              Próximas Experiencias
            </span>
            <h2 className="display-6 fw-bold text-dark mt-2 mb-0">
              Talleres y Encuentros Destacados
            </h2>
          </div>
          <Link to="/talleres" className="btn btn-outline-rose">
            <span>Ver todos los talleres</span>
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>

        <div className="row g-4">
          {talleres.map((t) => (
            <div key={t.id} className="col-12 col-md-6 d-flex">
              <div className="card-belkis w-100 p-4 p-md-5 d-flex flex-column border-rose">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="badge-rose small">{t.faseNombre}</span>
                  <span className="small text-muted">
                    <i className="bi bi-calendar3 me-1 text-rose"></i> {t.proximaFecha}
                  </span>
                </div>

                <h3 className="h4 fw-bold text-dark mb-2">{t.titulo}</h3>
                <p className="small text-muted mb-4 flex-grow-1" style={{ lineHeight: '1.6' }}>
                  {t.subtitulo}
                </p>

                <div className="mt-auto pt-3 border-top d-flex align-items-center justify-content-between" style={{ borderColor: 'var(--border-light)' }}>
                  <span className="fw-bold text-rose">{t.precio}</span>
                  <Link to={`/talleres?fase=${t.fase}`} className="btn btn-rose btn-sm px-4">
                    <span>Detalles & Inscripción</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkshopsPreview;
