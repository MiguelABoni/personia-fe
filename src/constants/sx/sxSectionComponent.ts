export const SX_SECTION_COMPONENT = {
  CONTAINER: (mediaSM: boolean) => ({
    gap: '40px',
    minWidth: '350px',
    flexDirection: mediaSM ? 'column' : 'row',
    alignItems: mediaSM ? 'flex-start' : 'center',
  }),
  TEXT: {
    flex: 1,
    fontWeight: '400',
  },
};
