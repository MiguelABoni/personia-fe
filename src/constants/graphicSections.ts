import { SECTION_PATHS } from './paths';

export const GRAPHIC_SECTIONS = [
  {
    id: 1,
    title: 'Eventos',
    description:
      'Los temas más mencionados sobre vulnerabilidad durante el día y también a lo largo del año.',
    path: SECTION_PATHS.EVENTS,
    imageUrl: 'indicaciones.svg',
  },
  {
    id: 2,
    title: 'Tópicos',
    description:
      'Técnicas para identificar los temas en los casos presentados a la Personería de Medellín.',
    path: SECTION_PATHS.TOPICS,
    imageUrl: 'adopcion.svg',
  },
  {
    id: 3,
    title: 'Ngramas',
    description:
      'Combinaciones de palabras que proporcionn una adecuada comprensión de la información.',
    path: SECTION_PATHS.NGRAMAS,
    imageUrl: 'adulto_mayor.svg',
  },
  {
    id: 4,
    title: 'WordCloud',
    description:
      'Identificación de palabras importantes con ayuda de elementos visuales y colores atractivos.',
    path: SECTION_PATHS.WORD_CLOUD,
    imageUrl: 'acercaDe.svg',
  },
];
