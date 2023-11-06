import { AcercaDeButton } from '../../components/AcercaDeButton/AcercaDeButton';
import { SX_LAYOUT } from '../../constants/sx/sxLayout';
import { FC, ReactElement } from 'react';
import { Box } from '@mui/material';

export const SectionLayout: FC<{
  children: ReactElement;
  aboutPage?: boolean;
}> = ({ children, aboutPage }) => {
  return (
    <Box sx={SX_LAYOUT.SECTION_CONTAINER}>
      {children}
      {!aboutPage && <AcercaDeButton />}
    </Box>
  );
};
