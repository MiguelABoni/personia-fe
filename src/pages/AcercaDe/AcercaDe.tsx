import { AcercaDeComponent } from '../../components/AcercaDeComponent/AcercaDeComponent';
import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { Helmet } from 'react-helmet';

export const AcercaDe = () => {
  return (
    <>
      <Helmet>
        <title>PersonIA - Acerca De</title>
        <meta name='description' content='PersonIA - Acerca De' />
      </Helmet>
      <SectionLayout>
        <AcercaDeComponent />
      </SectionLayout>
    </>
  );
};
