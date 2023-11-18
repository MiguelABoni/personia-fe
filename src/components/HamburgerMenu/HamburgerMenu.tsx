import { CONTENT } from '../../constants/content';
import { PATHS } from '../../constants/paths';
import { SX_HAMBURGER_MENU } from '../../constants/sx/sxHamburgerMenu';
import { theme } from '../../theme/theme';
import { HamburgerItem } from '../HamburgerItem/HamburgerItem';
import { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import TableChartRoundedIcon from '@mui/icons-material/TableChartRounded';
import { Button, Drawer, Stack } from '@mui/material';

export const HamburgerMenu: FC<{
  handleGraphicsClick: () => void;
  handleTablesClick: () => void;
}> = ({ handleGraphicsClick, handleTablesClick }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      <Button
        color='blueLight'
        sx={{ position: 'absolute', left: '1rem', borderRadius: '10px' }}
        onClick={toggleDrawer(true)}
      >
        <MenuRoundedIcon
          sx={{
            color: theme.palette.black.main,
            fontSize: '50px',
          }}
        />
      </Button>
      <Drawer
        anchor='left'
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={SX_HAMBURGER_MENU.DRAWER}
      >
        <Stack
          sx={{
            height: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Stack gap={3} marginBottom='24px'>
            <Button
              color='black'
              sx={{
                maxWidth: '66px',
                borderRadius: '10px',
                marginBottom: '2rem',
              }}
              onClick={toggleDrawer(false)}
            >
              <CloseIcon
                sx={{
                  color: theme.palette.black.main,
                  fontSize: '50px',
                }}
              />
            </Button>
            <HamburgerItem
              title='Inicio'
              startIcon={<HomeRoundedIcon />}
              onClick={() => {
                if (pathname !== PATHS.HOME) {
                  navigate(PATHS.HOME);
                } else {
                  setIsDrawerOpen(false);
                }
              }}
            />
            <HamburgerItem
              title={CONTENT.DASHBOARD_TITLE}
              startIcon={<DashboardRoundedIcon />}
              onClick={() => {
                if (pathname !== PATHS.DASHBOARD) {
                  navigate(PATHS.DASHBOARD);
                } else {
                  setIsDrawerOpen(false);
                }
              }}
            />
            <HamburgerItem
              title={CONTENT.GRAPHICS_TITLE}
              startIcon={<LeaderboardRoundedIcon />}
              onClick={() => {
                if (pathname !== PATHS.GRAPHICS) {
                  handleGraphicsClick();
                } else {
                  setIsDrawerOpen(false);
                }
              }}
            />
            <HamburgerItem
              title={CONTENT.TABLES_TITLE}
              startIcon={<TableChartRoundedIcon />}
              onClick={() => {
                if (pathname !== PATHS.TABLES) {
                  handleTablesClick();
                } else {
                  setIsDrawerOpen(false);
                }
              }}
            />
          </Stack>
          <HamburgerItem
            title='Acerca De'
            startIcon={<InfoRoundedIcon />}
            onClick={() => {
              if (pathname !== PATHS.ABOUT) {
                navigate(PATHS.ABOUT);
              } else {
                setIsDrawerOpen(false);
              }
            }}
          />
        </Stack>
      </Drawer>
    </>
  );
};
