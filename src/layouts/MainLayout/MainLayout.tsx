import { AcercaDeButton } from '../../components/AcercaDeButton/AcercaDeButton';
import { Header } from '../../components/Header/Header';
import { LogosComponent } from '../../components/LogosComponent/LogosComponent';
import { SX_LAYOUT } from '../../constants/sx/sxLayout';
import { SX_LOGOS_COMPONENT } from '../../constants/sx/sxLogosComponent';
import { FC, ReactElement } from 'react';
import { Stack, useMediaQuery } from '@mui/material';

export const MainLayout: FC<{ children: ReactElement }> = ({ children }) => {
  const mediaMobile = useMediaQuery('(max-width: 767px)');
  const mediaTablet = useMediaQuery(
    '(min-width: 768px) and (max-width: 1023px)',
  );

  return (
    <>
      <Header />
      <Stack sx={SX_LAYOUT.MAIN_CONTAINER(mediaMobile, mediaTablet)}>
        {children}
        <AcercaDeButton />
      </Stack>
      {mediaMobile && <LogosComponent sx={SX_LOGOS_COMPONENT.CONTAINER} />}
    </>
  );
};
