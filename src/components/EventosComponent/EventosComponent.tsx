import { CONTENT } from '../../constants/content';
import { useTables } from '../../containers/useTables/useTables';
import {
  getEventosDia,
  getEventosEps,
  getEventosSavia,
  getEventosSura,
} from '../../services/eventos/eventos.services';
import { ImageFetchComponent } from '../ImageFetchComponent/ImageFetchComponent';
import { SectionComponent } from '../SectionComponent/SectionComponent';
import { FC } from 'react';
import { CircularProgress, Stack, useMediaQuery } from '@mui/material';

export const EventosComponent: FC = () => {
  const mediaSM = useMediaQuery('(max-width: 768px)');

  const { data: dataEventosDia, isFetching: isFetchingEventosDia } = useTables({
    queryKey: ['eventos-dia'],
    queryFn: getEventosDia,
  });

  const { data: dataEventosSura, isFetching: isFetchingEventosSura } =
    useTables({
      queryKey: ['eventos-sura'],
      queryFn: getEventosSura,
    });

  const { data: dataEventosEps, isFetching: isFetchingEventosEps } = useTables({
    queryKey: ['eventos-eps'],
    queryFn: getEventosEps,
  });

  const { data: dataEventosSavia, isFetching: isFetchingEventosSavia } =
    useTables({
      queryKey: ['eventos-savia'],
      queryFn: getEventosSavia,
    });

  return (
    <>
      <Stack
        flexDirection='column'
        gap={5}
        padding={mediaSM ? '0 1rem' : '0 4rem'}
      >
        <SectionComponent
          title='Eventos'
          description={CONTENT.EVENTS_DESCRIPTION}
        />
      </Stack>
      {isFetchingEventosDia ||
      isFetchingEventosSura ||
      isFetchingEventosEps ||
      isFetchingEventosSavia ? (
        <Stack
          m='2rem 0'
          justifyContent='center'
          alignItems='center'
          minHeight='250px'
        >
          <CircularProgress size={40} />
        </Stack>
      ) : (
        <>
          <ImageFetchComponent
            data={dataEventosDia}
            alt='Eventos Dia'
            mediaSM={mediaSM}
          />
          <ImageFetchComponent
            data={dataEventosSura}
            alt='Eventos Sura'
            mediaSM={mediaSM}
          />
          <ImageFetchComponent
            data={dataEventosEps}
            alt='Eventos Eps'
            mediaSM={mediaSM}
          />
          <ImageFetchComponent
            data={dataEventosSavia}
            alt='Eventos Savia'
            mediaSM={mediaSM}
          />
        </>
      )}
    </>
  );
};
