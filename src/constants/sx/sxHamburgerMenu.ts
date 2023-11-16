import { theme } from '../../theme/theme';

export const SX_HAMBURGER_MENU = {
  DRAWER: {
    '& .MuiDrawer-paper': {
      display: 'block',
      width: '100%',
      maxWidth: '300px',
      padding: '1rem',
      backgroundColor: theme.palette.gray.main,
      color: theme.palette.black.main,
    },
  },
};
