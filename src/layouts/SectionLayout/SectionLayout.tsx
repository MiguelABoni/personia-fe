import { AcercaDeButton } from '../../components/AcercaDeButton/AcercaDeButton';
import { Header } from '../../components/Header/Header';
import { LogosComponent } from '../../components/LogosComponent/LogosComponent';
import { SX_LAYOUT } from '../../constants/sx/sxLayout';
import { SX_LOGOS_COMPONENT } from '../../constants/sx/sxLogosComponent';
import { FC, ReactElement } from 'react';
import { Box, useMediaQuery } from '@mui/material';

export const SectionLayout: FC<{
  children: ReactElement;
  aboutPage?: boolean;
}> = ({ children, aboutPage }) => {
  const mediaMobile = useMediaQuery('(max-width: 767px)');

  return (
    <>
      <Header />
      <Box sx={SX_LAYOUT.SECTION_CONTAINER(mediaMobile)}>
        {children}
        {!aboutPage && <AcercaDeButton />}
      </Box>
      {mediaMobile && <LogosComponent sx={SX_LOGOS_COMPONENT.CONTAINER} />}
    </>
  );
};
