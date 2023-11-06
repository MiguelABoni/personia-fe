import { ComunasComponent } from '../../components/ComunasComponent/ComunasComponent';
import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { FC } from 'react';
import { Helmet } from 'react-helmet';

export const Comunas: FC = () => {
  return (
    <>
      <Helmet>
        <title>PersonIA - Comunas</title>
        <meta name='description' content='PersonIA - Comunas' />
      </Helmet>
      <SectionLayout>
        <ComunasComponent />
      </SectionLayout>
    </>
  );
};
