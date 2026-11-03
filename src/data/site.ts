export type Lugar = {
  id: string;
  nombre: string;
  corto: string;
  categoria: string;
  descripcion: string;
  imagen: string;
  alt: string;
  posicion?: string;
};

/** Los lugares que ya viven en la app, con sus fotos reales. */
export const lugares: Lugar[] = [
  {
    id: 'parroquia',
    nombre: 'Parroquia Nuestra Señora del Pilar',
    corto: 'Parroquia del Pilar',
    categoria: 'Historia',
    descripcion:
      'El corazón histórico de la ciudad, con sus torres mirando de frente a la plaza.',
    imagen: '/lugares/parroquia.jpg',
    alt: 'Fachada y torres de la Parroquia Nuestra Señora del Pilar',
    posicion: '50% 42%',
  },
  {
    id: 'reserva',
    nombre: 'Reserva Natural Municipal',
    corto: 'Reserva Natural',
    categoria: 'Naturaleza',
    descripcion:
      'Senderos, aves y aire puro a minutos del centro. Pilar también es verde.',
    imagen: '/lugares/reserva.jpg',
    alt: 'Entrada de la Reserva Natural Municipal del Pilar',
    posicion: '78% 50%',
  },
  {
    id: 'palacio',
    nombre: 'Palacio Municipal',
    corto: 'Palacio Municipal',
    categoria: 'Arquitectura',
    descripcion:
      'Una fachada blanca con balcones y banderas que cuenta la historia de Pilar.',
    imagen: '/lugares/palacio.jpg',
    alt: 'Edificio del Palacio Municipal de Pilar con banderas argentinas',
    posicion: '50% 44%',
  },
  {
    id: 'plaza',
    nombre: 'Plaza 12 de Octubre',
    corto: 'Plaza 12 de Octubre',
    categoria: 'Ciudad',
    descripcion:
      'El punto de encuentro de siempre: de día para caminar, de noche para quedarse.',
    imagen: '/lugares/plaza.jpg',
    alt: 'Vista aérea nocturna de la Plaza 12 de Octubre de Pilar',
    posicion: '50% 48%',
  },
];

export const stats = [
  { valor: '18', etiqueta: 'lugares para descubrir' },
  { valor: '3', etiqueta: 'formas de recorrer' },
  { valor: '24/7', etiqueta: 'guía virtual con IA' },
  { valor: 'ES/EN', etiqueta: 'en tu idioma' },
];

export const pasos = [
  {
    titulo: 'Elegí qué te pinta',
    texto:
      'Historia, naturaleza, gastronomía o una mezcla de todo. PaseAR te muestra qué hay cerca.',
  },
  {
    titulo: 'Armá tu recorrido',
    texto:
      'Mirá el mapa, sumá lugares y consultá a la guía virtual cuando no sepas por dónde seguir.',
  },
  {
    titulo: 'Salí a pasear',
    texto:
      'Seguí la ruta a pie, en bici o en auto. Pilar se disfruta mejor sin apuro.',
  },
];
