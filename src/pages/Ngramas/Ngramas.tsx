import { NgramasComponent } from '../../components/NgramasComponent/NgramasComponent';
import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { FC } from 'react';
import { Helmet } from 'react-helmet';

export const Ngramas: FC = () => {
  return (
    <>
      <Helmet>
        <title>PersonIA - Ngramas</title>
        <meta name='description' content='PersonIA - Ngramas' />
      </Helmet>
      <SectionLayout>
        <NgramasComponent />
      </SectionLayout>
    </>
  );
};
