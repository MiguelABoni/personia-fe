import { TablasComponent } from '../../components/TablasComponent/TablasComponent';
import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { FC } from 'react';
import { Helmet } from 'react-helmet';

export const Tablas: FC = () => {
  return (
    <>
      <Helmet>
        <title>PersonIA - Tablas</title>
        <meta name='description' content='PersonIA - Tablas' />
      </Helmet>
      <SectionLayout>
        <TablasComponent />
      </SectionLayout>
    </>
  );
};
