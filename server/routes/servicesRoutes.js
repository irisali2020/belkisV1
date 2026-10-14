import { Router } from 'express';

const router = Router();

const servicios = [
  {
    id: 'acompanamiento-lideres',
    titulo: 'Acompañamiento a Líderes y Facilitadores',
    icono: 'person-heart',
    subtitulo: 'Espacio individual de supervisión y mentoría psicológica',
    descripcion: 'Sesiones 1 a 1 para líderes de comunidad, coordinadores de equipo y facilitadores que sienten el peso emocional de sostener al grupo. Te ayudamos a cuidar tus límites, procesar el desgaste y afinar tu presencia como facilitador/a.',
    beneficios: [
      'Supervisión de dinámicas grupales complejas',
      'Desarrollo de liderazgo empático y asertivo',
      'Estrategias de autocuidado y prevención de burnout',
      'Diseño personalizado de sesiones de trabajo'
    ],
    modalidad: 'Online (Sesiones de 60 min)',
    destacado: false
  },
  {
    id: 'diagnostico-madurez',
    titulo: 'Diagnóstico de Madurez y Clima Grupal',
    icono: 'clipboard-pulse',
    subtitulo: 'Radiografía del momento vital de tu comunidad o equipo',
    descripcion: 'Evaluamos de forma sistemática y sensible en qué etapa del ciclo se encuentra tu colectivo, cuáles son los cuellos de botella emocionales o comunicacionales, y te entregamos un plan de acción para destrabar el potencial colectivo.',
    beneficios: [
      'Mapeo de la confianza y seguridad psicológica',
      'Identificación de dinámicas de poder y silencios',
      'Informe cualitativo con recomendaciones inmediatas',
      'Sesión de devolución guiada con los integrantes'
    ],
    modalidad: 'Online o Presencial',
    destacado: true
  },
  {
    id: 'facilitacion-talleres',
    titulo: 'Facilitación de Procesos y Retiros de Cohesión',
    icono: 'people-fill',
    subtitulo: 'Espacios vivenciales diseñados a la medida de tu grupo',
    descripcion: 'Diseñamos y facilitamos jornadas de encuentro, acuerdos de convivencia, resolución de crisis o replanteamiento estratégico para que tu comunidad recupere el rumbo con alegría y profundidad.',
    beneficios: [
      'Metodologías participativas y dialógicas',
      'Espacio seguro libre de juicios para abordar lo incómodo',
      'Generación de acuerdos duraderos y firmes',
      'Fortalecimiento del sentido de pertenencia'
    ],
    modalidad: 'Jornadas de medio día o retiros de fin de semana',
    destacado: false
  },
  {
    id: 'mediacion-conflictos',
    titulo: 'Mediación de Conflictos Comunitarios',
    icono: 'shield-check',
    subtitulo: 'Intervención especializada para destrabar tensiones agudas',
    descripcion: 'Cuando las diferencias se estancan o amenazan con fracturar la comunidad, intervenimos como facilitadores neutrales para tender puentes, validar las necesidades de cada parte y restaurar el tejido vincular.',
    beneficios: [
      'Círculos restaurativos de conversación',
      'Desescalada emocional sin buscar culpables',
      'Reconstrucción de la confianza y respeto mutuo',
      'Protocolos preventivos para futuros roces'
    ],
    modalidad: 'Sesiones intensivas de mediación guiada',
    destacado: false
  }
];

// GET /api/servicios
router.get('/', (req, res) => {
  res.json({
    success: true,
    count: servicios.length,
    data: servicios,
  });
});

export default router;
