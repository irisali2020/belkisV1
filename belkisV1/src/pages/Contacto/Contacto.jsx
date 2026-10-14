import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { enviarMensajeContacto } from '../../services/api';

export const Contacto = () => {
  const [searchParams] = useSearchParams();
  const servicioParam = searchParams.get('servicio') || '';

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoGrupo: 'Equipo de trabajo / Organización',
    etapaGrupo: 'No estoy seguro/a aún',
    mensaje: servicioParam ? `Hola Belkis, me gustaría consultar sobre el servicio: ${servicioParam}. ` : '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [responseStatus, setResponseStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setResponseStatus(null);

    const res = await enviarMensajeContacto(formData);
    setSubmitting(false);
    setResponseStatus(res);

    if (res.success) {
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        tipoGrupo: 'Equipo de trabajo / Organización',
        etapaGrupo: 'No estoy seguro/a aún',
        mensaje: '',
      });
    }
  };

  return (
    <div className="contacto-page">
      {/* Cabecera */}
      <section className="bg-rose-gradient-hero py-5 border-bottom" style={{ borderColor: 'var(--border-light)' }}>
        <div className="container py-4 text-center">
          <span className="badge-rose px-3 py-2 mb-2">
            <i className="bi bi-chat-heart-fill text-rose"></i>
            Espacio de Escucha y Encuentro
          </span>
          <h1 className="display-5 fw-bold text-dark mt-2 mb-3">
            Conversemos sobre tu Comunidad
          </h1>
          <p className="lead text-muted mx-auto mb-0" style={{ maxWidth: '720px' }}>
            Cada grupo humano tiene su propia voz y su propio ritmo. Cuéntanos qué momento 
            están atravesando y exploremos juntos el mejor camino para acompañarlos.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-5">
        <div className="container py-3">
          <div className="row g-5">
            
            {/* Columna Izquierda: Formulario */}
            <div className="col-12 col-lg-7">
              <div className="card-belkis p-4 p-md-5 border-rose">
                <h2 className="h4 fw-bold text-dark mb-2">Envíanos un mensaje</h2>
                <p className="small text-muted mb-4">
                  Completa el formulario y te responderemos en un plazo máximo de 24 a 48 horas laborables.
                </p>

                {responseStatus && (
                  <div className={`alert ${responseStatus.success ? 'bg-rose-soft border-rose text-dark' : 'alert-danger'} p-3 rounded-3 mb-4`}>
                    <div className="d-flex align-items-center gap-2">
                      <i className={`bi ${responseStatus.success ? 'bi-check-circle-fill text-rose fs-4' : 'bi-exclamation-triangle-fill fs-4'}`}></i>
                      <div>
                        <strong>{responseStatus.success ? '¡Mensaje Enviado con Éxito!' : 'Hubo un inconveniente'}</strong>
                        <p className="small mb-0">{responseStatus.message}</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-semibold text-dark">Nombre y Apellido *</label>
                      <input 
                        type="text" 
                        className="form-control rounded-3" 
                        required 
                        placeholder="Tu nombre"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-semibold text-dark">Correo Electrónico *</label>
                      <input 
                        type="email" 
                        className="form-control rounded-3" 
                        required 
                        placeholder="tu@correo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-semibold text-dark">Teléfono / WhatsApp</label>
                      <input 
                        type="tel" 
                        className="form-control rounded-3" 
                        placeholder="+58 412 0000000"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-semibold text-dark">Tipo de Grupo o Comunidad</label>
                      <select 
                        className="form-select rounded-3"
                        value={formData.tipoGrupo}
                        onChange={(e) => setFormData({ ...formData, tipoGrupo: e.target.value })}
                      >
                        <option value="Equipo de trabajo / Organización">Equipo de trabajo / Organización</option>
                        <option value="Comunidad de Práctica / Aprendizaje">Comunidad de Práctica / Aprendizaje</option>
                        <option value="Red Vecinal o Comunitaria">Red Vecinal o Comunitaria</option>
                        <option value="Colectivo Creativo o Artístico">Colectivo Creativo o Artístico</option>
                        <option value="Círculo de Crecimiento Personal">Círculo de Crecimiento Personal</option>
                        <option value="Otro">Otro entorno</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label small fw-semibold text-dark">
                        ¿En qué etapa sientes que se encuentra tu grupo?
                      </label>
                      <select 
                        className="form-select rounded-3"
                        value={formData.etapaGrupo}
                        onChange={(e) => setFormData({ ...formData, etapaGrupo: e.target.value })}
                      >
                        <option value="No estoy seguro/a aún">No estoy seguro/a aún (requerimos diagnóstico)</option>
                        <option value="01. Génesis y Acogida">01. Génesis y Acogida (Recién comenzando, integrando personas)</option>
                        <option value="02. Ajuste y Cohesión">02. Ajuste y Cohesión (Roces, diferencias, definiendo acuerdos)</option>
                        <option value="03. Acción y Desempeño">03. Acción y Desempeño (Trabajando activamente, cuidando energía)</option>
                        <option value="04. Cierre y Renovación">04. Cierre y Renovación (Finalizando proyecto, despidiendo o renovando)</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label small fw-semibold text-dark">Mensaje o Detalle de tu Consulta *</label>
                      <textarea 
                        className="form-control rounded-3" 
                        rows="4" 
                        required 
                        placeholder="Cuéntanos brevemente sobre la situación actual del grupo, qué inquietudes tienen o qué tipo de acompañamiento buscan..."
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      ></textarea>
                    </div>

                    <div className="col-12 pt-2">
                      <button 
                        type="submit" 
                        className="btn btn-rose w-100 py-3 shadow-sm"
                        disabled={submitting}
                      >
                        {submitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                            <span>Enviando mensaje...</span>
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send-fill"></i>
                            <span>Enviar Mensaje a Belkis</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Columna Derecha: Información de Contacto */}
            <div className="col-12 col-lg-5">
              <div className="d-flex flex-column gap-4">
                
                {/* Tarjeta de Información */}
                <div className="card-belkis p-4 p-md-5 bg-rose-subtle border-rose">
                  <h3 className="h5 fw-bold text-dark mb-4">Canales de Atención Directa</h3>
                  
                  <div className="d-flex flex-column gap-4">
                    <div className="d-flex align-items-start gap-3">
                      <div className="d-flex align-items-center justify-content-center rounded-circle bg-white text-rose shadow-sm" style={{ width: '44px', height: '44px', fontSize: '1.2rem', flexShrink: 0 }}>
                        <i className="bi bi-envelope-heart-fill"></i>
                      </div>
                      <div>
                        <span className="d-block small text-muted fw-semibold">Correo Electrónico</span>
                        <a href="mailto:contacto@belkiscomunidad.com" className="text-dark fw-bold text-decoration-none">
                          contacto@belkiscomunidad.com
                        </a>
                      </div>
                    </div>

                    <div className="d-flex align-items-start gap-3">
                      <div className="d-flex align-items-center justify-content-center rounded-circle bg-white text-rose shadow-sm" style={{ width: '44px', height: '44px', fontSize: '1.2rem', flexShrink: 0 }}>
                        <i className="bi bi-whatsapp"></i>
                      </div>
                      <div>
                        <span className="d-block small text-muted fw-semibold">WhatsApp para Consultas</span>
                        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-dark fw-bold text-decoration-none">
                          +58 (412) 000-0000
                        </a>
                      </div>
                    </div>

                    <div className="d-flex align-items-start gap-3">
                      <div className="d-flex align-items-center justify-content-center rounded-circle bg-white text-rose shadow-sm" style={{ width: '44px', height: '44px', fontSize: '1.2rem', flexShrink: 0 }}>
                        <i className="bi bi-globe-americas"></i>
                      </div>
                      <div>
                        <span className="d-block small text-muted fw-semibold">Modalidades</span>
                        <span className="text-dark fw-bold">Online Internacional & Presencial</span>
                        <small className="d-block text-muted">Sesiones sincrónicas por Zoom o Meet</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Caja de Reflexión / Filosofía */}
                <div className="quote-box p-4 rounded-4">
                  <i className="bi bi-quote text-rose fs-2 d-block mb-1"></i>
                  <p className="fst-italic text-dark small mb-2 font-serif" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                    «Ningún grupo madura saltándose los desacuerdos, así como ninguna flor brota sin haber habitado la oscuridad de la tierra. Acompañar es confiar en el ciclo.»
                  </p>
                  <small className="fw-bold text-rose">— Lic. Belkis, Psicología Comunitaria</small>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
