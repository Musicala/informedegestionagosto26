/** Informe de gestión consolidado - MUSICALA / GMMMC. Julio–agosto de 2026. */
const INFORME_DATA = {
  mes: "Julio – Agosto",
  anio: "2026",
  meses: [7, 8],
  periodo: "1 de julio al 31 de agosto de 2026",
  institucion: "Fundación San Antonio - GMMMC",
  proyecto: "Clases extracurriculares de danza y porras",
  areas: ["Danzas", "Porras"],
  responsable: "MUSICALA",
  coordinador: "",
  fase: "Presentación del Día de la Familia y fortalecimiento técnico progresivo",
  indicadores: {
    sesionesProgramadas: 1,
    sesionesRealizadas: 12,
    cumplimiento: "No comparable",
    puntualidadDocentes: "100%",
    cambiosDocente: 1,
    nnaAtendidos: "52 / 11",
    horasProgramadas: null,
    horasRealizadas: 24,
    observacionGeneral: "Se realizaron 12 sesiones y 24 horas de formación. La programación registrada (0 sesiones en julio y 1 en agosto) no refleja la totalidad de actividades ejecutadas; por ello no se reporta un porcentaje consolidado. Los 52 NNA de julio y 11 de agosto son reportes mensuales y no deben sumarse como participantes únicos. El 28 de julio se realizó un cambio de docente líder en Danzas con empalme pedagógico favorable."
  },
  resumenEjecutivo: "Durante julio y agosto de 2026 se dio continuidad al proceso de formación artística y corporal de la Fundación San Antonio - GMMMC. En julio se recuperaron rutinas, se fortaleció la memoria corporal y coreográfica y se preparó la presentación del Día de la Familia del 1 de agosto. El 28 de julio Diana Cortés asumió el liderazgo de Danzas tras un empalme pedagógico organizado con Eryck Martínez, sin afectar significativamente la continuidad del proceso. Después de la presentación se inició un nuevo ciclo de fortalecimiento técnico, físico y expresivo en danza y porras. Se reportaron 12 sesiones, 24 horas de formación y puntualidad docente del 100%.",
  avances: [
    "Recuperación del ritmo de trabajo después de las vacaciones y consolidación de las rutinas para el Día de la Familia.",
    "Presentación realizada el 1 de agosto, con mayor seguridad escénica y coordinación grupal.",
    "Fortalecimiento de la memoria muscular y coreográfica, las posiciones, los desplazamientos y las planimetrías.",
    "Avances en técnica de giros, gimnasia, fuerza, flexibilidad, estabilidad y control corporal.",
    "Uso de repetición, aprendizaje acumulativo y pequeñas creaciones coreográficas para integrar habilidades.",
    "Seguimiento diferenciado de Danzas y Porras mediante bitácoras, asistencias, informes docentes y evidencias digitales."
  ],
  retos: [
    "La asistencia irregular de algunas estudiantes afecta la continuidad individual, las planimetrías, los grupos acrobáticos y los montajes colectivos.",
    "Las condiciones climáticas limitaron en determinados momentos los ejercicios físicos y de gimnasia.",
    "Continuar fortaleciendo ritmo, disociación corporal, concentración, precisión y limpieza de los movimientos.",
    "Profundizar en fuerza, estabilidad, transiciones, coordinación, sincronización grupal y aplicación de correcciones.",
    "Fortalecer la convivencia, el respeto entre compañeras y la valoración de cada integrante como parte del equipo."
  ],
  novedades: [
    "El 28 de julio de 2026 se realizó el cambio de docente líder de Danzas: Eryck Martínez finalizó su vinculación por nuevos compromisos laborales y Diana Cortés asumió el proceso. El empalme compartió las dinámicas del grupo, coreografías, contenidos, avances y aspectos por continuar; la familiaridad previa de Diana con las estudiantes facilitó una transición organizada y favorable.",
    "La presentación del Día de la Familia del 1 de agosto cerró el ciclo de preparación escénica y aportó insumos para el nuevo ciclo formativo.",
    "En Danzas se inició una metodología progresiva y acumulativa para técnica de giros, core, flexibilidad, coordinación, ritmo, disociación y creación coreográfica.",
    "En Porras se incorporaron ejercicios de gimnasia, arcos, rollos, medialunas, paradas de manos, flexibilidad y nuevos segmentos coreográficos.",
    "Ingresaron nuevas estudiantes al grupo Junior, lo que requiere mantener un seguimiento diferenciado por nivel de desarrollo."
  ],
  procesosPorArea: [
    {
      area: "Danzas", icono: "💃", color: "#6B3FA0",
      descripcion: "Durante julio se realizaron ensayos y repasos para el Día de la Familia; después de la presentación se inició un ciclo técnico progresivo de coordinación, ritmo, disociación, flexibilidad, giros y creación coreográfica.",
      sesionesProgramadas: "No desagregado", sesionesRealizadas: "No desagregado", participantes: "Ver nota",
      avances: ["Mayor seguridad en la ejecución, recordación de secuencias, sincronización, desplazamientos y coordinación grupal.", "Mejor comprensión de los giros, control corporal y capacidad para integrar movimientos previos en nuevas secuencias.", "Las pequeñas frases coreográficas permitieron integrar memoria, coordinación, ritmo, técnica y disociación."],
      retos: ["Fortalecer transiciones, concentración durante la ejecución, ritmo y mantenimiento del pulso.", "La ausencia de vestuario en algunos ensayos limitó la simulación completa de la presentación."],
      proyeccion: "Mantener la metodología acumulativa, fortalecer core, técnica de giros, flexibilidad, ritmo y disociación, y avanzar en nuevos montajes.",
      cumplimiento: "No comparable"
    },
    {
      area: "Porras", icono: "🎀", color: "#D43B8A",
      descripcion: "El periodo incluyó repaso y ajuste de posiciones, marcaciones, planimetrías y grupos acrobáticos para la presentación, seguido por fortalecimiento de gimnasia, fuerza, estabilidad y limpieza técnica.",
      sesionesProgramadas: "No desagregado", sesionesRealizadas: "No desagregado", participantes: "Ver nota",
      avances: ["Fortalecimiento de memoria muscular, posiciones, cambios, ubicación en rutina y ejecución con conteo.", "Avances en arcos, rollos, medialunas, paradas de manos con caída en arco, flexibilidad y trabajo en parejas.", "Incorporación progresiva de nuevas habilidades y segmentos dentro de los montajes coreográficos."],
      retos: ["Las ausencias, salidas pedagógicas y falta de continuidad de algunas integrantes afectaron planimetrías y ensayos colectivos.", "Continuar fortaleciendo fuerza, resistencia, estabilidad, sincronización y limpieza técnica."],
      proyeccion: "Profundizar el trabajo gimnástico según las necesidades de cada estudiante e integrar las habilidades adquiridas en futuros montajes.",
      cumplimiento: "No comparable"
    }
  ],
  cumplimientoHorarios: {
    descripcion: "Durante julio y agosto el equipo de MUSICALA mantuvo puntualidad docente del 100% en las actividades reportadas. Se registraron 25 reportes de puntualidad, todos puntuales. El cambio de docente líder de Danzas del 28 de julio se desarrolló con un empalme pedagógico organizado, sin afectar significativamente la ejecución de las actividades.",
    porcentajeAsistenciaDocentes: "100%",
    observaciones: "El seguimiento contó con 12 registros de asistencia, 32 bitácoras, 3 informes mensuales docentes y 88 registros de galería o evidencias. No se registraron diagnósticos, proyectos ni muestras de proceso durante el periodo."
  },
  tableroUrl: "",
  tableroTitulo: "Tablero de seguimiento GMMMC 2026",
  evidencias: [
    { nombre: "Galería de fotos del periodo", descripcion: "88 registros de galería o evidencias de ensayos, presentación y fortalecimiento técnico. Inicia sesión para ver las imágenes cargadas en Firebase.", url: "", estado: "Disponible", tipo: "galeria", fuente: "fotos" },
    { nombre: "Planillas de asistencia", descripcion: "12 registros de asistencia correspondientes a julio y agosto.", url: "", estado: "Disponible", tipo: "asistencia", fuente: "asistencias" },
    { nombre: "Registros de puntualidad", descripcion: "25 registros de puntualidad, todos reportados como puntuales (100%).", url: "", estado: "Disponible", tipo: "registro", fuente: "puntualidad" },
    { nombre: "Bitácoras docentes", descripcion: "32 bitácoras con objetivos, avances, retos y proyecciones pedagógicas del periodo.", url: "", estado: "Disponible", tipo: "registro", fuente: "bitacoras" },
    { nombre: "Informes mensuales docentes", descripcion: "3 informes mensuales docentes del periodo consolidado.", url: "", estado: "Disponible", tipo: "carpeta", fuente: "informes" }
  ],
  recomendaciones: [
    "Mantener la metodología progresiva y acumulativa, retomando aprendizajes previos e incorporando nuevas habilidades gradualmente.",
    "Fortalecer ritmo, disociación corporal, técnica de giros, core, flexibilidad y control corporal.",
    "Profundizar el trabajo de gimnasia, fuerza, resistencia y estabilidad según las capacidades de cada estudiante.",
    "Continuar utilizando pequeñas creaciones coreográficas para integrar y evaluar habilidades.",
    "Promover asistencia constante, seguimiento diferenciado por grupos y ajuste de las cargas según las condiciones del grupo.",
    "Mantener las herramientas digitales de seguimiento y fortalecer la convivencia, el respeto y el trabajo colaborativo."
  ],
  comentariosFinales: "El balance consolidado de julio y agosto de 2026 evidencia una evolución favorable del proceso formativo. Julio permitió recuperar aprendizajes, consolidar rutinas y preparar a las estudiantes para un objetivo artístico concreto; la presentación del Día de la Familia cerró esa etapa. El cambio de docente líder de Danzas realizado el 28 de julio contó con un empalme favorable y permitió preservar la continuidad pedagógica y el vínculo con las estudiantes. Durante agosto se avanzó hacia una formación técnica y progresiva en gimnasia, fuerza, flexibilidad, coordinación, ritmo, disociación, memoria y creación coreográfica. Será fundamental sostener la asistencia, fortalecer los aspectos técnicos identificados y mantener experiencias que integren aprendizaje, creación artística, disciplina, trabajo en equipo y desarrollo corporal.",
  firmas: [
    { cargo: "Coordinación Musicala", nombre: "Jimmy Alexander Caballero Moreno", fecha: "Bogotá, agosto de 2026" },
    { cargo: "Docente - Porras", nombre: "Natalia Moreno", fecha: "Bogotá, agosto de 2026" },
    { cargo: "Docente - Danzas", nombre: "", fecha: "Bogotá, agosto de 2026" },
    { cargo: "Enlace GMMMC / Vo.Bo. Institución", nombre: "", fecha: "Bogotá, agosto de 2026" }
  ]
};
