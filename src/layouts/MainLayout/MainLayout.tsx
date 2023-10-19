import { SX_LAYOUT } from '../../constants/sx/sxLayout';
import { FC, ReactElement } from 'react';
import { Stack } from '@mui/material';

export const MainLayout: FC<{ children: ReactElement }> = ({ children }) => {
  return <Stack sx={SX_LAYOUT.MAIN_CONTAINER}>{children}</Stack>;
};
