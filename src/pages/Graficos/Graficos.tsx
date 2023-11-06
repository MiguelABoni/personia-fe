import { GraficosComponent } from '../../components/GraficosComponent/GraficosComponent';
import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { FC } from 'react';
import { Helmet } from 'react-helmet';

export const Graficos: FC = () => {
  return (
    <>
      <Helmet>
        <title>PersonIA - Graficos</title>
        <meta name='description' content='PersonIA - Graficos' />
      </Helmet>
      <SectionLayout>
        <GraficosComponent />
      </SectionLayout>
    </>
  );
};
