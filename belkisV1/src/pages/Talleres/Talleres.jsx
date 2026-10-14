import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchTalleres, inscribirseEnTaller } from '../../services/api';

export const Talleres = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const faseParam = searchParams.get('fase') || 'todos';

  const [talleres, setTalleres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFase, setSelectedFase] = useState(faseParam);

  // Modal de inscripción
  const [modalTaller, setModalTaller] = useState(null);
  const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '', mensaje: '' });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await fetchTalleres();
      setTalleres(data);
      setLoading(false);
    }
    load();
  }, []);

  useEffect(() => {
    if (faseParam) {
      setSelectedFase(faseParam);
    }
  }, [faseParam]);

  const handleFilter = (fase) => {
    setSelectedFase(fase);
    if (fase === 'todos') {
      searchParams.delete('fase');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ fase });
    }
  };

  const handleOpenModal = (taller) => {
    setModalTaller(taller);
    setFeedback(null);
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
  };

  const handleCloseModal = () => {
    setModalTaller(null);
    setFeedback(null);
  };

  const handleSubmitInscripcion = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback(null);

    const res = await inscribirseEnTaller(modalTaller.id, formData);
    setSubmitting(false);
    setFeedback(res);
  };

  const talleresFiltrados = selectedFase === 'todos' 
    ? talleres 
    : talleres.filter(t => t.fase === selectedFase);

  return (
    <div className="talleres-page">
      {/* Cabecera */}
      <section className="bg-rose-gradient-hero py-5 border-bottom" style={{ borderColor: 'var(--border-light)' }}>
        <div className="container py-4 text-center">
          <span className="badge-rose px-3 py-2 mb-2">
            <i className="bi bi-mortarboard-fill text-rose"></i>
            Aprender Haciendo en Comunidad
          </span>
          <h1 className="display-5 fw-bold text-dark mt-2 mb-3">
            Talleres y Encuentros Formativos
          </h1>
          <p className="lead text-muted mx-auto mb-0" style={{ maxWidth: '720px' }}>
            Espacios prácticos, vivenciales y reflexivos diseñados específicamente para cada una 
            de las etapas de la formación y maduración de grupos.
          </p>
        </div>
      </section>

      {/* Filtros por Etapa */}
      <section className="py-4 bg-white border-bottom" style={{ borderColor: 'var(--border-light)' }}>
        <div className="container">
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            <button 
              className={`btn btn-sm ${selectedFase === 'todos' ? 'btn-rose' : 'btn-outline-rose'}`}
              onClick={() => handleFilter('todos')}
            >
              Todos los Talleres
            </button>
            <button 
              className={`btn btn-sm ${selectedFase === 'genesis' ? 'btn-rose' : 'btn-outline-rose'}`}
              onClick={() => handleFilter('genesis')}
            >
              01. Génesis y Acogida
            </button>
            <button 
              className={`btn btn-sm ${selectedFase === 'ajuste' ? 'btn-rose' : 'btn-outline-rose'}`}
              onClick={() => handleFilter('ajuste')}
            >
              02. Ajuste y Cohesión
            </button>
            <button 
              className={`btn btn-sm ${selectedFase === 'accion' ? 'btn-rose' : 'btn-outline-rose'}`}
              onClick={() => handleFilter('accion')}
            >
              03. Acción y Desempeño
            </button>
            <button 
              className={`btn btn-sm ${selectedFase === 'renovacion' ? 'btn-rose' : 'btn-outline-rose'}`}
              onClick={() => handleFilter('renovacion')}
            >
              04. Cierre y Renovación
            </button>
          </div>
        </div>
      </section>

      {/* Grid de Talleres */}
      <section className="py-5">
        <div className="container py-3">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-rose" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
              <p className="mt-2 text-muted small">Cargando catálogo de talleres...</p>
            </div>
          ) : (
            <div className="row g-4">
              {talleresFiltrados.map((t) => (
                <div key={t.id} className="col-12 col-lg-6 d-flex">
                  <div className="card-belkis w-100 p-4 p-md-5 d-flex flex-column border-rose">
                    
                    {/* Header de la tarjeta */}
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                      <span className="badge-rose small">
                        <i className="bi bi-tag-fill me-1"></i> {t.faseNombre}
                      </span>
                      <span className="badge bg-light text-muted border small">
                        <i className="bi bi-people me-1"></i> Cupo máx: {t.cupoMaximo} personas
                      </span>
                    </div>

                    <h2 className="h4 fw-bold text-dark mb-2">{t.titulo}</h2>
                    <p className="small text-rose-dark fw-semibold mb-3">{t.subtitulo}</p>
                    
                    <p className="text-muted small mb-4" style={{ lineHeight: '1.65' }}>
                      {t.descripcion}
                    </p>

                    {/* Metadatos del taller */}
                    <div className="p-3 rounded-3 bg-rose-subtle mb-4">
                      <div className="row g-2 small">
                        <div className="col-12 col-sm-6 d-flex align-items-center gap-2">
                          <i className="bi bi-clock-history text-rose"></i>
                          <span><strong>Duración:</strong> {t.duracion}</span>
                        </div>
                        <div className="col-12 col-sm-6 d-flex align-items-center gap-2">
                          <i className="bi bi-laptop text-rose"></i>
                          <span><strong>Modalidad:</strong> {t.modalidad}</span>
                        </div>
                        <div className="col-12 col-sm-6 d-flex align-items-center gap-2">
                          <i className="bi bi-calendar-event text-rose"></i>
                          <span><strong>Próxima fecha:</strong> {t.proximaFecha}</span>
                        </div>
                        <div className="col-12 col-sm-6 d-flex align-items-center gap-2">
                          <i className="bi bi-cash-coin text-rose"></i>
                          <span><strong>Inversión:</strong> {t.precio}</span>
                        </div>
                      </div>
                    </div>

                    {/* Etiquetas */}
                    <div className="d-flex flex-wrap gap-1 mb-4">
                      {t.etiquetas?.map((tag, idx) => (
                        <span key={idx} className="badge bg-white text-muted border small">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Botón de acción */}
                    <div className="mt-auto pt-3 border-top d-flex justify-content-end" style={{ borderColor: 'var(--border-light)' }}>
                      <button 
                        className="btn btn-rose w-100 py-2"
                        onClick={() => handleOpenModal(t)}
                      >
                        <i className="bi bi-pencil-square"></i>
                        <span>Preinscribirme en este Taller</span>
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal de Preinscripción */}
      {modalTaller && (
        <div 
          className="modal show d-block" 
          tabIndex="-1" 
          style={{ backgroundColor: 'rgba(44, 32, 36, 0.65)', backdropFilter: 'blur(3px)' }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4 border-0 shadow-lg p-2">
              
              <div className="modal-header border-0 pb-0">
                <div>
                  <span className="badge-rose small mb-1">{modalTaller.faseNombre}</span>
                  <h3 className="h5 fw-bold text-dark mb-0">{modalTaller.titulo}</h3>
                </div>
                <button 
                  type="button" 
                  className="btn-close" 
                  aria-label="Cerrar"
                  onClick={handleCloseModal}
                ></button>
              </div>

              <div className="modal-body">
                {feedback ? (
                  <div className={`alert ${feedback.success ? 'alert-success bg-rose-soft border-rose text-dark' : 'alert-danger'} p-4 text-center rounded-3`}>
                    <i className={`bi ${feedback.success ? 'bi-check-circle-fill text-rose' : 'bi-exclamation-triangle-fill'} fs-1 d-block mb-2`}></i>
                    <h4 className="h5 fw-bold">{feedback.success ? '¡Inscripción Exitosa!' : 'Atención'}</h4>
                    <p className="small mb-3">{feedback.message}</p>
                    <button className="btn btn-rose btn-sm" onClick={handleCloseModal}>
                      Cerrar
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitInscripcion}>
                    <p className="small text-muted mb-3">
                      Completa tus datos para reservar tu lugar. Te enviaremos por correo el enlace de acceso y detalles de pago.
                    </p>

                    <div className="mb-3">
                      <label className="form-label small fw-semibold text-dark">Nombre y Apellido *</label>
                      <input 
                        type="text" 
                        className="form-control rounded-3" 
                        required 
                        placeholder="Ej. Carolina Silva"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label small fw-semibold text-dark">Correo Electrónico *</label>
                      <input 
                        type="email" 
                        className="form-control rounded-3" 
                        required 
                        placeholder="carolina@ejemplo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label small fw-semibold text-dark">Teléfono / WhatsApp</label>
                      <input 
                        type="tel" 
                        className="form-control rounded-3" 
                        placeholder="+58 412 1234567"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label small fw-semibold text-dark">¿Qué te motiva a tomar este taller? (Opcional)</label>
                      <textarea 
                        className="form-control rounded-3" 
                        rows="2" 
                        placeholder="Cuéntanos brevemente sobre tu grupo o interés..."
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      ></textarea>
                    </div>

                    <div className="d-flex justify-content-end gap-2 pt-2 border-top">
                      <button type="button" className="btn btn-sm btn-outline-secondary rounded-pill px-3" onClick={handleCloseModal}>
                        Cancelar
                      </button>
                      <button type="submit" className="btn btn-sm btn-rose px-4" disabled={submitting}>
                        {submitting ? 'Enviando...' : 'Confirmar Preinscripción'}
                      </button>
                    </div>
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Talleres;
