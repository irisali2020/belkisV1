import { Router } from 'express';

const router = Router();

const defaultArticulos = [
  {
    id: 'art-1',
    slug: 'de-extranos-a-comunidad-seguridad-psicologica',
    titulo: 'De extraños a comunidad: cómo construir seguridad psicológica desde el primer día',
    fase: 'genesis',
    faseBadge: 'Génesis y Acogida',
    autor: 'Lic. Belkis',
    fecha: '10 de Octubre, 2026',
    tiempoLectura: '5 min de lectura',
    resumen: 'El primer encuentro define el destino emocional de un grupo. Descubre cómo las dinámicas de acogida reducen la ansiedad social y abren paso a la autenticidad.',
    contenidoCompleto: `
      Cuando un grupo se reúne por primera vez, el ambiente está cargado de una emoción invisible pero determinante: la incertidumbre. Las personas se preguntan internamente: *¿Encajaré aquí? ¿Es seguro mostrar mis dudas? ¿Qué esperan de mí?*
      
      Desde la psicología comunitaria, entendemos que la **seguridad psicológica** no surge por decreto; se teje mediante rituales de bienvenida explícitos. Un facilitador consciente no busca forzar la confianza de inmediato, sino proporcionar un contenedor predecible y seguro.

      ### 3 claves para la etapa de Génesis:
      1. **Nombrar la vulnerabilidad:** Normalizar que es natural sentir timidez o reservas al inicio.
      2. **Pactos breves de convivencia:** No un reglamento rígido, sino 3 o 4 acuerdos esenciales sobre escucha y confidencialidad.
      3. **Dinámicas de conexión auténtica:** Reemplazar las presentaciones formales por preguntas de intención humana: *¿Qué anhelo traes hoy a este espacio?*
    `,
    imagen: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    tags: ['Seguridad Psicológica', 'Acogida', 'Facilitación']
  },
  {
    id: 'art-2',
    slug: 'el-conflicto-como-puente-hacia-la-cohesion',
    titulo: 'Por qué el conflicto no es un fracaso, sino el puente hacia la verdadera cohesión',
    fase: 'ajuste',
    faseBadge: 'Ajuste y Cohesión',
    autor: 'Lic. Belkis',
    fecha: '28 de Septiembre, 2026',
    tiempoLectura: '6 min de lectura',
    resumen: 'Cuando caen las máscaras de cortesía iniciales emergen las diferencias. Aprender a sostener la tensión es el verdadero secreto de la madurez colectiva.',
    contenidoCompleto: `
      En muchos grupos y organizaciones se teme al conflicto como a una peste. Se confunde armonía con ausencia de debate, cayendo en la trampa de la "cortesía superficial".
      
      Sin embargo, la etapa de **Ajuste y Cohesión** (lo que en psicología grupal llamamos el reacomodo de roles) es indispensable. Solo cuando los integrantes sienten la suficiente confianza para expresar su disenso, el grupo pasa de ser una aglomeración de individuos a convertirse en un cuerpo vivo.

      ### Cómo acompañar el desacuerdo:
      - **Diferenciar la persona de la idea:** La divergencia no es un ataque al vínculo.
      - **Círculos de escucha activa:** Facilitar rondas de palabra donde nadie interrumpe y cada voz tiene peso idéntico.
      - **Co-diseñar la solución:** Evitar votaciones donde haya ganadores y perdedores; construir sobre los puntos de acuerdo genuinos.
    `,
    imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    tags: ['Gestión de Conflictos', 'Escucha Activa', 'Cohesión']
  },
  {
    id: 'art-3',
    slug: 'evitar-el-burnout-en-comunidades-activas',
    titulo: 'El síndrome del facilitador agotado: cuidando la energía en la etapa de acción',
    fase: 'accion',
    faseBadge: 'Acción y Desempeño',
    autor: 'Lic. Belkis',
    fecha: '15 de Septiembre, 2026',
    tiempoLectura: '4 min de lectura',
    resumen: 'Cuando el grupo alcanza velocidad de crucero, la sobreexigencia y el entusiasmo desmedido pueden desgastar los vínculos. Estrategias de cuidado mutuo.',
    contenidoCompleto: `
      La etapa de desempeño y acción es vibrante: los proyectos se materializan, las ideas cobran vida y la sinergia es palpable. Sin embargo, también es el momento más propenso al agotamiento si no se introducen pausas deliberadas.
      
      Sostener una comunidad no es una carrera de 100 metros planos; es una travesía de fondo. La salud psicológica de un colectivo se mide por su capacidad para descansar sin culpa.

      ### Prácticas de sostenibilidad grupal:
      - **Rotación de liderazgos:** Evitar que una o dos personas carguen con la logística y la contención emocional.
      - **Rituales de reconocimiento:** Celebrar los pequeños avances cotidianos, no solo los hitos gigantescos.
      - **Chequeos de energía:** Iniciar las reuniones con un 'termómetro emocional': *¿Con cuánta energía llegas hoy del 1 al 10?*
    `,
    imagen: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    tags: ['Salud Colectiva', 'Desempeño', 'Prevención Burnout']
  },
  {
    id: 'art-4',
    slug: 'el-arte-de-cerrar-ciclos-con-gratitud',
    titulo: 'Cerrar con gratitud: la importancia de los rituales de despedida en grupos humanos',
    fase: 'renovacion',
    faseBadge: 'Cierre o Renovación',
    autor: 'Lic. Belkis',
    fecha: '02 de Septiembre, 2026',
    tiempoLectura: '5 min de lectura',
    resumen: 'Cerrar un proyecto o despedir integrantes duele, pero cuando se hace con consciencia se transforma en el abono fértil para el próximo renacer.',
    contenidoCompleto: `
      Vivimos en una cultura orientada casi exclusivamente a inaugurar: nos apasiona lanzar proyectos, fundar asociaciones y abrir grupos. Pero solemos ser pésimos para cerrar con dignidad.
      
      Cuando un grupo concluye su misión o cuando integrantes clave parten, dejar ese espacio sin procesar genera duelos no resueltos y desmotivación residual. La **Renovación y Cierre** requiere cosechar lo vivido.

      ### Cómo diseñar un ritual de cosecha:
      - **El mapa de aprendizajes:** ¿Qué nos llevamos en la mochila que antes no teníamos?
      - **Agradecimientos cruzados:** Dar espacio para que cada participante exprese gratitud a otro.
      - **Sembrar la siguiente etapa:** Definir con serenidad si el grupo se disuelve, entra en hibernación o renueva sus votos con un nuevo propósito.
    `,
    imagen: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
    tags: ['Cierre de Ciclos', 'Gratitud', 'Renovación']
  }
];

// GET /api/blog - Listar todos los artículos
router.get('/', (req, res) => {
  const { fase } = req.query;
  let articulos = defaultArticulos;
  if (fase) {
    articulos = articulos.filter(a => a.fase === fase);
  }
  res.json({
    success: true,
    count: articulos.length,
    data: articulos,
  });
});

// GET /api/blog/:slug - Detalle de un artículo
router.get('/:slug', (req, res) => {
  const articulo = defaultArticulos.find(a => a.slug === req.params.slug || a.id === req.params.slug);
  if (!articulo) {
    return res.status(404).json({ success: false, message: 'Artículo no encontrado' });
  }
  res.json({ success: true, data: articulo });
});

export default router;
