import { CONTENT } from '../../constants/content';
import { SX_YEARS_MODAL } from '../../constants/sx/sxYearsModal';
import { useTables } from '../../containers/useTables/useTables';
import {
  getEventosDia,
  getEventosEps,
  getEventosSavia,
  getEventosSura,
} from '../../services/eventos/eventos.services';
import { theme } from '../../theme/theme';
import { ImageFetchComponent } from '../ImageFetchComponent/ImageFetchComponent';
import { SectionComponent } from '../SectionComponent/SectionComponent';
import { FC } from 'react';
import EmojiObjectsRoundedIcon from '@mui/icons-material/EmojiObjectsRounded';
import {
  CircularProgress,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';

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
          padding='0 1rem'
          justifyContent='center'
          alignItems='center'
          gap={5}
          minHeight='400px'
        >
          <CircularProgress size={40} />
          <Stack sx={[SX_YEARS_MODAL.WAIT_CONTAINER, { gap: '2rem' }]}>
            <EmojiObjectsRoundedIcon color='primary' fontSize='large' />
            <Stack flexDirection='column' gap={1}>
              <Typography variant='h4' color={theme.palette.black.main}>
                {CONTENT.WAIT_MESSAGE}
              </Typography>
              <Typography variant='h4' color={theme.palette.black.main}>
                Apreciamos tu paciencia 😊
              </Typography>
            </Stack>
          </Stack>
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
