import { FC, ReactElement } from 'react';
import { Stack } from '@mui/material';

export const MainLayout: FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <Stack
      sx={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url(/background_texture.png)',
        backgroundRepeat: 'repeat',
      }}
    >
      {children}
    </Stack>
  );
};
