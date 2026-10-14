import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchServicios } from '../../services/api';

export const Servicios = () => {
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const data = await fetchServicios();
      setServicios(data);
      setLoading(false);
    }
    loadData();
  }, []);

  return (
    <div className="servicios-page">
      {/* Cabecera de Página */}
      <section className="bg-rose-gradient-hero py-5 border-bottom" style={{ borderColor: 'var(--border-light)' }}>
        <div className="container py-4 text-center">
          <span className="badge-rose px-3 py-2 mb-2">
            <i className="bi bi-heart-pulse-fill text-rose"></i>
            Acompañamiento Especializado
          </span>
          <h1 className="display-5 fw-bold text-dark mt-2 mb-3">
            Servicios para Líderes, Equipos y Comunidades
          </h1>
          <p className="lead text-muted mx-auto mb-0" style={{ maxWidth: '720px' }}>
            Sostener grupos humanos no es solo gestionar tareas: implica contener emociones, 
            regular tensiones y crear condiciones seguras para que cada integrante florezca.
          </p>
        </div>
      </section>

      {/* Listado de Servicios */}
      <section className="py-5">
        <div className="container py-3">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-rose" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
              <p className="mt-2 text-muted small">Cargando catálogo de servicios...</p>
            </div>
          ) : (
            <div className="row g-4">
              {servicios.map((s) => (
                <div key={s.id} className="col-12 col-md-6 d-flex">
                  <div 
                    className={`card-belkis w-100 p-4 p-lg-5 d-flex flex-column ${
                      s.destacado ? 'border-rose shadow' : ''
                    }`}
                    style={s.destacado ? { backgroundColor: '#fffcfd' } : {}}
                  >
                    {s.destacado && (
                      <div className="mb-2">
                        <span className="badge bg-rose text-white px-3 py-1 small rounded-pill">
                          <i className="bi bi-star-fill me-1"></i> Servicio Más Solicitado
                        </span>
                      </div>
                    )}

                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div 
                        className="d-flex align-items-center justify-content-center rounded-3 bg-rose-soft text-rose fs-3 shadow-sm"
                        style={{ width: '56px', height: '56px' }}
                      >
                        <i className={`bi ${s.icono || 'bi-bookmark-heart'}`}></i>
                      </div>
                      <div>
                        <h2 className="h4 fw-bold text-dark mb-0">{s.titulo}</h2>
                        <small className="text-rose fw-semibold">{s.subtitulo}</small>
                      </div>
                    </div>

                    <p className="text-muted mb-4" style={{ lineHeight: '1.65' }}>
                      {s.descripcion}
                    </p>

                    <h3 className="h6 fw-bold text-dark mb-3">
                      <i className="bi bi-check2-circle text-rose me-1"></i> ¿Qué incluye este proceso?
                    </h3>
                    <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
                      {s.beneficios?.map((b, idx) => (
                        <li key={idx} className="small text-secondary d-flex align-items-start gap-2">
                          <i className="bi bi-arrow-right-short text-rose fs-6 mt-n1"></i>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-3 border-top d-flex flex-wrap align-items-center justify-content-between gap-3" style={{ borderColor: 'var(--border-light)' }}>
                      <span className="badge bg-light text-muted border small py-2 px-3">
                        <i className="bi bi-clock me-1"></i> {s.modalidad}
                      </span>
                      <Link 
                        to={`/contacto?servicio=${encodeURIComponent(s.titulo)}`}
                        className="btn btn-rose btn-sm px-4"
                      >
                        <span>Consultar Propuesta</span>
                        <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section className="py-5 bg-rose-subtle">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="badge-rose px-3 py-2 mb-2">
              <i className="bi bi-bezier2 text-rose"></i>
              Nuestra Forma de Trabajar
            </span>
            <h2 className="display-6 fw-bold text-dark mt-2 mb-3">
              ¿Cómo abordamos el acompañamiento?
            </h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Un método estructurado pero profundamente sensible a los tiempos y emociones del grupo.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-3">
              <div className="p-4 rounded-4 bg-white border border-light h-100 shadow-sm">
                <span className="fw-bold fs-3 text-rose d-block mb-2">01</span>
                <h3 className="h6 fw-bold text-dark mb-2">Escucha Inicial</h3>
                <p className="small text-muted mb-0">
                  Nos reunimos con quien coordina el grupo para comprender los antecedentes, los anhelos y los nudos relacionales.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="p-4 rounded-4 bg-white border border-light h-100 shadow-sm">
                <span className="fw-bold fs-3 text-rose d-block mb-2">02</span>
                <h3 className="h6 fw-bold text-dark mb-2">Diagnóstico de Etapa</h3>
                <p className="small text-muted mb-0">
                  Identificamos en cuál de las 4 etapas del ciclo vital está la comunidad y qué desafíos específicos enfrenta.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="p-4 rounded-4 bg-white border border-light h-100 shadow-sm">
                <span className="fw-bold fs-3 text-rose d-block mb-2">03</span>
                <h3 className="h6 fw-bold text-dark mb-2">Intervención Viva</h3>
                <p className="small text-muted mb-0">
                  Facilitamos dinámicas, acuerdos o sesiones 1 a 1 adaptadas a la medida del momento humano que se atraviesa.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="p-4 rounded-4 bg-white border border-light h-100 shadow-sm">
                <span className="fw-bold fs-3 text-rose d-block mb-2">04</span>
                <h3 className="h6 fw-bold text-dark mb-2">Cierre y Cuidado</h3>
                <p className="small text-muted mb-0">
                  Cosechamos aprendizajes, evaluamos el impacto en el bienestar colectivo y dejamos capacidades instaladas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner de Contacto */}
      <section className="py-5 bg-white text-center">
        <div className="container py-4">
          <div className="card-belkis p-5 mx-auto bg-rose-gradient border-rose" style={{ maxWidth: '780px' }}>
            <h2 className="h3 fw-bold text-dark mb-3">
              ¿Tienes una necesidad específica en tu equipo o colectivo?
            </h2>
            <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '580px' }}>
              Diseñamos propuestas personalizadas para organizaciones, fundaciones y comunidades independientes. 
              Escríbenos y coordinamos una sesión preliminar de exploración sin costo.
            </p>
            <Link to="/contacto" className="btn btn-rose px-4 py-3">
              <i className="bi bi-chat-quote-fill"></i>
              <span>Solicitar Consulta de Exploración</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;