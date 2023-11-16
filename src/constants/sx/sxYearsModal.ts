import { theme } from '../../theme/theme';

export const SX_YEARS_MODAL = {
  FIRST_CONTAINER: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SECOND_CONTAINER: (mediaSM?: boolean) => ({
    maxWidth: mediaSM ? '400px' : '800px',
    gap: '1rem',
    padding: '3rem',
    borderRadius: '10px',
    backgroundColor: theme.palette.white.main,
    outline: 'none',
  }),
  WAIT_CONTAINER: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
};
