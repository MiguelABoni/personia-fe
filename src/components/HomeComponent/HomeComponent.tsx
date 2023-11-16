import { CONTENT } from '../../constants/content';
import { PATHS } from '../../constants/paths';
import { SX_GLOBAL } from '../../constants/sx/sxGlobal';
import { SX_HOME } from '../../constants/sx/sxHome';
import { useYearsModal } from '../../containers/useYearsModal/useYearsModal';
import { YearsModal } from '../YearsModal/YearsModal';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import TableChartRoundedIcon from '@mui/icons-material/TableChartRounded';
import { Button, Stack, Typography, useMediaQuery } from '@mui/material';

export const HomeComponent: FC = () => {
  const mediaSM = useMediaQuery('(max-width: 768px)');

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
  } = useYearsModal({ isHeader: false });

  const handleTablesClick = () => {
    setPath(PATHS.TABLES);
    setOpen(true);
  };

  const handleGraphicsClick = () => {
    setPath(PATHS.GRAPHICS);
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
      <Stack sx={SX_HOME.FIRST_CONTAINER}>
        <Typography variant='superTitle' sx={SX_GLOBAL.CENTER_TEXT}>
          {CONTENT.HOME_TITLE}
        </Typography>
        <Typography variant='superText' sx={SX_GLOBAL.CENTER_TEXT}>
          {CONTENT.HOME_DESCRIPTION}
        </Typography>
        <Stack sx={SX_HOME.SECOND_CONTAINER}>
          <Link to={PATHS.DASHBOARD}>
            <Button
              variant='contained'
              color='primary'
              startIcon={<DashboardRoundedIcon />}
              sx={[
                { width: '100%' },
                SX_HOME.BUTTON_LARGE,
                SX_HOME.BUTTON_BLUE,
              ]}
            >
              {CONTENT.DASHBOARD_TITLE}
            </Button>
          </Link>
          <Stack sx={SX_HOME.THIRD_CONTAINER}>
            <Button
              variant='contained'
              color='secondary'
              startIcon={<LeaderboardRoundedIcon />}
              onClick={handleGraphicsClick}
              sx={[
                { flex: 1, minWidth: '200px' },
                SX_HOME.BUTTON_SMALL,
                SX_HOME.BUTTON_YELLOW,
              ]}
            >
              {CONTENT.GRAPHICS_TITLE}
            </Button>
            <Button
              variant='contained'
              color='secondary'
              startIcon={<TableChartRoundedIcon />}
              onClick={handleTablesClick}
              sx={[
                { flex: 1, minWidth: '200px' },
                SX_HOME.BUTTON_SMALL,
                SX_HOME.BUTTON_YELLOW,
              ]}
            >
              {CONTENT.TABLES_TITLE}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
