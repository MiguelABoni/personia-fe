import { SX_LAYOUT } from '../../constants/sx/sxLayout';
import { FC, ReactElement } from 'react';
import { Box } from '@mui/material';

export const SectionLayout: FC<{ children: ReactElement }> = ({ children }) => {
  return <Box sx={SX_LAYOUT.SECTION_CONTAINER}>{children}</Box>;
};
