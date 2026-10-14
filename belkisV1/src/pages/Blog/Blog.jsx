import React, { useState, useEffect } from 'react';
import { fetchArticulosBlog } from '../../services/api';

export const Blog = () => {
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFase, setSelectedFase] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modal de lectura completa
  const [articuloActivo, setArticuloActivo] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await fetchArticulosBlog(selectedFase);
      setArticulos(data);
      setLoading(false);
    }
    load();
  }, [selectedFase]);

  const articulosFiltrados = articulos.filter((art) => {
    const matchSearch = art.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        art.resumen.toLowerCase().includes(searchTerm.toLowerCase());
    return matchSearch;
  });

  return (
    <div className="blog-page">
      {/* Cabecera */}
      <section className="bg-rose-gradient-hero py-5 border-bottom" style={{ borderColor: 'var(--border-light)' }}>
        <div className="container py-4 text-center">
          <span className="badge-rose px-3 py-2 mb-2">
            <i className="bi bi-journal-text text-rose"></i>
            Espacio de Pensamiento y Aprendizaje
          </span>
          <h1 className="display-5 fw-bold text-dark mt-2 mb-3">
            Blog: Psicología & Vida Grupal
          </h1>
          <p className="lead text-muted mx-auto mb-0" style={{ maxWidth: '720px' }}>
            Reflexiones, metodologías vivas y herramientas prácticas para líderes, facilitadores y miembros 
            que desean comprender lo que sucede bajo la superficie de los grupos.
          </p>
        </div>
      </section>

      {/* Barra de Filtro y Búsqueda */}
      <section className="py-4 bg-white border-bottom" style={{ borderColor: 'var(--border-light)' }}>
        <div className="container">
          <div className="row g-3 align-items-center justify-content-between">
            <div className="col-12 col-md-7">
              <div className="d-flex flex-wrap gap-2">
                <button 
                  className={`btn btn-sm ${selectedFase === '' ? 'btn-rose' : 'btn-outline-rose'}`}
                  onClick={() => setSelectedFase('')}
                >
                  Todas las Etapas
                </button>
                <button 
                  className={`btn btn-sm ${selectedFase === 'genesis' ? 'btn-rose' : 'btn-outline-rose'}`}
                  onClick={() => setSelectedFase('genesis')}
                >
                  Génesis
                </button>
                <button 
                  className={`btn btn-sm ${selectedFase === 'ajuste' ? 'btn-rose' : 'btn-outline-rose'}`}
                  onClick={() => setSelectedFase('ajuste')}
                >
                  Ajuste
                </button>
                <button 
                  className={`btn btn-sm ${selectedFase === 'accion' ? 'btn-rose' : 'btn-outline-rose'}`}
                  onClick={() => setSelectedFase('accion')}
                >
                  Acción
                </button>
                <button 
                  className={`btn btn-sm ${selectedFase === 'renovacion' ? 'btn-rose' : 'btn-outline-rose'}`}
                  onClick={() => setSelectedFase('renovacion')}
                >
                  Cierre
                </button>
              </div>
            </div>

            <div className="col-12 col-md-5 col-lg-4">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0 text-muted">
                  <i className="bi bi-search"></i>
                </span>
                <input 
                  type="text" 
                  className="form-control border-start-0 ps-0"
                  placeholder="Buscar artículos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Artículos */}
      <section className="py-5">
        <div className="container py-3">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-rose" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
              <p className="mt-2 text-muted small">Cargando artículos...</p>
            </div>
          ) : articulosFiltrados.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-chat-square-dots text-muted fs-1 mb-3 d-block"></i>
              <h3 className="h5 fw-bold text-dark">No se encontraron artículos</h3>
              <p className="text-muted small">Prueba cambiando los filtros o el término de búsqueda.</p>
            </div>
          ) : (
            <div className="row g-4">
              {articulosFiltrados.map((art) => (
                <div key={art.id} className="col-12 col-md-6 d-flex">
                  <div className="card-belkis w-100 overflow-hidden d-flex flex-column border-rose">
                    
                    <div style={{ height: '220px', overflow: 'hidden' }}>
                      <img 
                        src={art.imagen} 
                        alt={art.titulo} 
                        className="w-100 h-100"
                        style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      />
                    </div>

                    <div className="p-4 p-lg-5 d-flex flex-column flex-grow-1">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <span className="badge-rose small">
                          <i className="bi bi-tag-fill me-1"></i> {art.faseBadge}
                        </span>
                        <span className="small text-muted">
                          <i className="bi bi-clock me-1"></i> {art.tiempoLectura}
                        </span>
                      </div>

                      <h2 className="h4 fw-bold text-dark mb-3" style={{ lineHeight: '1.4' }}>
                        {art.titulo}
                      </h2>

                      <p className="text-muted small mb-4 flex-grow-1" style={{ lineHeight: '1.65' }}>
                        {art.resumen}
                      </p>

                      <div className="d-flex flex-wrap gap-1 mb-4">
                        {art.tags?.map((t, i) => (
                          <span key={i} className="badge bg-light text-muted border small">
                            #{t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto pt-3 border-top d-flex align-items-center justify-content-between" style={{ borderColor: 'var(--border-light)' }}>
                        <div className="d-flex align-items-center gap-2">
                          <span className="small fw-semibold text-dark">{art.autor}</span>
                          <span className="small text-muted">• {art.fecha}</span>
                        </div>
                        <button 
                          className="btn btn-sm btn-outline-rose"
                          onClick={() => setArticuloActivo(art)}
                        >
                          <span>Leer Más</span>
                          <i className="bi bi-arrow-right"></i>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal de Lectura Completa */}
      {articuloActivo && (
        <div 
          className="modal show d-block" 
          tabIndex="-1" 
          style={{ backgroundColor: 'rgba(44, 32, 36, 0.65)', backdropFilter: 'blur(3px)' }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
            <div className="modal-content rounded-4 border-0 shadow-lg">
              
              <div className="modal-header border-bottom p-4">
                <div>
                  <span className="badge-rose small mb-2">{articuloActivo.faseBadge}</span>
                  <h3 className="h4 fw-bold text-dark mb-1">{articuloActivo.titulo}</h3>
                  <small className="text-muted">Por {articuloActivo.autor} • {articuloActivo.fecha}</small>
                </div>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setArticuloActivo(null)}
                ></button>
              </div>

              <div className="modal-body p-4 p-md-5">
                <img 
                  src={articuloActivo.imagen} 
                  alt={articuloActivo.titulo} 
                  className="w-100 rounded-3 mb-4"
                  style={{ maxHeight: '340px', objectFit: 'cover' }}
                />
                <div 
                  className="text-secondary" 
                  style={{ fontSize: '1.05rem', lineHeight: '1.8', whiteSpace: 'pre-line' }}
                >
                  {articuloActivo.contenidoCompleto}
                </div>
              </div>

              <div className="modal-footer border-top p-3">
                <button 
                  type="button" 
                  className="btn btn-rose btn-sm px-4" 
                  onClick={() => setArticuloActivo(null)}
                >
                  Cerrar Artículo
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
