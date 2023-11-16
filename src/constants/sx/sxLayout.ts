export const SX_LAYOUT = {
  MAIN_CONTAINER: (mediaMobile: boolean) => ({
    height: mediaMobile ? 'calc(100vh - 156px)' : 'calc(100vh - 78px)',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/backgroundTexture.png)',
    backgroundRepeat: 'repeat',
  }),
  SECTION_CONTAINER: (mediaMobile: boolean) => ({
    minHeight: mediaMobile ? 'calc(100vh - 156px)' : 'calc(100vh - 78px)',
    padding: '2rem 0',
    backgroundImage: 'url(/backgroundTexture.png)',
    backgroundRepeat: 'repeat',
  }),
};
