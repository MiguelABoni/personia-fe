// import { INITIAL_CHARACTERS } from '../../constants/initialCharacters';
// import { PATHS } from '../../constants/paths';
// import { getCharacters } from '../../services/characters/characters.services';
// import { useQuery } from '@tanstack/react-query';
// import { $Characters } from 'src/types/apiTypes';
// import { useState } from 'react';
// import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import { MainLayout } from '../../layouts/MainLayout/MainLayout';
import { theme } from '../../theme/theme';
import { FC } from 'react';
import { Helmet } from 'react-helmet';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import TableChartRoundedIcon from '@mui/icons-material/TableChartRounded';
import { Button, Stack, Typography } from '@mui/material';

export const Home: FC = () => {
  /** DELETE THIS */
  // const [counter, setCounter] = useState(0);

  // const { data, isFetching } = useQuery<$Characters, Error>({
  //   queryKey: ['characters'],
  //   queryFn: () => getCharacters(),
  //   initialData: INITIAL_CHARACTERS,
  // });

  return (
    <>
      <Helmet>
        <title>PersonIA - Home</title>
        <meta name='description' content='PersonIA - Home' />
      </Helmet>
      <MainLayout>
        <Stack
          sx={{
            width: '70%',
            gap: '5rem',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '1000px',
          }}
        >
          <Typography
            variant='superTitle'
            sx={{ color: theme.palette.black.main, textAlign: 'center' }}
          >
            Accede a detalles claves sobre vulnerabilidad en justicia de
            Medellín
          </Typography>
          <Typography
            variant='superText'
            sx={{ color: theme.palette.black.main, textAlign: 'center' }}
          >
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer
          </Typography>
          <Stack sx={{ width: '100%', gap: '3rem', maxWidth: '1000px' }}>
            <Button
              variant='contained'
              color='primary'
              startIcon={<DashboardRoundedIcon />}
              sx={{
                textTransform: 'capitalize',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#3da0cf' },
              }}
            >
              Dashboard
            </Button>
            <Stack sx={{ flexDirection: 'row', gap: '3rem', flexWrap: 'wrap' }}>
              <Button
                variant='contained'
                color='secondary'
                startIcon={<LeaderboardRoundedIcon />}
                sx={{
                  flex: 1,
                  minWidth: '200px',
                  textTransform: 'capitalize',
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: '#ffc361' },
                }}
              >
                Gráficos
              </Button>
              <Button
                variant='contained'
                color='secondary'
                startIcon={<TableChartRoundedIcon />}
                sx={{
                  flex: 1,
                  minWidth: '200px',
                  textTransform: 'capitalize',
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: '#ffc361' },
                }}
              >
                Tablas
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </MainLayout>
    </>
  );
};
