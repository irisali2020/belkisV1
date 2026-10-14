import { Router } from 'express';
import { db, isFirebaseInitialized } from '../config/firebase.js';

const router = Router();

const defaultTalleres = [
  {
    id: 'taller-semilla',
    titulo: 'Taller Semilla: El Arte de Acoger y Comenzar',
    fase: 'genesis',
    faseNombre: '1. Génesis y Acogida',
    subtitulo: 'Aprende a romper el hielo, co-crear propósito y generar seguridad psicológica en grupos nuevos.',
    descripcion: 'Diseñado para facilitadores, coordinadores de comunidades y docentes que inician un ciclo grupal. Trabajaremos dinámicas de integración, pactos de convivencia y el encuadre emocional inicial.',
    duracion: '4 sesiones (8 horas)',
    modalidad: 'Online en vivo (Zoom) + Grabaciones',
    cupoMaximo: 18,
    proximaFecha: '24 de Noviembre, 2026',
    precio: '$45 USD',
    etiquetas: ['Inicio de Grupos', 'Confianza', 'Seguridad Psicológica'],
    colorBadge: '#e05a80',
  },
  {
    id: 'taller-dialogo-valiente',
    titulo: 'Diálogos Valientes: Gestión de Conflictos y Cohesión',
    fase: 'ajuste',
    faseNombre: '2. Ajuste y Cohesión',
    subtitulo: 'Transforma las diferencias y roces grupales en acuerdos profundos y empatía mutua.',
    descripcion: 'Cuando la luna de miel del grupo termina, aparecen las diferencias. Este taller entrega herramientas prácticas de escucha activa, comunicación no violenta y facilitación de tensiones colectivas.',
    duracion: '3 sesiones (6 horas)',
    modalidad: 'Online vivencial',
    cupoMaximo: 15,
    proximaFecha: '08 de Diciembre, 2026',
    precio: '$40 USD',
    etiquetas: ['Mediación', 'Comunicación Asertiva', 'Cohesión'],
    colorBadge: '#b52d56',
  },
  {
    id: 'taller-sinergia-sostenible',
    titulo: 'Sinergia Sostenible: Desempeño y Cuidado Colectivo',
    fase: 'accion',
    faseNombre: '3. Acción y Desempeño',
    subtitulo: 'Impulsa proyectos colaborativos de alto rendimiento sin quemar a las personas.',
    descripcion: 'Aprende a distribuir liderazgos compartidos, coordinar metas sin jerarquías rígidas y crear rituales de recarga energética para prevenir el burnout colectivo.',
    duracion: '4 sesiones (8 horas)',
    modalidad: 'Híbrido (Presencial & Streaming)',
    cupoMaximo: 20,
    proximaFecha: '15 de Enero, 2027',
    precio: '$50 USD',
    etiquetas: ['Madurez Grupal', 'Liderazgo Distribuido', 'Bienestar'],
    colorBadge: '#d6456f',
  },
  {
    id: 'taller-la-cosecha',
    titulo: 'La Cosecha Consciente: Cierre, Legado y Renovación',
    fase: 'renovacion',
    faseNombre: '4. Cierre o Renovación',
    subtitulo: 'Facilita transiciones saludables, celebraciones de logros y despedidas nutritivas.',
    descripcion: 'Todo ciclo vivo tiene un final o una metamorfosis. Aprende metodologías de retrospectiva humana, recolección de aprendizajes y rituales de cierre para equipos y proyectos comunitarios.',
    duracion: '2 sesiones (4 horas)',
    modalidad: 'Online en vivo',
    cupoMaximo: 16,
    proximaFecha: '30 de Enero, 2027',
    precio: '$30 USD',
    etiquetas: ['Cierre de Ciclos', 'Retrospectivas', 'Celebración'],
    colorBadge: '#9c284e',
  },
];

// GET /api/talleres - Listar todos los talleres
router.get('/', (req, res) => {
  res.json({
    success: true,
    count: defaultTalleres.length,
    data: defaultTalleres,
  });
});

// GET /api/talleres/:id - Obtener detalle de un taller
router.get('/:id', (req, res) => {
  const taller = defaultTalleres.find(t => t.id === req.params.id);
  if (!taller) {
    return res.status(404).json({ success: false, message: 'Taller no encontrado' });
  }
  res.json({ success: true, data: taller });
});

// POST /api/talleres/:id/inscribirse - Preinscripción a un taller
router.post('/:id/inscribirse', async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, email, telefono, mensaje } = req.body;

    const taller = defaultTalleres.find(t => t.id === id);
    if (!taller) {
      return res.status(404).json({ success: false, message: 'Taller no encontrado' });
    }

    const inscripcion = {
      tallerId: id,
      tallerTitulo: taller.titulo,
      nombre,
      email,
      telefono: telefono || '',
      mensaje: mensaje || '',
      createdAt: new Date().toISOString(),
    };

    if (isFirebaseInitialized && db) {
      const docRef = await db.collection('inscripciones_talleres').add(inscripcion);
      return res.status(201).json({
        success: true,
        message: `¡Te has preinscrito con éxito en "${taller.titulo}"! Te contactaremos con los detalles de acceso.`,
        id: docRef.id,
      });
    }

    res.status(201).json({
      success: true,
      message: `¡Te has preinscrito con éxito en "${taller.titulo}"! Nos comunicaremos contigo pronto.`,
      id: `reg_${Date.now()}`,
    });
  } catch (error) {
    console.error('Error al procesar inscripción:', error);
    res.status(500).json({ success: false, message: 'Error al procesar inscripción' });
  }
});

export default router;
