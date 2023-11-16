import { CONTENT } from '../../constants/content';
import { PATHS } from '../../constants/paths';
import { SX_HEADER } from '../../constants/sx/sxHeader';
import { useYearsModal } from '../../containers/useYearsModal/useYearsModal';
import { theme } from '../../theme/theme';
import { YearsModal } from '../YearsModal/YearsModal';
import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Button,
  Stack,
  Tab,
  Tabs,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';

export const Header: FC = () => {
  const mediaSM = useMediaQuery('(max-width: 768px)');

  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();

  const {
    open,
    setOpen,
    year,
    setYear,
    yearOptions,
    error,
    isFetching,
    loadingCSV,
    handleSubmit,
    handleClose,
    setPath,
    title,
    description,
  } = useYearsModal({ isHeader: true });

  const handleGraphicsClick = () => {
    setPath(PATHS.GRAPHICS);
    setOpen(true);
  };

  const handleTablesClick = () => {
    setPath(PATHS.TABLES);
    setOpen(true);
  };

  return (
    <>
      <YearsModal
        title={title}
        description={description}
        open={open}
        year={year}
        setYear={setYear}
        yearOptions={yearOptions}
        error={error}
        isFetching={isFetching}
        loadingCSV={loadingCSV}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        mediaSM={mediaSM}
      />
      <AppBar
        position='static'
        sx={{ flexDirection: 'row', backgroundColor: theme.palette.white.main }}
      >
        <Stack sx={SX_HEADER.FIRST_CONTAINER}>
          <Typography
            color={theme.palette.black.main}
            sx={{
              marginLeft: '1rem',
              fontSize: '2rem',
              fontWeight: 700,
            }}
          >
            {CONTENT.APP_TITLE}
          </Typography>
          <Tabs
            variant='scrollable'
            value={`/${pathname.split('/')[1]}`}
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: theme.palette.blueLight.main,
                borderRadius: '8px 0 0 8px',
              },
            }}
          >
            <Tab
              label='Inicio'
              value='/'
              component={Button}
              onClick={() => navigate(PATHS.HOME)}
              sx={SX_HEADER.TAB}
            />
            <Tab
              label='Dashboard'
              value='/dashboard'
              component={Button}
              onClick={() => navigate(PATHS.DASHBOARD)}
              sx={SX_HEADER.TAB}
            />
            <Tab
              label='Gráficos'
              value='/graficos'
              component={Button}
              onClick={handleGraphicsClick}
              sx={SX_HEADER.TAB}
            />
            <Tab
              label='Tablas'
              value='/tablas'
              component={Button}
              onClick={handleTablesClick}
              sx={SX_HEADER.TAB}
            />
          </Tabs>
        </Stack>
        <Stack sx={SX_HEADER.SECOND_CONTAINER}>
          <Button href='https://www.personeriamedellin.gov.co/' target='_blank'>
            <Tooltip title='Personería De Medellín'>
              <img
                src='../logo_personeria.jpeg'
                alt='Logo Personeria De Medellín'
                style={{ width: 50 }}
              />
            </Tooltip>
          </Button>
          <Button href='https://www.politecnicojic.edu.co/' target='_blank'>
            <Tooltip title='Politécnico Colombiano Jaime Isaza Cadavid'>
              <img
                src='../logo_poli.jpeg'
                alt='Logo Politécnico Colombiano Jaime Isaza Cadavid'
                style={{ width: 50 }}
              />
            </Tooltip>
          </Button>
          <Button href='https://udemedellin.edu.co/' target='_blank'>
            <Tooltip title='Universidad De Medellín'>
              <img
                src='../logo_udem.svg'
                alt='Logo Universidad De Medellín'
                style={{ width: 50 }}
              />
            </Tooltip>
          </Button>
        </Stack>
      </AppBar>
    </>
  );
};
