import { ServiciosComponent } from '../../components/ServiciosComponent/ServiciosComponent';
import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { FC } from 'react';
import { Helmet } from 'react-helmet';

export const Servicios: FC = () => {
  return (
    <>
      <Helmet>
        <title>PersonIA - Servicios</title>
        <meta name='description' content='PersonIA - Servicios' />
      </Helmet>
      <SectionLayout>
        <ServiciosComponent />
      </SectionLayout>
    </>
  );
};
