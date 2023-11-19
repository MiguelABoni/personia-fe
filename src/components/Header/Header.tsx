import { CONTENT } from '../../constants/content';
import { PATHS } from '../../constants/paths';
import { SX_HEADER } from '../../constants/sx/sxHeader';
import { useYearsModal } from '../../containers/useYearsModal/useYearsModal';
import { theme } from '../../theme/theme';
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu';
import { LogosComponent } from '../LogosComponent/LogosComponent';
import { YearsModal } from '../YearsModal/YearsModal';
import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Button,
  Stack,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from '@mui/material';

export const Header: FC = () => {
  const mediaSM = useMediaQuery('(max-width: 768px)');
  const mediaMobile = useMediaQuery('(max-width: 767px)');
  const mediaTablet = useMediaQuery(
    '(min-width: 768px) and (max-width: 1023px)',
  );

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

  if (mediaMobile) {
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
        <AppBar position='static' sx={SX_HEADER.MOBILE_CONTAINER}>
          <HamburgerMenu
            handleGraphicsClick={handleGraphicsClick}
            handleTablesClick={handleTablesClick}
          />
          <Typography
            data-testid='app-title'
            color={theme.palette.black.main}
            sx={{
              fontSize: '2rem',
              fontWeight: 700,
            }}
          >
            {CONTENT.APP_TITLE}
          </Typography>
        </AppBar>
      </>
    );
  }

  if (mediaTablet) {
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
        <AppBar position='static' sx={SX_HEADER.TABLET_FIRST_CONTAINER}>
          <Stack sx={SX_HEADER.TABLET_SECOND_CONTAINER}>
            <HamburgerMenu
              handleGraphicsClick={handleGraphicsClick}
              handleTablesClick={handleTablesClick}
            />
            <Typography
              data-testid='app-title'
              color={theme.palette.black.main}
              sx={{
                fontSize: '2rem',
                fontWeight: 700,
              }}
            >
              {CONTENT.APP_TITLE}
            </Typography>
          </Stack>
          <LogosComponent sx={SX_HEADER.SECOND_CONTAINER} />
        </AppBar>
      </>
    );
  }

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
            data-testid='app-title'
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
              onClick={() => {
                if (pathname !== PATHS.GRAPHICS) handleGraphicsClick();
              }}
              sx={SX_HEADER.TAB}
            />
            <Tab
              label='Tablas'
              value='/tablas'
              component={Button}
              onClick={() => {
                if (pathname !== PATHS.TABLES) handleTablesClick();
              }}
              sx={SX_HEADER.TAB}
            />
          </Tabs>
        </Stack>
        <LogosComponent sx={SX_HEADER.SECOND_CONTAINER} />
      </AppBar>
    </>
  );
};
