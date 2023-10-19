export const SX_HOME = {
  FIRST_CONTAINER: {
    width: '70%',
    gap: '5rem',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '1000px',
  },
  SECOND_CONTAINER: { width: '100%', gap: '3rem', maxWidth: '1000px' },
  THIRD_CONTAINER: {
    flexDirection: 'row',
    gap: '3rem',
    flexWrap: 'wrap',
  },
  BUTTON_LARGE: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  BUTTON_SMALL: {
    flex: 1,
    minWidth: '200px',
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  BUTTON_BLUE: {
    '&:hover': { backgroundColor: '#3da0cf' },
  },
  BUTTON_YELLOW: { '&:hover': { backgroundColor: '#ffc361' } },
};
