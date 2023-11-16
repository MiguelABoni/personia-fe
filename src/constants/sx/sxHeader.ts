import { theme } from '../../theme/theme';

export const SX_HEADER = {
  FIRST_CONTAINER: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '0 8px 8px 0',
    padding: '.5rem',
  },
  SECOND_CONTAINER: {
    width: '20%',
    minWidth: '300px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    padding: '.5rem',
  },
  MOBILE_CONTAINER: {
    height: '78px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
  },
  TABLET_FIRST_CONTAINER: {
    height: '78px',
    flexDirection: 'row',
    backgroundColor: theme.palette.white.main,
  },
  TABLET_SECOND_CONTAINER: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '0 8px 8px 0',
    padding: '.5rem',
  },
  TAB: {
    minWidth: '150px',
    marginRight: '1rem',
    borderRadius: '8px 8px 0 0',
    fontSize: '1.25rem',
    fontWeight: 700,
    textTransform: 'capitalize',
    '&:hover': { backgroundColor: '#3da0cf' },
    '&.Mui-selected': {
      backgroundColor: '#73bddf',
      color: theme.palette.black.main,
      '&:hover': { backgroundColor: '#83c1dd' },
    },
  },
};
