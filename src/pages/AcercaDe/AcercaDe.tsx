import { AcercaDeComponent } from '../../components/AcercaDeComponent/AcercaDeComponent';
import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { FC } from 'react';
import { Helmet } from 'react-helmet';

export const AcercaDe: FC = () => {
  return (
    <>
      <Helmet>
        <title>PersonIA - Acerca De</title>
        <meta name='description' content='PersonIA - Acerca De' />
      </Helmet>
      <SectionLayout aboutPage>
        <AcercaDeComponent />
      </SectionLayout>
    </>
  );
};
