export const SX_IMAGE_FETCH_COMPONENT = {
  CONTAINER: (mediaSM?: boolean) => ({
    textAlign: 'center',
    margin: '4rem auto 0 auto',
    maxWidth: '800px',
    maxHeight: mediaSM ? '50vh' : '65vh',
    borderRadius: '10px',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    overflow: 'auto',
  }),
};
