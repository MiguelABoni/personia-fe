export const SX_ACERCA_DE = {
  FIRST_CONTAINER: (mediaSM: boolean) => ({
    width: mediaSM ? '100%' : '75%',
    padding: mediaSM ? '2rem' : '0rem',
    margin: 'auto',
  }),
  SECOND_CONTAINER: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
  },
  THIRD_CONTAINER: {
    flex: '1',
    gap: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '350px',
  },
  IMAGE_CONTAINER: {
    flex: '1',
    minWidth: '350px',
    maxWidth: '500px',
  },
};
