import { theme } from '../../theme/theme';

export const SX_SECTION_CARD = {
  FIRST_CONTAINER: (url: string) => ({
    width: '300px',
    minHeight: '250px',
    maxHeight: '500px',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: '10px',
    backgroundImage: `url(/${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    outline: '2px solid transparent',
    outlineOffset: '5px',
    transition: 'transform 0.3s, box-shadow 0.3s, outline 0.3s',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0px 8px 8px 0px rgba(0, 0, 0, 0.25)',
      outline: `2px solid ${theme.palette.primary.main}`,
      outlineOffset: '5px',
    },
  }),
  SECOND_CONTAINER: {
    maxHeight: '200px',
    gap: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    borderRadius: '0 0 10px 10px',
    backgroundColor: theme.palette.white.main,
  },
};
