import { TemasComponent } from '../../components/TemasComponent/TemasComponent';
import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { FC } from 'react';
import { Helmet } from 'react-helmet';

export const Temas: FC = () => {
  return (
    <>
      <Helmet>
        <title>PersonIA - Temas</title>
        <meta name='description' content='PersonIA - Temas' />
      </Helmet>
      <SectionLayout>
        <TemasComponent />
      </SectionLayout>
    </>
  );
};
