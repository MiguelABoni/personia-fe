export const SX_LAYOUT = {
  MAIN_CONTAINER: (mediaMobile: boolean, mediaTablet: boolean) => ({
    height: mediaMobile || mediaTablet ? '100%' : 'calc(100vh - 78px)',
    marginY: mediaMobile || mediaTablet ? '4rem' : '0rem',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  SECTION_CONTAINER: (mediaMobile: boolean) => ({
    minHeight: mediaMobile ? 'calc(100vh - 156px)' : 'calc(100vh - 78px)',
    padding: '2rem 0 4rem 0',
  }),
};
