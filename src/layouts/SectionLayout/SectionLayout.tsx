import { FC, ReactElement } from 'react';
import { Box } from '@mui/material';

export const SectionLayout: FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        padding: '2rem 0',
        backgroundImage: 'url(/background_texture.png)',
        backgroundRepeat: 'repeat',
      }}
    >
      {children}
    </Box>
  );
};
