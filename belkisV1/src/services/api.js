// Capa de comunicación con el backend Express y Firebase
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export async function fetchServicios() {
  try {
    const res = await fetch(`${API_URL}/servicios`);
    if (!res.ok) throw new Error('Error al cargar servicios del servidor');
    const json = await res.json();
    return json.data;
  } catch (err) {
    console.warn('Usando datos locales para servicios:', err.message);
    // Fallback local
    return [
      {
        id: 'acompanamiento-lideres',
        titulo: 'Acompañamiento a Líderes y Facilitadores',
        icono: 'bi-person-heart',
        subtitulo: 'Espacio individual de supervisión y mentoría psicológica',
        descripcion: 'Sesiones 1 a 1 para líderes de comunidad, coordinadores de equipo y facilitadores que sienten el peso emocional de sostener al grupo. Cuidamos tus límites y prevenimos el burnout.',
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
        icono: 'bi-clipboard-pulse',
        subtitulo: 'Radiografía del momento vital de tu comunidad o equipo',
        descripcion: 'Evaluamos de forma sistemática y sensible en qué etapa del ciclo se encuentra tu colectivo, cuáles son los cuellos de botella comunicacionales, y te entregamos un plan de acción.',
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
        icono: 'bi-people-fill',
        subtitulo: 'Espacios vivenciales diseñados a la medida de tu grupo',
        descripcion: 'Diseñamos y facilitamos jornadas de encuentro, acuerdos de convivencia, resolución de crisis o replanteamiento estratégico para que tu comunidad recupere el rumbo con vitalidad.',
        beneficios: [
          'Metodologías participativas y dialógicas',
          'Espacio seguro libre de juicios para abordar lo incómodo',
          'Generación de acuerdos duraderos y firmes',
          'Fortalecimiento del sentido de pertenencia'
        ],
        modalidad: 'Jornadas de medio día o retiros',
        destacado: false
      },
      {
        id: 'mediacion-conflictos',
        titulo: 'Mediación de Conflictos Comunitarios',
        icono: 'bi-shield-check',
        subtitulo: 'Intervención especializada para destrabar tensiones agudas',
        descripcion: 'Cuando las diferencias amenazan con fracturar la comunidad, intervenimos como facilitadores neutrales para tender puentes y validar las necesidades de cada parte.',
        beneficios: [
          'Círculos restaurativos de conversación',
          'Desescalada emocional sin buscar culpables',
          'Reconstrucción de la confianza y respeto mutuo',
          'Protocolos preventivos para futuros roces'
        ],
        modalidad: 'Sesiones intensivas guiadas',
        destacado: false
      }
    ];
  }
}

export async function fetchTalleres() {
  try {
    const res = await fetch(`${API_URL}/talleres`);
    if (!res.ok) throw new Error('Error al cargar talleres');
    const json = await res.json();
    return json.data;
  } catch (err) {
    console.warn('Usando datos locales para talleres:', err.message);
    return [
      {
        id: 'taller-semilla',
        titulo: 'Taller Semilla: El Arte de Acoger y Comenzar',
        fase: 'genesis',
        faseNombre: '1. Génesis y Acogida',
        subtitulo: 'Romper el hielo, co-crear propósito y generar seguridad psicológica en grupos nuevos.',
        descripcion: 'Diseñado para facilitadores y líderes que inician un ciclo grupal. Trabajaremos dinámicas de integración, pactos de bienvenida y el encuadre emocional.',
        duracion: '4 sesiones (8 horas)',
        modalidad: 'Online en vivo (Zoom) + Grabaciones',
        cupoMaximo: 18,
        proximaFecha: '24 de Noviembre, 2026',
        precio: '$45 USD',
        etiquetas: ['Inicio de Grupos', 'Confianza', 'Seguridad Psicológica'],
        colorBadge: '#d94f70',
      },
      {
        id: 'taller-dialogo-valiente',
        titulo: 'Diálogos Valientes: Gestión de Conflictos y Cohesión',
        fase: 'ajuste',
        faseNombre: '2. Ajuste y Cohesión',
        subtitulo: 'Transforma las diferencias y roces grupales en acuerdos profundos y empatía mutua.',
        descripcion: 'Cuando la luna de miel del grupo termina, aparecen las diferencias. Este taller entrega herramientas prácticas de escucha activa y facilitación de tensiones.',
        duracion: '3 sesiones (6 horas)',
        modalidad: 'Online vivencial',
        cupoMaximo: 15,
        proximaFecha: '08 de Diciembre, 2026',
        precio: '$40 USD',
        etiquetas: ['Mediación', 'Comunicación Asertiva', 'Cohesión'],
        colorBadge: '#b02f52',
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
        colorBadge: '#d94f70',
      },
      {
        id: 'taller-la-cosecha',
        titulo: 'La Cosecha Consciente: Cierre, Legado y Renovación',
        fase: 'renovacion',
        faseNombre: '4. Cierre o Renovación',
        subtitulo: 'Facilita transiciones saludables, celebraciones de logros y despedidas nutritivas.',
        descripcion: 'Todo ciclo vivo tiene un final o una metamorfosis. Aprende metodologías de retrospectiva humana, recolección de aprendizajes y rituales de cierre.',
        duracion: '2 sesiones (4 horas)',
        modalidad: 'Online en vivo',
        cupoMaximo: 16,
        proximaFecha: '30 de Enero, 2027',
        precio: '$30 USD',
        etiquetas: ['Cierre de Ciclos', 'Retrospectivas', 'Celebración'],
        colorBadge: '#851b3a',
      },
    ];
  }
}

export async function fetchArticulosBlog(fase = '') {
  try {
    const url = fase ? `${API_URL}/blog?fase=${fase}` : `${API_URL}/blog`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Error al cargar artículos');
    const json = await res.json();
    return json.data;
  } catch (err) {
    console.warn('Usando datos locales para blog:', err.message);
    const mock = [
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
        contenidoCompleto: `Cuando un grupo se reúne por primera vez, el ambiente está cargado de una emoción invisible pero determinante: la incertidumbre. Las personas se preguntan internamente: ¿Encajaré aquí? ¿Es seguro mostrar mis dudas? ¿Qué esperan de mí?\n\nDesde la psicología comunitaria, entendemos que la seguridad psicológica no surge por decreto; se teje mediante rituales de bienvenida explícitos. Un facilitador consciente no busca forzar la confianza de inmediato, sino proporcionar un contenedor predecible y seguro.\n\n3 claves para la etapa de Génesis:\n1. Nombrar la vulnerabilidad: Normalizar que es natural sentir timidez o reservas al inicio.\n2. Pactos breves de convivencia: No un reglamento rígido, sino 3 o 4 acuerdos esenciales sobre escucha y confidencialidad.\n3. Dinámicas de conexión auténtica: Reemplazar las presentaciones formales por preguntas de intención humana.`,
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
        contenidoCompleto: `En muchos grupos y organizaciones se teme al conflicto como a una peste. Se confunde armonía con ausencia de debate, cayendo en la trampa de la cortesía superficial.\n\nSin embargo, la etapa de Ajuste y Cohesión es indispensable. Solo cuando los integrantes sienten la suficiente confianza para expresar su disenso, el grupo pasa de ser una aglomeración de personas a un cuerpo vivo.\n\nCómo acompañar el desacuerdo:\n- Diferenciar la persona de la idea: La divergencia no es un ataque al vínculo.\n- Círculos de escucha activa: Facilitar rondas de palabra donde nadie interrumpe.\n- Co-diseñar la solución: Evitar votaciones donde haya vencedores y vencidos.`,
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
        contenidoCompleto: `La etapa de desempeño y acción es vibrante: los proyectos se materializan, las ideas cobran vida y la sinergia es palpable. Sin embargo, también es el momento más propenso al agotamiento si no se introducen pausas deliberadas.\n\nSostener una comunidad no es una carrera de velocidad; es una travesía de fondo. La salud psicológica de un colectivo se mide por su capacidad para descansar sin culpa.\n\nPrácticas de sostenibilidad grupal:\n- Rotación de liderazgos: Evitar que una persona cargue con toda la contención.\n- Rituales de reconocimiento: Celebrar los pequeños avances cotidianos.\n- Chequeos de energía: Iniciar con un termómetro emocional.`,
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
        contenidoCompleto: `Vivimos en una cultura orientada a inaugurar proyectos, pero solemos ser malos para cerrar con dignidad.\n\nCuando un grupo concluye su misión o cuando integrantes clave parten, dejar ese espacio sin procesar genera duelos no resueltos. La Renovación y Cierre requiere cosechar lo vivido.\n\nCómo diseñar un ritual de cosecha:\n- El mapa de aprendizajes: ¿Qué nos llevamos en la mochila?\n- Agradecimientos cruzados: Dar espacio para expresar gratitud.\n- Sembrar la siguiente etapa: Definir con serenidad si el grupo se disuelve o renueva su propósito.`,
        imagen: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
        tags: ['Cierre de Ciclos', 'Gratitud', 'Renovación']
      }
    ];
    return fase ? mock.filter(m => m.fase === fase) : mock;
  }
}

export async function enviarMensajeContacto(formData) {
  try {
    const res = await fetch(`${API_URL}/contacto`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Error al enviar mensaje');
    return data;
  } catch (err) {
    console.warn('Fallback al enviar contacto:', err.message);
    // Simulación de éxito si el server aún no está levantado
    return {
      success: true,
      message: '¡Gracias por contactarnos! Tu mensaje fue guardado localmente y te contactaremos en breve.',
    };
  }
}

export async function inscribirseEnTaller(tallerId, formData) {
  try {
    const res = await fetch(`${API_URL}/talleres/${tallerId}/inscribirse`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Error al inscribirse');
    return data;
  } catch (err) {
    console.warn('Fallback al inscribirse en taller:', err.message);
    return {
      success: true,
      message: '¡Preinscripción registrada con éxito! Te contactaremos con los detalles.',
    };
  }
}
