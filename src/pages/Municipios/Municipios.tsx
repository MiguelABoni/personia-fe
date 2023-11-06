import { MunicipiosComponent } from '../../components/MunicipiosComponent/MunicipiosComponent';
import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { FC } from 'react';
import { Helmet } from 'react-helmet';

export const Municipios: FC = () => {
  return (
    <>
      <Helmet>
        <title>PersonIA - Municipios</title>
        <meta name='description' content='PersonIA - Municipios' />
      </Helmet>
      <SectionLayout>
        <MunicipiosComponent />
      </SectionLayout>
    </>
  );
};
