import { SECTION_PATHS } from './paths';

export const TABLE_SECTIONS = [
  {
    id: 1,
    title: 'Municipios',
    description:
      'Conoce los municipios que han sido más afectados y la cantidad de soluciones que se han podido brindar',
    path: SECTION_PATHS.MUNICIPIOS,
    imageUrl: 'dialogo.svg',
  },
  {
    id: 2,
    title: 'Comunas',
    description:
      'Conoce las comunas que han sido más afectadas y la cantidad de soluciones que se han podido brindar',
    path: SECTION_PATHS.COMUNAS,
    imageUrl: 'personal.svg',
  },
  {
    id: 3,
    title: 'Servicios',
    description:
      'Conoce los servicios que han sido atendidos y la cantidad de soluciones que se han podido brindar',
    path: SECTION_PATHS.SERVICES,
    imageUrl: 'sede.svg',
  },
  {
    id: 4,
    title: 'Temas',
    description:
      'Conoce los temas más mencionados y la cantidad de soluciones que se han podido brindar',
    path: SECTION_PATHS.TEMAS,
    imageUrl: 'discurso.svg',
  },
  {
    id: 5,
    title: 'Subtemas',
    description:
      'Conoce los subtemas más mencionados y la cantidad de soluciones que se han podido brindar',
    path: SECTION_PATHS.SUB_TEMAS,
    imageUrl: 'panorama.svg',
  },
];
