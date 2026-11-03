// Motivos geométricos minimalistas en SVG para las fichas cinematográficas
const MOTIFS = {
  orbit: `
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2">
      <circle cx="40" cy="40" r="26" />
      <circle cx="40" cy="40" r="16" stroke-dasharray="3 3" />
      <line x1="14" y1="40" x2="66" y2="40" />
    </svg>
  `,
  crosshair: `
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2">
      <circle cx="40" cy="40" r="22" />
      <line x1="40" y1="10" x2="40" y2="70" />
      <line x1="10" y1="40" x2="70" y2="40" />
    </svg>
  `,
  arch: `
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2">
      <path d="M16 54 Q 40 18, 64 54" />
      <path d="M22 44 Q 40 14, 58 44" opacity="0.65" />
      <line x1="20" y1="60" x2="60" y2="60" />
    </svg>
  `,
  frame: `
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2">
      <rect x="18" y="18" width="44" height="44" rx="4" />
      <circle cx="40" cy="40" r="11" />
      <line x1="40" y1="18" x2="40" y2="29" />
      <line x1="40" y1="51" x2="40" y2="62" />
    </svg>
  `,
  prism: `
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2">
      <polygon points="40,14 66,60 14,60" />
      <line x1="40" y1="14" x2="40" y2="60" opacity="0.6" />
    </svg>
  `,
  hourglass: `
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2">
      <polygon points="22,18 58,18 40,40" />
      <polygon points="22,62 58,62 40,40" />
      <line x1="18" y1="18" x2="62" y2="18" />
      <line x1="18" y1="62" x2="62" y2="62" />
    </svg>
  `
};

// Catálogo amplio de 25 películas y series muy reconocidas y populares en todo tipo de géneros
const CATALOG = [
  // CIENCIA FICCIÓN Y FUTURO
  {
    id: 'interstellar',
    title: 'Interestelar (Interstellar)',
    director: 'Dirección: Christopher Nolan · Estados Unidos',
    year: '2014',
    minutes: 169,
    isSeries: false,
    catalogCode: 'CAT · 001',
    posterTheme: 'poster-mist',
    motif: MOTIFS.orbit,
    affinity: '98% de afinidad',
    tones: ['Intenso y envolvente', 'Reflexivo y pausado'],
    keywords: ['ciencia ficción', 'ciencia ficcion', 'espacio', 'espacial', 'planeta', 'agujero', 'viaje', 'tiempo', 'futuro', 'astronauta', 'universo'],
    meta: ['Ciencia ficción · Aventura espacial', '169 minutos', 'Valoración 8.7 / 10'],
    synopsis:
      'Un grupo de exploradores viaja a través de un agujero de gusano en el espacio con la misión de encontrar un nuevo planeta habitable para la humanidad, combinando espectáculo visual con una historia muy emotiva entre un padre y su hija.',
    platforms: ['Max', 'Prime Video', 'Apple TV']
  },
  {
    id: 'inception',
    title: 'El origen (Inception)',
    director: 'Dirección: Christopher Nolan · Estados Unidos',
    year: '2010',
    minutes: 148,
    isSeries: false,
    catalogCode: 'CAT · 002',
    posterTheme: 'poster-sage',
    motif: MOTIFS.prism,
    affinity: '98% de afinidad',
    tones: ['Intenso y envolvente', 'Ágil y entretenido'],
    keywords: ['ciencia ficción', 'ciencia ficcion', 'sueños', 'mente', 'acción', 'accion', 'suspenso', 'final', 'inteligente', 'robo', 'dicaprio'],
    meta: ['Ciencia ficción · Acción y suspenso', '148 minutos', 'Valoración 8.8 / 10'],
    synopsis:
      'Un especialista en infiltrarse en el subconsciente recibe el encargo más difícil de su carrera: implantar una idea dentro de los sueños de un heredero empresarial a través de múltiples niveles mentales llenos de acción.',
    platforms: ['Max', 'Prime Video', 'Apple TV']
  },
  {
    id: 'back-to-future',
    title: 'Volver al futuro (Back to the Future)',
    director: 'Dirección: Robert Zemeckis · Estados Unidos',
    year: '1985',
    minutes: 116,
    isSeries: false,
    catalogCode: 'CAT · 003',
    posterTheme: 'poster-sand',
    motif: MOTIFS.hourglass,
    affinity: '97% de afinidad',
    tones: ['Ágil y entretenido', 'Cálido y cercano'],
    keywords: ['viajes en el tiempo', 'tiempo', 'ciencia ficción', 'ciencia ficcion', 'aventura', 'clásico', 'clasico', 'divertida', 'comedia', 'familiar'],
    meta: ['Ciencia ficción · Aventura y comedia', '116 minutos', 'Valoración 8.5 / 10'],
    synopsis:
      'Un adolescente viaja accidentalmente treinta años al pasado en un automóvil modificado como máquina del tiempo y debe asegurarse de que sus padres se enamoren para no desaparecer del presente.',
    platforms: ['Netflix', 'Prime Video', 'Universal+']
  },
  {
    id: 'avatar',
    title: 'Avatar',
    director: 'Dirección: James Cameron · Estados Unidos',
    year: '2009',
    minutes: 162,
    isSeries: false,
    catalogCode: 'CAT · 004',
    posterTheme: 'poster-sage',
    motif: MOTIFS.orbit,
    affinity: '95% de afinidad',
    tones: ['Intenso y envolvente', 'Ágil y entretenido'],
    keywords: ['avatar', 'pandora', 'ciencia ficción', 'ciencia ficcion', 'aventura', 'fantasía', 'fantasia', 'naturaleza', 'efectos', 'planeta'],
    meta: ['Ciencia ficción · Aventura épica', '162 minutos', 'Valoración 7.9 / 10'],
    synopsis:
      'En el exuberante planeta Pandora, un exmarine parapléjico se vincula con un cuerpo biológico creado por científicos y termina debatiéndose entre seguir órdenes militares o proteger el mundo que ahora siente como su hogar.',
    platforms: ['Disney+']
  },

  // ACCIÓN, SUPERHÉROES Y ADRENALINA
  {
    id: 'dark-knight',
    title: 'Batman: El caballero de la noche',
    director: 'Dirección: Christopher Nolan · Estados Unidos',
    year: '2008',
    minutes: 152,
    isSeries: false,
    catalogCode: 'CAT · 005',
    posterTheme: 'poster-mist',
    motif: MOTIFS.crosshair,
    affinity: '99% de afinidad',
    tones: ['Intenso y envolvente', 'Ágil y entretenido'],
    keywords: ['batman', 'joker', 'guason', 'superhéroes', 'superheroes', 'acción', 'accion', 'policial', 'crimen', 'suspenso', 'dc'],
    meta: ['Acción · Policial y suspenso', '152 minutos', 'Valoración 9.0 / 10'],
    synopsis:
      'Batman, el teniente Gordon y el fiscal Harvey Dent unen fuerzas para desmantelar el crimen organizado en Ciudad Gótica, pero se enfrentan al Joker, una mente criminal brillante que busca sembrar el caos total.',
    platforms: ['Max', 'Prime Video']
  },
  {
    id: 'avengers-endgame',
    title: 'Avengers: Endgame',
    director: 'Dirección: Anthony y Joe Russo · Estados Unidos',
    year: '2019',
    minutes: 181,
    isSeries: false,
    catalogCode: 'CAT · 006',
    posterTheme: 'poster-clay',
    motif: MOTIFS.prism,
    affinity: '97% de afinidad',
    tones: ['Intenso y envolvente', 'Ágil y entretenido'],
    keywords: ['marvel', 'vengadores', 'avengers', 'superhéroes', 'superheroes', 'acción', 'accion', 'iron man', 'aventura', 'épica', 'epica'],
    meta: ['Acción · Superhéroes y aventura', '181 minutos', 'Valoración 8.4 / 10'],
    synopsis:
      'Tras los devastadores sucesos provocados por Thanos, los Vengadores restantes idean un arriesgado plan a través del tiempo para recuperar las Gemas del Infinito y restaurar el equilibrio del universo.',
    platforms: ['Disney+']
  },
  {
    id: 'top-gun-maverick',
    title: 'Top Gun: Maverick',
    director: 'Dirección: Joseph Kosinski · Estados Unidos',
    year: '2022',
    minutes: 130,
    isSeries: false,
    catalogCode: 'CAT · 007',
    posterTheme: 'poster-sand',
    motif: MOTIFS.prism,
    affinity: '98% de afinidad',
    tones: ['Ágil y entretenido', 'Intenso y envolvente'],
    keywords: ['acción', 'accion', 'adrenalina', 'aviones', 'pilotos', 'tom cruise', 'emocionante', 'rápida', 'rapida', 'reciente'],
    meta: ['Acción · Aventura aérea', '130 minutos', 'Valoración 8.2 / 10'],
    synopsis:
      'Después de más de treinta años de servicio como uno de los mejores aviadores de la Armada, Pete «Maverick» Mitchell debe entrenar a un grupo de jóvenes graduados para una misión aérea casi imposible.',
    platforms: ['Netflix', 'Paramount+', 'Prime Video']
  },
  {
    id: 'john-wick',
    title: 'John Wick: Otro día para matar',
    director: 'Dirección: Chad Stahelski · Estados Unidos',
    year: '2014',
    minutes: 101,
    isSeries: false,
    catalogCode: 'CAT · 008',
    posterTheme: 'poster-mist',
    motif: MOTIFS.crosshair,
    affinity: '96% de afinidad',
    tones: ['Intenso y envolvente', 'Ágil y entretenido'],
    keywords: ['acción', 'accion', 'peleas', 'venganza', 'adrenalina', 'disparos', 'keanu reeves', 'corta', 'intensa'],
    meta: ['Acción · Suspenso', '101 minutos', 'Valoración 7.4 / 10'],
    synopsis:
      'Un legendario exasesino a sueldo sale de su retiro para rastrear a los gánsteres que irrumpieron en su casa y le arrebataron el último recuerdo que conservaba de su esposa fallecida.',
    platforms: ['Prime Video', 'Netflix', 'Lionsgate+']
  },
  {
    id: 'gladiator',
    title: 'Gladiador (Gladiator)',
    director: 'Dirección: Ridley Scott · Estados Unidos / Reino Unido',
    year: '2000',
    minutes: 155,
    isSeries: false,
    catalogCode: 'CAT · 009',
    posterTheme: 'poster-sand',
    motif: MOTIFS.arch,
    affinity: '97% de afinidad',
    tones: ['Intenso y envolvente', 'Reflexivo y pausado'],
    keywords: ['historia', 'histórica', 'historica', 'roma', 'gladiador', 'acción', 'accion', 'épica', 'epica', 'batallas', 'honor'],
    meta: ['Acción histórica · Drama épico', '155 minutos', 'Valoración 8.5 / 10'],
    synopsis:
      'Traicionado por el ambicioso hijo del emperador y despojado de su rango y su familia, el general romano Máximo regresa a Roma como gladiador para buscar justicia en la arena del Coliseo.',
    platforms: ['Netflix', 'Prime Video', 'Paramount+']
  },

  // SUSPENSO, MISTERIO Y POLICIAL
  {
    id: 'shutter-island',
    title: 'La isla siniestra (Shutter Island)',
    director: 'Dirección: Martin Scorsese · Estados Unidos',
    year: '2010',
    minutes: 138,
    isSeries: false,
    catalogCode: 'CAT · 010',
    posterTheme: 'poster-mist',
    motif: MOTIFS.crosshair,
    affinity: '98% de afinidad',
    tones: ['Intenso y envolvente', 'Reflexivo y pausado'],
    keywords: ['suspenso', 'thriller', 'misterio', 'investigación', 'investigacion', 'psicológico', 'psicologico', 'giros', 'final sorprendente', 'policial', 'detective'],
    meta: ['Suspenso psicológico · Misterio', '138 minutos', 'Valoración 8.2 / 10'],
    synopsis:
      'Dos agentes federales viajan a una remota isla donde funciona un hospital psiquiátrico de máxima seguridad para investigar la misteriosa desaparición de una paciente, descubriendo una red de secretos inquietantes.',
    platforms: ['Netflix', 'Paramount+', 'Prime Video']
  },
  {
    id: 'parasite',
    title: 'Parásitos (Parasite)',
    director: 'Dirección: Bong Joon-ho · Corea del Sur',
    year: '2019',
    minutes: 132,
    isSeries: false,
    catalogCode: 'CAT · 011',
    posterTheme: 'poster-olive',
    motif: MOTIFS.frame,
    affinity: '98% de afinidad',
    tones: ['Intenso y envolvente', 'Ágil y entretenido'],
    keywords: ['suspenso', 'thriller', 'drama', 'giros', 'oscar', 'coreana', 'familia', 'intriga', 'sorprendente'],
    meta: ['Suspenso · Drama y comedia negra', '132 minutos', 'Valoración 8.5 / 10'],
    synopsis:
      'Los integrantes de una familia con dificultades económicas logran emplearse uno a uno en la lujosa mansión de una familia adinerada, desatando una serie de acontecimientos tan impredecibles como atrapantes.',
    platforms: ['Max', 'Netflix', 'Prime Video']
  },
  {
    id: 'now-you-see-me',
    title: 'Los ilusionistas: Nada es lo que parece',
    director: 'Dirección: Louis Leterrier · Estados Unidos',
    year: '2013',
    minutes: 115,
    isSeries: false,
    catalogCode: 'CAT · 012',
    posterTheme: 'poster-sage',
    motif: MOTIFS.prism,
    affinity: '95% de afinidad',
    tones: ['Ágil y entretenido', 'Intenso y envolvente'],
    keywords: ['magia', 'ilusionistas', 'robo', 'misterio', 'policial', 'fbi', 'entretenida', 'giros', 'rápida', 'rapida'],
    meta: ['Suspenso · Misterio y entretenimiento', '115 minutos', 'Valoración 7.2 / 10'],
    synopsis:
      'Un agente del FBI y una detective de la Interpol intentan atrapar a un equipo de ilusionistas de élite que ejecuta audaces robos bancarios en pleno espectáculo frente al público.',
    platforms: ['Netflix', 'Prime Video']
  },

  // COMEDIA, ANIMACIÓN Y CINE FAMILIAR
  {
    id: 'coco',
    title: 'Coco',
    director: 'Dirección: Lee Unkrich · Estados Unidos (Pixar)',
    year: '2017',
    minutes: 105,
    isSeries: false,
    catalogCode: 'CAT · 013',
    posterTheme: 'poster-clay',
    motif: MOTIFS.arch,
    affinity: '99% de afinidad',
    tones: ['Cálido y cercano', 'Ágil y entretenido'],
    keywords: ['familia', 'familiar', 'animada', 'animación', 'animacion', 'pixar', 'disney', 'música', 'musica', 'emotiva', 'bonita', 'fin de semana'],
    meta: ['Animación · Familiar y musical', '105 minutos', 'Valoración 8.4 / 10'],
    synopsis:
      'Miguel, un niño que sueña con convertirse en un gran músico, entra accidentalmente en la colorida Tierra de los Muertos, donde emprende un viaje inolvidable para descubrir la verdadera historia de su familia.',
    platforms: ['Disney+']
  },
  {
    id: 'shrek',
    title: 'Shrek',
    director: 'Dirección: Andrew Adamson y Vicky Jenson · Estados Unidos',
    year: '2001',
    minutes: 90,
    isSeries: false,
    catalogCode: 'CAT · 014',
    posterTheme: 'poster-olive',
    motif: MOTIFS.frame,
    affinity: '98% de afinidad',
    tones: ['Ágil y entretenido', 'Cálido y cercano'],
    keywords: ['comedia', 'reír', 'reir', 'divertida', 'animada', 'animación', 'animacion', 'shrek', 'familia', 'familiar', 'corta', 'fin de semana'],
    meta: ['Comedia · Animación y aventura', '90 minutos', 'Valoración 7.9 / 10'],
    synopsis:
      'Para recuperar la tranquilidad de su pantano, un ogro solitario hace un trato con Lord Farquaad y se embarca junto a un burro muy parlanchín en la misión de rescatar a la princesa Fiona.',
    platforms: ['Netflix', 'Prime Video', 'Max']
  },
  {
    id: 'spider-verse',
    title: 'Spider-Man: Un nuevo universo',
    director: 'Dirección: Bob Persichetti y Peter Ramsey · Estados Unidos',
    year: '2018',
    minutes: 117,
    isSeries: false,
    catalogCode: 'CAT · 015',
    posterTheme: 'poster-clay',
    motif: MOTIFS.orbit,
    affinity: '97% de afinidad',
    tones: ['Ágil y entretenido', 'Intenso y envolvente'],
    keywords: ['spiderman', 'spider-man', 'hombre araña', 'animada', 'animación', 'animacion', 'superhéroes', 'superheroes', 'marvel', 'acción', 'accion', 'joven'],
    meta: ['Animación · Acción y superhéroes', '117 minutos', 'Valoración 8.4 / 10'],
    synopsis:
      'El adolescente Miles Morales descubre sus poderes arácnidos y se une a versiones de Spider-Man provenientes de distintas dimensiones para detener una amenaza que pone en peligro a toda la realidad.',
    platforms: ['Disney+', 'Prime Video']
  },
  {
    id: 'forrest-gump',
    title: 'Forrest Gump',
    director: 'Dirección: Robert Zemeckis · Estados Unidos',
    year: '1994',
    minutes: 142,
    isSeries: false,
    catalogCode: 'CAT · 016',
    posterTheme: 'poster-sand',
    motif: MOTIFS.arch,
    affinity: '98% de afinidad',
    tones: ['Cálido y cercano', 'Reflexivo y pausado'],
    keywords: ['comedia', 'drama', 'emotiva', 'inspiradora', 'motivadora', 'vida', 'clásico', 'clasico', 'tom hanks', 'familia', 'hermosa'],
    meta: ['Comedia dramática · Clásico moderno', '142 minutos', 'Valoración 8.8 / 10'],
    synopsis:
      'Con un corazón noble y un optimismo inquebrantable, Forrest Gump protagoniza sin proponérselo algunos de los momentos más importantes del siglo XX mientras nunca deja de pensar en su gran amor de la infancia.',
    platforms: ['Netflix', 'Paramount+', 'Prime Video']
  },
  {
    id: 'truman-show',
    title: 'The Truman Show: Historia de una vida',
    director: 'Dirección: Peter Weir · Estados Unidos',
    year: '1998',
    minutes: 103,
    isSeries: false,
    catalogCode: 'CAT · 017',
    posterTheme: 'poster-sage',
    motif: MOTIFS.frame,
    affinity: '97% de afinidad',
    tones: ['Cálido y cercano', 'Reflexivo y pausado'],
    keywords: ['comedia', 'jim carrey', 'original', 'reflexiva', 'corta', 'ligera', 'realidad', 'televisión', 'television', 'divertida'],
    meta: ['Comedia dramática · Sátira', '103 minutos', 'Valoración 8.2 / 10'],
    synopsis:
      'Truman Burbank lleva una vida aparentemente perfecta en una ciudad costera, sin sospechar que desde su nacimiento todo su entorno es un gigantesco estudio de televisión transmitido en directo al mundo entero.',
    platforms: ['Paramount+', 'Prime Video', 'Netflix']
  },
  {
    id: 'hangover',
    title: '¿Qué pasó ayer? (The Hangover)',
    director: 'Dirección: Todd Phillips · Estados Unidos',
    year: '2009',
    minutes: 100,
    isSeries: false,
    catalogCode: 'CAT · 018',
    posterTheme: 'poster-sand',
    motif: MOTIFS.prism,
    affinity: '96% de afinidad',
    tones: ['Ágil y entretenido'],
    keywords: ['comedia', 'reír', 'reir', 'carcajadas', 'amigos', 'fiesta', 'las vegas', 'divertida', 'chistosa', 'graciosa', 'corta'],
    meta: ['Comedia · Humor y enredos', '100 minutos', 'Valoración 7.7 / 10'],
    synopsis:
      'Dos días antes de su boda, un novio y sus tres amigos viajan a Las Vegas para una despedida de soltero inolvidable; a la mañana siguiente despiertan sin recordar absolutamente nada y con el novio desaparecido.',
    platforms: ['Max', 'Prime Video']
  },

  // TERROR Y ESCALOFRÍOS
  {
    id: 'conjuring',
    title: 'El conjuro (The Conjuring)',
    director: 'Dirección: James Wan · Estados Unidos',
    year: '2013',
    minutes: 112,
    isSeries: false,
    catalogCode: 'CAT · 019',
    posterTheme: 'poster-olive',
    motif: MOTIFS.prism,
    affinity: '98% de afinidad',
    tones: ['Intenso y envolvente'],
    keywords: ['terror', 'miedo', 'paranormal', 'fantasmas', 'espíritus', 'espiritus', 'casa', 'demonios', 'sustos', 'conjuro', 'basada en hechos reales'],
    meta: ['Terror · Sobrenatural', '112 minutos', 'Valoración 7.5 / 10'],
    synopsis:
      'Los reconocidos investigadores paranormales Ed y Lorraine Warren acuden a ayudar a una familia aterrorizada por una presencia oscura en su granja aislada, enfrentándose al caso más peligroso de sus vidas.',
    platforms: ['Max', 'Prime Video']
  },
  {
    id: 'quiet-place',
    title: 'Un lugar en silencio (A Quiet Place)',
    director: 'Dirección: John Krasinski · Estados Unidos',
    year: '2018',
    minutes: 90,
    isSeries: false,
    catalogCode: 'CAT · 020',
    posterTheme: 'poster-mist',
    motif: MOTIFS.crosshair,
    affinity: '96% de afinidad',
    tones: ['Intenso y envolvente', 'Ágil y entretenido'],
    keywords: ['terror', 'suspenso', 'tensión', 'tension', 'monstruos', 'silencio', 'supervivencia', 'corta', 'miedo', 'psicológico', 'psicologico'],
    meta: ['Terror y suspenso · Supervivencia', '90 minutos', 'Valoración 7.5 / 10'],
    synopsis:
      'En un mundo invadido por criaturas letales que cazan guiándose por el sonido, una familia debe vivir en absoluto silencio comunicándose con lenguaje de señas para sobrevivir cada día.',
    platforms: ['Netflix', 'Paramount+', 'Prime Video']
  },

  // ROMANCE, DRAMA E HISTORIA
  {
    id: 'la-la-land',
    title: 'La La Land: Una historia de amor',
    director: 'Dirección: Damien Chazelle · Estados Unidos',
    year: '2016',
    minutes: 128,
    isSeries: false,
    catalogCode: 'CAT · 021',
    posterTheme: 'poster-clay',
    motif: MOTIFS.arch,
    affinity: '97% de afinidad',
    tones: ['Cálido y cercano', 'Reflexivo y pausado'],
    keywords: ['romance', 'romántica', 'romantica', 'amor', 'pareja', 'música', 'musica', 'musical', 'sueños', 'drama', 'bonita'],
    meta: ['Romance · Drama musical', '128 minutos', 'Valoración 8.0 / 10'],
    synopsis:
      'Una aspirante a actriz y un apasionado pianista de jazz se enamoran en Los Ángeles mientras luchan por alcanzar sus sueños artísticos en una ciudad que pone a prueba su relación.',
    platforms: ['Prime Video', 'Netflix', 'Apple TV']
  },
  {
    id: 'titanic',
    title: 'Titanic',
    director: 'Dirección: James Cameron · Estados Unidos',
    year: '1997',
    minutes: 194,
    isSeries: false,
    catalogCode: 'CAT · 022',
    posterTheme: 'poster-mist',
    motif: MOTIFS.arch,
    affinity: '97% de afinidad',
    tones: ['Cálido y cercano', 'Intenso y envolvente'],
    keywords: ['romance', 'romántica', 'romantica', 'amor', 'pareja', 'drama', 'llorar', 'emotiva', 'historia', 'barco', 'clásico', 'clasico'],
    meta: ['Romance · Drama histórico', '194 minutos', 'Valoración 7.9 / 10'],
    synopsis:
      'Un joven artista sin recursos y una joven de la alta sociedad viven una intensa historia de amor a bordo del transatlántico más famoso de la historia durante su fatídico viaje inaugural.',
    platforms: ['Disney+', 'Star+']
  },
  {
    id: 'oppenheimer',
    title: 'Oppenheimer',
    director: 'Dirección: Christopher Nolan · Estados Unidos',
    year: '2023',
    minutes: 180,
    isSeries: false,
    catalogCode: 'CAT · 023',
    posterTheme: 'poster-sand',
    motif: MOTIFS.orbit,
    affinity: '98% de afinidad',
    tones: ['Intenso y envolvente', 'Reflexivo y pausado'],
    keywords: ['historia', 'histórica', 'historica', 'hechos reales', 'biografía', 'biografia', 'guerra', 'ciencia', 'drama', 'oscar', 'reciente'],
    meta: ['Drama histórico · Biográfico', '180 minutos', 'Valoración 8.3 / 10'],
    synopsis:
      'Narra el papel decisivo del físico J. Robert Oppenheimer al frente del Proyecto Manhattan durante la Segunda Guerra Mundial y las profundas consecuencias morales y políticas que cambiaron el curso de la historia.',
    platforms: ['Max', 'Prime Video', 'Apple TV']
  },

  // SERIES Y MINISERIES MUY POPULARES
  {
    id: 'stranger-things',
    title: 'Stranger Things (Serie)',
    director: 'Creación: Hermanos Duffer · Estados Unidos',
    year: '2016',
    minutes: 280,
    isSeries: true,
    catalogCode: 'SER · 001',
    posterTheme: 'poster-clay',
    motif: MOTIFS.orbit,
    affinity: '98% de afinidad',
    tones: ['Ágil y entretenido', 'Intenso y envolvente'],
    keywords: ['serie', 'miniserie', 'misterio', 'ciencia ficción', 'ciencia ficcion', 'aventura', 'amigos', 'terror', 'años 80', 'sobrenatural', 'netflix'],
    meta: ['Serie de misterio y aventura', 'Episodios de 50 min', 'Valoración 8.7 / 10'],
    synopsis:
      'Cuando un niño desaparece misteriosamente en un pequeño pueblo de los años ochenta, su grupo de amigos, su familia y el jefe de policía descubren experimentos secretos y una niña con poderes extraordinarios.',
    platforms: ['Netflix']
  },
  {
    id: 'chernobyl',
    title: 'Chernobyl (Miniserie)',
    director: 'Creación: Craig Mazin · Estados Unidos / Reino Unido',
    year: '2019',
    minutes: 300,
    isSeries: true,
    catalogCode: 'SER · 002',
    posterTheme: 'poster-mist',
    motif: MOTIFS.hourglass,
    affinity: '99% de afinidad',
    tones: ['Intenso y envolvente', 'Reflexivo y pausado'],
    keywords: ['serie', 'miniserie', 'historia', 'histórica', 'historica', 'hechos reales', 'documental', 'drama', 'corta', 'capítulos', 'episodios'],
    meta: ['Miniserie histórica · 5 episodios', '5 capítulos en total', 'Valoración 9.3 / 10'],
    synopsis:
      'Miniserie corta de solo cinco episodios que recrea con enorme tensión e impacto real la historia de los hombres y mujeres que arriesgaron todo para contener la catástrofe de 1986.',
    platforms: ['Max']
  },
  {
    id: 'queens-gambit',
    title: 'Gambito de dama (Miniserie)',
    director: 'Creación: Scott Frank · Estados Unidos',
    year: '2020',
    minutes: 390,
    isSeries: true,
    catalogCode: 'SER · 003',
    posterTheme: 'poster-sage',
    motif: MOTIFS.hourglass,
    affinity: '97% de afinidad',
    tones: ['Ágil y entretenido', 'Cálido y cercano'],
    keywords: ['serie', 'miniserie', 'drama', 'superación', 'ajedrez', 'entretenida', 'corta', 'capítulos', 'episodios', 'netflix'],
    meta: ['Miniserie dramática · 7 episodios', '7 capítulos en total', 'Valoración 8.5 / 10'],
    synopsis:
      'Una joven huérfana descubre un talento extraordinario para el ajedrez y emprende un apasionante camino hasta enfrentarse a los mejores grandes maestros del mundo en una historia cerrada de una sola temporada.',
    platforms: ['Netflix']
  }
];

// Palabras claramente ajenas al dominio audiovisual (activan el mensaje de que la IA no puede responder)
const NON_CINEMA_PATTERNS = [
  'derivada',
  'ecuación',
  'ecuacion',
  'matemática',
  'matematica',
  'cálculo',
  'calculo',
  'receta de',
  'ingredientes para',
  'cómo cocinar',
  'como cocinar',
  'código en python',
  'codigo en python',
  'javascript',
  'programar un',
  'base de datos',
  'contrato mercantil',
  'declaración de renta',
  'impuestos',
  'contraseña',
  'clave bancaria',
  'diagnóstico médico',
  'diagnostico medico',
  'qué pastilla',
  'que pastilla',
  'síntomas de gripe',
  'clima en',
  'va a llover',
  'cotización del dólar',
  'precio del bitcoin',
  'escríbeme un ensayo',
  'hazme la tarea'
];

// Saludos sueltos sin solicitud concreta
const GREETING_ONLY = /^(hola|buenas|buenos dias|buenos días|buenas tardes|buenas noches|hey|qué tal|que tal|probando)[.!?\s]*$/i;

document.addEventListener('DOMContentLoaded', () => {
  // Elementos del formulario izquierdo
  const recommendationForm = document.getElementById('recommendationForm');
  const userPrompt = document.getElementById('userPrompt');
  const textareaBox = document.getElementById('textareaBox');
  const charCounter = document.getElementById('charCounter');
  const btnClearPrompt = document.getElementById('btnClearPrompt');
  const selectMood = document.getElementById('selectMood');
  const selectDuration = document.getElementById('selectDuration');
  const btnGenerate = document.getElementById('btnGenerate');
  const btnGenerateLabel = document.getElementById('btnGenerateLabel');
  const headerStatusText = document.getElementById('headerStatusText');
  const statusDot = document.querySelector('.status-dot');

  // Estados mutuamente excluyentes del panel derecho
  const emptyState = document.getElementById('emptyState');
  const loadingSection = document.getElementById('loadingSection');
  const loadingStepText = document.getElementById('loadingStepText');
  const responseSection = document.getElementById('responseSection');
  const errorSection = document.getElementById('errorSection');
  const errorHeading = document.getElementById('errorHeading');
  const errorText = document.getElementById('errorText');

  // Elementos internos de la respuesta generada
  const refinementBadge = document.getElementById('refinementBadge');
  const displayedUserQuery = document.getElementById('displayedUserQuery');
  const moviePoster = document.getElementById('moviePoster');
  const movieCatalog = document.getElementById('movieCatalog');
  const posterMotif = document.getElementById('posterMotif');
  const movieYear = document.getElementById('movieYear');
  const movieTitle = document.getElementById('movieTitle');
  const movieDirector = document.getElementById('movieDirector');
  const movieMatch = document.getElementById('movieMatch');
  const movieMeta = document.getElementById('movieMeta');
  const aiResponseText = document.getElementById('aiResponseText');
  const moviePlatforms = document.getElementById('moviePlatforms');

  // Controles de corrección, edición y regeneración
  const btnOpenRefine = document.getElementById('btnOpenRefine');
  const btnEditPrompt = document.getElementById('btnEditPrompt');
  const btnRegenerate = document.getElementById('btnRegenerate');
  const refinePanel = document.getElementById('refinePanel');
  const refineInput = document.getElementById('refineInput');
  const btnApplyRefine = document.getElementById('btnApplyRefine');
  const btnCancelRefine = document.getElementById('btnCancelRefine');

  // Botones de utilidad
  const btnUsefulYes = document.getElementById('btnUsefulYes');
  const btnUsefulNo = document.getElementById('btnUsefulNo');
  const feedbackConfirmMsg = document.getElementById('feedbackConfirmMsg');

  // Acción desde estado sin respuesta
  const btnFocusPromptFromError = document.getElementById('btnFocusPromptFromError');

  let shownHistory = [];
  let isProcessing = false;
  let activeTimerStep = null;
  let activeTimerDone = null;

  // Mostrar únicamente un estado en el panel derecho (lógica real)
  function showRightPanelState(stateName) {
    emptyState.classList.toggle('hidden', stateName !== 'empty');
    loadingSection.classList.toggle('hidden', stateName !== 'loading');
    responseSection.classList.toggle('hidden', stateName !== 'response');
    errorSection.classList.toggle('hidden', stateName !== 'error');
  }

  // Actualizar contador y visibilidad del botón "Limpiar"
  function updatePromptUI() {
    const length = userPrompt.value.length;
    charCounter.textContent = `${length} / 300`;
    btnClearPrompt.classList.toggle('hidden', length === 0);
  }

  userPrompt.addEventListener('input', updatePromptUI);
  updatePromptUI();

  // Permitir enviar con Ctrl+Enter o Cmd+Enter
  userPrompt.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      event.preventDefault();
      recommendationForm.requestSubmit();
    }
  });

  // Limpiar solicitud
  btnClearPrompt.addEventListener('click', () => {
    userPrompt.value = '';
    updatePromptUI();
    userPrompt.focus();
  });

  // Sugerencias rápidas: rellenan la consulta para que el usuario la vea o envíe directamente
  document.querySelectorAll('.preset-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      if (isProcessing) return;
      userPrompt.value = chip.dataset.prompt;
      updatePromptUI();
      processUserConsultation({ mode: 'initial' });
    });
  });

  // Validar si el texto tiene sentido y pertenece al ámbito de cine y series
  function validateConsultation(rawText) {
    const text = rawText.trim();
    const lower = text.toLowerCase();

    if (!text) {
      return {
        canRespond: false,
        heading: 'Aún no ha escrito una solicitud',
        reason:
          'Escriba en el cuadro de consulta qué tipo de película, serie o ambiente desea ver para que la inteligencia artificial pueda generar una recomendación.'
      };
    }

    if (GREETING_ONLY.test(text)) {
      return {
        canRespond: false,
        heading: 'Faltan detalles para recomendarle una obra',
        reason:
          'Hemos recibido su saludo, pero necesitamos conocer qué le gustaría ver. Indique un género, estado de ánimo o película de referencia.'
      };
    }

    // Detectar texto sin vocales o pulsaciones aleatorias del teclado (ej. "asdfgh", "123456")
    const lettersOnly = lower.replace(/[^a-záéíóúüñ]/g, '');
    const vowelsOnly = lower.replace(/[^aeiouáéíóúü]/g, '');
    if (text.length < 4 || lettersOnly.length < 3 || vowelsOnly.length === 0) {
      return {
        canRespond: false,
        heading: 'No pudimos interpretar su solicitud',
        reason:
          'El texto ingresado es demasiado breve o no contiene palabras reconocibles. Por favor, describa con una frase sencilla qué tipo de historia desea ver.'
      };
    }

    // Detectar temas fuera del alcance de un recomendador audiovisual
    const isOffTopic = NON_CINEMA_PATTERNS.some((pattern) => lower.includes(pattern));
    const isMathOperation =
      /(\bcuánto es\b|\bcuanto es\b|\bresuelve\b|\bcalcula\b).*\d/i.test(lower) ||
      /^\d+\s*[\+\-\*\/]\s*\d+/.test(lower);

    if (isOffTopic || isMathOperation) {
      return {
        canRespond: false,
        heading: 'La IA no puede responder a esta consulta',
        reason:
          'CineMatch está entrenado únicamente para recomendar películas, series y documentales. No dispone de capacidad para resolver cálculos, tareas académicas ni consultas ajenas al cine.'
      };
    }

    return { canRespond: true };
  }

  // Seleccionar la mejor película puntuando palabras clave, filtros y evitando repetir las anteriores
  function selectBestMatch(searchText, excludeRecent = false) {
    const lower = searchText.toLowerCase();
    const mood = selectMood.value;
    const duration = selectDuration.value;

    const wantsShort =
      duration === 'Menos de 2 horas' ||
      lower.includes('corta') ||
      lower.includes('menos de dos horas') ||
      lower.includes('menos de 2 horas') ||
      lower.includes('breve');

    const wantsSeries =
      duration === 'Miniserie corta' ||
      lower.includes('serie') ||
      lower.includes('miniserie') ||
      lower.includes('capítulos') ||
      lower.includes('episodios');

    const wantsRecent =
      lower.includes('reciente') ||
      lower.includes('nueva') ||
      lower.includes('actual') ||
      lower.includes('moderna');

    const lastShownId = shownHistory.length > 0 ? shownHistory[shownHistory.length - 1] : null;

    const scored = CATALOG.map((item) => {
      let score = 0;

      // Coincidencia semántica por palabras clave
      item.keywords.forEach((kw) => {
        if (lower.includes(kw)) {
          score += 5;
        }
      });

      // Coincidencia con filtro de tono
      if (mood !== 'Cualquier tono' && item.tones.includes(mood)) {
        score += 3;
      }

      // Coincidencia con duración o formato
      if (wantsSeries) {
        score += item.isSeries ? 7 : -3;
      } else if (duration !== 'Cualquier duración' && item.isSeries) {
        score -= 4;
      }

      if (wantsShort) {
        score += !item.isSeries && item.minutes <= 120 ? 4 : -2;
      } else if (duration === 'Hasta 2 horas y media' && !item.isSeries && item.minutes <= 150) {
        score += 2;
      }

      if (wantsRecent && Number(item.year) >= 2018) {
        score += 3;
      }

      // Penalizar obras ya mostradas para ofrecer siempre variedad real
      if (excludeRecent && item.id === lastShownId) {
        score -= 100;
      } else if (shownHistory.includes(item.id)) {
        score -= 4;
      }

      return { item, score };
    });

    scored.sort((a, b) => b.score - a.score);
    const chosen = scored[0].item;
    shownHistory.push(chosen.id);
    if (shownHistory.length > 8) {
      shownHistory.shift();
    }
    return chosen;
  }

  // Construir una explicación natural y personalizada según lo que pidió el usuario
  function composePersonalizedRationale(film, rawPrompt, mode, correctionNote) {
    const mood = selectMood.value;
    const duration = selectDuration.value;

    let opening = '';
    if (mode === 'refine' && correctionNote) {
      opening = `Tomando en cuenta su indicación («${correctionNote}»), hemos ajustado la selección hacia «${film.title}». `;
    } else if (mode === 'regenerate') {
      opening = `Como alternativa diferente para su búsqueda, le proponemos «${film.title}». `;
    } else {
      const activeFilters = [];
      if (mood !== 'Cualquier tono') activeFilters.push(`tono ${mood.toLowerCase()}`);
      if (duration !== 'Cualquier duración') activeFilters.push(duration.toLowerCase());

      if (activeFilters.length > 0) {
        opening = `Considerando su interés y los filtros seleccionados (${activeFilters.join(', ')}), «${film.title}» encaja de forma sobresaliente. `;
      } else {
        opening = `A partir de los elementos descritos en su consulta, «${film.title}» resulta una opción ideal. `;
      }
    }

    return opening + film.synopsis;
  }

  // Volcar los datos de la obra en la tarjeta de respuesta
  function populateResponseCard(film, promptUsed, mode, correctionNote = '') {
    refinementBadge.classList.toggle('hidden', mode !== 'refine');
    if (mode === 'regenerate') {
      refinementBadge.textContent = 'Nueva alternativa generada';
      refinementBadge.classList.remove('hidden');
    } else if (mode === 'refine') {
      refinementBadge.textContent = 'Ajustada según su corrección';
    }

    displayedUserQuery.textContent = correctionNote
      ? `«${promptUsed}» — Corrección aplicada: «${correctionNote}»`
      : `«${promptUsed}»`;

    moviePoster.className = `poster-frame ${film.posterTheme}`;
    movieCatalog.textContent = film.catalogCode;
    posterMotif.innerHTML = film.motif;
    movieYear.textContent = film.year;

    movieTitle.textContent = film.title;
    movieDirector.textContent = film.director;
    movieMatch.textContent = film.affinity;

    movieMeta.innerHTML = film.meta
      .map((tag) => `<span class="meta-tag">${tag}</span>`)
      .join('');

    aiResponseText.textContent = composePersonalizedRationale(
      film,
      promptUsed,
      mode,
      correctionNote
    );

    moviePlatforms.innerHTML =
      `<span class="availability-label">Disponible en:</span>` +
      film.platforms.map((p) => `<span class="platform-pill">${p}</span>`).join('');

    refinePanel.classList.add('hidden');
    refineInput.value = '';
    resetUtilityFeedback();
  }

  // Ejecutar el flujo completo y realista de procesamiento de la IA
  function processUserConsultation({ mode = 'initial', correctionNote = '' } = {}) {
    if (isProcessing) return;

    const basePrompt = userPrompt.value.trim();
    clearTimeout(activeTimerStep);
    clearTimeout(activeTimerDone);

    // Activar estado ocupado
    isProcessing = true;
    btnGenerate.disabled = true;
    btnGenerateLabel.textContent = 'Procesando...';
    headerStatusText.textContent = 'Analizando solicitud...';
    statusDot.classList.add('busy');

    loadingStepText.textContent =
      mode === 'refine'
        ? 'Aplicando su corrección sobre los criterios de búsqueda...'
        : mode === 'regenerate'
        ? 'Buscando otra alternativa acorde en el catálogo...'
        : 'Interpretando género, atmósfera y preferencias...';

    showRightPanelState('loading');

    activeTimerStep = setTimeout(() => {
      loadingStepText.textContent = 'Verificando afinidad temática y disponibilidad...';
    }, 650);

    activeTimerDone = setTimeout(() => {
      isProcessing = false;
      btnGenerate.disabled = false;
      btnGenerateLabel.textContent = 'Generar recomendación';
      headerStatusText.textContent = 'Asistente disponible';
      statusDot.classList.remove('busy');

      const combinedQuery = correctionNote ? `${basePrompt} ${correctionNote}` : basePrompt;
      const check = validateConsultation(combinedQuery);

      if (!check.canRespond) {
        errorHeading.textContent = check.heading;
        errorText.textContent = check.reason;
        showRightPanelState('error');
        return;
      }

      const excludeRecent = mode === 'regenerate' || mode === 'refine';
      const selectedFilm = selectBestMatch(combinedQuery, excludeRecent);
      populateResponseCard(selectedFilm, basePrompt, mode, correctionNote);
      showRightPanelState('response');
    }, 1350);
  }

  // Envío principal del formulario
  recommendationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    processUserConsultation({ mode: 'initial' });
  });

  // Opción 1 de control: Corregir resultado
  btnOpenRefine.addEventListener('click', () => {
    refinePanel.classList.toggle('hidden');
    if (!refinePanel.classList.contains('hidden')) {
      refineInput.focus();
    }
  });

  btnCancelRefine.addEventListener('click', () => {
    refinePanel.classList.add('hidden');
  });

  function submitRefinement() {
    const note = refineInput.value.trim();
    if (!note) {
      refineInput.focus();
      return;
    }
    processUserConsultation({ mode: 'refine', correctionNote: note });
  }

  btnApplyRefine.addEventListener('click', submitRefinement);
  refineInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      submitRefinement();
    }
  });

  // Opción 2 de control: Editar solicitud original en el panel izquierdo
  function focusOriginalPrompt() {
    userPrompt.focus();
    userPrompt.setSelectionRange(userPrompt.value.length, userPrompt.value.length);
    textareaBox.classList.add('highlight-focus');
    setTimeout(() => {
      textareaBox.classList.remove('highlight-focus');
    }, 1400);
  }

  btnEditPrompt.addEventListener('click', focusOriginalPrompt);
  btnFocusPromptFromError.addEventListener('click', focusOriginalPrompt);

  // Opción 3 de control: Volver a generar otra alternativa distinta
  btnRegenerate.addEventListener('click', () => {
    processUserConsultation({ mode: 'regenerate' });
  });

  // Botones para indicar si el resultado fue útil
  function resetUtilityFeedback() {
    btnUsefulYes.classList.remove('active-useful');
    btnUsefulNo.classList.remove('active-not-useful');
    btnUsefulYes.setAttribute('aria-pressed', 'false');
    btnUsefulNo.setAttribute('aria-pressed', 'false');
    feedbackConfirmMsg.classList.add('hidden');
    feedbackConfirmMsg.classList.remove('note-negative');
  }

  btnUsefulYes.addEventListener('click', () => {
    btnUsefulYes.classList.add('active-useful');
    btnUsefulNo.classList.remove('active-not-useful');
    btnUsefulYes.setAttribute('aria-pressed', 'true');
    btnUsefulNo.setAttribute('aria-pressed', 'false');
    feedbackConfirmMsg.classList.remove('note-negative', 'hidden');
    feedbackConfirmMsg.textContent =
      'Gracias por su valoración. Se ha registrado que esta recomendación resultó acertada.';
  });

  btnUsefulNo.addEventListener('click', () => {
    btnUsefulNo.classList.add('active-not-useful');
    btnUsefulYes.classList.remove('active-useful');
    btnUsefulNo.setAttribute('aria-pressed', 'true');
    btnUsefulYes.setAttribute('aria-pressed', 'false');
    feedbackConfirmMsg.classList.add('note-negative');
    feedbackConfirmMsg.classList.remove('hidden');
    feedbackConfirmMsg.textContent =
      'Entendido. Puede indicar abajo qué desea corregir o pulsar «Volver a generar» para ver otra obra.';
    refinePanel.classList.remove('hidden');
    refineInput.focus();
  });
});
