import { CONTENT } from '../../constants/content';
import { PATHS } from '../../constants/paths';
import { SX_GLOBAL } from '../../constants/sx/sxGlobal';
import { SX_HOME } from '../../constants/sx/sxHome';
import { FC } from 'react';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import TableChartRoundedIcon from '@mui/icons-material/TableChartRounded';
import { Button, Stack, Typography } from '@mui/material';

export const HomeComponent: FC = () => {
  return (
    <Stack sx={SX_HOME.FIRST_CONTAINER}>
      <Typography variant='superTitle' sx={SX_GLOBAL.CENTER_TEXT}>
        {CONTENT.HOME_TITLE}
      </Typography>
      <Typography variant='superText' sx={SX_GLOBAL.CENTER_TEXT}>
        {CONTENT.HOME_DESCRIPTION}
      </Typography>
      <Stack sx={SX_HOME.SECOND_CONTAINER}>
        <Button
          variant='contained'
          color='primary'
          startIcon={<DashboardRoundedIcon />}
          href={PATHS.DASHBOARD}
          sx={[SX_HOME.BUTTON_LARGE, SX_HOME.BUTTON_BLUE]}
        >
          {CONTENT.DASHBOARD_TITLE}
        </Button>
        <Stack sx={SX_HOME.THIRD_CONTAINER}>
          <Button
            variant='contained'
            color='secondary'
            startIcon={<LeaderboardRoundedIcon />}
            href={PATHS.GRAPHICS}
            sx={[SX_HOME.BUTTON_SMALL, SX_HOME.BUTTON_YELLOW]}
          >
            {CONTENT.GRAPHICS_TITLE}
          </Button>
          <Button
            variant='contained'
            color='secondary'
            startIcon={<TableChartRoundedIcon />}
            href={PATHS.TABLES}
            sx={[SX_HOME.BUTTON_SMALL, SX_HOME.BUTTON_YELLOW]}
          >
            {CONTENT.TABLES_TITLE}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
